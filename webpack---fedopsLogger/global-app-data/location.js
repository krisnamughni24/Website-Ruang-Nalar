import { env } from "../env";

const location = () => typeof env() !== "undefined" && env().location;

export default {
  getHost() {
    return location() && env().location.host;
  },

  isFedopsDev() {
    const q = (location() || {}).search || "";
    return q.indexOf(`fedops=dev`) > -1;
  },
};
