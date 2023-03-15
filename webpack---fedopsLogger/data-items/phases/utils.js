import performance from "../../performance/performance";

export function createPhasesCollection(phasesOfApp) {
  let phases = {};

  for (const phase of phasesOfApp) {
    deleteIndexFrom(phase);
    phases = Object.assign(phases, phase);
  }

  return phases;
}

export function calcPhaseDuration(phaseStartTime) {
  return Math.floor(performance.now() - phaseStartTime);
}

function deleteIndexFrom(phase) {
  delete phase[Object.getOwnPropertyNames(phase)[0]].index;
}
