module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./pages/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "../next-server/lib/router-context":
/*!**************************************************************!*\
  !*** external "next/dist/next-server/lib/router-context.js" ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/dist/next-server/lib/router-context.js");

/***/ }),

/***/ "./actions/auth.action.js":
/*!********************************!*\
  !*** ./actions/auth.action.js ***!
  \********************************/
/*! exports provided: handleResponse, preSignup, signup, signin, signout, setCookie, removeCookie, getCookie, setLocalStorage, removeLocalStorage, authenticate, isAuth, updateUser, forgotPassword, resetPassword */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "handleResponse", function() { return handleResponse; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "preSignup", function() { return preSignup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signup", function() { return signup; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signin", function() { return signin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "signout", function() { return signout; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookie", function() { return setCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeCookie", function() { return removeCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookie", function() { return getCookie; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setLocalStorage", function() { return setLocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeLocalStorage", function() { return removeLocalStorage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "authenticate", function() { return authenticate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isAuth", function() { return isAuth; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateUser", function() { return updateUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "forgotPassword", function() { return forgotPassword; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resetPassword", function() { return resetPassword; });
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! js-cookie */ "js-cookie");
/* harmony import */ var js_cookie__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(js_cookie__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_3__);




/**
 * completed! handle response
 */

const handleResponse = response => {
  if (response.status === 401) {
    signout(() => {
      next_router__WEBPACK_IMPORTED_MODULE_3___default.a.push({
        pathname: "/admin-panel/user-signin",
        query: {
          message: "Your session has been expired. Please sign in"
        }
      });
    });
  } else {
    return;
  }
};
const preSignup = (user, token) => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    },
    body: JSON.stringify(user)
  }).then(response => {
    handleResponse(response);
    return response.json();
  }).catch(err => console.log(err));
};
const signup = user => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/verify-signup`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const signin = user => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/signin`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const signout = next => {
  removeCookie("token");
  removeLocalStorage("user");
  next();
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/signout`, {
    method: "GET"
  }).then(response => {
    console.log("signout success");
  }).catch(err => console.log(err));
}; //set cookie

const setCookie = (key, value) => {
  if (false) {}
};
const removeCookie = key => {
  if (false) {}
}; //get cookie

const getCookie = key => {
  if (false) {}
}; //localstorage

const setLocalStorage = (key, value) => {
  if (false) {}
};
const removeLocalStorage = key => {
  if (false) {}
}; //auth

const authenticate = (data, next) => {
  setCookie("token", data.token);
  setLocalStorage("user", data.user);
  next();
}; //{done} swarch for local storage for cokies

const isAuth = () => {
  if (false) {}
};
const updateUser = (user, next) => {
  if (false) {}
};
const forgotPassword = email => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/forgot-password`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(email)
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const resetPassword = resetInfo => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/reset-password`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(resetInfo)
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};

/***/ }),

/***/ "./actions/mobile.action.js":
/*!**********************************!*\
  !*** ./actions/mobile.action.js ***!
  \**********************************/
/*! exports provided: createMobile, mobileListPrivate, mobileListPublic, mobileListPublicCreators, mobileListPublicReleventBrands, mobileListPublicNewsReviews, singleMobile, singleMobileCreators, listRelated, listRelatedNews, listRelatedReviews, removeMobile, updateMobile, approveMobile, unPublishMobile, listSearchAdmin, listSearchUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMobile", function() { return createMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobileListPrivate", function() { return mobileListPrivate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobileListPublic", function() { return mobileListPublic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobileListPublicCreators", function() { return mobileListPublicCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobileListPublicReleventBrands", function() { return mobileListPublicReleventBrands; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobileListPublicNewsReviews", function() { return mobileListPublicNewsReviews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleMobile", function() { return singleMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleMobileCreators", function() { return singleMobileCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listRelated", function() { return listRelated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listRelatedNews", function() { return listRelatedNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listRelatedReviews", function() { return listRelatedReviews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeMobile", function() { return removeMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMobile", function() { return updateMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "approveMobile", function() { return approveMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unPublishMobile", function() { return unPublishMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listSearchAdmin", function() { return listSearchAdmin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listSearchUser", function() { return listSearchUser; });
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _auth_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.action */ "./actions/auth.action.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! query-string */ "query-string");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_3__);




const createMobile = (mobile, token) => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/mobile`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: mobile
  }).then(response => {
    Object(_auth_action__WEBPACK_IMPORTED_MODULE_2__["handleResponse"])(response);
    return response.json();
  }).catch(err => console.log(err));
};
const mobileListPrivate = () => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/mobile-private-root`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
/**done (phones>brand>slug) */

const mobileListPublic = () => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/mobile-public-root`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
/**done creators */

const mobileListPublicCreators = () => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/mobile-public-root-creators`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
/**done (reviews>index,INDEX) */

const mobileListPublicReleventBrands = id => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/mobile-brands-list/${id}`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
/**done (news>Index,reviews>index,INDEX) */

const mobileListPublicNewsReviews = () => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/mobile-news-reviews`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
/**done (phones>brand>slug) */

const singleMobile = slug => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/mobile/${slug}`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
/**done admin */

const singleMobileCreators = slug => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/mobile-creators/${slug}`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
/**done (phones>brand>slug) */

const listRelated = blog => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/mobile/related`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(blog)
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
/**done (phones>brand>slug) */

const listRelatedNews = blog => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/mobile/news-related`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(blog)
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
/**done (phones>brand>slug) */

const listRelatedReviews = blog => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/mobile/reviews-related`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(blog)
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const removeMobile = (slug, token) => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/mobile/${slug}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  }).then(response => {
    Object(_auth_action__WEBPACK_IMPORTED_MODULE_2__["handleResponse"])(response);
    return response.json();
  }).catch(err => console.log(err));
};
const updateMobile = (mobile, token, slug) => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/mobile/${slug}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: mobile
  }).then(response => {
    Object(_auth_action__WEBPACK_IMPORTED_MODULE_2__["handleResponse"])(response);
    return response.json();
  }).catch(err => console.log(err));
};
const approveMobile = (slug, token) => {
  //console.log('from actions  : ', slug, token);
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/mobile/approve/${slug}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  }).then(response => {
    Object(_auth_action__WEBPACK_IMPORTED_MODULE_2__["handleResponse"])(response);
    return response.json();
  }).catch(err => console.log(err));
};
const unPublishMobile = (slug, token) => {
  //console.log('from actions  : ', slug, token);
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/mobile/un-publish/${slug}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  }).then(response => {
    Object(_auth_action__WEBPACK_IMPORTED_MODULE_2__["handleResponse"])(response);
    return response.json();
  }).catch(err => console.log(err));
};
const listSearchAdmin = params => {
  let query = query_string__WEBPACK_IMPORTED_MODULE_3___default.a.stringify(params);
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/mobile-search/search?${query}`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
/**completed (Search) */

const listSearchUser = params => {
  let query = query_string__WEBPACK_IMPORTED_MODULE_3___default.a.stringify(params);
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/mobile-search-user/search?${query}`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};

/***/ }),

/***/ "./actions/news.action.js":
/*!********************************!*\
  !*** ./actions/news.action.js ***!
  \********************************/
/*! exports provided: createNews, newsListPrivate, newsListPublic, newsListPublicLimitFirstSection, newsListPublicLimitSecondSection, newsListPublicLimitFinalSection, newsPublicLatest, newsPublicSecondLatest, newsListPublicTopStories, newsListPublicMobileReviews, newsListModeratorPrivate, newsListModeratorPublic, singleNews, singleNewsCreators, listRelated, listRelatedReviews, listRelatedMobiles, removeNews, updateNews, approveNews, unPublishNews, listSearchAdmin, listSearchUser, listSearchModerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createNews", function() { return createNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsListPrivate", function() { return newsListPrivate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsListPublic", function() { return newsListPublic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsListPublicLimitFirstSection", function() { return newsListPublicLimitFirstSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsListPublicLimitSecondSection", function() { return newsListPublicLimitSecondSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsListPublicLimitFinalSection", function() { return newsListPublicLimitFinalSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsPublicLatest", function() { return newsPublicLatest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsPublicSecondLatest", function() { return newsPublicSecondLatest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsListPublicTopStories", function() { return newsListPublicTopStories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsListPublicMobileReviews", function() { return newsListPublicMobileReviews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsListModeratorPrivate", function() { return newsListModeratorPrivate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsListModeratorPublic", function() { return newsListModeratorPublic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleNews", function() { return singleNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleNewsCreators", function() { return singleNewsCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listRelated", function() { return listRelated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listRelatedReviews", function() { return listRelatedReviews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listRelatedMobiles", function() { return listRelatedMobiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeNews", function() { return removeNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateNews", function() { return updateNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "approveNews", function() { return approveNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unPublishNews", function() { return unPublishNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listSearchAdmin", function() { return listSearchAdmin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listSearchUser", function() { return listSearchUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listSearchModerator", function() { return listSearchModerator; });
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _auth_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.action */ "./actions/auth.action.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! query-string */ "query-string");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_3__);




/**
 *
 */

const createNews = (news, token) => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/news`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: news
  }).then(response => {
    Object(_auth_action__WEBPACK_IMPORTED_MODULE_2__["handleResponse"])(response);
    return response.json();
  }).catch(err => console.log(err));
};
const newsListPrivate = () => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/news-private-root`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
/**done (news>Index,news>slug) */

const newsListPublic = () => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/news-public-root`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
/**done (Index page)*/

const newsListPublicLimitFirstSection = () => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/news-public-limit-first-section`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
/**done (Index page)*/

const newsListPublicLimitSecondSection = () => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/news-public-limit-second-section`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
/**done (Index page)*/

const newsListPublicLimitFinalSection = (skip, limit) => {
  const data = {
    skip,
    limit
  };
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/news-public-limit-final-section`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data)
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
/**done (Index page) */

const newsPublicLatest = () => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/news-public-latest`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
/**done (Index page) */

const newsPublicSecondLatest = () => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/news-public-second-latest`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
/**done (news>slug) */

const newsListPublicTopStories = blog => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/newsTopStories`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(blog)
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
/**(review>Index,phones>Index,phone>brands>slug) */

const newsListPublicMobileReviews = () => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/news-mobile-reviews`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const newsListModeratorPrivate = id => {
  //console.log('from action ', id);
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/news/moderator-private/${id}`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const newsListModeratorPublic = id => {
  //console.log('from action ', id);
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/news/moderator-public/${id}`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
}; //done(news>slug)

const singleNews = slug => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/news/${slug}`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
}; //done(news>slug)

const singleNewsCreators = slug => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/newsCreator/${slug}`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const listRelated = blog => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/news/related`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(blog)
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
}; //done(news>slug)

const listRelatedReviews = blog => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/news/reviews-related`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(blog)
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
}; //done(news>slug)

const listRelatedMobiles = blog => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/news/mobiles-related`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(blog)
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const removeNews = (slug, token) => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/news/${slug}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  }).then(response => {
    Object(_auth_action__WEBPACK_IMPORTED_MODULE_2__["handleResponse"])(response);
    return response.json();
  }).catch(err => console.log(err));
};
const updateNews = (news, token, slug) => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/news/${slug}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: news
  }).then(response => {
    Object(_auth_action__WEBPACK_IMPORTED_MODULE_2__["handleResponse"])(response);
    return response.json();
  }).catch(err => console.log(err));
};
const approveNews = (slug, token) => {
  //console.log('from actions  : ', slug, token);
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/news/approve/${slug}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  }).then(response => {
    Object(_auth_action__WEBPACK_IMPORTED_MODULE_2__["handleResponse"])(response);
    return response.json();
  }).catch(err => console.log(err));
};
const unPublishNews = (slug, token) => {
  //console.log('from actions  : ', slug, token);
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/news/un-publish/${slug}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  }).then(response => {
    Object(_auth_action__WEBPACK_IMPORTED_MODULE_2__["handleResponse"])(response);
    return response.json();
  }).catch(err => console.log(err));
};
const listSearchAdmin = params => {
  console.log("search params : ", params);
  let query = query_string__WEBPACK_IMPORTED_MODULE_3___default.a.stringify(params);
  console.log("query params : ", params);
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/news-search/search?${query}`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
/**completed (Search) */

const listSearchUser = params => {
  let query = query_string__WEBPACK_IMPORTED_MODULE_3___default.a.stringify(params);
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/news-search-user/search?${query}`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const listSearchModerator = params => {
  console.log("search params : ", params);
  let query = query_string__WEBPACK_IMPORTED_MODULE_3___default.a.stringify(params);
  console.log("query params : ", params);
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/news-search-moderator/search?${query}`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};

/***/ }),

/***/ "./actions/review.action.js":
/*!**********************************!*\
  !*** ./actions/review.action.js ***!
  \**********************************/
/*! exports provided: createReview, reviewListPrivate, reviewListPublic, reviewPublicLatest, reviewPublicSecondLatest, reviewPublicEightLatest, reviewListPublicHomePage, reviewListPublicLimitedSectionOne, reviewListPublicLimitedSectionTwo, newsListPublicTopStories, reviewListPublicMobileNews, reviewListModeratorPrivate, reviewListModeratorPublic, singleReview, singleReviewCreators, removeReview, updateReview, approveReview, unPublishReview, listRelated, listRelatedNews, listRelatedMobiles, listSearchAdmin, listSearchUser, listSearchModerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReview", function() { return createReview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reviewListPrivate", function() { return reviewListPrivate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reviewListPublic", function() { return reviewListPublic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reviewPublicLatest", function() { return reviewPublicLatest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reviewPublicSecondLatest", function() { return reviewPublicSecondLatest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reviewPublicEightLatest", function() { return reviewPublicEightLatest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reviewListPublicHomePage", function() { return reviewListPublicHomePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reviewListPublicLimitedSectionOne", function() { return reviewListPublicLimitedSectionOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reviewListPublicLimitedSectionTwo", function() { return reviewListPublicLimitedSectionTwo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsListPublicTopStories", function() { return newsListPublicTopStories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reviewListPublicMobileNews", function() { return reviewListPublicMobileNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reviewListModeratorPrivate", function() { return reviewListModeratorPrivate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reviewListModeratorPublic", function() { return reviewListModeratorPublic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleReview", function() { return singleReview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleReviewCreators", function() { return singleReviewCreators; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeReview", function() { return removeReview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateReview", function() { return updateReview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "approveReview", function() { return approveReview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "unPublishReview", function() { return unPublishReview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listRelated", function() { return listRelated; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listRelatedNews", function() { return listRelatedNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listRelatedMobiles", function() { return listRelatedMobiles; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listSearchAdmin", function() { return listSearchAdmin; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listSearchUser", function() { return listSearchUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "listSearchModerator", function() { return listSearchModerator; });
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _auth_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.action */ "./actions/auth.action.js");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! query-string */ "query-string");
/* harmony import */ var query_string__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(query_string__WEBPACK_IMPORTED_MODULE_3__);




const createReview = (review, token) => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/review`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: review
  }).then(response => {
    Object(_auth_action__WEBPACK_IMPORTED_MODULE_2__["handleResponse"])(response);
    return response.json();
  }).catch(err => console.log(err));
};
const reviewListPrivate = () => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/reviews-private-root`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
/**done (Reviews>Index,reviews>slug) */

const reviewListPublic = () => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/reviews-public-root`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
/** done (Index page)  */

const reviewPublicLatest = () => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/review-public-latest`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
/** done (Index page)  */

const reviewPublicSecondLatest = () => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/review-public-second-latest`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
/** done (Index page)  */

const reviewPublicEightLatest = () => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/review-public-eight-latest`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
/** done (Index page)  */

const reviewListPublicHomePage = () => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/reviews-home`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
/** done (Index page)  */

const reviewListPublicLimitedSectionOne = () => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/review-public-limited-list-section-one`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
/** done (Index page)  */

const reviewListPublicLimitedSectionTwo = () => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/review-public-limited-list-section-two`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
/**done (reviews>slug) */

const newsListPublicTopStories = () => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/newsTopStories`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
/**done (news>index,phones>index,phones>brands>slug) */

const reviewListPublicMobileNews = () => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/reviews-news-mobile`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const reviewListModeratorPrivate = id => {
  //console.log('from action ', id);
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/review/moderator-private/${id}`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const reviewListModeratorPublic = id => {
  //console.log('from action ', id);
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/review/moderator-public/${id}`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
}; //done (reviews>slug)

const singleReview = slug => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/review/${slug}`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
}; //done admin

const singleReviewCreators = slug => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/review-creators/${slug}`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const removeReview = (slug, token) => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/review/${slug}`, {
    method: "DELETE",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`
    }
  }).then(response => {
    Object(_auth_action__WEBPACK_IMPORTED_MODULE_2__["handleResponse"])(response);
    return response.json();
  }).catch(err => console.log(err));
};
const updateReview = (review, token, slug) => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/review/${slug}`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    },
    body: review
  }).then(response => {
    Object(_auth_action__WEBPACK_IMPORTED_MODULE_2__["handleResponse"])(response);
    return response.json();
  }).catch(err => console.log(err));
};
const approveReview = (slug, token) => {
  //console.log('from actions  : ', slug, token);
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/review/approve/${slug}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  }).then(response => {
    Object(_auth_action__WEBPACK_IMPORTED_MODULE_2__["handleResponse"])(response);
    return response.json();
  }).catch(err => console.log(err));
};
const unPublishReview = (slug, token) => {
  //console.log('from actions  : ', slug, token);
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/review/un-publish/${slug}`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      Authorization: `Bearer ${token}`
    }
  }).then(response => {
    Object(_auth_action__WEBPACK_IMPORTED_MODULE_2__["handleResponse"])(response);
    return response.json();
  }).catch(err => console.log(err));
}; //done (reviews>slug)

const listRelated = blog => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/review/related`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(blog)
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const listRelatedNews = blog => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/review/news-related`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(blog)
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
}; //done(reviews>slug)

const listRelatedMobiles = blog => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/review/mobiles-related`, {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify(blog)
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const listSearchAdmin = params => {
  let query = query_string__WEBPACK_IMPORTED_MODULE_3___default.a.stringify(params);
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/review-search/search?${query}`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
/**completed (Search) */

const listSearchUser = params => {
  let query = query_string__WEBPACK_IMPORTED_MODULE_3___default.a.stringify(params);
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/review-search-user/search?${query}`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const listSearchModerator = params => {
  let query = query_string__WEBPACK_IMPORTED_MODULE_3___default.a.stringify(params);
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/review-search-moderator/search?${query}`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: API, APP_NAME, DOMAIN, FB_APP_ID, TWITTER_PUBLISHER_HANDLE, TWITTER_AUTHOR_HANDLE, DISQUS_SHORTNAME, TINYMC_APP_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_NAME", function() { return APP_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAIN", function() { return DOMAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FB_APP_ID", function() { return FB_APP_ID; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TWITTER_PUBLISHER_HANDLE", function() { return TWITTER_PUBLISHER_HANDLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TWITTER_AUTHOR_HANDLE", function() { return TWITTER_AUTHOR_HANDLE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DISQUS_SHORTNAME", function() { return DISQUS_SHORTNAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TINYMC_APP_ID", function() { return TINYMC_APP_ID; });
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! next/config */ "next/config");
/* harmony import */ var next_config__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(next_config__WEBPACK_IMPORTED_MODULE_0__);

const {
  publicRuntimeConfig
} = next_config__WEBPACK_IMPORTED_MODULE_0___default()();
const API = publicRuntimeConfig.PRODUCTION ? publicRuntimeConfig.API_PRODUCTION : publicRuntimeConfig.API_DEVELOPMENT;
const APP_NAME = publicRuntimeConfig.APP_NAME;
const DOMAIN = publicRuntimeConfig.PRODUCTION ? publicRuntimeConfig.DOMAIN_PRODUCTION : publicRuntimeConfig.DOMAIN_DEVELOPMENT;
const FB_APP_ID = publicRuntimeConfig.FB_APP_ID;
const TWITTER_PUBLISHER_HANDLE = publicRuntimeConfig.TWITTER_PUBLISHER_HANDLE;
const TWITTER_AUTHOR_HANDLE = publicRuntimeConfig.TWITTER_AUTHOR_HANDLE;
const DISQUS_SHORTNAME = publicRuntimeConfig.DISQUS_SHORTNAME;
const TINYMC_APP_ID = publicRuntimeConfig.TINYMC_APP_ID;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js":
/*!**********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireDefault.js ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js":
/*!***********************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/interopRequireWildcard.js ***!
  \***********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var _typeof = __webpack_require__(/*! ../helpers/typeof */ "./node_modules/@babel/runtime/helpers/typeof.js");

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function _getRequireWildcardCache() {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") {
    return {
      "default": obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj["default"] = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

module.exports = _interopRequireWildcard;

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/typeof.js":
/*!*******************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/typeof.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    module.exports = _typeof = function _typeof(obj) {
      return typeof obj;
    };
  } else {
    module.exports = _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

module.exports = _typeof;

/***/ }),

/***/ "./node_modules/next/dist/client/link.js":
/*!***********************************************!*\
  !*** ./node_modules/next/dist/client/link.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

exports.__esModule = true;
exports.default = void 0;

var _react = _interopRequireWildcard(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js");

var _router2 = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

let cachedObserver;
const listeners = new Map();
const IntersectionObserver = false ? undefined : null;
const prefetched = {};

function getObserver() {
  // Return shared instance of IntersectionObserver if already created
  if (cachedObserver) {
    return cachedObserver;
  } // Only create shared IntersectionObserver if supported in browser


  if (!IntersectionObserver) {
    return undefined;
  }

  return cachedObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!listeners.has(entry.target)) {
        return;
      }

      const cb = listeners.get(entry.target);

      if (entry.isIntersecting || entry.intersectionRatio > 0) {
        cachedObserver.unobserve(entry.target);
        listeners.delete(entry.target);
        cb();
      }
    });
  }, {
    rootMargin: '200px'
  });
}

const listenToIntersections = (el, cb) => {
  const observer = getObserver();

  if (!observer) {
    return () => {};
  }

  observer.observe(el);
  listeners.set(el, cb);
  return () => {
    try {
      observer.unobserve(el);
    } catch (err) {
      console.error(err);
    }

    listeners.delete(el);
  };
};

function prefetch(router, href, as, options) {
  if (true) return;
  if (!(0, _router.isLocalURL)(href)) return; // Prefetch the JSON page if asked (only in the client)
  // We need to handle a prefetch error here since we may be
  // loading with priority which can reject but we don't
  // want to force navigation since this is only a prefetch

  router.prefetch(href, as, options).catch(err => {
    if (true) {
      // rethrow to show invalid URL errors
      throw err;
    }
  }); // Join on an invalid URI character

  prefetched[href + '%' + as] = true;
}

function isModifiedEvent(event) {
  const {
    target
  } = event.currentTarget;
  return target && target !== '_self' || event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || // triggers resource download
  event.nativeEvent && event.nativeEvent.which === 2;
}

function linkClicked(e, router, href, as, replace, shallow, scroll, locale) {
  const {
    nodeName
  } = e.currentTarget;

  if (nodeName === 'A' && (isModifiedEvent(e) || !(0, _router.isLocalURL)(href))) {
    // ignore click for browser’s default behavior
    return;
  }

  e.preventDefault(); //  avoid scroll for urls with anchor refs

  if (scroll == null) {
    scroll = as.indexOf('#') < 0;
  } // replace state instead of push if prop is present


  router[replace ? 'replace' : 'push'](href, as, {
    shallow,
    locale
  }).then(success => {
    if (!success) return;

    if (scroll) {
      window.scrollTo(0, 0);
      document.body.focus();
    }
  });
}

function Link(props) {
  if (true) {
    function createPropError(args) {
      return new Error(`Failed prop type: The prop \`${args.key}\` expects a ${args.expected} in \`<Link>\`, but got \`${args.actual}\` instead.` + (false ? undefined : ''));
    } // TypeScript trick for type-guarding:


    const requiredPropsGuard = {
      href: true
    };
    const requiredProps = Object.keys(requiredPropsGuard);
    requiredProps.forEach(key => {
      if (key === 'href') {
        if (props[key] == null || typeof props[key] !== 'string' && typeof props[key] !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: props[key] === null ? 'null' : typeof props[key]
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // TypeScript trick for type-guarding:

    const optionalPropsGuard = {
      as: true,
      replace: true,
      scroll: true,
      shallow: true,
      passHref: true,
      prefetch: true,
      locale: true
    };
    const optionalProps = Object.keys(optionalPropsGuard);
    optionalProps.forEach(key => {
      const valType = typeof props[key];

      if (key === 'as') {
        if (props[key] && valType !== 'string' && valType !== 'object') {
          throw createPropError({
            key,
            expected: '`string` or `object`',
            actual: valType
          });
        }
      } else if (key === 'locale') {
        if (props[key] && valType !== 'string') {
          throw createPropError({
            key,
            expected: '`string`',
            actual: valType
          });
        }
      } else if (key === 'replace' || key === 'scroll' || key === 'shallow' || key === 'passHref' || key === 'prefetch') {
        if (props[key] != null && valType !== 'boolean') {
          throw createPropError({
            key,
            expected: '`boolean`',
            actual: valType
          });
        }
      } else {
        // TypeScript trick for type-guarding:
        // eslint-disable-next-line @typescript-eslint/no-unused-vars
        const _ = key;
      }
    }); // This hook is in a conditional but that is ok because `process.env.NODE_ENV` never changes
    // eslint-disable-next-line react-hooks/rules-of-hooks

    const hasWarned = _react.default.useRef(false);

    if (props.prefetch && !hasWarned.current) {
      hasWarned.current = true;
      console.warn('Next.js auto-prefetches automatically based on viewport. The prefetch attribute is no longer needed. More: https://err.sh/vercel/next.js/prefetch-true-deprecated');
    }
  }

  const p = props.prefetch !== false;
  const router = (0, _router2.useRouter)();
  const pathname = router && router.pathname || '/';

  const {
    href,
    as
  } = _react.default.useMemo(() => {
    const [resolvedHref, resolvedAs] = (0, _router.resolveHref)(pathname, props.href, true);
    return {
      href: resolvedHref,
      as: props.as ? (0, _router.resolveHref)(pathname, props.as) : resolvedAs || resolvedHref
    };
  }, [pathname, props.href, props.as]);

  let {
    children,
    replace,
    shallow,
    scroll,
    locale
  } = props; // Deprecated. Warning shown by propType check. If the children provided is a string (<Link>example</Link>) we wrap it in an <a> tag

  if (typeof children === 'string') {
    children = /*#__PURE__*/_react.default.createElement("a", null, children);
  } // This will return the first child, if multiple are provided it will throw an error


  const child = _react.Children.only(children);

  const childRef = child && typeof child === 'object' && child.ref;

  const cleanup = _react.default.useRef();

  const setRef = _react.default.useCallback(el => {
    // cleanup previous event handlers
    if (cleanup.current) {
      cleanup.current();
      cleanup.current = undefined;
    }

    if (p && IntersectionObserver && el && el.tagName && (0, _router.isLocalURL)(href)) {
      // Join on an invalid URI character
      const isPrefetched = prefetched[href + '%' + as];

      if (!isPrefetched) {
        cleanup.current = listenToIntersections(el, () => {
          prefetch(router, href, as, {
            locale: typeof locale !== 'undefined' ? locale : router && router.locale
          });
        });
      }
    }

    if (childRef) {
      if (typeof childRef === 'function') childRef(el);else if (typeof childRef === 'object') {
        childRef.current = el;
      }
    }
  }, [p, childRef, href, as, router, locale]);

  const childProps = {
    ref: setRef,
    onClick: e => {
      if (child.props && typeof child.props.onClick === 'function') {
        child.props.onClick(e);
      }

      if (!e.defaultPrevented) {
        linkClicked(e, router, href, as, replace, shallow, scroll, locale);
      }
    }
  };

  if (p) {
    childProps.onMouseEnter = e => {
      if (!(0, _router.isLocalURL)(href)) return;

      if (child.props && typeof child.props.onMouseEnter === 'function') {
        child.props.onMouseEnter(e);
      }

      prefetch(router, href, as, {
        priority: true
      });
    };
  } // If child is an <a> tag and doesn't have a href attribute, or if the 'passHref' property is
  // defined, we specify the current 'href', so that repetition is not needed by the user


  if (props.passHref || child.type === 'a' && !('href' in child.props)) {
    childProps.href = (0, _router.addBasePath)((0, _router.addLocale)(as, typeof locale !== 'undefined' ? locale : router && router.locale, router && router.defaultLocale));
  }

  return /*#__PURE__*/_react.default.cloneElement(child, childProps);
}

var _default = Link;
exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/client/normalize-trailing-slash.js":
/*!*******************************************************************!*\
  !*** ./node_modules/next/dist/client/normalize-trailing-slash.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.removePathTrailingSlash = removePathTrailingSlash;
exports.normalizePathTrailingSlash = void 0;
/**
* Removes the trailing slash of a path if there is one. Preserves the root path `/`.
*/

function removePathTrailingSlash(path) {
  return path.endsWith('/') && path !== '/' ? path.slice(0, -1) : path;
}
/**
* Normalizes the trailing slash of a path according to the `trailingSlash` option
* in `next.config.js`.
*/


const normalizePathTrailingSlash =  false ? undefined : removePathTrailingSlash;
exports.normalizePathTrailingSlash = normalizePathTrailingSlash;

/***/ }),

/***/ "./node_modules/next/dist/client/router.js":
/*!*************************************************!*\
  !*** ./node_modules/next/dist/client/router.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireWildcard = __webpack_require__(/*! @babel/runtime/helpers/interopRequireWildcard */ "./node_modules/@babel/runtime/helpers/interopRequireWildcard.js");

var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.useRouter = useRouter;
exports.makePublicRouterInstance = makePublicRouterInstance;
exports.createRouter = exports.withRouter = exports.default = void 0;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router2 = _interopRequireWildcard(__webpack_require__(/*! ../next-server/lib/router/router */ "./node_modules/next/dist/next-server/lib/router/router.js"));

exports.Router = _router2.default;
exports.NextRouter = _router2.NextRouter;

var _routerContext = __webpack_require__(/*! ../next-server/lib/router-context */ "../next-server/lib/router-context");

var _withRouter = _interopRequireDefault(__webpack_require__(/*! ./with-router */ "./node_modules/next/dist/client/with-router.js"));

exports.withRouter = _withRouter.default;
/* global window */

const singletonRouter = {
  router: null,
  // holds the actual router instance
  readyCallbacks: [],

  ready(cb) {
    if (this.router) return cb();

    if (false) {}
  }

}; // Create public properties and methods of the router in the singletonRouter

const urlPropertyFields = ['pathname', 'route', 'query', 'asPath', 'components', 'isFallback', 'basePath', 'locale', 'locales', 'defaultLocale'];
const routerEvents = ['routeChangeStart', 'beforeHistoryChange', 'routeChangeComplete', 'routeChangeError', 'hashChangeStart', 'hashChangeComplete'];
const coreMethodFields = ['push', 'replace', 'reload', 'back', 'prefetch', 'beforePopState']; // Events is a static property on the router, the router doesn't have to be initialized to use it

Object.defineProperty(singletonRouter, 'events', {
  get() {
    return _router2.default.events;
  }

});
urlPropertyFields.forEach(field => {
  // Here we need to use Object.defineProperty because, we need to return
  // the property assigned to the actual router
  // The value might get changed as we change routes and this is the
  // proper way to access it
  Object.defineProperty(singletonRouter, field, {
    get() {
      const router = getRouter();
      return router[field];
    }

  });
});
coreMethodFields.forEach(field => {
  // We don't really know the types here, so we add them later instead
  ;

  singletonRouter[field] = (...args) => {
    const router = getRouter();
    return router[field](...args);
  };
});
routerEvents.forEach(event => {
  singletonRouter.ready(() => {
    _router2.default.events.on(event, (...args) => {
      const eventField = `on${event.charAt(0).toUpperCase()}${event.substring(1)}`;
      const _singletonRouter = singletonRouter;

      if (_singletonRouter[eventField]) {
        try {
          _singletonRouter[eventField](...args);
        } catch (err) {
          console.error(`Error when running the Router event: ${eventField}`);
          console.error(`${err.message}\n${err.stack}`);
        }
      }
    });
  });
});

function getRouter() {
  if (!singletonRouter.router) {
    const message = 'No router instance found.\n' + 'You should only use "next/router" inside the client side of your app.\n';
    throw new Error(message);
  }

  return singletonRouter.router;
} // Export the singletonRouter and this is the public API.


var _default = singletonRouter; // Reexport the withRoute HOC

exports.default = _default;

function useRouter() {
  return _react.default.useContext(_routerContext.RouterContext);
} // INTERNAL APIS
// -------------
// (do not use following exports inside the app)
// Create a router and assign it as the singleton instance.
// This is used in client side when we are initilizing the app.
// This should **not** use inside the server.


const createRouter = (...args) => {
  singletonRouter.router = new _router2.default(...args);
  singletonRouter.readyCallbacks.forEach(cb => cb());
  singletonRouter.readyCallbacks = [];
  return singletonRouter.router;
}; // This function is used to create the `withRouter` router instance


exports.createRouter = createRouter;

function makePublicRouterInstance(router) {
  const _router = router;
  const instance = {};

  for (const property of urlPropertyFields) {
    if (typeof _router[property] === 'object') {
      instance[property] = Object.assign(Array.isArray(_router[property]) ? [] : {}, _router[property]); // makes sure query is not stateful

      continue;
    }

    instance[property] = _router[property];
  } // Events is a static property on the router, the router doesn't have to be initialized to use it


  instance.events = _router2.default.events;
  coreMethodFields.forEach(field => {
    instance[field] = (...args) => {
      return _router[field](...args);
    };
  });
  return instance;
}

/***/ }),

/***/ "./node_modules/next/dist/client/with-router.js":
/*!******************************************************!*\
  !*** ./node_modules/next/dist/client/with-router.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(/*! @babel/runtime/helpers/interopRequireDefault */ "./node_modules/@babel/runtime/helpers/interopRequireDefault.js");

exports.__esModule = true;
exports.default = withRouter;

var _react = _interopRequireDefault(__webpack_require__(/*! react */ "react"));

var _router = __webpack_require__(/*! ./router */ "./node_modules/next/dist/client/router.js");

function withRouter(ComposedComponent) {
  function WithRouterWrapper(props) {
    return /*#__PURE__*/_react.default.createElement(ComposedComponent, Object.assign({
      router: (0, _router.useRouter)()
    }, props));
  }

  WithRouterWrapper.getInitialProps = ComposedComponent.getInitialProps // This is needed to allow checking for custom getInitialProps in _app
  ;
  WithRouterWrapper.origGetInitialProps = ComposedComponent.origGetInitialProps;

  if (true) {
    const name = ComposedComponent.displayName || ComposedComponent.name || 'Unknown';
    WithRouterWrapper.displayName = `withRouter(${name})`;
  }

  return WithRouterWrapper;
}

/***/ }),

/***/ "./node_modules/next/dist/compiled/path-to-regexp/index.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/compiled/path-to-regexp/index.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Tokenize input string.
 */
function lexer(str) {
    var tokens = [];
    var i = 0;
    while (i < str.length) {
        var char = str[i];
        if (char === "*" || char === "+" || char === "?") {
            tokens.push({ type: "MODIFIER", index: i, value: str[i++] });
            continue;
        }
        if (char === "\\") {
            tokens.push({ type: "ESCAPED_CHAR", index: i++, value: str[i++] });
            continue;
        }
        if (char === "{") {
            tokens.push({ type: "OPEN", index: i, value: str[i++] });
            continue;
        }
        if (char === "}") {
            tokens.push({ type: "CLOSE", index: i, value: str[i++] });
            continue;
        }
        if (char === ":") {
            var name = "";
            var j = i + 1;
            while (j < str.length) {
                var code = str.charCodeAt(j);
                if (
                // `0-9`
                (code >= 48 && code <= 57) ||
                    // `A-Z`
                    (code >= 65 && code <= 90) ||
                    // `a-z`
                    (code >= 97 && code <= 122) ||
                    // `_`
                    code === 95) {
                    name += str[j++];
                    continue;
                }
                break;
            }
            if (!name)
                throw new TypeError("Missing parameter name at " + i);
            tokens.push({ type: "NAME", index: i, value: name });
            i = j;
            continue;
        }
        if (char === "(") {
            var count = 1;
            var pattern = "";
            var j = i + 1;
            if (str[j] === "?") {
                throw new TypeError("Pattern cannot start with \"?\" at " + j);
            }
            while (j < str.length) {
                if (str[j] === "\\") {
                    pattern += str[j++] + str[j++];
                    continue;
                }
                if (str[j] === ")") {
                    count--;
                    if (count === 0) {
                        j++;
                        break;
                    }
                }
                else if (str[j] === "(") {
                    count++;
                    if (str[j + 1] !== "?") {
                        throw new TypeError("Capturing groups are not allowed at " + j);
                    }
                }
                pattern += str[j++];
            }
            if (count)
                throw new TypeError("Unbalanced pattern at " + i);
            if (!pattern)
                throw new TypeError("Missing pattern at " + i);
            tokens.push({ type: "PATTERN", index: i, value: pattern });
            i = j;
            continue;
        }
        tokens.push({ type: "CHAR", index: i, value: str[i++] });
    }
    tokens.push({ type: "END", index: i, value: "" });
    return tokens;
}
/**
 * Parse a string for the raw tokens.
 */
function parse(str, options) {
    if (options === void 0) { options = {}; }
    var tokens = lexer(str);
    var _a = options.prefixes, prefixes = _a === void 0 ? "./" : _a;
    var defaultPattern = "[^" + escapeString(options.delimiter || "/#?") + "]+?";
    var result = [];
    var key = 0;
    var i = 0;
    var path = "";
    var tryConsume = function (type) {
        if (i < tokens.length && tokens[i].type === type)
            return tokens[i++].value;
    };
    var mustConsume = function (type) {
        var value = tryConsume(type);
        if (value !== undefined)
            return value;
        var _a = tokens[i], nextType = _a.type, index = _a.index;
        throw new TypeError("Unexpected " + nextType + " at " + index + ", expected " + type);
    };
    var consumeText = function () {
        var result = "";
        var value;
        // tslint:disable-next-line
        while ((value = tryConsume("CHAR") || tryConsume("ESCAPED_CHAR"))) {
            result += value;
        }
        return result;
    };
    while (i < tokens.length) {
        var char = tryConsume("CHAR");
        var name = tryConsume("NAME");
        var pattern = tryConsume("PATTERN");
        if (name || pattern) {
            var prefix = char || "";
            if (prefixes.indexOf(prefix) === -1) {
                path += prefix;
                prefix = "";
            }
            if (path) {
                result.push(path);
                path = "";
            }
            result.push({
                name: name || key++,
                prefix: prefix,
                suffix: "",
                pattern: pattern || defaultPattern,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        var value = char || tryConsume("ESCAPED_CHAR");
        if (value) {
            path += value;
            continue;
        }
        if (path) {
            result.push(path);
            path = "";
        }
        var open = tryConsume("OPEN");
        if (open) {
            var prefix = consumeText();
            var name_1 = tryConsume("NAME") || "";
            var pattern_1 = tryConsume("PATTERN") || "";
            var suffix = consumeText();
            mustConsume("CLOSE");
            result.push({
                name: name_1 || (pattern_1 ? key++ : ""),
                pattern: name_1 && !pattern_1 ? defaultPattern : pattern_1,
                prefix: prefix,
                suffix: suffix,
                modifier: tryConsume("MODIFIER") || ""
            });
            continue;
        }
        mustConsume("END");
    }
    return result;
}
exports.parse = parse;
/**
 * Compile a string to a template function for the path.
 */
function compile(str, options) {
    return tokensToFunction(parse(str, options), options);
}
exports.compile = compile;
/**
 * Expose a method for transforming tokens into the path function.
 */
function tokensToFunction(tokens, options) {
    if (options === void 0) { options = {}; }
    var reFlags = flags(options);
    var _a = options.encode, encode = _a === void 0 ? function (x) { return x; } : _a, _b = options.validate, validate = _b === void 0 ? true : _b;
    // Compile all the tokens into regexps.
    var matches = tokens.map(function (token) {
        if (typeof token === "object") {
            return new RegExp("^(?:" + token.pattern + ")$", reFlags);
        }
    });
    return function (data) {
        var path = "";
        for (var i = 0; i < tokens.length; i++) {
            var token = tokens[i];
            if (typeof token === "string") {
                path += token;
                continue;
            }
            var value = data ? data[token.name] : undefined;
            var optional = token.modifier === "?" || token.modifier === "*";
            var repeat = token.modifier === "*" || token.modifier === "+";
            if (Array.isArray(value)) {
                if (!repeat) {
                    throw new TypeError("Expected \"" + token.name + "\" to not repeat, but got an array");
                }
                if (value.length === 0) {
                    if (optional)
                        continue;
                    throw new TypeError("Expected \"" + token.name + "\" to not be empty");
                }
                for (var j = 0; j < value.length; j++) {
                    var segment = encode(value[j], token);
                    if (validate && !matches[i].test(segment)) {
                        throw new TypeError("Expected all \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                    }
                    path += token.prefix + segment + token.suffix;
                }
                continue;
            }
            if (typeof value === "string" || typeof value === "number") {
                var segment = encode(String(value), token);
                if (validate && !matches[i].test(segment)) {
                    throw new TypeError("Expected \"" + token.name + "\" to match \"" + token.pattern + "\", but got \"" + segment + "\"");
                }
                path += token.prefix + segment + token.suffix;
                continue;
            }
            if (optional)
                continue;
            var typeOfMessage = repeat ? "an array" : "a string";
            throw new TypeError("Expected \"" + token.name + "\" to be " + typeOfMessage);
        }
        return path;
    };
}
exports.tokensToFunction = tokensToFunction;
/**
 * Create path match function from `path-to-regexp` spec.
 */
function match(str, options) {
    var keys = [];
    var re = pathToRegexp(str, keys, options);
    return regexpToFunction(re, keys, options);
}
exports.match = match;
/**
 * Create a path match function from `path-to-regexp` output.
 */
function regexpToFunction(re, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.decode, decode = _a === void 0 ? function (x) { return x; } : _a;
    return function (pathname) {
        var m = re.exec(pathname);
        if (!m)
            return false;
        var path = m[0], index = m.index;
        var params = Object.create(null);
        var _loop_1 = function (i) {
            // tslint:disable-next-line
            if (m[i] === undefined)
                return "continue";
            var key = keys[i - 1];
            if (key.modifier === "*" || key.modifier === "+") {
                params[key.name] = m[i].split(key.prefix + key.suffix).map(function (value) {
                    return decode(value, key);
                });
            }
            else {
                params[key.name] = decode(m[i], key);
            }
        };
        for (var i = 1; i < m.length; i++) {
            _loop_1(i);
        }
        return { path: path, index: index, params: params };
    };
}
exports.regexpToFunction = regexpToFunction;
/**
 * Escape a regular expression string.
 */
function escapeString(str) {
    return str.replace(/([.+*?=^!:${}()[\]|/\\])/g, "\\$1");
}
/**
 * Get the flags for a regexp from the options.
 */
function flags(options) {
    return options && options.sensitive ? "" : "i";
}
/**
 * Pull out keys from a regexp.
 */
function regexpToRegexp(path, keys) {
    if (!keys)
        return path;
    // Use a negative lookahead to match only capturing groups.
    var groups = path.source.match(/\((?!\?)/g);
    if (groups) {
        for (var i = 0; i < groups.length; i++) {
            keys.push({
                name: i,
                prefix: "",
                suffix: "",
                modifier: "",
                pattern: ""
            });
        }
    }
    return path;
}
/**
 * Transform an array into a regexp.
 */
function arrayToRegexp(paths, keys, options) {
    var parts = paths.map(function (path) { return pathToRegexp(path, keys, options).source; });
    return new RegExp("(?:" + parts.join("|") + ")", flags(options));
}
/**
 * Create a path regexp from string input.
 */
function stringToRegexp(path, keys, options) {
    return tokensToRegexp(parse(path, options), keys, options);
}
/**
 * Expose a function for taking tokens and returning a RegExp.
 */
function tokensToRegexp(tokens, keys, options) {
    if (options === void 0) { options = {}; }
    var _a = options.strict, strict = _a === void 0 ? false : _a, _b = options.start, start = _b === void 0 ? true : _b, _c = options.end, end = _c === void 0 ? true : _c, _d = options.encode, encode = _d === void 0 ? function (x) { return x; } : _d;
    var endsWith = "[" + escapeString(options.endsWith || "") + "]|$";
    var delimiter = "[" + escapeString(options.delimiter || "/#?") + "]";
    var route = start ? "^" : "";
    // Iterate over the tokens and create our regexp string.
    for (var _i = 0, tokens_1 = tokens; _i < tokens_1.length; _i++) {
        var token = tokens_1[_i];
        if (typeof token === "string") {
            route += escapeString(encode(token));
        }
        else {
            var prefix = escapeString(encode(token.prefix));
            var suffix = escapeString(encode(token.suffix));
            if (token.pattern) {
                if (keys)
                    keys.push(token);
                if (prefix || suffix) {
                    if (token.modifier === "+" || token.modifier === "*") {
                        var mod = token.modifier === "*" ? "?" : "";
                        route += "(?:" + prefix + "((?:" + token.pattern + ")(?:" + suffix + prefix + "(?:" + token.pattern + "))*)" + suffix + ")" + mod;
                    }
                    else {
                        route += "(?:" + prefix + "(" + token.pattern + ")" + suffix + ")" + token.modifier;
                    }
                }
                else {
                    route += "(" + token.pattern + ")" + token.modifier;
                }
            }
            else {
                route += "(?:" + prefix + suffix + ")" + token.modifier;
            }
        }
    }
    if (end) {
        if (!strict)
            route += delimiter + "?";
        route += !options.endsWith ? "$" : "(?=" + endsWith + ")";
    }
    else {
        var endToken = tokens[tokens.length - 1];
        var isEndDelimited = typeof endToken === "string"
            ? delimiter.indexOf(endToken[endToken.length - 1]) > -1
            : // tslint:disable-next-line
                endToken === undefined;
        if (!strict) {
            route += "(?:" + delimiter + "(?=" + endsWith + "))?";
        }
        if (!isEndDelimited) {
            route += "(?=" + delimiter + "|" + endsWith + ")";
        }
    }
    return new RegExp(route, flags(options));
}
exports.tokensToRegexp = tokensToRegexp;
/**
 * Normalize the given path string, returning a regular expression.
 *
 * An empty array can be passed in for the keys, which will hold the
 * placeholder key descriptions. For example, using `/user/:id`, `keys` will
 * contain `[{ name: 'id', delimiter: '/', optional: false, repeat: false }]`.
 */
function pathToRegexp(path, keys, options) {
    if (path instanceof RegExp)
        return regexpToRegexp(path, keys);
    if (Array.isArray(path))
        return arrayToRegexp(path, keys, options);
    return stringToRegexp(path, keys, options);
}
exports.pathToRegexp = pathToRegexp;
//# sourceMappingURL=index.js.map

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/mitt.js":
/*!********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/mitt.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = mitt;
/*
MIT License
Copyright (c) Jason Miller (https://jasonformat.com/)
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
*/
// This file is based on https://github.com/developit/mitt/blob/v1.1.3/src/index.js
// It's been edited for the needs of this script
// See the LICENSE at the top of the file

function mitt() {
  const all = Object.create(null);
  return {
    on(type, handler) {
      ;
      (all[type] || (all[type] = [])).push(handler);
    },

    off(type, handler) {
      if (all[type]) {
        all[type].splice(all[type].indexOf(handler) >>> 0, 1);
      }
    },

    emit(type, ...evts) {
      // eslint-disable-next-line array-callback-return
      ;
      (all[type] || []).slice().map(handler => {
        handler(...evts);
      });
    }

  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/router.js":
/*!*****************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/router.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.addLocale = addLocale;
exports.delLocale = delLocale;
exports.hasBasePath = hasBasePath;
exports.addBasePath = addBasePath;
exports.delBasePath = delBasePath;
exports.isLocalURL = isLocalURL;
exports.interpolateAs = interpolateAs;
exports.resolveHref = resolveHref;
exports.markLoadingError = markLoadingError;
exports.default = void 0;

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

var _denormalizePagePath = __webpack_require__(/*! ../../server/denormalize-page-path */ "./node_modules/next/dist/next-server/server/denormalize-page-path.js");

var _mitt = _interopRequireDefault(__webpack_require__(/*! ../mitt */ "./node_modules/next/dist/next-server/lib/mitt.js"));

var _utils = __webpack_require__(/*! ../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _isDynamic = __webpack_require__(/*! ./utils/is-dynamic */ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js");

var _parseRelativeUrl = __webpack_require__(/*! ./utils/parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var _querystring = __webpack_require__(/*! ./utils/querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _resolveRewrites = _interopRequireDefault(__webpack_require__(/*! ./utils/resolve-rewrites */ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js"));

var _routeMatcher = __webpack_require__(/*! ./utils/route-matcher */ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js");

var _routeRegex = __webpack_require__(/*! ./utils/route-regex */ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js");

var _escapePathDelimiters = _interopRequireDefault(__webpack_require__(/*! ./utils/escape-path-delimiters */ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js"));

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}
/* global __NEXT_DATA__ */
// tslint:disable:no-console


const basePath =  false || '';

function buildCancellationError() {
  return Object.assign(new Error('Route Cancelled'), {
    cancelled: true
  });
}

function addPathPrefix(path, prefix) {
  return prefix && path.startsWith('/') ? path === '/' ? (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(prefix) : `${prefix}${path}` : path;
}

function addLocale(path, locale, defaultLocale) {
  if (false) {}

  return path;
}

function delLocale(path, locale) {
  if (false) {}

  return path;
}

function hasBasePath(path) {
  return path === basePath || path.startsWith(basePath + '/');
}

function addBasePath(path) {
  // we only add the basepath on relative urls
  return addPathPrefix(path, basePath);
}

function delBasePath(path) {
  return path.slice(basePath.length) || '/';
}
/**
* Detects whether a given url is routable by the Next.js router (browser only).
*/


function isLocalURL(url) {
  if (url.startsWith('/')) return true;

  try {
    // absolute urls can be local if they are on the same origin
    const locationOrigin = (0, _utils.getLocationOrigin)();
    const resolved = new URL(url, locationOrigin);
    return resolved.origin === locationOrigin && hasBasePath(resolved.pathname);
  } catch (_) {
    return false;
  }
}

function interpolateAs(route, asPathname, query) {
  let interpolatedRoute = '';
  const dynamicRegex = (0, _routeRegex.getRouteRegex)(route);
  const dynamicGroups = dynamicRegex.groups;
  const dynamicMatches = // Try to match the dynamic route against the asPath
  (asPathname !== route ? (0, _routeMatcher.getRouteMatcher)(dynamicRegex)(asPathname) : '') || // Fall back to reading the values from the href
  // TODO: should this take priority; also need to change in the router.
  query;
  interpolatedRoute = route;
  const params = Object.keys(dynamicGroups);

  if (!params.every(param => {
    let value = dynamicMatches[param] || '';
    const {
      repeat,
      optional
    } = dynamicGroups[param]; // support single-level catch-all
    // TODO: more robust handling for user-error (passing `/`)

    let replaced = `[${repeat ? '...' : ''}${param}]`;

    if (optional) {
      replaced = `${!value ? '/' : ''}[${replaced}]`;
    }

    if (repeat && !Array.isArray(value)) value = [value];
    return (optional || param in dynamicMatches) && ( // Interpolate group into data URL if present
    interpolatedRoute = interpolatedRoute.replace(replaced, repeat ? value.map(_escapePathDelimiters.default).join('/') : (0, _escapePathDelimiters.default)(value)) || '/');
  })) {
    interpolatedRoute = ''; // did not satisfy all requirements
    // n.b. We ignore this error because we handle warning for this case in
    // development in the `<Link>` component directly.
  }

  return {
    params,
    result: interpolatedRoute
  };
}

function omitParmsFromQuery(query, params) {
  const filteredQuery = {};
  Object.keys(query).forEach(key => {
    if (!params.includes(key)) {
      filteredQuery[key] = query[key];
    }
  });
  return filteredQuery;
}
/**
* Resolves a given hyperlink with a certain router state (basePath not included).
* Preserves absolute urls.
*/


function resolveHref(currentPath, href, resolveAs) {
  // we use a dummy base url for relative urls
  const base = new URL(currentPath, 'http://n');
  const urlAsString = typeof href === 'string' ? href : (0, _utils.formatWithValidation)(href);

  try {
    const finalUrl = new URL(urlAsString, base);
    finalUrl.pathname = (0, _normalizeTrailingSlash.normalizePathTrailingSlash)(finalUrl.pathname);
    let interpolatedAs = '';

    if ((0, _isDynamic.isDynamicRoute)(finalUrl.pathname) && finalUrl.searchParams && resolveAs) {
      const query = (0, _querystring.searchParamsToUrlQuery)(finalUrl.searchParams);
      const {
        result,
        params
      } = interpolateAs(finalUrl.pathname, finalUrl.pathname, query);

      if (result) {
        interpolatedAs = (0, _utils.formatWithValidation)({
          pathname: result,
          hash: finalUrl.hash,
          query: omitParmsFromQuery(query, params)
        });
      }
    } // if the origin didn't change, it means we received a relative href


    const resolvedHref = finalUrl.origin === base.origin ? finalUrl.href.slice(finalUrl.origin.length) : finalUrl.href;
    return resolveAs ? [resolvedHref, interpolatedAs || resolvedHref] : resolvedHref;
  } catch (_) {
    return resolveAs ? [urlAsString] : urlAsString;
  }
}

const PAGE_LOAD_ERROR = Symbol('PAGE_LOAD_ERROR');

function markLoadingError(err) {
  return Object.defineProperty(err, PAGE_LOAD_ERROR, {});
}

function prepareUrlAs(router, url, as) {
  // If url and as provided as an object representation,
  // we'll format them into the string version here.
  return {
    url: addBasePath(resolveHref(router.pathname, url)),
    as: as ? addBasePath(resolveHref(router.pathname, as)) : as
  };
}

const manualScrollRestoration =  false && false;
const SSG_DATA_NOT_FOUND_ERROR = 'SSG Data NOT_FOUND';

function fetchRetry(url, attempts) {
  return fetch(url, {
    // Cookies are required to be present for Next.js' SSG "Preview Mode".
    // Cookies may also be required for `getServerSideProps`.
    //
    // > `fetch` won’t send cookies, unless you set the credentials init
    // > option.
    // https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
    //
    // > For maximum browser compatibility when it comes to sending &
    // > receiving cookies, always supply the `credentials: 'same-origin'`
    // > option instead of relying on the default.
    // https://github.com/github/fetch#caveats
    credentials: 'same-origin'
  }).then(res => {
    if (!res.ok) {
      if (attempts > 1 && res.status >= 500) {
        return fetchRetry(url, attempts - 1);
      }

      if (res.status === 404) {
        // TODO: handle reloading in development from fallback returning 200
        // to on-demand-entry-handler causing it to reload periodically
        throw new Error(SSG_DATA_NOT_FOUND_ERROR);
      }

      throw new Error(`Failed to load static props`);
    }

    return res.json();
  });
}

function fetchNextData(dataHref, isServerRender) {
  return fetchRetry(dataHref, isServerRender ? 3 : 1).catch(err => {
    // We should only trigger a server-side transition if this was caused
    // on a client-side transition. Otherwise, we'd get into an infinite
    // loop.
    if (!isServerRender) {
      markLoadingError(err);
    }

    throw err;
  });
}

class Router {
  /**
  * Map of all components loaded in `Router`
  */
  // Static Data Cache
  constructor(_pathname, _query, _as, {
    initialProps,
    pageLoader,
    App,
    wrapApp,
    Component,
    initialStyleSheets,
    err,
    subscription,
    isFallback,
    locale,
    locales,
    defaultLocale
  }) {
    this.route = void 0;
    this.pathname = void 0;
    this.query = void 0;
    this.asPath = void 0;
    this.basePath = void 0;
    this.components = void 0;
    this.sdc = {};
    this.sub = void 0;
    this.clc = void 0;
    this.pageLoader = void 0;
    this._bps = void 0;
    this.events = void 0;
    this._wrapApp = void 0;
    this.isSsr = void 0;
    this.isFallback = void 0;
    this._inFlightRoute = void 0;
    this._shallow = void 0;
    this.locale = void 0;
    this.locales = void 0;
    this.defaultLocale = void 0;

    this.onPopState = e => {
      const state = e.state;

      if (!state) {
        // We get state as undefined for two reasons.
        //  1. With older safari (< 8) and older chrome (< 34)
        //  2. When the URL changed with #
        //
        // In the both cases, we don't need to proceed and change the route.
        // (as it's already changed)
        // But we can simply replace the state with the new changes.
        // Actually, for (1) we don't need to nothing. But it's hard to detect that event.
        // So, doing the following for (1) does no harm.
        const {
          pathname,
          query
        } = this;
        this.changeState('replaceState', (0, _utils.formatWithValidation)({
          pathname: addBasePath(pathname),
          query
        }), (0, _utils.getURL)());
        return;
      }

      if (!state.__N) {
        return;
      }

      const {
        url,
        as,
        options
      } = state;
      const {
        pathname
      } = (0, _parseRelativeUrl.parseRelativeUrl)(url); // Make sure we don't re-render on initial load,
      // can be caused by navigating back from an external site

      if (this.isSsr && as === this.asPath && pathname === this.pathname) {
        return;
      } // If the downstream application returns falsy, return.
      // They will then be responsible for handling the event.


      if (this._bps && !this._bps(state)) {
        return;
      }

      this.change('replaceState', url, as, Object.assign({}, options, {
        shallow: options.shallow && this._shallow,
        locale: options.locale || this.defaultLocale
      }));
    }; // represents the current component key


    this.route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(_pathname); // set up the component cache (by route keys)

    this.components = {}; // We should not keep the cache, if there's an error
    // Otherwise, this cause issues when when going back and
    // come again to the errored page.

    if (_pathname !== '/_error') {
      this.components[this.route] = {
        Component,
        styleSheets: initialStyleSheets,
        props: initialProps,
        err,
        __N_SSG: initialProps && initialProps.__N_SSG,
        __N_SSP: initialProps && initialProps.__N_SSP
      };
    }

    this.components['/_app'] = {
      Component: App,
      styleSheets: [
        /* /_app does not need its stylesheets managed */
      ]
    }; // Backwards compat for Router.router.events
    // TODO: Should be remove the following major version as it was never documented

    this.events = Router.events;
    this.pageLoader = pageLoader;
    this.pathname = _pathname;
    this.query = _query; // if auto prerendered and dynamic route wait to update asPath
    // until after mount to prevent hydration mismatch

    this.asPath = // @ts-ignore this is temporarily global (attached to window)
    (0, _isDynamic.isDynamicRoute)(_pathname) && __NEXT_DATA__.autoExport ? _pathname : _as;
    this.basePath = basePath;
    this.sub = subscription;
    this.clc = null;
    this._wrapApp = wrapApp; // make sure to ignore extra popState in safari on navigating
    // back from external site

    this.isSsr = true;
    this.isFallback = isFallback;

    if (false) {}

    if (false) {}
  }

  reload() {
    window.location.reload();
  }
  /**
  * Go back in history
  */


  back() {
    window.history.back();
  }
  /**
  * Performs a `pushState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  push(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('pushState', url, as, options);
  }
  /**
  * Performs a `replaceState` with arguments
  * @param url of the route
  * @param as masks `url` for the browser
  * @param options object you can define `shallow` and other options
  */


  replace(url, as = url, options = {}) {
    ;
    ({
      url,
      as
    } = prepareUrlAs(this, url, as));
    return this.change('replaceState', url, as, options);
  }

  async change(method, url, as, options) {
    if (!isLocalURL(url)) {
      window.location.href = url;
      return false;
    }

    if (false) {}

    if (!options._h) {
      this.isSsr = false;
    } // marking route changes as a navigation start entry


    if (_utils.ST) {
      performance.mark('routeChange');
    }

    if (this._inFlightRoute) {
      this.abortComponentLoad(this._inFlightRoute);
    }

    as = addLocale(as, options.locale, this.defaultLocale);
    const cleanedAs = delLocale(hasBasePath(as) ? delBasePath(as) : as, this.locale);
    this._inFlightRoute = as; // If the url change is only related to a hash change
    // We should not proceed. We should only change the state.
    // WARNING: `_h` is an internal option for handing Next.js client-side
    // hydration. Your app should _never_ use this property. It may change at
    // any time without notice.

    if (!options._h && this.onlyAHashChange(cleanedAs)) {
      this.asPath = cleanedAs;
      Router.events.emit('hashChangeStart', as); // TODO: do we need the resolved href when only a hash change?

      this.changeState(method, url, as, options);
      this.scrollToHash(cleanedAs);
      this.notify(this.components[this.route]);
      Router.events.emit('hashChangeComplete', as);
      return true;
    } // The build manifest needs to be loaded before auto-static dynamic pages
    // get their query parameters to allow ensuring they can be parsed properly
    // when rewritten to


    const pages = await this.pageLoader.getPageList();
    const {
      __rewrites: rewrites
    } = await this.pageLoader.promisedBuildManifest;
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname,
      query
    } = parsed;
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // url and as should always be prefixed with basePath by this
    // point by either next/link or router.push/replace so strip the
    // basePath from the pathname to match the pages dir 1-to-1


    pathname = pathname ? (0, _normalizeTrailingSlash.removePathTrailingSlash)(delBasePath(pathname)) : pathname; // If asked to change the current URL we should reload the current page
    // (not location.reload() but reload getInitialProps and other Next.js stuffs)
    // We also need to set the method = replaceState always
    // as this should not go into the history (That's how browsers work)
    // We should compare the new asPath to the current asPath, not the url

    if (!this.urlIsNew(cleanedAs)) {
      method = 'replaceState';
    }

    let route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    const {
      shallow = false
    } = options; // we need to resolve the as value using rewrites for dynamic SSG
    // pages to allow building the data URL correctly

    let resolvedAs = as;

    if (true) {
      resolvedAs = (0, _resolveRewrites.default)((0, _parseRelativeUrl.parseRelativeUrl)(as).pathname, pages, basePath, rewrites, query, p => this._resolveHref({
        pathname: p
      }, pages).pathname);

      if (resolvedAs !== as) {
        const potentialHref = (0, _normalizeTrailingSlash.removePathTrailingSlash)(this._resolveHref(Object.assign({}, parsed, {
          pathname: resolvedAs
        }), pages, false).pathname); // if this directly matches a page we need to update the href to
        // allow the correct page chunk to be loaded

        if (pages.includes(potentialHref)) {
          route = potentialHref;
          pathname = potentialHref;
          parsed.pathname = pathname;
          url = (0, _utils.formatWithValidation)(parsed);
        }
      }
    }

    resolvedAs = delLocale(delBasePath(resolvedAs), this.locale);

    if ((0, _isDynamic.isDynamicRoute)(route)) {
      const parsedAs = (0, _parseRelativeUrl.parseRelativeUrl)(resolvedAs);
      const asPathname = parsedAs.pathname;
      const routeRegex = (0, _routeRegex.getRouteRegex)(route);
      const routeMatch = (0, _routeMatcher.getRouteMatcher)(routeRegex)(asPathname);
      const shouldInterpolate = route === asPathname;
      const interpolatedAs = shouldInterpolate ? interpolateAs(route, asPathname, query) : {};

      if (!routeMatch || shouldInterpolate && !interpolatedAs.result) {
        const missingParams = Object.keys(routeRegex.groups).filter(param => !query[param]);

        if (missingParams.length > 0) {
          if (true) {
            console.warn(`${shouldInterpolate ? `Interpolating href` : `Mismatching \`as\` and \`href\``} failed to manually provide ` + `the params: ${missingParams.join(', ')} in the \`href\`'s \`query\``);
          }

          throw new Error((shouldInterpolate ? `The provided \`href\` (${url}) value is missing query values (${missingParams.join(', ')}) to be interpolated properly. ` : `The provided \`as\` value (${asPathname}) is incompatible with the \`href\` value (${route}). `) + `Read more: https://err.sh/vercel/next.js/${shouldInterpolate ? 'href-interpolation-failed' : 'incompatible-href-as'}`);
        }
      } else if (shouldInterpolate) {
        as = (0, _utils.formatWithValidation)(Object.assign({}, parsedAs, {
          pathname: interpolatedAs.result,
          query: omitParmsFromQuery(query, interpolatedAs.params)
        }));
      } else {
        // Merge params into `query`, overwriting any specified in search
        Object.assign(query, routeMatch);
      }
    }

    Router.events.emit('routeChangeStart', as);

    try {
      const routeInfo = await this.getRouteInfo(route, pathname, query, as, shallow);
      let {
        error,
        props,
        __N_SSG,
        __N_SSP
      } = routeInfo; // handle redirect on client-transition

      if ((__N_SSG || __N_SSP) && props && props.pageProps && props.pageProps.__N_REDIRECT) {
        const destination = props.pageProps.__N_REDIRECT; // check if destination is internal (resolves to a page) and attempt
        // client-navigation if it is falling back to hard navigation if
        // it's not

        if (destination.startsWith('/')) {
          const parsedHref = (0, _parseRelativeUrl.parseRelativeUrl)(destination);

          this._resolveHref(parsedHref, pages);

          if (pages.includes(parsedHref.pathname)) {
            return this.change(method, destination, destination, options);
          }
        }

        window.location.href = destination;
        return new Promise(() => {});
      }

      Router.events.emit('beforeHistoryChange', as);
      this.changeState(method, url, addLocale(as, options.locale, this.defaultLocale), options);

      if (true) {
        const appComp = this.components['/_app'].Component;
        window.next.isPrerendered = appComp.getInitialProps === appComp.origGetInitialProps && !routeInfo.Component.getInitialProps;
      }

      await this.set(route, pathname, query, cleanedAs, routeInfo).catch(e => {
        if (e.cancelled) error = error || e;else throw e;
      });

      if (error) {
        Router.events.emit('routeChangeError', error, cleanedAs);
        throw error;
      }

      if (false) {}

      if (false) {}

      Router.events.emit('routeChangeComplete', as);
      return true;
    } catch (err) {
      if (err.cancelled) {
        return false;
      }

      throw err;
    }
  }

  changeState(method, url, as, options = {}) {
    if (true) {
      if (typeof window.history === 'undefined') {
        console.error(`Warning: window.history is not available.`);
        return;
      }

      if (typeof window.history[method] === 'undefined') {
        console.error(`Warning: window.history.${method} is not available`);
        return;
      }
    }

    if (method !== 'pushState' || (0, _utils.getURL)() !== as) {
      this._shallow = options.shallow;
      window.history[method]({
        url,
        as,
        options,
        __N: true
      }, // Most browsers currently ignores this parameter, although they may use it in the future.
      // Passing the empty string here should be safe against future changes to the method.
      // https://developer.mozilla.org/en-US/docs/Web/API/History/replaceState
      '', as);
    }
  }

  async handleRouteInfoError(err, pathname, query, as, loadErrorFail) {
    if (err.cancelled) {
      // bubble up cancellation errors
      throw err;
    }

    if (PAGE_LOAD_ERROR in err || loadErrorFail) {
      Router.events.emit('routeChangeError', err, as); // If we can't load the page it could be one of following reasons
      //  1. Page doesn't exists
      //  2. Page does exist in a different zone
      //  3. Internal error while loading the page
      // So, doing a hard reload is the proper way to deal with this.

      window.location.href = as; // Changing the URL doesn't block executing the current code path.
      // So let's throw a cancellation error stop the routing logic.

      throw buildCancellationError();
    }

    try {
      let Component;
      let styleSheets;
      let props;
      const ssg404 = err.message === SSG_DATA_NOT_FOUND_ERROR;

      if (ssg404) {
        try {
          let mod;
          ({
            page: Component,
            styleSheets,
            mod
          } = await this.fetchComponent('/404')); // TODO: should we tolerate these props missing and still render the
          // page instead of falling back to _error?

          if (mod && mod.__N_SSG) {
            props = await this._getStaticData(this.pageLoader.getDataHref('/404', '/404', true, this.locale));
          }
        } catch (_err) {// non-fatal fallback to _error
        }
      }

      if (typeof Component === 'undefined' || typeof styleSheets === 'undefined') {
        ;
        ({
          page: Component,
          styleSheets
        } = await this.fetchComponent('/_error'));
      }

      const routeInfo = {
        props,
        Component,
        styleSheets,
        err: ssg404 ? undefined : err,
        error: ssg404 ? undefined : err
      };

      if (!routeInfo.props) {
        try {
          routeInfo.props = await this.getInitialProps(Component, {
            err,
            pathname,
            query
          });
        } catch (gipErr) {
          console.error('Error in error page `getInitialProps`: ', gipErr);
          routeInfo.props = {};
        }
      }

      return routeInfo;
    } catch (routeInfoErr) {
      return this.handleRouteInfoError(routeInfoErr, pathname, query, as, true);
    }
  }

  async getRouteInfo(route, pathname, query, as, shallow = false) {
    try {
      const cachedRouteInfo = this.components[route];

      if (shallow && cachedRouteInfo && this.route === route) {
        return cachedRouteInfo;
      }

      const routeInfo = cachedRouteInfo ? cachedRouteInfo : await this.fetchComponent(route).then(res => ({
        Component: res.page,
        styleSheets: res.styleSheets,
        __N_SSG: res.mod.__N_SSG,
        __N_SSP: res.mod.__N_SSP
      }));
      const {
        Component,
        __N_SSG,
        __N_SSP
      } = routeInfo;

      if (true) {
        const {
          isValidElementType
        } = __webpack_require__(/*! react-is */ "react-is");

        if (!isValidElementType(Component)) {
          throw new Error(`The default export is not a React Component in page: "${pathname}"`);
        }
      }

      let dataHref;

      if (__N_SSG || __N_SSP) {
        dataHref = this.pageLoader.getDataHref((0, _utils.formatWithValidation)({
          pathname,
          query
        }), delBasePath(as), __N_SSG, this.locale);
      }

      const props = await this._getData(() => __N_SSG ? this._getStaticData(dataHref) : __N_SSP ? this._getServerData(dataHref) : this.getInitialProps(Component, // we provide AppTree later so this needs to be `any`
      {
        pathname,
        query,
        asPath: as
      }));
      routeInfo.props = props;
      this.components[route] = routeInfo;
      return routeInfo;
    } catch (err) {
      return this.handleRouteInfoError(err, pathname, query, as);
    }
  }

  set(route, pathname, query, as, data) {
    this.isFallback = false;
    this.route = route;
    this.pathname = pathname;
    this.query = query;
    this.asPath = as;
    return this.notify(data);
  }
  /**
  * Callback to execute before replacing router state
  * @param cb callback to be executed
  */


  beforePopState(cb) {
    this._bps = cb;
  }

  onlyAHashChange(as) {
    if (!this.asPath) return false;
    const [oldUrlNoHash, oldHash] = this.asPath.split('#');
    const [newUrlNoHash, newHash] = as.split('#'); // Makes sure we scroll to the provided hash if the url/hash are the same

    if (newHash && oldUrlNoHash === newUrlNoHash && oldHash === newHash) {
      return true;
    } // If the urls are change, there's more than a hash change


    if (oldUrlNoHash !== newUrlNoHash) {
      return false;
    } // If the hash has changed, then it's a hash only change.
    // This check is necessary to handle both the enter and
    // leave hash === '' cases. The identity case falls through
    // and is treated as a next reload.


    return oldHash !== newHash;
  }

  scrollToHash(as) {
    const [, hash] = as.split('#'); // Scroll to top if the hash is just `#` with no value

    if (hash === '') {
      window.scrollTo(0, 0);
      return;
    } // First we check if the element by id is found


    const idEl = document.getElementById(hash);

    if (idEl) {
      idEl.scrollIntoView();
      return;
    } // If there's no element with the id, we check the `name` property
    // To mirror browsers


    const nameEl = document.getElementsByName(hash)[0];

    if (nameEl) {
      nameEl.scrollIntoView();
    }
  }

  urlIsNew(asPath) {
    return this.asPath !== asPath;
  }

  _resolveHref(parsedHref, pages, applyBasePath = true) {
    const {
      pathname
    } = parsedHref;
    const cleanPathname = (0, _normalizeTrailingSlash.removePathTrailingSlash)((0, _denormalizePagePath.denormalizePagePath)(applyBasePath ? delBasePath(pathname) : pathname));

    if (cleanPathname === '/404' || cleanPathname === '/_error') {
      return parsedHref;
    } // handle resolving href for dynamic routes


    if (!pages.includes(cleanPathname)) {
      // eslint-disable-next-line array-callback-return
      pages.some(page => {
        if ((0, _isDynamic.isDynamicRoute)(page) && (0, _routeRegex.getRouteRegex)(page).re.test(cleanPathname)) {
          parsedHref.pathname = applyBasePath ? addBasePath(page) : page;
          return true;
        }
      });
    }

    return parsedHref;
  }
  /**
  * Prefetch page code, you may wait for the data during page rendering.
  * This feature only works in production!
  * @param url the href of prefetched page
  * @param asPath the as path of the prefetched page
  */


  async prefetch(url, asPath = url, options = {}) {
    let parsed = (0, _parseRelativeUrl.parseRelativeUrl)(url);
    let {
      pathname
    } = parsed;

    if (false) {}

    const pages = await this.pageLoader.getPageList();
    parsed = this._resolveHref(parsed, pages);

    if (parsed.pathname !== pathname) {
      pathname = parsed.pathname;
      url = (0, _utils.formatWithValidation)(parsed);
    } // Prefetch is not supported in development mode because it would trigger on-demand-entries


    if (true) {
      return;
    }

    const route = (0, _normalizeTrailingSlash.removePathTrailingSlash)(pathname);
    await Promise.all([this.pageLoader.prefetchData(url, asPath, typeof options.locale !== 'undefined' ? options.locale : this.locale, this.defaultLocale), this.pageLoader[options.priority ? 'loadPage' : 'prefetch'](route)]);
  }

  async fetchComponent(route) {
    let cancelled = false;

    const cancel = this.clc = () => {
      cancelled = true;
    };

    const componentResult = await this.pageLoader.loadPage(route);

    if (cancelled) {
      const error = new Error(`Abort fetching component for route: "${route}"`);
      error.cancelled = true;
      throw error;
    }

    if (cancel === this.clc) {
      this.clc = null;
    }

    return componentResult;
  }

  _getData(fn) {
    let cancelled = false;

    const cancel = () => {
      cancelled = true;
    };

    this.clc = cancel;
    return fn().then(data => {
      if (cancel === this.clc) {
        this.clc = null;
      }

      if (cancelled) {
        const err = new Error('Loading initial props cancelled');
        err.cancelled = true;
        throw err;
      }

      return data;
    });
  }

  _getStaticData(dataHref) {
    const {
      href: cacheKey
    } = new URL(dataHref, window.location.href);

    if (false) {}

    return fetchNextData(dataHref, this.isSsr).then(data => {
      this.sdc[cacheKey] = data;
      return data;
    });
  }

  _getServerData(dataHref) {
    return fetchNextData(dataHref, this.isSsr);
  }

  getInitialProps(Component, ctx) {
    const {
      Component: App
    } = this.components['/_app'];

    const AppTree = this._wrapApp(App);

    ctx.AppTree = AppTree;
    return (0, _utils.loadGetInitialProps)(App, {
      AppTree,
      Component,
      router: this,
      ctx
    });
  }

  abortComponentLoad(as) {
    if (this.clc) {
      Router.events.emit('routeChangeError', buildCancellationError(), as);
      this.clc();
      this.clc = null;
    }
  }

  notify(data) {
    return this.sub(data, this.components['/_app'].Component);
  }

}

exports.default = Router;
Router.events = (0, _mitt.default)();

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js":
/*!***************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/escape-path-delimiters.js ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = escapePathDelimiters; // escape delimiters used by path-to-regexp

function escapePathDelimiters(segment) {
  return segment.replace(/[/#?]/g, char => encodeURIComponent(char));
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/format-url.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.formatUrl = formatUrl;

var querystring = _interopRequireWildcard(__webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
} // Format function modified from nodejs
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.


const slashedProtocols = /https?|ftp|gopher|file/;

function formatUrl(urlObj) {
  let {
    auth,
    hostname
  } = urlObj;
  let protocol = urlObj.protocol || '';
  let pathname = urlObj.pathname || '';
  let hash = urlObj.hash || '';
  let query = urlObj.query || '';
  let host = false;
  auth = auth ? encodeURIComponent(auth).replace(/%3A/i, ':') + '@' : '';

  if (urlObj.host) {
    host = auth + urlObj.host;
  } else if (hostname) {
    host = auth + (~hostname.indexOf(':') ? `[${hostname}]` : hostname);

    if (urlObj.port) {
      host += ':' + urlObj.port;
    }
  }

  if (query && typeof query === 'object') {
    query = String(querystring.urlQueryToSearchParams(query));
  }

  let search = urlObj.search || query && `?${query}` || '';
  if (protocol && protocol.substr(-1) !== ':') protocol += ':';

  if (urlObj.slashes || (!protocol || slashedProtocols.test(protocol)) && host !== false) {
    host = '//' + (host || '');
    if (pathname && pathname[0] !== '/') pathname = '/' + pathname;
  } else if (!host) {
    host = '';
  }

  if (hash && hash[0] !== '#') hash = '#' + hash;
  if (search && search[0] !== '?') search = '?' + search;
  pathname = pathname.replace(/[?#]/g, encodeURIComponent);
  search = search.replace('#', '%23');
  return `${protocol}${host}${pathname}${search}${hash}`;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/is-dynamic.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.isDynamicRoute = isDynamicRoute; // Identify /[param]/ in route string

const TEST_ROUTE = /\/\[[^/]+?\](?=\/|$)/;

function isDynamicRoute(route) {
  return TEST_ROUTE.test(route);
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.parseRelativeUrl = parseRelativeUrl;

var _utils = __webpack_require__(/*! ../../utils */ "./node_modules/next/dist/next-server/lib/utils.js");

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

const DUMMY_BASE = new URL(true ? 'http://n' : undefined);
/**
* Parses path-relative urls (e.g. `/hello/world?foo=bar`). If url isn't path-relative
* (e.g. `./hello`) then at least base must be.
* Absolute urls are rejected with one exception, in the browser, absolute urls that are on
* the current origin will be parsed as relative
*/

function parseRelativeUrl(url, base) {
  const resolvedBase = base ? new URL(base, DUMMY_BASE) : DUMMY_BASE;
  const {
    pathname,
    searchParams,
    search,
    hash,
    href,
    origin,
    protocol
  } = new URL(url, resolvedBase);

  if (origin !== DUMMY_BASE.origin || protocol !== 'http:' && protocol !== 'https:') {
    throw new Error('invariant: invalid relative URL');
  }

  return {
    pathname,
    query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
    search,
    hash,
    href: href.slice(DUMMY_BASE.origin.length)
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js":
/*!***************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/path-match.js ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.pathToRegexp = exports.default = exports.customRouteMatcherOptions = exports.matcherOptions = void 0;

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

exports.pathToRegexp = pathToRegexp;

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

const matcherOptions = {
  sensitive: false,
  delimiter: '/'
};
exports.matcherOptions = matcherOptions;

const customRouteMatcherOptions = _objectSpread(_objectSpread({}, matcherOptions), {}, {
  strict: true
});

exports.customRouteMatcherOptions = customRouteMatcherOptions;

var _default = (customRoute = false) => {
  return path => {
    const keys = [];
    const matcherRegex = pathToRegexp.pathToRegexp(path, keys, customRoute ? customRouteMatcherOptions : matcherOptions);
    const matcher = pathToRegexp.regexpToFunction(matcherRegex, keys);
    return (pathname, params) => {
      const res = pathname == null ? false : matcher(pathname);

      if (!res) {
        return false;
      }

      if (customRoute) {
        for (const key of keys) {
          // unnamed params should be removed as they
          // are not allowed to be used in the destination
          if (typeof key.name === 'number') {
            delete res.params[key.name];
          }
        }
      }

      return _objectSpread(_objectSpread({}, params), res.params);
    };
  };
};

exports.default = _default;

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js":
/*!************************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

exports.__esModule = true;
exports.default = prepareDestination;

var _querystring = __webpack_require__(/*! ./querystring */ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js");

var _parseRelativeUrl = __webpack_require__(/*! ./parse-relative-url */ "./node_modules/next/dist/next-server/lib/router/utils/parse-relative-url.js");

var pathToRegexp = _interopRequireWildcard(__webpack_require__(/*! next/dist/compiled/path-to-regexp */ "./node_modules/next/dist/compiled/path-to-regexp/index.js"));

function _getRequireWildcardCache() {
  if (typeof WeakMap !== "function") return null;
  var cache = new WeakMap();

  _getRequireWildcardCache = function () {
    return cache;
  };

  return cache;
}

function _interopRequireWildcard(obj) {
  if (obj && obj.__esModule) {
    return obj;
  }

  if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
    return {
      default: obj
    };
  }

  var cache = _getRequireWildcardCache();

  if (cache && cache.has(obj)) {
    return cache.get(obj);
  }

  var newObj = {};
  var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;

  for (var key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;

      if (desc && (desc.get || desc.set)) {
        Object.defineProperty(newObj, key, desc);
      } else {
        newObj[key] = obj[key];
      }
    }
  }

  newObj.default = obj;

  if (cache) {
    cache.set(obj, newObj);
  }

  return newObj;
}

function prepareDestination(destination, params, query, appendParamsToQuery, basePath) {
  let parsedDestination = {}; // clone query so we don't modify the original

  query = Object.assign({}, query);
  delete query.__nextLocale;

  if (destination.startsWith('/')) {
    parsedDestination = (0, _parseRelativeUrl.parseRelativeUrl)(destination);
  } else {
    const {
      pathname,
      searchParams,
      hash,
      hostname,
      port,
      protocol,
      search,
      href
    } = new URL(destination);
    parsedDestination = {
      pathname,
      query: (0, _querystring.searchParamsToUrlQuery)(searchParams),
      hash,
      protocol,
      hostname,
      port,
      search,
      href
    };
  }

  const destQuery = parsedDestination.query;
  const destPath = `${parsedDestination.pathname}${parsedDestination.hash || ''}`;
  const destPathParamKeys = [];
  pathToRegexp.pathToRegexp(destPath, destPathParamKeys);
  const destPathParams = destPathParamKeys.map(key => key.name);
  let destinationCompiler = pathToRegexp.compile(destPath, // we don't validate while compiling the destination since we should
  // have already validated before we got to this point and validating
  // breaks compiling destinations with named pattern params from the source
  // e.g. /something:hello(.*) -> /another/:hello is broken with validation
  // since compile validation is meant for reversing and not for inserting
  // params from a separate path-regex into another
  {
    validate: false
  });
  let newUrl; // update any params in query values

  for (const [key, strOrArray] of Object.entries(destQuery)) {
    let value = Array.isArray(strOrArray) ? strOrArray[0] : strOrArray;

    if (value) {
      // the value needs to start with a forward-slash to be compiled
      // correctly
      value = `/${value}`;
      const queryCompiler = pathToRegexp.compile(value, {
        validate: false
      });
      value = queryCompiler(params).substr(1);
    }

    destQuery[key] = value;
  } // add path params to query if it's not a redirect and not
  // already defined in destination query or path


  const paramKeys = Object.keys(params);

  if (appendParamsToQuery && !paramKeys.some(key => destPathParams.includes(key))) {
    for (const key of paramKeys) {
      if (!(key in destQuery)) {
        destQuery[key] = params[key];
      }
    }
  }

  const shouldAddBasePath = destination.startsWith('/') && basePath;

  try {
    newUrl = `${shouldAddBasePath ? basePath : ''}${destinationCompiler(params)}`;
    const [pathname, hash] = newUrl.split('#');
    parsedDestination.pathname = pathname;
    parsedDestination.hash = `${hash ? '#' : ''}${hash || ''}`;
    delete parsedDestination.search;
  } catch (err) {
    if (err.message.match(/Expected .*? to not repeat, but got an array/)) {
      throw new Error(`To use a multi-match in the destination you must add \`*\` at the end of the param name to signify it should repeat. https://err.sh/vercel/next.js/invalid-multi-match`);
    }

    throw err;
  } // Query merge order lowest priority to highest
  // 1. initial URL query values
  // 2. path segment values
  // 3. destination specified query values


  parsedDestination.query = _objectSpread(_objectSpread({}, query), parsedDestination.query);
  return {
    newUrl,
    parsedDestination
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/querystring.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/querystring.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.searchParamsToUrlQuery = searchParamsToUrlQuery;
exports.urlQueryToSearchParams = urlQueryToSearchParams;
exports.assign = assign;

function searchParamsToUrlQuery(searchParams) {
  const query = {};
  searchParams.forEach((value, key) => {
    if (typeof query[key] === 'undefined') {
      query[key] = value;
    } else if (Array.isArray(query[key])) {
      ;
      query[key].push(value);
    } else {
      query[key] = [query[key], value];
    }
  });
  return query;
}

function stringifyUrlQueryParam(param) {
  if (typeof param === 'string' || typeof param === 'number' && !isNaN(param) || typeof param === 'boolean') {
    return String(param);
  } else {
    return '';
  }
}

function urlQueryToSearchParams(urlQuery) {
  const result = new URLSearchParams();
  Object.entries(urlQuery).forEach(([key, value]) => {
    if (Array.isArray(value)) {
      value.forEach(item => result.append(key, stringifyUrlQueryParam(item)));
    } else {
      result.set(key, stringifyUrlQueryParam(value));
    }
  });
  return result;
}

function assign(target, ...searchParamsList) {
  searchParamsList.forEach(searchParams => {
    Array.from(searchParams.keys()).forEach(key => target.delete(key));
    searchParams.forEach((value, key) => target.append(key, value));
  });
  return target;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js":
/*!*********************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/resolve-rewrites.js ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.default = resolveRewrites;

var _pathMatch = _interopRequireDefault(__webpack_require__(/*! ./path-match */ "./node_modules/next/dist/next-server/lib/router/utils/path-match.js"));

var _prepareDestination = _interopRequireDefault(__webpack_require__(/*! ./prepare-destination */ "./node_modules/next/dist/next-server/lib/router/utils/prepare-destination.js"));

var _normalizeTrailingSlash = __webpack_require__(/*! ../../../../client/normalize-trailing-slash */ "./node_modules/next/dist/client/normalize-trailing-slash.js");

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    default: obj
  };
}

const customRouteMatcher = (0, _pathMatch.default)(true);

function resolveRewrites(asPath, pages, basePath, rewrites, query, resolveHref) {
  if (!pages.includes(asPath)) {
    for (const rewrite of rewrites) {
      const matcher = customRouteMatcher(rewrite.source);
      const params = matcher(asPath);

      if (params) {
        if (!rewrite.destination) {
          // this is a proxied rewrite which isn't handled on the client
          break;
        }

        const destRes = (0, _prepareDestination.default)(rewrite.destination, params, query, true, rewrite.basePath === false ? '' : basePath);
        asPath = destRes.parsedDestination.pathname;
        Object.assign(query, destRes.parsedDestination.query);

        if (pages.includes((0, _normalizeTrailingSlash.removePathTrailingSlash)(asPath))) {
          // check if we now match a page as this means we are done
          // resolving the rewrites
          break;
        } // check if we match a dynamic-route, if so we break the rewrites chain


        const resolvedHref = resolveHref(asPath);

        if (resolvedHref !== asPath && pages.includes(resolvedHref)) {
          break;
        }
      }
    }
  }

  return asPath;
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js":
/*!******************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-matcher.js ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteMatcher = getRouteMatcher;

function getRouteMatcher(routeRegex) {
  const {
    re,
    groups
  } = routeRegex;
  return pathname => {
    const routeMatch = re.exec(pathname);

    if (!routeMatch) {
      return false;
    }

    const decode = param => {
      try {
        return decodeURIComponent(param);
      } catch (_) {
        const err = new Error('failed to decode param');
        err.code = 'DECODE_FAILED';
        throw err;
      }
    };

    const params = {};
    Object.keys(groups).forEach(slugName => {
      const g = groups[slugName];
      const m = routeMatch[g.pos];

      if (m !== undefined) {
        params[slugName] = ~m.indexOf('/') ? m.split('/').map(entry => decode(entry)) : g.repeat ? [decode(m)] : decode(m);
      }
    });
    return params;
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/router/utils/route-regex.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/router/utils/route-regex.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.getRouteRegex = getRouteRegex; // this isn't importing the escape-string-regex module
// to reduce bytes

function escapeRegex(str) {
  return str.replace(/[|\\{}()[\]^$+*?.-]/g, '\\$&');
}

function parseParameter(param) {
  const optional = param.startsWith('[') && param.endsWith(']');

  if (optional) {
    param = param.slice(1, -1);
  }

  const repeat = param.startsWith('...');

  if (repeat) {
    param = param.slice(3);
  }

  return {
    key: param,
    repeat,
    optional
  };
}

function getRouteRegex(normalizedRoute) {
  const segments = (normalizedRoute.replace(/\/$/, '') || '/').slice(1).split('/');
  const groups = {};
  let groupIndex = 1;
  const parameterizedRoute = segments.map(segment => {
    if (segment.startsWith('[') && segment.endsWith(']')) {
      const {
        key,
        optional,
        repeat
      } = parseParameter(segment.slice(1, -1));
      groups[key] = {
        pos: groupIndex++,
        repeat,
        optional
      };
      return repeat ? optional ? '(?:/(.+?))?' : '/(.+?)' : '/([^/]+?)';
    } else {
      return `/${escapeRegex(segment)}`;
    }
  }).join(''); // dead code eliminate for browser since it's only needed
  // while generating routes-manifest

  if (true) {
    let routeKeyCharCode = 97;
    let routeKeyCharLength = 1; // builds a minimal routeKey using only a-z and minimal number of characters

    const getSafeRouteKey = () => {
      let routeKey = '';

      for (let i = 0; i < routeKeyCharLength; i++) {
        routeKey += String.fromCharCode(routeKeyCharCode);
        routeKeyCharCode++;

        if (routeKeyCharCode > 122) {
          routeKeyCharLength++;
          routeKeyCharCode = 97;
        }
      }

      return routeKey;
    };

    const routeKeys = {};
    let namedParameterizedRoute = segments.map(segment => {
      if (segment.startsWith('[') && segment.endsWith(']')) {
        const {
          key,
          optional,
          repeat
        } = parseParameter(segment.slice(1, -1)); // replace any non-word characters since they can break
        // the named regex

        let cleanedKey = key.replace(/\W/g, '');
        let invalidKey = false; // check if the key is still invalid and fallback to using a known
        // safe key

        if (cleanedKey.length === 0 || cleanedKey.length > 30) {
          invalidKey = true;
        }

        if (!isNaN(parseInt(cleanedKey.substr(0, 1)))) {
          invalidKey = true;
        }

        if (invalidKey) {
          cleanedKey = getSafeRouteKey();
        }

        routeKeys[cleanedKey] = key;
        return repeat ? optional ? `(?:/(?<${cleanedKey}>.+?))?` : `/(?<${cleanedKey}>.+?)` : `/(?<${cleanedKey}>[^/]+?)`;
      } else {
        return `/${escapeRegex(segment)}`;
      }
    }).join('');
    return {
      re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
      groups,
      routeKeys,
      namedRegex: `^${namedParameterizedRoute}(?:/)?$`
    };
  }

  return {
    re: new RegExp(`^${parameterizedRoute}(?:/)?$`),
    groups
  };
}

/***/ }),

/***/ "./node_modules/next/dist/next-server/lib/utils.js":
/*!*********************************************************!*\
  !*** ./node_modules/next/dist/next-server/lib/utils.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


exports.__esModule = true;
exports.execOnce = execOnce;
exports.getLocationOrigin = getLocationOrigin;
exports.getURL = getURL;
exports.getDisplayName = getDisplayName;
exports.isResSent = isResSent;
exports.loadGetInitialProps = loadGetInitialProps;
exports.formatWithValidation = formatWithValidation;
exports.ST = exports.SP = exports.urlObjectKeys = void 0;

var _formatUrl = __webpack_require__(/*! ./router/utils/format-url */ "./node_modules/next/dist/next-server/lib/router/utils/format-url.js");
/**
* Utils
*/


function execOnce(fn) {
  let used = false;
  let result;
  return (...args) => {
    if (!used) {
      used = true;
      result = fn(...args);
    }

    return result;
  };
}

function getLocationOrigin() {
  const {
    protocol,
    hostname,
    port
  } = window.location;
  return `${protocol}//${hostname}${port ? ':' + port : ''}`;
}

function getURL() {
  const {
    href
  } = window.location;
  const origin = getLocationOrigin();
  return href.substring(origin.length);
}

function getDisplayName(Component) {
  return typeof Component === 'string' ? Component : Component.displayName || Component.name || 'Unknown';
}

function isResSent(res) {
  return res.finished || res.headersSent;
}

async function loadGetInitialProps(App, ctx) {
  if (true) {
    var _App$prototype;

    if ((_App$prototype = App.prototype) == null ? void 0 : _App$prototype.getInitialProps) {
      const message = `"${getDisplayName(App)}.getInitialProps()" is defined as an instance method - visit https://err.sh/vercel/next.js/get-initial-props-as-an-instance-method for more information.`;
      throw new Error(message);
    }
  } // when called from _app `ctx` is nested in `ctx`


  const res = ctx.res || ctx.ctx && ctx.ctx.res;

  if (!App.getInitialProps) {
    if (ctx.ctx && ctx.Component) {
      // @ts-ignore pageProps default
      return {
        pageProps: await loadGetInitialProps(ctx.Component, ctx.ctx)
      };
    }

    return {};
  }

  const props = await App.getInitialProps(ctx);

  if (res && isResSent(res)) {
    return props;
  }

  if (!props) {
    const message = `"${getDisplayName(App)}.getInitialProps()" should resolve to an object. But found "${props}" instead.`;
    throw new Error(message);
  }

  if (true) {
    if (Object.keys(props).length === 0 && !ctx.ctx) {
      console.warn(`${getDisplayName(App)} returned an empty object from \`getInitialProps\`. This de-optimizes and prevents automatic static optimization. https://err.sh/vercel/next.js/empty-object-getInitialProps`);
    }
  }

  return props;
}

const urlObjectKeys = ['auth', 'hash', 'host', 'hostname', 'href', 'path', 'pathname', 'port', 'protocol', 'query', 'search', 'slashes'];
exports.urlObjectKeys = urlObjectKeys;

function formatWithValidation(url) {
  if (true) {
    if (url !== null && typeof url === 'object') {
      Object.keys(url).forEach(key => {
        if (urlObjectKeys.indexOf(key) === -1) {
          console.warn(`Unknown key passed via urlObject into url.format: ${key}`);
        }
      });
    }
  }

  return (0, _formatUrl.formatUrl)(url);
}

const SP = typeof performance !== 'undefined';
exports.SP = SP;
const ST = SP && typeof performance.mark === 'function' && typeof performance.measure === 'function';
exports.ST = ST;

/***/ }),

/***/ "./node_modules/next/dist/next-server/server/denormalize-page-path.js":
/*!****************************************************************************!*\
  !*** ./node_modules/next/dist/next-server/server/denormalize-page-path.js ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
exports.__esModule=true;exports.normalizePathSep=normalizePathSep;exports.denormalizePagePath=denormalizePagePath;function normalizePathSep(path){return path.replace(/\\/g,'/');}function denormalizePagePath(page){page=normalizePathSep(page);if(page.startsWith('/index/')){page=page.slice(6);}else if(page==='/index'){page='/';}return page;}
//# sourceMappingURL=denormalize-page-path.js.map

/***/ }),

/***/ "./node_modules/next/link.js":
/*!***********************************!*\
  !*** ./node_modules/next/link.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./dist/client/link */ "./node_modules/next/dist/client/link.js")


/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: getStaticProps, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _actions_news_action__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../actions/news.action */ "./actions/news.action.js");
/* harmony import */ var _actions_review_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/review.action */ "./actions/review.action.js");
/* harmony import */ var _actions_mobile_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/mobile.action */ "./actions/mobile.action.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/fi */ "react-icons/fi");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-render-html */ "react-render-html");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_render_html__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../styles/homePage.module.css */ "./styles/homePage.module.css");
/* harmony import */ var _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(_styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-loader-spinner */ "react-loader-spinner");
/* harmony import */ var react_loader_spinner__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_loader_spinner__WEBPACK_IMPORTED_MODULE_14__);

var _jsxFileName = "C:\\react projects\\next 1.0.1\\frontend\\pages\\index.js";















/**completed{!head} */

const Index = ({
  latestNews,
  secondLatestNews,
  latestReview,
  secondLatestReview,
  eightLatestReview,
  newsLimitFirstSection,
  newsLimitSecondSection,
  newsLimitFinalSection,
  limitedReviewsSectionOne,
  limitedReviewsSectionTwo,
  reviewListLatest,
  mobileListLatest
}) => {
  const head = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
      children: ["Phone specs, News and Reviews hub - ", _config__WEBPACK_IMPORTED_MODULE_8__["APP_NAME"]]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "description",
      content: `brings you the latest tech news, best mobile reviews and mobile specs to make your choices much easier - ${_config__WEBPACK_IMPORTED_MODULE_8__["APP_NAME"]} `
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "canonical",
      href: `${_config__WEBPACK_IMPORTED_MODULE_8__["DOMAIN"]}/`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "twitter:card",
      content: "summary"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "twitter:site",
      content: `@${_config__WEBPACK_IMPORTED_MODULE_8__["TWITTER_PUBLISHER_HANDLE"]}`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 62,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "twitter:title",
      content: `Phone specs, News and Reviews hub - ${_config__WEBPACK_IMPORTED_MODULE_8__["APP_NAME"]}`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "twitter:description",
      content: `brings you the latest tech news, best mobile reviews and mobile specs to make your choices much easier - ${_config__WEBPACK_IMPORTED_MODULE_8__["APP_NAME"]} `
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 67,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "twitter:creator",
      content: `@${_config__WEBPACK_IMPORTED_MODULE_8__["TWITTER_AUTHOR_HANDLE"]}`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 71,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "twitter:image",
      content: `${_config__WEBPACK_IMPORTED_MODULE_8__["DOMAIN"]}/static/images/logo_for_twitter.png`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "twitter:image:alt",
      content: `${_config__WEBPACK_IMPORTED_MODULE_8__["DOMAIN"]}`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 77,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      property: "og:title",
      content: `Phone specs, News and Reviews hub - ${_config__WEBPACK_IMPORTED_MODULE_8__["APP_NAME"]}`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 80,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      property: "og:type",
      content: "website"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 84,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      property: "og:url",
      content: `${_config__WEBPACK_IMPORTED_MODULE_8__["DOMAIN"]}/`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 85,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      alt: `${_config__WEBPACK_IMPORTED_MODULE_8__["DOMAIN"]}`,
      property: "og:image",
      content: `${_config__WEBPACK_IMPORTED_MODULE_8__["DOMAIN"]}/static/images/resize-og-logo.png`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 86,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      property: "og:description",
      content: `brings you the latest tech news, best mobile reviews and mobile specs to make your choices much easier - ${_config__WEBPACK_IMPORTED_MODULE_8__["APP_NAME"]} `
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 91,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      property: "og:site_name",
      content: _config__WEBPACK_IMPORTED_MODULE_8__["APP_NAME"]
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 95,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      property: "og:image:type",
      content: "image/png"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 96,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      property: "fb:app_id",
      content: `${_config__WEBPACK_IMPORTED_MODULE_8__["FB_APP_ID"]}`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 97,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 53,
    columnNumber: 5
  }, undefined);
  /**this function executes main top featuring contents - for large screen 1200px*/


  const showHighlight = () => {
    return (
      /*#__PURE__*/

      /**main large screen div starts here */
      Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-md-12 pl-0 pr-0 mt-4",
        style: {
          width: "100%"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row ml-0 mr-0",
          style: {
            width: "100%",
            height: "500px"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-6 pl-0 pr-0",
            style: {
              width: "100%",
              height: "500px"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
              href: `/news/${latestNews.slug}`,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                style: {
                  textDecoration: "none"
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: `${_styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.container_common} ${_styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.container_left}`,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.overlay
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 124,
                    columnNumber: 19
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.img_wrapper,
                    src: `${_config__WEBPACK_IMPORTED_MODULE_8__["API"]}/news/photo/${latestNews.slug}`,
                    alt: latestNews.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 126,
                    columnNumber: 19
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.news_title,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                      children: latestNews.title
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 132,
                      columnNumber: 21
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 131,
                    columnNumber: 19
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.author,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: ["By ", latestNews.postedBy.username, " |", " ", moment__WEBPACK_IMPORTED_MODULE_3___default()(latestNews.updatedAt).fromNow()]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 135,
                      columnNumber: 21
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 134,
                    columnNumber: 19
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.blog_type,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: "NEWS"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 141,
                      columnNumber: 21
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 140,
                    columnNumber: 19
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 121,
                  columnNumber: 17
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 116,
                columnNumber: 15
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 115,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 111,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: `col-md-6 pl-0 pr-0 ${_styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.container_right}`,
            style: {
              width: "100%",
              height: "500px"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "row ml-0 mr-0",
              style: {
                width: "100%",
                height: "500px"
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-md-12 pl-0 pr-0",
                style: {
                  width: "100%",
                  height: "250px"
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
                  href: `/news/${secondLatestNews.slug}`,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    style: {
                      textDecoration: "none"
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: `${_styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.container_common} ${_styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.container_right_top}`,
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.overlay
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 171,
                        columnNumber: 23
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                        className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.img_wrapper,
                        src: `${_config__WEBPACK_IMPORTED_MODULE_8__["API"]}/news/photo/${secondLatestNews.slug}`,
                        alt: secondLatestNews.title
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 172,
                        columnNumber: 23
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: `${_styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.news_title} ${_styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.news_title_right_top}`,
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                          children: secondLatestNews.title
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 181,
                          columnNumber: 25
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 178,
                        columnNumber: 23
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.author,
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          children: ["By ", secondLatestNews.postedBy.username, " |", " ", moment__WEBPACK_IMPORTED_MODULE_3___default()(secondLatestNews.updatedAt).fromNow()]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 184,
                          columnNumber: 25
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 183,
                        columnNumber: 23
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.blog_type,
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          children: "NEWS"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 190,
                          columnNumber: 25
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 189,
                        columnNumber: 23
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 168,
                      columnNumber: 21
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 163,
                    columnNumber: 19
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 162,
                  columnNumber: 17
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 158,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: `col-md-12 pl-0 pr-0 ${_styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.container_right_bottom}`,
                style: {
                  width: "100%",
                  height: "250px"
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "row ml-0 mr-0",
                  style: {
                    width: "100%"
                  },
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "col-md-6 pl-0 pr-0",
                    style: {
                      width: "100%"
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
                      href: `/reviews/${latestReview.slug}`,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        style: {
                          textDecoration: "none"
                        },
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: `${_styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.container_common} ${_styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.container_right_bottom_left}`,
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.overlay
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 214,
                            columnNumber: 27
                          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                            className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.img_wrapper,
                            src: `${_config__WEBPACK_IMPORTED_MODULE_8__["API"]}/reviews/photo/${latestReview.slug}`,
                            alt: latestReview.title
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 215,
                            columnNumber: 27
                          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: `${_styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.news_title} ${_styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.news_title_right_bottom_left}`,
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                              children: latestReview.title
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 223,
                              columnNumber: 29
                            }, undefined)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 220,
                            columnNumber: 27
                          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.author,
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                              children: ["By ", latestReview.postedBy.username, " |", " ", moment__WEBPACK_IMPORTED_MODULE_3___default()(latestReview.updatedAt).fromNow()]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 226,
                              columnNumber: 29
                            }, undefined)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 225,
                            columnNumber: 27
                          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.blog_type,
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                              children: "REVIEW"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 232,
                              columnNumber: 29
                            }, undefined)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 231,
                            columnNumber: 27
                          }, undefined)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 211,
                          columnNumber: 25
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 206,
                        columnNumber: 23
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 205,
                      columnNumber: 21
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 204,
                    columnNumber: 19
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "col-md-6 pl-0 pr-0",
                    style: {
                      width: "100%"
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
                      href: `/reviews/${secondLatestReview.slug}`,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        style: {
                          textDecoration: "none"
                        },
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: `${_styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.container_common} ${_styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.container_right_bottom_right}`,
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.overlay
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 250,
                            columnNumber: 27
                          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                            className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.img_wrapper,
                            src: `${_config__WEBPACK_IMPORTED_MODULE_8__["API"]}/reviews/photo/${secondLatestReview.slug}`,
                            alt: secondLatestReview.title
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 251,
                            columnNumber: 27
                          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: `${_styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.news_title} ${_styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.news_title_right_bottom_right}`,
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                              children: secondLatestReview.title
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 259,
                              columnNumber: 29
                            }, undefined)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 256,
                            columnNumber: 27
                          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.author,
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                              children: ["By ", secondLatestReview.postedBy.username, " |", " ", moment__WEBPACK_IMPORTED_MODULE_3___default()(secondLatestReview.updatedAt).fromNow()]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 262,
                              columnNumber: 29
                            }, undefined)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 261,
                            columnNumber: 27
                          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.blog_type,
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                              children: "REVIEW"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 268,
                              columnNumber: 29
                            }, undefined)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 267,
                            columnNumber: 27
                          }, undefined)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 247,
                          columnNumber: 25
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 242,
                        columnNumber: 23
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 241,
                      columnNumber: 21
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 240,
                    columnNumber: 19
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 202,
                  columnNumber: 17
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 198,
                columnNumber: 15
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 153,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 149,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 106,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 105,
        columnNumber: 7
      }, undefined)
      /**main large screen div ends here */

    );
  };
  /**this function executes main top featuring contents - for medium screen 1001px*/


  const showHighlightMediumScreen = () => {
    return (
      /*#__PURE__*/

      /**main medium screen div starts here */
      Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "col-md-12 pl-0 pr-0 mt-4",
        style: {
          width: "100%"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row ml-0 mr-0",
          style: {
            width: "100%",
            height: "500px"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-6 pl-0 pr-0",
            style: {
              width: "100%",
              height: "500px"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
              href: `/news/${latestNews.slug}`,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                style: {
                  textDecoration: "none"
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: `${_styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.container_common} ${_styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.container_left}`,
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.overlay
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 310,
                    columnNumber: 19
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.img_wrapper,
                    src: `${_config__WEBPACK_IMPORTED_MODULE_8__["API"]}/news/photo/${latestNews.slug}`,
                    alt: latestNews.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 311,
                    columnNumber: 19
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.news_title,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                      children: latestNews.title
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 317,
                      columnNumber: 21
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 316,
                    columnNumber: 19
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.author,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: ["By ", latestNews.postedBy.username, " |", " ", moment__WEBPACK_IMPORTED_MODULE_3___default()(latestNews.updatedAt).fromNow()]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 320,
                      columnNumber: 21
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 319,
                    columnNumber: 19
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.blog_type,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: "NEWS"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 326,
                      columnNumber: 21
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 325,
                    columnNumber: 19
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 307,
                  columnNumber: 17
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 302,
                columnNumber: 15
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 301,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 297,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-6 pl-0 pr-0",
            style: {
              width: "100%",
              height: "500px"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "row ml-0 mr-0",
              style: {
                width: "100%",
                height: "500px"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: `col-md-12 pl-0 pr-0 ${_styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.container_right_medium_screen}`,
                style: {
                  width: "100%",
                  height: "420px"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: `${_styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.container_common} ${_styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.container_right_top_medium_screen}`,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
                    href: `/news/${secondLatestNews.slug}`,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      style: {
                        textDecoration: "none"
                      },
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.overlay
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 356,
                        columnNumber: 23
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                        className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.img_wrapper,
                        src: `${_config__WEBPACK_IMPORTED_MODULE_8__["API"]}/news/photo/${secondLatestNews.slug}`,
                        alt: secondLatestNews.title
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 357,
                        columnNumber: 23
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: `${_styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.news_title} ${_styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.news_title_right_top_medium_screen}`,
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                          children: secondLatestNews.title
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 365,
                          columnNumber: 25
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 362,
                        columnNumber: 23
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.author,
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          children: [" ", "By ", secondLatestNews.postedBy.username, " |", " ", moment__WEBPACK_IMPORTED_MODULE_3___default()(secondLatestNews.updatedAt).fromNow()]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 368,
                          columnNumber: 25
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 367,
                        columnNumber: 23
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.blog_type,
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          children: "NEWS"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 375,
                          columnNumber: 25
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 374,
                        columnNumber: 23
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 351,
                      columnNumber: 21
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 350,
                    columnNumber: 19
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 347,
                  columnNumber: 17
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: `${_styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.container_common} ${_styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.container_right_bottom_medium_screen}`,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
                    href: `/reviews/${latestReview.slug}`,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      style: {
                        textDecoration: "none"
                      },
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.overlay
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 391,
                        columnNumber: 23
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                        className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.img_wrapper,
                        src: `${_config__WEBPACK_IMPORTED_MODULE_8__["API"]}/reviews/photo/${latestReview.slug}`,
                        alt: latestReview.title
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 392,
                        columnNumber: 23
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: `${_styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.news_title} ${_styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.news_title_right_bottom_medium_screen}`,
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                          children: latestReview.title
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 400,
                          columnNumber: 25
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 397,
                        columnNumber: 23
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.author,
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          children: ["By ", latestReview.postedBy.username, " |", " ", moment__WEBPACK_IMPORTED_MODULE_3___default()(latestReview.updatedAt).fromNow()]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 403,
                          columnNumber: 25
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 402,
                        columnNumber: 23
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.blog_type,
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          children: "REVIEW"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 409,
                          columnNumber: 25
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 408,
                        columnNumber: 23
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 386,
                      columnNumber: 21
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 385,
                    columnNumber: 19
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 382,
                  columnNumber: 17
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 342,
                columnNumber: 15
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 338,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 334,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 292,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 291,
        columnNumber: 7
      }, undefined)
      /**main medium screen div ends here */

    );
  };
  /**this function executes main top featuring contents - for small screen 767px*/


  const smallScreenHighlight = () => {
    return (
      /*#__PURE__*/

      /**main small screen div starts here */
      Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: `col-md-12 mt-4 ${_styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.small_screen_block}`,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.small_screen_container,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: `/reviews/${latestReview.slug}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              style: {
                textDecoration: "none"
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.overlay
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 438,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.small_screen_img_wrapper,
                src: `${_config__WEBPACK_IMPORTED_MODULE_8__["API"]}/reviews/photo/${latestReview.slug}`,
                alt: latestReview.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 439,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: `${_styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.news_title} ${_styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.news_title_small_screen}`,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  children: latestReview.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 447,
                  columnNumber: 17
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 444,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.author,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: ["By ", latestReview.postedBy.username, " |", " ", moment__WEBPACK_IMPORTED_MODULE_3___default()(latestReview.updatedAt).fromNow()]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 450,
                  columnNumber: 17
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 449,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.blog_type,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: "REVIEW"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 456,
                  columnNumber: 17
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 455,
                columnNumber: 15
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 433,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 432,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 431,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.small_screen_container,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: `/news/${latestNews.slug}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              style: {
                textDecoration: "none"
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.overlay
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 470,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.small_screen_img_wrapper,
                src: `${_config__WEBPACK_IMPORTED_MODULE_8__["API"]}/news/photo/${latestNews.slug}`,
                alt: latestNews.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 471,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: `${_styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.news_title} ${_styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.news_title_small_screen}`,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  children: latestNews.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 479,
                  columnNumber: 17
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 476,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.author,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: ["By ", latestNews.postedBy.username, " |", " ", moment__WEBPACK_IMPORTED_MODULE_3___default()(latestNews.updatedAt).fromNow()]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 482,
                  columnNumber: 17
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 481,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.blog_type,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: "NEWS"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 488,
                  columnNumber: 17
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 487,
                columnNumber: 15
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 465,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 464,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 463,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.small_screen_container,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: `/reviews/${secondLatestReview.slug}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              style: {
                textDecoration: "none"
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.overlay
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 502,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.small_screen_img_wrapper,
                src: `${_config__WEBPACK_IMPORTED_MODULE_8__["API"]}/reviews/photo/${secondLatestReview.slug}`,
                alt: secondLatestReview.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 503,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: `${_styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.news_title} ${_styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.news_title_small_screen}`,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  children: secondLatestReview.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 511,
                  columnNumber: 17
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 508,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.author,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: ["By ", secondLatestReview.postedBy.username, " |", " ", moment__WEBPACK_IMPORTED_MODULE_3___default()(secondLatestReview.updatedAt).fromNow()]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 514,
                  columnNumber: 17
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 513,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.blog_type,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: "REVIEW"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 520,
                  columnNumber: 17
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 519,
                columnNumber: 15
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 497,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 496,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 495,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.small_screen_container,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: `/news/${secondLatestNews.slug}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              style: {
                textDecoration: "none"
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.overlay
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 534,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.small_screen_img_wrapper,
                src: `${_config__WEBPACK_IMPORTED_MODULE_8__["API"]}/news/photo/${secondLatestNews.slug}`,
                alt: secondLatestNews.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 535,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: `${_styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.news_title} ${_styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.news_title_small_screen}`,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  children: secondLatestNews.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 543,
                  columnNumber: 17
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 540,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.author,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: [" ", "By ", secondLatestNews.postedBy.username, " |", " ", moment__WEBPACK_IMPORTED_MODULE_3___default()(secondLatestNews.updatedAt).fromNow()]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 546,
                  columnNumber: 17
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 545,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.blog_type,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: "NEWS"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 553,
                  columnNumber: 17
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 552,
                columnNumber: 15
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 529,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 528,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 527,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 429,
        columnNumber: 7
      }, undefined)
      /**main small screen div ends here */

    );
  };
  /**load more functions */


  const newsLimit = 10;
  const newsSkip = 27;
  const {
    0: limit,
    1: setLimit
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(newsLimit);
  const {
    0: skip,
    1: setSkip
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(newsSkip);
  const {
    0: newsSize,
    1: setNewsSize
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(newsLimitFinalSection.length);
  const {
    0: loadedNews,
    1: setLoadedNews
  } = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])([]);

  const loadMore = () => {
    let toSkip = skip + limit;
    Object(_actions_news_action__WEBPACK_IMPORTED_MODULE_5__["newsListPublicLimitFinalSection"])(skip, limit).then(data => {
      if (data.error) {
        console.log(data.error);
      } else {
        setLoadedNews([...loadedNews, ...data]);
        setNewsSize(data.length);
        setSkip(toSkip);
      }
    });
  };

  const loadMoreButton = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "container",
      style: {
        textAlign: "center",
        width: "100%"
      },
      children: newsSize > 0 && newsSize >= limit && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        onClick: loadMore,
        className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.load_more_button,
        children: "Load more"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 589,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 587,
      columnNumber: 7
    }, undefined);
  };
  /**done */


  const showNewsFinalSectionLoadedNews = () => {
    return loadedNews.map((blog, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.news__container,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.image__news,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: `/news/${blog.slug}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              style: {
                textDecoration: "none",
                width: "100%"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                className: "img img-fluid",
                src: `${_config__WEBPACK_IMPORTED_MODULE_8__["API"]}/news/photo/${blog.slug}`,
                alt: blog.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 604,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 603,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 602,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 601,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.content__news,
          style: {
            display: "flex",
            flexDirection: "column"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.content__div,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
              href: `/news/${blog.slug}`,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                style: {
                  textDecoration: "none",
                  width: "100%"
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  children: blog.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 619,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 618,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 617,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 616,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.excerpt_div,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
              href: `/news/${blog.slug}`,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                style: {
                  textDecoration: "none",
                  width: "100%"
                },
                children: react_render_html__WEBPACK_IMPORTED_MODULE_12___default()(blog.excerpt)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 625,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 624,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 623,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.author__div,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: [" ", moment__WEBPACK_IMPORTED_MODULE_3___default()(blog.updatedAt).fromNow(), " | by ", blog.postedBy.username]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 631,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 630,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 612,
          columnNumber: 11
        }, undefined)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 600,
        columnNumber: 9
      }, undefined)
    }, i, false, {
      fileName: _jsxFileName,
      lineNumber: 599,
      columnNumber: 7
    }, undefined));
  };
  /**load more ends here */

  /**done */


  const showSideBarReviews = () => {
    return reviewListLatest.map((blog, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.review_container_middle,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.image_review_middle,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: `/reviews/${blog.slug}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              style: {
                textDecoration: "none",
                width: "100%"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                className: "img img-fluid",
                src: `${_config__WEBPACK_IMPORTED_MODULE_8__["API"]}/reviews/photo/${blog.slug}`,
                alt: blog.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 651,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 650,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 649,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 648,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.content_review_middle,
          style: {
            display: "flex",
            flexDirection: "column"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.content_div_review_middle,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
              href: `/reviews/${blog.slug}`,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                style: {
                  textDecoration: "none",
                  width: "100%"
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  children: blog.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 666,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 665,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 664,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 663,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.author_div_review_middle,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: [" ", moment__WEBPACK_IMPORTED_MODULE_3___default()(blog.updatedAt).fromNow(), " | by ", blog.postedBy.username]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 672,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 671,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 659,
          columnNumber: 11
        }, undefined)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 647,
        columnNumber: 9
      }, undefined)
    }, i, false, {
      fileName: _jsxFileName,
      lineNumber: 646,
      columnNumber: 7
    }, undefined));
  };
  /**done */


  const showSideBarMobiles = () => {
    return mobileListLatest.map((m, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.single__card__phone,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.card__image__container__phone,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: `/phones/brand/${m.slug}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: `${_config__WEBPACK_IMPORTED_MODULE_8__["API"]}/mobile/photo/${m.slug}`,
                alt: `${m.title}`
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 691,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 690,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 689,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 688,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.card__content__phone,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: `/phones/brand/${m.slug}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                children: m.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 698,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 697,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 696,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 695,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 687,
        columnNumber: 9
      }, undefined)
    }, i, false, {
      fileName: _jsxFileName,
      lineNumber: 686,
      columnNumber: 7
    }, undefined));
  };
  /**done */


  const showReviewBlock = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "col-md-12 pl-0 pr-0 mt-2",
      style: {
        width: "100%"
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row ml-0 mr-0",
        style: {
          width: "100%",
          height: "100%"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
          href: `/reviews/${eightLatestReview.slug}`,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            style: {
              textDecoration: "none",
              width: "100%"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.container_review_middle,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.overlay
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 723,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.img_wrapper,
                src: `${_config__WEBPACK_IMPORTED_MODULE_8__["API"]}/reviews/photo/${eightLatestReview.slug}`,
                alt: eightLatestReview.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 724,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.title_review_middle,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  children: eightLatestReview.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 730,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 729,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.author,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: [" ", "By ", eightLatestReview.postedBy.username, " |", " ", moment__WEBPACK_IMPORTED_MODULE_3___default()(eightLatestReview.updatedAt).fromNow()]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 733,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 732,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.blog_type,
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: "REVIEW"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 740,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 739,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 722,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 716,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 715,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 711,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "row ml-0 mr-0 mt-3",
        style: {
          width: "100%",
          height: "100%"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-md-6",
          children: showReviewsInsideReviewBlockLeft()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 750,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: `col-md-6 ${_styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.display_none_review_middle_bottom}`,
          children: showReviewsInsideReviewBlockRight()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 751,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 746,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 710,
      columnNumber: 7
    }, undefined);
  };
  /**done */


  const showReviewsInsideReviewBlockLeft = () => {
    return limitedReviewsSectionOne.map((blog, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.review_container_middle,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.image_review_middle,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: `/reviews/${blog.slug}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              style: {
                textDecoration: "none",
                width: "100%"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                className: "img img-fluid",
                src: `${_config__WEBPACK_IMPORTED_MODULE_8__["API"]}/reviews/photo/${blog.slug}`,
                alt: blog.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 769,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 768,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 767,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 766,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.content_review_middle,
          style: {
            display: "flex",
            flexDirection: "column"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.content_div_review_middle,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
              href: `/reviews/${blog.slug}`,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                style: {
                  textDecoration: "none",
                  width: "100%"
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  children: blog.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 784,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 783,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 782,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 781,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.author_div_review_middle,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: [" ", moment__WEBPACK_IMPORTED_MODULE_3___default()(blog.updatedAt).fromNow(), " | by ", blog.postedBy.username]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 790,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 789,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 777,
          columnNumber: 11
        }, undefined)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 765,
        columnNumber: 9
      }, undefined)
    }, i, false, {
      fileName: _jsxFileName,
      lineNumber: 764,
      columnNumber: 7
    }, undefined));
  };
  /**done */


  const showReviewsInsideReviewBlockRight = () => {
    return limitedReviewsSectionTwo.map((blog, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.review_container_middle,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.image_review_middle,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: `/reviews/${blog.slug}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              style: {
                textDecoration: "none",
                width: "100%"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                className: "img img-fluid",
                src: `${_config__WEBPACK_IMPORTED_MODULE_8__["API"]}/reviews/photo/${blog.slug}`,
                alt: blog.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 809,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 808,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 807,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 806,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.content_review_middle,
          style: {
            display: "flex",
            flexDirection: "column"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.content_div_review_middle,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
              href: `/reviews/${blog.slug}`,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                style: {
                  textDecoration: "none",
                  width: "100%"
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  children: blog.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 824,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 823,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 822,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 821,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.author_div_review_middle,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: [" ", moment__WEBPACK_IMPORTED_MODULE_3___default()(blog.updatedAt).fromNow(), " | by ", blog.postedBy.username]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 830,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 829,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 817,
          columnNumber: 11
        }, undefined)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 805,
        columnNumber: 9
      }, undefined)
    }, i, false, {
      fileName: _jsxFileName,
      lineNumber: 804,
      columnNumber: 7
    }, undefined));
  };
  /**done */


  const showNewsFirstSection = () => {
    return newsLimitFirstSection.map((blog, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.news__container,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.image__news,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: `/news/${blog.slug}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              style: {
                textDecoration: "none",
                width: "100%"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                className: "img img-fluid",
                src: `${_config__WEBPACK_IMPORTED_MODULE_8__["API"]}/news/photo/${blog.slug}`,
                alt: blog.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 849,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 848,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 847,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 846,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.content__news,
          style: {
            display: "flex",
            flexDirection: "column"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.content__div,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
              href: `/news/${blog.slug}`,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                style: {
                  textDecoration: "none",
                  width: "100%"
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  children: blog.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 864,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 863,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 862,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 861,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.excerpt_div,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
              href: `/news/${blog.slug}`,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                style: {
                  textDecoration: "none",
                  width: "100%"
                },
                children: react_render_html__WEBPACK_IMPORTED_MODULE_12___default()(blog.excerpt)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 870,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 869,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 868,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.author__div,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: [moment__WEBPACK_IMPORTED_MODULE_3___default()(blog.updatedAt).fromNow(), " | by ", blog.postedBy.username]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 876,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 875,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 857,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 845,
        columnNumber: 9
      }, undefined)
    }, i, false, {
      fileName: _jsxFileName,
      lineNumber: 844,
      columnNumber: 7
    }, undefined));
  };
  /**done */


  const showNewsSecondSection = () => {
    return newsLimitSecondSection.map((blog, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.news__container,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.image__news,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: `/news/${blog.slug}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              style: {
                textDecoration: "none",
                width: "100%"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                className: "img img-fluid",
                src: `${_config__WEBPACK_IMPORTED_MODULE_8__["API"]}/news/photo/${blog.slug}`,
                alt: blog.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 894,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 893,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 892,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 891,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.content__news,
          style: {
            display: "flex",
            flexDirection: "column"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.content__div,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
              href: `/news/${blog.slug}`,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                style: {
                  textDecoration: "none",
                  width: "100%"
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  children: blog.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 909,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 908,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 907,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 906,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.excerpt_div,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
              href: `/news/${blog.slug}`,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                style: {
                  textDecoration: "none",
                  width: "100%"
                },
                children: react_render_html__WEBPACK_IMPORTED_MODULE_12___default()(blog.excerpt)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 915,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 914,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 913,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.author__div,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: [" ", moment__WEBPACK_IMPORTED_MODULE_3___default()(blog.updatedAt).fromNow(), " | by ", blog.postedBy.username]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 921,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 920,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 902,
          columnNumber: 11
        }, undefined)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 890,
        columnNumber: 9
      }, undefined)
    }, i, false, {
      fileName: _jsxFileName,
      lineNumber: 889,
      columnNumber: 7
    }, undefined));
  };
  /**done */


  const showNewsFinalSection = () => {
    return newsLimitFinalSection.map((blog, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.news__container,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.image__news,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
            href: `/news/${blog.slug}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              style: {
                textDecoration: "none",
                width: "100%"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                className: "img img-fluid",
                src: `${_config__WEBPACK_IMPORTED_MODULE_8__["API"]}/news/photo/${blog.slug}`,
                alt: blog.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 940,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 939,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 938,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 937,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.content__news,
          style: {
            display: "flex",
            flexDirection: "column"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.content__div,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
              href: `/news/${blog.slug}`,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                style: {
                  textDecoration: "none",
                  width: "100%"
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  children: blog.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 955,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 954,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 953,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 952,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.excerpt_div,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
              href: `/news/${blog.slug}`,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                style: {
                  textDecoration: "none",
                  width: "100%"
                },
                children: react_render_html__WEBPACK_IMPORTED_MODULE_12___default()(blog.excerpt)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 961,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 960,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 959,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.author__div,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: [" ", moment__WEBPACK_IMPORTED_MODULE_3___default()(blog.updatedAt).fromNow(), " | by ", blog.postedBy.username]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 967,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 966,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 948,
          columnNumber: 11
        }, undefined)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 936,
        columnNumber: 9
      }, undefined)
    }, i, false, {
      fileName: _jsxFileName,
      lineNumber: 935,
      columnNumber: 7
    }, undefined));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
    children: latestNews && secondLatestNews && latestReview && secondLatestReview && mobileListLatest ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: head()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 986,
        columnNumber: 11
      }, undefined), latestNews.length !== 0 || latestReview.length !== 0 || secondLatestReview !== 0 || secondLatestNews !== 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.large_screen_featuring,
        children: showHighlight()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 991,
        columnNumber: 13
      }, undefined) : "", latestNews.length !== 0 || latestReview.length !== 0 || secondLatestNews.length !== 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.medium_screen_featuring,
        children: showHighlightMediumScreen()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1001,
        columnNumber: 13
      }, undefined) : "", latestNews.length !== 0 && latestReview.length !== 0 && secondLatestReview.length !== 0 && secondLatestNews.length !== 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.small_screen_featuring,
        children: smallScreenHighlight()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1012,
        columnNumber: 13
      }, undefined) : "", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container mt-4 mb-5 pl-0 pr-0",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row ml-0 mr-0",
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-8",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "row",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-md-12",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "row",
                  style: {
                    backgroundColor: "white",
                    boxShadow: "0px 0px 1px rgba(0,0,0,0.5)"
                  },
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    style: {
                      padding: "10px"
                    },
                    children: [showNewsFirstSection(), eightLatestReview.length !== 0 && limitedReviewsSectionOne.length !== 0 || limitedReviewsSectionTwo.length !== 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "col-md-12",
                        style: {
                          display: "flex",
                          flexDirection: "row",
                          width: "100%",
                          marginTop: "20px"
                        },
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          style: {
                            marginRight: "5px"
                          },
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_9__["MdRateReview"], {
                            size: "1rem",
                            color: "#505050"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1047,
                            columnNumber: 33
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1046,
                          columnNumber: 31
                        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          style: {
                            width: "100%",
                            paddingTop: 0
                          },
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
                            style: {
                              marginTop: "6px"
                            },
                            className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.hrText,
                            "data-content": "reviews"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1050,
                            columnNumber: 33
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1049,
                          columnNumber: 31
                        }, undefined)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 1037,
                        columnNumber: 29
                      }, undefined), showReviewBlock()]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 1036,
                      columnNumber: 27
                    }, undefined) : "", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "col-md-12",
                      style: {
                        display: "flex",
                        flexDirection: "row",
                        width: "100%",
                        marginTop: 0,
                        marginBottom: "8px"
                      },
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        style: {
                          marginRight: "5px"
                        },
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaNewspaper"], {
                          size: "1rem",
                          color: "#505050"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1074,
                          columnNumber: 29
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1073,
                        columnNumber: 27
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        style: {
                          width: "100%",
                          paddingTop: 0
                        },
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
                          style: {
                            marginTop: "6px"
                          },
                          className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.hrText,
                          "data-content": "more news"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1077,
                          columnNumber: 29
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1076,
                        columnNumber: 27
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 1063,
                      columnNumber: 25
                    }, undefined), showNewsSecondSection(), newsLimitFinalSection ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.display_none_more_news_main_block,
                        children: [showNewsFinalSection(), loadedNews ? showNewsFinalSectionLoadedNews() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            style: {
                              textAlign: "center",
                              top: "50%",
                              bottom: "50%",
                              minHeight: "100vh",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              margin: "auto",
                              padding: "auto"
                            },
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_loader_spinner__WEBPACK_IMPORTED_MODULE_14___default.a, {
                              type: "Bars",
                              color: "rgba(202, 28, 28, 0.945)",
                              height: 50,
                              width: 50,
                              timeout: 30000 //3 secs

                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1110,
                              columnNumber: 37
                            }, undefined)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1097,
                            columnNumber: 35
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1096,
                          columnNumber: 33
                        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "container",
                          children: loadMoreButton()
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1120,
                          columnNumber: 31
                        }, undefined)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 1087,
                        columnNumber: 29
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1086,
                      columnNumber: 27
                    }, undefined) : ""]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 1031,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1024,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1023,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1022,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1021,
            columnNumber: 15
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: `col-lg-4 ${_styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.side__bar__single__brand__main}`,
            children: [mobileListLatest.length !== 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: `row mr-0 ${_styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.side__bar__single__brand}`,
                style: {
                  backgroundColor: "#fff",
                  boxShadow: "0px 0px 1px rgba(0,0,0,0.5)"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-md-12",
                  style: {
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    marginTop: "20px",
                    marginBottom: "10px"
                  },
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    style: {
                      marginRight: "5px"
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_11__["FiSmartphone"], {
                      size: "1rem",
                      color: "#505050"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1157,
                      columnNumber: 27
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1156,
                    columnNumber: 25
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    style: {
                      width: "100%",
                      paddingTop: 0
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
                      style: {
                        marginTop: "6px"
                      },
                      className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.hrText,
                      "data-content": "latest phones"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1160,
                      columnNumber: 27
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1159,
                    columnNumber: 25
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1146,
                  columnNumber: 23
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-md-12",
                  style: {
                    paddingRight: "12px",
                    paddingLeft: "12px"
                  },
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: `${_styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.cards__phone} ${_styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.box__sizing__phone} ${_styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.side__bar__phones}`,
                    children: showSideBarMobiles()
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1174,
                    columnNumber: 25
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    style: {
                      height: "3px",
                      width: "100%",
                      margin: 0,
                      backgroundColor: "#505050"
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1179,
                    columnNumber: 25
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    style: {
                      width: "100%"
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      style: {
                        display: "flex",
                        flexDirection: "row",
                        float: "right",
                        marginBottom: "10px",
                        marginTop: "6px"
                      },
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        style: {
                          marginRight: 0
                        },
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
                          href: `/phones`,
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            style: {
                              textDecoration: "none"
                            },
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.view_all,
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                children: "view all"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1201,
                                columnNumber: 37
                              }, undefined)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1200,
                              columnNumber: 35
                            }, undefined)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1199,
                            columnNumber: 33
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1198,
                          columnNumber: 31
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1197,
                        columnNumber: 29
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1188,
                      columnNumber: 27
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1187,
                    columnNumber: 25
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1167,
                  columnNumber: 23
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1139,
                columnNumber: 21
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1138,
              columnNumber: 19
            }, undefined) : "", reviewListLatest.length !== 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: `row mr-0 mt-2 ${_styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.side__bar__single__brand} ${_styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.display_none_side_bar_review}`,
                style: {
                  backgroundColor: "#fff",
                  boxShadow: "0px 0px 1px rgba(0,0,0,0.5)"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-md-12",
                  style: {
                    display: "flex",
                    flexDirection: "row",
                    width: "100%",
                    marginTop: "20px"
                  },
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    style: {
                      marginRight: "5px"
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_9__["MdRateReview"], {
                      size: "1rem",
                      color: "#505050"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1234,
                      columnNumber: 27
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1233,
                    columnNumber: 25
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    style: {
                      width: "100%",
                      paddingTop: 0
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
                      style: {
                        marginTop: "6px"
                      },
                      className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.hrText,
                      "data-content": "latest reviews"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1237,
                      columnNumber: 27
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1236,
                    columnNumber: 25
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1224,
                  columnNumber: 23
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-md-12",
                  style: {
                    paddingTop: "10px",
                    paddingRight: "12px",
                    paddingLeft: "12px"
                  },
                  children: [showSideBarReviews(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    style: {
                      height: "3px",
                      width: "100%",
                      margin: 0,
                      backgroundColor: "#505050"
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1253,
                    columnNumber: 25
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    style: {
                      width: "100%"
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      style: {
                        display: "flex",
                        flexDirection: "row",
                        float: "right",
                        marginBottom: "10px",
                        marginTop: "6px"
                      },
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        style: {
                          marginRight: 0
                        },
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_4___default.a, {
                          href: `/reviews`,
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            style: {
                              textDecoration: "none"
                            },
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                              className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.view_all,
                              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                                children: "view all"
                              }, void 0, false, {
                                fileName: _jsxFileName,
                                lineNumber: 1275,
                                columnNumber: 37
                              }, undefined)
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1274,
                              columnNumber: 35
                            }, undefined)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1273,
                            columnNumber: 33
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1272,
                          columnNumber: 31
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1271,
                        columnNumber: 29
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1262,
                      columnNumber: 27
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1261,
                    columnNumber: 25
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1244,
                  columnNumber: 23
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1217,
                columnNumber: 21
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1216,
              columnNumber: 19
            }, undefined) : ""]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 1134,
            columnNumber: 15
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 1020,
          columnNumber: 13
        }, undefined), newsLimitFinalSection.length !== 0 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: `row ml-0 mr-0 mt-2 ${_styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.display_none_more_news_small_screen}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "col-lg-8",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "row",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-md-12",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "row",
                    style: {
                      backgroundColor: "white",
                      boxShadow: "0px 0px 1px rgba(0,0,0,0.5)"
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      style: {
                        padding: "10px"
                      },
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "col-md-12",
                        style: {
                          display: "flex",
                          flexDirection: "row",
                          width: "100%",
                          marginTop: "10px",
                          marginBottom: "8px"
                        },
                        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          style: {
                            marginRight: "5px"
                          },
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_10__["FaNewspaper"], {
                            size: "1rem",
                            color: "#505050"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1318,
                            columnNumber: 33
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1317,
                          columnNumber: 31
                        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          style: {
                            width: "100%",
                            paddingTop: 0
                          },
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
                            style: {
                              marginTop: "6px"
                            },
                            className: _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_13___default.a.hrText,
                            "data-content": "more news"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1321,
                            columnNumber: 33
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1320,
                          columnNumber: 31
                        }, undefined)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 1307,
                        columnNumber: 29
                      }, undefined), showNewsFinalSection(), loadedNews ? showNewsFinalSectionLoadedNews() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          style: {
                            textAlign: "center",
                            top: "50%",
                            bottom: "50%",
                            minHeight: "100vh",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            margin: "auto",
                            padding: "auto"
                          },
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_loader_spinner__WEBPACK_IMPORTED_MODULE_14___default.a, {
                            type: "Bars",
                            color: "rgba(202, 28, 28, 0.945)",
                            height: 50,
                            width: 50,
                            timeout: 30000 //3 secs

                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1346,
                            columnNumber: 35
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1333,
                          columnNumber: 33
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1332,
                        columnNumber: 31
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "container",
                        children: loadMoreButton()
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1356,
                        columnNumber: 29
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 1306,
                      columnNumber: 27
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1299,
                    columnNumber: 25
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1298,
                  columnNumber: 23
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1297,
                columnNumber: 21
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1296,
              columnNumber: 19
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1293,
            columnNumber: 17
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1292,
          columnNumber: 15
        }, undefined) : ""]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 1019,
        columnNumber: 11
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 985,
      columnNumber: 9
    }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react__WEBPACK_IMPORTED_MODULE_1___default.a.Fragment, {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          textAlign: "center",
          top: "50%",
          bottom: "50%",
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          margin: "auto",
          padding: "auto"
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_loader_spinner__WEBPACK_IMPORTED_MODULE_14___default.a, {
          type: "Bars",
          color: "rgba(202, 28, 28, 0.945)",
          height: 100,
          width: 100,
          timeout: 10000 //3 secs

        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1384,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 1371,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 1370,
      columnNumber: 9
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 979,
    columnNumber: 5
  }, undefined);
}; // This also gets called at build time


async function getStaticProps() {
  /**news api */

  /**done */
  const newsLimitFirstSection = await Object(_actions_news_action__WEBPACK_IMPORTED_MODULE_5__["newsListPublicLimitFirstSection"])().then(data => {
    if (data.error) {
      console.log(data.error);
      return "";
    } else {
      return data;
    }
  });
  /**done */

  const newsLimitSecondSection = await Object(_actions_news_action__WEBPACK_IMPORTED_MODULE_5__["newsListPublicLimitSecondSection"])().then(data => {
    if (data.error) {
      console.log(data.error);
      return "";
    } else {
      return data;
    }
  });
  /**done */

  let skip = 17;
  let limit = 10;
  const newsLimitFinalSection = await Object(_actions_news_action__WEBPACK_IMPORTED_MODULE_5__["newsListPublicLimitFinalSection"])(skip, limit).then(data => {
    if (data.error) {
      console.log(data.error);
      return "";
    } else {
      return data;
    }
  });
  /**done */

  const latestNews = await Object(_actions_news_action__WEBPACK_IMPORTED_MODULE_5__["newsPublicLatest"])().then(data => {
    if (data.error) {
      console.log(data.error);
      return "";
    } else {
      return data;
    }
  });
  /**done */

  const secondLatestNews = await Object(_actions_news_action__WEBPACK_IMPORTED_MODULE_5__["newsPublicSecondLatest"])().then(data => {
    if (data.error) {
      console.log(data.error);
      return "";
    } else {
      return data;
    }
  });
  /**review list lates api */

  /**done */

  const reviewListLatest = await Object(_actions_review_action__WEBPACK_IMPORTED_MODULE_6__["reviewListPublicHomePage"])().then(data => {
    if (data.error) {
      console.log(data.error);
      return "";
    } else {
      return data;
    }
  });
  /**mobile list lates api */

  /**done */

  const mobileListLatest = await Object(_actions_mobile_action__WEBPACK_IMPORTED_MODULE_7__["mobileListPublicNewsReviews"])().then(data => {
    if (data.error) {
      console.log(data.error);
      return "";
    } else {
      return data;
    }
  });
  /**review api */

  /**done */

  const latestReview = await Object(_actions_review_action__WEBPACK_IMPORTED_MODULE_6__["reviewPublicLatest"])().then(data => {
    if (data.error) {
      console.log(data.error);
      return "";
    } else {
      return data;
    }
  });
  /**done */

  const secondLatestReview = await Object(_actions_review_action__WEBPACK_IMPORTED_MODULE_6__["reviewPublicSecondLatest"])().then(data => {
    if (data.error) {
      console.log(data.error);
      return "";
    } else {
      return data;
    }
  });
  /**done */

  const eightLatestReview = await Object(_actions_review_action__WEBPACK_IMPORTED_MODULE_6__["reviewPublicEightLatest"])().then(data => {
    if (data.error) {
      console.log(data.error);
      return "";
    } else {
      return data;
    }
  });
  /**done */

  const limitedReviewsSectionOne = await Object(_actions_review_action__WEBPACK_IMPORTED_MODULE_6__["reviewListPublicLimitedSectionOne"])().then(data => {
    if (data.error) {
      console.log(data.error);
      return "";
    } else {
      return data;
    }
  });
  /**done */

  const limitedReviewsSectionTwo = await Object(_actions_review_action__WEBPACK_IMPORTED_MODULE_6__["reviewListPublicLimitedSectionTwo"])().then(data => {
    if (data.error) {
      console.log(data.error);
      return "";
    } else {
      return data;
    }
  });
  return {
    props: {
      latestNews,
      secondLatestNews,
      latestReview,
      secondLatestReview,
      eightLatestReview,
      newsLimitFirstSection,
      newsLimitSecondSection,
      newsLimitFinalSection,
      limitedReviewsSectionOne,
      limitedReviewsSectionTwo,
      reviewListLatest,
      mobileListLatest
    },
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 1
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./styles/homePage.module.css":
/*!************************************!*\
  !*** ./styles/homePage.module.css ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"container_common": "homePage_container_common__2BAhS",
	"overlay": "homePage_overlay__ikzWf",
	"container_left": "homePage_container_left__3IDq7",
	"container_right": "homePage_container_right__Ga2so",
	"container_right_top": "homePage_container_right_top__13nj3",
	"container_right_bottom": "homePage_container_right_bottom__1R50f",
	"container_right_bottom_left": "homePage_container_right_bottom_left__1qrY-",
	"container_right_bottom_right": "homePage_container_right_bottom_right__TFUGy",
	"img_wrapper": "homePage_img_wrapper__31x74",
	"news_title": "homePage_news_title__33yq0",
	"news_title_right_top": "homePage_news_title_right_top__3O_Rw",
	"news_title_right_bottom_right": "homePage_news_title_right_bottom_right__1vmhH",
	"news_title_right_bottom_left": "homePage_news_title_right_bottom_left__1SwqV",
	"blog_type": "homePage_blog_type__SjvFa",
	"author": "homePage_author__3CK4z",
	"container_right_medium_screen": "homePage_container_right_medium_screen__bIYDZ",
	"container_right_top_medium_screen": "homePage_container_right_top_medium_screen__CUuCd",
	"container_right_bottom_medium_screen": "homePage_container_right_bottom_medium_screen__1SQ4w",
	"news_title_right_bottom_medium_screen": "homePage_news_title_right_bottom_medium_screen__GlBfV",
	"news_title_right_top_medium_screen": "homePage_news_title_right_top_medium_screen__Wuyhs",
	"small_screen_block": "homePage_small_screen_block__3QG-K",
	"small_screen_container": "homePage_small_screen_container__383ed",
	"news_title_small_screen": "homePage_news_title_small_screen__KRCDP",
	"small_screen_img_wrapper": "homePage_small_screen_img_wrapper__1Bp_d",
	"large_screen_featuring": "homePage_large_screen_featuring__wWiBb",
	"medium_screen_featuring": "homePage_medium_screen_featuring__17xQd",
	"small_screen_featuring": "homePage_small_screen_featuring__1nBaz",
	"container_review_middle": "homePage_container_review_middle__Haabz",
	"title_review_middle": "homePage_title_review_middle__1T8PS",
	"review_container_middle": "homePage_review_container_middle__3Ti_i",
	"image_review_middle": "homePage_image_review_middle__2w_ve",
	"content_div_review_middle": "homePage_content_div_review_middle__2arg4",
	"content_review_middle": "homePage_content_review_middle__1MgRh",
	"author_div_review_middle": "homePage_author_div_review_middle__2xpgG",
	"display_none_review_middle_bottom": "homePage_display_none_review_middle_bottom__3O_YM",
	"news__container": "homePage_news__container__1IqcX",
	"image__news": "homePage_image__news__3VElD",
	"content__div": "homePage_content__div__30kTH",
	"content__news": "homePage_content__news__2xrbr",
	"excerpt_div": "homePage_excerpt_div__LPM04",
	"author__div": "homePage_author__div__hdtuL",
	"display_none_more_news_small_screen": "homePage_display_none_more_news_small_screen__ki5rv",
	"display_none_more_news_main_block": "homePage_display_none_more_news_main_block__OzsHn",
	"side__bar__single__brand": "homePage_side__bar__single__brand__3SvzH",
	"side__bar__single__brand__main": "homePage_side__bar__single__brand__main__39sEC",
	"box__sizing__phone": "homePage_box__sizing__phone__VrMTO",
	"cards__phone": "homePage_cards__phone__1JlgZ",
	"side__bar__phones": "homePage_side__bar__phones__y010Q",
	"single__card__phone": "homePage_single__card__phone__3wGXF",
	"card__image__container__phone": "homePage_card__image__container__phone__2MOiP",
	"card__content__phone": "homePage_card__content__phone__1NY2y",
	"hrText": "homePage_hrText__GNYpX",
	"load_more_button": "homePage_load_more_button__4AOsq",
	"view_all": "homePage_view_all__38x_k"
};


/***/ }),

/***/ "isomorphic-fetch":
/*!***********************************!*\
  !*** external "isomorphic-fetch" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-fetch");

/***/ }),

/***/ "js-cookie":
/*!****************************!*\
  !*** external "js-cookie" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("js-cookie");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/config":
/*!******************************!*\
  !*** external "next/config" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/config");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/router":
/*!******************************!*\
  !*** external "next/router" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/router");

/***/ }),

/***/ "query-string":
/*!*******************************!*\
  !*** external "query-string" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("query-string");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-icons/fi":
/*!*********************************!*\
  !*** external "react-icons/fi" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fi");

/***/ }),

/***/ "react-icons/md":
/*!*********************************!*\
  !*** external "react-icons/md" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/md");

/***/ }),

/***/ "react-is":
/*!***************************!*\
  !*** external "react-is" ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-is");

/***/ }),

/***/ "react-loader-spinner":
/*!***************************************!*\
  !*** external "react-loader-spinner" ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-loader-spinner");

/***/ }),

/***/ "react-render-html":
/*!************************************!*\
  !*** external "react-render-html" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-render-html");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react/jsx-dev-runtime");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2FjdGlvbnMvYXV0aC5hY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy9tb2JpbGUuYWN0aW9uLmpzIiwid2VicGFjazovLy8uL2FjdGlvbnMvbmV3cy5hY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy9yZXZpZXcuYWN0aW9uLmpzIiwid2VicGFjazovLy8uL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvaG9tZVBhZ2UubW9kdWxlLmNzcyIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJpc29tb3JwaGljLWZldGNoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwianMtY29va2llXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibW9tZW50XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9jb25maWdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L2hlYWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJuZXh0L3JvdXRlclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInF1ZXJ5LXN0cmluZ1wiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0XCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvZmFcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9maVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL21kXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaXNcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1sb2FkZXItc3Bpbm5lclwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LXJlbmRlci1odG1sXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIiXSwibmFtZXMiOlsiaGFuZGxlUmVzcG9uc2UiLCJyZXNwb25zZSIsInN0YXR1cyIsInNpZ25vdXQiLCJSb3V0ZXIiLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsIm1lc3NhZ2UiLCJwcmVTaWdudXAiLCJ1c2VyIiwidG9rZW4iLCJmZXRjaCIsIkFQSSIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJBdXRob3JpemF0aW9uIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwianNvbiIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInNpZ251cCIsInNpZ25pbiIsIm5leHQiLCJyZW1vdmVDb29raWUiLCJyZW1vdmVMb2NhbFN0b3JhZ2UiLCJzZXRDb29raWUiLCJrZXkiLCJ2YWx1ZSIsImdldENvb2tpZSIsInNldExvY2FsU3RvcmFnZSIsImF1dGhlbnRpY2F0ZSIsImRhdGEiLCJpc0F1dGgiLCJ1cGRhdGVVc2VyIiwiZm9yZ290UGFzc3dvcmQiLCJlbWFpbCIsInJlc2V0UGFzc3dvcmQiLCJyZXNldEluZm8iLCJjcmVhdGVNb2JpbGUiLCJtb2JpbGUiLCJtb2JpbGVMaXN0UHJpdmF0ZSIsIm1vYmlsZUxpc3RQdWJsaWMiLCJtb2JpbGVMaXN0UHVibGljQ3JlYXRvcnMiLCJtb2JpbGVMaXN0UHVibGljUmVsZXZlbnRCcmFuZHMiLCJpZCIsIm1vYmlsZUxpc3RQdWJsaWNOZXdzUmV2aWV3cyIsInNpbmdsZU1vYmlsZSIsInNsdWciLCJzaW5nbGVNb2JpbGVDcmVhdG9ycyIsImxpc3RSZWxhdGVkIiwiYmxvZyIsImxpc3RSZWxhdGVkTmV3cyIsImxpc3RSZWxhdGVkUmV2aWV3cyIsInJlbW92ZU1vYmlsZSIsInVwZGF0ZU1vYmlsZSIsImFwcHJvdmVNb2JpbGUiLCJ1blB1Ymxpc2hNb2JpbGUiLCJsaXN0U2VhcmNoQWRtaW4iLCJwYXJhbXMiLCJxdWVyeVN0cmluZyIsImxpc3RTZWFyY2hVc2VyIiwiY3JlYXRlTmV3cyIsIm5ld3MiLCJuZXdzTGlzdFByaXZhdGUiLCJuZXdzTGlzdFB1YmxpYyIsIm5ld3NMaXN0UHVibGljTGltaXRGaXJzdFNlY3Rpb24iLCJuZXdzTGlzdFB1YmxpY0xpbWl0U2Vjb25kU2VjdGlvbiIsIm5ld3NMaXN0UHVibGljTGltaXRGaW5hbFNlY3Rpb24iLCJza2lwIiwibGltaXQiLCJuZXdzUHVibGljTGF0ZXN0IiwibmV3c1B1YmxpY1NlY29uZExhdGVzdCIsIm5ld3NMaXN0UHVibGljVG9wU3RvcmllcyIsIm5ld3NMaXN0UHVibGljTW9iaWxlUmV2aWV3cyIsIm5ld3NMaXN0TW9kZXJhdG9yUHJpdmF0ZSIsIm5ld3NMaXN0TW9kZXJhdG9yUHVibGljIiwic2luZ2xlTmV3cyIsInNpbmdsZU5ld3NDcmVhdG9ycyIsImxpc3RSZWxhdGVkTW9iaWxlcyIsInJlbW92ZU5ld3MiLCJ1cGRhdGVOZXdzIiwiYXBwcm92ZU5ld3MiLCJ1blB1Ymxpc2hOZXdzIiwibGlzdFNlYXJjaE1vZGVyYXRvciIsImNyZWF0ZVJldmlldyIsInJldmlldyIsInJldmlld0xpc3RQcml2YXRlIiwicmV2aWV3TGlzdFB1YmxpYyIsInJldmlld1B1YmxpY0xhdGVzdCIsInJldmlld1B1YmxpY1NlY29uZExhdGVzdCIsInJldmlld1B1YmxpY0VpZ2h0TGF0ZXN0IiwicmV2aWV3TGlzdFB1YmxpY0hvbWVQYWdlIiwicmV2aWV3TGlzdFB1YmxpY0xpbWl0ZWRTZWN0aW9uT25lIiwicmV2aWV3TGlzdFB1YmxpY0xpbWl0ZWRTZWN0aW9uVHdvIiwicmV2aWV3TGlzdFB1YmxpY01vYmlsZU5ld3MiLCJyZXZpZXdMaXN0TW9kZXJhdG9yUHJpdmF0ZSIsInJldmlld0xpc3RNb2RlcmF0b3JQdWJsaWMiLCJzaW5nbGVSZXZpZXciLCJzaW5nbGVSZXZpZXdDcmVhdG9ycyIsInJlbW92ZVJldmlldyIsInVwZGF0ZVJldmlldyIsImFwcHJvdmVSZXZpZXciLCJ1blB1Ymxpc2hSZXZpZXciLCJwdWJsaWNSdW50aW1lQ29uZmlnIiwiZ2V0Q29uZmlnIiwiUFJPRFVDVElPTiIsIkFQSV9QUk9EVUNUSU9OIiwiQVBJX0RFVkVMT1BNRU5UIiwiQVBQX05BTUUiLCJET01BSU4iLCJET01BSU5fUFJPRFVDVElPTiIsIkRPTUFJTl9ERVZFTE9QTUVOVCIsIkZCX0FQUF9JRCIsIlRXSVRURVJfUFVCTElTSEVSX0hBTkRMRSIsIlRXSVRURVJfQVVUSE9SX0hBTkRMRSIsIkRJU1FVU19TSE9SVE5BTUUiLCJUSU5ZTUNfQVBQX0lEIiwibGlzdGVuZXJzIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJ3aW5kb3ciLCJwcmVmZXRjaGVkIiwiY2FjaGVkT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJjYiIsInJvb3RNYXJnaW4iLCJsaXN0ZW5Ub0ludGVyc2VjdGlvbnMiLCJvYnNlcnZlciIsImdldE9ic2VydmVyIiwicm91dGVyIiwiaHJlZiIsImV2ZW50IiwidGFyZ2V0IiwiZSIsIm5vZGVOYW1lIiwiaXNNb2RpZmllZEV2ZW50Iiwic2Nyb2xsIiwiYXMiLCJyZXBsYWNlIiwic3VjY2VzcyIsImRvY3VtZW50IiwiYXJncyIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsInByb3BzIiwiY3JlYXRlUHJvcEVycm9yIiwiXyIsIm9wdGlvbmFsUHJvcHNHdWFyZCIsInNoYWxsb3ciLCJwYXNzSHJlZiIsInByZWZldGNoIiwibG9jYWxlIiwib3B0aW9uYWxQcm9wcyIsInZhbFR5cGUiLCJoYXNXYXJuZWQiLCJSZWFjdCIsInAiLCJyZXNvbHZlZEFzIiwiY2hpbGRyZW4iLCJjaGlsZCIsIkNoaWxkcmVuIiwiY2hpbGRSZWYiLCJjbGVhbnVwIiwic2V0UmVmIiwiZWwiLCJpc1ByZWZldGNoZWQiLCJjaGlsZFByb3BzIiwicmVmIiwib25DbGljayIsImxpbmtDbGlja2VkIiwicHJpb3JpdHkiLCJMaW5rIiwicGF0aCIsIm5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoIiwicHJvY2VzcyIsInNpbmdsZXRvblJvdXRlciIsInJlYWR5Q2FsbGJhY2tzIiwicmVhZHkiLCJ1cmxQcm9wZXJ0eUZpZWxkcyIsInJvdXRlckV2ZW50cyIsImNvcmVNZXRob2RGaWVsZHMiLCJnZXQiLCJmaWVsZCIsImdldFJvdXRlciIsImV2ZW50RmllbGQiLCJfc2luZ2xldG9uUm91dGVyIiwic3RhY2siLCJSb3V0ZXJDb250ZXh0IiwiY3JlYXRlUm91dGVyIiwiX3JvdXRlciIsImluc3RhbmNlIiwiQXJyYXkiLCJDb21wb3NlZENvbXBvbmVudCIsImdldEluaXRpYWxQcm9wcyIsIldpdGhSb3V0ZXJXcmFwcGVyIiwibmFtZSIsImFsbCIsIm9uIiwib2ZmIiwiZW1pdCIsImhhbmRsZXIiLCJiYXNlUGF0aCIsImNhbmNlbGxlZCIsInByZWZpeCIsImFkZFBhdGhQcmVmaXgiLCJ1cmwiLCJsb2NhdGlvbk9yaWdpbiIsInJlc29sdmVkIiwiaGFzQmFzZVBhdGgiLCJpbnRlcnBvbGF0ZWRSb3V0ZSIsImR5bmFtaWNSZWdleCIsImR5bmFtaWNHcm91cHMiLCJkeW5hbWljTWF0Y2hlcyIsImFzUGF0aG5hbWUiLCJwYXJhbSIsInJlcGxhY2VkIiwicmVwZWF0Iiwib3B0aW9uYWwiLCJlc2NhcGVQYXRoRGVsaW1pdGVycyIsInJlc3VsdCIsImZpbHRlcmVkUXVlcnkiLCJiYXNlIiwidXJsQXNTdHJpbmciLCJmaW5hbFVybCIsImludGVycG9sYXRlZEFzIiwiaW50ZXJwb2xhdGVBcyIsImhhc2giLCJvbWl0UGFybXNGcm9tUXVlcnkiLCJyZXNvbHZlZEhyZWYiLCJyZXNvbHZlQXMiLCJQQUdFX0xPQURfRVJST1IiLCJTeW1ib2wiLCJhZGRCYXNlUGF0aCIsInJlc29sdmVIcmVmIiwibWFudWFsU2Nyb2xsUmVzdG9yYXRpb24iLCJTU0dfREFUQV9OT1RfRk9VTkRfRVJST1IiLCJjcmVkZW50aWFscyIsInJlcyIsImF0dGVtcHRzIiwiZmV0Y2hSZXRyeSIsImlzU2VydmVyUmVuZGVyIiwibWFya0xvYWRpbmdFcnJvciIsImNvbnN0cnVjdG9yIiwicm91dGUiLCJhc1BhdGgiLCJjb21wb25lbnRzIiwic2RjIiwic3ViIiwiY2xjIiwicGFnZUxvYWRlciIsIl9icHMiLCJldmVudHMiLCJfd3JhcEFwcCIsImlzU3NyIiwiaXNGYWxsYmFjayIsIl9pbkZsaWdodFJvdXRlIiwiX3NoYWxsb3ciLCJsb2NhbGVzIiwiZGVmYXVsdExvY2FsZSIsInN0YXRlIiwib3B0aW9ucyIsInN0eWxlU2hlZXRzIiwiX19OX1NTRyIsImluaXRpYWxQcm9wcyIsIl9fTl9TU1AiLCJDb21wb25lbnQiLCJfX05FWFRfREFUQV9fIiwicmVsb2FkIiwiYmFjayIsInByZXBhcmVVcmxBcyIsImlzTG9jYWxVUkwiLCJTVCIsInBlcmZvcm1hbmNlIiwiYWRkTG9jYWxlIiwiY2xlYW5lZEFzIiwiZGVsTG9jYWxlIiwiZGVsQmFzZVBhdGgiLCJwYWdlcyIsIl9fcmV3cml0ZXMiLCJwYXJzZWQiLCJwb3RlbnRpYWxIcmVmIiwicGFyc2VkQXMiLCJyb3V0ZVJlZ2V4Iiwicm91dGVNYXRjaCIsInNob3VsZEludGVycG9sYXRlIiwibWlzc2luZ1BhcmFtcyIsInJvdXRlSW5mbyIsImRlc3RpbmF0aW9uIiwicGFyc2VkSHJlZiIsImFwcENvbXAiLCJlcnJvciIsImNoYW5nZVN0YXRlIiwiX19OIiwiYnVpbGRDYW5jZWxsYXRpb25FcnJvciIsInNzZzQwNCIsInBhZ2UiLCJtb2QiLCJjYWNoZWRSb3V0ZUluZm8iLCJyZXF1aXJlIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiX3Jlc29sdmVIcmVmIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJQcm9taXNlIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNlZ21lbnQiLCJjaGFyIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsIkRVTU1ZX0JBU0UiLCJyZXNvbHZlZEJhc2UiLCJvcmlnaW4iLCJtYXRjaGVyT3B0aW9ucyIsInNlbnNpdGl2ZSIsImRlbGltaXRlciIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsImtleXMiLCJtYXRjaGVyUmVnZXgiLCJwYXRoVG9SZWdleHAiLCJtYXRjaGVyIiwicGFyc2VkRGVzdGluYXRpb24iLCJkZXN0UXVlcnkiLCJkZXN0UGF0aCIsImRlc3RQYXRoUGFyYW1LZXlzIiwiZGVzdFBhdGhQYXJhbXMiLCJkZXN0aW5hdGlvbkNvbXBpbGVyIiwidmFsaWRhdGUiLCJzdHJPckFycmF5IiwicXVlcnlDb21waWxlciIsInBhcmFtS2V5cyIsImFwcGVuZFBhcmFtc1RvUXVlcnkiLCJzaG91bGRBZGRCYXNlUGF0aCIsIm5ld1VybCIsInNlYXJjaFBhcmFtcyIsImlzTmFOIiwiaXRlbSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwiY3VzdG9tUm91dGVNYXRjaGVyIiwicmV3cml0ZSIsImRlc3RSZXMiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiSW5kZXgiLCJsYXRlc3ROZXdzIiwic2Vjb25kTGF0ZXN0TmV3cyIsImxhdGVzdFJldmlldyIsInNlY29uZExhdGVzdFJldmlldyIsImVpZ2h0TGF0ZXN0UmV2aWV3IiwibmV3c0xpbWl0Rmlyc3RTZWN0aW9uIiwibmV3c0xpbWl0U2Vjb25kU2VjdGlvbiIsIm5ld3NMaW1pdEZpbmFsU2VjdGlvbiIsImxpbWl0ZWRSZXZpZXdzU2VjdGlvbk9uZSIsImxpbWl0ZWRSZXZpZXdzU2VjdGlvblR3byIsInJldmlld0xpc3RMYXRlc3QiLCJtb2JpbGVMaXN0TGF0ZXN0IiwiaGVhZCIsInNob3dIaWdobGlnaHQiLCJ3aWR0aCIsImhlaWdodCIsInRleHREZWNvcmF0aW9uIiwic3R5bGVzIiwiY29udGFpbmVyX2NvbW1vbiIsImNvbnRhaW5lcl9sZWZ0Iiwib3ZlcmxheSIsImltZ193cmFwcGVyIiwidGl0bGUiLCJuZXdzX3RpdGxlIiwiYXV0aG9yIiwicG9zdGVkQnkiLCJ1c2VybmFtZSIsIm1vbWVudCIsInVwZGF0ZWRBdCIsImZyb21Ob3ciLCJibG9nX3R5cGUiLCJjb250YWluZXJfcmlnaHQiLCJjb250YWluZXJfcmlnaHRfdG9wIiwibmV3c190aXRsZV9yaWdodF90b3AiLCJjb250YWluZXJfcmlnaHRfYm90dG9tIiwiY29udGFpbmVyX3JpZ2h0X2JvdHRvbV9sZWZ0IiwibmV3c190aXRsZV9yaWdodF9ib3R0b21fbGVmdCIsImNvbnRhaW5lcl9yaWdodF9ib3R0b21fcmlnaHQiLCJuZXdzX3RpdGxlX3JpZ2h0X2JvdHRvbV9yaWdodCIsInNob3dIaWdobGlnaHRNZWRpdW1TY3JlZW4iLCJjb250YWluZXJfcmlnaHRfbWVkaXVtX3NjcmVlbiIsImNvbnRhaW5lcl9yaWdodF90b3BfbWVkaXVtX3NjcmVlbiIsIm5ld3NfdGl0bGVfcmlnaHRfdG9wX21lZGl1bV9zY3JlZW4iLCJjb250YWluZXJfcmlnaHRfYm90dG9tX21lZGl1bV9zY3JlZW4iLCJuZXdzX3RpdGxlX3JpZ2h0X2JvdHRvbV9tZWRpdW1fc2NyZWVuIiwic21hbGxTY3JlZW5IaWdobGlnaHQiLCJzbWFsbF9zY3JlZW5fYmxvY2siLCJzbWFsbF9zY3JlZW5fY29udGFpbmVyIiwic21hbGxfc2NyZWVuX2ltZ193cmFwcGVyIiwibmV3c190aXRsZV9zbWFsbF9zY3JlZW4iLCJuZXdzTGltaXQiLCJuZXdzU2tpcCIsInNldExpbWl0IiwidXNlU3RhdGUiLCJzZXRTa2lwIiwibmV3c1NpemUiLCJzZXROZXdzU2l6ZSIsImxlbmd0aCIsImxvYWRlZE5ld3MiLCJzZXRMb2FkZWROZXdzIiwibG9hZE1vcmUiLCJ0b1NraXAiLCJsb2FkTW9yZUJ1dHRvbiIsInRleHRBbGlnbiIsImxvYWRfbW9yZV9idXR0b24iLCJzaG93TmV3c0ZpbmFsU2VjdGlvbkxvYWRlZE5ld3MiLCJtYXAiLCJuZXdzX19jb250YWluZXIiLCJpbWFnZV9fbmV3cyIsImNvbnRlbnRfX25ld3MiLCJkaXNwbGF5IiwiZmxleERpcmVjdGlvbiIsImNvbnRlbnRfX2RpdiIsImV4Y2VycHRfZGl2IiwicmVuZGVySFRNTCIsImV4Y2VycHQiLCJhdXRob3JfX2RpdiIsInNob3dTaWRlQmFyUmV2aWV3cyIsInJldmlld19jb250YWluZXJfbWlkZGxlIiwiaW1hZ2VfcmV2aWV3X21pZGRsZSIsImNvbnRlbnRfcmV2aWV3X21pZGRsZSIsImNvbnRlbnRfZGl2X3Jldmlld19taWRkbGUiLCJhdXRob3JfZGl2X3Jldmlld19taWRkbGUiLCJzaG93U2lkZUJhck1vYmlsZXMiLCJzaW5nbGVfX2NhcmRfX3Bob25lIiwiY2FyZF9faW1hZ2VfX2NvbnRhaW5lcl9fcGhvbmUiLCJjYXJkX19jb250ZW50X19waG9uZSIsInNob3dSZXZpZXdCbG9jayIsImNvbnRhaW5lcl9yZXZpZXdfbWlkZGxlIiwidGl0bGVfcmV2aWV3X21pZGRsZSIsInNob3dSZXZpZXdzSW5zaWRlUmV2aWV3QmxvY2tMZWZ0IiwiZGlzcGxheV9ub25lX3Jldmlld19taWRkbGVfYm90dG9tIiwic2hvd1Jldmlld3NJbnNpZGVSZXZpZXdCbG9ja1JpZ2h0Iiwic2hvd05ld3NGaXJzdFNlY3Rpb24iLCJzaG93TmV3c1NlY29uZFNlY3Rpb24iLCJzaG93TmV3c0ZpbmFsU2VjdGlvbiIsImxhcmdlX3NjcmVlbl9mZWF0dXJpbmciLCJtZWRpdW1fc2NyZWVuX2ZlYXR1cmluZyIsInNtYWxsX3NjcmVlbl9mZWF0dXJpbmciLCJiYWNrZ3JvdW5kQ29sb3IiLCJib3hTaGFkb3ciLCJwYWRkaW5nIiwibWFyZ2luVG9wIiwibWFyZ2luUmlnaHQiLCJwYWRkaW5nVG9wIiwiaHJUZXh0IiwibWFyZ2luQm90dG9tIiwiZGlzcGxheV9ub25lX21vcmVfbmV3c19tYWluX2Jsb2NrIiwidG9wIiwiYm90dG9tIiwibWluSGVpZ2h0IiwiYWxpZ25JdGVtcyIsImp1c3RpZnlDb250ZW50IiwibWFyZ2luIiwic2lkZV9fYmFyX19zaW5nbGVfX2JyYW5kX19tYWluIiwic2lkZV9fYmFyX19zaW5nbGVfX2JyYW5kIiwicGFkZGluZ1JpZ2h0IiwicGFkZGluZ0xlZnQiLCJjYXJkc19fcGhvbmUiLCJib3hfX3NpemluZ19fcGhvbmUiLCJzaWRlX19iYXJfX3Bob25lcyIsImZsb2F0Iiwidmlld19hbGwiLCJkaXNwbGF5X25vbmVfc2lkZV9iYXJfcmV2aWV3IiwiZGlzcGxheV9ub25lX21vcmVfbmV3c19zbWFsbF9zY3JlZW4iLCJnZXRTdGF0aWNQcm9wcyIsInJldmFsaWRhdGUiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLDBDQUEwQyxnQ0FBZ0M7UUFDMUU7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSx3REFBd0Qsa0JBQWtCO1FBQzFF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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsc0NBQXNDO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDRDQUE0QztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMENBQTBDO0FBQy9EO0FBQ0EsaUJBQWlCLG1DQUFtQztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsY0FBYztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsY0FBYztBQUMz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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN4REEsNkM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsaUQ7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsa0QiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJpbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtZmV0Y2hcIjtcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgY29va2llIGZyb20gXCJqcy1jb29raWVcIjtcclxuaW1wb3J0IFJvdXRlciBmcm9tIFwibmV4dC9yb3V0ZXJcIjtcclxuXHJcbi8qKlxyXG4gKiBjb21wbGV0ZWQhIGhhbmRsZSByZXNwb25zZVxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGhhbmRsZVJlc3BvbnNlID0gKHJlc3BvbnNlKSA9PiB7XHJcbiAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICBzaWdub3V0KCgpID0+IHtcclxuICAgICAgUm91dGVyLnB1c2goe1xyXG4gICAgICAgIHBhdGhuYW1lOiBcIi9hZG1pbi1wYW5lbC91c2VyLXNpZ25pblwiLFxyXG4gICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICBtZXNzYWdlOiBcIllvdXIgc2Vzc2lvbiBoYXMgYmVlbiBleHBpcmVkLiBQbGVhc2Ugc2lnbiBpblwiLFxyXG4gICAgICAgIH0sXHJcbiAgICAgIH0pO1xyXG4gICAgfSk7XHJcbiAgfSBlbHNlIHtcclxuICAgIHJldHVybjtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcHJlU2lnbnVwID0gKHVzZXIsIHRva2VuKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKGAke0FQSX0vc2lnbnVwYCwge1xyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXIpLFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaWdudXAgPSAodXNlcikgPT4ge1xyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L3ZlcmlmeS1zaWdudXBgLCB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh1c2VyKSxcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpZ25pbiA9ICh1c2VyKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKGAke0FQSX0vc2lnbmluYCwge1xyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkodXNlciksXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBzaWdub3V0ID0gKG5leHQpID0+IHtcclxuICByZW1vdmVDb29raWUoXCJ0b2tlblwiKTtcclxuICByZW1vdmVMb2NhbFN0b3JhZ2UoXCJ1c2VyXCIpO1xyXG4gIG5leHQoKTtcclxuICByZXR1cm4gZmV0Y2goYCR7QVBJfS9zaWdub3V0YCwge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgY29uc29sZS5sb2coXCJzaWdub3V0IHN1Y2Nlc3NcIik7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuLy9zZXQgY29va2llXHJcbmV4cG9ydCBjb25zdCBzZXRDb29raWUgPSAoa2V5LCB2YWx1ZSkgPT4ge1xyXG4gIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgIGNvb2tpZS5zZXQoa2V5LCB2YWx1ZSwge1xyXG4gICAgICBleHBpcmVzOiAxLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUNvb2tpZSA9IChrZXkpID0+IHtcclxuICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICBjb29raWUucmVtb3ZlKGtleSwge1xyXG4gICAgICBleHBpcmVzOiAxLFxyXG4gICAgfSk7XHJcbiAgfVxyXG59O1xyXG4vL2dldCBjb29raWVcclxuZXhwb3J0IGNvbnN0IGdldENvb2tpZSA9IChrZXkpID0+IHtcclxuICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICByZXR1cm4gY29va2llLmdldChrZXkpO1xyXG4gIH1cclxufTtcclxuXHJcbi8vbG9jYWxzdG9yYWdlXHJcbmV4cG9ydCBjb25zdCBzZXRMb2NhbFN0b3JhZ2UgPSAoa2V5LCB2YWx1ZSkgPT4ge1xyXG4gIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcclxuICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlTG9jYWxTdG9yYWdlID0gKGtleSkgPT4ge1xyXG4gIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgIGxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKGtleSk7XHJcbiAgfVxyXG59O1xyXG5cclxuLy9hdXRoXHJcbmV4cG9ydCBjb25zdCBhdXRoZW50aWNhdGUgPSAoZGF0YSwgbmV4dCkgPT4ge1xyXG4gIHNldENvb2tpZShcInRva2VuXCIsIGRhdGEudG9rZW4pO1xyXG4gIHNldExvY2FsU3RvcmFnZShcInVzZXJcIiwgZGF0YS51c2VyKTtcclxuICBuZXh0KCk7XHJcbn07XHJcblxyXG4vL3tkb25lfSBzd2FyY2ggZm9yIGxvY2FsIHN0b3JhZ2UgZm9yIGNva2llc1xyXG5leHBvcnQgY29uc3QgaXNBdXRoID0gKCkgPT4ge1xyXG4gIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgIGNvbnN0IGNvb2tpZUNoZWNrZWQgPSBnZXRDb29raWUoXCJ0b2tlblwiKTtcclxuICAgIGlmIChjb29raWVDaGVja2VkKSB7XHJcbiAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpIHtcclxuICAgICAgICByZXR1cm4gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBmYWxzZTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVVc2VyID0gKHVzZXIsIG5leHQpID0+IHtcclxuICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICBpZiAobG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ1c2VyXCIpKSB7XHJcbiAgICAgIGxldCBhdXRoID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInVzZXJcIikpO1xyXG4gICAgICBhdXRoID0gdXNlcjtcclxuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJ1c2VyXCIsIEpTT04uc3RyaW5naWZ5KGF1dGgpKTtcclxuICAgICAgbmV4dCgpO1xyXG4gICAgfVxyXG4gIH1cclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBmb3Jnb3RQYXNzd29yZCA9IChlbWFpbCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L2ZvcmdvdC1wYXNzd29yZGAsIHtcclxuICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZW1haWwpLFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVzZXRQYXNzd29yZCA9IChyZXNldEluZm8pID0+IHtcclxuICByZXR1cm4gZmV0Y2goYCR7QVBJfS9yZXNldC1wYXNzd29yZGAsIHtcclxuICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVzZXRJbmZvKSxcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG4iLCJpbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtZmV0Y2hcIjtcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBoYW5kbGVSZXNwb25zZSB9IGZyb20gXCIuL2F1dGguYWN0aW9uXCI7XHJcbmltcG9ydCBxdWVyeVN0cmluZyBmcm9tIFwicXVlcnktc3RyaW5nXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlTW9iaWxlID0gKG1vYmlsZSwgdG9rZW4pID0+IHtcclxuICByZXR1cm4gZmV0Y2goYCR7QVBJfS9tb2JpbGVgLCB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgIH0sXHJcbiAgICBib2R5OiBtb2JpbGUsXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBoYW5kbGVSZXNwb25zZShyZXNwb25zZSk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG1vYmlsZUxpc3RQcml2YXRlID0gKCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L21vYmlsZS1wcml2YXRlLXJvb3RgLCB7XHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbi8qKmRvbmUgKHBob25lcz5icmFuZD5zbHVnKSAqL1xyXG5leHBvcnQgY29uc3QgbW9iaWxlTGlzdFB1YmxpYyA9ICgpID0+IHtcclxuICByZXR1cm4gZmV0Y2goYCR7QVBJfS9tb2JpbGUtcHVibGljLXJvb3RgLCB7XHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbi8qKmRvbmUgY3JlYXRvcnMgKi9cclxuZXhwb3J0IGNvbnN0IG1vYmlsZUxpc3RQdWJsaWNDcmVhdG9ycyA9ICgpID0+IHtcclxuICByZXR1cm4gZmV0Y2goYCR7QVBJfS9tb2JpbGUtcHVibGljLXJvb3QtY3JlYXRvcnNgLCB7XHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbi8qKmRvbmUgKHJldmlld3M+aW5kZXgsSU5ERVgpICovXHJcbmV4cG9ydCBjb25zdCBtb2JpbGVMaXN0UHVibGljUmVsZXZlbnRCcmFuZHMgPSAoaWQpID0+IHtcclxuICByZXR1cm4gZmV0Y2goYCR7QVBJfS9tb2JpbGUtYnJhbmRzLWxpc3QvJHtpZH1gLCB7XHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbi8qKmRvbmUgKG5ld3M+SW5kZXgscmV2aWV3cz5pbmRleCxJTkRFWCkgKi9cclxuZXhwb3J0IGNvbnN0IG1vYmlsZUxpc3RQdWJsaWNOZXdzUmV2aWV3cyA9ICgpID0+IHtcclxuICByZXR1cm4gZmV0Y2goYCR7QVBJfS9tb2JpbGUtbmV3cy1yZXZpZXdzYCwge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG4vKipkb25lIChwaG9uZXM+YnJhbmQ+c2x1ZykgKi9cclxuZXhwb3J0IGNvbnN0IHNpbmdsZU1vYmlsZSA9IChzbHVnKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKGAke0FQSX0vbW9iaWxlLyR7c2x1Z31gLCB7XHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbi8qKmRvbmUgYWRtaW4gKi9cclxuZXhwb3J0IGNvbnN0IHNpbmdsZU1vYmlsZUNyZWF0b3JzID0gKHNsdWcpID0+IHtcclxuICByZXR1cm4gZmV0Y2goYCR7QVBJfS9tb2JpbGUtY3JlYXRvcnMvJHtzbHVnfWAsIHtcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuLyoqZG9uZSAocGhvbmVzPmJyYW5kPnNsdWcpICovXHJcbmV4cG9ydCBjb25zdCBsaXN0UmVsYXRlZCA9IChibG9nKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKGAke0FQSX0vbW9iaWxlL3JlbGF0ZWRgLCB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShibG9nKSxcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuLyoqZG9uZSAocGhvbmVzPmJyYW5kPnNsdWcpICovXHJcbmV4cG9ydCBjb25zdCBsaXN0UmVsYXRlZE5ld3MgPSAoYmxvZykgPT4ge1xyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L21vYmlsZS9uZXdzLXJlbGF0ZWRgLCB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShibG9nKSxcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuLyoqZG9uZSAocGhvbmVzPmJyYW5kPnNsdWcpICovXHJcbmV4cG9ydCBjb25zdCBsaXN0UmVsYXRlZFJldmlld3MgPSAoYmxvZykgPT4ge1xyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L21vYmlsZS9yZXZpZXdzLXJlbGF0ZWRgLCB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShibG9nKSxcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZU1vYmlsZSA9IChzbHVnLCB0b2tlbikgPT4ge1xyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L21vYmlsZS8ke3NsdWd9YCwge1xyXG4gICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICB9LFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVNb2JpbGUgPSAobW9iaWxlLCB0b2tlbiwgc2x1ZykgPT4ge1xyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L21vYmlsZS8ke3NsdWd9YCwge1xyXG4gICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgIH0sXHJcbiAgICBib2R5OiBtb2JpbGUsXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBoYW5kbGVSZXNwb25zZShyZXNwb25zZSk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFwcHJvdmVNb2JpbGUgPSAoc2x1ZywgdG9rZW4pID0+IHtcclxuICAvL2NvbnNvbGUubG9nKCdmcm9tIGFjdGlvbnMgIDogJywgc2x1ZywgdG9rZW4pO1xyXG5cclxuICByZXR1cm4gZmV0Y2goYCR7QVBJfS9tb2JpbGUvYXBwcm92ZS8ke3NsdWd9YCwge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgIH0sXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBoYW5kbGVSZXNwb25zZShyZXNwb25zZSk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVuUHVibGlzaE1vYmlsZSA9IChzbHVnLCB0b2tlbikgPT4ge1xyXG4gIC8vY29uc29sZS5sb2coJ2Zyb20gYWN0aW9ucyAgOiAnLCBzbHVnLCB0b2tlbik7XHJcblxyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L21vYmlsZS91bi1wdWJsaXNoLyR7c2x1Z31gLCB7XHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgfSxcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGlzdFNlYXJjaEFkbWluID0gKHBhcmFtcykgPT4ge1xyXG4gIGxldCBxdWVyeSA9IHF1ZXJ5U3RyaW5nLnN0cmluZ2lmeShwYXJhbXMpO1xyXG5cclxuICByZXR1cm4gZmV0Y2goYCR7QVBJfS9tb2JpbGUtc2VhcmNoL3NlYXJjaD8ke3F1ZXJ5fWAsIHtcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuLyoqY29tcGxldGVkIChTZWFyY2gpICovXHJcbmV4cG9ydCBjb25zdCBsaXN0U2VhcmNoVXNlciA9IChwYXJhbXMpID0+IHtcclxuICBsZXQgcXVlcnkgPSBxdWVyeVN0cmluZy5zdHJpbmdpZnkocGFyYW1zKTtcclxuXHJcbiAgcmV0dXJuIGZldGNoKGAke0FQSX0vbW9iaWxlLXNlYXJjaC11c2VyL3NlYXJjaD8ke3F1ZXJ5fWAsIHtcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG4iLCJpbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtZmV0Y2hcIjtcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBoYW5kbGVSZXNwb25zZSB9IGZyb20gXCIuL2F1dGguYWN0aW9uXCI7XHJcbmltcG9ydCBxdWVyeVN0cmluZyBmcm9tIFwicXVlcnktc3RyaW5nXCI7XHJcblxyXG4vKipcclxuICpcclxuICovXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVOZXdzID0gKG5ld3MsIHRva2VuKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKGAke0FQSX0vbmV3c2AsIHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgfSxcclxuICAgIGJvZHk6IG5ld3MsXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBoYW5kbGVSZXNwb25zZShyZXNwb25zZSk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG5ld3NMaXN0UHJpdmF0ZSA9ICgpID0+IHtcclxuICByZXR1cm4gZmV0Y2goYCR7QVBJfS9uZXdzLXByaXZhdGUtcm9vdGAsIHtcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuLyoqZG9uZSAobmV3cz5JbmRleCxuZXdzPnNsdWcpICovXHJcbmV4cG9ydCBjb25zdCBuZXdzTGlzdFB1YmxpYyA9ICgpID0+IHtcclxuICByZXR1cm4gZmV0Y2goYCR7QVBJfS9uZXdzLXB1YmxpYy1yb290YCwge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG4vKipkb25lIChJbmRleCBwYWdlKSovXHJcbmV4cG9ydCBjb25zdCBuZXdzTGlzdFB1YmxpY0xpbWl0Rmlyc3RTZWN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L25ld3MtcHVibGljLWxpbWl0LWZpcnN0LXNlY3Rpb25gLCB7XHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbi8qKmRvbmUgKEluZGV4IHBhZ2UpKi9cclxuZXhwb3J0IGNvbnN0IG5ld3NMaXN0UHVibGljTGltaXRTZWNvbmRTZWN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L25ld3MtcHVibGljLWxpbWl0LXNlY29uZC1zZWN0aW9uYCwge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG4vKipkb25lIChJbmRleCBwYWdlKSovXHJcbmV4cG9ydCBjb25zdCBuZXdzTGlzdFB1YmxpY0xpbWl0RmluYWxTZWN0aW9uID0gKHNraXAsIGxpbWl0KSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IHsgc2tpcCwgbGltaXQgfTtcclxuICByZXR1cm4gZmV0Y2goYCR7QVBJfS9uZXdzLXB1YmxpYy1saW1pdC1maW5hbC1zZWN0aW9uYCwge1xyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoZGF0YSksXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbi8qKmRvbmUgKEluZGV4IHBhZ2UpICovXHJcbmV4cG9ydCBjb25zdCBuZXdzUHVibGljTGF0ZXN0ID0gKCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L25ld3MtcHVibGljLWxhdGVzdGAsIHtcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuLyoqZG9uZSAoSW5kZXggcGFnZSkgKi9cclxuZXhwb3J0IGNvbnN0IG5ld3NQdWJsaWNTZWNvbmRMYXRlc3QgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKGAke0FQSX0vbmV3cy1wdWJsaWMtc2Vjb25kLWxhdGVzdGAsIHtcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuLyoqZG9uZSAobmV3cz5zbHVnKSAqL1xyXG5leHBvcnQgY29uc3QgbmV3c0xpc3RQdWJsaWNUb3BTdG9yaWVzID0gKGJsb2cpID0+IHtcclxuICByZXR1cm4gZmV0Y2goYCR7QVBJfS9uZXdzVG9wU3Rvcmllc2AsIHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJsb2cpLFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG4vKioocmV2aWV3PkluZGV4LHBob25lcz5JbmRleCxwaG9uZT5icmFuZHM+c2x1ZykgKi9cclxuZXhwb3J0IGNvbnN0IG5ld3NMaXN0UHVibGljTW9iaWxlUmV2aWV3cyA9ICgpID0+IHtcclxuICByZXR1cm4gZmV0Y2goYCR7QVBJfS9uZXdzLW1vYmlsZS1yZXZpZXdzYCwge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbmV3c0xpc3RNb2RlcmF0b3JQcml2YXRlID0gKGlkKSA9PiB7XHJcbiAgLy9jb25zb2xlLmxvZygnZnJvbSBhY3Rpb24gJywgaWQpO1xyXG5cclxuICByZXR1cm4gZmV0Y2goYCR7QVBJfS9uZXdzL21vZGVyYXRvci1wcml2YXRlLyR7aWR9YCwge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbmV3c0xpc3RNb2RlcmF0b3JQdWJsaWMgPSAoaWQpID0+IHtcclxuICAvL2NvbnNvbGUubG9nKCdmcm9tIGFjdGlvbiAnLCBpZCk7XHJcblxyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L25ld3MvbW9kZXJhdG9yLXB1YmxpYy8ke2lkfWAsIHtcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuLy9kb25lKG5ld3M+c2x1ZylcclxuZXhwb3J0IGNvbnN0IHNpbmdsZU5ld3MgPSAoc2x1ZykgPT4ge1xyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L25ld3MvJHtzbHVnfWAsIHtcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG4vL2RvbmUobmV3cz5zbHVnKVxyXG5leHBvcnQgY29uc3Qgc2luZ2xlTmV3c0NyZWF0b3JzID0gKHNsdWcpID0+IHtcclxuICByZXR1cm4gZmV0Y2goYCR7QVBJfS9uZXdzQ3JlYXRvci8ke3NsdWd9YCwge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGlzdFJlbGF0ZWQgPSAoYmxvZykgPT4ge1xyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L25ld3MvcmVsYXRlZGAsIHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJsb2cpLFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG4vL2RvbmUobmV3cz5zbHVnKVxyXG5leHBvcnQgY29uc3QgbGlzdFJlbGF0ZWRSZXZpZXdzID0gKGJsb2cpID0+IHtcclxuICByZXR1cm4gZmV0Y2goYCR7QVBJfS9uZXdzL3Jldmlld3MtcmVsYXRlZGAsIHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJsb2cpLFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG4vL2RvbmUobmV3cz5zbHVnKVxyXG5leHBvcnQgY29uc3QgbGlzdFJlbGF0ZWRNb2JpbGVzID0gKGJsb2cpID0+IHtcclxuICByZXR1cm4gZmV0Y2goYCR7QVBJfS9uZXdzL21vYmlsZXMtcmVsYXRlZGAsIHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJsb2cpLFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlTmV3cyA9IChzbHVnLCB0b2tlbikgPT4ge1xyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L25ld3MvJHtzbHVnfWAsIHtcclxuICAgIG1ldGhvZDogXCJERUxFVEVcIixcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgfSxcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdXBkYXRlTmV3cyA9IChuZXdzLCB0b2tlbiwgc2x1ZykgPT4ge1xyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L25ld3MvJHtzbHVnfWAsIHtcclxuICAgIG1ldGhvZDogXCJQVVRcIixcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICB9LFxyXG4gICAgYm9keTogbmV3cyxcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYXBwcm92ZU5ld3MgPSAoc2x1ZywgdG9rZW4pID0+IHtcclxuICAvL2NvbnNvbGUubG9nKCdmcm9tIGFjdGlvbnMgIDogJywgc2x1ZywgdG9rZW4pO1xyXG5cclxuICByZXR1cm4gZmV0Y2goYCR7QVBJfS9uZXdzL2FwcHJvdmUvJHtzbHVnfWAsIHtcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICB9LFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1blB1Ymxpc2hOZXdzID0gKHNsdWcsIHRva2VuKSA9PiB7XHJcbiAgLy9jb25zb2xlLmxvZygnZnJvbSBhY3Rpb25zICA6ICcsIHNsdWcsIHRva2VuKTtcclxuXHJcbiAgcmV0dXJuIGZldGNoKGAke0FQSX0vbmV3cy91bi1wdWJsaXNoLyR7c2x1Z31gLCB7XHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgfSxcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGlzdFNlYXJjaEFkbWluID0gKHBhcmFtcykgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwic2VhcmNoIHBhcmFtcyA6IFwiLCBwYXJhbXMpO1xyXG5cclxuICBsZXQgcXVlcnkgPSBxdWVyeVN0cmluZy5zdHJpbmdpZnkocGFyYW1zKTtcclxuXHJcbiAgY29uc29sZS5sb2coXCJxdWVyeSBwYXJhbXMgOiBcIiwgcGFyYW1zKTtcclxuXHJcbiAgcmV0dXJuIGZldGNoKGAke0FQSX0vbmV3cy1zZWFyY2gvc2VhcmNoPyR7cXVlcnl9YCwge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG4vKipjb21wbGV0ZWQgKFNlYXJjaCkgKi9cclxuZXhwb3J0IGNvbnN0IGxpc3RTZWFyY2hVc2VyID0gKHBhcmFtcykgPT4ge1xyXG4gIGxldCBxdWVyeSA9IHF1ZXJ5U3RyaW5nLnN0cmluZ2lmeShwYXJhbXMpO1xyXG5cclxuICByZXR1cm4gZmV0Y2goYCR7QVBJfS9uZXdzLXNlYXJjaC11c2VyL3NlYXJjaD8ke3F1ZXJ5fWAsIHtcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3RTZWFyY2hNb2RlcmF0b3IgPSAocGFyYW1zKSA9PiB7XHJcbiAgY29uc29sZS5sb2coXCJzZWFyY2ggcGFyYW1zIDogXCIsIHBhcmFtcyk7XHJcblxyXG4gIGxldCBxdWVyeSA9IHF1ZXJ5U3RyaW5nLnN0cmluZ2lmeShwYXJhbXMpO1xyXG5cclxuICBjb25zb2xlLmxvZyhcInF1ZXJ5IHBhcmFtcyA6IFwiLCBwYXJhbXMpO1xyXG5cclxuICByZXR1cm4gZmV0Y2goYCR7QVBJfS9uZXdzLXNlYXJjaC1tb2RlcmF0b3Ivc2VhcmNoPyR7cXVlcnl9YCwge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcbiIsImltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy1mZXRjaFwiO1xyXG5pbXBvcnQgeyBBUEkgfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IGhhbmRsZVJlc3BvbnNlIH0gZnJvbSBcIi4vYXV0aC5hY3Rpb25cIjtcclxuaW1wb3J0IHF1ZXJ5U3RyaW5nIGZyb20gXCJxdWVyeS1zdHJpbmdcIjtcclxuXHJcbmV4cG9ydCBjb25zdCBjcmVhdGVSZXZpZXcgPSAocmV2aWV3LCB0b2tlbikgPT4ge1xyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L3Jldmlld2AsIHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgfSxcclxuICAgIGJvZHk6IHJldmlldyxcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmV2aWV3TGlzdFByaXZhdGUgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKGAke0FQSX0vcmV2aWV3cy1wcml2YXRlLXJvb3RgLCB7XHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbi8qKmRvbmUgKFJldmlld3M+SW5kZXgscmV2aWV3cz5zbHVnKSAqL1xyXG5leHBvcnQgY29uc3QgcmV2aWV3TGlzdFB1YmxpYyA9ICgpID0+IHtcclxuICByZXR1cm4gZmV0Y2goYCR7QVBJfS9yZXZpZXdzLXB1YmxpYy1yb290YCwge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG4vKiogZG9uZSAoSW5kZXggcGFnZSkgICovXHJcbmV4cG9ydCBjb25zdCByZXZpZXdQdWJsaWNMYXRlc3QgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKGAke0FQSX0vcmV2aWV3LXB1YmxpYy1sYXRlc3RgLCB7XHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbi8qKiBkb25lIChJbmRleCBwYWdlKSAgKi9cclxuZXhwb3J0IGNvbnN0IHJldmlld1B1YmxpY1NlY29uZExhdGVzdCA9ICgpID0+IHtcclxuICByZXR1cm4gZmV0Y2goYCR7QVBJfS9yZXZpZXctcHVibGljLXNlY29uZC1sYXRlc3RgLCB7XHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbi8qKiBkb25lIChJbmRleCBwYWdlKSAgKi9cclxuZXhwb3J0IGNvbnN0IHJldmlld1B1YmxpY0VpZ2h0TGF0ZXN0ID0gKCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L3Jldmlldy1wdWJsaWMtZWlnaHQtbGF0ZXN0YCwge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG4vKiogZG9uZSAoSW5kZXggcGFnZSkgICovXHJcbmV4cG9ydCBjb25zdCByZXZpZXdMaXN0UHVibGljSG9tZVBhZ2UgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKGAke0FQSX0vcmV2aWV3cy1ob21lYCwge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG4vKiogZG9uZSAoSW5kZXggcGFnZSkgICovXHJcbmV4cG9ydCBjb25zdCByZXZpZXdMaXN0UHVibGljTGltaXRlZFNlY3Rpb25PbmUgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKGAke0FQSX0vcmV2aWV3LXB1YmxpYy1saW1pdGVkLWxpc3Qtc2VjdGlvbi1vbmVgLCB7XHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbi8qKiBkb25lIChJbmRleCBwYWdlKSAgKi9cclxuZXhwb3J0IGNvbnN0IHJldmlld0xpc3RQdWJsaWNMaW1pdGVkU2VjdGlvblR3byA9ICgpID0+IHtcclxuICByZXR1cm4gZmV0Y2goYCR7QVBJfS9yZXZpZXctcHVibGljLWxpbWl0ZWQtbGlzdC1zZWN0aW9uLXR3b2AsIHtcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuLyoqZG9uZSAocmV2aWV3cz5zbHVnKSAqL1xyXG5leHBvcnQgY29uc3QgbmV3c0xpc3RQdWJsaWNUb3BTdG9yaWVzID0gKCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L25ld3NUb3BTdG9yaWVzYCwge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG4vKipkb25lIChuZXdzPmluZGV4LHBob25lcz5pbmRleCxwaG9uZXM+YnJhbmRzPnNsdWcpICovXHJcbmV4cG9ydCBjb25zdCByZXZpZXdMaXN0UHVibGljTW9iaWxlTmV3cyA9ICgpID0+IHtcclxuICByZXR1cm4gZmV0Y2goYCR7QVBJfS9yZXZpZXdzLW5ld3MtbW9iaWxlYCwge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmV2aWV3TGlzdE1vZGVyYXRvclByaXZhdGUgPSAoaWQpID0+IHtcclxuICAvL2NvbnNvbGUubG9nKCdmcm9tIGFjdGlvbiAnLCBpZCk7XHJcblxyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L3Jldmlldy9tb2RlcmF0b3ItcHJpdmF0ZS8ke2lkfWAsIHtcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJldmlld0xpc3RNb2RlcmF0b3JQdWJsaWMgPSAoaWQpID0+IHtcclxuICAvL2NvbnNvbGUubG9nKCdmcm9tIGFjdGlvbiAnLCBpZCk7XHJcblxyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L3Jldmlldy9tb2RlcmF0b3ItcHVibGljLyR7aWR9YCwge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG4vL2RvbmUgKHJldmlld3M+c2x1ZylcclxuZXhwb3J0IGNvbnN0IHNpbmdsZVJldmlldyA9IChzbHVnKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKGAke0FQSX0vcmV2aWV3LyR7c2x1Z31gLCB7XHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbi8vZG9uZSBhZG1pblxyXG5leHBvcnQgY29uc3Qgc2luZ2xlUmV2aWV3Q3JlYXRvcnMgPSAoc2x1ZykgPT4ge1xyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L3Jldmlldy1jcmVhdG9ycy8ke3NsdWd9YCwge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlUmV2aWV3ID0gKHNsdWcsIHRva2VuKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKGAke0FQSX0vcmV2aWV3LyR7c2x1Z31gLCB7XHJcbiAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgIH0sXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBoYW5kbGVSZXNwb25zZShyZXNwb25zZSk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVJldmlldyA9IChyZXZpZXcsIHRva2VuLCBzbHVnKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKGAke0FQSX0vcmV2aWV3LyR7c2x1Z31gLCB7XHJcbiAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgfSxcclxuICAgIGJvZHk6IHJldmlldyxcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgYXBwcm92ZVJldmlldyA9IChzbHVnLCB0b2tlbikgPT4ge1xyXG4gIC8vY29uc29sZS5sb2coJ2Zyb20gYWN0aW9ucyAgOiAnLCBzbHVnLCB0b2tlbik7XHJcblxyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L3Jldmlldy9hcHByb3ZlLyR7c2x1Z31gLCB7XHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgfSxcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdW5QdWJsaXNoUmV2aWV3ID0gKHNsdWcsIHRva2VuKSA9PiB7XHJcbiAgLy9jb25zb2xlLmxvZygnZnJvbSBhY3Rpb25zICA6ICcsIHNsdWcsIHRva2VuKTtcclxuXHJcbiAgcmV0dXJuIGZldGNoKGAke0FQSX0vcmV2aWV3L3VuLXB1Ymxpc2gvJHtzbHVnfWAsIHtcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICB9LFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbi8vZG9uZSAocmV2aWV3cz5zbHVnKVxyXG5leHBvcnQgY29uc3QgbGlzdFJlbGF0ZWQgPSAoYmxvZykgPT4ge1xyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L3Jldmlldy9yZWxhdGVkYCwge1xyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYmxvZyksXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsaXN0UmVsYXRlZE5ld3MgPSAoYmxvZykgPT4ge1xyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L3Jldmlldy9uZXdzLXJlbGF0ZWRgLCB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShibG9nKSxcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuLy9kb25lKHJldmlld3M+c2x1ZylcclxuZXhwb3J0IGNvbnN0IGxpc3RSZWxhdGVkTW9iaWxlcyA9IChibG9nKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKGAke0FQSX0vcmV2aWV3L21vYmlsZXMtcmVsYXRlZGAsIHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJsb2cpLFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGlzdFNlYXJjaEFkbWluID0gKHBhcmFtcykgPT4ge1xyXG4gIGxldCBxdWVyeSA9IHF1ZXJ5U3RyaW5nLnN0cmluZ2lmeShwYXJhbXMpO1xyXG5cclxuICByZXR1cm4gZmV0Y2goYCR7QVBJfS9yZXZpZXctc2VhcmNoL3NlYXJjaD8ke3F1ZXJ5fWAsIHtcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuLyoqY29tcGxldGVkIChTZWFyY2gpICovXHJcbmV4cG9ydCBjb25zdCBsaXN0U2VhcmNoVXNlciA9IChwYXJhbXMpID0+IHtcclxuICBsZXQgcXVlcnkgPSBxdWVyeVN0cmluZy5zdHJpbmdpZnkocGFyYW1zKTtcclxuXHJcbiAgcmV0dXJuIGZldGNoKGAke0FQSX0vcmV2aWV3LXNlYXJjaC11c2VyL3NlYXJjaD8ke3F1ZXJ5fWAsIHtcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3RTZWFyY2hNb2RlcmF0b3IgPSAocGFyYW1zKSA9PiB7XHJcbiAgbGV0IHF1ZXJ5ID0gcXVlcnlTdHJpbmcuc3RyaW5naWZ5KHBhcmFtcyk7XHJcblxyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L3Jldmlldy1zZWFyY2gtbW9kZXJhdG9yL3NlYXJjaD8ke3F1ZXJ5fWAsIHtcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG4iLCJpbXBvcnQgZ2V0Q29uZmlnIGZyb20gXCJuZXh0L2NvbmZpZ1wiO1xyXG5jb25zdCB7IHB1YmxpY1J1bnRpbWVDb25maWcgfSA9IGdldENvbmZpZygpO1xyXG5cclxuZXhwb3J0IGNvbnN0IEFQSSA9IHB1YmxpY1J1bnRpbWVDb25maWcuUFJPRFVDVElPTlxyXG4gID8gcHVibGljUnVudGltZUNvbmZpZy5BUElfUFJPRFVDVElPTlxyXG4gIDogcHVibGljUnVudGltZUNvbmZpZy5BUElfREVWRUxPUE1FTlQ7XHJcblxyXG5leHBvcnQgY29uc3QgQVBQX05BTUUgPSBwdWJsaWNSdW50aW1lQ29uZmlnLkFQUF9OQU1FO1xyXG5cclxuZXhwb3J0IGNvbnN0IERPTUFJTiA9IHB1YmxpY1J1bnRpbWVDb25maWcuUFJPRFVDVElPTlxyXG4gID8gcHVibGljUnVudGltZUNvbmZpZy5ET01BSU5fUFJPRFVDVElPTlxyXG4gIDogcHVibGljUnVudGltZUNvbmZpZy5ET01BSU5fREVWRUxPUE1FTlQ7XHJcblxyXG5leHBvcnQgY29uc3QgRkJfQVBQX0lEID0gcHVibGljUnVudGltZUNvbmZpZy5GQl9BUFBfSUQ7XHJcblxyXG5leHBvcnQgY29uc3QgVFdJVFRFUl9QVUJMSVNIRVJfSEFORExFID1cclxuICBwdWJsaWNSdW50aW1lQ29uZmlnLlRXSVRURVJfUFVCTElTSEVSX0hBTkRMRTtcclxuXHJcbmV4cG9ydCBjb25zdCBUV0lUVEVSX0FVVEhPUl9IQU5ETEUgPSBwdWJsaWNSdW50aW1lQ29uZmlnLlRXSVRURVJfQVVUSE9SX0hBTkRMRTtcclxuXHJcbmV4cG9ydCBjb25zdCBESVNRVVNfU0hPUlROQU1FID0gcHVibGljUnVudGltZUNvbmZpZy5ESVNRVVNfU0hPUlROQU1FO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRJTllNQ19BUFBfSUQgPSBwdWJsaWNSdW50aW1lQ29uZmlnLlRJTllNQ19BUFBfSUQ7XHJcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW4sXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3csIGxvY2FsZSB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcblxuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUmVmOiBhbnkgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZlxuXG4gIGNvbnN0IGNsZWFudXAgPSBSZWFjdC51c2VSZWY8KCkgPT4gdm9pZD4oKVxuICBjb25zdCBzZXRSZWYgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoZWw6IEVsZW1lbnQpID0+IHtcbiAgICAgIC8vIGNsZWFudXAgcHJldmlvdXMgZXZlbnQgaGFuZGxlcnNcbiAgICAgIGlmIChjbGVhbnVwLmN1cnJlbnQpIHtcbiAgICAgICAgY2xlYW51cC5jdXJyZW50KClcbiAgICAgICAgY2xlYW51cC5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChwICYmIEludGVyc2VjdGlvbk9ic2VydmVyICYmIGVsICYmIGVsLnRhZ05hbWUgJiYgaXNMb2NhbFVSTChocmVmKSkge1xuICAgICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgICBjbGVhbnVwLmN1cnJlbnQgPSBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoZWwsICgpID0+IHtcbiAgICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgICAgICAgbG9jYWxlOlxuICAgICAgICAgICAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgICA/IGxvY2FsZVxuICAgICAgICAgICAgICAgICAgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW3AsIGNoaWxkUmVmLCBocmVmLCBhcywgcm91dGVyLCBsb2NhbGVdXG4gIClcblxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IHNldFJlZixcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShcbiAgICAgICAgYXMsXG4gICAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGUsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZVxuICAgICAgKVxuICAgIClcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGxleGVyKHN0cikge1xuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyW2ldO1xuICAgICAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJNT0RJRklFUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRVNDQVBFRF9DSEFSXCIsIGluZGV4OiBpKyssIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIntcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk9QRU5cIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNMT1NFXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAvLyBgMC05YFxuICAgICAgICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBBLVpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBhLXpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgX2BcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9PT0gOTUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTkFNRVwiLCBpbmRleDogaSwgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXR0ZXJuIGNhbm5vdCBzdGFydCB3aXRoIFxcXCI/XFxcIiBhdCBcIiArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHJbal0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0IFwiICsgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5iYWxhbmNlZCBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIlBBVFRFUk5cIiwgaW5kZXg6IGksIHZhbHVlOiBwYXR0ZXJuIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0hBUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgIH1cbiAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRU5EXCIsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHRva2VucyA9IGxleGVyKHN0cik7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5wcmVmaXhlcywgcHJlZml4ZXMgPSBfYSA9PT0gdm9pZCAwID8gXCIuL1wiIDogX2E7XG4gICAgdmFyIGRlZmF1bHRQYXR0ZXJuID0gXCJbXlwiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdKz9cIjtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleSA9IDA7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICB2YXIgdHJ5Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmIChpIDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNbaSsrXS52YWx1ZTtcbiAgICB9O1xuICAgIHZhciBtdXN0Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNvbnN1bWUodHlwZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YXIgX2EgPSB0b2tlbnNbaV0sIG5leHRUeXBlID0gX2EudHlwZSwgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgXCIgKyBuZXh0VHlwZSArIFwiIGF0IFwiICsgaW5kZXggKyBcIiwgZXhwZWN0ZWQgXCIgKyB0eXBlKTtcbiAgICB9O1xuICAgIHZhciBjb25zdW1lVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHdoaWxlICgodmFsdWUgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKSB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICB3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKTtcbiAgICAgICAgdmFyIG5hbWUgPSB0cnlDb25zdW1lKFwiTkFNRVwiKTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKTtcbiAgICAgICAgaWYgKG5hbWUgfHwgcGF0dGVybikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNoYXIgfHwgXCJcIjtcbiAgICAgICAgICAgIGlmIChwcmVmaXhlcy5pbmRleE9mKHByZWZpeCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBwcmVmaXg7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogcGF0dGVybiB8fCBkZWZhdWx0UGF0dGVybixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gY2hhciB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3BlbiA9IHRyeUNvbnN1bWUoXCJPUEVOXCIpO1xuICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gdHJ5Q29uc3VtZShcIk5BTUVcIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuXzEgPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICBtdXN0Q29uc3VtZShcIkNMT1NFXCIpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVfMSB8fCAocGF0dGVybl8xID8ga2V5KysgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuYW1lXzEgJiYgIXBhdHRlcm5fMSA/IGRlZmF1bHRQYXR0ZXJuIDogcGF0dGVybl8xLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4LFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtdXN0Q29uc3VtZShcIkVORFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gY29tcGlsZShzdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uKHRva2Vucywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHJlRmxhZ3MgPSBmbGFncyhvcHRpb25zKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2EsIF9iID0gb3B0aW9ucy52YWxpZGF0ZSwgdmFsaWRhdGUgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xuICAgIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICAgIHZhciBtYXRjaGVzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpJFwiLCByZUZsYWdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIG9wdGlvbmFsID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiP1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIjtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYWxsIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKFN0cmluZyh2YWx1ZSksIHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciB0eXBlT2ZNZXNzYWdlID0gcmVwZWF0ID8gXCJhbiBhcnJheVwiIDogXCJhIHN0cmluZ1wiO1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gYmUgXCIgKyB0eXBlT2ZNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbjtcbi8qKlxuICogQ3JlYXRlIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIHNwZWMuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5tYXRjaCA9IG1hdGNoO1xuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVjb2RlLCBkZWNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lKSB7XG4gICAgICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHBhdGggPSBtWzBdLCBpbmRleCA9IG0uaW5kZXg7XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09IFwiKlwiIHx8IGtleS5tb2RpZmllciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH07XG59XG5leHBvcnRzLnJlZ2V4cFRvRnVuY3Rpb24gPSByZWdleHBUb0Z1bmN0aW9uO1xuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGZsYWdzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnNlbnNpdGl2ZSA/IFwiXCIgOiBcImlcIjtcbn1cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICAgIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtcbiAgICBpZiAoZ3JvdXBzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGksXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIgKyBwYXJ0cy5qb2luKFwifFwiKSArIFwiKVwiLCBmbGFncyhvcHRpb25zKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvUmVnZXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdleHAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnN0cmljdCwgc3RyaWN0ID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5zdGFydCwgc3RhcnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMuZW5kLCBlbmQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfZDtcbiAgICB2YXIgZW5kc1dpdGggPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmVuZHNXaXRoIHx8IFwiXCIpICsgXCJdfCRcIjtcbiAgICB2YXIgZGVsaW1pdGVyID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl1cIjtcbiAgICB2YXIgcm91dGUgPSBzdGFydCA/IFwiXlwiIDogXCJcIjtcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICAgIGZvciAodmFyIF9pID0gMCwgdG9rZW5zXzEgPSB0b2tlbnM7IF9pIDwgdG9rZW5zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc18xW19pXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4ucHJlZml4KSk7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5zdWZmaXgpKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5wYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMpXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCB8fCBzdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLm1vZGlmaWVyID09PSBcIitcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgPyBcIj9cIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKD86XCIgKyBzdWZmaXggKyBwcmVmaXggKyBcIig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSkqKVwiICsgc3VmZml4ICsgXCIpXCIgKyBtb2Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbmQpIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpXG4gICAgICAgICAgICByb3V0ZSArPSBkZWxpbWl0ZXIgKyBcIj9cIjtcbiAgICAgICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyBcIiRcIiA6IFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRlbGltaXRlci5pbmRleE9mKGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdKSA+IC0xXG4gICAgICAgICAgICA6IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgIGVuZFRva2VuID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgZGVsaW1pdGVyICsgXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpKT9cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRW5kRGVsaW1pdGVkKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/PVwiICsgZGVsaW1pdGVyICsgXCJ8XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSk7XG59XG5leHBvcnRzLnRva2Vuc1RvUmVnZXhwID0gdG9rZW5zVG9SZWdleHA7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSlcbiAgICAgICAgcmV0dXJuIGFycmF5VG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5wYXRoVG9SZWdleHAgPSBwYXRoVG9SZWdleHA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5pbXBvcnQgZXNjYXBlUGF0aERlbGltaXRlcnMgZnJvbSAnLi91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzJ1xuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPSBudWxsIHwgeyBfX046IGZhbHNlIH0gfCAoeyBfX046IHRydWUgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiZcbiAgICAgICFwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlICsgJy8nKSAmJlxuICAgICAgcGF0aCAhPT0gJy8nICsgbG9jYWxlXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIChwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlICsgJy8nKSB8fCBwYXRoID09PSAnLycgKyBsb2NhbGUpXG4gICAgICA/IHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSB8fCAnLydcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSkubWFwKGVzY2FwZVBhdGhEZWxpbWl0ZXJzKS5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlc2NhcGVQYXRoRGVsaW1pdGVycyh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORF9FUlJPUiA9ICdTU0cgRGF0YSBOT1RfRk9VTkQnXG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgLy8gVE9ETzogaGFuZGxlIHJlbG9hZGluZyBpbiBkZXZlbG9wbWVudCBmcm9tIGZhbGxiYWNrIHJldHVybmluZyAyMDBcbiAgICAgICAgLy8gdG8gb24tZGVtYW5kLWVudHJ5LWhhbmRsZXIgY2F1c2luZyBpdCB0byByZWxvYWQgcGVyaW9kaWNhbGx5XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihTU0dfREFUQV9OT1RfRk9VTkRfRVJST1IpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0czogaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlLFxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlXG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGVcbiAgICAgIH1cblxuICAgICAgY29uc3Qge1xuICAgICAgICBub3JtYWxpemVMb2NhbGVQYXRoLFxuICAgICAgfSA9IHJlcXVpcmUoJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJykgYXMgdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnKVxuXG4gICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aChhcywgdGhpcy5sb2NhbGVzKVxuXG4gICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGVcbiAgICAgICAgdXJsID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBhcyA9IGFkZExvY2FsZShhcywgb3B0aW9ucy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSlcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBjb25zdCB7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIucHJvbWlzZWRCdWlsZE1hbmlmZXN0XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgbGV0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKSB7XG4gICAgICByZXNvbHZlZEFzID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBwYXJzZVJlbGF0aXZlVXJsKGFzKS5wYXRobmFtZSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIGJhc2VQYXRoLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHRoaXMuX3Jlc29sdmVIcmVmKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lIVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzb2x2ZWRBcyAhPT0gYXMpIHtcbiAgICAgICAgY29uc3QgcG90ZW50aWFsSHJlZiA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkLCB7IHBhdGhuYW1lOiByZXNvbHZlZEFzIH0pLFxuICAgICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICkucGF0aG5hbWUhXG4gICAgICAgIClcblxuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwb3RlbnRpYWxIcmVmKSkge1xuICAgICAgICAgIHJvdXRlID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhdGhuYW1lID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKFxuICAgICAgICAoX19OX1NTRyB8fCBfX05fU1NQKSAmJlxuICAgICAgICBwcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWYsIHBhZ2VzKVxuXG4gICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBkZXN0aW5hdGlvbiwgZGVzdGluYXRpb24sIG9wdGlvbnMpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICB1cmwsXG4gICAgICAgIGFkZExvY2FsZShhcywgb3B0aW9ucy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSksXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGxldCBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIGxldCBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZFxuICAgICAgY29uc3Qgc3NnNDA0ID0gZXJyLm1lc3NhZ2UgPT09IFNTR19EQVRBX05PVF9GT1VORF9FUlJPUlxuXG4gICAgICBpZiAoc3NnNDA0KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbGV0IG1vZDogYW55XG4gICAgICAgICAgOyh7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMsIG1vZCB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAgICcvNDA0J1xuICAgICAgICAgICkpXG5cbiAgICAgICAgICAvLyBUT0RPOiBzaG91bGQgd2UgdG9sZXJhdGUgdGhlc2UgcHJvcHMgbWlzc2luZyBhbmQgc3RpbGwgcmVuZGVyIHRoZVxuICAgICAgICAgIC8vIHBhZ2UgaW5zdGVhZCBvZiBmYWxsaW5nIGJhY2sgdG8gX2Vycm9yP1xuICAgICAgICAgIGlmIChtb2QgJiYgbW9kLl9fTl9TU0cpIHtcbiAgICAgICAgICAgIHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0U3RhdGljRGF0YShcbiAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCcvNDA0JywgJy80MDQnLCB0cnVlLCB0aGlzLmxvY2FsZSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKF9lcnIpIHtcbiAgICAgICAgICAvLyBub24tZmF0YWwgZmFsbGJhY2sgdG8gX2Vycm9yXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgQ29tcG9uZW50ISA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgdHlwZW9mIHN0eWxlU2hlZXRzISA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICkge1xuICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAnL19lcnJvcidcbiAgICAgICAgKSlcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBwcm9wcyxcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyOiBzc2c0MDQgPyB1bmRlZmluZWQgOiBlcnIsXG4gICAgICAgIGVycm9yOiBzc2c0MDQgPyB1bmRlZmluZWQgOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIH0gYXMgYW55KVxuICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gY2FjaGVkUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgZGVsQmFzZVBhdGgoYXMpLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8UHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSwgYXBwbHlCYXNlUGF0aCA9IHRydWUpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgZGVub3JtYWxpemVQYWdlUGF0aChhcHBseUJhc2VQYXRoID8gZGVsQmFzZVBhdGgocGF0aG5hbWUhKSA6IHBhdGhuYW1lISlcbiAgICApXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYXBwbHlCYXNlUGF0aCA/IGFkZEJhc2VQYXRoKHBhZ2UpIDogcGFnZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgY29uc3Qgbm9ybWFsaXplTG9jYWxlUGF0aCA9IHJlcXVpcmUoJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJylcbiAgICAgICAgLm5vcm1hbGl6ZUxvY2FsZVBhdGggYXMgdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnKS5ub3JtYWxpemVMb2NhbGVQYXRoXG5cbiAgICAgIGlmIChvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBub3JtYWxpemVMb2NhbGVQYXRoIShwYXRobmFtZSwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZVxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG5cbiAgICAgICAgbGV0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpXG4gICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoIShcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWVcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IG9wdGlvbnMubG9jYWxlXG4gICAgICAgIGFzUGF0aCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKFxuICAgICAgICB1cmwsXG4gICAgICAgIGFzUGF0aCxcbiAgICAgICAgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubG9jYWxlIDogdGhpcy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gZXNjYXBlIGRlbGltaXRlcnMgdXNlZCBieSBwYXRoLXRvLXJlZ2V4cFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXNjYXBlUGF0aERlbGltaXRlcnMoc2VnbWVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNlZ21lbnQucmVwbGFjZSgvWy8jP10vZywgKGNoYXI6IHN0cmluZykgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGNoYXIpKVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiAnLycsXG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihtYXRjaGVyUmVnZXgsIGtleXMpXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuLFxuICBiYXNlUGF0aDogc3RyaW5nXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIC8vIGNsb25lIHF1ZXJ5IHNvIHdlIGRvbid0IG1vZGlmeSB0aGUgb3JpZ2luYWxcbiAgcXVlcnkgPSBPYmplY3QuYXNzaWduKHt9LCBxdWVyeSlcbiAgZGVsZXRlIHF1ZXJ5Ll9fbmV4dExvY2FsZVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWBcbiAgICAgIGNvbnN0IHF1ZXJ5Q29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZSh2YWx1ZSwgeyB2YWxpZGF0ZTogZmFsc2UgfSlcbiAgICAgIHZhbHVlID0gcXVlcnlDb21waWxlcihwYXJhbXMpLnN1YnN0cigxKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGNvbnN0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZGVzdGluYXRpb25Db21waWxlcihcbiAgICAgIHBhcmFtc1xuICAgICl9YFxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5pbXBvcnQgeyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4uLy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goYXNQYXRoKSkpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGFzUGF0aClcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIEhlYWRFbnRyeSA9IFtzdHJpbmcsIHsgW2tleTogc3RyaW5nXTogYW55IH1dXG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBoZWFkOiBIZWFkRW50cnlbXVxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XHJcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xyXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XHJcbmltcG9ydCB7XHJcbiAgbmV3c1B1YmxpY0xhdGVzdCxcclxuICBuZXdzUHVibGljU2Vjb25kTGF0ZXN0LFxyXG4gIG5ld3NMaXN0UHVibGljTGltaXRGaXJzdFNlY3Rpb24sXHJcbiAgbmV3c0xpc3RQdWJsaWNMaW1pdFNlY29uZFNlY3Rpb24sXHJcbiAgbmV3c0xpc3RQdWJsaWNMaW1pdEZpbmFsU2VjdGlvbixcclxufSBmcm9tIFwiLi4vYWN0aW9ucy9uZXdzLmFjdGlvblwiO1xyXG5pbXBvcnQge1xyXG4gIHJldmlld1B1YmxpY0xhdGVzdCxcclxuICByZXZpZXdQdWJsaWNTZWNvbmRMYXRlc3QsXHJcbiAgcmV2aWV3UHVibGljRWlnaHRMYXRlc3QsXHJcbiAgcmV2aWV3TGlzdFB1YmxpY0hvbWVQYWdlLFxyXG4gIHJldmlld0xpc3RQdWJsaWNMaW1pdGVkU2VjdGlvbk9uZSxcclxuICByZXZpZXdMaXN0UHVibGljTGltaXRlZFNlY3Rpb25Ud28sXHJcbn0gZnJvbSBcIi4uL2FjdGlvbnMvcmV2aWV3LmFjdGlvblwiO1xyXG5pbXBvcnQgeyBtb2JpbGVMaXN0UHVibGljTmV3c1Jldmlld3MgfSBmcm9tIFwiLi4vYWN0aW9ucy9tb2JpbGUuYWN0aW9uXCI7XHJcbmltcG9ydCB7XHJcbiAgQVBJLFxyXG4gIERPTUFJTixcclxuICBBUFBfTkFNRSxcclxuICBGQl9BUFBfSUQsXHJcbiAgVFdJVFRFUl9BVVRIT1JfSEFORExFLFxyXG4gIFRXSVRURVJfUFVCTElTSEVSX0hBTkRMRSxcclxufSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IE1kUmF0ZVJldmlldyB9IGZyb20gXCJyZWFjdC1pY29ucy9tZFwiO1xyXG5pbXBvcnQgeyBGYU5ld3NwYXBlciB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5pbXBvcnQgeyBGaVNtYXJ0cGhvbmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmlcIjtcclxuaW1wb3J0IHJlbmRlckhUTUwgZnJvbSBcInJlYWN0LXJlbmRlci1odG1sXCI7XHJcbmltcG9ydCBzdHlsZXMgZnJvbSBcIi4uL3N0eWxlcy9ob21lUGFnZS5tb2R1bGUuY3NzXCI7XHJcbmltcG9ydCBMb2FkZXIgZnJvbSBcInJlYWN0LWxvYWRlci1zcGlubmVyXCI7XHJcblxyXG4vKipjb21wbGV0ZWR7IWhlYWR9ICovXHJcbmNvbnN0IEluZGV4ID0gKHtcclxuICBsYXRlc3ROZXdzLFxyXG4gIHNlY29uZExhdGVzdE5ld3MsXHJcbiAgbGF0ZXN0UmV2aWV3LFxyXG4gIHNlY29uZExhdGVzdFJldmlldyxcclxuICBlaWdodExhdGVzdFJldmlldyxcclxuICBuZXdzTGltaXRGaXJzdFNlY3Rpb24sXHJcbiAgbmV3c0xpbWl0U2Vjb25kU2VjdGlvbixcclxuICBuZXdzTGltaXRGaW5hbFNlY3Rpb24sXHJcbiAgbGltaXRlZFJldmlld3NTZWN0aW9uT25lLFxyXG4gIGxpbWl0ZWRSZXZpZXdzU2VjdGlvblR3byxcclxuICByZXZpZXdMaXN0TGF0ZXN0LFxyXG4gIG1vYmlsZUxpc3RMYXRlc3QsXHJcbn0pID0+IHtcclxuICBjb25zdCBoZWFkID0gKCkgPT4gKFxyXG4gICAgPEhlYWQ+XHJcbiAgICAgIDx0aXRsZT5QaG9uZSBzcGVjcywgTmV3cyBhbmQgUmV2aWV3cyBodWIgLSB7QVBQX05BTUV9PC90aXRsZT5cclxuICAgICAgPG1ldGFcclxuICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxyXG4gICAgICAgIGNvbnRlbnQ9e2BicmluZ3MgeW91IHRoZSBsYXRlc3QgdGVjaCBuZXdzLCBiZXN0IG1vYmlsZSByZXZpZXdzIGFuZCBtb2JpbGUgc3BlY3MgdG8gbWFrZSB5b3VyIGNob2ljZXMgbXVjaCBlYXNpZXIgLSAke0FQUF9OQU1FfSBgfVxyXG4gICAgICAvPlxyXG4gICAgICA8bGluayByZWw9XCJjYW5vbmljYWxcIiBocmVmPXtgJHtET01BSU59L2B9IC8+XHJcbiAgICAgIHsvKiBUd2l0dGVyIENhcmQgZGF0YSAgKi99XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOmNhcmRcIiBjb250ZW50PVwic3VtbWFyeVwiIC8+XHJcbiAgICAgIDxtZXRhIG5hbWU9XCJ0d2l0dGVyOnNpdGVcIiBjb250ZW50PXtgQCR7VFdJVFRFUl9QVUJMSVNIRVJfSEFORExFfWB9IC8+XHJcbiAgICAgIDxtZXRhXHJcbiAgICAgICAgbmFtZT1cInR3aXR0ZXI6dGl0bGVcIlxyXG4gICAgICAgIGNvbnRlbnQ9e2BQaG9uZSBzcGVjcywgTmV3cyBhbmQgUmV2aWV3cyBodWIgLSAke0FQUF9OQU1FfWB9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxtZXRhXHJcbiAgICAgICAgbmFtZT1cInR3aXR0ZXI6ZGVzY3JpcHRpb25cIlxyXG4gICAgICAgIGNvbnRlbnQ9e2BicmluZ3MgeW91IHRoZSBsYXRlc3QgdGVjaCBuZXdzLCBiZXN0IG1vYmlsZSByZXZpZXdzIGFuZCBtb2JpbGUgc3BlY3MgdG8gbWFrZSB5b3VyIGNob2ljZXMgbXVjaCBlYXNpZXIgLSAke0FQUF9OQU1FfSBgfVxyXG4gICAgICAvPlxyXG4gICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjpjcmVhdG9yXCIgY29udGVudD17YEAke1RXSVRURVJfQVVUSE9SX0hBTkRMRX1gfSAvPlxyXG4gICAgICB7LyogVHdpdHRlciBTdW1tYXJ5IGNhcmQgaW1hZ2VzIG11c3QgYmUgYXQgbGVhc3QgMTIweDEyMHB4ICovfVxyXG4gICAgICA8bWV0YVxyXG4gICAgICAgIG5hbWU9XCJ0d2l0dGVyOmltYWdlXCJcclxuICAgICAgICBjb250ZW50PXtgJHtET01BSU59L3N0YXRpYy9pbWFnZXMvbG9nb19mb3JfdHdpdHRlci5wbmdgfVxyXG4gICAgICAvPlxyXG4gICAgICA8bWV0YSBuYW1lPVwidHdpdHRlcjppbWFnZTphbHRcIiBjb250ZW50PXtgJHtET01BSU59YH0gLz5cclxuXHJcbiAgICAgIHsvKiBPcGVuIEdyYXBoIGRhdGEgICovfVxyXG4gICAgICA8bWV0YVxyXG4gICAgICAgIHByb3BlcnR5PVwib2c6dGl0bGVcIlxyXG4gICAgICAgIGNvbnRlbnQ9e2BQaG9uZSBzcGVjcywgTmV3cyBhbmQgUmV2aWV3cyBodWIgLSAke0FQUF9OQU1FfWB9XHJcbiAgICAgIC8+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXtgJHtET01BSU59L2B9IC8+XHJcbiAgICAgIDxtZXRhXHJcbiAgICAgICAgYWx0PXtgJHtET01BSU59YH1cclxuICAgICAgICBwcm9wZXJ0eT1cIm9nOmltYWdlXCJcclxuICAgICAgICBjb250ZW50PXtgJHtET01BSU59L3N0YXRpYy9pbWFnZXMvcmVzaXplLW9nLWxvZ28ucG5nYH1cclxuICAgICAgLz5cclxuICAgICAgPG1ldGFcclxuICAgICAgICBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCJcclxuICAgICAgICBjb250ZW50PXtgYnJpbmdzIHlvdSB0aGUgbGF0ZXN0IHRlY2ggbmV3cywgYmVzdCBtb2JpbGUgcmV2aWV3cyBhbmQgbW9iaWxlIHNwZWNzIHRvIG1ha2UgeW91ciBjaG9pY2VzIG11Y2ggZWFzaWVyIC0gJHtBUFBfTkFNRX0gYH1cclxuICAgICAgLz5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpzaXRlX25hbWVcIiBjb250ZW50PXtBUFBfTkFNRX0gLz5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZTp0eXBlXCIgY29udGVudD1cImltYWdlL3BuZ1wiIC8+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwiZmI6YXBwX2lkXCIgY29udGVudD17YCR7RkJfQVBQX0lEfWB9IC8+XHJcbiAgICA8L0hlYWQ+XHJcbiAgKTtcclxuXHJcbiAgLyoqdGhpcyBmdW5jdGlvbiBleGVjdXRlcyBtYWluIHRvcCBmZWF0dXJpbmcgY29udGVudHMgLSBmb3IgbGFyZ2Ugc2NyZWVuIDEyMDBweCovXHJcbiAgY29uc3Qgc2hvd0hpZ2hsaWdodCA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIC8qKm1haW4gbGFyZ2Ugc2NyZWVuIGRpdiBzdGFydHMgaGVyZSAqL1xyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMiBwbC0wIHByLTAgbXQtNFwiIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJyb3cgbWwtMCBtci0wXCJcclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjUwMHB4XCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7LyoqbGVmdHNpZGUgYmFubmVyICovfVxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtbWQtNiBwbC0wIHByLTBcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCI1MDBweFwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvbmV3cy8ke2xhdGVzdE5ld3Muc2x1Z31gfT5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvbnRhaW5lcl9jb21tb259ICR7c3R5bGVzLmNvbnRhaW5lcl9sZWZ0fWB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3ZlcmxheX0+PC9kaXY+XHJcblxyXG4gICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW1nX3dyYXBwZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtBUEl9L25ld3MvcGhvdG8vJHtsYXRlc3ROZXdzLnNsdWd9YH1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9e2xhdGVzdE5ld3MudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubmV3c190aXRsZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPntsYXRlc3ROZXdzLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF1dGhvcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICBCeSB7bGF0ZXN0TmV3cy5wb3N0ZWRCeS51c2VybmFtZX0gfHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgIHttb21lbnQobGF0ZXN0TmV3cy51cGRhdGVkQXQpLmZyb21Ob3coKX1cclxuICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJsb2dfdHlwZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+TkVXUzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qKmVuZCBsZWZ0c2lkZSBiYW5uZXIgKi9cclxuICAgICAgICAgIC8qKnJpZ2h0IHNpZGUgYmFubmVyIGJsb2NrIGNvbnRhaW5lciovfVxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e2Bjb2wtbWQtNiBwbC0wIHByLTAgJHtzdHlsZXMuY29udGFpbmVyX3JpZ2h0fWB9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjUwMHB4XCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdyBtbC0wIG1yLTBcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjUwMHB4XCIgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIHsvKipyaWdoIHNpZGUgdG9wIGJhbm5lciovfVxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC1tZC0xMiBwbC0wIHByLTBcIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMjUwcHhcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvbmV3cy8ke3NlY29uZExhdGVzdE5ld3Muc2x1Z31gfT5cclxuICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb250YWluZXJfY29tbW9ufSAke3N0eWxlcy5jb250YWluZXJfcmlnaHRfdG9wfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vdmVybGF5fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW1nX3dyYXBwZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7QVBJfS9uZXdzL3Bob3RvLyR7c2Vjb25kTGF0ZXN0TmV3cy5zbHVnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17c2Vjb25kTGF0ZXN0TmV3cy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5uZXdzX3RpdGxlfSAke3N0eWxlcy5uZXdzX3RpdGxlX3JpZ2h0X3RvcH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+e3NlY29uZExhdGVzdE5ld3MudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdXRob3J9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBCeSB7c2Vjb25kTGF0ZXN0TmV3cy5wb3N0ZWRCeS51c2VybmFtZX0gfHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7bW9tZW50KHNlY29uZExhdGVzdE5ld3MudXBkYXRlZEF0KS5mcm9tTm93KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ibG9nX3R5cGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5ORVdTPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7LyoqZW5kIHJpZ2ggc2lkZSB0b3AgYmFubmVyKi9cclxuICAgICAgICAgICAgICAvKipyaWdoIHNpZGUgYm90dG9tIGJhbm5lciBibG9jayBjb250YWluZXIqL31cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bjb2wtbWQtMTIgcGwtMCBwci0wICR7c3R5bGVzLmNvbnRhaW5lcl9yaWdodF9ib3R0b219YH1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjI1MHB4XCIgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvdyBtbC0wIG1yLTBcIiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIHsvKipyaWdoIHNpZGUgYm90dG9tIGxlZnQgYmFubmVyKi99XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgcGwtMCBwci0wXCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcmV2aWV3cy8ke2xhdGVzdFJldmlldy5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb250YWluZXJfY29tbW9ufSAke3N0eWxlcy5jb250YWluZXJfcmlnaHRfYm90dG9tX2xlZnR9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3ZlcmxheX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW1nX3dyYXBwZXJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake0FQSX0vcmV2aWV3cy9waG90by8ke2xhdGVzdFJldmlldy5zbHVnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2xhdGVzdFJldmlldy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLm5ld3NfdGl0bGV9ICR7c3R5bGVzLm5ld3NfdGl0bGVfcmlnaHRfYm90dG9tX2xlZnR9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+e2xhdGVzdFJldmlldy50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXV0aG9yfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCeSB7bGF0ZXN0UmV2aWV3LnBvc3RlZEJ5LnVzZXJuYW1lfSB8e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bW9tZW50KGxhdGVzdFJldmlldy51cGRhdGVkQXQpLmZyb21Ob3coKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJsb2dfdHlwZX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5SRVZJRVc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIHsvKiplbmQgcmlnaCBzaWRlIGJvdHRvbSBsZWZ0IGJhbm5lciovXHJcbiAgICAgICAgICAgICAgICAgIC8qKnJpZ2ggc2lkZSBib3R0b20gcmlnaHQgYmFubmVyKi99XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgcGwtMCBwci0wXCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcmV2aWV3cy8ke3NlY29uZExhdGVzdFJldmlldy5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb250YWluZXJfY29tbW9ufSAke3N0eWxlcy5jb250YWluZXJfcmlnaHRfYm90dG9tX3JpZ2h0fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm92ZXJsYXl9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmltZ193cmFwcGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtBUEl9L3Jldmlld3MvcGhvdG8vJHtzZWNvbmRMYXRlc3RSZXZpZXcuc2x1Z31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtzZWNvbmRMYXRlc3RSZXZpZXcudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5uZXdzX3RpdGxlfSAke3N0eWxlcy5uZXdzX3RpdGxlX3JpZ2h0X2JvdHRvbV9yaWdodH1gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57c2Vjb25kTGF0ZXN0UmV2aWV3LnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdXRob3J9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEJ5IHtzZWNvbmRMYXRlc3RSZXZpZXcucG9zdGVkQnkudXNlcm5hbWV9IHx7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHttb21lbnQoc2Vjb25kTGF0ZXN0UmV2aWV3LnVwZGF0ZWRBdCkuZnJvbU5vdygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmxvZ190eXBlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlJFVklFVzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgey8qKmVuZCByaWdoIHNpZGUgYm90dG9tIHJpZ2h0IGJhbm5lciovfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgey8qKmVuZCByaWdoIHNpZGUgYm90dG9tIGJhbm5lciBibG9jayBjb250YWluZXIqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiplbmQgcmlnaHQgc2lkZSBiYW5uZXIgYmxvY2sgY29udGFpbmVyKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAvKiptYWluIGxhcmdlIHNjcmVlbiBkaXYgZW5kcyBoZXJlICovXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIC8qKnRoaXMgZnVuY3Rpb24gZXhlY3V0ZXMgbWFpbiB0b3AgZmVhdHVyaW5nIGNvbnRlbnRzIC0gZm9yIG1lZGl1bSBzY3JlZW4gMTAwMXB4Ki9cclxuICBjb25zdCBzaG93SGlnaGxpZ2h0TWVkaXVtU2NyZWVuID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgLyoqbWFpbiBtZWRpdW0gc2NyZWVuIGRpdiBzdGFydHMgaGVyZSAqL1xyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMiBwbC0wIHByLTAgbXQtNFwiIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJyb3cgbWwtMCBtci0wXCJcclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjUwMHB4XCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7LyoqbGVmdHNpZGUgYmFubmVyICovfVxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtbWQtNiBwbC0wIHByLTBcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCI1MDBweFwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvbmV3cy8ke2xhdGVzdE5ld3Muc2x1Z31gfT5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvbnRhaW5lcl9jb21tb259ICR7c3R5bGVzLmNvbnRhaW5lcl9sZWZ0fWB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3ZlcmxheX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbWdfd3JhcHBlcn1cclxuICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake0FQSX0vbmV3cy9waG90by8ke2xhdGVzdE5ld3Muc2x1Z31gfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD17bGF0ZXN0TmV3cy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uZXdzX3RpdGxlfT5cclxuICAgICAgICAgICAgICAgICAgICA8aDE+e2xhdGVzdE5ld3MudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXV0aG9yfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIEJ5IHtsYXRlc3ROZXdzLnBvc3RlZEJ5LnVzZXJuYW1lfSB8e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAge21vbWVudChsYXRlc3ROZXdzLnVwZGF0ZWRBdCkuZnJvbU5vdygpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmxvZ190eXBlfT5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5ORVdTPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyoqbGVmdHNpZGUgYmFubmVyIGVuZHMgaGVyZSovfVxyXG4gICAgICAgICAgey8qKnJpZ2h0c2lkZSBiYW5uZXIgYmxvY2sgY29udGFpbmVyKi99XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC1tZC02IHBsLTAgcHItMFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjUwMHB4XCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvdyBtbC0wIG1yLTBcIlxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjUwMHB4XCIgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YGNvbC1tZC0xMiBwbC0wIHByLTAgJHtzdHlsZXMuY29udGFpbmVyX3JpZ2h0X21lZGl1bV9zY3JlZW59YH1cclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjQyMHB4XCIgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7LyoqcmlnaHRzaWRlIGJhbm5lciAgdG9wIGRpdiovfVxyXG4gICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb250YWluZXJfY29tbW9ufSAke3N0eWxlcy5jb250YWluZXJfcmlnaHRfdG9wX21lZGl1bV9zY3JlZW59YH1cclxuICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9uZXdzLyR7c2Vjb25kTGF0ZXN0TmV3cy5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMub3ZlcmxheX0+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmltZ193cmFwcGVyfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake0FQSX0vbmV3cy9waG90by8ke3NlY29uZExhdGVzdE5ld3Muc2x1Z31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e3NlY29uZExhdGVzdE5ld3MudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5uZXdzX3RpdGxlfSAke3N0eWxlcy5uZXdzX3RpdGxlX3JpZ2h0X3RvcF9tZWRpdW1fc2NyZWVufWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57c2Vjb25kTGF0ZXN0TmV3cy50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF1dGhvcn0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBCeSB7c2Vjb25kTGF0ZXN0TmV3cy5wb3N0ZWRCeS51c2VybmFtZX0gfHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7bW9tZW50KHNlY29uZExhdGVzdE5ld3MudXBkYXRlZEF0KS5mcm9tTm93KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ibG9nX3R5cGV9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5ORVdTPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKipyaWdodHNpZGUgYmFubmVyICB0b3AgZGl2IGVuZHMgaGVyZSovXHJcbiAgICAgICAgICAgICAgICAvKipyaWdodHNpZGUgYmFubmVyICBib3R0b20gZGl2IHN0c3J0cyBoZXJlKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmNvbnRhaW5lcl9jb21tb259ICR7c3R5bGVzLmNvbnRhaW5lcl9yaWdodF9ib3R0b21fbWVkaXVtX3NjcmVlbn1gfVxyXG4gICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Jldmlld3MvJHtsYXRlc3RSZXZpZXcuc2x1Z31gfT5cclxuICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm92ZXJsYXl9PjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5pbWdfd3JhcHBlcn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtBUEl9L3Jldmlld3MvcGhvdG8vJHtsYXRlc3RSZXZpZXcuc2x1Z31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhbHQ9e2xhdGVzdFJldmlldy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLm5ld3NfdGl0bGV9ICR7c3R5bGVzLm5ld3NfdGl0bGVfcmlnaHRfYm90dG9tX21lZGl1bV9zY3JlZW59YH1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPntsYXRlc3RSZXZpZXcudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdXRob3J9PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBCeSB7bGF0ZXN0UmV2aWV3LnBvc3RlZEJ5LnVzZXJuYW1lfSB8e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHttb21lbnQobGF0ZXN0UmV2aWV3LnVwZGF0ZWRBdCkuZnJvbU5vdygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYmxvZ190eXBlfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+UkVWSUVXPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKipyaWdodHNpZGUgYmFubmVyICBib3R0b20gZGl2IGVuZHMgaGVyZSovfVxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qKnJpZ2h0c2lkZSBiYW5uZXIgYmxvY2sgY29udGFpbmVyKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAvKiptYWluIG1lZGl1bSBzY3JlZW4gZGl2IGVuZHMgaGVyZSAqL1xyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICAvKip0aGlzIGZ1bmN0aW9uIGV4ZWN1dGVzIG1haW4gdG9wIGZlYXR1cmluZyBjb250ZW50cyAtIGZvciBzbWFsbCBzY3JlZW4gNzY3cHgqL1xyXG4gIGNvbnN0IHNtYWxsU2NyZWVuSGlnaGxpZ2h0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgLyoqbWFpbiBzbWFsbCBzY3JlZW4gZGl2IHN0YXJ0cyBoZXJlICovXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29sLW1kLTEyIG10LTQgJHtzdHlsZXMuc21hbGxfc2NyZWVuX2Jsb2NrfWB9PlxyXG4gICAgICAgIHsvKipzbWFsbCBzY3JlZW4gY2FyZCAqL31cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnNtYWxsX3NjcmVlbl9jb250YWluZXJ9PlxyXG4gICAgICAgICAgPExpbmsgaHJlZj17YC9yZXZpZXdzLyR7bGF0ZXN0UmV2aWV3LnNsdWd9YH0+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vdmVybGF5fT48L2Rpdj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zbWFsbF9zY3JlZW5faW1nX3dyYXBwZXJ9XHJcbiAgICAgICAgICAgICAgICBzcmM9e2Ake0FQSX0vcmV2aWV3cy9waG90by8ke2xhdGVzdFJldmlldy5zbHVnfWB9XHJcbiAgICAgICAgICAgICAgICBhbHQ9e2xhdGVzdFJldmlldy50aXRsZX1cclxuICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLm5ld3NfdGl0bGV9ICR7c3R5bGVzLm5ld3NfdGl0bGVfc21hbGxfc2NyZWVufWB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGgxPntsYXRlc3RSZXZpZXcudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF1dGhvcn0+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgQnkge2xhdGVzdFJldmlldy5wb3N0ZWRCeS51c2VybmFtZX0gfHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAge21vbWVudChsYXRlc3RSZXZpZXcudXBkYXRlZEF0KS5mcm9tTm93KCl9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ibG9nX3R5cGV9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+UkVWSUVXPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qKnNtYWxsIHNjcmVlbiBjYXJkICovXHJcbiAgICAgICAgLyoqZW5kcyBoZXJlICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc21hbGxfc2NyZWVuX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtgL25ld3MvJHtsYXRlc3ROZXdzLnNsdWd9YH0+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vdmVybGF5fT48L2Rpdj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5zbWFsbF9zY3JlZW5faW1nX3dyYXBwZXJ9XHJcbiAgICAgICAgICAgICAgICBzcmM9e2Ake0FQSX0vbmV3cy9waG90by8ke2xhdGVzdE5ld3Muc2x1Z31gfVxyXG4gICAgICAgICAgICAgICAgYWx0PXtsYXRlc3ROZXdzLnRpdGxlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMubmV3c190aXRsZX0gJHtzdHlsZXMubmV3c190aXRsZV9zbWFsbF9zY3JlZW59YH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aDE+e2xhdGVzdE5ld3MudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF1dGhvcn0+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgQnkge2xhdGVzdE5ld3MucG9zdGVkQnkudXNlcm5hbWV9IHx7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIHttb21lbnQobGF0ZXN0TmV3cy51cGRhdGVkQXQpLmZyb21Ob3coKX1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJsb2dfdHlwZX0+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5ORVdTPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qKnNtYWxsIHNjcmVlbiBjYXJkICovXHJcbiAgICAgICAgLyoqZW5kcyBoZXJlICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc21hbGxfc2NyZWVuX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtgL3Jldmlld3MvJHtzZWNvbmRMYXRlc3RSZXZpZXcuc2x1Z31gfT5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm92ZXJsYXl9PjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNtYWxsX3NjcmVlbl9pbWdfd3JhcHBlcn1cclxuICAgICAgICAgICAgICAgIHNyYz17YCR7QVBJfS9yZXZpZXdzL3Bob3RvLyR7c2Vjb25kTGF0ZXN0UmV2aWV3LnNsdWd9YH1cclxuICAgICAgICAgICAgICAgIGFsdD17c2Vjb25kTGF0ZXN0UmV2aWV3LnRpdGxlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgJHtzdHlsZXMubmV3c190aXRsZX0gJHtzdHlsZXMubmV3c190aXRsZV9zbWFsbF9zY3JlZW59YH1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8aDE+e3NlY29uZExhdGVzdFJldmlldy50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXV0aG9yfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICBCeSB7c2Vjb25kTGF0ZXN0UmV2aWV3LnBvc3RlZEJ5LnVzZXJuYW1lfSB8e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICB7bW9tZW50KHNlY29uZExhdGVzdFJldmlldy51cGRhdGVkQXQpLmZyb21Ob3coKX1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmJsb2dfdHlwZX0+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5SRVZJRVc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7Lyoqc21hbGwgc2NyZWVuIGNhcmQgKi9cclxuICAgICAgICAvKiplbmRzIGhlcmUgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5zbWFsbF9zY3JlZW5fY29udGFpbmVyfT5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvbmV3cy8ke3NlY29uZExhdGVzdE5ld3Muc2x1Z31gfT5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLm92ZXJsYXl9PjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLnNtYWxsX3NjcmVlbl9pbWdfd3JhcHBlcn1cclxuICAgICAgICAgICAgICAgIHNyYz17YCR7QVBJfS9uZXdzL3Bob3RvLyR7c2Vjb25kTGF0ZXN0TmV3cy5zbHVnfWB9XHJcbiAgICAgICAgICAgICAgICBhbHQ9e3NlY29uZExhdGVzdE5ld3MudGl0bGV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2Ake3N0eWxlcy5uZXdzX3RpdGxlfSAke3N0eWxlcy5uZXdzX3RpdGxlX3NtYWxsX3NjcmVlbn1gfVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxoMT57c2Vjb25kTGF0ZXN0TmV3cy50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXV0aG9yfT5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIEJ5IHtzZWNvbmRMYXRlc3ROZXdzLnBvc3RlZEJ5LnVzZXJuYW1lfSB8e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICB7bW9tZW50KHNlY29uZExhdGVzdE5ld3MudXBkYXRlZEF0KS5mcm9tTm93KCl9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ibG9nX3R5cGV9PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+TkVXUzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsvKiplbmRzIGhlcmUgKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAvKiptYWluIHNtYWxsIHNjcmVlbiBkaXYgZW5kcyBoZXJlICovXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIC8qKmxvYWQgbW9yZSBmdW5jdGlvbnMgKi9cclxuICBjb25zdCBuZXdzTGltaXQgPSAxMDtcclxuICBjb25zdCBuZXdzU2tpcCA9IDI3O1xyXG4gIGNvbnN0IFtsaW1pdCwgc2V0TGltaXRdID0gdXNlU3RhdGUobmV3c0xpbWl0KTtcclxuICBjb25zdCBbc2tpcCwgc2V0U2tpcF0gPSB1c2VTdGF0ZShuZXdzU2tpcCk7XHJcbiAgY29uc3QgW25ld3NTaXplLCBzZXROZXdzU2l6ZV0gPSB1c2VTdGF0ZShuZXdzTGltaXRGaW5hbFNlY3Rpb24ubGVuZ3RoKTtcclxuICBjb25zdCBbbG9hZGVkTmV3cywgc2V0TG9hZGVkTmV3c10gPSB1c2VTdGF0ZShbXSk7XHJcblxyXG4gIGNvbnN0IGxvYWRNb3JlID0gKCkgPT4ge1xyXG4gICAgbGV0IHRvU2tpcCA9IHNraXAgKyBsaW1pdDtcclxuICAgIG5ld3NMaXN0UHVibGljTGltaXRGaW5hbFNlY3Rpb24oc2tpcCwgbGltaXQpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmVycm9yKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICBzZXRMb2FkZWROZXdzKFsuLi5sb2FkZWROZXdzLCAuLi5kYXRhXSk7XHJcbiAgICAgICAgc2V0TmV3c1NpemUoZGF0YS5sZW5ndGgpO1xyXG4gICAgICAgIHNldFNraXAodG9Ta2lwKTtcclxuICAgICAgfVxyXG4gICAgfSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgbG9hZE1vcmVCdXR0b24gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiwgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgIHtuZXdzU2l6ZSA+IDAgJiYgbmV3c1NpemUgPj0gbGltaXQgJiYgKFxyXG4gICAgICAgICAgPGRpdiBvbkNsaWNrPXtsb2FkTW9yZX0gY2xhc3NOYW1lPXtzdHlsZXMubG9hZF9tb3JlX2J1dHRvbn0+XHJcbiAgICAgICAgICAgIExvYWQgbW9yZVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcbiAgLyoqZG9uZSAqL1xyXG4gIGNvbnN0IHNob3dOZXdzRmluYWxTZWN0aW9uTG9hZGVkTmV3cyA9ICgpID0+IHtcclxuICAgIHJldHVybiBsb2FkZWROZXdzLm1hcCgoYmxvZywgaSkgPT4gKFxyXG4gICAgICA8ZGl2IGtleT17aX0+XHJcbiAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT17c3R5bGVzLm5ld3NfX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX19uZXdzfT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9uZXdzLyR7YmxvZy5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgIDxhIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWcgaW1nLWZsdWlkXCJcclxuICAgICAgICAgICAgICAgICAgc3JjPXtgJHtBUEl9L25ld3MvcGhvdG8vJHtibG9nLnNsdWd9YH1cclxuICAgICAgICAgICAgICAgICAgYWx0PXtibG9nLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50X19uZXdzfVxyXG4gICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnRfX2Rpdn0+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9uZXdzLyR7YmxvZy5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiLCB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxoMT57YmxvZy50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXhjZXJwdF9kaXZ9PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvbmV3cy8ke2Jsb2cuc2x1Z31gfT5cclxuICAgICAgICAgICAgICAgIDxhIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICB7cmVuZGVySFRNTChibG9nLmV4Y2VycHQpfVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXV0aG9yX19kaXZ9PlxyXG4gICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAge21vbWVudChibG9nLnVwZGF0ZWRBdCkuZnJvbU5vdygpfSB8IGJ5IHtibG9nLnBvc3RlZEJ5LnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApKTtcclxuICB9O1xyXG4gIC8qKmxvYWQgbW9yZSBlbmRzIGhlcmUgKi9cclxuXHJcbiAgLyoqZG9uZSAqL1xyXG4gIGNvbnN0IHNob3dTaWRlQmFyUmV2aWV3cyA9ICgpID0+IHtcclxuICAgIHJldHVybiByZXZpZXdMaXN0TGF0ZXN0Lm1hcCgoYmxvZywgaSkgPT4gKFxyXG4gICAgICA8ZGl2IGtleT17aX0+XHJcbiAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT17c3R5bGVzLnJldmlld19jb250YWluZXJfbWlkZGxlfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfcmV2aWV3X21pZGRsZX0+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcmV2aWV3cy8ke2Jsb2cuc2x1Z31gfT5cclxuICAgICAgICAgICAgICA8YSBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsIHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nIGltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17YCR7QVBJfS9yZXZpZXdzL3Bob3RvLyR7YmxvZy5zbHVnfWB9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD17YmxvZy50aXRsZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudF9yZXZpZXdfbWlkZGxlfVxyXG4gICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnRfZGl2X3Jldmlld19taWRkbGV9PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcmV2aWV3cy8ke2Jsb2cuc2x1Z31gfT5cclxuICAgICAgICAgICAgICAgIDxhIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8aDE+e2Jsb2cudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdXRob3JfZGl2X3Jldmlld19taWRkbGV9PlxyXG4gICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAge21vbWVudChibG9nLnVwZGF0ZWRBdCkuZnJvbU5vdygpfSB8IGJ5IHtibG9nLnBvc3RlZEJ5LnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApKTtcclxuICB9O1xyXG5cclxuICAvKipkb25lICovXHJcbiAgY29uc3Qgc2hvd1NpZGVCYXJNb2JpbGVzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIG1vYmlsZUxpc3RMYXRlc3QubWFwKChtLCBpKSA9PiAoXHJcbiAgICAgIDxSZWFjdC5GcmFnbWVudCBrZXk9e2l9PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc2luZ2xlX19jYXJkX19waG9uZX0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNhcmRfX2ltYWdlX19jb250YWluZXJfX3Bob25lfT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9waG9uZXMvYnJhbmQvJHttLnNsdWd9YH0+XHJcbiAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICA8aW1nIHNyYz17YCR7QVBJfS9tb2JpbGUvcGhvdG8vJHttLnNsdWd9YH0gYWx0PXtgJHttLnRpdGxlfWB9IC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY2FyZF9fY29udGVudF9fcGhvbmV9PlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgL3Bob25lcy9icmFuZC8ke20uc2x1Z31gfT5cclxuICAgICAgICAgICAgICA8YT5cclxuICAgICAgICAgICAgICAgIDxoMT57bS50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICApKTtcclxuICB9O1xyXG5cclxuICAvKipkb25lICovXHJcbiAgY29uc3Qgc2hvd1Jldmlld0Jsb2NrID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTIgcGwtMCBwci0wIG10LTJcIiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicm93IG1sLTAgbXItMFwiXHJcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtgL3Jldmlld3MvJHtlaWdodExhdGVzdFJldmlldy5zbHVnfWB9PlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGFpbmVyX3Jldmlld19taWRkbGV9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5vdmVybGF5fT48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaW1nX3dyYXBwZXJ9XHJcbiAgICAgICAgICAgICAgICAgIHNyYz17YCR7QVBJfS9yZXZpZXdzL3Bob3RvLyR7ZWlnaHRMYXRlc3RSZXZpZXcuc2x1Z31gfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9e2VpZ2h0TGF0ZXN0UmV2aWV3LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMudGl0bGVfcmV2aWV3X21pZGRsZX0+XHJcbiAgICAgICAgICAgICAgICAgIDxoMT57ZWlnaHRMYXRlc3RSZXZpZXcudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdXRob3J9PlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgQnkge2VpZ2h0TGF0ZXN0UmV2aWV3LnBvc3RlZEJ5LnVzZXJuYW1lfSB8e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIHttb21lbnQoZWlnaHRMYXRlc3RSZXZpZXcudXBkYXRlZEF0KS5mcm9tTm93KCl9XHJcbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5ibG9nX3R5cGV9PlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj5SRVZJRVc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInJvdyBtbC0wIG1yLTAgbXQtM1wiXHJcbiAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02XCI+e3Nob3dSZXZpZXdzSW5zaWRlUmV2aWV3QmxvY2tMZWZ0KCl9PC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT17YGNvbC1tZC02ICR7c3R5bGVzLmRpc3BsYXlfbm9uZV9yZXZpZXdfbWlkZGxlX2JvdHRvbX1gfVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICB7c2hvd1Jldmlld3NJbnNpZGVSZXZpZXdCbG9ja1JpZ2h0KCl9XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIC8qKmRvbmUgKi9cclxuICBjb25zdCBzaG93UmV2aWV3c0luc2lkZVJldmlld0Jsb2NrTGVmdCA9ICgpID0+IHtcclxuICAgIHJldHVybiBsaW1pdGVkUmV2aWV3c1NlY3Rpb25PbmUubWFwKChibG9nLCBpKSA9PiAoXHJcbiAgICAgIDxkaXYga2V5PXtpfT5cclxuICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPXtzdHlsZXMucmV2aWV3X2NvbnRhaW5lcl9taWRkbGV9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9yZXZpZXdfbWlkZGxlfT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9yZXZpZXdzLyR7YmxvZy5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgIDxhIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWcgaW1nLWZsdWlkXCJcclxuICAgICAgICAgICAgICAgICAgc3JjPXtgJHtBUEl9L3Jldmlld3MvcGhvdG8vJHtibG9nLnNsdWd9YH1cclxuICAgICAgICAgICAgICAgICAgYWx0PXtibG9nLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50X3Jldmlld19taWRkbGV9XHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudF9kaXZfcmV2aWV3X21pZGRsZX0+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9yZXZpZXdzLyR7YmxvZy5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiLCB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxoMT57YmxvZy50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF1dGhvcl9kaXZfcmV2aWV3X21pZGRsZX0+XHJcbiAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICB7bW9tZW50KGJsb2cudXBkYXRlZEF0KS5mcm9tTm93KCl9IHwgYnkge2Jsb2cucG9zdGVkQnkudXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICkpO1xyXG4gIH07XHJcblxyXG4gIC8qKmRvbmUgKi9cclxuICBjb25zdCBzaG93UmV2aWV3c0luc2lkZVJldmlld0Jsb2NrUmlnaHQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gbGltaXRlZFJldmlld3NTZWN0aW9uVHdvLm1hcCgoYmxvZywgaSkgPT4gKFxyXG4gICAgICA8ZGl2IGtleT17aX0+XHJcbiAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT17c3R5bGVzLnJldmlld19jb250YWluZXJfbWlkZGxlfT5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaW1hZ2VfcmV2aWV3X21pZGRsZX0+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcmV2aWV3cy8ke2Jsb2cuc2x1Z31gfT5cclxuICAgICAgICAgICAgICA8YSBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsIHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nIGltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17YCR7QVBJfS9yZXZpZXdzL3Bob3RvLyR7YmxvZy5zbHVnfWB9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD17YmxvZy50aXRsZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudF9yZXZpZXdfbWlkZGxlfVxyXG4gICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnRfZGl2X3Jldmlld19taWRkbGV9PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcmV2aWV3cy8ke2Jsb2cuc2x1Z31gfT5cclxuICAgICAgICAgICAgICAgIDxhIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8aDE+e2Jsb2cudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hdXRob3JfZGl2X3Jldmlld19taWRkbGV9PlxyXG4gICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAge21vbWVudChibG9nLnVwZGF0ZWRBdCkuZnJvbU5vdygpfSB8IGJ5IHtibG9nLnBvc3RlZEJ5LnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApKTtcclxuICB9O1xyXG5cclxuICAvKipkb25lICovXHJcbiAgY29uc3Qgc2hvd05ld3NGaXJzdFNlY3Rpb24gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3c0xpbWl0Rmlyc3RTZWN0aW9uLm1hcCgoYmxvZywgaSkgPT4gKFxyXG4gICAgICA8ZGl2IGtleT17aX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5uZXdzX19jb250YWluZXJ9PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5pbWFnZV9fbmV3c30+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvbmV3cy8ke2Jsb2cuc2x1Z31gfT5cclxuICAgICAgICAgICAgICA8YSBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsIHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nIGltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17YCR7QVBJfS9uZXdzL3Bob3RvLyR7YmxvZy5zbHVnfWB9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD17YmxvZy50aXRsZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuY29udGVudF9fbmV3c31cclxuICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50X19kaXZ9PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvbmV3cy8ke2Jsb2cuc2x1Z31gfT5cclxuICAgICAgICAgICAgICAgIDxhIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8aDE+e2Jsb2cudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmV4Y2VycHRfZGl2fT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL25ld3MvJHtibG9nLnNsdWd9YH0+XHJcbiAgICAgICAgICAgICAgICA8YSBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsIHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAge3JlbmRlckhUTUwoYmxvZy5leGNlcnB0KX1cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmF1dGhvcl9fZGl2fT5cclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIHttb21lbnQoYmxvZy51cGRhdGVkQXQpLmZyb21Ob3coKX0gfCBieSB7YmxvZy5wb3N0ZWRCeS51c2VybmFtZX1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSk7XHJcbiAgfTtcclxuXHJcbiAgLyoqZG9uZSAqL1xyXG4gIGNvbnN0IHNob3dOZXdzU2Vjb25kU2VjdGlvbiA9ICgpID0+IHtcclxuICAgIHJldHVybiBuZXdzTGltaXRTZWNvbmRTZWN0aW9uLm1hcCgoYmxvZywgaSkgPT4gKFxyXG4gICAgICA8ZGl2IGtleT17aX0+XHJcbiAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT17c3R5bGVzLm5ld3NfX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX19uZXdzfT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9uZXdzLyR7YmxvZy5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgIDxhIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWcgaW1nLWZsdWlkXCJcclxuICAgICAgICAgICAgICAgICAgc3JjPXtgJHtBUEl9L25ld3MvcGhvdG8vJHtibG9nLnNsdWd9YH1cclxuICAgICAgICAgICAgICAgICAgYWx0PXtibG9nLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50X19uZXdzfVxyXG4gICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnRfX2Rpdn0+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9uZXdzLyR7YmxvZy5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiLCB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxoMT57YmxvZy50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXhjZXJwdF9kaXZ9PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvbmV3cy8ke2Jsb2cuc2x1Z31gfT5cclxuICAgICAgICAgICAgICAgIDxhIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICB7cmVuZGVySFRNTChibG9nLmV4Y2VycHQpfVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXV0aG9yX19kaXZ9PlxyXG4gICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAge21vbWVudChibG9nLnVwZGF0ZWRBdCkuZnJvbU5vdygpfSB8IGJ5IHtibG9nLnBvc3RlZEJ5LnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApKTtcclxuICB9O1xyXG5cclxuICAvKipkb25lICovXHJcbiAgY29uc3Qgc2hvd05ld3NGaW5hbFNlY3Rpb24gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3c0xpbWl0RmluYWxTZWN0aW9uLm1hcCgoYmxvZywgaSkgPT4gKFxyXG4gICAgICA8ZGl2IGtleT17aX0+XHJcbiAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT17c3R5bGVzLm5ld3NfX2NvbnRhaW5lcn0+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmltYWdlX19uZXdzfT5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9uZXdzLyR7YmxvZy5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgIDxhIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWcgaW1nLWZsdWlkXCJcclxuICAgICAgICAgICAgICAgICAgc3JjPXtgJHtBUEl9L25ld3MvcGhvdG8vJHtibG9nLnNsdWd9YH1cclxuICAgICAgICAgICAgICAgICAgYWx0PXtibG9nLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5jb250ZW50X19uZXdzfVxyXG4gICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmNvbnRlbnRfX2Rpdn0+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9uZXdzLyR7YmxvZy5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiLCB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxoMT57YmxvZy50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuZXhjZXJwdF9kaXZ9PlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvbmV3cy8ke2Jsb2cuc2x1Z31gfT5cclxuICAgICAgICAgICAgICAgIDxhIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICB7cmVuZGVySFRNTChibG9nLmV4Y2VycHQpfVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYXV0aG9yX19kaXZ9PlxyXG4gICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAge21vbWVudChibG9nLnVwZGF0ZWRBdCkuZnJvbU5vdygpfSB8IGJ5IHtibG9nLnBvc3RlZEJ5LnVzZXJuYW1lfVxyXG4gICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICB7bGF0ZXN0TmV3cyAmJlxyXG4gICAgICBzZWNvbmRMYXRlc3ROZXdzICYmXHJcbiAgICAgIGxhdGVzdFJldmlldyAmJlxyXG4gICAgICBzZWNvbmRMYXRlc3RSZXZpZXcgJiZcclxuICAgICAgbW9iaWxlTGlzdExhdGVzdCA/IChcclxuICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICA8ZGl2PntoZWFkKCl9PC9kaXY+XHJcbiAgICAgICAgICB7bGF0ZXN0TmV3cy5sZW5ndGggIT09IDAgfHxcclxuICAgICAgICAgIGxhdGVzdFJldmlldy5sZW5ndGggIT09IDAgfHxcclxuICAgICAgICAgIHNlY29uZExhdGVzdFJldmlldyAhPT0gMCB8fFxyXG4gICAgICAgICAgc2Vjb25kTGF0ZXN0TmV3cyAhPT0gMCA/IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5sYXJnZV9zY3JlZW5fZmVhdHVyaW5nfT5cclxuICAgICAgICAgICAgICB7c2hvd0hpZ2hsaWdodCgpfVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAge2xhdGVzdE5ld3MubGVuZ3RoICE9PSAwIHx8XHJcbiAgICAgICAgICBsYXRlc3RSZXZpZXcubGVuZ3RoICE9PSAwIHx8XHJcbiAgICAgICAgICBzZWNvbmRMYXRlc3ROZXdzLmxlbmd0aCAhPT0gMCA/IChcclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5tZWRpdW1fc2NyZWVuX2ZlYXR1cmluZ30+XHJcbiAgICAgICAgICAgICAge3Nob3dIaWdobGlnaHRNZWRpdW1TY3JlZW4oKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgIHtsYXRlc3ROZXdzLmxlbmd0aCAhPT0gMCAmJlxyXG4gICAgICAgICAgbGF0ZXN0UmV2aWV3Lmxlbmd0aCAhPT0gMCAmJlxyXG4gICAgICAgICAgc2Vjb25kTGF0ZXN0UmV2aWV3Lmxlbmd0aCAhPT0gMCAmJlxyXG4gICAgICAgICAgc2Vjb25kTGF0ZXN0TmV3cy5sZW5ndGggIT09IDAgPyAoXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuc21hbGxfc2NyZWVuX2ZlYXR1cmluZ30+XHJcbiAgICAgICAgICAgICAge3NtYWxsU2NyZWVuSGlnaGxpZ2h0KCl9XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgXCJcIlxyXG4gICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lciBtdC00IG1iLTUgcGwtMCBwci0wXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1sLTAgbXItMFwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLThcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm93XCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6IFwiMHB4IDBweCAxcHggcmdiYSgwLDAsMCwwLjUpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93TmV3c0ZpcnN0U2VjdGlvbigpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7KGVpZ2h0TGF0ZXN0UmV2aWV3Lmxlbmd0aCAhPT0gMCAmJlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0ZWRSZXZpZXdzU2VjdGlvbk9uZS5sZW5ndGggIT09IDApIHx8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpbWl0ZWRSZXZpZXdzU2VjdGlvblR3by5sZW5ndGggIT09IDAgPyAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIyMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE1kUmF0ZVJldmlldyBzaXplPVwiMXJlbVwiIGNvbG9yPVwiIzUwNTA1MFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgcGFkZGluZ1RvcDogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCI2cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaHJUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jb250ZW50PVwicmV2aWV3c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93UmV2aWV3QmxvY2soKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiOHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8RmFOZXdzcGFwZXIgc2l6ZT1cIjFyZW1cIiBjb2xvcj1cIiM1MDUwNTBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBwYWRkaW5nVG9wOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCI2cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5oclRleHR9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY29udGVudD1cIm1vcmUgbmV3c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dOZXdzU2Vjb25kU2VjdGlvbigpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bmV3c0xpbWl0RmluYWxTZWN0aW9uID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZXMuZGlzcGxheV9ub25lX21vcmVfbmV3c19tYWluX2Jsb2NrXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dOZXdzRmluYWxTZWN0aW9uKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtsb2FkZWROZXdzID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNob3dOZXdzRmluYWxTZWN0aW9uTG9hZGVkTmV3cygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG9wOiBcIjUwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogXCI1MCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtaW5IZWlnaHQ6IFwiMTAwdmhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3RpZnlDb250ZW50OiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwiQmFyc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I9XCJyZ2JhKDIwMiwgMjgsIDI4LCAwLjk0NSlcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg9ezUwfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpbWVvdXQ9ezMwMDAwfSAvLzMgc2Vjc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2xvYWRNb3JlQnV0dG9uKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgY29sLWxnLTQgJHtzdHlsZXMuc2lkZV9fYmFyX19zaW5nbGVfX2JyYW5kX19tYWlufWB9XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAge21vYmlsZUxpc3RMYXRlc3QubGVuZ3RoICE9PSAwID8gKFxyXG4gICAgICAgICAgICAgICAgICA8UmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcm93IG1yLTAgJHtzdHlsZXMuc2lkZV9fYmFyX19zaW5nbGVfX2JyYW5kfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6IFwiMHB4IDBweCAxcHggcmdiYSgwLDAsMCwwLjUpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMjBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IFwiNXB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPEZpU21hcnRwaG9uZSBzaXplPVwiMXJlbVwiIGNvbG9yPVwiIzUwNTA1MFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgcGFkZGluZ1RvcDogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aHJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCI2cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaHJUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jb250ZW50PVwibGF0ZXN0IHBob25lc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMTJweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjEycHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YCR7c3R5bGVzLmNhcmRzX19waG9uZX0gJHtzdHlsZXMuYm94X19zaXppbmdfX3Bob25lfSAke3N0eWxlcy5zaWRlX19iYXJfX3Bob25lc31gfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dTaWRlQmFyTW9iaWxlcygpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiM3B4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiIzUwNTA1MFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogXCJyaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiNnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcGhvbmVzYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy52aWV3X2FsbH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPnZpZXcgYWxsPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPC9SZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAge3Jldmlld0xpc3RMYXRlc3QubGVuZ3RoICE9PSAwID8gKFxyXG4gICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17YHJvdyBtci0wIG10LTIgJHtzdHlsZXMuc2lkZV9fYmFyX19zaW5nbGVfX2JyYW5kfSAke3N0eWxlcy5kaXNwbGF5X25vbmVfc2lkZV9iYXJfcmV2aWV3fWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6IFwiMHB4IDBweCAxcHggcmdiYSgwLDAsMCwwLjUpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMjBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxNZFJhdGVSZXZpZXcgc2l6ZT1cIjFyZW1cIiBjb2xvcj1cIiM1MDUwNTBcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIHBhZGRpbmdUb3A6IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGhyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNnB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmhyVGV4dH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY29udGVudD1cImxhdGVzdCByZXZpZXdzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIxMnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IFwiMTJweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7c2hvd1NpZGVCYXJSZXZpZXdzKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjNweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiBcIiM1MDUwNTBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IFwicmlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjZweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Jldmlld3NgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8YSBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnZpZXdfYWxsfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+dmlldyBhbGw8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAge25ld3NMaW1pdEZpbmFsU2VjdGlvbi5sZW5ndGggIT09IDAgPyAoXHJcbiAgICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtgcm93IG1sLTAgbXItMCBtdC0yICR7c3R5bGVzLmRpc3BsYXlfbm9uZV9tb3JlX25ld3Nfc21hbGxfc2NyZWVufWB9XHJcbiAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLWxnLThcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInJvd1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJ3aGl0ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiBcIjBweCAwcHggMXB4IHJnYmEoMCwwLDAsMC41KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjhweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxGYU5ld3NwYXBlciBzaXplPVwiMXJlbVwiIGNvbG9yPVwiIzUwNTA1MFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgcGFkZGluZ1RvcDogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aHJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCI2cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuaHJUZXh0fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jb250ZW50PVwibW9yZSBuZXdzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3Nob3dOZXdzRmluYWxTZWN0aW9uKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bG9hZGVkTmV3cyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd05ld3NGaW5hbFNlY3Rpb25Mb2FkZWROZXdzKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0b3A6IFwiNTAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJvdHRvbTogXCI1MCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWluSGVpZ2h0OiBcIjEwMHZoXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcImF1dG9cIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMb2FkZXJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZT1cIkJhcnNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcj1cInJnYmEoMjAyLCAyOCwgMjgsIDAuOTQ1KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodD17NTB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoPXs1MH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGltZW91dD17MzAwMDB9IC8vMyBzZWNzXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPntsb2FkTW9yZUJ1dHRvbigpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICAgKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICkgOiAoXHJcbiAgICAgICAgPFJlYWN0LkZyYWdtZW50PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICB0b3A6IFwiNTAlXCIsXHJcbiAgICAgICAgICAgICAgYm90dG9tOiBcIjUwJVwiLFxyXG4gICAgICAgICAgICAgIG1pbkhlaWdodDogXCIxMDB2aFwiLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6IFwiY2VudGVyXCIsXHJcbiAgICAgICAgICAgICAgbWFyZ2luOiBcImF1dG9cIixcclxuICAgICAgICAgICAgICBwYWRkaW5nOiBcImF1dG9cIixcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPExvYWRlclxyXG4gICAgICAgICAgICAgIHR5cGU9XCJCYXJzXCJcclxuICAgICAgICAgICAgICBjb2xvcj1cInJnYmEoMjAyLCAyOCwgMjgsIDAuOTQ1KVwiXHJcbiAgICAgICAgICAgICAgaGVpZ2h0PXsxMDB9XHJcbiAgICAgICAgICAgICAgd2lkdGg9ezEwMH1cclxuICAgICAgICAgICAgICB0aW1lb3V0PXsxMDAwMH0gLy8zIHNlY3NcclxuICAgICAgICAgICAgLz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvUmVhY3QuRnJhZ21lbnQ+XHJcbiAgICAgICl9XHJcbiAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICk7XHJcbn07XHJcblxyXG4vLyBUaGlzIGFsc28gZ2V0cyBjYWxsZWQgYXQgYnVpbGQgdGltZVxyXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0U3RhdGljUHJvcHMoKSB7XHJcbiAgLyoqbmV3cyBhcGkgKi9cclxuICAvKipkb25lICovXHJcbiAgY29uc3QgbmV3c0xpbWl0Rmlyc3RTZWN0aW9uID0gYXdhaXQgbmV3c0xpc3RQdWJsaWNMaW1pdEZpcnN0U2VjdGlvbigpLnRoZW4oXHJcbiAgICAoZGF0YSkgPT4ge1xyXG4gICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEuZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgLyoqZG9uZSAqL1xyXG4gIGNvbnN0IG5ld3NMaW1pdFNlY29uZFNlY3Rpb24gPSBhd2FpdCBuZXdzTGlzdFB1YmxpY0xpbWl0U2Vjb25kU2VjdGlvbigpLnRoZW4oXHJcbiAgICAoZGF0YSkgPT4ge1xyXG4gICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEuZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgLyoqZG9uZSAqL1xyXG4gIGxldCBza2lwID0gMTc7XHJcbiAgbGV0IGxpbWl0ID0gMTA7XHJcblxyXG4gIGNvbnN0IG5ld3NMaW1pdEZpbmFsU2VjdGlvbiA9IGF3YWl0IG5ld3NMaXN0UHVibGljTGltaXRGaW5hbFNlY3Rpb24oXHJcbiAgICBza2lwLFxyXG4gICAgbGltaXRcclxuICApLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIGlmIChkYXRhLmVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEuZXJyb3IpO1xyXG4gICAgICByZXR1cm4gXCJcIjtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICAvKipkb25lICovXHJcbiAgY29uc3QgbGF0ZXN0TmV3cyA9IGF3YWl0IG5ld3NQdWJsaWNMYXRlc3QoKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhLmVycm9yKTtcclxuICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLyoqZG9uZSAqL1xyXG4gIGNvbnN0IHNlY29uZExhdGVzdE5ld3MgPSBhd2FpdCBuZXdzUHVibGljU2Vjb25kTGF0ZXN0KCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZGF0YS5lcnJvcik7XHJcbiAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8qKnJldmlldyBsaXN0IGxhdGVzIGFwaSAqL1xyXG4gIC8qKmRvbmUgKi9cclxuICBjb25zdCByZXZpZXdMaXN0TGF0ZXN0ID0gYXdhaXQgcmV2aWV3TGlzdFB1YmxpY0hvbWVQYWdlKCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZGF0YS5lcnJvcik7XHJcbiAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8qKm1vYmlsZSBsaXN0IGxhdGVzIGFwaSAqL1xyXG4gIC8qKmRvbmUgKi9cclxuICBjb25zdCBtb2JpbGVMaXN0TGF0ZXN0ID0gYXdhaXQgbW9iaWxlTGlzdFB1YmxpY05ld3NSZXZpZXdzKCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZGF0YS5lcnJvcik7XHJcbiAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8qKnJldmlldyBhcGkgKi9cclxuICAvKipkb25lICovXHJcbiAgY29uc3QgbGF0ZXN0UmV2aWV3ID0gYXdhaXQgcmV2aWV3UHVibGljTGF0ZXN0KCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZGF0YS5lcnJvcik7XHJcbiAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbiAgfSk7XHJcblxyXG4gIC8qKmRvbmUgKi9cclxuICBjb25zdCBzZWNvbmRMYXRlc3RSZXZpZXcgPSBhd2FpdCByZXZpZXdQdWJsaWNTZWNvbmRMYXRlc3QoKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhLmVycm9yKTtcclxuICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLyoqZG9uZSAqL1xyXG4gIGNvbnN0IGVpZ2h0TGF0ZXN0UmV2aWV3ID0gYXdhaXQgcmV2aWV3UHVibGljRWlnaHRMYXRlc3QoKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhLmVycm9yKTtcclxuICAgICAgcmV0dXJuIFwiXCI7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgLyoqZG9uZSAqL1xyXG4gIGNvbnN0IGxpbWl0ZWRSZXZpZXdzU2VjdGlvbk9uZSA9IGF3YWl0IHJldmlld0xpc3RQdWJsaWNMaW1pdGVkU2VjdGlvbk9uZSgpLnRoZW4oXHJcbiAgICAoZGF0YSkgPT4ge1xyXG4gICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEuZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgLyoqZG9uZSAqL1xyXG4gIGNvbnN0IGxpbWl0ZWRSZXZpZXdzU2VjdGlvblR3byA9IGF3YWl0IHJldmlld0xpc3RQdWJsaWNMaW1pdGVkU2VjdGlvblR3bygpLnRoZW4oXHJcbiAgICAoZGF0YSkgPT4ge1xyXG4gICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEuZXJyb3IpO1xyXG4gICAgICAgIHJldHVybiBcIlwiO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGxhdGVzdE5ld3MsXHJcbiAgICAgIHNlY29uZExhdGVzdE5ld3MsXHJcbiAgICAgIGxhdGVzdFJldmlldyxcclxuICAgICAgc2Vjb25kTGF0ZXN0UmV2aWV3LFxyXG4gICAgICBlaWdodExhdGVzdFJldmlldyxcclxuICAgICAgbmV3c0xpbWl0Rmlyc3RTZWN0aW9uLFxyXG4gICAgICBuZXdzTGltaXRTZWNvbmRTZWN0aW9uLFxyXG4gICAgICBuZXdzTGltaXRGaW5hbFNlY3Rpb24sXHJcbiAgICAgIGxpbWl0ZWRSZXZpZXdzU2VjdGlvbk9uZSxcclxuICAgICAgbGltaXRlZFJldmlld3NTZWN0aW9uVHdvLFxyXG4gICAgICByZXZpZXdMaXN0TGF0ZXN0LFxyXG4gICAgICBtb2JpbGVMaXN0TGF0ZXN0LFxyXG4gICAgfSxcclxuICAgIC8vIFJlLWdlbmVyYXRlIHRoZSBwb3N0IGF0IG1vc3Qgb25jZSBwZXIgc2Vjb25kXHJcbiAgICAvLyBpZiBhIHJlcXVlc3QgY29tZXMgaW5cclxuICAgIHJldmFsaWRhdGU6IDEsXHJcbiAgfTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgSW5kZXg7XHJcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lcl9jb21tb25cIjogXCJob21lUGFnZV9jb250YWluZXJfY29tbW9uX18yQkFoU1wiLFxuXHRcIm92ZXJsYXlcIjogXCJob21lUGFnZV9vdmVybGF5X19pa3pXZlwiLFxuXHRcImNvbnRhaW5lcl9sZWZ0XCI6IFwiaG9tZVBhZ2VfY29udGFpbmVyX2xlZnRfXzNJRHE3XCIsXG5cdFwiY29udGFpbmVyX3JpZ2h0XCI6IFwiaG9tZVBhZ2VfY29udGFpbmVyX3JpZ2h0X19HYTJzb1wiLFxuXHRcImNvbnRhaW5lcl9yaWdodF90b3BcIjogXCJob21lUGFnZV9jb250YWluZXJfcmlnaHRfdG9wX18xM25qM1wiLFxuXHRcImNvbnRhaW5lcl9yaWdodF9ib3R0b21cIjogXCJob21lUGFnZV9jb250YWluZXJfcmlnaHRfYm90dG9tX18xUjUwZlwiLFxuXHRcImNvbnRhaW5lcl9yaWdodF9ib3R0b21fbGVmdFwiOiBcImhvbWVQYWdlX2NvbnRhaW5lcl9yaWdodF9ib3R0b21fbGVmdF9fMXFyWS1cIixcblx0XCJjb250YWluZXJfcmlnaHRfYm90dG9tX3JpZ2h0XCI6IFwiaG9tZVBhZ2VfY29udGFpbmVyX3JpZ2h0X2JvdHRvbV9yaWdodF9fVEZVR3lcIixcblx0XCJpbWdfd3JhcHBlclwiOiBcImhvbWVQYWdlX2ltZ193cmFwcGVyX18zMXg3NFwiLFxuXHRcIm5ld3NfdGl0bGVcIjogXCJob21lUGFnZV9uZXdzX3RpdGxlX18zM3lxMFwiLFxuXHRcIm5ld3NfdGl0bGVfcmlnaHRfdG9wXCI6IFwiaG9tZVBhZ2VfbmV3c190aXRsZV9yaWdodF90b3BfXzNPX1J3XCIsXG5cdFwibmV3c190aXRsZV9yaWdodF9ib3R0b21fcmlnaHRcIjogXCJob21lUGFnZV9uZXdzX3RpdGxlX3JpZ2h0X2JvdHRvbV9yaWdodF9fMXZtaEhcIixcblx0XCJuZXdzX3RpdGxlX3JpZ2h0X2JvdHRvbV9sZWZ0XCI6IFwiaG9tZVBhZ2VfbmV3c190aXRsZV9yaWdodF9ib3R0b21fbGVmdF9fMVN3cVZcIixcblx0XCJibG9nX3R5cGVcIjogXCJob21lUGFnZV9ibG9nX3R5cGVfX1NqdkZhXCIsXG5cdFwiYXV0aG9yXCI6IFwiaG9tZVBhZ2VfYXV0aG9yX18zQ0s0elwiLFxuXHRcImNvbnRhaW5lcl9yaWdodF9tZWRpdW1fc2NyZWVuXCI6IFwiaG9tZVBhZ2VfY29udGFpbmVyX3JpZ2h0X21lZGl1bV9zY3JlZW5fX2JJWURaXCIsXG5cdFwiY29udGFpbmVyX3JpZ2h0X3RvcF9tZWRpdW1fc2NyZWVuXCI6IFwiaG9tZVBhZ2VfY29udGFpbmVyX3JpZ2h0X3RvcF9tZWRpdW1fc2NyZWVuX19DVXVDZFwiLFxuXHRcImNvbnRhaW5lcl9yaWdodF9ib3R0b21fbWVkaXVtX3NjcmVlblwiOiBcImhvbWVQYWdlX2NvbnRhaW5lcl9yaWdodF9ib3R0b21fbWVkaXVtX3NjcmVlbl9fMVNRNHdcIixcblx0XCJuZXdzX3RpdGxlX3JpZ2h0X2JvdHRvbV9tZWRpdW1fc2NyZWVuXCI6IFwiaG9tZVBhZ2VfbmV3c190aXRsZV9yaWdodF9ib3R0b21fbWVkaXVtX3NjcmVlbl9fR2xCZlZcIixcblx0XCJuZXdzX3RpdGxlX3JpZ2h0X3RvcF9tZWRpdW1fc2NyZWVuXCI6IFwiaG9tZVBhZ2VfbmV3c190aXRsZV9yaWdodF90b3BfbWVkaXVtX3NjcmVlbl9fV3V5aHNcIixcblx0XCJzbWFsbF9zY3JlZW5fYmxvY2tcIjogXCJob21lUGFnZV9zbWFsbF9zY3JlZW5fYmxvY2tfXzNRRy1LXCIsXG5cdFwic21hbGxfc2NyZWVuX2NvbnRhaW5lclwiOiBcImhvbWVQYWdlX3NtYWxsX3NjcmVlbl9jb250YWluZXJfXzM4M2VkXCIsXG5cdFwibmV3c190aXRsZV9zbWFsbF9zY3JlZW5cIjogXCJob21lUGFnZV9uZXdzX3RpdGxlX3NtYWxsX3NjcmVlbl9fS1JDRFBcIixcblx0XCJzbWFsbF9zY3JlZW5faW1nX3dyYXBwZXJcIjogXCJob21lUGFnZV9zbWFsbF9zY3JlZW5faW1nX3dyYXBwZXJfXzFCcF9kXCIsXG5cdFwibGFyZ2Vfc2NyZWVuX2ZlYXR1cmluZ1wiOiBcImhvbWVQYWdlX2xhcmdlX3NjcmVlbl9mZWF0dXJpbmdfX3dXaUJiXCIsXG5cdFwibWVkaXVtX3NjcmVlbl9mZWF0dXJpbmdcIjogXCJob21lUGFnZV9tZWRpdW1fc2NyZWVuX2ZlYXR1cmluZ19fMTd4UWRcIixcblx0XCJzbWFsbF9zY3JlZW5fZmVhdHVyaW5nXCI6IFwiaG9tZVBhZ2Vfc21hbGxfc2NyZWVuX2ZlYXR1cmluZ19fMW5CYXpcIixcblx0XCJjb250YWluZXJfcmV2aWV3X21pZGRsZVwiOiBcImhvbWVQYWdlX2NvbnRhaW5lcl9yZXZpZXdfbWlkZGxlX19IYWFielwiLFxuXHRcInRpdGxlX3Jldmlld19taWRkbGVcIjogXCJob21lUGFnZV90aXRsZV9yZXZpZXdfbWlkZGxlX18xVDhQU1wiLFxuXHRcInJldmlld19jb250YWluZXJfbWlkZGxlXCI6IFwiaG9tZVBhZ2VfcmV2aWV3X2NvbnRhaW5lcl9taWRkbGVfXzNUaV9pXCIsXG5cdFwiaW1hZ2VfcmV2aWV3X21pZGRsZVwiOiBcImhvbWVQYWdlX2ltYWdlX3Jldmlld19taWRkbGVfXzJ3X3ZlXCIsXG5cdFwiY29udGVudF9kaXZfcmV2aWV3X21pZGRsZVwiOiBcImhvbWVQYWdlX2NvbnRlbnRfZGl2X3Jldmlld19taWRkbGVfXzJhcmc0XCIsXG5cdFwiY29udGVudF9yZXZpZXdfbWlkZGxlXCI6IFwiaG9tZVBhZ2VfY29udGVudF9yZXZpZXdfbWlkZGxlX18xTWdSaFwiLFxuXHRcImF1dGhvcl9kaXZfcmV2aWV3X21pZGRsZVwiOiBcImhvbWVQYWdlX2F1dGhvcl9kaXZfcmV2aWV3X21pZGRsZV9fMnhwZ0dcIixcblx0XCJkaXNwbGF5X25vbmVfcmV2aWV3X21pZGRsZV9ib3R0b21cIjogXCJob21lUGFnZV9kaXNwbGF5X25vbmVfcmV2aWV3X21pZGRsZV9ib3R0b21fXzNPX1lNXCIsXG5cdFwibmV3c19fY29udGFpbmVyXCI6IFwiaG9tZVBhZ2VfbmV3c19fY29udGFpbmVyX18xSXFjWFwiLFxuXHRcImltYWdlX19uZXdzXCI6IFwiaG9tZVBhZ2VfaW1hZ2VfX25ld3NfXzNWRWxEXCIsXG5cdFwiY29udGVudF9fZGl2XCI6IFwiaG9tZVBhZ2VfY29udGVudF9fZGl2X18zMGtUSFwiLFxuXHRcImNvbnRlbnRfX25ld3NcIjogXCJob21lUGFnZV9jb250ZW50X19uZXdzX18yeHJiclwiLFxuXHRcImV4Y2VycHRfZGl2XCI6IFwiaG9tZVBhZ2VfZXhjZXJwdF9kaXZfX0xQTTA0XCIsXG5cdFwiYXV0aG9yX19kaXZcIjogXCJob21lUGFnZV9hdXRob3JfX2Rpdl9faGR0dUxcIixcblx0XCJkaXNwbGF5X25vbmVfbW9yZV9uZXdzX3NtYWxsX3NjcmVlblwiOiBcImhvbWVQYWdlX2Rpc3BsYXlfbm9uZV9tb3JlX25ld3Nfc21hbGxfc2NyZWVuX19raTVydlwiLFxuXHRcImRpc3BsYXlfbm9uZV9tb3JlX25ld3NfbWFpbl9ibG9ja1wiOiBcImhvbWVQYWdlX2Rpc3BsYXlfbm9uZV9tb3JlX25ld3NfbWFpbl9ibG9ja19fT3pzSG5cIixcblx0XCJzaWRlX19iYXJfX3NpbmdsZV9fYnJhbmRcIjogXCJob21lUGFnZV9zaWRlX19iYXJfX3NpbmdsZV9fYnJhbmRfXzNTdnpIXCIsXG5cdFwic2lkZV9fYmFyX19zaW5nbGVfX2JyYW5kX19tYWluXCI6IFwiaG9tZVBhZ2Vfc2lkZV9fYmFyX19zaW5nbGVfX2JyYW5kX19tYWluX18zOXNFQ1wiLFxuXHRcImJveF9fc2l6aW5nX19waG9uZVwiOiBcImhvbWVQYWdlX2JveF9fc2l6aW5nX19waG9uZV9fVnJNVE9cIixcblx0XCJjYXJkc19fcGhvbmVcIjogXCJob21lUGFnZV9jYXJkc19fcGhvbmVfXzFKbGdaXCIsXG5cdFwic2lkZV9fYmFyX19waG9uZXNcIjogXCJob21lUGFnZV9zaWRlX19iYXJfX3Bob25lc19feTAxMFFcIixcblx0XCJzaW5nbGVfX2NhcmRfX3Bob25lXCI6IFwiaG9tZVBhZ2Vfc2luZ2xlX19jYXJkX19waG9uZV9fM3dHWEZcIixcblx0XCJjYXJkX19pbWFnZV9fY29udGFpbmVyX19waG9uZVwiOiBcImhvbWVQYWdlX2NhcmRfX2ltYWdlX19jb250YWluZXJfX3Bob25lX18yTU9pUFwiLFxuXHRcImNhcmRfX2NvbnRlbnRfX3Bob25lXCI6IFwiaG9tZVBhZ2VfY2FyZF9fY29udGVudF9fcGhvbmVfXzFOWTJ5XCIsXG5cdFwiaHJUZXh0XCI6IFwiaG9tZVBhZ2VfaHJUZXh0X19HTllwWFwiLFxuXHRcImxvYWRfbW9yZV9idXR0b25cIjogXCJob21lUGFnZV9sb2FkX21vcmVfYnV0dG9uX180QU9zcVwiLFxuXHRcInZpZXdfYWxsXCI6IFwiaG9tZVBhZ2Vfdmlld19hbGxfXzM4eF9rXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLWZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9jb25maWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInF1ZXJ5LXN0cmluZ1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9mYVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9maVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pY29ucy9tZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1pc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1sb2FkZXItc3Bpbm5lclwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC1yZW5kZXItaHRtbFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==