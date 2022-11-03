import { isMobile } from "react-device-detect";
import Translate from "@identitybuilding/idb-react-translations";

let host = window.location.hostname;
host = host.replace("www.", "");

let domain = window.location.hostname

  .replace("www.", "")
  .match(/([a-z0-9|-]+)/g);
domain =
  domain.length === 2 || domain.length === 1
    ? domain[0].toLowerCase()
    : domain.length === 3
    ? domain[1].toLowerCase()
    : domain[2] && domain[2].toLowerCase();



let lang =
  host.includes("netwerk")
    ? "nl"
    : host.includes("reseau")
    ? "fr"
    : host.includes("network")
    ? "en"
    : "nl";

const initialState = {
  lang: lang,
  translate: (x) => Translate(x, lang),
  device: isMobile ? "mobile" : "desktop",
  domain: domain,
};

const GeneralReducer = (state = initialState, action) => state;

export default GeneralReducer;
