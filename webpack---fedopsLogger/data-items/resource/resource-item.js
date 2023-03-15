import DataItem from "../common/data-item";
import location from "../../global-app-data/location";
import performance from "../../performance/performance";

const RESOURCES_TYPES = {
  xmlhttprequest: {
    count: "countXhr",
    unsupported: "unsprtXhr",
    duration: "timeXhr",
    total: "sizeXhr",
    longest: "longXhr",
    http2: "h2Xhr",
  },
  script: {
    count: "countJs",
    unsupported: "unsprtJs",
    duration: "timeJs",
    total: "sizeJs",
    cached: "cachedJs",
    http2: "h2Js",
  },
  link: {
    // css
    count: "countCss",
    unsupported: "unsprtCss",
    duration: "timeCss",
    total: "sizeCss",
    cached: "cachedCss",
    http2: "h2Css",
  },
  img: {
    count: "countImg",
    unsupported: "unsprtImg",
    duration: "timeImg",
    total: "sizeImg",
    cached: "cachedImages",
    http2: "h2Images",
  },
  fetch: {
    count: "countFetch",
    unsupported: "unsprtFetch",
    duration: "timeFetch",
    total: "sizeFetch",
    cached: "cachedFetch",
    http2: "h2Fetch",
  },
  other: {
    count: "countOther",
    unsupported: "unsprtOther",
    duration: "timeOther",
    total: "sizeOther",
    cached: "cachedOther",
    http2: "h2Other",
  },
};

const CUSTOM_VALIDATORS = {
  link: (resource) => /(.\.css$|.\.css?.)/g.test(resource.name),
};

const durationOf = (item) => item.responseEnd - item.startTime;

function filterResourcesByType(resources, type) {
  const validator = CUSTOM_VALIDATORS[type];
  return resources.filter(
    (r) => type === r.initiatorType && (validator ? validator(r) : true)
  );
}

function calculateTotalSizeOfResource(resources) {
  return resources.reduce(
    (totalSize, resource) => totalSize + resource.transferSize,
    0
  );
}

function calculateResourceLoadLongestDuration(resources) {
  if (resources.length === 0) {
    return 0;
  }
  const longest = resources.reduce((acc, cur) => {
    return durationOf(cur) >= durationOf(acc) ? cur : acc;
  });
  return durationOf(longest);
}

function calculateResourceLoadDuration(resources) {
  if (resources.length === 0) {
    return 0;
  }
  const loadStartStop = {
    startTime: Infinity,
    responseEnd: 0,
  };
  resources.forEach((r) => {
    if (loadStartStop.startTime > r.startTime) {
      loadStartStop.startTime = r.startTime;
    }
    if (loadStartStop.responseEnd < r.responseEnd) {
      loadStartStop.responseEnd = r.responseEnd;
    }
  });
  return loadStartStop.responseEnd - loadStartStop.startTime;
}

function calculatePercentageOfUnsupportedResources(resources) {
  const totalCount = resources.length;
  if (totalCount === 0) {
    return 0;
  }
  const unsupportedCount = resources.filter(isResourceUnsupported).length;
  return Math.round((unsupportedCount / totalCount) * 100);
}

function calculateCachedResourcesPercentage(resources) {
  if (resources.length === 0) {
    return 0;
  }
  const cached = resources.filter((r) => r.transferSize === 0);
  return Math.round((cached.length / resources.length) * 100);
}

function calculatePercentageOfHttp2(resources) {
  if (resources.length === 0) {
    return 0;
  }
  let supported = false;
  const res = Math.round(
    (resources.filter((r) => {
      supported = supported || "nextHopProtocol" in r;
      return r.nextHopProtocol === "h2";
    }).length /
      resources.length) *
      100
  );
  return supported ? res : NaN;
}

function isResourceRelevant(resource) {
  return !resource.name.match(/http(s)?:\/\/frog.wix.com\//);
}

function isResourceUnsupported(resource) {
  return (
    isCORS(resource.name) &&
    resource.transferSize === 0 &&
    resource.requestStart === 0
  );
}

function isCORS(resourceName) {
  const host = location.getHost();
  return host && resourceName.indexOf(host) === -1;
}

function normalizeValues(analysis) {
  return Object.keys(analysis).reduce((result, key) => {
    const n = parseInt(analysis[key]);
    if (!isNaN(n) && typeof n === "number") {
      result[key] = n;
    }
    return result;
  }, {});
}

function countAllResourcesByType(resources) {
  const supportedResources = resources.filter((r) => !isResourceUnsupported(r));
  return Object.keys(RESOURCES_TYPES).reduce((result, currentType) => {
    const allSameTypeResources = filterResourcesByType(resources, currentType);
    const supportedSameTypeResources = filterResourcesByType(
      supportedResources,
      currentType
    );
    const type = RESOURCES_TYPES[currentType];
    result[type.count] = supportedSameTypeResources.length;
    result[type.duration] = calculateResourceLoadDuration(
      supportedSameTypeResources
    );
    result[type.total] = calculateTotalSizeOfResource(
      supportedSameTypeResources
    );
    result[type.unsupported] =
      calculatePercentageOfUnsupportedResources(allSameTypeResources);
    result[type.http2] = calculatePercentageOfHttp2(allSameTypeResources);
    if (type.longest) {
      result[type.longest] = calculateResourceLoadLongestDuration(
        supportedSameTypeResources
      );
    }
    if (type.cached) {
      result[type.cached] = calculateCachedResourcesPercentage(
        supportedSameTypeResources
      );
    }
    return result;
  }, {});
}

function extractResourceMetrics(resource) {
  return {
    url: resource.name,
    downloadDuration: resource.responseEnd - resource.startTime,
    bytesTransferred: resource.transferSize,
    isHTTP2: resource.nextHopProtocol === "h2",
  };
}

function getResourcesBreakdown(resources) {
  const resourcesPartition = resources.reduce(
    (result, r) => {
      if (isResourceUnsupported(r)) {
        result.unsupported.push(r);
      } else {
        result.supported.push(r);
      }
      return result;
    },
    { supported: [], unsupported: [] }
  );
  return Object.keys(RESOURCES_TYPES).reduce((result, currentType) => {
    result[currentType] = {};
    result[currentType].supported = filterResourcesByType(
      resourcesPartition.supported,
      currentType
    ).map((r) => extractResourceMetrics(r));
    result[currentType].unsupported = filterResourcesByType(
      resourcesPartition.unsupported,
      currentType
    ).map((r) => extractResourceMetrics(r));
    return result;
  }, {});
}

export default class ResourceDataItem extends DataItem {
  performNetworkAnalysis(resources) {
    if (resources.length === 0) {
      return null;
    }
    const t0 = performance.now();
    const resourcesToHandle = resources.filter(isResourceRelevant);
    const analysis = countAllResourcesByType(resourcesToHandle);
    analysis.overhead = performance.now() - t0;
    const result = normalizeValues(analysis);
    if (console.debug && location.isFedopsDev()) {
      const resourcesBreakdown = getResourcesBreakdown(resourcesToHandle);
      console.debug(
        `[fedops network analysis] [bytes analysis]\n${JSON.stringify(
          result,
          null,
          4
        )}`
      );
      console.debug(
        `[fedops network analysis] [resources breakdown]\n`,
        resourcesBreakdown
      );
    }
    return result;
  }
}

export const RESOURCES_TYPES_PROPS = Object.keys(RESOURCES_TYPES).reduce(
  (acc, type) => {
    return acc.concat(Object.values(RESOURCES_TYPES[type]));
  },
  []
);
