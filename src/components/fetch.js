const API = "https://wind-bow.glitch.me/twitch-api";

const defaultOptions = {
  mode: "cors"
  // credentials: "include"
};

export function get(url, options = defaultOptions) {
  return fetch(`${API}${url}`, options)
    .then(response => response)
    .then(res => res.json());
}
