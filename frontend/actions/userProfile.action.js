import fetch from "isomorphic-fetch";
import { API } from "../config";
import { handleResponse, isAuth } from "./auth.action";

/**done (PROFILES>SLUG) */
export const userPublicProfile = (username) => {
  return fetch(`${API}/user/publicProfile/${username}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

/*export const showSingleProfile = (username) => {
    return fetch(`${API}/user/publicUserProfile/${username}`, {
        method: 'GET'
    }).then(response => {
        handleResponse(response)
        return response.json();
    })
        .catch(err => console.log(err));
}*/

export const getProfile = (token) => {
  return fetch(`${API}/user/profile`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const update = (token, user) => {
  return fetch(`${API}/user/update`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: user,
  })
    .then((response) => {
      handleResponse(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

/**done (PROFILES>SLUG) */
export const listProfiles = () => {
  return fetch(`${API}/user/profiles/list`, {
    method: "GET",
  })
    .then((response) => {
      handleResponse(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};
