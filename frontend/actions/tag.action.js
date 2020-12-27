import fetch from "isomorphic-fetch";
import { API } from "../config";
import { handleResponse, isAuth } from "./auth.action";

export const create = (tag, token) => {
  return fetch(`${API}/tag`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(tag),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

/**
 * completed!
 */

/**this method fetch all the tags (Tag) */
export const getTags = () => {
  return fetch(`${API}/tags`, {
    method: "GET",
  })
    .then((response) => {
      handleResponse(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};
/**this method fetch all the tags for admin panel (Tag) */
export const getTagsForCreators = () => {
  return fetch(`${API}/tags-for-creators`, {
    method: "GET",
  })
    .then((response) => {
      handleResponse(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};
/**this function displays the single tag details */
export const singleTags = (slug) => {
  return fetch(`${API}/tag/${slug}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const removeTag = (slug, token) => {
  return fetch(`${API}/tag/${slug}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      handleResponse(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};
