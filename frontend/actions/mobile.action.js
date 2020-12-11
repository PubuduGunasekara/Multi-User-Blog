import fetch from "isomorphic-fetch";
import { API } from "../config";
import { handleResponse } from "./auth.action";
import queryString from "query-string";

export const createMobile = (mobile, token) => {
  return fetch(`${API}/mobile`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: mobile,
  })
    .then((response) => {
      handleResponse(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const mobileListPrivate = () => {
  return fetch(`${API}/mobile-private-root`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const mobileListPublic = () => {
  return fetch(`${API}/mobile-public-root`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

/**done (reviews>index,INDEX) */
export const mobileListPublicReleventBrands = (id) => {
  return fetch(`${API}/mobile-brands-list/${id}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

/**done (news>Index,reviews>index,INDEX) */
export const mobileListPublicNewsReviews = () => {
  return fetch(`${API}/mobile-news-reviews`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const singleMobile = (slug) => {
  return fetch(`${API}/mobile/${slug}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const listRelated = (blog) => {
  return fetch(`${API}/mobile/related`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blog),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const listRelatedNews = (blog) => {
  return fetch(`${API}/mobile/news-related`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blog),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const listRelatedReviews = (blog) => {
  return fetch(`${API}/mobile/reviews-related`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(blog),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const removeMobile = (slug, token) => {
  return fetch(`${API}/mobile/${slug}`, {
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

export const updateMobile = (mobile, token, slug) => {
  return fetch(`${API}/mobile/${slug}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: mobile,
  })
    .then((response) => {
      handleResponse(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const approveMobile = (slug, token) => {
  //console.log('from actions  : ', slug, token);

  return fetch(`${API}/mobile/approve/${slug}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      handleResponse(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const unPublishMobile = (slug, token) => {
  //console.log('from actions  : ', slug, token);

  return fetch(`${API}/mobile/un-publish/${slug}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => {
      handleResponse(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const listSearchAdmin = (params) => {
  let query = queryString.stringify(params);

  return fetch(`${API}/mobile-search/search?${query}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

/**completed (Search) */
export const listSearchUser = (params) => {
  let query = queryString.stringify(params);

  return fetch(`${API}/mobile-search-user/search?${query}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
