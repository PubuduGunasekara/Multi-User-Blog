import fetch from "isomorphic-fetch";
import { API } from "../config";
import { handleResponse } from "./auth.action";
import queryString from "query-string";

/**
 *
 */
export const createNews = (news, token) => {
  return fetch(`${API}/news`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: news,
  })
    .then((response) => {
      handleResponse(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const newsListPrivate = () => {
  return fetch(`${API}/news-private-root`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

/**done (news>Index) */
export const newsListPublic = () => {
  return fetch(`${API}/news-public-root`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

/**done (Index page)*/
export const newsListPublicLimitFirstSection = () => {
  return fetch(`${API}/news-public-limit-first-section`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

/**done (Index page)*/
export const newsListPublicLimitSecondSection = () => {
  return fetch(`${API}/news-public-limit-second-section`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

/**done (Index page)*/
export const newsListPublicLimitFinalSection = (skip, limit) => {
  const data = { skip, limit };
  return fetch(`${API}/news-public-limit-final-section`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

/**done (Index page) */
export const newsPublicLatest = () => {
  return fetch(`${API}/news-public-latest`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

/**done (Index page) */
export const newsPublicSecondLatest = () => {
  return fetch(`${API}/news-public-second-latest`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const newsListPublicTopStories = (blog) => {
  return fetch(`${API}/newsTopStories`, {
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

/**(review>Index,phones>Index,phone>brands>slug) */
export const newsListPublicMobileReviews = () => {
  return fetch(`${API}/news-mobile-reviews`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const newsListModeratorPrivate = (id) => {
  //console.log('from action ', id);

  return fetch(`${API}/news/moderator-private/${id}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const newsListModeratorPublic = (id) => {
  //console.log('from action ', id);

  return fetch(`${API}/news/moderator-public/${id}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const singleNews = (slug) => {
  return fetch(`${API}/news/${slug}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const listRelated = (blog) => {
  return fetch(`${API}/news/related`, {
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
  return fetch(`${API}/news/reviews-related`, {
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

export const listRelatedMobiles = (blog) => {
  return fetch(`${API}/news/mobiles-related`, {
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

export const removeNews = (slug, token) => {
  return fetch(`${API}/news/${slug}`, {
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

export const updateNews = (news, token, slug) => {
  return fetch(`${API}/news/${slug}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: news,
  })
    .then((response) => {
      handleResponse(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const approveNews = (slug, token) => {
  //console.log('from actions  : ', slug, token);

  return fetch(`${API}/news/approve/${slug}`, {
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

export const unPublishNews = (slug, token) => {
  //console.log('from actions  : ', slug, token);

  return fetch(`${API}/news/un-publish/${slug}`, {
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
  console.log("search params : ", params);

  let query = queryString.stringify(params);

  console.log("query params : ", params);

  return fetch(`${API}/news-search/search?${query}`, {
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

  return fetch(`${API}/news-search-user/search?${query}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const listSearchModerator = (params) => {
  console.log("search params : ", params);

  let query = queryString.stringify(params);

  console.log("query params : ", params);

  return fetch(`${API}/news-search-moderator/search?${query}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
