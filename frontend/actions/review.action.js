import fetch from "isomorphic-fetch";
import { API } from "../config";
import { handleResponse } from "./auth.action";
import queryString from "query-string";

export const createReview = (review, token) => {
  return fetch(`${API}/review`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: review,
  })
    .then((response) => {
      handleResponse(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const reviewListPrivate = () => {
  return fetch(`${API}/reviews-private-root`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

/**done (Reviews>Index) */
export const reviewListPublic = () => {
  return fetch(`${API}/reviews-public-root`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

/** done (Index page)  */
export const reviewPublicLatest = () => {
  return fetch(`${API}/review-public-latest`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

/** done (Index page)  */
export const reviewPublicSecondLatest = () => {
  return fetch(`${API}/review-public-second-latest`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

/** done (Index page)  */
export const reviewPublicEightLatest = () => {
  return fetch(`${API}/review-public-eight-latest`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

/** done (Index page)  */
export const reviewListPublicHomePage = () => {
  return fetch(`${API}/reviews-home`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

/** done (Index page)  */
export const reviewListPublicLimitedSectionOne = () => {
  return fetch(`${API}/review-public-limited-list-section-one`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

/** done (Index page)  */
export const reviewListPublicLimitedSectionTwo = () => {
  return fetch(`${API}/review-public-limited-list-section-two`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const newsListPublicTopStories = () => {
  return fetch(`${API}/newsTopStories`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

/**done (news>index,phones>index) */
export const reviewListPublicMobileNews = () => {
  return fetch(`${API}/reviews-news-mobile`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const reviewListModeratorPrivate = (id) => {
  //console.log('from action ', id);

  return fetch(`${API}/review/moderator-private/${id}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const reviewListModeratorPublic = (id) => {
  //console.log('from action ', id);

  return fetch(`${API}/review/moderator-public/${id}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const singleReview = (slug) => {
  return fetch(`${API}/review/${slug}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const removeReview = (slug, token) => {
  return fetch(`${API}/review/${slug}`, {
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

export const updateReview = (review, token, slug) => {
  return fetch(`${API}/review/${slug}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: review,
  })
    .then((response) => {
      handleResponse(response);
      return response.json();
    })
    .catch((err) => console.log(err));
};

export const approveReview = (slug, token) => {
  //console.log('from actions  : ', slug, token);

  return fetch(`${API}/review/approve/${slug}`, {
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

export const unPublishReview = (slug, token) => {
  //console.log('from actions  : ', slug, token);

  return fetch(`${API}/review/un-publish/${slug}`, {
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

export const listRelated = (blog) => {
  return fetch(`${API}/review/related`, {
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
  return fetch(`${API}/review/news-related`, {
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
  return fetch(`${API}/review/mobiles-related`, {
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

export const listSearchAdmin = (params) => {
  let query = queryString.stringify(params);

  return fetch(`${API}/review-search/search?${query}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};

/**completed list all reviews item in user end */
export const listSearchUser = (params) => {
  let query = queryString.stringify(params);

  return fetch(`${API}/review-search-user/search?${query}`, {
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

  return fetch(`${API}/review-search-moderator/search?${query}`, {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .catch((err) => console.log(err));
};
