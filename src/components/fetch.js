const API = "https://wind-bow.glitch.me/twitch-api";

const defaultOptions = {
  mode: "cors"
  // credentials: "include"
};

export default function get(url, options = defaultOptions) {
  return fetch(`${API}${url}`, options)
    .then(response => response)
    .then(res => res.json());
}

export function createUrl(url, paramsObj) {
  let qMark = paramsObj ? "?" : "";
  let paramsArr = [];

  if (paramsObj) {
    for (var key in paramsObj) {
      if (paramsObj.hasOwnProperty(key))
        paramsArr.push(`${key}=${encodeURIComponent(paramsObj[key])}`);
    }
  }

  const fetchUrl = url + qMark + paramsArr.join("&");
  return fetchUrl;
}
