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
        pathname: '/admin-panel/user-signin',
        query: {
          message: 'Your session has been expired. Please sign in'
        }
      });
    });
  } else {
    return;
  }
};
const preSignup = (user, token) => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/signup`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
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
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const signin = user => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/signin`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(user)
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const signout = next => {
  removeCookie('token');
  removeLocalStorage('user');
  next();
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/signout`, {
    method: 'GET'
  }).then(response => {
    console.log('signout success');
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
  setCookie('token', data.token);
  setLocalStorage('user', data.user);
  next();
};
const isAuth = () => {
  if (false) {}
};
const updateUser = (user, next) => {
  if (false) {}
};
const forgotPassword = email => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/forgot-password`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(email)
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const resetPassword = resetInfo => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/reset-password`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
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
/*! exports provided: createMobile, mobileListPrivate, mobileListPublic, mobileListPublicReleventBrands, mobileListPublicNewsReviews, singleMobile, listRelated, listRelatedNews, listRelatedReviews, removeMobile, updateMobile, approveMobile, unPublishMobile, listSearchAdmin, listSearchUser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMobile", function() { return createMobile; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobileListPrivate", function() { return mobileListPrivate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobileListPublic", function() { return mobileListPublic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobileListPublicReleventBrands", function() { return mobileListPublicReleventBrands; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mobileListPublicNewsReviews", function() { return mobileListPublicNewsReviews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleMobile", function() { return singleMobile; });
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
const mobileListPublic = () => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/mobile-public-root`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const mobileListPublicReleventBrands = id => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/mobile-brands-list/${id}`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const mobileListPublicNewsReviews = () => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/mobile-news-reviews`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const singleMobile = slug => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/mobile/${slug}`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
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
/**completed */

const listSearchUser = params => {
  let query = query_string__WEBPACK_IMPORTED_MODULE_3___default.a.stringify(params);
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/mobile-search-user/search?${query}`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};

/***/ }),

/***/ "./actions/mobileCategory.action.js":
/*!******************************************!*\
  !*** ./actions/mobileCategory.action.js ***!
  \******************************************/
/*! exports provided: createMCategory, mCategoryList, mCategoryListHomePage, singleMCategory, removeMCategory, updateMCategory */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createMCategory", function() { return createMCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mCategoryList", function() { return mCategoryList; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "mCategoryListHomePage", function() { return mCategoryListHomePage; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleMCategory", function() { return singleMCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeMCategory", function() { return removeMCategory; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "updateMCategory", function() { return updateMCategory; });
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! isomorphic-fetch */ "isomorphic-fetch");
/* harmony import */ var isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var _auth_action__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.action */ "./actions/auth.action.js");



const createMCategory = (mCategory, token) => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/mobile-category`, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: mCategory
  }).then(response => {
    Object(_auth_action__WEBPACK_IMPORTED_MODULE_2__["handleResponse"])(response);
    return response.json();
  }).catch(err => console.log(err));
};
const mCategoryList = () => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/mobile-category`, {
    method: 'GET'
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const mCategoryListHomePage = () => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/mobile-category-list-home-page`, {
    method: 'GET'
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const singleMCategory = slug => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/single-mobile-category/${slug}`, {
    method: 'GET'
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const removeMCategory = (slug, token) => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/mobile-category/${slug}`, {
    method: 'DELETE',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    }
  }).then(response => {
    Object(_auth_action__WEBPACK_IMPORTED_MODULE_2__["handleResponse"])(response);
    return response.json();
  }).catch(err => console.log(err));
};
const updateMCategory = (mCategory, token, slug) => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/mobile-category/${slug}`, {
    method: 'PUT',
    headers: {
      Accept: 'application/json',
      Authorization: `Bearer ${token}`
    },
    body: mCategory
  }).then(response => {
    Object(_auth_action__WEBPACK_IMPORTED_MODULE_2__["handleResponse"])(response);
    return response.json();
  }).catch(err => console.log(err));
};

/***/ }),

/***/ "./actions/news.action.js":
/*!********************************!*\
  !*** ./actions/news.action.js ***!
  \********************************/
/*! exports provided: createNews, newsListPrivate, newsListPublic, newsListPublicLimitFirstSection, newsListPublicLimitSecondSection, newsListPublicLimitFinalSection, newsPublicLatest, newsPublicSecondLatest, newsListPublicTopStories, newsListPublicMobileReviews, newsListModeratorPrivate, newsListModeratorPublic, singleNews, listRelated, listRelatedReviews, listRelatedMobiles, removeNews, updateNews, approveNews, unPublishNews, listSearchAdmin, listSearchUser, listSearchModerator */
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
const newsListPublic = () => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/news-public-root`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const newsListPublicLimitFirstSection = () => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/news-public-limit-first-section`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const newsListPublicLimitSecondSection = () => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/news-public-limit-second-section`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const newsListPublicLimitFinalSection = (skip, limit) => {
  const data = {
    skip,
    limit
  };
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/news-public-limit-final-section`, {
    method: "POST",
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const newsPublicLatest = () => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/news-public-latest`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const newsPublicSecondLatest = () => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/news-public-second-latest`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
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
};
const singleNews = slug => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/news/${slug}`, {
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
};
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
};
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
/**completed */

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
/*! exports provided: createReview, reviewListPrivate, reviewListPublic, reviewPublicLatest, reviewPublicSecondLatest, reviewPublicEightLatest, newsListPublicTopStories, reviewListPublicMobileNews, reviewListPublicLimitedSectionOne, reviewListPublicLimitedSectionTwo, reviewListModeratorPrivate, reviewListModeratorPublic, singleReview, removeReview, updateReview, approveReview, unPublishReview, listRelated, listRelatedNews, listRelatedMobiles, listSearchAdmin, listSearchUser, listSearchModerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createReview", function() { return createReview; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reviewListPrivate", function() { return reviewListPrivate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reviewListPublic", function() { return reviewListPublic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reviewPublicLatest", function() { return reviewPublicLatest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reviewPublicSecondLatest", function() { return reviewPublicSecondLatest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reviewPublicEightLatest", function() { return reviewPublicEightLatest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "newsListPublicTopStories", function() { return newsListPublicTopStories; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reviewListPublicMobileNews", function() { return reviewListPublicMobileNews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reviewListPublicLimitedSectionOne", function() { return reviewListPublicLimitedSectionOne; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reviewListPublicLimitedSectionTwo", function() { return reviewListPublicLimitedSectionTwo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reviewListModeratorPrivate", function() { return reviewListModeratorPrivate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "reviewListModeratorPublic", function() { return reviewListModeratorPublic; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "singleReview", function() { return singleReview; });
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
const reviewListPublic = () => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/reviews-public-root`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const reviewPublicLatest = () => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/review-public-latest`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const reviewPublicSecondLatest = () => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/review-public-second-latest`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const reviewPublicEightLatest = () => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/review-public-eight-latest`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const newsListPublicTopStories = () => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/newsTopStories`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const reviewListPublicMobileNews = () => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/reviews-news-mobile`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const reviewListPublicLimitedSectionOne = () => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/review-public-limited-list-section-one`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const reviewListPublicLimitedSectionTwo = () => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/review-public-limited-list-section-two`, {
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
};
const singleReview = slug => {
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/review/${slug}`, {
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
};
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
};
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
/**completed list all reviews item in user end */

const listSearchUser = params => {
  let query = query_string__WEBPACK_IMPORTED_MODULE_3___default.a.stringify(params);
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/review-search-user/search?${query}`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};
const listSearchModerator = params => {
  console.log("search params : ", params);
  let query = query_string__WEBPACK_IMPORTED_MODULE_3___default.a.stringify(params);
  console.log("query params : ", params);
  return isomorphic_fetch__WEBPACK_IMPORTED_MODULE_0___default()(`${_config__WEBPACK_IMPORTED_MODULE_1__["API"]}/review-search-moderator/search?${query}`, {
    method: "GET"
  }).then(response => {
    return response.json();
  }).catch(err => console.log(err));
};

/***/ }),

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _styles_footer_module_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../styles/footer.module.css */ "./styles/footer.module.css");
/* harmony import */ var _styles_footer_module_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_styles_footer_module_css__WEBPACK_IMPORTED_MODULE_5__);

var _jsxFileName = "C:\\react projects\\next 1.0.1\\frontend\\components\\Footer.js";









const FooterComponent = () => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("script", {
          src: "https://kit.fontawesome.com/a076d05399.js"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 15,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 9
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 13,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("footer", {
      style: {
        background: "#2c2c2c"
      },
      className: "footer mt-5",
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          paddingLeft: 0,
          paddingRight: 0,
          marginRight: 0,
          marginLeft: 0,
          marginBottom: "10px",
          width: "100%",
          textAlign: "center",
          display: "flex",
          flexDirection: "column"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "row",
          style: {
            paddingLeft: 0,
            paddingRight: 0,
            marginRight: 0,
            marginLeft: 0
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-3",
            style: {
              textAlign: "center"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                alt: "techbot.com",
                style: {
                  cursor: "pointer"
                },
                className: "img img-fluid",
                src: `/static/images/logo.png`
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 43,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: `col-md-3 ${_styles_footer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.footer_list_items}`,
            style: {
              display: "flex",
              flexDirection: "column"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              className: _styles_footer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.footer_headers,
              children: "mobiles"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 56,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: "samsung"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 58,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 57,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: "apple"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 61,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 60,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: "huawei"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 63,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: "xiaomi"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: "one plus"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 70,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 69,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: "sony"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: "nokia"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 76,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 75,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: "view all"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 79,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 78,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 52,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: `col-md-3 ${_styles_footer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.footer_list_items}`,
            style: {
              display: "flex",
              flexDirection: "column"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              className: _styles_footer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.footer_headers,
              children: "quick links"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 86,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: "home"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 88,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 87,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: "news"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 91,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 90,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: "reviews"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 94,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 93,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: "mobiles"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 97,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 96,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: "site map"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 100,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 99,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: "about us"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: "contact us"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 106,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 105,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 82,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: `col-md-3 ${_styles_footer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.social_icons_class}`,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
              className: _styles_footer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.footer_headers,
              children: "follow us on"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 15
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
              style: {
                paddingLeft: 0,
                paddingRight: 0,
                marginBottom: 0,
                paddingBottom: 0,
                listStyle: "none",
                textAlign: "center",
                justifyContent: "center"
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "/",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaFacebookF"], {
                    size: "2rem",
                    color: "#666"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 124,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 123,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 122,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "/",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaInstagram"], {
                    size: "2rem",
                    color: "#666"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 129,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 128,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 127,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "/",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaPinterestP"], {
                    size: "2rem",
                    color: "#666"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 134,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 133,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  href: "/",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaYoutube"], {
                    size: "2rem",
                    color: "#666"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 139,
                    columnNumber: 21
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 138,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 137,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 111,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 32,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {}, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 145,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 19,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          display: "flex",
          flexDirection: "row",
          backgroundColor: "#1E1E1E",
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "10px",
          paddingRight: "10px"
        },
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          style: {
            float: "left"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              color: "#4e4e4e"
            },
            children: ["@ 2020\xA0", " ", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "#",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                style: {
                  color: "#4e4e4e",
                  textDecoration: "underline"
                },
                children: "techbot.com"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 163,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 162,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 160,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 159,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: _styles_footer_module_css__WEBPACK_IMPORTED_MODULE_5___default.a.copyright_section,
          style: {
            float: "right"
          },
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
            style: {
              marginLeft: "20px",
              marginRight: "20px"
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "#",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: "home"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 172,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 171,
              columnNumber: 15
            }, undefined), "\xA0\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: "news"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 176,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 175,
              columnNumber: 15
            }, undefined), "\xA0\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: "reviews"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 180,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 179,
              columnNumber: 15
            }, undefined), "\xA0\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: "mobiles"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 184,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 183,
              columnNumber: 15
            }, undefined), "\xA0\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: "site map"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 188,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 187,
              columnNumber: 15
            }, undefined), "\xA0\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: "about us"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 192,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 191,
              columnNumber: 15
            }, undefined), "\xA0\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: "contact us"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 196,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 195,
              columnNumber: 15
            }, undefined), "\xA0\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: "terms of use"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 200,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 199,
              columnNumber: 15
            }, undefined), "\xA0\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: "privacy policy"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 204,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 203,
              columnNumber: 15
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 170,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 169,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 147,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 12,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (FooterComponent);

/***/ }),

/***/ "./components/HeaderComponents/Backdrop.js":
/*!*************************************************!*\
  !*** ./components/HeaderComponents/Backdrop.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);

var _jsxFileName = "C:\\react projects\\next 1.0.1\\frontend\\components\\HeaderComponents\\Backdrop.js";


const {
  RFC_2822
} = __webpack_require__(/*! moment */ "moment");
/**
 * completed!
 */


const backDrop = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(React.Fragment, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          rel: "stylesheet",
          href: "/static/css/Header.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 12,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 11,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "backdrop",
      onClick: props.click
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 18,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 9,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (backDrop);

/***/ }),

/***/ "./components/HeaderComponents/Header.js":
/*!***********************************************!*\
  !*** ./components/HeaderComponents/Header.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _actions_auth_action__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../actions/auth.action */ "./actions/auth.action.js");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! nprogress */ "nprogress");
/* harmony import */ var nprogress__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(nprogress__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../node_modules/nprogress/nprogress.css */ "./node_modules/nprogress/nprogress.css");
/* harmony import */ var _node_modules_nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_node_modules_nprogress_nprogress_css__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! reactstrap */ "reactstrap");
/* harmony import */ var reactstrap__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(reactstrap__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _UserHeader__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./UserHeader */ "./components/HeaderComponents/UserHeader.js");
/* harmony import */ var _SideDrawer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./SideDrawer */ "./components/HeaderComponents/SideDrawer.js");
/* harmony import */ var _Backdrop__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./Backdrop */ "./components/HeaderComponents/Backdrop.js");
/* harmony import */ var _MobileSearchBar__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./MobileSearchBar */ "./components/HeaderComponents/MobileSearchBar.js");
/* harmony import */ var _LargeScreenSearchBar__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./LargeScreenSearchBar */ "./components/HeaderComponents/LargeScreenSearchBar.js");

var _jsxFileName = "C:\\react projects\\next 1.0.1\\frontend\\components\\HeaderComponents\\Header.js";














/*next js produce these functions. it helps to function nprogress bar*/

next_router__WEBPACK_IMPORTED_MODULE_9___default.a.onRouteChangeStart = url => nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.start();

next_router__WEBPACK_IMPORTED_MODULE_9___default.a.onRouteChangeComplete = url => nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.done();

next_router__WEBPACK_IMPORTED_MODULE_9___default.a.onRouteChangeError = url => nprogress__WEBPACK_IMPORTED_MODULE_5___default.a.done();
/**
 * completed!
 */


const HeaderComponent = () => {
  const {
    0: isOpen,
    1: setIsOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);

  const toggle = () => setIsOpen(!isOpen);

  const adminPanelHeader = () => {
    return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Navbar"], {
      color: "dark",
      dark: true,
      expand: "md",
      children: [Object(_actions_auth_action__WEBPACK_IMPORTED_MODULE_4__["isAuth"])() && Object(_actions_auth_action__WEBPACK_IMPORTED_MODULE_4__["isAuth"])().role === 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/admin-panel/moderator",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
          style: {
            color: 'white'
          },
          className: "font-weight-bold",
          children: _config__WEBPACK_IMPORTED_MODULE_8__["APP_NAME"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 46,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 45,
        columnNumber: 21
      }, undefined), Object(_actions_auth_action__WEBPACK_IMPORTED_MODULE_4__["isAuth"])() && Object(_actions_auth_action__WEBPACK_IMPORTED_MODULE_4__["isAuth"])().role === 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
        href: "/admin-panel/root-admin",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
          style: {
            color: 'white'
          },
          className: "font-weight-bold",
          children: _config__WEBPACK_IMPORTED_MODULE_8__["APP_NAME"]
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 52,
          columnNumber: 25
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 51,
        columnNumber: 21
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavbarToggler"], {
        onClick: toggle
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Collapse"], {
        isOpen: isOpen,
        navbar: true,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Nav"], {
          className: "mr-auto",
          navbar: true,
          children: [Object(_actions_auth_action__WEBPACK_IMPORTED_MODULE_4__["isAuth"])().role === 1 ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
              href: "/admin-panel/root-admin",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
                style: {
                  cursor: 'pointer'
                },
                children: "Home"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 63,
                columnNumber: 37
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 62,
              columnNumber: 33
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 61,
            columnNumber: 29
          }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
              href: "/admin-panel/moderator",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
                style: {
                  cursor: 'pointer'
                },
                children: "Home"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 69,
                columnNumber: 37
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 68,
              columnNumber: 33
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 67,
            columnNumber: 29
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["UncontrolledDropdown"], {
            nav: true,
            inNavbar: true,
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownToggle"], {
              nav: true,
              caret: true,
              style: {
                cursor: 'pointer'
              },
              children: "New content"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 74,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownMenu"], {
              right: true,
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], {
                href: "/admin-panel/crud/new-news",
                children: "News"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 78,
                columnNumber: 33
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["DropdownItem"], {
                href: "/admin-panel/crud/new-review",
                children: "Reveiws"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 81,
                columnNumber: 33
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 77,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 73,
            columnNumber: 25
          }, undefined), Object(_actions_auth_action__WEBPACK_IMPORTED_MODULE_4__["isAuth"])() && Object(_actions_auth_action__WEBPACK_IMPORTED_MODULE_4__["isAuth"])().role === 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
              href: "/admin-panel/root-admin/crud/mobile",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
                style: {
                  cursor: 'pointer'
                },
                children: "New mobile phone"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 89,
                columnNumber: 37
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 88,
              columnNumber: 33
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 87,
            columnNumber: 29
          }, undefined), Object(_actions_auth_action__WEBPACK_IMPORTED_MODULE_4__["isAuth"])() && Object(_actions_auth_action__WEBPACK_IMPORTED_MODULE_4__["isAuth"])().role === 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
              href: "/admin-panel/user-signup",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
                style: {
                  cursor: 'pointer'
                },
                children: "New user"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 96,
                columnNumber: 37
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 95,
              columnNumber: 33
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 94,
            columnNumber: 29
          }, undefined), Object(_actions_auth_action__WEBPACK_IMPORTED_MODULE_4__["isAuth"])() && Object(_actions_auth_action__WEBPACK_IMPORTED_MODULE_4__["isAuth"])().role === 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
              href: "/admin-panel/moderator/list-all-post",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
                style: {
                  cursor: 'pointer'
                },
                children: "Manage post"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 103,
                columnNumber: 37
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 102,
              columnNumber: 33
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 101,
            columnNumber: 29
          }, undefined), Object(_actions_auth_action__WEBPACK_IMPORTED_MODULE_4__["isAuth"])() && Object(_actions_auth_action__WEBPACK_IMPORTED_MODULE_4__["isAuth"])().role === 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
              href: "/admin-panel/root-admin/list-all-post",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
                style: {
                  cursor: 'pointer'
                },
                children: "Manage post"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 111,
                columnNumber: 37
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 110,
              columnNumber: 33
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 109,
            columnNumber: 29
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["Nav"], {
          className: "ml-auto",
          navbar: true,
          children: [Object(_actions_auth_action__WEBPACK_IMPORTED_MODULE_4__["isAuth"])() && Object(_actions_auth_action__WEBPACK_IMPORTED_MODULE_4__["isAuth"])().role === 0 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
              href: "/admin-panel/moderator",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
                style: {
                  cursor: 'pointer'
                },
                children: `${Object(_actions_auth_action__WEBPACK_IMPORTED_MODULE_4__["isAuth"])().name}'s dashboard`
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 120,
                columnNumber: 37
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 119,
              columnNumber: 33
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 118,
            columnNumber: 29
          }, undefined), Object(_actions_auth_action__WEBPACK_IMPORTED_MODULE_4__["isAuth"])() && Object(_actions_auth_action__WEBPACK_IMPORTED_MODULE_4__["isAuth"])().role === 1 && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_3___default.a, {
              href: "/admin-panel/root-admin",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
                style: {
                  cursor: 'pointer'
                },
                children: `${Object(_actions_auth_action__WEBPACK_IMPORTED_MODULE_4__["isAuth"])().name}'s dashboard`
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 128,
                columnNumber: 37
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 33
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 126,
            columnNumber: 29
          }, undefined), Object(_actions_auth_action__WEBPACK_IMPORTED_MODULE_4__["isAuth"])() && /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavItem"], {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(reactstrap__WEBPACK_IMPORTED_MODULE_7__["NavLink"], {
              style: {
                cursor: 'pointer'
              },
              onClick: () => Object(_actions_auth_action__WEBPACK_IMPORTED_MODULE_4__["signout"])(() => next_router__WEBPACK_IMPORTED_MODULE_9___default.a.replace('/admin-panel/user-signin')),
              children: "Signout"
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 135,
              columnNumber: 33
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 134,
            columnNumber: 29
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 116,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 43,
      columnNumber: 13
    }, undefined);
  };
  /**mobile search button,side drawer open and large screen search button initiate states */


  const {
    0: sideDrawerOpen,
    1: setSideDrawerOpen
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: mobileSearchBtn,
    1: setMobileSearchBtn
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  const {
    0: largeScreenSearchBtn,
    1: setLargeScreenSearchBtn
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(false);
  /**side drawer open close toggler function */

  const drawerToggleClickHandler = () => {
    setSideDrawerOpen(prevState => {
      return {
        sideDrawerOpen: !prevState.sideDrawerOpen
      };
    });
  };
  /**mobile search bar open toggler function */


  const mobileSearchToggleClickHandler = () => {
    setMobileSearchBtn(prevState => {
      return {
        mobileSearchBtn: !prevState.mobileSearchBtn
      };
    });
  };
  /**mobile search bar close toggler function */


  const mobileSearchToggleClickClose = () => {
    setMobileSearchBtn(false);
  };
  /**large screen search bar open toggler function */


  const largeScreenSearchToggleClickHandler = () => {
    setLargeScreenSearchBtn(prevState => {
      return {
        largeScreenSearchBtn: !prevState.largeScreenSearchBtn
      };
    });
  };
  /**mobile search bar close toggler function */


  const largeScreenSearchToggleClickClose = () => {
    setLargeScreenSearchBtn(false);
  };
  /**backdrop close toggler function */


  const backdropClickHandler = () => {
    setSideDrawerOpen(false);
  };

  let backdropTemp;
  /**close the backdrop if side drawer opens */

  if (sideDrawerOpen) {
    backdropTemp = /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Backdrop__WEBPACK_IMPORTED_MODULE_12__["default"], {
      click: backdropClickHandler
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 197,
      columnNumber: 24
    }, undefined);
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          rel: "stylesheet",
          href: "/static/css/Header.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 204,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 203,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 202,
      columnNumber: 13
    }, undefined), Object(_actions_auth_action__WEBPACK_IMPORTED_MODULE_4__["isAuth"])() ? adminPanelHeader() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_UserHeader__WEBPACK_IMPORTED_MODULE_10__["default"], {
        largeScreenActiveBtn: largeScreenSearchBtn,
        largeScreenCloseFunction: largeScreenSearchToggleClickClose,
        largeScreenSearchHandler: largeScreenSearchToggleClickHandler,
        closeFunction: mobileSearchToggleClickClose,
        btnActive: mobileSearchBtn,
        mobileSearchHanlder: mobileSearchToggleClickHandler,
        drawerClickHandler: drawerToggleClickHandler
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 213,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SideDrawer__WEBPACK_IMPORTED_MODULE_11__["default"], {
        show: sideDrawerOpen
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 214,
        columnNumber: 17
      }, undefined), backdropTemp, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_MobileSearchBar__WEBPACK_IMPORTED_MODULE_13__["default"], {
        show: mobileSearchBtn
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 216,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_LargeScreenSearchBar__WEBPACK_IMPORTED_MODULE_14__["default"], {
        show: largeScreenSearchBtn
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 217,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 212,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 201,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (HeaderComponent);

/***/ }),

/***/ "./components/HeaderComponents/LargeScreenSearchBar.js":
/*!*************************************************************!*\
  !*** ./components/HeaderComponents/LargeScreenSearchBar.js ***!
  \*************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\react projects\\next 1.0.1\\frontend\\components\\HeaderComponents\\LargeScreenSearchBar.js";

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/**
 * completed!
 */

const mobileSearchButton = props => {
  let drawerClasses = 'large__screen__search';

  if (props.show) {
    drawerClasses = 'large__screen__search open';
  }

  const {
    0: values,
    1: setValues
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    searchKey: ''
  });
  const {
    searchKey
  } = values;

  const handleChange = e => {
    setValues(_objectSpread(_objectSpread({}, values), {}, {
      searchKey: e.target.value
    }));
  };

  const clickSubmit = e => {
    e.preventDefault();
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push(`/search/${searchKey}`);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: drawerClasses,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: clickSubmit,
      style: {
        display: 'flex',
        flexDirection: 'row'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        style: {
          color: '#d8d8d8',
          opacity: '0.9',
          height: '50px',
          backgroundColor: '#2c2c2c',
          width: '80%',
          left: 0,
          margin: 0,
          padding: '8px',
          border: '0.1px',
          borderRadius: '0px 0px',
          boxShadow: '1px 0px 7px rgba(0,0,0,0.5)',
          fontSize: '20px'
        },
        onChange: handleChange,
        value: searchKey,
        className: "form-control",
        placeholder: "Search Here...",
        type: "search",
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 32,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "submit",
        className: "btn",
        style: {
          opacity: '1',
          borderRadius: '0px 0px',
          width: '20%',
          boxShadow: '1px 0px 7px rgba(0,0,0,0.5)',
          backgroundColor: '#242424',
          color: '#d8d8d8',
          title: 'search teckbot.com'
        },
        children: "Search"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 53,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 31,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 30,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (mobileSearchButton);

/***/ }),

/***/ "./components/HeaderComponents/MobileSearchBar.js":
/*!********************************************************!*\
  !*** ./components/HeaderComponents/MobileSearchBar.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/router */ "next/router");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);

var _jsxFileName = "C:\\react projects\\next 1.0.1\\frontend\\components\\HeaderComponents\\MobileSearchBar.js";


/**
 * completed!
 */

const mobileSearchButton = props => {
  let drawerClasses = 'mobile__search';

  if (props.show) {
    drawerClasses = 'mobile__search open';
  }

  const {
    0: values,
    1: setValues
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])({
    searchKey: ''
  });
  const {
    searchKey
  } = values;

  const handleChange = e => {
    setValues({
      searchKey: e.target.value
    });
  };

  const clickSubmit = e => {
    e.preventDefault();
    next_router__WEBPACK_IMPORTED_MODULE_1___default.a.push(`/searchS/${searchKey}`);
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    className: drawerClasses,
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("form", {
      onSubmit: clickSubmit,
      style: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row'
      },
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("input", {
        style: {
          paddingLeft: '20px',
          paddingRight: '20px',
          color: '#d8d8d8',
          opacity: '0.9',
          height: '50px',
          backgroundColor: '#2c2c2c',
          width: '80%',
          left: 0,
          margin: 0,
          padding: '8px',
          border: '0.1px',
          borderRadius: '0px 0px',
          boxShadow: '1px 0px 7px rgba(0,0,0,0.5)',
          fontSize: '20px'
        },
        onChange: handleChange,
        value: searchKey,
        className: "form-control",
        placeholder: "Search Here...",
        type: "search",
        required: true
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 34,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        type: "submit",
        className: "btn",
        style: {
          opacity: '1',
          borderRadius: '0px 0px',
          width: '20%',
          boxShadow: '1px 0px 7px rgba(0,0,0,0.5)',
          backgroundColor: '#242424',
          color: '#d8d8d8',
          title: 'search teckbot.com'
        },
        children: "Search"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 57,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 33,
      columnNumber: 13
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 32,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (mobileSearchButton);

/***/ }),

/***/ "./components/HeaderComponents/SideDrawer.js":
/*!***************************************************!*\
  !*** ./components/HeaderComponents/SideDrawer.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);

var _jsxFileName = "C:\\react projects\\next 1.0.1\\frontend\\components\\HeaderComponents\\SideDrawer.js";







/**
 * completed!
 */

const sideDrawer = props => {
  let drawerClasses = 'side-drawer';

  if (props.show) {
    drawerClasses = 'side-drawer open';
  }

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          rel: "stylesheet",
          href: "/static/css/Header.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 23,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 21,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: drawerClasses,
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        style: {
          padding: 0,
          margin: 0,
          textAlign: 'left'
        },
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
          href: "/",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
            alt: "techbot.com",
            style: {
              padding: 0,
              margin: 0,
              cursor: 'pointer',
              textAlign: 'center'
            },
            className: "img img-fluid",
            src: `${_config__WEBPACK_IMPORTED_MODULE_3__["DOMAIN"]}/static/images/logo.png`
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 31,
            columnNumber: 36
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 31,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 30,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
          style: {
            backgroundColor: 'white'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 34,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 33,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: "Home"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 39,
                columnNumber: 44
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 39,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 38,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/news",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: "News"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 42,
                columnNumber: 48
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 42,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 41,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/reviews",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: "Reviews"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 51
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 45,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 44,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/phones",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: "Mobile Phones"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 48,
                columnNumber: 50
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 48,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 47,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/about",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: "About Us"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 51,
                columnNumber: 49
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 51,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 50,
            columnNumber: 25
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
              href: "/contact",
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                children: "Contact Us"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 54,
                columnNumber: 51
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 54,
              columnNumber: 29
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 53,
            columnNumber: 25
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 36,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
          style: {
            backgroundColor: 'white'
          }
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 59,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 58,
        columnNumber: 17
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "side-drawer__footer",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            style: {
              paddingLeft: 0,
              paddingRight: 0,
              marginBottom: 0,
              paddingBottom: 0,
              listStyle: 'none',
              textAlign: 'center',
              justifyContent: 'center'
            },
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "#",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaFacebookF"], {
                  size: "2rem",
                  color: "#666"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 64,
                  columnNumber: 45
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 64,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 64,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "#",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaInstagram"], {
                  size: "2rem",
                  color: "#666"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 65,
                  columnNumber: 45
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 65,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 65,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "#",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaPinterestP"], {
                  size: "2rem",
                  color: "#666"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 66,
                  columnNumber: 45
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 66,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 66,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "#",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaYoutube"], {
                  size: "2rem",
                  color: "#666"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 67,
                  columnNumber: 45
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 67,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 67,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 63,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 62,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "#",
                children: "Privacy Policy"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 72,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 72,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                href: "#",
                children: "Terms of Use"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 73,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 73,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 71,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 70,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("p", {
          children: ["Copyrigh @2020\xA0", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            href: "/",
            children: "Techbot.com"
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 76,
            columnNumber: 44
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 76,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 61,
        columnNumber: 17
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 29,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 20,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (sideDrawer);

/***/ }),

/***/ "./components/HeaderComponents/SideDrawerButton.js":
/*!*********************************************************!*\
  !*** ./components/HeaderComponents/SideDrawerButton.js ***!
  \*********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-icons/fi */ "react-icons/fi");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\react projects\\next 1.0.1\\frontend\\components\\HeaderComponents\\SideDrawerButton.js";



/**
 * completed!
 */

const drawerToggleButton = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      className: "toggle-button__with-search",
      children: [props.close ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "toggle-button__with-search_icons",
        onClick: props.closeFunction,
        title: "cancel",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_3__["MdClose"], {
          size: "1.5rem",
          color: "#858585"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 19,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 14,
        columnNumber: 11
      }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "toggle-button__with-search_icons",
        onClick: props.mobile,
        title: "search techbot.com",
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_2__["FiSearch"], {
          size: "1.5rem",
          color: "#858585"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 27,
          columnNumber: 13
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 22,
        columnNumber: 11
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("button", {
        title: "Menu Toggle Button",
        className: "toggle-button",
        onClick: props.click,
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "toggle-botton__line"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 36,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "toggle-botton__line"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 37,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "toggle-botton__line"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 38,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 31,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 11,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (drawerToggleButton);

/***/ }),

/***/ "./components/HeaderComponents/UserHeader.js":
/*!***************************************************!*\
  !*** ./components/HeaderComponents/UserHeader.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _SideDrawerButton__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./SideDrawerButton */ "./components/HeaderComponents/SideDrawerButton.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../config */ "./config.js");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-icons/fi */ "react-icons/fi");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_6__);

var _jsxFileName = "C:\\react projects\\next 1.0.1\\frontend\\components\\HeaderComponents\\UserHeader.js";






/**
 * completed! 
 * */

const userNavbar = props => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
          rel: "stylesheet",
          href: "/static/css/Header.css"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 16,
          columnNumber: 21
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 15,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 14,
      columnNumber: 13
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("header", {
      className: "toolbar",
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("nav", {
        className: "toolbar__navigation",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "toolbar__logo",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
            href: "/",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
              alt: "techbot.com",
              style: {
                cursor: 'pointer'
              },
              className: "img img-fluid",
              src: `${_config__WEBPACK_IMPORTED_MODULE_4__["DOMAIN"]}/static/images/logo6-edited.png`
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 26,
              columnNumber: 40
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 26,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 25,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "spacer"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 28,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "toolbar_navigation-items",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("ul", {
            children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: "Home"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 32,
                  columnNumber: 48
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 32,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 31,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/news",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: "News"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 35,
                  columnNumber: 52
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 35,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 34,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/reviews",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: "Reviews"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 38,
                  columnNumber: 55
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 38,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 37,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("li", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_2___default.a, {
                href: "/phones",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                  children: "Mobile Phones"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 41,
                  columnNumber: 54
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 41,
                columnNumber: 33
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 40,
              columnNumber: 29
            }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "toolbar__navigation-search-image",
              children: props.largeScreenActiveBtn ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "toggle-button__with-search_icons",
                onClick: props.largeScreenCloseFunction,
                title: "cancel",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_6__["MdClose"], {
                  size: "1.5rem",
                  color: "#858585"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 45,
                  columnNumber: 139
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 45,
                columnNumber: 33
              }, undefined) : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "toggle-button__with-search_icons",
                onClick: props.largeScreenSearchHandler,
                title: "search techbot.com",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_5__["FiSearch"], {
                  size: "1.5rem",
                  color: "#858585"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 46,
                  columnNumber: 152
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 46,
                columnNumber: 34
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 43,
              columnNumber: 29
            }, undefined)]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 30,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 29,
          columnNumber: 21
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "toolbar__toggle-button",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_SideDrawerButton__WEBPACK_IMPORTED_MODULE_3__["default"], {
            closeFunction: props.closeFunction,
            close: props.btnActive,
            mobile: props.mobileSearchHanlder,
            click: props.drawerClickHandler
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 54,
            columnNumber: 25
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 53,
          columnNumber: 21
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 23,
        columnNumber: 17
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 22,
      columnNumber: 13
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 13,
    columnNumber: 9
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (userNavbar);

/***/ }),

/***/ "./components/Layout.js":
/*!******************************!*\
  !*** ./components/Layout.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ "react/jsx-dev-runtime");
/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _HeaderComponents_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./HeaderComponents/Header */ "./components/HeaderComponents/Header.js");
/* harmony import */ var _Footer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Footer */ "./components/Footer.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);

var _jsxFileName = "C:\\react projects\\next 1.0.1\\frontend\\components\\Layout.js";



/**this file represents all the childs.
 * completed!
 */

const Layout = ({
  children
}) => {
  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
          name: "viewport",
          content: "width=device-width, initial-scale=1.0"
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 13,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 12,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_HeaderComponents_Header__WEBPACK_IMPORTED_MODULE_1__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 18,
        columnNumber: 9
      }, undefined), children, /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_Footer__WEBPACK_IMPORTED_MODULE_2__["default"], {}, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 20,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 10,
    columnNumber: 5
  }, undefined);
};

/* harmony default export */ __webpack_exports__["default"] = (Layout);

/***/ }),

/***/ "./config.js":
/*!*******************!*\
  !*** ./config.js ***!
  \*******************/
/*! exports provided: API, APP_NAME, DOMAIN, FB_APP_ID, DISQUS_SHORTNAME, TINYMC_APP_ID */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "API", function() { return API; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "APP_NAME", function() { return APP_NAME; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMAIN", function() { return DOMAIN; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FB_APP_ID", function() { return FB_APP_ID; });
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

/***/ "./node_modules/nprogress/nprogress.css":
/*!**********************************************!*\
  !*** ./node_modules/nprogress/nprogress.css ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {



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
/* harmony import */ var _components_Layout__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Layout */ "./components/Layout.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _actions_news_action__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../actions/news.action */ "./actions/news.action.js");
/* harmony import */ var _actions_review_action__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../actions/review.action */ "./actions/review.action.js");
/* harmony import */ var _actions_mobileCategory_action__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../actions/mobileCategory.action */ "./actions/mobileCategory.action.js");
/* harmony import */ var _actions_mobile_action__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../actions/mobile.action */ "./actions/mobile.action.js");
/* harmony import */ var _config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../config */ "./config.js");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-icons/md */ "react-icons/md");
/* harmony import */ var react_icons_md__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_icons_md__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! react-icons/fi */ "react-icons/fi");
/* harmony import */ var react_icons_fi__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(react_icons_fi__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! react-render-html */ "react-render-html");
/* harmony import */ var react_render_html__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(react_render_html__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../styles/homePage.module.css */ "./styles/homePage.module.css");
/* harmony import */ var _styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_styles_homePage_module_css__WEBPACK_IMPORTED_MODULE_15__);

var _jsxFileName = "C:\\react projects\\next 1.0.1\\frontend\\pages\\index.js";
















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
  mobileCategoryList,
  mobileListLatest
}) => {
  const head = () => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_head__WEBPACK_IMPORTED_MODULE_3___default.a, {
    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("title", {
      children: ["Home Page - ", _config__WEBPACK_IMPORTED_MODULE_10__["APP_NAME"]]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 48,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      name: "description",
      content: "List of all mobile phones,smartphones,tablets,wearables and accessories brands"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 49,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("link", {
      rel: "canonical",
      href: `${_config__WEBPACK_IMPORTED_MODULE_10__["DOMAIN"]}/`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 53,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      property: "og:title",
      content: `Home Pages - ${_config__WEBPACK_IMPORTED_MODULE_10__["APP_NAME"]}`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 54,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      property: "og:description",
      content: "List of all mobile phones,smartphones,tablets,wearables and accessories brands"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 55,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      property: "og:type",
      content: "website"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 59,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      property: "og:url",
      content: `${_config__WEBPACK_IMPORTED_MODULE_10__["DOMAIN"]}/phones`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 60,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      property: "og:site_name",
      content: `${_config__WEBPACK_IMPORTED_MODULE_10__["APP_NAME"]}`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 61,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      alt: "Photo by sam loyd on Unsplash",
      property: "og:image",
      content: `/static/images/sam-loyd-single-brand-cover-page.jpg`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 63,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      alt: "Photo by sam loyd on Unsplash",
      property: "og:image:secure_url",
      content: `/static/images/sam-loyd-single-brand-cover-page.jpg`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 68,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      property: "og:image:type",
      content: "image/jpg"
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 73,
      columnNumber: 7
    }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("meta", {
      property: "fb:app_id",
      content: `${_config__WEBPACK_IMPORTED_MODULE_10__["FB_APP_ID"]}`
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 74,
      columnNumber: 7
    }, undefined)]
  }, void 0, true, {
    fileName: _jsxFileName,
    lineNumber: 47,
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
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
              href: `/news/${latestNews.slug}`,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                style: {
                  textDecoration: "none"
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "container_common container_left",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "overlay"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 99,
                    columnNumber: 19
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    className: "img_wrapper",
                    src: `${_config__WEBPACK_IMPORTED_MODULE_10__["API"]}/news/photo/${latestNews.slug}`,
                    alt: latestNews.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 100,
                    columnNumber: 19
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "news_title",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                      children: latestNews.title
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 106,
                      columnNumber: 21
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 105,
                    columnNumber: 19
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "author",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: ["By ", latestNews.postedBy.username, " |", " ", moment__WEBPACK_IMPORTED_MODULE_4___default()(latestNews.updatedAt).fromNow()]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 109,
                      columnNumber: 21
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 108,
                    columnNumber: 19
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "blog_type",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: "NEWS"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 115,
                      columnNumber: 21
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 114,
                    columnNumber: 19
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 98,
                  columnNumber: 17
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 93,
                columnNumber: 15
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 92,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 88,
            columnNumber: 11
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-md-6 pl-0 pr-0 container_right",
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
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                  href: `/news/${secondLatestNews.slug}`,
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                    style: {
                      textDecoration: "none"
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "container_common container_right_top",
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "overlay"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 143,
                        columnNumber: 23
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                        className: "img_wrapper",
                        src: `${_config__WEBPACK_IMPORTED_MODULE_10__["API"]}/news/photo/${secondLatestNews.slug}`,
                        alt: secondLatestNews.title
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 144,
                        columnNumber: 23
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "news_title news_title_right_top",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                          children: secondLatestNews.title
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 150,
                          columnNumber: 25
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 149,
                        columnNumber: 23
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "author",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          children: ["By ", secondLatestNews.postedBy.username, " |", " ", moment__WEBPACK_IMPORTED_MODULE_4___default()(secondLatestNews.updatedAt).fromNow()]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 153,
                          columnNumber: 25
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 152,
                        columnNumber: 23
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "blog_type",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          children: "NEWS"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 159,
                          columnNumber: 25
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 158,
                        columnNumber: 23
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 142,
                      columnNumber: 21
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 137,
                    columnNumber: 19
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 136,
                  columnNumber: 17
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 132,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "col-md-12 pl-0 pr-0 container_right_bottom",
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
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                      href: `/reviews/${latestReview.slug}`,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        style: {
                          textDecoration: "none"
                        },
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "container_common container_right_bottom_left",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "overlay"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 181,
                            columnNumber: 27
                          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                            className: "img_wrapper",
                            src: `${_config__WEBPACK_IMPORTED_MODULE_10__["API"]}/reviews/photo/${latestReview.slug}`,
                            alt: latestReview.title
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 182,
                            columnNumber: 27
                          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "news_title news_title_right_bottom_left",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                              children: latestReview.title
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 188,
                              columnNumber: 29
                            }, undefined)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 187,
                            columnNumber: 27
                          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "author",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                              children: ["By ", latestReview.postedBy.username, " |", " ", moment__WEBPACK_IMPORTED_MODULE_4___default()(latestReview.updatedAt).fromNow()]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 191,
                              columnNumber: 29
                            }, undefined)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 190,
                            columnNumber: 27
                          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "blog_type",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                              children: "REVIEW"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 197,
                              columnNumber: 29
                            }, undefined)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 196,
                            columnNumber: 27
                          }, undefined)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 180,
                          columnNumber: 25
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 175,
                        columnNumber: 23
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 174,
                      columnNumber: 21
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 173,
                    columnNumber: 19
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "col-md-6 pl-0 pr-0",
                    style: {
                      width: "100%"
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                      href: `/reviews/${secondLatestReview.slug}`,
                      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                        style: {
                          textDecoration: "none"
                        },
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          className: "container_common container_right_bottom_right",
                          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "overlay"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 213,
                            columnNumber: 27
                          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                            className: "img_wrapper",
                            src: `${_config__WEBPACK_IMPORTED_MODULE_10__["API"]}/reviews/photo/${secondLatestReview.slug}`,
                            alt: secondLatestReview.title
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 214,
                            columnNumber: 27
                          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "news_title news_title_right_bottom_right",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                              children: secondLatestReview.title
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 220,
                              columnNumber: 29
                            }, undefined)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 219,
                            columnNumber: 27
                          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "author",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                              children: ["By ", secondLatestReview.postedBy.username, " |", " ", moment__WEBPACK_IMPORTED_MODULE_4___default()(secondLatestReview.updatedAt).fromNow()]
                            }, void 0, true, {
                              fileName: _jsxFileName,
                              lineNumber: 223,
                              columnNumber: 29
                            }, undefined)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 222,
                            columnNumber: 27
                          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                            className: "blog_type",
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                              children: "REVIEW"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 229,
                              columnNumber: 29
                            }, undefined)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 228,
                            columnNumber: 27
                          }, undefined)]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 212,
                          columnNumber: 25
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 207,
                        columnNumber: 23
                      }, undefined)
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 206,
                      columnNumber: 21
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 205,
                    columnNumber: 19
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 171,
                  columnNumber: 17
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 167,
                columnNumber: 15
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 127,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 123,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 83,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 82,
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
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
              href: `/news/${latestNews.slug}`,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                style: {
                  textDecoration: "none"
                },
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "container_common container_left",
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "overlay"
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 269,
                    columnNumber: 19
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                    className: "img_wrapper",
                    src: `${_config__WEBPACK_IMPORTED_MODULE_10__["API"]}/news/photo/${latestNews.slug}`,
                    alt: latestNews.title
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 270,
                    columnNumber: 19
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "news_title",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                      children: latestNews.title
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 276,
                      columnNumber: 21
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 275,
                    columnNumber: 19
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "author",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: ["By ", latestNews.postedBy.username, " |", " ", moment__WEBPACK_IMPORTED_MODULE_4___default()(latestNews.updatedAt).fromNow()]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 279,
                      columnNumber: 21
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 278,
                    columnNumber: 19
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "blog_type",
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                      children: "NEWS"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 285,
                      columnNumber: 21
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 284,
                    columnNumber: 19
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 268,
                  columnNumber: 17
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 263,
                columnNumber: 15
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 262,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 258,
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
                className: "col-md-12 pl-0 pr-0 container_right_medium_screen",
                style: {
                  width: "100%",
                  height: "420px"
                },
                children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "container_common container_right_top_medium_screen",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                    href: `/news/${secondLatestNews.slug}`,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      style: {
                        textDecoration: "none"
                      },
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "overlay"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 313,
                        columnNumber: 23
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                        className: "img_wrapper",
                        src: `${_config__WEBPACK_IMPORTED_MODULE_10__["API"]}/news/photo/${secondLatestNews.slug}`,
                        alt: secondLatestNews.title
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 314,
                        columnNumber: 23
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "news_title news_title_right_top_medium_screent",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                          children: secondLatestNews.title
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 320,
                          columnNumber: 25
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 319,
                        columnNumber: 23
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "author",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          children: [" ", "By ", secondLatestNews.postedBy.username, " |", " ", moment__WEBPACK_IMPORTED_MODULE_4___default()(secondLatestNews.updatedAt).fromNow()]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 323,
                          columnNumber: 25
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 322,
                        columnNumber: 23
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "blog_type",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          children: "NEWS"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 330,
                          columnNumber: 25
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 329,
                        columnNumber: 23
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 308,
                      columnNumber: 21
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 307,
                    columnNumber: 19
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 306,
                  columnNumber: 17
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "container_common container_right_bottom_medium_screen",
                  children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                    href: `/reviews/${latestReview.slug}`,
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                      style: {
                        textDecoration: "none"
                      },
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "overlay"
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 344,
                        columnNumber: 23
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                        className: "img_wrapper",
                        src: `${_config__WEBPACK_IMPORTED_MODULE_10__["API"]}/reviews/photo/${latestReview.slug}`,
                        alt: latestReview.title
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 345,
                        columnNumber: 23
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "news_title news_title_right_bottom_medium_screen",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                          children: latestReview.title
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 351,
                          columnNumber: 25
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 350,
                        columnNumber: 23
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "author",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          children: ["By ", latestReview.postedBy.username, " |", " ", moment__WEBPACK_IMPORTED_MODULE_4___default()(latestReview.updatedAt).fromNow()]
                        }, void 0, true, {
                          fileName: _jsxFileName,
                          lineNumber: 354,
                          columnNumber: 25
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 353,
                        columnNumber: 23
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "blog_type",
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                          children: "REVIEW"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 360,
                          columnNumber: 25
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 359,
                        columnNumber: 23
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 339,
                      columnNumber: 21
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 338,
                    columnNumber: 19
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 337,
                  columnNumber: 17
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 301,
                columnNumber: 15
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 297,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 293,
            columnNumber: 11
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 253,
          columnNumber: 9
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 252,
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
        className: "col-md-12 mt-4 small_screen_block",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "small_screen_container",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
            href: `/reviews/${latestReview.slug}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              style: {
                textDecoration: "none"
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "overlay"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 389,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                className: "small_screen_img_wrapper",
                src: `${_config__WEBPACK_IMPORTED_MODULE_10__["API"]}/reviews/photo/${latestReview.slug}`,
                alt: latestReview.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 390,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "news_title news_title_small_screen",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  children: latestReview.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 396,
                  columnNumber: 17
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 395,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "author",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: ["By ", latestReview.postedBy.username, " |", " ", moment__WEBPACK_IMPORTED_MODULE_4___default()(latestReview.updatedAt).fromNow()]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 399,
                  columnNumber: 17
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 398,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "blog_type",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: "REVIEW"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 405,
                  columnNumber: 17
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 404,
                columnNumber: 15
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 384,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 383,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 382,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "small_screen_container",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
            href: `/news/${latestNews.slug}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              style: {
                textDecoration: "none"
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "overlay"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 419,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                className: "small_screen_img_wrapper",
                src: `${_config__WEBPACK_IMPORTED_MODULE_10__["API"]}/news/photo/${latestNews.slug}`,
                alt: latestNews.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 420,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "news_title news_title_small_screen",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  children: latestNews.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 426,
                  columnNumber: 17
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 425,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "author",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: ["By ", latestNews.postedBy.username, " |", " ", moment__WEBPACK_IMPORTED_MODULE_4___default()(latestNews.updatedAt).fromNow()]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 429,
                  columnNumber: 17
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 428,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "blog_type",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: "NEWS"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 435,
                  columnNumber: 17
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 434,
                columnNumber: 15
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 414,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 413,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 412,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "small_screen_container",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
            href: `/reviews/${secondLatestReview.slug}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              style: {
                textDecoration: "none"
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "overlay"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 449,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                className: "small_screen_img_wrapper",
                src: `${_config__WEBPACK_IMPORTED_MODULE_10__["API"]}/reviews/photo/${secondLatestReview.slug}`,
                alt: secondLatestReview.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 450,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "news_title news_title_small_screen",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  children: secondLatestReview.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 456,
                  columnNumber: 17
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 455,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "author",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: ["By ", secondLatestReview.postedBy.username, " |", " ", moment__WEBPACK_IMPORTED_MODULE_4___default()(secondLatestReview.updatedAt).fromNow()]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 459,
                  columnNumber: 17
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 458,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "blog_type",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: "REVIEW"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 465,
                  columnNumber: 17
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 464,
                columnNumber: 15
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 444,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 443,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 442,
          columnNumber: 9
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "small_screen_container",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
            href: `/news/${secondLatestNews.slug}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              style: {
                textDecoration: "none"
              },
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "overlay"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 479,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                className: "small_screen_img_wrapper",
                src: `${_config__WEBPACK_IMPORTED_MODULE_10__["API"]}/news/photo/${secondLatestNews.slug}`,
                alt: secondLatestNews.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 480,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "news_title news_title_small_screen",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  children: secondLatestNews.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 486,
                  columnNumber: 17
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 485,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "author",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: [" ", "By ", secondLatestNews.postedBy.username, " |", " ", moment__WEBPACK_IMPORTED_MODULE_4___default()(secondLatestNews.updatedAt).fromNow()]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 489,
                  columnNumber: 17
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 488,
                columnNumber: 15
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "blog_type",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: "NEWS"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 496,
                  columnNumber: 17
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 495,
                columnNumber: 15
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 474,
              columnNumber: 13
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 473,
            columnNumber: 11
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 472,
          columnNumber: 9
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 380,
        columnNumber: 7
      }, undefined)
      /**main small screen div ends here */

    );
  };

  const newsLimit = 10;
  const newsSkip = 32;
  const {
    0: limit,
    1: setLimit
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(newsLimit);
  const {
    0: skip,
    1: setSkip
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(newsSkip);
  const {
    0: newsSize,
    1: setNewsSize
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])(newsLimitFinalSection.length);
  const {
    0: loadedNews,
    1: setLoadedNews
  } = Object(react__WEBPACK_IMPORTED_MODULE_2__["useState"])([]);

  const loadMore = () => {
    let toSkip = skip + limit;
    Object(_actions_news_action__WEBPACK_IMPORTED_MODULE_6__["newsListPublicLimitFinalSection"])(skip, limit).then(data => {
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
        className: "load_more_button",
        children: "Load more"
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 531,
        columnNumber: 11
      }, undefined)
    }, void 0, false, {
      fileName: _jsxFileName,
      lineNumber: 529,
      columnNumber: 7
    }, undefined);
  };

  const showSideBarReviews = () => {
    return reviewListLatest.map((blog, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "review_container_middle",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "image_review_middle",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
            href: `/reviews/${blog.slug}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              style: {
                textDecoration: "none",
                width: "100%"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                className: "img img-fluid",
                src: `${_config__WEBPACK_IMPORTED_MODULE_10__["API"]}/reviews/photo/${blog.slug}`,
                alt: blog.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 546,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 545,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 544,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 543,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "content_review_middle",
          style: {
            display: "flex",
            flexDirection: "column"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "content_div_review_middle",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
                  lineNumber: 561,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 560,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 559,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 558,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "author_div_review_middle",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: [" ", moment__WEBPACK_IMPORTED_MODULE_4___default()(blog.updatedAt).fromNow(), " | by ", blog.postedBy.username]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 567,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 566,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 554,
          columnNumber: 11
        }, undefined)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 542,
        columnNumber: 9
      }, undefined)
    }, i, false, {
      fileName: _jsxFileName,
      lineNumber: 541,
      columnNumber: 7
    }, undefined));
  };

  const showSideBarMobiles = () => {
    return mobileListLatest.map((m, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "single__card__phone",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card__image__container__phone",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
            href: `/phones/brand/${m.slug}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                src: `${_config__WEBPACK_IMPORTED_MODULE_10__["API"]}/mobile/photo/${m.slug}`,
                alt: `${m.title}`
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 585,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 584,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 583,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 582,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "card__content__phone",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
            href: `/phones/brand/${m.slug}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                children: m.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 592,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 591,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 590,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 589,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 581,
        columnNumber: 9
      }, undefined)
    }, i, false, {
      fileName: _jsxFileName,
      lineNumber: 580,
      columnNumber: 7
    }, undefined));
  };

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
        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
          href: `/reviews/${eightLatestReview.slug}`,
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
            style: {
              textDecoration: "none",
              width: "100%"
            },
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              className: "container_review_middle",
              children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "overlay"
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 616,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                className: "img_wrapper",
                src: `${_config__WEBPACK_IMPORTED_MODULE_10__["API"]}/reviews/photo/${eightLatestReview.slug}`,
                alt: eightLatestReview.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 617,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "title_review_middle",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h1", {
                  children: eightLatestReview.title
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 623,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 622,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "author",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: [" ", "By ", eightLatestReview.postedBy.username, " |", " ", moment__WEBPACK_IMPORTED_MODULE_4___default()(eightLatestReview.updatedAt).fromNow()]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 626,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 625,
                columnNumber: 17
              }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "blog_type",
                children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
                  children: "REVIEW"
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 633,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 632,
                columnNumber: 17
              }, undefined)]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 615,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 609,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 608,
          columnNumber: 11
        }, undefined)
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 604,
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
          lineNumber: 643,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "col-md-6 display_none_review_middle_bottom",
          children: showReviewsInsideReviewBlockRight()
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 644,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 639,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 603,
      columnNumber: 7
    }, undefined);
  };

  const showReviewsInsideReviewBlockLeft = () => {
    return limitedReviewsSectionOne.map((blog, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "review_container_middle",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "image_review_middle",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
            href: `/reviews/${blog.slug}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              style: {
                textDecoration: "none",
                width: "100%"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                className: "img img-fluid",
                src: `${_config__WEBPACK_IMPORTED_MODULE_10__["API"]}/reviews/photo/${blog.slug}`,
                alt: blog.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 659,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 658,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 657,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 656,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "content_review_middle",
          style: {
            display: "flex",
            flexDirection: "column"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "content_div_review_middle",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
                  lineNumber: 674,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 673,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 672,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 671,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "author_div_review_middle",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: [" ", moment__WEBPACK_IMPORTED_MODULE_4___default()(blog.updatedAt).fromNow(), " | by ", blog.postedBy.username]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 680,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 679,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 667,
          columnNumber: 11
        }, undefined)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 655,
        columnNumber: 9
      }, undefined)
    }, i, false, {
      fileName: _jsxFileName,
      lineNumber: 654,
      columnNumber: 7
    }, undefined));
  };

  const showReviewsInsideReviewBlockRight = () => {
    return limitedReviewsSectionTwo.map((blog, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "review_container_middle",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "image_review_middle",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
            href: `/reviews/${blog.slug}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              style: {
                textDecoration: "none",
                width: "100%"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                className: "img img-fluid",
                src: `${_config__WEBPACK_IMPORTED_MODULE_10__["API"]}/reviews/photo/${blog.slug}`,
                alt: blog.title
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
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "content_review_middle",
          style: {
            display: "flex",
            flexDirection: "column"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "content_div_review_middle",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
                  lineNumber: 713,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 712,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 711,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 710,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "author_div_review_middle",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: [" ", moment__WEBPACK_IMPORTED_MODULE_4___default()(blog.updatedAt).fromNow(), " | by ", blog.postedBy.username]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 719,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 718,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 706,
          columnNumber: 11
        }, undefined)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 694,
        columnNumber: 9
      }, undefined)
    }, i, false, {
      fileName: _jsxFileName,
      lineNumber: 693,
      columnNumber: 7
    }, undefined));
  };

  const showNewsFirstSection = () => {
    return newsLimitFirstSection.map((blog, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "news__container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "image__news",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
            href: `/news/${blog.slug}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              style: {
                textDecoration: "none",
                width: "100%"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                className: "img img-fluid",
                src: `${_config__WEBPACK_IMPORTED_MODULE_10__["API"]}/news/photo/${blog.slug}`,
                alt: blog.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 737,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 736,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 735,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 734,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "content__news",
          style: {
            display: "flex",
            flexDirection: "column"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "content__div",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
                  lineNumber: 752,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 751,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 750,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 749,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "excerpt_div",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
              href: `/news/${blog.slug}`,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                style: {
                  textDecoration: "none",
                  width: "100%"
                },
                children: react_render_html__WEBPACK_IMPORTED_MODULE_14___default()(blog.excerpt)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 758,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 757,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 756,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "author__div",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: [moment__WEBPACK_IMPORTED_MODULE_4___default()(blog.updatedAt).fromNow(), " | by ", blog.postedBy.username]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 764,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 763,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 745,
          columnNumber: 11
        }, undefined)]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 733,
        columnNumber: 9
      }, undefined)
    }, i, false, {
      fileName: _jsxFileName,
      lineNumber: 732,
      columnNumber: 7
    }, undefined));
  };

  const showNewsSecondSection = () => {
    return newsLimitSecondSection.map((blog, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "news__container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "image__news",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
            href: `/news/${blog.slug}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              style: {
                textDecoration: "none",
                width: "100%"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                className: "img img-fluid",
                src: `${_config__WEBPACK_IMPORTED_MODULE_10__["API"]}/news/photo/${blog.slug}`,
                alt: blog.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 781,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 780,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 779,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 778,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "content__news",
          style: {
            display: "flex",
            flexDirection: "column"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "content__div",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
                  lineNumber: 796,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 795,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 794,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 793,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "excerpt_div",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
              href: `/news/${blog.slug}`,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                style: {
                  textDecoration: "none",
                  width: "100%"
                },
                children: react_render_html__WEBPACK_IMPORTED_MODULE_14___default()(blog.excerpt)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 802,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 801,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 800,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "author__div",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: [" ", moment__WEBPACK_IMPORTED_MODULE_4___default()(blog.updatedAt).fromNow(), " | by ", blog.postedBy.username]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 808,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 807,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 789,
          columnNumber: 11
        }, undefined)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 777,
        columnNumber: 9
      }, undefined)
    }, i, false, {
      fileName: _jsxFileName,
      lineNumber: 776,
      columnNumber: 7
    }, undefined));
  };

  const showNewsFinalSection = () => {
    return newsLimitFinalSection.map((blog, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "news__container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "image__news",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
            href: `/news/${blog.slug}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              style: {
                textDecoration: "none",
                width: "100%"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                className: "img img-fluid",
                src: `${_config__WEBPACK_IMPORTED_MODULE_10__["API"]}/news/photo/${blog.slug}`,
                alt: blog.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 826,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 825,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 824,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 823,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "content__news",
          style: {
            display: "flex",
            flexDirection: "column"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "content__div",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
                  lineNumber: 841,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 840,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 839,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 838,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "excerpt_div",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
              href: `/news/${blog.slug}`,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                style: {
                  textDecoration: "none",
                  width: "100%"
                },
                children: react_render_html__WEBPACK_IMPORTED_MODULE_14___default()(blog.excerpt)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 847,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 846,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 845,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "author__div",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: [" ", moment__WEBPACK_IMPORTED_MODULE_4___default()(blog.updatedAt).fromNow(), " | by ", blog.postedBy.username]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 853,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 852,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 834,
          columnNumber: 11
        }, undefined)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 822,
        columnNumber: 9
      }, undefined)
    }, i, false, {
      fileName: _jsxFileName,
      lineNumber: 821,
      columnNumber: 7
    }, undefined));
  };

  const showNewsFinalSectionLoadedNews = () => {
    return loadedNews.map((blog, i) => /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "news__container",
        children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "image__news",
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
            href: `/news/${blog.slug}`,
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
              style: {
                textDecoration: "none",
                width: "100%"
              },
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("img", {
                className: "img img-fluid",
                src: `${_config__WEBPACK_IMPORTED_MODULE_10__["API"]}/news/photo/${blog.slug}`,
                alt: blog.title
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 871,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 870,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 869,
            columnNumber: 13
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 868,
          columnNumber: 11
        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          className: "content__news",
          style: {
            display: "flex",
            flexDirection: "column"
          },
          children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "content__div",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
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
                  lineNumber: 886,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 885,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 884,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 883,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "excerpt_div",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
              href: `/news/${blog.slug}`,
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                style: {
                  textDecoration: "none",
                  width: "100%"
                },
                children: react_render_html__WEBPACK_IMPORTED_MODULE_14___default()(blog.excerpt)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 892,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 891,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 890,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "author__div",
            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("span", {
              children: [" ", moment__WEBPACK_IMPORTED_MODULE_4___default()(blog.updatedAt).fromNow(), " | by ", blog.postedBy.username]
            }, void 0, true, {
              fileName: _jsxFileName,
              lineNumber: 898,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 897,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 879,
          columnNumber: 11
        }, undefined)]
      }, i, true, {
        fileName: _jsxFileName,
        lineNumber: 867,
        columnNumber: 9
      }, undefined)
    }, i, false, {
      fileName: _jsxFileName,
      lineNumber: 866,
      columnNumber: 7
    }, undefined));
  };

  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(_components_Layout__WEBPACK_IMPORTED_MODULE_1__["default"], {
    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        children: head()
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 912,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "large_screen_featuring",
        children: latestNews && latestReview && secondLatestReview && secondLatestNews ? showHighlight() : ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 913,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "medium_screen_featuring",
        children: latestNews && latestReview && secondLatestNews ? showHighlightMediumScreen() : ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 918,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "small_screen_featuring",
        children: latestNews && latestReview && secondLatestReview && secondLatestNews ? smallScreenHighlight() : ""
      }, void 0, false, {
        fileName: _jsxFileName,
        lineNumber: 923,
        columnNumber: 9
      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
        className: "container mt-4 mb-4 pl-0 pr-0",
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
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    style: {
                      height: "10px",
                      width: "100%",
                      margin: 0,
                      backgroundColor: "rgba(202, 28, 28, 0.945)"
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 941,
                    columnNumber: 21
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    style: {
                      padding: "10px"
                    },
                    children: [showNewsFirstSection(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_11__["MdRateReview"], {
                          size: "1rem",
                          color: "#818078"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 961,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 960,
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
                          className: "hrText",
                          "data-content": "reviews"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 964,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 963,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 951,
                      columnNumber: 23
                    }, undefined), showReviewBlock(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
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
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_12__["FaNewspaper"], {
                          size: "1rem",
                          color: "#818078"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 983,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 982,
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
                          className: "hrText",
                          "data-content": "more news"
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 986,
                          columnNumber: 27
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 985,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 972,
                      columnNumber: 23
                    }, undefined), showNewsSecondSection(), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      className: "display_none_more_news_main_block",
                      children: [showNewsFinalSection(), loadedNews ? showNewsFinalSectionLoadedNews() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        children: "Loading..."
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 999,
                        columnNumber: 27
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "container",
                        children: loadMoreButton()
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1001,
                        columnNumber: 25
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 994,
                      columnNumber: 23
                    }, undefined)]
                  }, void 0, true, {
                    fileName: _jsxFileName,
                    lineNumber: 949,
                    columnNumber: 21
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 934,
                  columnNumber: 19
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 933,
                columnNumber: 17
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 932,
              columnNumber: 15
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 931,
            columnNumber: 13
          }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "col-lg-4 side__bar__single__brand__main",
            children: [mobileListLatest ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "row mr-0 side__bar__single__brand",
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
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fi__WEBPACK_IMPORTED_MODULE_13__["FiSmartphone"], {
                      size: "1rem",
                      color: "#818078"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1030,
                      columnNumber: 25
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1029,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    style: {
                      width: "100%",
                      paddingTop: 0
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
                      style: {
                        marginTop: "6px"
                      },
                      className: "hrText",
                      "data-content": "latest phones"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1033,
                      columnNumber: 25
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1032,
                    columnNumber: 23
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1019,
                  columnNumber: 21
                }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                  className: "col-md-12",
                  style: {
                    paddingRight: "12px",
                    paddingLeft: "12px"
                  },
                  children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    className: "cards__phone box__sizing__phone side__bar__phones",
                    children: showSideBarMobiles()
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1047,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    style: {
                      height: "3px",
                      width: "100%",
                      margin: 0,
                      backgroundColor: "rgba(202, 28, 28, 0.945)"
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1050,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    style: {
                      width: "100%"
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      style: {
                        display: "flex",
                        flexDirection: "row",
                        float: "right",
                        marginBottom: "10px"
                      },
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        style: {
                          marginRight: 0
                        },
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                          href: `/phones`,
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                              className: "font-weight-bolder",
                              style: {
                                lineHeight: "130%",
                                textTransform: "capitalize",
                                fontSize: "16px",
                                fontWeight: "bold",
                                color: "#383838",
                                padding: "10px",
                                paddingRight: 0,
                                marginBottom: 0
                              },
                              children: "view all"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1070,
                              columnNumber: 33
                            }, undefined)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1069,
                            columnNumber: 31
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1068,
                          columnNumber: 29
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1067,
                        columnNumber: 27
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        style: {
                          paddingTop: "8px",
                          marginLeft: 0
                        },
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                          href: `/phones`,
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_11__["MdNavigateNext"], {
                              size: "1.5rem",
                              color: "#000"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1091,
                              columnNumber: 33
                            }, undefined)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1090,
                            columnNumber: 31
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1089,
                          columnNumber: 29
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1088,
                        columnNumber: 27
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 1059,
                      columnNumber: 25
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1058,
                    columnNumber: 23
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1040,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1012,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1011,
              columnNumber: 17
            }, undefined) : "", _actions_review_action__WEBPACK_IMPORTED_MODULE_7__["reviewListPublic"] ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
              children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                className: "row mr-0 mt-2 side__bar__single__brand display_none_side_bar_review",
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
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_11__["MdRateReview"], {
                      size: "1rem",
                      color: "#818078"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1123,
                      columnNumber: 25
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1122,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    style: {
                      width: "100%",
                      paddingTop: 0
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
                      style: {
                        marginTop: "6px"
                      },
                      className: "hrText",
                      "data-content": "latest reviews"
                    }, void 0, false, {
                      fileName: _jsxFileName,
                      lineNumber: 1126,
                      columnNumber: 25
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1125,
                    columnNumber: 23
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1113,
                  columnNumber: 21
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
                      backgroundColor: "rgba(202, 28, 28, 0.945)"
                    }
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1142,
                    columnNumber: 23
                  }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                    style: {
                      width: "100%"
                    },
                    children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                      style: {
                        display: "flex",
                        flexDirection: "row",
                        float: "right",
                        marginBottom: "10px"
                      },
                      children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        style: {
                          marginRight: 0
                        },
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                          href: `/reviews`,
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("h2", {
                              className: "font-weight-bolder",
                              style: {
                                lineHeight: "130%",
                                textTransform: "capitalize",
                                fontSize: "16px",
                                fontWeight: "bold",
                                color: "#383838",
                                padding: "10px",
                                paddingRight: 0,
                                marginBottom: 0
                              },
                              children: "view all"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1162,
                              columnNumber: 33
                            }, undefined)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1161,
                            columnNumber: 31
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1160,
                          columnNumber: 29
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1159,
                        columnNumber: 27
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        style: {
                          paddingTop: "8px",
                          marginLeft: 0
                        },
                        children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(next_link__WEBPACK_IMPORTED_MODULE_5___default.a, {
                          href: `/reviews`,
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("a", {
                            children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_md__WEBPACK_IMPORTED_MODULE_11__["MdNavigateNext"], {
                              size: "1.5rem",
                              color: "#000"
                            }, void 0, false, {
                              fileName: _jsxFileName,
                              lineNumber: 1183,
                              columnNumber: 33
                            }, undefined)
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1182,
                            columnNumber: 31
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1181,
                          columnNumber: 29
                        }, undefined)
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1180,
                        columnNumber: 27
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 1151,
                      columnNumber: 25
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1150,
                    columnNumber: 23
                  }, undefined)]
                }, void 0, true, {
                  fileName: _jsxFileName,
                  lineNumber: 1133,
                  columnNumber: 21
                }, undefined)]
              }, void 0, true, {
                fileName: _jsxFileName,
                lineNumber: 1106,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1105,
              columnNumber: 17
            }, undefined) : ""]
          }, void 0, true, {
            fileName: _jsxFileName,
            lineNumber: 1009,
            columnNumber: 13
          }, undefined)]
        }, void 0, true, {
          fileName: _jsxFileName,
          lineNumber: 930,
          columnNumber: 11
        }, undefined), newsLimitFinalSection ? /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
            className: "row ml-0 mr-0 mt-2 display_none_more_news_small_screen",
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
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])(react_icons_fa__WEBPACK_IMPORTED_MODULE_12__["FaNewspaper"], {
                            size: "1rem",
                            color: "#818078"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1223,
                            columnNumber: 31
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1222,
                          columnNumber: 29
                        }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                          style: {
                            width: "100%",
                            paddingTop: 0
                          },
                          children: /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("hr", {
                            style: {
                              marginTop: "6px"
                            },
                            className: "hrText",
                            "data-content": "more news"
                          }, void 0, false, {
                            fileName: _jsxFileName,
                            lineNumber: 1226,
                            columnNumber: 31
                          }, undefined)
                        }, void 0, false, {
                          fileName: _jsxFileName,
                          lineNumber: 1225,
                          columnNumber: 29
                        }, undefined)]
                      }, void 0, true, {
                        fileName: _jsxFileName,
                        lineNumber: 1212,
                        columnNumber: 27
                      }, undefined), showNewsFinalSection(), loadedNews ? showNewsFinalSectionLoadedNews() : /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        children: "Loading..."
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1237,
                        columnNumber: 29
                      }, undefined), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__["jsxDEV"])("div", {
                        className: "container",
                        children: loadMoreButton()
                      }, void 0, false, {
                        fileName: _jsxFileName,
                        lineNumber: 1239,
                        columnNumber: 27
                      }, undefined)]
                    }, void 0, true, {
                      fileName: _jsxFileName,
                      lineNumber: 1211,
                      columnNumber: 25
                    }, undefined)
                  }, void 0, false, {
                    fileName: _jsxFileName,
                    lineNumber: 1204,
                    columnNumber: 23
                  }, undefined)
                }, void 0, false, {
                  fileName: _jsxFileName,
                  lineNumber: 1203,
                  columnNumber: 21
                }, undefined)
              }, void 0, false, {
                fileName: _jsxFileName,
                lineNumber: 1202,
                columnNumber: 19
              }, undefined)
            }, void 0, false, {
              fileName: _jsxFileName,
              lineNumber: 1201,
              columnNumber: 17
            }, undefined)
          }, void 0, false, {
            fileName: _jsxFileName,
            lineNumber: 1200,
            columnNumber: 15
          }, undefined)
        }, void 0, false, {
          fileName: _jsxFileName,
          lineNumber: 1199,
          columnNumber: 13
        }, undefined) : ""]
      }, void 0, true, {
        fileName: _jsxFileName,
        lineNumber: 929,
        columnNumber: 9
      }, undefined)]
    }, void 0, true, {
      fileName: _jsxFileName,
      lineNumber: 911,
      columnNumber: 7
    }, undefined)
  }, void 0, false, {
    fileName: _jsxFileName,
    lineNumber: 910,
    columnNumber: 5
  }, undefined);
}; // This also gets called at build time


async function getStaticProps() {
  const newsLimitFirstSection = await Object(_actions_news_action__WEBPACK_IMPORTED_MODULE_6__["newsListPublicLimitFirstSection"])().then(data => {
    if (data.error) {
      console.log(data.error);
    } else {
      return data;
    }
  });
  const newsLimitSecondSection = await Object(_actions_news_action__WEBPACK_IMPORTED_MODULE_6__["newsListPublicLimitSecondSection"])().then(data => {
    if (data.error) {
      console.log(data.error);
    } else {
      return data;
    }
  });
  let skip = 22;
  let limit = 10;
  const newsLimitFinalSection = await Object(_actions_news_action__WEBPACK_IMPORTED_MODULE_6__["newsListPublicLimitFinalSection"])(skip, limit).then(data => {
    if (data.error) {
      console.log(data.error);
    } else {
      return data;
    }
  });
  const reviewListLatest = await Object(_actions_review_action__WEBPACK_IMPORTED_MODULE_7__["reviewListPublicMobileNews"])().then(data => {
    if (data.error) {
      console.log(data.error);
    } else {
      return data;
    }
  });
  const mobileCategoryList = await Object(_actions_mobileCategory_action__WEBPACK_IMPORTED_MODULE_8__["mCategoryListHomePage"])().then(data => {
    if (data.error) {
      console.log(data.error);
    } else {
      return data;
    }
  });
  const mobileListLatest = await Object(_actions_mobile_action__WEBPACK_IMPORTED_MODULE_9__["mobileListPublicNewsReviews"])().then(data => {
    if (data.error) {
      console.log(data.error);
    } else {
      return data;
    }
  });
  const latestNews = await Object(_actions_news_action__WEBPACK_IMPORTED_MODULE_6__["newsPublicLatest"])().then(data => {
    if (data.error) {
      console.log(data.error);
    } else {
      return data;
    }
  });
  const secondLatestNews = await Object(_actions_news_action__WEBPACK_IMPORTED_MODULE_6__["newsPublicSecondLatest"])().then(data => {
    if (data.error) {
      console.log(data.error);
    } else {
      return data;
    }
  });
  const latestReview = await Object(_actions_review_action__WEBPACK_IMPORTED_MODULE_7__["reviewPublicLatest"])().then(data => {
    if (data.error) {
      console.log(data.error);
    } else {
      return data;
    }
  });
  const secondLatestReview = await Object(_actions_review_action__WEBPACK_IMPORTED_MODULE_7__["reviewPublicSecondLatest"])().then(data => {
    if (data.error) {
      console.log(data.error);
    } else {
      return data;
    }
  });
  const eightLatestReview = await Object(_actions_review_action__WEBPACK_IMPORTED_MODULE_7__["reviewPublicEightLatest"])().then(data => {
    if (data.error) {
      console.log(data.error);
    } else {
      return data;
    }
  });
  const limitedReviewsSectionOne = await Object(_actions_review_action__WEBPACK_IMPORTED_MODULE_7__["reviewListPublicLimitedSectionOne"])().then(data => {
    if (data.error) {
      console.log(data.error);
    } else {
      return data;
    }
  });
  const limitedReviewsSectionTwo = await Object(_actions_review_action__WEBPACK_IMPORTED_MODULE_7__["reviewListPublicLimitedSectionTwo"])().then(data => {
    if (data.error) {
      console.log(data.error);
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
      mobileCategoryList,
      mobileListLatest
    },
    // Re-generate the post at most once per second
    // if a request comes in
    revalidate: 1
  };
}
/* harmony default export */ __webpack_exports__["default"] = (Index);

/***/ }),

/***/ "./styles/footer.module.css":
/*!**********************************!*\
  !*** ./styles/footer.module.css ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

// Exports
module.exports = {
	"social_icons_class": "footer_social_icons_class__3zKhk",
	"footer_headers": "footer_footer_headers__2J47d",
	"footer_list_items": "footer_footer_list_items__c76Hg",
	"copyright_section": "footer_copyright_section__zShjE"
};


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
	"news_title_right_top_medium_screent": "homePage_news_title_right_top_medium_screent__1TXMX",
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
	"load_more_button": "homePage_load_more_button__4AOsq"
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

/***/ "nprogress":
/*!****************************!*\
  !*** external "nprogress" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("nprogress");

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

/***/ }),

/***/ "reactstrap":
/*!*****************************!*\
  !*** external "reactstrap" ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("reactstrap");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiIiwid2VicGFjazovLy8uL2FjdGlvbnMvYXV0aC5hY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy9tb2JpbGUuYWN0aW9uLmpzIiwid2VicGFjazovLy8uL2FjdGlvbnMvbW9iaWxlQ2F0ZWdvcnkuYWN0aW9uLmpzIiwid2VicGFjazovLy8uL2FjdGlvbnMvbmV3cy5hY3Rpb24uanMiLCJ3ZWJwYWNrOi8vLy4vYWN0aW9ucy9yZXZpZXcuYWN0aW9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvRm9vdGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyQ29tcG9uZW50cy9CYWNrZHJvcC5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlckNvbXBvbmVudHMvSGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyQ29tcG9uZW50cy9MYXJnZVNjcmVlblNlYXJjaEJhci5qcyIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL0hlYWRlckNvbXBvbmVudHMvTW9iaWxlU2VhcmNoQmFyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyQ29tcG9uZW50cy9TaWRlRHJhd2VyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyQ29tcG9uZW50cy9TaWRlRHJhd2VyQnV0dG9uLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvSGVhZGVyQ29tcG9uZW50cy9Vc2VySGVhZGVyLmpzIiwid2VicGFjazovLy8uL2NvbXBvbmVudHMvTGF5b3V0LmpzIiwid2VicGFjazovLy8uL2NvbmZpZy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy9pbnRlcm9wUmVxdWlyZURlZmF1bHQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvaW50ZXJvcFJlcXVpcmVXaWxkY2FyZC5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGJhYmVsL3J1bnRpbWUvaGVscGVycy90eXBlb2YuanMiLCJ3ZWJwYWNrOi8vLy4uLy4uL2NsaWVudC9saW5rLnRzeCIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L25vcm1hbGl6ZS10cmFpbGluZy1zbGFzaC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3JvdXRlci50cyIsIndlYnBhY2s6Ly8vLi4vLi4vY2xpZW50L3dpdGgtcm91dGVyLnRzeCIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L2NvbXBpbGVkL3BhdGgtdG8tcmVnZXhwL2luZGV4LmpzIiwid2VicGFjazovLy8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvbWl0dC50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvZXNjYXBlLXBhdGgtZGVsaW1pdGVycy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9mb3JtYXQtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL2lzLWR5bmFtaWMudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcGFyc2UtcmVsYXRpdmUtdXJsLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3BhdGgtbWF0Y2gudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcHJlcGFyZS1kZXN0aW5hdGlvbi50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9xdWVyeXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi4vLi4vLi4vLi4vLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci91dGlscy9yZXNvbHZlLXJld3JpdGVzLnRzIiwid2VicGFjazovLy8uLi8uLi8uLi8uLi8uLi9uZXh0LXNlcnZlci9saWIvcm91dGVyL3V0aWxzL3JvdXRlLW1hdGNoZXIudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi9yb3V0ZXIvdXRpbHMvcm91dGUtcmVnZXgudHMiLCJ3ZWJwYWNrOi8vLy4uLy4uLy4uL25leHQtc2VydmVyL2xpYi91dGlscy50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbmV4dC9kaXN0L25leHQtc2VydmVyL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL25leHQvbGluay5qcyIsIndlYnBhY2s6Ly8vLi9wYWdlcy9pbmRleC5qcyIsIndlYnBhY2s6Ly8vLi9zdHlsZXMvZm9vdGVyLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vLy4vc3R5bGVzL2hvbWVQYWdlLm1vZHVsZS5jc3MiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiaXNvbW9ycGhpYy1mZXRjaFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcImpzLWNvb2tpZVwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm1vbWVudFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcIm5leHQvY29uZmlnXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9oZWFkXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwibmV4dC9yb3V0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJucHJvZ3Jlc3NcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJxdWVyeS1zdHJpbmdcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWljb25zL2ZhXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtaWNvbnMvZmlcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC1pY29ucy9tZFwiIiwid2VicGFjazovLy9leHRlcm5hbCBcInJlYWN0LWlzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3QtcmVuZGVyLWh0bWxcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdC9qc3gtZGV2LXJ1bnRpbWVcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJyZWFjdHN0cmFwXCIiXSwibmFtZXMiOlsiaGFuZGxlUmVzcG9uc2UiLCJyZXNwb25zZSIsInN0YXR1cyIsInNpZ25vdXQiLCJSb3V0ZXIiLCJwdXNoIiwicGF0aG5hbWUiLCJxdWVyeSIsIm1lc3NhZ2UiLCJwcmVTaWdudXAiLCJ1c2VyIiwidG9rZW4iLCJmZXRjaCIsIkFQSSIsIm1ldGhvZCIsImhlYWRlcnMiLCJBY2NlcHQiLCJBdXRob3JpemF0aW9uIiwiYm9keSIsIkpTT04iLCJzdHJpbmdpZnkiLCJ0aGVuIiwianNvbiIsImNhdGNoIiwiZXJyIiwiY29uc29sZSIsImxvZyIsInNpZ251cCIsInNpZ25pbiIsIm5leHQiLCJyZW1vdmVDb29raWUiLCJyZW1vdmVMb2NhbFN0b3JhZ2UiLCJzZXRDb29raWUiLCJrZXkiLCJ2YWx1ZSIsImdldENvb2tpZSIsInNldExvY2FsU3RvcmFnZSIsImF1dGhlbnRpY2F0ZSIsImRhdGEiLCJpc0F1dGgiLCJ1cGRhdGVVc2VyIiwiZm9yZ290UGFzc3dvcmQiLCJlbWFpbCIsInJlc2V0UGFzc3dvcmQiLCJyZXNldEluZm8iLCJjcmVhdGVNb2JpbGUiLCJtb2JpbGUiLCJtb2JpbGVMaXN0UHJpdmF0ZSIsIm1vYmlsZUxpc3RQdWJsaWMiLCJtb2JpbGVMaXN0UHVibGljUmVsZXZlbnRCcmFuZHMiLCJpZCIsIm1vYmlsZUxpc3RQdWJsaWNOZXdzUmV2aWV3cyIsInNpbmdsZU1vYmlsZSIsInNsdWciLCJsaXN0UmVsYXRlZCIsImJsb2ciLCJsaXN0UmVsYXRlZE5ld3MiLCJsaXN0UmVsYXRlZFJldmlld3MiLCJyZW1vdmVNb2JpbGUiLCJ1cGRhdGVNb2JpbGUiLCJhcHByb3ZlTW9iaWxlIiwidW5QdWJsaXNoTW9iaWxlIiwibGlzdFNlYXJjaEFkbWluIiwicGFyYW1zIiwicXVlcnlTdHJpbmciLCJsaXN0U2VhcmNoVXNlciIsImNyZWF0ZU1DYXRlZ29yeSIsIm1DYXRlZ29yeSIsIm1DYXRlZ29yeUxpc3QiLCJtQ2F0ZWdvcnlMaXN0SG9tZVBhZ2UiLCJzaW5nbGVNQ2F0ZWdvcnkiLCJyZW1vdmVNQ2F0ZWdvcnkiLCJ1cGRhdGVNQ2F0ZWdvcnkiLCJjcmVhdGVOZXdzIiwibmV3cyIsIm5ld3NMaXN0UHJpdmF0ZSIsIm5ld3NMaXN0UHVibGljIiwibmV3c0xpc3RQdWJsaWNMaW1pdEZpcnN0U2VjdGlvbiIsIm5ld3NMaXN0UHVibGljTGltaXRTZWNvbmRTZWN0aW9uIiwibmV3c0xpc3RQdWJsaWNMaW1pdEZpbmFsU2VjdGlvbiIsInNraXAiLCJsaW1pdCIsIm5ld3NQdWJsaWNMYXRlc3QiLCJuZXdzUHVibGljU2Vjb25kTGF0ZXN0IiwibmV3c0xpc3RQdWJsaWNUb3BTdG9yaWVzIiwibmV3c0xpc3RQdWJsaWNNb2JpbGVSZXZpZXdzIiwibmV3c0xpc3RNb2RlcmF0b3JQcml2YXRlIiwibmV3c0xpc3RNb2RlcmF0b3JQdWJsaWMiLCJzaW5nbGVOZXdzIiwibGlzdFJlbGF0ZWRNb2JpbGVzIiwicmVtb3ZlTmV3cyIsInVwZGF0ZU5ld3MiLCJhcHByb3ZlTmV3cyIsInVuUHVibGlzaE5ld3MiLCJsaXN0U2VhcmNoTW9kZXJhdG9yIiwiY3JlYXRlUmV2aWV3IiwicmV2aWV3IiwicmV2aWV3TGlzdFByaXZhdGUiLCJyZXZpZXdMaXN0UHVibGljIiwicmV2aWV3UHVibGljTGF0ZXN0IiwicmV2aWV3UHVibGljU2Vjb25kTGF0ZXN0IiwicmV2aWV3UHVibGljRWlnaHRMYXRlc3QiLCJyZXZpZXdMaXN0UHVibGljTW9iaWxlTmV3cyIsInJldmlld0xpc3RQdWJsaWNMaW1pdGVkU2VjdGlvbk9uZSIsInJldmlld0xpc3RQdWJsaWNMaW1pdGVkU2VjdGlvblR3byIsInJldmlld0xpc3RNb2RlcmF0b3JQcml2YXRlIiwicmV2aWV3TGlzdE1vZGVyYXRvclB1YmxpYyIsInNpbmdsZVJldmlldyIsInJlbW92ZVJldmlldyIsInVwZGF0ZVJldmlldyIsImFwcHJvdmVSZXZpZXciLCJ1blB1Ymxpc2hSZXZpZXciLCJGb290ZXJDb21wb25lbnQiLCJiYWNrZ3JvdW5kIiwicGFkZGluZ0xlZnQiLCJwYWRkaW5nUmlnaHQiLCJtYXJnaW5SaWdodCIsIm1hcmdpbkxlZnQiLCJtYXJnaW5Cb3R0b20iLCJ3aWR0aCIsInRleHRBbGlnbiIsImRpc3BsYXkiLCJmbGV4RGlyZWN0aW9uIiwiY3Vyc29yIiwic3R5bGVzIiwiZm9vdGVyX2xpc3RfaXRlbXMiLCJmb290ZXJfaGVhZGVycyIsInNvY2lhbF9pY29uc19jbGFzcyIsInBhZGRpbmdCb3R0b20iLCJsaXN0U3R5bGUiLCJqdXN0aWZ5Q29udGVudCIsImJhY2tncm91bmRDb2xvciIsImZsb2F0IiwiY29sb3IiLCJ0ZXh0RGVjb3JhdGlvbiIsImNvcHlyaWdodF9zZWN0aW9uIiwiUkZDXzI4MjIiLCJyZXF1aXJlIiwiYmFja0Ryb3AiLCJwcm9wcyIsImNsaWNrIiwib25Sb3V0ZUNoYW5nZVN0YXJ0IiwidXJsIiwiTlByb2dyZXNzIiwic3RhcnQiLCJvblJvdXRlQ2hhbmdlQ29tcGxldGUiLCJkb25lIiwib25Sb3V0ZUNoYW5nZUVycm9yIiwiSGVhZGVyQ29tcG9uZW50IiwiaXNPcGVuIiwic2V0SXNPcGVuIiwidXNlU3RhdGUiLCJ0b2dnbGUiLCJhZG1pblBhbmVsSGVhZGVyIiwicm9sZSIsIkFQUF9OQU1FIiwibmFtZSIsInJlcGxhY2UiLCJzaWRlRHJhd2VyT3BlbiIsInNldFNpZGVEcmF3ZXJPcGVuIiwibW9iaWxlU2VhcmNoQnRuIiwic2V0TW9iaWxlU2VhcmNoQnRuIiwibGFyZ2VTY3JlZW5TZWFyY2hCdG4iLCJzZXRMYXJnZVNjcmVlblNlYXJjaEJ0biIsImRyYXdlclRvZ2dsZUNsaWNrSGFuZGxlciIsInByZXZTdGF0ZSIsIm1vYmlsZVNlYXJjaFRvZ2dsZUNsaWNrSGFuZGxlciIsIm1vYmlsZVNlYXJjaFRvZ2dsZUNsaWNrQ2xvc2UiLCJsYXJnZVNjcmVlblNlYXJjaFRvZ2dsZUNsaWNrSGFuZGxlciIsImxhcmdlU2NyZWVuU2VhcmNoVG9nZ2xlQ2xpY2tDbG9zZSIsImJhY2tkcm9wQ2xpY2tIYW5kbGVyIiwiYmFja2Ryb3BUZW1wIiwibW9iaWxlU2VhcmNoQnV0dG9uIiwiZHJhd2VyQ2xhc3NlcyIsInNob3ciLCJ2YWx1ZXMiLCJzZXRWYWx1ZXMiLCJzZWFyY2hLZXkiLCJoYW5kbGVDaGFuZ2UiLCJlIiwidGFyZ2V0IiwiY2xpY2tTdWJtaXQiLCJwcmV2ZW50RGVmYXVsdCIsIm9wYWNpdHkiLCJoZWlnaHQiLCJsZWZ0IiwibWFyZ2luIiwicGFkZGluZyIsImJvcmRlciIsImJvcmRlclJhZGl1cyIsImJveFNoYWRvdyIsImZvbnRTaXplIiwidGl0bGUiLCJzaWRlRHJhd2VyIiwiRE9NQUlOIiwiZHJhd2VyVG9nZ2xlQnV0dG9uIiwiY2xvc2UiLCJjbG9zZUZ1bmN0aW9uIiwidXNlck5hdmJhciIsImxhcmdlU2NyZWVuQWN0aXZlQnRuIiwibGFyZ2VTY3JlZW5DbG9zZUZ1bmN0aW9uIiwibGFyZ2VTY3JlZW5TZWFyY2hIYW5kbGVyIiwiYnRuQWN0aXZlIiwibW9iaWxlU2VhcmNoSGFubGRlciIsImRyYXdlckNsaWNrSGFuZGxlciIsIkxheW91dCIsImNoaWxkcmVuIiwicHVibGljUnVudGltZUNvbmZpZyIsImdldENvbmZpZyIsIlBST0RVQ1RJT04iLCJBUElfUFJPRFVDVElPTiIsIkFQSV9ERVZFTE9QTUVOVCIsIkRPTUFJTl9QUk9EVUNUSU9OIiwiRE9NQUlOX0RFVkVMT1BNRU5UIiwiRkJfQVBQX0lEIiwiRElTUVVTX1NIT1JUTkFNRSIsIlRJTllNQ19BUFBfSUQiLCJsaXN0ZW5lcnMiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsIndpbmRvdyIsInByZWZldGNoZWQiLCJjYWNoZWRPYnNlcnZlciIsImVudHJpZXMiLCJlbnRyeSIsImNiIiwicm9vdE1hcmdpbiIsImxpc3RlblRvSW50ZXJzZWN0aW9ucyIsIm9ic2VydmVyIiwiZ2V0T2JzZXJ2ZXIiLCJyb3V0ZXIiLCJocmVmIiwiZXZlbnQiLCJub2RlTmFtZSIsImlzTW9kaWZpZWRFdmVudCIsInNjcm9sbCIsImFzIiwic3VjY2VzcyIsImRvY3VtZW50IiwiYXJncyIsImV4cGVjdGVkIiwiYWN0dWFsIiwicmVxdWlyZWRQcm9wc0d1YXJkIiwicmVxdWlyZWRQcm9wcyIsIk9iamVjdCIsImNyZWF0ZVByb3BFcnJvciIsIl8iLCJvcHRpb25hbFByb3BzR3VhcmQiLCJzaGFsbG93IiwicGFzc0hyZWYiLCJwcmVmZXRjaCIsImxvY2FsZSIsIm9wdGlvbmFsUHJvcHMiLCJ2YWxUeXBlIiwiaGFzV2FybmVkIiwiUmVhY3QiLCJwIiwicmVzb2x2ZWRBcyIsImNoaWxkIiwiQ2hpbGRyZW4iLCJjaGlsZFJlZiIsImNsZWFudXAiLCJzZXRSZWYiLCJlbCIsImlzUHJlZmV0Y2hlZCIsImNoaWxkUHJvcHMiLCJyZWYiLCJvbkNsaWNrIiwibGlua0NsaWNrZWQiLCJwcmlvcml0eSIsIkxpbmsiLCJwYXRoIiwibm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2giLCJwcm9jZXNzIiwic2luZ2xldG9uUm91dGVyIiwicmVhZHlDYWxsYmFja3MiLCJyZWFkeSIsInVybFByb3BlcnR5RmllbGRzIiwicm91dGVyRXZlbnRzIiwiY29yZU1ldGhvZEZpZWxkcyIsImdldCIsImZpZWxkIiwiZ2V0Um91dGVyIiwiZXZlbnRGaWVsZCIsIl9zaW5nbGV0b25Sb3V0ZXIiLCJzdGFjayIsIlJvdXRlckNvbnRleHQiLCJjcmVhdGVSb3V0ZXIiLCJfcm91dGVyIiwiaW5zdGFuY2UiLCJBcnJheSIsIkNvbXBvc2VkQ29tcG9uZW50IiwiZ2V0SW5pdGlhbFByb3BzIiwiV2l0aFJvdXRlcldyYXBwZXIiLCJhbGwiLCJvbiIsIm9mZiIsImVtaXQiLCJoYW5kbGVyIiwiYmFzZVBhdGgiLCJjYW5jZWxsZWQiLCJwcmVmaXgiLCJhZGRQYXRoUHJlZml4IiwibG9jYXRpb25PcmlnaW4iLCJyZXNvbHZlZCIsImhhc0Jhc2VQYXRoIiwiaW50ZXJwb2xhdGVkUm91dGUiLCJkeW5hbWljUmVnZXgiLCJkeW5hbWljR3JvdXBzIiwiZHluYW1pY01hdGNoZXMiLCJhc1BhdGhuYW1lIiwicGFyYW0iLCJyZXBsYWNlZCIsInJlcGVhdCIsIm9wdGlvbmFsIiwiZXNjYXBlUGF0aERlbGltaXRlcnMiLCJyZXN1bHQiLCJmaWx0ZXJlZFF1ZXJ5IiwiYmFzZSIsInVybEFzU3RyaW5nIiwiZmluYWxVcmwiLCJpbnRlcnBvbGF0ZWRBcyIsImludGVycG9sYXRlQXMiLCJoYXNoIiwib21pdFBhcm1zRnJvbVF1ZXJ5IiwicmVzb2x2ZWRIcmVmIiwicmVzb2x2ZUFzIiwiUEFHRV9MT0FEX0VSUk9SIiwiU3ltYm9sIiwiYWRkQmFzZVBhdGgiLCJyZXNvbHZlSHJlZiIsIm1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uIiwiU1NHX0RBVEFfTk9UX0ZPVU5EX0VSUk9SIiwiY3JlZGVudGlhbHMiLCJyZXMiLCJhdHRlbXB0cyIsImZldGNoUmV0cnkiLCJpc1NlcnZlclJlbmRlciIsIm1hcmtMb2FkaW5nRXJyb3IiLCJjb25zdHJ1Y3RvciIsInJvdXRlIiwiYXNQYXRoIiwiY29tcG9uZW50cyIsInNkYyIsInN1YiIsImNsYyIsInBhZ2VMb2FkZXIiLCJfYnBzIiwiZXZlbnRzIiwiX3dyYXBBcHAiLCJpc1NzciIsImlzRmFsbGJhY2siLCJfaW5GbGlnaHRSb3V0ZSIsIl9zaGFsbG93IiwibG9jYWxlcyIsImRlZmF1bHRMb2NhbGUiLCJzdGF0ZSIsIm9wdGlvbnMiLCJzdHlsZVNoZWV0cyIsIl9fTl9TU0ciLCJpbml0aWFsUHJvcHMiLCJfX05fU1NQIiwiQ29tcG9uZW50IiwiX19ORVhUX0RBVEFfXyIsInJlbG9hZCIsImJhY2siLCJwcmVwYXJlVXJsQXMiLCJpc0xvY2FsVVJMIiwiU1QiLCJwZXJmb3JtYW5jZSIsImFkZExvY2FsZSIsImNsZWFuZWRBcyIsImRlbExvY2FsZSIsImRlbEJhc2VQYXRoIiwicGFnZXMiLCJfX3Jld3JpdGVzIiwicGFyc2VkIiwicG90ZW50aWFsSHJlZiIsInBhcnNlZEFzIiwicm91dGVSZWdleCIsInJvdXRlTWF0Y2giLCJzaG91bGRJbnRlcnBvbGF0ZSIsIm1pc3NpbmdQYXJhbXMiLCJyb3V0ZUluZm8iLCJkZXN0aW5hdGlvbiIsInBhcnNlZEhyZWYiLCJhcHBDb21wIiwiZXJyb3IiLCJjaGFuZ2VTdGF0ZSIsIl9fTiIsImJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IiLCJzc2c0MDQiLCJwYWdlIiwibW9kIiwiY2FjaGVkUm91dGVJbmZvIiwiaXNWYWxpZEVsZW1lbnRUeXBlIiwiZGF0YUhyZWYiLCJzZXQiLCJiZWZvcmVQb3BTdGF0ZSIsIm9ubHlBSGFzaENoYW5nZSIsIm5ld0hhc2giLCJvbGRVcmxOb0hhc2giLCJvbGRIYXNoIiwic2Nyb2xsVG9IYXNoIiwiaWRFbCIsIm5hbWVFbCIsInVybElzTmV3IiwiX3Jlc29sdmVIcmVmIiwiYXBwbHlCYXNlUGF0aCIsImNsZWFuUGF0aG5hbWUiLCJQcm9taXNlIiwiY2FuY2VsIiwiY29tcG9uZW50UmVzdWx0IiwiX2dldERhdGEiLCJmbiIsIl9nZXRTdGF0aWNEYXRhIiwiZmV0Y2hOZXh0RGF0YSIsIl9nZXRTZXJ2ZXJEYXRhIiwiQXBwVHJlZSIsImN0eCIsImFib3J0Q29tcG9uZW50TG9hZCIsIm5vdGlmeSIsInNlZ21lbnQiLCJjaGFyIiwiZW5jb2RlVVJJQ29tcG9uZW50Iiwic2xhc2hlZFByb3RvY29scyIsInByb3RvY29sIiwidXJsT2JqIiwiaG9zdCIsImF1dGgiLCJob3N0bmFtZSIsIlN0cmluZyIsInF1ZXJ5c3RyaW5nIiwic2VhcmNoIiwiVEVTVF9ST1VURSIsIkRVTU1ZX0JBU0UiLCJyZXNvbHZlZEJhc2UiLCJvcmlnaW4iLCJtYXRjaGVyT3B0aW9ucyIsInNlbnNpdGl2ZSIsImRlbGltaXRlciIsImN1c3RvbVJvdXRlTWF0Y2hlck9wdGlvbnMiLCJzdHJpY3QiLCJjdXN0b21Sb3V0ZSIsImtleXMiLCJtYXRjaGVyUmVnZXgiLCJwYXRoVG9SZWdleHAiLCJtYXRjaGVyIiwicGFyc2VkRGVzdGluYXRpb24iLCJkZXN0UXVlcnkiLCJkZXN0UGF0aCIsImRlc3RQYXRoUGFyYW1LZXlzIiwiZGVzdFBhdGhQYXJhbXMiLCJkZXN0aW5hdGlvbkNvbXBpbGVyIiwidmFsaWRhdGUiLCJzdHJPckFycmF5IiwicXVlcnlDb21waWxlciIsInBhcmFtS2V5cyIsImFwcGVuZFBhcmFtc1RvUXVlcnkiLCJzaG91bGRBZGRCYXNlUGF0aCIsIm5ld1VybCIsInNlYXJjaFBhcmFtcyIsImlzTmFOIiwiaXRlbSIsInN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0iLCJzZWFyY2hQYXJhbXNMaXN0IiwiY3VzdG9tUm91dGVNYXRjaGVyIiwicmV3cml0ZSIsImRlc3RSZXMiLCJyZSIsImRlY29kZSIsImRlY29kZVVSSUNvbXBvbmVudCIsInNsdWdOYW1lIiwiZyIsImdyb3VwcyIsIm0iLCJzdHIiLCJzZWdtZW50cyIsIm5vcm1hbGl6ZWRSb3V0ZSIsImdyb3VwSW5kZXgiLCJwYXJhbWV0ZXJpemVkUm91dGUiLCJwYXJzZVBhcmFtZXRlciIsInBvcyIsImVzY2FwZVJlZ2V4Iiwicm91dGVLZXlDaGFyQ29kZSIsInJvdXRlS2V5Q2hhckxlbmd0aCIsImdldFNhZmVSb3V0ZUtleSIsInJvdXRlS2V5IiwiaSIsInJvdXRlS2V5cyIsIm5hbWVkUGFyYW1ldGVyaXplZFJvdXRlIiwiY2xlYW5lZEtleSIsImludmFsaWRLZXkiLCJwYXJzZUludCIsIm5hbWVkUmVnZXgiLCJ1c2VkIiwicG9ydCIsImdldExvY2F0aW9uT3JpZ2luIiwiQXBwIiwiZ2V0RGlzcGxheU5hbWUiLCJwYWdlUHJvcHMiLCJsb2FkR2V0SW5pdGlhbFByb3BzIiwiaXNSZXNTZW50IiwidXJsT2JqZWN0S2V5cyIsIlNQIiwiSW5kZXgiLCJsYXRlc3ROZXdzIiwic2Vjb25kTGF0ZXN0TmV3cyIsImxhdGVzdFJldmlldyIsInNlY29uZExhdGVzdFJldmlldyIsImVpZ2h0TGF0ZXN0UmV2aWV3IiwibmV3c0xpbWl0Rmlyc3RTZWN0aW9uIiwibmV3c0xpbWl0U2Vjb25kU2VjdGlvbiIsIm5ld3NMaW1pdEZpbmFsU2VjdGlvbiIsImxpbWl0ZWRSZXZpZXdzU2VjdGlvbk9uZSIsImxpbWl0ZWRSZXZpZXdzU2VjdGlvblR3byIsInJldmlld0xpc3RMYXRlc3QiLCJtb2JpbGVDYXRlZ29yeUxpc3QiLCJtb2JpbGVMaXN0TGF0ZXN0IiwiaGVhZCIsInNob3dIaWdobGlnaHQiLCJwb3N0ZWRCeSIsInVzZXJuYW1lIiwibW9tZW50IiwidXBkYXRlZEF0IiwiZnJvbU5vdyIsInNob3dIaWdobGlnaHRNZWRpdW1TY3JlZW4iLCJzbWFsbFNjcmVlbkhpZ2hsaWdodCIsIm5ld3NMaW1pdCIsIm5ld3NTa2lwIiwic2V0TGltaXQiLCJzZXRTa2lwIiwibmV3c1NpemUiLCJzZXROZXdzU2l6ZSIsImxlbmd0aCIsImxvYWRlZE5ld3MiLCJzZXRMb2FkZWROZXdzIiwibG9hZE1vcmUiLCJ0b1NraXAiLCJsb2FkTW9yZUJ1dHRvbiIsInNob3dTaWRlQmFyUmV2aWV3cyIsIm1hcCIsInNob3dTaWRlQmFyTW9iaWxlcyIsInNob3dSZXZpZXdCbG9jayIsInNob3dSZXZpZXdzSW5zaWRlUmV2aWV3QmxvY2tMZWZ0Iiwic2hvd1Jldmlld3NJbnNpZGVSZXZpZXdCbG9ja1JpZ2h0Iiwic2hvd05ld3NGaXJzdFNlY3Rpb24iLCJyZW5kZXJIVE1MIiwiZXhjZXJwdCIsInNob3dOZXdzU2Vjb25kU2VjdGlvbiIsInNob3dOZXdzRmluYWxTZWN0aW9uIiwic2hvd05ld3NGaW5hbFNlY3Rpb25Mb2FkZWROZXdzIiwibWFyZ2luVG9wIiwicGFkZGluZ1RvcCIsImxpbmVIZWlnaHQiLCJ0ZXh0VHJhbnNmb3JtIiwiZm9udFdlaWdodCIsImdldFN0YXRpY1Byb3BzIiwicmV2YWxpZGF0ZSJdLCJtYXBwaW5ncyI6Ijs7UUFBQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBLElBQUk7UUFDSjtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBOzs7UUFHQTtRQUNBOztRQUVBO1FBQ0E7O1FBRUE7UUFDQTtRQUNBO1FBQ0EsMENBQTBDLGdDQUFnQztRQUMxRTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBLHdEQUF3RCxrQkFBa0I7UUFDMUU7UUFDQSxpREFBaUQsY0FBYztRQUMvRDs7UUFFQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0EseUNBQXlDLGlDQUFpQztRQUMxRSxnSEFBZ0gsbUJBQW1CLEVBQUU7UUFDckk7UUFDQTs7UUFFQTtRQUNBO1FBQ0E7UUFDQSwyQkFBMkIsMEJBQTBCLEVBQUU7UUFDdkQsaUNBQWlDLGVBQWU7UUFDaEQ7UUFDQTtRQUNBOztRQUVBO1FBQ0Esc0RBQXNELCtEQUErRDs7UUFFckg7UUFDQTs7O1FBR0E7UUFDQTs7Ozs7Ozs7Ozs7O0FDeEZBLHdFOzs7Ozs7Ozs7Ozs7QUNBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ08sTUFBTUEsY0FBYyxHQUFJQyxRQUFELElBQWM7QUFDeEMsTUFBSUEsUUFBUSxDQUFDQyxNQUFULEtBQW9CLEdBQXhCLEVBQTZCO0FBQ3pCQyxXQUFPLENBQUMsTUFBTTtBQUNWQyx3REFBTSxDQUFDQyxJQUFQLENBQVk7QUFDUkMsZ0JBQVEsRUFBRSwwQkFERjtBQUVSQyxhQUFLLEVBQUU7QUFDSEMsaUJBQU8sRUFBRTtBQUROO0FBRkMsT0FBWjtBQU1ILEtBUE0sQ0FBUDtBQVNILEdBVkQsTUFVTztBQUNIO0FBQ0g7QUFDSixDQWRNO0FBZ0JBLE1BQU1DLFNBQVMsR0FBRyxDQUFDQyxJQUFELEVBQU9DLEtBQVAsS0FBaUI7QUFDdEMsU0FBT0MsdURBQUssQ0FBRSxHQUFFQywyQ0FBSSxTQUFSLEVBQWtCO0FBQzFCQyxVQUFNLEVBQUUsTUFEa0I7QUFFMUJDLFdBQU8sRUFBRTtBQUNMQyxZQUFNLEVBQUUsa0JBREg7QUFFTCxzQkFBZ0Isa0JBRlg7QUFHTEMsbUJBQWEsRUFBRyxVQUFTTixLQUFNO0FBSDFCLEtBRmlCO0FBTzFCTyxRQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlVixJQUFmO0FBUG9CLEdBQWxCLENBQUwsQ0FTRlcsSUFURSxDQVNHcEIsUUFBUSxJQUFJO0FBQ2RELGtCQUFjLENBQUNDLFFBQUQsQ0FBZDtBQUNBLFdBQU9BLFFBQVEsQ0FBQ3FCLElBQVQsRUFBUDtBQUNILEdBWkUsRUFhRkMsS0FiRSxDQWFJQyxHQUFHLElBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBYlgsQ0FBUDtBQWNILENBZk07QUFpQkEsTUFBTUcsTUFBTSxHQUFJakIsSUFBRCxJQUFVO0FBQzVCLFNBQU9FLHVEQUFLLENBQUUsR0FBRUMsMkNBQUksZ0JBQVIsRUFBeUI7QUFDakNDLFVBQU0sRUFBRSxNQUR5QjtBQUVqQ0MsV0FBTyxFQUFFO0FBQ0xDLFlBQU0sRUFBRSxrQkFESDtBQUVMLHNCQUFnQjtBQUZYLEtBRndCO0FBTWpDRSxRQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlVixJQUFmO0FBTjJCLEdBQXpCLENBQUwsQ0FRRlcsSUFSRSxDQVFHcEIsUUFBUSxJQUFJO0FBQ2QsV0FBT0EsUUFBUSxDQUFDcUIsSUFBVCxFQUFQO0FBQ0gsR0FWRSxFQVdGQyxLQVhFLENBV0lDLEdBQUcsSUFBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FYWCxDQUFQO0FBWUgsQ0FiTTtBQWVBLE1BQU1JLE1BQU0sR0FBSWxCLElBQUQsSUFBVTtBQUM1QixTQUFPRSx1REFBSyxDQUFFLEdBQUVDLDJDQUFJLFNBQVIsRUFBa0I7QUFDMUJDLFVBQU0sRUFBRSxNQURrQjtBQUUxQkMsV0FBTyxFQUFFO0FBQ0xDLFlBQU0sRUFBRSxrQkFESDtBQUVMLHNCQUFnQjtBQUZYLEtBRmlCO0FBTTFCRSxRQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlVixJQUFmO0FBTm9CLEdBQWxCLENBQUwsQ0FRRlcsSUFSRSxDQVFHcEIsUUFBUSxJQUFJO0FBQ2QsV0FBT0EsUUFBUSxDQUFDcUIsSUFBVCxFQUFQO0FBQ0gsR0FWRSxFQVdGQyxLQVhFLENBV0lDLEdBQUcsSUFBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FYWCxDQUFQO0FBWUgsQ0FiTTtBQWVBLE1BQU1yQixPQUFPLEdBQUkwQixJQUFELElBQVU7QUFDN0JDLGNBQVksQ0FBQyxPQUFELENBQVo7QUFDQUMsb0JBQWtCLENBQUMsTUFBRCxDQUFsQjtBQUNBRixNQUFJO0FBQ0osU0FBT2pCLHVEQUFLLENBQUUsR0FBRUMsMkNBQUksVUFBUixFQUFtQjtBQUMzQkMsVUFBTSxFQUFFO0FBRG1CLEdBQW5CLENBQUwsQ0FHRk8sSUFIRSxDQUdHcEIsUUFBUSxJQUFJO0FBQ2R3QixXQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWjtBQUNILEdBTEUsRUFNRkgsS0FORSxDQU1JQyxHQUFHLElBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBTlgsQ0FBUDtBQU9ILENBWE0sQyxDQWFQOztBQUNPLE1BQU1RLFNBQVMsR0FBRyxDQUFDQyxHQUFELEVBQU1DLEtBQU4sS0FBZ0I7QUFDckMsYUFBcUIsRUFJcEI7QUFDSixDQU5NO0FBUUEsTUFBTUosWUFBWSxHQUFJRyxHQUFELElBQVM7QUFDakMsYUFBcUIsRUFJcEI7QUFDSixDQU5NLEMsQ0FPUDs7QUFDTyxNQUFNRSxTQUFTLEdBQUlGLEdBQUQsSUFBUztBQUM5QixhQUFxQixFQUVwQjtBQUNKLENBSk0sQyxDQU1QOztBQUNPLE1BQU1HLGVBQWUsR0FBRyxDQUFDSCxHQUFELEVBQU1DLEtBQU4sS0FBZ0I7QUFDM0MsYUFBcUIsRUFFcEI7QUFDSixDQUpNO0FBTUEsTUFBTUgsa0JBQWtCLEdBQUlFLEdBQUQsSUFBUztBQUN2QyxhQUFxQixFQUVwQjtBQUNKLENBSk0sQyxDQU1QOztBQUNPLE1BQU1JLFlBQVksR0FBRyxDQUFDQyxJQUFELEVBQU9ULElBQVAsS0FBZ0I7QUFDeENHLFdBQVMsQ0FBQyxPQUFELEVBQVVNLElBQUksQ0FBQzNCLEtBQWYsQ0FBVDtBQUNBeUIsaUJBQWUsQ0FBQyxNQUFELEVBQVNFLElBQUksQ0FBQzVCLElBQWQsQ0FBZjtBQUNBbUIsTUFBSTtBQUNQLENBSk07QUFNQSxNQUFNVSxNQUFNLEdBQUcsTUFBTTtBQUN4QixhQUFxQixFQVNwQjtBQUNKLENBWE07QUFjQSxNQUFNQyxVQUFVLEdBQUcsQ0FBQzlCLElBQUQsRUFBT21CLElBQVAsS0FBZ0I7QUFDdEMsYUFBcUIsRUFPcEI7QUFDSixDQVRNO0FBV0EsTUFBTVksY0FBYyxHQUFJQyxLQUFELElBQVc7QUFDckMsU0FBTzlCLHVEQUFLLENBQUUsR0FBRUMsMkNBQUksa0JBQVIsRUFBMkI7QUFDbkNDLFVBQU0sRUFBRSxLQUQyQjtBQUVuQ0MsV0FBTyxFQUFFO0FBQ0xDLFlBQU0sRUFBRSxrQkFESDtBQUVMLHNCQUFnQjtBQUZYLEtBRjBCO0FBTW5DRSxRQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlc0IsS0FBZjtBQU42QixHQUEzQixDQUFMLENBUUZyQixJQVJFLENBUUdwQixRQUFRLElBQUk7QUFDZCxXQUFPQSxRQUFRLENBQUNxQixJQUFULEVBQVA7QUFDSCxHQVZFLEVBV0ZDLEtBWEUsQ0FXSUMsR0FBRyxJQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQVhYLENBQVA7QUFZSCxDQWJNO0FBZUEsTUFBTW1CLGFBQWEsR0FBSUMsU0FBRCxJQUFlO0FBQ3hDLFNBQU9oQyx1REFBSyxDQUFFLEdBQUVDLDJDQUFJLGlCQUFSLEVBQTBCO0FBQ2xDQyxVQUFNLEVBQUUsS0FEMEI7QUFFbENDLFdBQU8sRUFBRTtBQUNMQyxZQUFNLEVBQUUsa0JBREg7QUFFTCxzQkFBZ0I7QUFGWCxLQUZ5QjtBQU1sQ0UsUUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZXdCLFNBQWY7QUFONEIsR0FBMUIsQ0FBTCxDQVFGdkIsSUFSRSxDQVFHcEIsUUFBUSxJQUFJO0FBQ2QsV0FBT0EsUUFBUSxDQUFDcUIsSUFBVCxFQUFQO0FBQ0gsR0FWRSxFQVdGQyxLQVhFLENBV0lDLEdBQUcsSUFBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FYWCxDQUFQO0FBWUgsQ0FiTSxDOzs7Ozs7Ozs7Ozs7QUN2S1A7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUVPLE1BQU1xQixZQUFZLEdBQUcsQ0FBQ0MsTUFBRCxFQUFTbkMsS0FBVCxLQUFtQjtBQUM3QyxTQUFPQyx1REFBSyxDQUFFLEdBQUVDLDJDQUFJLFNBQVIsRUFBa0I7QUFDNUJDLFVBQU0sRUFBRSxNQURvQjtBQUU1QkMsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRSxrQkFERDtBQUVQQyxtQkFBYSxFQUFHLFVBQVNOLEtBQU07QUFGeEIsS0FGbUI7QUFNNUJPLFFBQUksRUFBRTRCO0FBTnNCLEdBQWxCLENBQUwsQ0FRSnpCLElBUkksQ0FRRXBCLFFBQUQsSUFBYztBQUNsQkQsdUVBQWMsQ0FBQ0MsUUFBRCxDQUFkO0FBQ0EsV0FBT0EsUUFBUSxDQUFDcUIsSUFBVCxFQUFQO0FBQ0QsR0FYSSxFQVlKQyxLQVpJLENBWUdDLEdBQUQsSUFBU0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FaWCxDQUFQO0FBYUQsQ0FkTTtBQWdCQSxNQUFNdUIsaUJBQWlCLEdBQUcsTUFBTTtBQUNyQyxTQUFPbkMsdURBQUssQ0FBRSxHQUFFQywyQ0FBSSxzQkFBUixFQUErQjtBQUN6Q0MsVUFBTSxFQUFFO0FBRGlDLEdBQS9CLENBQUwsQ0FHSk8sSUFISSxDQUdFcEIsUUFBRCxJQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQ3FCLElBQVQsRUFBUDtBQUNELEdBTEksRUFNSkMsS0FOSSxDQU1HQyxHQUFELElBQVNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBTlgsQ0FBUDtBQU9ELENBUk07QUFVQSxNQUFNd0IsZ0JBQWdCLEdBQUcsTUFBTTtBQUNwQyxTQUFPcEMsdURBQUssQ0FBRSxHQUFFQywyQ0FBSSxxQkFBUixFQUE4QjtBQUN4Q0MsVUFBTSxFQUFFO0FBRGdDLEdBQTlCLENBQUwsQ0FHSk8sSUFISSxDQUdFcEIsUUFBRCxJQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQ3FCLElBQVQsRUFBUDtBQUNELEdBTEksRUFNSkMsS0FOSSxDQU1HQyxHQUFELElBQVNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBTlgsQ0FBUDtBQU9ELENBUk07QUFVQSxNQUFNeUIsOEJBQThCLEdBQUlDLEVBQUQsSUFBUTtBQUNwRCxTQUFPdEMsdURBQUssQ0FBRSxHQUFFQywyQ0FBSSx1QkFBc0JxQyxFQUFHLEVBQWpDLEVBQW9DO0FBQzlDcEMsVUFBTSxFQUFFO0FBRHNDLEdBQXBDLENBQUwsQ0FHSk8sSUFISSxDQUdFcEIsUUFBRCxJQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQ3FCLElBQVQsRUFBUDtBQUNELEdBTEksRUFNSkMsS0FOSSxDQU1HQyxHQUFELElBQVNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBTlgsQ0FBUDtBQU9ELENBUk07QUFVQSxNQUFNMkIsMkJBQTJCLEdBQUcsTUFBTTtBQUMvQyxTQUFPdkMsdURBQUssQ0FBRSxHQUFFQywyQ0FBSSxzQkFBUixFQUErQjtBQUN6Q0MsVUFBTSxFQUFFO0FBRGlDLEdBQS9CLENBQUwsQ0FHSk8sSUFISSxDQUdFcEIsUUFBRCxJQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQ3FCLElBQVQsRUFBUDtBQUNELEdBTEksRUFNSkMsS0FOSSxDQU1HQyxHQUFELElBQVNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBTlgsQ0FBUDtBQU9ELENBUk07QUFVQSxNQUFNNEIsWUFBWSxHQUFJQyxJQUFELElBQVU7QUFDcEMsU0FBT3pDLHVEQUFLLENBQUUsR0FBRUMsMkNBQUksV0FBVXdDLElBQUssRUFBdkIsRUFBMEI7QUFDcEN2QyxVQUFNLEVBQUU7QUFENEIsR0FBMUIsQ0FBTCxDQUdKTyxJQUhJLENBR0VwQixRQUFELElBQWM7QUFDbEIsV0FBT0EsUUFBUSxDQUFDcUIsSUFBVCxFQUFQO0FBQ0QsR0FMSSxFQU1KQyxLQU5JLENBTUdDLEdBQUQsSUFBU0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FOWCxDQUFQO0FBT0QsQ0FSTTtBQVVBLE1BQU04QixXQUFXLEdBQUlDLElBQUQsSUFBVTtBQUNuQyxTQUFPM0MsdURBQUssQ0FBRSxHQUFFQywyQ0FBSSxpQkFBUixFQUEwQjtBQUNwQ0MsVUFBTSxFQUFFLE1BRDRCO0FBRXBDQyxXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFLGtCQUREO0FBRVAsc0JBQWdCO0FBRlQsS0FGMkI7QUFNcENFLFFBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVtQyxJQUFmO0FBTjhCLEdBQTFCLENBQUwsQ0FRSmxDLElBUkksQ0FRRXBCLFFBQUQsSUFBYztBQUNsQixXQUFPQSxRQUFRLENBQUNxQixJQUFULEVBQVA7QUFDRCxHQVZJLEVBV0pDLEtBWEksQ0FXR0MsR0FBRCxJQUFTQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQVhYLENBQVA7QUFZRCxDQWJNO0FBZUEsTUFBTWdDLGVBQWUsR0FBSUQsSUFBRCxJQUFVO0FBQ3ZDLFNBQU8zQyx1REFBSyxDQUFFLEdBQUVDLDJDQUFJLHNCQUFSLEVBQStCO0FBQ3pDQyxVQUFNLEVBQUUsTUFEaUM7QUFFekNDLFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUUsa0JBREQ7QUFFUCxzQkFBZ0I7QUFGVCxLQUZnQztBQU16Q0UsUUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZW1DLElBQWY7QUFObUMsR0FBL0IsQ0FBTCxDQVFKbEMsSUFSSSxDQVFFcEIsUUFBRCxJQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQ3FCLElBQVQsRUFBUDtBQUNELEdBVkksRUFXSkMsS0FYSSxDQVdHQyxHQUFELElBQVNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBWFgsQ0FBUDtBQVlELENBYk07QUFlQSxNQUFNaUMsa0JBQWtCLEdBQUlGLElBQUQsSUFBVTtBQUMxQyxTQUFPM0MsdURBQUssQ0FBRSxHQUFFQywyQ0FBSSx5QkFBUixFQUFrQztBQUM1Q0MsVUFBTSxFQUFFLE1BRG9DO0FBRTVDQyxXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFLGtCQUREO0FBRVAsc0JBQWdCO0FBRlQsS0FGbUM7QUFNNUNFLFFBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVtQyxJQUFmO0FBTnNDLEdBQWxDLENBQUwsQ0FRSmxDLElBUkksQ0FRRXBCLFFBQUQsSUFBYztBQUNsQixXQUFPQSxRQUFRLENBQUNxQixJQUFULEVBQVA7QUFDRCxHQVZJLEVBV0pDLEtBWEksQ0FXR0MsR0FBRCxJQUFTQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQVhYLENBQVA7QUFZRCxDQWJNO0FBZUEsTUFBTWtDLFlBQVksR0FBRyxDQUFDTCxJQUFELEVBQU8xQyxLQUFQLEtBQWlCO0FBQzNDLFNBQU9DLHVEQUFLLENBQUUsR0FBRUMsMkNBQUksV0FBVXdDLElBQUssRUFBdkIsRUFBMEI7QUFDcEN2QyxVQUFNLEVBQUUsUUFENEI7QUFFcENDLFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUUsa0JBREQ7QUFFUCxzQkFBZ0Isa0JBRlQ7QUFHUEMsbUJBQWEsRUFBRyxVQUFTTixLQUFNO0FBSHhCO0FBRjJCLEdBQTFCLENBQUwsQ0FRSlUsSUFSSSxDQVFFcEIsUUFBRCxJQUFjO0FBQ2xCRCx1RUFBYyxDQUFDQyxRQUFELENBQWQ7QUFDQSxXQUFPQSxRQUFRLENBQUNxQixJQUFULEVBQVA7QUFDRCxHQVhJLEVBWUpDLEtBWkksQ0FZR0MsR0FBRCxJQUFTQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQVpYLENBQVA7QUFhRCxDQWRNO0FBZ0JBLE1BQU1tQyxZQUFZLEdBQUcsQ0FBQ2IsTUFBRCxFQUFTbkMsS0FBVCxFQUFnQjBDLElBQWhCLEtBQXlCO0FBQ25ELFNBQU96Qyx1REFBSyxDQUFFLEdBQUVDLDJDQUFJLFdBQVV3QyxJQUFLLEVBQXZCLEVBQTBCO0FBQ3BDdkMsVUFBTSxFQUFFLEtBRDRCO0FBRXBDQyxXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFLGtCQUREO0FBRVBDLG1CQUFhLEVBQUcsVUFBU04sS0FBTTtBQUZ4QixLQUYyQjtBQU1wQ08sUUFBSSxFQUFFNEI7QUFOOEIsR0FBMUIsQ0FBTCxDQVFKekIsSUFSSSxDQVFFcEIsUUFBRCxJQUFjO0FBQ2xCRCx1RUFBYyxDQUFDQyxRQUFELENBQWQ7QUFDQSxXQUFPQSxRQUFRLENBQUNxQixJQUFULEVBQVA7QUFDRCxHQVhJLEVBWUpDLEtBWkksQ0FZR0MsR0FBRCxJQUFTQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQVpYLENBQVA7QUFhRCxDQWRNO0FBZ0JBLE1BQU1vQyxhQUFhLEdBQUcsQ0FBQ1AsSUFBRCxFQUFPMUMsS0FBUCxLQUFpQjtBQUM1QztBQUVBLFNBQU9DLHVEQUFLLENBQUUsR0FBRUMsMkNBQUksbUJBQWtCd0MsSUFBSyxFQUEvQixFQUFrQztBQUM1Q3ZDLFVBQU0sRUFBRSxLQURvQztBQUU1Q0MsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRSxrQkFERDtBQUVQQyxtQkFBYSxFQUFHLFVBQVNOLEtBQU07QUFGeEI7QUFGbUMsR0FBbEMsQ0FBTCxDQU9KVSxJQVBJLENBT0VwQixRQUFELElBQWM7QUFDbEJELHVFQUFjLENBQUNDLFFBQUQsQ0FBZDtBQUNBLFdBQU9BLFFBQVEsQ0FBQ3FCLElBQVQsRUFBUDtBQUNELEdBVkksRUFXSkMsS0FYSSxDQVdHQyxHQUFELElBQVNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBWFgsQ0FBUDtBQVlELENBZk07QUFpQkEsTUFBTXFDLGVBQWUsR0FBRyxDQUFDUixJQUFELEVBQU8xQyxLQUFQLEtBQWlCO0FBQzlDO0FBRUEsU0FBT0MsdURBQUssQ0FBRSxHQUFFQywyQ0FBSSxzQkFBcUJ3QyxJQUFLLEVBQWxDLEVBQXFDO0FBQy9DdkMsVUFBTSxFQUFFLEtBRHVDO0FBRS9DQyxXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFLGtCQUREO0FBRVBDLG1CQUFhLEVBQUcsVUFBU04sS0FBTTtBQUZ4QjtBQUZzQyxHQUFyQyxDQUFMLENBT0pVLElBUEksQ0FPRXBCLFFBQUQsSUFBYztBQUNsQkQsdUVBQWMsQ0FBQ0MsUUFBRCxDQUFkO0FBQ0EsV0FBT0EsUUFBUSxDQUFDcUIsSUFBVCxFQUFQO0FBQ0QsR0FWSSxFQVdKQyxLQVhJLENBV0dDLEdBQUQsSUFBU0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FYWCxDQUFQO0FBWUQsQ0FmTTtBQWlCQSxNQUFNc0MsZUFBZSxHQUFJQyxNQUFELElBQVk7QUFDekMsTUFBSXhELEtBQUssR0FBR3lELG1EQUFXLENBQUM1QyxTQUFaLENBQXNCMkMsTUFBdEIsQ0FBWjtBQUVBLFNBQU9uRCx1REFBSyxDQUFFLEdBQUVDLDJDQUFJLHlCQUF3Qk4sS0FBTSxFQUF0QyxFQUF5QztBQUNuRE8sVUFBTSxFQUFFO0FBRDJDLEdBQXpDLENBQUwsQ0FHSk8sSUFISSxDQUdFcEIsUUFBRCxJQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQ3FCLElBQVQsRUFBUDtBQUNELEdBTEksRUFNSkMsS0FOSSxDQU1HQyxHQUFELElBQVNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBTlgsQ0FBUDtBQU9ELENBVk07QUFZUDs7QUFDTyxNQUFNeUMsY0FBYyxHQUFJRixNQUFELElBQVk7QUFDeEMsTUFBSXhELEtBQUssR0FBR3lELG1EQUFXLENBQUM1QyxTQUFaLENBQXNCMkMsTUFBdEIsQ0FBWjtBQUVBLFNBQU9uRCx1REFBSyxDQUFFLEdBQUVDLDJDQUFJLDhCQUE2Qk4sS0FBTSxFQUEzQyxFQUE4QztBQUN4RE8sVUFBTSxFQUFFO0FBRGdELEdBQTlDLENBQUwsQ0FHSk8sSUFISSxDQUdFcEIsUUFBRCxJQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQ3FCLElBQVQsRUFBUDtBQUNELEdBTEksRUFNSkMsS0FOSSxDQU1HQyxHQUFELElBQVNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBTlgsQ0FBUDtBQU9ELENBVk0sQzs7Ozs7Ozs7Ozs7O0FDbk1QO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFFTyxNQUFNMEMsZUFBZSxHQUFHLENBQUNDLFNBQUQsRUFBWXhELEtBQVosS0FBc0I7QUFHakQsU0FBT0MsdURBQUssQ0FBRSxHQUFFQywyQ0FBSSxrQkFBUixFQUEyQjtBQUNuQ0MsVUFBTSxFQUFFLE1BRDJCO0FBRW5DQyxXQUFPLEVBQUU7QUFDTEMsWUFBTSxFQUFFLGtCQURIO0FBRUxDLG1CQUFhLEVBQUcsVUFBU04sS0FBTTtBQUYxQixLQUYwQjtBQU1uQ08sUUFBSSxFQUFFaUQ7QUFONkIsR0FBM0IsQ0FBTCxDQVFGOUMsSUFSRSxDQVFHcEIsUUFBUSxJQUFJO0FBQ2RELHVFQUFjLENBQUNDLFFBQUQsQ0FBZDtBQUNBLFdBQU9BLFFBQVEsQ0FBQ3FCLElBQVQsRUFBUDtBQUNILEdBWEUsRUFZRkMsS0FaRSxDQVlJQyxHQUFHLElBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBWlgsQ0FBUDtBQWFILENBaEJNO0FBa0JBLE1BQU00QyxhQUFhLEdBQUcsTUFBTTtBQUMvQixTQUFPeEQsdURBQUssQ0FBRSxHQUFFQywyQ0FBSSxrQkFBUixFQUEyQjtBQUNuQ0MsVUFBTSxFQUFFO0FBRDJCLEdBQTNCLENBQUwsQ0FFSk8sSUFGSSxDQUVDcEIsUUFBUSxJQUFJO0FBQ2hCLFdBQU9BLFFBQVEsQ0FBQ3FCLElBQVQsRUFBUDtBQUNILEdBSk0sRUFJSkMsS0FKSSxDQUlFQyxHQUFHLElBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBSlQsQ0FBUDtBQU1ILENBUE07QUFTQSxNQUFNNkMscUJBQXFCLEdBQUcsTUFBTTtBQUN2QyxTQUFPekQsdURBQUssQ0FBRSxHQUFFQywyQ0FBSSxpQ0FBUixFQUEwQztBQUNsREMsVUFBTSxFQUFFO0FBRDBDLEdBQTFDLENBQUwsQ0FFSk8sSUFGSSxDQUVDcEIsUUFBUSxJQUFJO0FBQ2hCLFdBQU9BLFFBQVEsQ0FBQ3FCLElBQVQsRUFBUDtBQUNILEdBSk0sRUFJSkMsS0FKSSxDQUlFQyxHQUFHLElBQUlDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBSlQsQ0FBUDtBQU1ILENBUE07QUFXQSxNQUFNOEMsZUFBZSxHQUFJakIsSUFBRCxJQUFVO0FBQ3JDLFNBQU96Qyx1REFBSyxDQUFFLEdBQUVDLDJDQUFJLDJCQUEwQndDLElBQUssRUFBdkMsRUFBMEM7QUFDbER2QyxVQUFNLEVBQUU7QUFEMEMsR0FBMUMsQ0FBTCxDQUVKTyxJQUZJLENBRUNwQixRQUFRLElBQUk7QUFDaEIsV0FBT0EsUUFBUSxDQUFDcUIsSUFBVCxFQUFQO0FBQ0gsR0FKTSxFQUlKQyxLQUpJLENBSUVDLEdBQUcsSUFBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FKVCxDQUFQO0FBTUgsQ0FQTTtBQVNBLE1BQU0rQyxlQUFlLEdBQUcsQ0FBQ2xCLElBQUQsRUFBTzFDLEtBQVAsS0FBaUI7QUFDNUMsU0FBT0MsdURBQUssQ0FBRSxHQUFFQywyQ0FBSSxvQkFBbUJ3QyxJQUFLLEVBQWhDLEVBQW1DO0FBQzNDdkMsVUFBTSxFQUFFLFFBRG1DO0FBRTNDQyxXQUFPLEVBQUU7QUFDTEMsWUFBTSxFQUFFLGtCQURIO0FBRUwsc0JBQWdCLGtCQUZYO0FBR0xDLG1CQUFhLEVBQUcsVUFBU04sS0FBTTtBQUgxQjtBQUZrQyxHQUFuQyxDQUFMLENBUUZVLElBUkUsQ0FRR3BCLFFBQVEsSUFBSTtBQUNkRCx1RUFBYyxDQUFDQyxRQUFELENBQWQ7QUFDQSxXQUFPQSxRQUFRLENBQUNxQixJQUFULEVBQVA7QUFDSCxHQVhFLEVBWUZDLEtBWkUsQ0FZSUMsR0FBRyxJQUFJQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQVpYLENBQVA7QUFhSCxDQWRNO0FBZ0JBLE1BQU1nRCxlQUFlLEdBQUcsQ0FBQ0wsU0FBRCxFQUFZeEQsS0FBWixFQUFtQjBDLElBQW5CLEtBQTRCO0FBR3ZELFNBQU96Qyx1REFBSyxDQUFFLEdBQUVDLDJDQUFJLG9CQUFtQndDLElBQUssRUFBaEMsRUFBbUM7QUFDM0N2QyxVQUFNLEVBQUUsS0FEbUM7QUFFM0NDLFdBQU8sRUFBRTtBQUNMQyxZQUFNLEVBQUUsa0JBREg7QUFFTEMsbUJBQWEsRUFBRyxVQUFTTixLQUFNO0FBRjFCLEtBRmtDO0FBTTNDTyxRQUFJLEVBQUVpRDtBQU5xQyxHQUFuQyxDQUFMLENBUUY5QyxJQVJFLENBUUdwQixRQUFRLElBQUk7QUFDZEQsdUVBQWMsQ0FBQ0MsUUFBRCxDQUFkO0FBQ0EsV0FBT0EsUUFBUSxDQUFDcUIsSUFBVCxFQUFQO0FBQ0gsR0FYRSxFQVlGQyxLQVpFLENBWUlDLEdBQUcsSUFBSUMsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FaWCxDQUFQO0FBYUgsQ0FoQk0sQzs7Ozs7Ozs7Ozs7O0FDbkVQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNPLE1BQU1pRCxVQUFVLEdBQUcsQ0FBQ0MsSUFBRCxFQUFPL0QsS0FBUCxLQUFpQjtBQUN6QyxTQUFPQyx1REFBSyxDQUFFLEdBQUVDLDJDQUFJLE9BQVIsRUFBZ0I7QUFDMUJDLFVBQU0sRUFBRSxNQURrQjtBQUUxQkMsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRSxrQkFERDtBQUVQQyxtQkFBYSxFQUFHLFVBQVNOLEtBQU07QUFGeEIsS0FGaUI7QUFNMUJPLFFBQUksRUFBRXdEO0FBTm9CLEdBQWhCLENBQUwsQ0FRSnJELElBUkksQ0FRRXBCLFFBQUQsSUFBYztBQUNsQkQsdUVBQWMsQ0FBQ0MsUUFBRCxDQUFkO0FBQ0EsV0FBT0EsUUFBUSxDQUFDcUIsSUFBVCxFQUFQO0FBQ0QsR0FYSSxFQVlKQyxLQVpJLENBWUdDLEdBQUQsSUFBU0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FaWCxDQUFQO0FBYUQsQ0FkTTtBQWdCQSxNQUFNbUQsZUFBZSxHQUFHLE1BQU07QUFDbkMsU0FBTy9ELHVEQUFLLENBQUUsR0FBRUMsMkNBQUksb0JBQVIsRUFBNkI7QUFDdkNDLFVBQU0sRUFBRTtBQUQrQixHQUE3QixDQUFMLENBR0pPLElBSEksQ0FHRXBCLFFBQUQsSUFBYztBQUNsQixXQUFPQSxRQUFRLENBQUNxQixJQUFULEVBQVA7QUFDRCxHQUxJLEVBTUpDLEtBTkksQ0FNR0MsR0FBRCxJQUFTQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQU5YLENBQVA7QUFPRCxDQVJNO0FBVUEsTUFBTW9ELGNBQWMsR0FBRyxNQUFNO0FBQ2xDLFNBQU9oRSx1REFBSyxDQUFFLEdBQUVDLDJDQUFJLG1CQUFSLEVBQTRCO0FBQ3RDQyxVQUFNLEVBQUU7QUFEOEIsR0FBNUIsQ0FBTCxDQUdKTyxJQUhJLENBR0VwQixRQUFELElBQWM7QUFDbEIsV0FBT0EsUUFBUSxDQUFDcUIsSUFBVCxFQUFQO0FBQ0QsR0FMSSxFQU1KQyxLQU5JLENBTUdDLEdBQUQsSUFBU0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FOWCxDQUFQO0FBT0QsQ0FSTTtBQVVBLE1BQU1xRCwrQkFBK0IsR0FBRyxNQUFNO0FBQ25ELFNBQU9qRSx1REFBSyxDQUFFLEdBQUVDLDJDQUFJLGtDQUFSLEVBQTJDO0FBQ3JEQyxVQUFNLEVBQUU7QUFENkMsR0FBM0MsQ0FBTCxDQUdKTyxJQUhJLENBR0VwQixRQUFELElBQWM7QUFDbEIsV0FBT0EsUUFBUSxDQUFDcUIsSUFBVCxFQUFQO0FBQ0QsR0FMSSxFQU1KQyxLQU5JLENBTUdDLEdBQUQsSUFBU0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FOWCxDQUFQO0FBT0QsQ0FSTTtBQVVBLE1BQU1zRCxnQ0FBZ0MsR0FBRyxNQUFNO0FBQ3BELFNBQU9sRSx1REFBSyxDQUFFLEdBQUVDLDJDQUFJLG1DQUFSLEVBQTRDO0FBQ3REQyxVQUFNLEVBQUU7QUFEOEMsR0FBNUMsQ0FBTCxDQUdKTyxJQUhJLENBR0VwQixRQUFELElBQWM7QUFDbEIsV0FBT0EsUUFBUSxDQUFDcUIsSUFBVCxFQUFQO0FBQ0QsR0FMSSxFQU1KQyxLQU5JLENBTUdDLEdBQUQsSUFBU0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FOWCxDQUFQO0FBT0QsQ0FSTTtBQVVBLE1BQU11RCwrQkFBK0IsR0FBRyxDQUFDQyxJQUFELEVBQU1DLEtBQU4sS0FBZ0I7QUFDN0QsUUFBTTNDLElBQUksR0FBRztBQUFDMEMsUUFBRDtBQUFNQztBQUFOLEdBQWI7QUFDQSxTQUFPckUsdURBQUssQ0FBRSxHQUFFQywyQ0FBSSxrQ0FBUixFQUEyQztBQUNyREMsVUFBTSxFQUFFLE1BRDZDO0FBRXJEQyxXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFLGtCQUREO0FBRVAsc0JBQWdCO0FBRlQsS0FGNEM7QUFNckRFLFFBQUksRUFBQ0MsSUFBSSxDQUFDQyxTQUFMLENBQWVrQixJQUFmO0FBTmdELEdBQTNDLENBQUwsQ0FRSmpCLElBUkksQ0FRRXBCLFFBQUQsSUFBYztBQUNsQixXQUFPQSxRQUFRLENBQUNxQixJQUFULEVBQVA7QUFDRCxHQVZJLEVBV0pDLEtBWEksQ0FXR0MsR0FBRCxJQUFTQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQVhYLENBQVA7QUFZRCxDQWRNO0FBZUEsTUFBTTBELGdCQUFnQixHQUFHLE1BQU07QUFDcEMsU0FBT3RFLHVEQUFLLENBQUUsR0FBRUMsMkNBQUkscUJBQVIsRUFBOEI7QUFDeENDLFVBQU0sRUFBRTtBQURnQyxHQUE5QixDQUFMLENBR0pPLElBSEksQ0FHRXBCLFFBQUQsSUFBYztBQUNsQixXQUFPQSxRQUFRLENBQUNxQixJQUFULEVBQVA7QUFDRCxHQUxJLEVBTUpDLEtBTkksQ0FNR0MsR0FBRCxJQUFTQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQU5YLENBQVA7QUFPRCxDQVJNO0FBVUEsTUFBTTJELHNCQUFzQixHQUFHLE1BQU07QUFDMUMsU0FBT3ZFLHVEQUFLLENBQUUsR0FBRUMsMkNBQUksNEJBQVIsRUFBcUM7QUFDL0NDLFVBQU0sRUFBRTtBQUR1QyxHQUFyQyxDQUFMLENBR0pPLElBSEksQ0FHRXBCLFFBQUQsSUFBYztBQUNsQixXQUFPQSxRQUFRLENBQUNxQixJQUFULEVBQVA7QUFDRCxHQUxJLEVBTUpDLEtBTkksQ0FNR0MsR0FBRCxJQUFTQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQU5YLENBQVA7QUFPRCxDQVJNO0FBU0EsTUFBTTRELHdCQUF3QixHQUFJN0IsSUFBRCxJQUFVO0FBQ2hELFNBQU8zQyx1REFBSyxDQUFFLEdBQUVDLDJDQUFJLGlCQUFSLEVBQTBCO0FBQ3BDQyxVQUFNLEVBQUUsTUFENEI7QUFFcENDLFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUUsa0JBREQ7QUFFUCxzQkFBZ0I7QUFGVCxLQUYyQjtBQU1wQ0UsUUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZW1DLElBQWY7QUFOOEIsR0FBMUIsQ0FBTCxDQVFKbEMsSUFSSSxDQVFFcEIsUUFBRCxJQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQ3FCLElBQVQsRUFBUDtBQUNELEdBVkksRUFXSkMsS0FYSSxDQVdHQyxHQUFELElBQVNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBWFgsQ0FBUDtBQVlELENBYk07QUFlQSxNQUFNNkQsMkJBQTJCLEdBQUcsTUFBTTtBQUMvQyxTQUFPekUsdURBQUssQ0FBRSxHQUFFQywyQ0FBSSxzQkFBUixFQUErQjtBQUN6Q0MsVUFBTSxFQUFFO0FBRGlDLEdBQS9CLENBQUwsQ0FHSk8sSUFISSxDQUdFcEIsUUFBRCxJQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQ3FCLElBQVQsRUFBUDtBQUNELEdBTEksRUFNSkMsS0FOSSxDQU1HQyxHQUFELElBQVNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBTlgsQ0FBUDtBQU9ELENBUk07QUFVQSxNQUFNOEQsd0JBQXdCLEdBQUlwQyxFQUFELElBQVE7QUFDOUM7QUFFQSxTQUFPdEMsdURBQUssQ0FBRSxHQUFFQywyQ0FBSSwyQkFBMEJxQyxFQUFHLEVBQXJDLEVBQXdDO0FBQ2xEcEMsVUFBTSxFQUFFO0FBRDBDLEdBQXhDLENBQUwsQ0FHSk8sSUFISSxDQUdFcEIsUUFBRCxJQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQ3FCLElBQVQsRUFBUDtBQUNELEdBTEksRUFNSkMsS0FOSSxDQU1HQyxHQUFELElBQVNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBTlgsQ0FBUDtBQU9ELENBVk07QUFZQSxNQUFNK0QsdUJBQXVCLEdBQUlyQyxFQUFELElBQVE7QUFDN0M7QUFFQSxTQUFPdEMsdURBQUssQ0FBRSxHQUFFQywyQ0FBSSwwQkFBeUJxQyxFQUFHLEVBQXBDLEVBQXVDO0FBQ2pEcEMsVUFBTSxFQUFFO0FBRHlDLEdBQXZDLENBQUwsQ0FHSk8sSUFISSxDQUdFcEIsUUFBRCxJQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQ3FCLElBQVQsRUFBUDtBQUNELEdBTEksRUFNSkMsS0FOSSxDQU1HQyxHQUFELElBQVNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBTlgsQ0FBUDtBQU9ELENBVk07QUFZQSxNQUFNZ0UsVUFBVSxHQUFJbkMsSUFBRCxJQUFVO0FBQ2xDLFNBQU96Qyx1REFBSyxDQUFFLEdBQUVDLDJDQUFJLFNBQVF3QyxJQUFLLEVBQXJCLEVBQXdCO0FBQ2xDdkMsVUFBTSxFQUFFO0FBRDBCLEdBQXhCLENBQUwsQ0FHSk8sSUFISSxDQUdFcEIsUUFBRCxJQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQ3FCLElBQVQsRUFBUDtBQUNELEdBTEksRUFNSkMsS0FOSSxDQU1HQyxHQUFELElBQVNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBTlgsQ0FBUDtBQU9ELENBUk07QUFVQSxNQUFNOEIsV0FBVyxHQUFJQyxJQUFELElBQVU7QUFDbkMsU0FBTzNDLHVEQUFLLENBQUUsR0FBRUMsMkNBQUksZUFBUixFQUF3QjtBQUNsQ0MsVUFBTSxFQUFFLE1BRDBCO0FBRWxDQyxXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFLGtCQUREO0FBRVAsc0JBQWdCO0FBRlQsS0FGeUI7QUFNbENFLFFBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVtQyxJQUFmO0FBTjRCLEdBQXhCLENBQUwsQ0FRSmxDLElBUkksQ0FRRXBCLFFBQUQsSUFBYztBQUNsQixXQUFPQSxRQUFRLENBQUNxQixJQUFULEVBQVA7QUFDRCxHQVZJLEVBV0pDLEtBWEksQ0FXR0MsR0FBRCxJQUFTQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQVhYLENBQVA7QUFZRCxDQWJNO0FBZUEsTUFBTWlDLGtCQUFrQixHQUFJRixJQUFELElBQVU7QUFDMUMsU0FBTzNDLHVEQUFLLENBQUUsR0FBRUMsMkNBQUksdUJBQVIsRUFBZ0M7QUFDMUNDLFVBQU0sRUFBRSxNQURrQztBQUUxQ0MsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRSxrQkFERDtBQUVQLHNCQUFnQjtBQUZULEtBRmlDO0FBTTFDRSxRQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlbUMsSUFBZjtBQU5vQyxHQUFoQyxDQUFMLENBUUpsQyxJQVJJLENBUUVwQixRQUFELElBQWM7QUFDbEIsV0FBT0EsUUFBUSxDQUFDcUIsSUFBVCxFQUFQO0FBQ0QsR0FWSSxFQVdKQyxLQVhJLENBV0dDLEdBQUQsSUFBU0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FYWCxDQUFQO0FBWUQsQ0FiTTtBQWVBLE1BQU1pRSxrQkFBa0IsR0FBSWxDLElBQUQsSUFBVTtBQUMxQyxTQUFPM0MsdURBQUssQ0FBRSxHQUFFQywyQ0FBSSx1QkFBUixFQUFnQztBQUMxQ0MsVUFBTSxFQUFFLE1BRGtDO0FBRTFDQyxXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFLGtCQUREO0FBRVAsc0JBQWdCO0FBRlQsS0FGaUM7QUFNMUNFLFFBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVtQyxJQUFmO0FBTm9DLEdBQWhDLENBQUwsQ0FRSmxDLElBUkksQ0FRRXBCLFFBQUQsSUFBYztBQUNsQixXQUFPQSxRQUFRLENBQUNxQixJQUFULEVBQVA7QUFDRCxHQVZJLEVBV0pDLEtBWEksQ0FXR0MsR0FBRCxJQUFTQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQVhYLENBQVA7QUFZRCxDQWJNO0FBZUEsTUFBTWtFLFVBQVUsR0FBRyxDQUFDckMsSUFBRCxFQUFPMUMsS0FBUCxLQUFpQjtBQUN6QyxTQUFPQyx1REFBSyxDQUFFLEdBQUVDLDJDQUFJLFNBQVF3QyxJQUFLLEVBQXJCLEVBQXdCO0FBQ2xDdkMsVUFBTSxFQUFFLFFBRDBCO0FBRWxDQyxXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFLGtCQUREO0FBRVAsc0JBQWdCLGtCQUZUO0FBR1BDLG1CQUFhLEVBQUcsVUFBU04sS0FBTTtBQUh4QjtBQUZ5QixHQUF4QixDQUFMLENBUUpVLElBUkksQ0FRRXBCLFFBQUQsSUFBYztBQUNsQkQsdUVBQWMsQ0FBQ0MsUUFBRCxDQUFkO0FBQ0EsV0FBT0EsUUFBUSxDQUFDcUIsSUFBVCxFQUFQO0FBQ0QsR0FYSSxFQVlKQyxLQVpJLENBWUdDLEdBQUQsSUFBU0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FaWCxDQUFQO0FBYUQsQ0FkTTtBQWdCQSxNQUFNbUUsVUFBVSxHQUFHLENBQUNqQixJQUFELEVBQU8vRCxLQUFQLEVBQWMwQyxJQUFkLEtBQXVCO0FBQy9DLFNBQU96Qyx1REFBSyxDQUFFLEdBQUVDLDJDQUFJLFNBQVF3QyxJQUFLLEVBQXJCLEVBQXdCO0FBQ2xDdkMsVUFBTSxFQUFFLEtBRDBCO0FBRWxDQyxXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFLGtCQUREO0FBRVBDLG1CQUFhLEVBQUcsVUFBU04sS0FBTTtBQUZ4QixLQUZ5QjtBQU1sQ08sUUFBSSxFQUFFd0Q7QUFONEIsR0FBeEIsQ0FBTCxDQVFKckQsSUFSSSxDQVFFcEIsUUFBRCxJQUFjO0FBQ2xCRCx1RUFBYyxDQUFDQyxRQUFELENBQWQ7QUFDQSxXQUFPQSxRQUFRLENBQUNxQixJQUFULEVBQVA7QUFDRCxHQVhJLEVBWUpDLEtBWkksQ0FZR0MsR0FBRCxJQUFTQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQVpYLENBQVA7QUFhRCxDQWRNO0FBZ0JBLE1BQU1vRSxXQUFXLEdBQUcsQ0FBQ3ZDLElBQUQsRUFBTzFDLEtBQVAsS0FBaUI7QUFDMUM7QUFFQSxTQUFPQyx1REFBSyxDQUFFLEdBQUVDLDJDQUFJLGlCQUFnQndDLElBQUssRUFBN0IsRUFBZ0M7QUFDMUN2QyxVQUFNLEVBQUUsS0FEa0M7QUFFMUNDLFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUUsa0JBREQ7QUFFUEMsbUJBQWEsRUFBRyxVQUFTTixLQUFNO0FBRnhCO0FBRmlDLEdBQWhDLENBQUwsQ0FPSlUsSUFQSSxDQU9FcEIsUUFBRCxJQUFjO0FBQ2xCRCx1RUFBYyxDQUFDQyxRQUFELENBQWQ7QUFDQSxXQUFPQSxRQUFRLENBQUNxQixJQUFULEVBQVA7QUFDRCxHQVZJLEVBV0pDLEtBWEksQ0FXR0MsR0FBRCxJQUFTQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQVhYLENBQVA7QUFZRCxDQWZNO0FBaUJBLE1BQU1xRSxhQUFhLEdBQUcsQ0FBQ3hDLElBQUQsRUFBTzFDLEtBQVAsS0FBaUI7QUFDNUM7QUFFQSxTQUFPQyx1REFBSyxDQUFFLEdBQUVDLDJDQUFJLG9CQUFtQndDLElBQUssRUFBaEMsRUFBbUM7QUFDN0N2QyxVQUFNLEVBQUUsS0FEcUM7QUFFN0NDLFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUUsa0JBREQ7QUFFUEMsbUJBQWEsRUFBRyxVQUFTTixLQUFNO0FBRnhCO0FBRm9DLEdBQW5DLENBQUwsQ0FPSlUsSUFQSSxDQU9FcEIsUUFBRCxJQUFjO0FBQ2xCRCx1RUFBYyxDQUFDQyxRQUFELENBQWQ7QUFDQSxXQUFPQSxRQUFRLENBQUNxQixJQUFULEVBQVA7QUFDRCxHQVZJLEVBV0pDLEtBWEksQ0FXR0MsR0FBRCxJQUFTQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQVhYLENBQVA7QUFZRCxDQWZNO0FBaUJBLE1BQU1zQyxlQUFlLEdBQUlDLE1BQUQsSUFBWTtBQUN6Q3RDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGtCQUFaLEVBQWdDcUMsTUFBaEM7QUFFQSxNQUFJeEQsS0FBSyxHQUFHeUQsbURBQVcsQ0FBQzVDLFNBQVosQ0FBc0IyQyxNQUF0QixDQUFaO0FBRUF0QyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxpQkFBWixFQUErQnFDLE1BQS9CO0FBRUEsU0FBT25ELHVEQUFLLENBQUUsR0FBRUMsMkNBQUksdUJBQXNCTixLQUFNLEVBQXBDLEVBQXVDO0FBQ2pETyxVQUFNLEVBQUU7QUFEeUMsR0FBdkMsQ0FBTCxDQUdKTyxJQUhJLENBR0VwQixRQUFELElBQWM7QUFDbEIsV0FBT0EsUUFBUSxDQUFDcUIsSUFBVCxFQUFQO0FBQ0QsR0FMSSxFQU1KQyxLQU5JLENBTUdDLEdBQUQsSUFBU0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FOWCxDQUFQO0FBT0QsQ0FkTTtBQWdCUDs7QUFDTyxNQUFNeUMsY0FBYyxHQUFJRixNQUFELElBQVk7QUFDeEMsTUFBSXhELEtBQUssR0FBR3lELG1EQUFXLENBQUM1QyxTQUFaLENBQXNCMkMsTUFBdEIsQ0FBWjtBQUVBLFNBQU9uRCx1REFBSyxDQUFFLEdBQUVDLDJDQUFJLDRCQUEyQk4sS0FBTSxFQUF6QyxFQUE0QztBQUN0RE8sVUFBTSxFQUFFO0FBRDhDLEdBQTVDLENBQUwsQ0FHSk8sSUFISSxDQUdFcEIsUUFBRCxJQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQ3FCLElBQVQsRUFBUDtBQUNELEdBTEksRUFNSkMsS0FOSSxDQU1HQyxHQUFELElBQVNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBTlgsQ0FBUDtBQU9ELENBVk07QUFZQSxNQUFNc0UsbUJBQW1CLEdBQUkvQixNQUFELElBQVk7QUFDN0N0QyxTQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBWixFQUFnQ3FDLE1BQWhDO0FBRUEsTUFBSXhELEtBQUssR0FBR3lELG1EQUFXLENBQUM1QyxTQUFaLENBQXNCMkMsTUFBdEIsQ0FBWjtBQUVBdEMsU0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVosRUFBK0JxQyxNQUEvQjtBQUVBLFNBQU9uRCx1REFBSyxDQUFFLEdBQUVDLDJDQUFJLGlDQUFnQ04sS0FBTSxFQUE5QyxFQUFpRDtBQUMzRE8sVUFBTSxFQUFFO0FBRG1ELEdBQWpELENBQUwsQ0FHSk8sSUFISSxDQUdFcEIsUUFBRCxJQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQ3FCLElBQVQsRUFBUDtBQUNELEdBTEksRUFNSkMsS0FOSSxDQU1HQyxHQUFELElBQVNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBTlgsQ0FBUDtBQU9ELENBZE0sQzs7Ozs7Ozs7Ozs7O0FDelNQO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBRU8sTUFBTXVFLFlBQVksR0FBRyxDQUFDQyxNQUFELEVBQVNyRixLQUFULEtBQW1CO0FBQzdDLFNBQU9DLHVEQUFLLENBQUUsR0FBRUMsMkNBQUksU0FBUixFQUFrQjtBQUM1QkMsVUFBTSxFQUFFLE1BRG9CO0FBRTVCQyxXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFLGtCQUREO0FBRVBDLG1CQUFhLEVBQUcsVUFBU04sS0FBTTtBQUZ4QixLQUZtQjtBQU01Qk8sUUFBSSxFQUFFOEU7QUFOc0IsR0FBbEIsQ0FBTCxDQVFKM0UsSUFSSSxDQVFFcEIsUUFBRCxJQUFjO0FBQ2xCRCx1RUFBYyxDQUFDQyxRQUFELENBQWQ7QUFDQSxXQUFPQSxRQUFRLENBQUNxQixJQUFULEVBQVA7QUFDRCxHQVhJLEVBWUpDLEtBWkksQ0FZR0MsR0FBRCxJQUFTQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQVpYLENBQVA7QUFhRCxDQWRNO0FBZ0JBLE1BQU15RSxpQkFBaUIsR0FBRyxNQUFNO0FBQ3JDLFNBQU9yRix1REFBSyxDQUFFLEdBQUVDLDJDQUFJLHVCQUFSLEVBQWdDO0FBQzFDQyxVQUFNLEVBQUU7QUFEa0MsR0FBaEMsQ0FBTCxDQUdKTyxJQUhJLENBR0VwQixRQUFELElBQWM7QUFDbEIsV0FBT0EsUUFBUSxDQUFDcUIsSUFBVCxFQUFQO0FBQ0QsR0FMSSxFQU1KQyxLQU5JLENBTUdDLEdBQUQsSUFBU0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FOWCxDQUFQO0FBT0QsQ0FSTTtBQVVBLE1BQU0wRSxnQkFBZ0IsR0FBRyxNQUFNO0FBQ3BDLFNBQU90Rix1REFBSyxDQUFFLEdBQUVDLDJDQUFJLHNCQUFSLEVBQStCO0FBQ3pDQyxVQUFNLEVBQUU7QUFEaUMsR0FBL0IsQ0FBTCxDQUdKTyxJQUhJLENBR0VwQixRQUFELElBQWM7QUFDbEIsV0FBT0EsUUFBUSxDQUFDcUIsSUFBVCxFQUFQO0FBQ0QsR0FMSSxFQU1KQyxLQU5JLENBTUdDLEdBQUQsSUFBU0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FOWCxDQUFQO0FBT0QsQ0FSTTtBQVVBLE1BQU0yRSxrQkFBa0IsR0FBRyxNQUFNO0FBQ3RDLFNBQU92Rix1REFBSyxDQUFFLEdBQUVDLDJDQUFJLHVCQUFSLEVBQWdDO0FBQzFDQyxVQUFNLEVBQUU7QUFEa0MsR0FBaEMsQ0FBTCxDQUdKTyxJQUhJLENBR0VwQixRQUFELElBQWM7QUFDbEIsV0FBT0EsUUFBUSxDQUFDcUIsSUFBVCxFQUFQO0FBQ0QsR0FMSSxFQU1KQyxLQU5JLENBTUdDLEdBQUQsSUFBU0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FOWCxDQUFQO0FBT0QsQ0FSTTtBQVNBLE1BQU00RSx3QkFBd0IsR0FBRyxNQUFNO0FBQzVDLFNBQU94Rix1REFBSyxDQUFFLEdBQUVDLDJDQUFJLDhCQUFSLEVBQXVDO0FBQ2pEQyxVQUFNLEVBQUU7QUFEeUMsR0FBdkMsQ0FBTCxDQUdKTyxJQUhJLENBR0VwQixRQUFELElBQWM7QUFDbEIsV0FBT0EsUUFBUSxDQUFDcUIsSUFBVCxFQUFQO0FBQ0QsR0FMSSxFQU1KQyxLQU5JLENBTUdDLEdBQUQsSUFBU0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FOWCxDQUFQO0FBT0QsQ0FSTTtBQVVBLE1BQU02RSx1QkFBdUIsR0FBRyxNQUFNO0FBQzNDLFNBQU96Rix1REFBSyxDQUFFLEdBQUVDLDJDQUFJLDZCQUFSLEVBQXNDO0FBQ2hEQyxVQUFNLEVBQUU7QUFEd0MsR0FBdEMsQ0FBTCxDQUdKTyxJQUhJLENBR0VwQixRQUFELElBQWM7QUFDbEIsV0FBT0EsUUFBUSxDQUFDcUIsSUFBVCxFQUFQO0FBQ0QsR0FMSSxFQU1KQyxLQU5JLENBTUdDLEdBQUQsSUFBU0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FOWCxDQUFQO0FBT0QsQ0FSTTtBQVVBLE1BQU00RCx3QkFBd0IsR0FBRyxNQUFNO0FBQzVDLFNBQU94RSx1REFBSyxDQUFFLEdBQUVDLDJDQUFJLGlCQUFSLEVBQTBCO0FBQ3BDQyxVQUFNLEVBQUU7QUFENEIsR0FBMUIsQ0FBTCxDQUdKTyxJQUhJLENBR0VwQixRQUFELElBQWM7QUFDbEIsV0FBT0EsUUFBUSxDQUFDcUIsSUFBVCxFQUFQO0FBQ0QsR0FMSSxFQU1KQyxLQU5JLENBTUdDLEdBQUQsSUFBU0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FOWCxDQUFQO0FBT0QsQ0FSTTtBQVVBLE1BQU04RSwwQkFBMEIsR0FBRyxNQUFNO0FBQzlDLFNBQU8xRix1REFBSyxDQUFFLEdBQUVDLDJDQUFJLHNCQUFSLEVBQStCO0FBQ3pDQyxVQUFNLEVBQUU7QUFEaUMsR0FBL0IsQ0FBTCxDQUdKTyxJQUhJLENBR0VwQixRQUFELElBQWM7QUFDbEIsV0FBT0EsUUFBUSxDQUFDcUIsSUFBVCxFQUFQO0FBQ0QsR0FMSSxFQU1KQyxLQU5JLENBTUdDLEdBQUQsSUFBU0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FOWCxDQUFQO0FBT0QsQ0FSTTtBQVVBLE1BQU0rRSxpQ0FBaUMsR0FBRyxNQUFNO0FBQ3JELFNBQU8zRix1REFBSyxDQUFFLEdBQUVDLDJDQUFJLHlDQUFSLEVBQWtEO0FBQzVEQyxVQUFNLEVBQUU7QUFEb0QsR0FBbEQsQ0FBTCxDQUdKTyxJQUhJLENBR0VwQixRQUFELElBQWM7QUFDbEIsV0FBT0EsUUFBUSxDQUFDcUIsSUFBVCxFQUFQO0FBQ0QsR0FMSSxFQU1KQyxLQU5JLENBTUdDLEdBQUQsSUFBU0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FOWCxDQUFQO0FBT0QsQ0FSTTtBQVVBLE1BQU1nRixpQ0FBaUMsR0FBRyxNQUFNO0FBQ3JELFNBQU81Rix1REFBSyxDQUFFLEdBQUVDLDJDQUFJLHlDQUFSLEVBQWtEO0FBQzVEQyxVQUFNLEVBQUU7QUFEb0QsR0FBbEQsQ0FBTCxDQUdKTyxJQUhJLENBR0VwQixRQUFELElBQWM7QUFDbEIsV0FBT0EsUUFBUSxDQUFDcUIsSUFBVCxFQUFQO0FBQ0QsR0FMSSxFQU1KQyxLQU5JLENBTUdDLEdBQUQsSUFBU0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FOWCxDQUFQO0FBT0QsQ0FSTTtBQVVBLE1BQU1pRiwwQkFBMEIsR0FBSXZELEVBQUQsSUFBUTtBQUNoRDtBQUVBLFNBQU90Qyx1REFBSyxDQUFFLEdBQUVDLDJDQUFJLDZCQUE0QnFDLEVBQUcsRUFBdkMsRUFBMEM7QUFDcERwQyxVQUFNLEVBQUU7QUFENEMsR0FBMUMsQ0FBTCxDQUdKTyxJQUhJLENBR0VwQixRQUFELElBQWM7QUFDbEIsV0FBT0EsUUFBUSxDQUFDcUIsSUFBVCxFQUFQO0FBQ0QsR0FMSSxFQU1KQyxLQU5JLENBTUdDLEdBQUQsSUFBU0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FOWCxDQUFQO0FBT0QsQ0FWTTtBQVlBLE1BQU1rRix5QkFBeUIsR0FBSXhELEVBQUQsSUFBUTtBQUMvQztBQUVBLFNBQU90Qyx1REFBSyxDQUFFLEdBQUVDLDJDQUFJLDRCQUEyQnFDLEVBQUcsRUFBdEMsRUFBeUM7QUFDbkRwQyxVQUFNLEVBQUU7QUFEMkMsR0FBekMsQ0FBTCxDQUdKTyxJQUhJLENBR0VwQixRQUFELElBQWM7QUFDbEIsV0FBT0EsUUFBUSxDQUFDcUIsSUFBVCxFQUFQO0FBQ0QsR0FMSSxFQU1KQyxLQU5JLENBTUdDLEdBQUQsSUFBU0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FOWCxDQUFQO0FBT0QsQ0FWTTtBQVlBLE1BQU1tRixZQUFZLEdBQUl0RCxJQUFELElBQVU7QUFDcEMsU0FBT3pDLHVEQUFLLENBQUUsR0FBRUMsMkNBQUksV0FBVXdDLElBQUssRUFBdkIsRUFBMEI7QUFDcEN2QyxVQUFNLEVBQUU7QUFENEIsR0FBMUIsQ0FBTCxDQUdKTyxJQUhJLENBR0VwQixRQUFELElBQWM7QUFDbEIsV0FBT0EsUUFBUSxDQUFDcUIsSUFBVCxFQUFQO0FBQ0QsR0FMSSxFQU1KQyxLQU5JLENBTUdDLEdBQUQsSUFBU0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FOWCxDQUFQO0FBT0QsQ0FSTTtBQVVBLE1BQU1vRixZQUFZLEdBQUcsQ0FBQ3ZELElBQUQsRUFBTzFDLEtBQVAsS0FBaUI7QUFDM0MsU0FBT0MsdURBQUssQ0FBRSxHQUFFQywyQ0FBSSxXQUFVd0MsSUFBSyxFQUF2QixFQUEwQjtBQUNwQ3ZDLFVBQU0sRUFBRSxRQUQ0QjtBQUVwQ0MsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRSxrQkFERDtBQUVQLHNCQUFnQixrQkFGVDtBQUdQQyxtQkFBYSxFQUFHLFVBQVNOLEtBQU07QUFIeEI7QUFGMkIsR0FBMUIsQ0FBTCxDQVFKVSxJQVJJLENBUUVwQixRQUFELElBQWM7QUFDbEJELHVFQUFjLENBQUNDLFFBQUQsQ0FBZDtBQUNBLFdBQU9BLFFBQVEsQ0FBQ3FCLElBQVQsRUFBUDtBQUNELEdBWEksRUFZSkMsS0FaSSxDQVlHQyxHQUFELElBQVNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBWlgsQ0FBUDtBQWFELENBZE07QUFnQkEsTUFBTXFGLFlBQVksR0FBRyxDQUFDYixNQUFELEVBQVNyRixLQUFULEVBQWdCMEMsSUFBaEIsS0FBeUI7QUFDbkQsU0FBT3pDLHVEQUFLLENBQUUsR0FBRUMsMkNBQUksV0FBVXdDLElBQUssRUFBdkIsRUFBMEI7QUFDcEN2QyxVQUFNLEVBQUUsS0FENEI7QUFFcENDLFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUUsa0JBREQ7QUFFUEMsbUJBQWEsRUFBRyxVQUFTTixLQUFNO0FBRnhCLEtBRjJCO0FBTXBDTyxRQUFJLEVBQUU4RTtBQU44QixHQUExQixDQUFMLENBUUozRSxJQVJJLENBUUVwQixRQUFELElBQWM7QUFDbEJELHVFQUFjLENBQUNDLFFBQUQsQ0FBZDtBQUNBLFdBQU9BLFFBQVEsQ0FBQ3FCLElBQVQsRUFBUDtBQUNELEdBWEksRUFZSkMsS0FaSSxDQVlHQyxHQUFELElBQVNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBWlgsQ0FBUDtBQWFELENBZE07QUFnQkEsTUFBTXNGLGFBQWEsR0FBRyxDQUFDekQsSUFBRCxFQUFPMUMsS0FBUCxLQUFpQjtBQUM1QztBQUVBLFNBQU9DLHVEQUFLLENBQUUsR0FBRUMsMkNBQUksbUJBQWtCd0MsSUFBSyxFQUEvQixFQUFrQztBQUM1Q3ZDLFVBQU0sRUFBRSxLQURvQztBQUU1Q0MsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRSxrQkFERDtBQUVQQyxtQkFBYSxFQUFHLFVBQVNOLEtBQU07QUFGeEI7QUFGbUMsR0FBbEMsQ0FBTCxDQU9KVSxJQVBJLENBT0VwQixRQUFELElBQWM7QUFDbEJELHVFQUFjLENBQUNDLFFBQUQsQ0FBZDtBQUNBLFdBQU9BLFFBQVEsQ0FBQ3FCLElBQVQsRUFBUDtBQUNELEdBVkksRUFXSkMsS0FYSSxDQVdHQyxHQUFELElBQVNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBWFgsQ0FBUDtBQVlELENBZk07QUFpQkEsTUFBTXVGLGVBQWUsR0FBRyxDQUFDMUQsSUFBRCxFQUFPMUMsS0FBUCxLQUFpQjtBQUM5QztBQUVBLFNBQU9DLHVEQUFLLENBQUUsR0FBRUMsMkNBQUksc0JBQXFCd0MsSUFBSyxFQUFsQyxFQUFxQztBQUMvQ3ZDLFVBQU0sRUFBRSxLQUR1QztBQUUvQ0MsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRSxrQkFERDtBQUVQQyxtQkFBYSxFQUFHLFVBQVNOLEtBQU07QUFGeEI7QUFGc0MsR0FBckMsQ0FBTCxDQU9KVSxJQVBJLENBT0VwQixRQUFELElBQWM7QUFDbEJELHVFQUFjLENBQUNDLFFBQUQsQ0FBZDtBQUNBLFdBQU9BLFFBQVEsQ0FBQ3FCLElBQVQsRUFBUDtBQUNELEdBVkksRUFXSkMsS0FYSSxDQVdHQyxHQUFELElBQVNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBWFgsQ0FBUDtBQVlELENBZk07QUFpQkEsTUFBTThCLFdBQVcsR0FBSUMsSUFBRCxJQUFVO0FBQ25DLFNBQU8zQyx1REFBSyxDQUFFLEdBQUVDLDJDQUFJLGlCQUFSLEVBQTBCO0FBQ3BDQyxVQUFNLEVBQUUsTUFENEI7QUFFcENDLFdBQU8sRUFBRTtBQUNQQyxZQUFNLEVBQUUsa0JBREQ7QUFFUCxzQkFBZ0I7QUFGVCxLQUYyQjtBQU1wQ0UsUUFBSSxFQUFFQyxJQUFJLENBQUNDLFNBQUwsQ0FBZW1DLElBQWY7QUFOOEIsR0FBMUIsQ0FBTCxDQVFKbEMsSUFSSSxDQVFFcEIsUUFBRCxJQUFjO0FBQ2xCLFdBQU9BLFFBQVEsQ0FBQ3FCLElBQVQsRUFBUDtBQUNELEdBVkksRUFXSkMsS0FYSSxDQVdHQyxHQUFELElBQVNDLE9BQU8sQ0FBQ0MsR0FBUixDQUFZRixHQUFaLENBWFgsQ0FBUDtBQVlELENBYk07QUFlQSxNQUFNZ0MsZUFBZSxHQUFJRCxJQUFELElBQVU7QUFDdkMsU0FBTzNDLHVEQUFLLENBQUUsR0FBRUMsMkNBQUksc0JBQVIsRUFBK0I7QUFDekNDLFVBQU0sRUFBRSxNQURpQztBQUV6Q0MsV0FBTyxFQUFFO0FBQ1BDLFlBQU0sRUFBRSxrQkFERDtBQUVQLHNCQUFnQjtBQUZULEtBRmdDO0FBTXpDRSxRQUFJLEVBQUVDLElBQUksQ0FBQ0MsU0FBTCxDQUFlbUMsSUFBZjtBQU5tQyxHQUEvQixDQUFMLENBUUpsQyxJQVJJLENBUUVwQixRQUFELElBQWM7QUFDbEIsV0FBT0EsUUFBUSxDQUFDcUIsSUFBVCxFQUFQO0FBQ0QsR0FWSSxFQVdKQyxLQVhJLENBV0dDLEdBQUQsSUFBU0MsT0FBTyxDQUFDQyxHQUFSLENBQVlGLEdBQVosQ0FYWCxDQUFQO0FBWUQsQ0FiTTtBQWVBLE1BQU1pRSxrQkFBa0IsR0FBSWxDLElBQUQsSUFBVTtBQUMxQyxTQUFPM0MsdURBQUssQ0FBRSxHQUFFQywyQ0FBSSx5QkFBUixFQUFrQztBQUM1Q0MsVUFBTSxFQUFFLE1BRG9DO0FBRTVDQyxXQUFPLEVBQUU7QUFDUEMsWUFBTSxFQUFFLGtCQUREO0FBRVAsc0JBQWdCO0FBRlQsS0FGbUM7QUFNNUNFLFFBQUksRUFBRUMsSUFBSSxDQUFDQyxTQUFMLENBQWVtQyxJQUFmO0FBTnNDLEdBQWxDLENBQUwsQ0FRSmxDLElBUkksQ0FRRXBCLFFBQUQsSUFBYztBQUNsQixXQUFPQSxRQUFRLENBQUNxQixJQUFULEVBQVA7QUFDRCxHQVZJLEVBV0pDLEtBWEksQ0FXR0MsR0FBRCxJQUFTQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQVhYLENBQVA7QUFZRCxDQWJNO0FBZUEsTUFBTXNDLGVBQWUsR0FBSUMsTUFBRCxJQUFZO0FBQ3pDLE1BQUl4RCxLQUFLLEdBQUd5RCxtREFBVyxDQUFDNUMsU0FBWixDQUFzQjJDLE1BQXRCLENBQVo7QUFFQSxTQUFPbkQsdURBQUssQ0FBRSxHQUFFQywyQ0FBSSx5QkFBd0JOLEtBQU0sRUFBdEMsRUFBeUM7QUFDbkRPLFVBQU0sRUFBRTtBQUQyQyxHQUF6QyxDQUFMLENBR0pPLElBSEksQ0FHRXBCLFFBQUQsSUFBYztBQUNsQixXQUFPQSxRQUFRLENBQUNxQixJQUFULEVBQVA7QUFDRCxHQUxJLEVBTUpDLEtBTkksQ0FNR0MsR0FBRCxJQUFTQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQU5YLENBQVA7QUFPRCxDQVZNO0FBWVA7O0FBQ08sTUFBTXlDLGNBQWMsR0FBSUYsTUFBRCxJQUFZO0FBQ3hDLE1BQUl4RCxLQUFLLEdBQUd5RCxtREFBVyxDQUFDNUMsU0FBWixDQUFzQjJDLE1BQXRCLENBQVo7QUFFQSxTQUFPbkQsdURBQUssQ0FBRSxHQUFFQywyQ0FBSSw4QkFBNkJOLEtBQU0sRUFBM0MsRUFBOEM7QUFDeERPLFVBQU0sRUFBRTtBQURnRCxHQUE5QyxDQUFMLENBR0pPLElBSEksQ0FHRXBCLFFBQUQsSUFBYztBQUNsQixXQUFPQSxRQUFRLENBQUNxQixJQUFULEVBQVA7QUFDRCxHQUxJLEVBTUpDLEtBTkksQ0FNR0MsR0FBRCxJQUFTQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQU5YLENBQVA7QUFPRCxDQVZNO0FBWUEsTUFBTXNFLG1CQUFtQixHQUFJL0IsTUFBRCxJQUFZO0FBQzdDdEMsU0FBTyxDQUFDQyxHQUFSLENBQVksa0JBQVosRUFBZ0NxQyxNQUFoQztBQUVBLE1BQUl4RCxLQUFLLEdBQUd5RCxtREFBVyxDQUFDNUMsU0FBWixDQUFzQjJDLE1BQXRCLENBQVo7QUFFQXRDLFNBQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaLEVBQStCcUMsTUFBL0I7QUFFQSxTQUFPbkQsdURBQUssQ0FBRSxHQUFFQywyQ0FBSSxtQ0FBa0NOLEtBQU0sRUFBaEQsRUFBbUQ7QUFDN0RPLFVBQU0sRUFBRTtBQURxRCxHQUFuRCxDQUFMLENBR0pPLElBSEksQ0FHRXBCLFFBQUQsSUFBYztBQUNsQixXQUFPQSxRQUFRLENBQUNxQixJQUFULEVBQVA7QUFDRCxHQUxJLEVBTUpDLEtBTkksQ0FNR0MsR0FBRCxJQUFTQyxPQUFPLENBQUNDLEdBQVIsQ0FBWUYsR0FBWixDQU5YLENBQVA7QUFPRCxDQWRNLEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeFJQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTXdGLGVBQWUsR0FBRyxNQUFNO0FBQzVCLHNCQUNFO0FBQUEsNEJBQ0U7QUFBQSw2QkFDRSxxRUFBQyxnREFBRDtBQUFBLCtCQUNFO0FBQVEsYUFBRyxFQUFDO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURGLGVBTUU7QUFBUSxXQUFLLEVBQUU7QUFBRUMsa0JBQVUsRUFBRTtBQUFkLE9BQWY7QUFBMEMsZUFBUyxFQUFDLGFBQXBEO0FBQUEsOEJBQ0U7QUFDRSxhQUFLLEVBQUU7QUFDTEMscUJBQVcsRUFBRSxDQURSO0FBRUxDLHNCQUFZLEVBQUUsQ0FGVDtBQUdMQyxxQkFBVyxFQUFFLENBSFI7QUFJTEMsb0JBQVUsRUFBRSxDQUpQO0FBS0xDLHNCQUFZLEVBQUUsTUFMVDtBQU1MQyxlQUFLLEVBQUUsTUFORjtBQU9MQyxtQkFBUyxFQUFFLFFBUE47QUFRTEMsaUJBQU8sRUFBRSxNQVJKO0FBU0xDLHVCQUFhLEVBQUU7QUFUVixTQURUO0FBQUEsZ0NBYUU7QUFDRSxtQkFBUyxFQUFDLEtBRFo7QUFFRSxlQUFLLEVBQUU7QUFDTFIsdUJBQVcsRUFBRSxDQURSO0FBRUxDLHdCQUFZLEVBQUUsQ0FGVDtBQUdMQyx1QkFBVyxFQUFFLENBSFI7QUFJTEMsc0JBQVUsRUFBRTtBQUpQLFdBRlQ7QUFBQSxrQ0FTRTtBQUFLLHFCQUFTLEVBQUMsVUFBZjtBQUEwQixpQkFBSyxFQUFFO0FBQUVHLHVCQUFTLEVBQUU7QUFBYixhQUFqQztBQUFBLG1DQUNFLHFFQUFDLGdEQUFEO0FBQU0sa0JBQUksRUFBQyxHQUFYO0FBQUEscUNBQ0U7QUFDRSxtQkFBRyxFQUFDLGFBRE47QUFFRSxxQkFBSyxFQUFFO0FBQUVHLHdCQUFNLEVBQUU7QUFBVixpQkFGVDtBQUdFLHlCQUFTLEVBQUMsZUFIWjtBQUlFLG1CQUFHLEVBQUc7QUFKUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBVEYsZUFvQkU7QUFDRSxxQkFBUyxFQUFHLFlBQVdDLGdFQUFNLENBQUNDLGlCQUFrQixFQURsRDtBQUVFLGlCQUFLLEVBQUU7QUFBRUoscUJBQU8sRUFBRSxNQUFYO0FBQW1CQywyQkFBYSxFQUFFO0FBQWxDLGFBRlQ7QUFBQSxvQ0FJRTtBQUFJLHVCQUFTLEVBQUVFLGdFQUFNLENBQUNFLGNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUpGLGVBS0UscUVBQUMsZ0RBQUQ7QUFBTSxrQkFBSSxFQUFDLEdBQVg7QUFBQSxxQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTEYsZUFRRSxxRUFBQyxnREFBRDtBQUFNLGtCQUFJLEVBQUMsR0FBWDtBQUFBLHFDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFSRixlQVdFLHFFQUFDLGdEQUFEO0FBQU0sa0JBQUksRUFBQyxHQUFYO0FBQUEscUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVhGLGVBY0UscUVBQUMsZ0RBQUQ7QUFBTSxrQkFBSSxFQUFDLEdBQVg7QUFBQSxxQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBZEYsZUFpQkUscUVBQUMsZ0RBQUQ7QUFBTSxrQkFBSSxFQUFDLEdBQVg7QUFBQSxxQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBakJGLGVBb0JFLHFFQUFDLGdEQUFEO0FBQU0sa0JBQUksRUFBQyxHQUFYO0FBQUEscUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQXBCRixlQXVCRSxxRUFBQyxnREFBRDtBQUFNLGtCQUFJLEVBQUMsR0FBWDtBQUFBLHFDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkF2QkYsZUEwQkUscUVBQUMsZ0RBQUQ7QUFBTSxrQkFBSSxFQUFDLEdBQVg7QUFBQSxxQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBMUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFwQkYsZUFrREU7QUFDRSxxQkFBUyxFQUFHLFlBQVdGLGdFQUFNLENBQUNDLGlCQUFrQixFQURsRDtBQUVFLGlCQUFLLEVBQUU7QUFBRUoscUJBQU8sRUFBRSxNQUFYO0FBQW1CQywyQkFBYSxFQUFFO0FBQWxDLGFBRlQ7QUFBQSxvQ0FJRTtBQUFJLHVCQUFTLEVBQUVFLGdFQUFNLENBQUNFLGNBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUpGLGVBS0UscUVBQUMsZ0RBQUQ7QUFBTSxrQkFBSSxFQUFDLEdBQVg7QUFBQSxxQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBTEYsZUFRRSxxRUFBQyxnREFBRDtBQUFNLGtCQUFJLEVBQUMsR0FBWDtBQUFBLHFDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFSRixlQVdFLHFFQUFDLGdEQUFEO0FBQU0sa0JBQUksRUFBQyxHQUFYO0FBQUEscUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVhGLGVBY0UscUVBQUMsZ0RBQUQ7QUFBTSxrQkFBSSxFQUFDLEdBQVg7QUFBQSxxQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBZEYsZUFpQkUscUVBQUMsZ0RBQUQ7QUFBTSxrQkFBSSxFQUFDLEdBQVg7QUFBQSxxQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBakJGLGVBb0JFLHFFQUFDLGdEQUFEO0FBQU0sa0JBQUksRUFBQyxHQUFYO0FBQUEscUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQXBCRixlQXVCRSxxRUFBQyxnREFBRDtBQUFNLGtCQUFJLEVBQUMsR0FBWDtBQUFBLHFDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkF2QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWxERixlQTZFRTtBQUFLLHFCQUFTLEVBQUcsWUFBV0YsZ0VBQU0sQ0FBQ0csa0JBQW1CLEVBQXREO0FBQUEsb0NBQ0U7QUFBSSx1QkFBUyxFQUFFSCxnRUFBTSxDQUFDRSxjQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFERixlQUVFO0FBQ0UsbUJBQUssRUFBRTtBQUNMWiwyQkFBVyxFQUFFLENBRFI7QUFFTEMsNEJBQVksRUFBRSxDQUZUO0FBR0xHLDRCQUFZLEVBQUUsQ0FIVDtBQUlMVSw2QkFBYSxFQUFFLENBSlY7QUFLTEMseUJBQVMsRUFBRSxNQUxOO0FBTUxULHlCQUFTLEVBQUUsUUFOTjtBQU9MVSw4QkFBYyxFQUFFO0FBUFgsZUFEVDtBQUFBLHNDQVdFO0FBQUEsdUNBQ0U7QUFBRyxzQkFBSSxFQUFDLEdBQVI7QUFBQSx5Q0FDRSxxRUFBQywwREFBRDtBQUFhLHdCQUFJLEVBQUMsTUFBbEI7QUFBeUIseUJBQUssRUFBQztBQUEvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBWEYsZUFnQkU7QUFBQSx1Q0FDRTtBQUFHLHNCQUFJLEVBQUMsR0FBUjtBQUFBLHlDQUNFLHFFQUFDLDBEQUFEO0FBQWEsd0JBQUksRUFBQyxNQUFsQjtBQUF5Qix5QkFBSyxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFoQkYsZUFxQkU7QUFBQSx1Q0FDRTtBQUFHLHNCQUFJLEVBQUMsR0FBUjtBQUFBLHlDQUNFLHFFQUFDLDJEQUFEO0FBQWMsd0JBQUksRUFBQyxNQUFuQjtBQUEwQix5QkFBSyxFQUFDO0FBQWhDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFyQkYsZUEwQkU7QUFBQSx1Q0FDRTtBQUFHLHNCQUFJLEVBQUMsR0FBUjtBQUFBLHlDQUNFLHFFQUFDLHdEQUFEO0FBQVcsd0JBQUksRUFBQyxNQUFoQjtBQUF1Qix5QkFBSyxFQUFDO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkExQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkE3RUY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQWJGLGVBOEhFO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBOUhGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQWlJRTtBQUNFLGFBQUssRUFBRTtBQUNMVCxpQkFBTyxFQUFFLE1BREo7QUFFTEMsdUJBQWEsRUFBRSxLQUZWO0FBR0xTLHlCQUFlLEVBQUUsU0FIWjtBQUlMWixlQUFLLEVBQUUsTUFKRjtBQUtMRixvQkFBVSxFQUFFLE1BTFA7QUFNTEQscUJBQVcsRUFBRSxNQU5SO0FBT0xGLHFCQUFXLEVBQUUsTUFQUjtBQVFMQyxzQkFBWSxFQUFFO0FBUlQsU0FEVDtBQUFBLGdDQVlFO0FBQUssZUFBSyxFQUFFO0FBQUVpQixpQkFBSyxFQUFFO0FBQVQsV0FBWjtBQUFBLGlDQUNFO0FBQUcsaUJBQUssRUFBRTtBQUFFQyxtQkFBSyxFQUFFO0FBQVQsYUFBVjtBQUFBLHFDQUNlLEdBRGYsZUFFRSxxRUFBQyxnREFBRDtBQUFNLGtCQUFJLEVBQUMsR0FBWDtBQUFBLHFDQUNFO0FBQUcscUJBQUssRUFBRTtBQUFFQSx1QkFBSyxFQUFFLFNBQVQ7QUFBb0JDLGdDQUFjLEVBQUU7QUFBcEMsaUJBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBWkYsZUFzQkU7QUFBSyxtQkFBUyxFQUFFVixnRUFBTSxDQUFDVyxpQkFBdkI7QUFBMEMsZUFBSyxFQUFFO0FBQUVILGlCQUFLLEVBQUU7QUFBVCxXQUFqRDtBQUFBLGlDQUNFO0FBQUcsaUJBQUssRUFBRTtBQUFFZix3QkFBVSxFQUFFLE1BQWQ7QUFBc0JELHlCQUFXLEVBQUU7QUFBbkMsYUFBVjtBQUFBLG9DQUNFLHFFQUFDLGdEQUFEO0FBQU0sa0JBQUksRUFBQyxHQUFYO0FBQUEscUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURGLDJCQUtFLHFFQUFDLGdEQUFEO0FBQU0sa0JBQUksRUFBQyxHQUFYO0FBQUEscUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUxGLDJCQVNFLHFFQUFDLGdEQUFEO0FBQU0sa0JBQUksRUFBQyxHQUFYO0FBQUEscUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVRGLDJCQWFFLHFFQUFDLGdEQUFEO0FBQU0sa0JBQUksRUFBQyxHQUFYO0FBQUEscUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQWJGLDJCQWlCRSxxRUFBQyxnREFBRDtBQUFNLGtCQUFJLEVBQUMsR0FBWDtBQUFBLHFDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFqQkYsMkJBcUJFLHFFQUFDLGdEQUFEO0FBQU0sa0JBQUksRUFBQyxHQUFYO0FBQUEscUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQXJCRiwyQkF5QkUscUVBQUMsZ0RBQUQ7QUFBTSxrQkFBSSxFQUFDLEdBQVg7QUFBQSxxQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBekJGLDJCQTZCRSxxRUFBQyxnREFBRDtBQUFNLGtCQUFJLEVBQUMsR0FBWDtBQUFBLHFDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkE3QkYsMkJBaUNFLHFFQUFDLGdEQUFEO0FBQU0sa0JBQUksRUFBQyxHQUFYO0FBQUEscUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQWpDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQXRCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBaklGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFORjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFERjtBQXlNRCxDQTFNRDs7QUE0TWVKLDhFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyTkE7O0FBQ0EsTUFBTTtBQUFFd0I7QUFBRixJQUFlQyxtQkFBTyxDQUFDLHNCQUFELENBQTVCO0FBRUE7QUFDQTtBQUNBOzs7QUFDQSxNQUFNQyxRQUFRLEdBQUlDLEtBQUQsSUFBVztBQUN4QixzQkFDSSxxRUFBQyxLQUFELENBQU8sUUFBUDtBQUFBLDRCQUNJO0FBQUEsNkJBQ0kscUVBQUMsZ0RBQUQ7QUFBQSwrQkFDSTtBQUNJLGFBQUcsRUFBQyxZQURSO0FBRUksY0FBSSxFQUFDO0FBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKLGVBU0k7QUFBSyxlQUFTLEVBQUMsVUFBZjtBQUEwQixhQUFPLEVBQUVBLEtBQUssQ0FBQ0M7QUFBekM7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQWFILENBZEQ7O0FBZWVGLHVFQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBWUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTs7QUFDQXRJLGtEQUFNLENBQUN5SSxrQkFBUCxHQUE2QkMsR0FBRCxJQUFTQyxnREFBUyxDQUFDQyxLQUFWLEVBQXJDOztBQUNBNUksa0RBQU0sQ0FBQzZJLHFCQUFQLEdBQWdDSCxHQUFELElBQVNDLGdEQUFTLENBQUNHLElBQVYsRUFBeEM7O0FBQ0E5SSxrREFBTSxDQUFDK0ksa0JBQVAsR0FBNkJMLEdBQUQsSUFBU0MsZ0RBQVMsQ0FBQ0csSUFBVixFQUFyQztBQUVBO0FBQ0E7QUFDQTs7O0FBQ0EsTUFBTUUsZUFBZSxHQUFHLE1BQU07QUFFMUIsUUFBTTtBQUFBLE9BQUNDLE1BQUQ7QUFBQSxPQUFTQztBQUFULE1BQXNCQyxzREFBUSxDQUFDLEtBQUQsQ0FBcEM7O0FBRUEsUUFBTUMsTUFBTSxHQUFHLE1BQU1GLFNBQVMsQ0FBQyxDQUFDRCxNQUFGLENBQTlCOztBQUVBLFFBQU1JLGdCQUFnQixHQUFHLE1BQU07QUFDM0Isd0JBQ0kscUVBQUMsaURBQUQ7QUFBUSxXQUFLLEVBQUMsTUFBZDtBQUFxQixVQUFJLE1BQXpCO0FBQTBCLFlBQU0sRUFBQyxJQUFqQztBQUFBLGlCQUNLbEgsbUVBQU0sTUFBTUEsbUVBQU0sR0FBR21ILElBQVQsS0FBa0IsQ0FBOUIsaUJBQ0cscUVBQUMsZ0RBQUQ7QUFBTSxZQUFJLEVBQUMsd0JBQVg7QUFBQSwrQkFDSSxxRUFBQyxrREFBRDtBQUFTLGVBQUssRUFBRTtBQUFFckIsaUJBQUssRUFBRTtBQUFULFdBQWhCO0FBQW9DLG1CQUFTLEVBQUMsa0JBQTlDO0FBQUEsb0JBQWtFc0IsZ0RBQVFBO0FBQTFFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUZSLEVBT0twSCxtRUFBTSxNQUFNQSxtRUFBTSxHQUFHbUgsSUFBVCxLQUFrQixDQUE5QixpQkFDRyxxRUFBQyxnREFBRDtBQUFNLFlBQUksRUFBQyx5QkFBWDtBQUFBLCtCQUNJLHFFQUFDLGtEQUFEO0FBQVMsZUFBSyxFQUFFO0FBQUVyQixpQkFBSyxFQUFFO0FBQVQsV0FBaEI7QUFBb0MsbUJBQVMsRUFBQyxrQkFBOUM7QUFBQSxvQkFBa0VzQixnREFBUUE7QUFBMUU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUlIsZUFjSSxxRUFBQyx3REFBRDtBQUFlLGVBQU8sRUFBRUg7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFkSixlQWVJLHFFQUFDLG1EQUFEO0FBQVUsY0FBTSxFQUFFSCxNQUFsQjtBQUEwQixjQUFNLE1BQWhDO0FBQUEsZ0NBQ0kscUVBQUMsOENBQUQ7QUFBSyxtQkFBUyxFQUFDLFNBQWY7QUFBeUIsZ0JBQU0sTUFBL0I7QUFBQSxxQkFDSzlHLG1FQUFNLEdBQUdtSCxJQUFULEtBQWtCLENBQWxCLGdCQUNHLHFFQUFDLGtEQUFEO0FBQUEsbUNBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxrQkFBSSxFQUFDLHlCQUFYO0FBQUEscUNBQ0kscUVBQUMsa0RBQUQ7QUFBUyxxQkFBSyxFQUFFO0FBQUUvQix3QkFBTSxFQUFFO0FBQVYsaUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBREgsZ0JBT0cscUVBQUMsa0RBQUQ7QUFBQSxtQ0FDSSxxRUFBQyxnREFBRDtBQUFNLGtCQUFJLEVBQUMsd0JBQVg7QUFBQSxxQ0FDSSxxRUFBQyxrREFBRDtBQUFTLHFCQUFLLEVBQUU7QUFBRUEsd0JBQU0sRUFBRTtBQUFWLGlCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVJSLGVBY0kscUVBQUMsK0RBQUQ7QUFBc0IsZUFBRyxNQUF6QjtBQUEwQixvQkFBUSxNQUFsQztBQUFBLG9DQUNJLHFFQUFDLHlEQUFEO0FBQWdCLGlCQUFHLE1BQW5CO0FBQW9CLG1CQUFLLE1BQXpCO0FBQTBCLG1CQUFLLEVBQUU7QUFBRUEsc0JBQU0sRUFBRTtBQUFWLGVBQWpDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKLGVBSUkscUVBQUMsdURBQUQ7QUFBYyxtQkFBSyxNQUFuQjtBQUFBLHNDQUNJLHFFQUFDLHVEQUFEO0FBQWMsb0JBQUksRUFBQyw0QkFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREosZUFJSSxxRUFBQyx1REFBRDtBQUFjLG9CQUFJLEVBQUMsOEJBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFKSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBZEosRUEyQktwRixtRUFBTSxNQUFNQSxtRUFBTSxHQUFHbUgsSUFBVCxLQUFrQixDQUE5QixpQkFDRyxxRUFBQyxrREFBRDtBQUFBLG1DQUNJLHFFQUFDLGdEQUFEO0FBQU0sa0JBQUksRUFBQyxxQ0FBWDtBQUFBLHFDQUNJLHFFQUFDLGtEQUFEO0FBQVMscUJBQUssRUFBRTtBQUFFL0Isd0JBQU0sRUFBRTtBQUFWLGlCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQTVCUixFQWtDS3BGLG1FQUFNLE1BQU1BLG1FQUFNLEdBQUdtSCxJQUFULEtBQWtCLENBQTlCLGlCQUNHLHFFQUFDLGtEQUFEO0FBQUEsbUNBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxrQkFBSSxFQUFDLDBCQUFYO0FBQUEscUNBQ0kscUVBQUMsa0RBQUQ7QUFBUyxxQkFBSyxFQUFFO0FBQUUvQix3QkFBTSxFQUFFO0FBQVYsaUJBQWhCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBbkNSLEVBeUNLcEYsbUVBQU0sTUFBTUEsbUVBQU0sR0FBR21ILElBQVQsS0FBa0IsQ0FBOUIsaUJBQ0cscUVBQUMsa0RBQUQ7QUFBQSxtQ0FDSSxxRUFBQyxnREFBRDtBQUFNLGtCQUFJLEVBQUMsc0NBQVg7QUFBQSxxQ0FDSSxxRUFBQyxrREFBRDtBQUFTLHFCQUFLLEVBQUU7QUFBRS9CLHdCQUFNLEVBQUU7QUFBVixpQkFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkExQ1IsRUFpREtwRixtRUFBTSxNQUFNQSxtRUFBTSxHQUFHbUgsSUFBVCxLQUFrQixDQUE5QixpQkFDRyxxRUFBQyxrREFBRDtBQUFBLG1DQUNJLHFFQUFDLGdEQUFEO0FBQU0sa0JBQUksRUFBQyx1Q0FBWDtBQUFBLHFDQUNJLHFFQUFDLGtEQUFEO0FBQVMscUJBQUssRUFBRTtBQUFFL0Isd0JBQU0sRUFBRTtBQUFWLGlCQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWxEUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUEwREkscUVBQUMsOENBQUQ7QUFBSyxtQkFBUyxFQUFDLFNBQWY7QUFBeUIsZ0JBQU0sTUFBL0I7QUFBQSxxQkFDS3BGLG1FQUFNLE1BQU1BLG1FQUFNLEdBQUdtSCxJQUFULEtBQWtCLENBQTlCLGlCQUNHLHFFQUFDLGtEQUFEO0FBQUEsbUNBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxrQkFBSSxFQUFDLHdCQUFYO0FBQUEscUNBQ0kscUVBQUMsa0RBQUQ7QUFBUyxxQkFBSyxFQUFFO0FBQUUvQix3QkFBTSxFQUFFO0FBQVYsaUJBQWhCO0FBQUEsMEJBQXlDLEdBQUVwRixtRUFBTSxHQUFHcUgsSUFBSztBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBRlIsRUFTS3JILG1FQUFNLE1BQU1BLG1FQUFNLEdBQUdtSCxJQUFULEtBQWtCLENBQTlCLGlCQUNHLHFFQUFDLGtEQUFEO0FBQUEsbUNBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxrQkFBSSxFQUFDLHlCQUFYO0FBQUEscUNBQ0kscUVBQUMsa0RBQUQ7QUFBUyxxQkFBSyxFQUFFO0FBQUUvQix3QkFBTSxFQUFFO0FBQVYsaUJBQWhCO0FBQUEsMEJBQXlDLEdBQUVwRixtRUFBTSxHQUFHcUgsSUFBSztBQUF6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBVlIsRUFpQktySCxtRUFBTSxtQkFDSCxxRUFBQyxrREFBRDtBQUFBLG1DQUNJLHFFQUFDLGtEQUFEO0FBQVMsbUJBQUssRUFBRTtBQUFFb0Ysc0JBQU0sRUFBRTtBQUFWLGVBQWhCO0FBQXVDLHFCQUFPLEVBQUUsTUFBTXhILG9FQUFPLENBQUMsTUFBTUMsa0RBQU0sQ0FBQ3lKLE9BQVAsQ0FBZSwwQkFBZixDQUFQLENBQTdEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFsQlI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQTFESjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBZko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURKO0FBcUdILEdBdEdEO0FBd0dBOzs7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsY0FBRDtBQUFBLE9BQWlCQztBQUFqQixNQUFzQ1Isc0RBQVEsQ0FBQyxLQUFELENBQXBEO0FBQ0EsUUFBTTtBQUFBLE9BQUNTLGVBQUQ7QUFBQSxPQUFrQkM7QUFBbEIsTUFBd0NWLHNEQUFRLENBQUMsS0FBRCxDQUF0RDtBQUNBLFFBQU07QUFBQSxPQUFDVyxvQkFBRDtBQUFBLE9BQXVCQztBQUF2QixNQUFrRFosc0RBQVEsQ0FBQyxLQUFELENBQWhFO0FBRUE7O0FBQ0EsUUFBTWEsd0JBQXdCLEdBQUcsTUFBTTtBQUNuQ0wscUJBQWlCLENBQUVNLFNBQUQsSUFBZTtBQUM3QixhQUFPO0FBQ0hQLHNCQUFjLEVBQUUsQ0FBQ08sU0FBUyxDQUFDUDtBQUR4QixPQUFQO0FBR0gsS0FKZ0IsQ0FBakI7QUFLSCxHQU5EO0FBUUE7OztBQUNBLFFBQU1RLDhCQUE4QixHQUFHLE1BQU07QUFDekNMLHNCQUFrQixDQUFFSSxTQUFELElBQWU7QUFDOUIsYUFBTztBQUNITCx1QkFBZSxFQUFFLENBQUNLLFNBQVMsQ0FBQ0w7QUFEekIsT0FBUDtBQUdILEtBSmlCLENBQWxCO0FBS0gsR0FORDtBQVFJOzs7QUFDSixRQUFNTyw0QkFBNEIsR0FBRyxNQUFNO0FBQ3ZDTixzQkFBa0IsQ0FBQyxLQUFELENBQWxCO0FBQ0gsR0FGRDtBQUtBOzs7QUFDQSxRQUFNTyxtQ0FBbUMsR0FBRyxNQUFNO0FBQzlDTCwyQkFBdUIsQ0FBRUUsU0FBRCxJQUFlO0FBQ25DLGFBQU87QUFDSEgsNEJBQW9CLEVBQUUsQ0FBQ0csU0FBUyxDQUFDSDtBQUQ5QixPQUFQO0FBR0gsS0FKc0IsQ0FBdkI7QUFLSCxHQU5EO0FBUUk7OztBQUNKLFFBQU1PLGlDQUFpQyxHQUFHLE1BQU07QUFDNUNOLDJCQUF1QixDQUFDLEtBQUQsQ0FBdkI7QUFDSCxHQUZEO0FBSUE7OztBQUNBLFFBQU1PLG9CQUFvQixHQUFHLE1BQU07QUFDL0JYLHFCQUFpQixDQUFDLEtBQUQsQ0FBakI7QUFDSCxHQUZEOztBQUlBLE1BQUlZLFlBQUo7QUFFQTs7QUFDQSxNQUFJYixjQUFKLEVBQW9CO0FBQ2hCYSxnQkFBWSxnQkFBRyxxRUFBQyxrREFBRDtBQUFVLFdBQUssRUFBRUQ7QUFBakI7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFBZjtBQUNIOztBQUVELHNCQUNJO0FBQUEsNEJBQ0k7QUFBQSw2QkFDSSxxRUFBQyxnREFBRDtBQUFBLCtCQUNJO0FBQ0ksYUFBRyxFQUFDLFlBRFI7QUFFSSxjQUFJLEVBQUM7QUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosRUFVSW5JLG1FQUFNLEtBQUtrSCxnQkFBZ0IsRUFBckIsZ0JBQ047QUFBQSw4QkFDSSxxRUFBQyxvREFBRDtBQUFZLDRCQUFvQixFQUFFUyxvQkFBbEM7QUFBd0QsZ0NBQXdCLEVBQUVPLGlDQUFsRjtBQUFxSCxnQ0FBd0IsRUFBRUQsbUNBQS9JO0FBQW9MLHFCQUFhLEVBQUVELDRCQUFuTTtBQUFpTyxpQkFBUyxFQUFFUCxlQUE1TztBQUE2UCwyQkFBbUIsRUFBRU0sOEJBQWxSO0FBQWtULDBCQUFrQixFQUFFRjtBQUF0VTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBRUkscUVBQUMsb0RBQUQ7QUFBWSxZQUFJLEVBQUVOO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkosRUFHS2EsWUFITCxlQUlJLHFFQUFDLHlEQUFEO0FBQWMsWUFBSSxFQUFFWDtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKLGVBS0kscUVBQUMsOERBQUQ7QUFBYSxZQUFJLEVBQUVFO0FBQW5CO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBTEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVhKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBcUJILENBMUxEOztBQTRMZWQsOEVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzlOQTtBQUNBO0FBRUE7QUFDQTtBQUNBOztBQUNBLE1BQU13QixrQkFBa0IsR0FBSWpDLEtBQUQsSUFBVztBQUNsQyxNQUFJa0MsYUFBYSxHQUFHLHVCQUFwQjs7QUFFQSxNQUFJbEMsS0FBSyxDQUFDbUMsSUFBVixFQUFnQjtBQUNaRCxpQkFBYSxHQUFHLDRCQUFoQjtBQUNIOztBQUVELFFBQU07QUFBQSxPQUFDRSxNQUFEO0FBQUEsT0FBU0M7QUFBVCxNQUFzQnpCLHNEQUFRLENBQUM7QUFDakMwQixhQUFTLEVBQUU7QUFEc0IsR0FBRCxDQUFwQztBQUlBLFFBQU07QUFBRUE7QUFBRixNQUFnQkYsTUFBdEI7O0FBRUEsUUFBTUcsWUFBWSxHQUFJQyxDQUFELElBQU87QUFDeEJILGFBQVMsaUNBQU1ELE1BQU47QUFBY0UsZUFBUyxFQUFFRSxDQUFDLENBQUNDLE1BQUYsQ0FBU2xKO0FBQWxDLE9BQVQ7QUFDSCxHQUZEOztBQUlBLFFBQU1tSixXQUFXLEdBQUlGLENBQUQsSUFBTztBQUN2QkEsS0FBQyxDQUFDRyxjQUFGO0FBQ0FsTCxzREFBTSxDQUFDQyxJQUFQLENBQWEsV0FBVTRLLFNBQVUsRUFBakM7QUFDSCxHQUhEOztBQUtBLHNCQUNJO0FBQUssYUFBUyxFQUFFSixhQUFoQjtBQUFBLDJCQUNJO0FBQU0sY0FBUSxFQUFFUSxXQUFoQjtBQUE2QixXQUFLLEVBQUU7QUFBRTVELGVBQU8sRUFBRSxNQUFYO0FBQW1CQyxxQkFBYSxFQUFFO0FBQWxDLE9BQXBDO0FBQUEsOEJBQ0k7QUFDSSxhQUFLLEVBQUU7QUFDSFcsZUFBSyxFQUFFLFNBREo7QUFFSGtELGlCQUFPLEVBQUUsS0FGTjtBQUdIQyxnQkFBTSxFQUFFLE1BSEw7QUFJSHJELHlCQUFlLEVBQUUsU0FKZDtBQUtIWixlQUFLLEVBQUUsS0FMSjtBQU1Ia0UsY0FBSSxFQUFFLENBTkg7QUFPSEMsZ0JBQU0sRUFBRSxDQVBMO0FBUUhDLGlCQUFPLEVBQUUsS0FSTjtBQVNIQyxnQkFBTSxFQUFFLE9BVEw7QUFVSEMsc0JBQVksRUFBRSxTQVZYO0FBV0hDLG1CQUFTLEVBQUUsNkJBWFI7QUFZSEMsa0JBQVEsRUFBRTtBQVpQLFNBRFg7QUFlSSxnQkFBUSxFQUFFYixZQWZkO0FBZ0JJLGFBQUssRUFBRUQsU0FoQlg7QUFpQkksaUJBQVMsRUFBQyxjQWpCZDtBQWtCSSxtQkFBVyxFQUFDLGdCQWxCaEI7QUFtQkksWUFBSSxFQUFDLFFBbkJUO0FBb0JJLGdCQUFRO0FBcEJaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUFzQkk7QUFDSSxZQUFJLEVBQUMsUUFEVDtBQUVJLGlCQUFTLEVBQUMsS0FGZDtBQUdJLGFBQUssRUFBRTtBQUNITSxpQkFBTyxFQUFFLEdBRE47QUFFSE0sc0JBQVksRUFBRSxTQUZYO0FBR0h0RSxlQUFLLEVBQUUsS0FISjtBQUlIdUUsbUJBQVMsRUFBRSw2QkFKUjtBQUtIM0QseUJBQWUsRUFBRSxTQUxkO0FBTUhFLGVBQUssRUFBRSxTQU5KO0FBT0gyRCxlQUFLLEVBQUU7QUFQSixTQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXRCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUF3Q0gsQ0E5REQ7O0FBZ0VlcEIsaUZBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDdEVBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUEsa0JBQWtCLEdBQUlqQyxLQUFELElBQVc7QUFDbEMsTUFBSWtDLGFBQWEsR0FBRyxnQkFBcEI7O0FBRUEsTUFBSWxDLEtBQUssQ0FBQ21DLElBQVYsRUFBZ0I7QUFDWkQsaUJBQWEsR0FBRyxxQkFBaEI7QUFDSDs7QUFHRCxRQUFNO0FBQUEsT0FBQ0UsTUFBRDtBQUFBLE9BQVNDO0FBQVQsTUFBc0J6QixzREFBUSxDQUFDO0FBQ2pDMEIsYUFBUyxFQUFFO0FBRHNCLEdBQUQsQ0FBcEM7QUFJQSxRQUFNO0FBQUVBO0FBQUYsTUFBZ0JGLE1BQXRCOztBQUVBLFFBQU1HLFlBQVksR0FBSUMsQ0FBRCxJQUFPO0FBQ3hCSCxhQUFTLENBQUM7QUFBRUMsZUFBUyxFQUFFRSxDQUFDLENBQUNDLE1BQUYsQ0FBU2xKO0FBQXRCLEtBQUQsQ0FBVDtBQUNILEdBRkQ7O0FBSUEsUUFBTW1KLFdBQVcsR0FBSUYsQ0FBRCxJQUFPO0FBQ3ZCQSxLQUFDLENBQUNHLGNBQUY7QUFDQWxMLHNEQUFNLENBQUNDLElBQVAsQ0FBYSxZQUFXNEssU0FBVSxFQUFsQztBQUNILEdBSEQ7O0FBTUEsc0JBQ0k7QUFBSyxhQUFTLEVBQUVKLGFBQWhCO0FBQUEsMkJBQ0k7QUFBTSxjQUFRLEVBQUVRLFdBQWhCO0FBQTZCLFdBQUssRUFBRTtBQUFFOUQsYUFBSyxFQUFFLE1BQVQ7QUFBaUJFLGVBQU8sRUFBRSxNQUExQjtBQUFrQ0MscUJBQWEsRUFBRTtBQUFqRCxPQUFwQztBQUFBLDhCQUNJO0FBQ0ksYUFBSyxFQUFFO0FBQ0hSLHFCQUFXLEVBQUUsTUFEVjtBQUVIQyxzQkFBWSxFQUFFLE1BRlg7QUFHSGtCLGVBQUssRUFBRSxTQUhKO0FBSUhrRCxpQkFBTyxFQUFFLEtBSk47QUFLSEMsZ0JBQU0sRUFBRSxNQUxMO0FBTUhyRCx5QkFBZSxFQUFFLFNBTmQ7QUFPSFosZUFBSyxFQUFFLEtBUEo7QUFRSGtFLGNBQUksRUFBRSxDQVJIO0FBU0hDLGdCQUFNLEVBQUUsQ0FUTDtBQVVIQyxpQkFBTyxFQUFFLEtBVk47QUFXSEMsZ0JBQU0sRUFBRSxPQVhMO0FBWUhDLHNCQUFZLEVBQUUsU0FaWDtBQWFIQyxtQkFBUyxFQUFFLDZCQWJSO0FBY0hDLGtCQUFRLEVBQUU7QUFkUCxTQURYO0FBaUJJLGdCQUFRLEVBQUViLFlBakJkO0FBa0JJLGFBQUssRUFBRUQsU0FsQlg7QUFtQkksaUJBQVMsRUFBQyxjQW5CZDtBQW9CSSxtQkFBVyxFQUFDLGdCQXBCaEI7QUFxQkksWUFBSSxFQUFDLFFBckJUO0FBc0JJLGdCQUFRO0FBdEJaO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBREosZUF3Qkk7QUFDSSxZQUFJLEVBQUMsUUFEVDtBQUVJLGlCQUFTLEVBQUMsS0FGZDtBQUdJLGFBQUssRUFBRTtBQUNITSxpQkFBTyxFQUFFLEdBRE47QUFFSE0sc0JBQVksRUFBRSxTQUZYO0FBR0h0RSxlQUFLLEVBQUUsS0FISjtBQUlIdUUsbUJBQVMsRUFBRSw2QkFKUjtBQUtIM0QseUJBQWUsRUFBRSxTQUxkO0FBTUhFLGVBQUssRUFBRSxTQU5KO0FBT0gyRCxlQUFLLEVBQUU7QUFQSixTQUhYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQXhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREo7QUEyQ0gsQ0FuRUQ7O0FBcUVlcEIsaUZBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDM0VBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUNBOztBQUNBLE1BQU1xQixVQUFVLEdBQUl0RCxLQUFELElBQVc7QUFDMUIsTUFBSWtDLGFBQWEsR0FBRyxhQUFwQjs7QUFFQSxNQUFJbEMsS0FBSyxDQUFDbUMsSUFBVixFQUFnQjtBQUNaRCxpQkFBYSxHQUFHLGtCQUFoQjtBQUNIOztBQUNELHNCQUNJO0FBQUEsNEJBQ0k7QUFBQSw2QkFDSSxxRUFBQyxnREFBRDtBQUFBLCtCQUNJO0FBQ0ksYUFBRyxFQUFDLFlBRFI7QUFFSSxjQUFJLEVBQUM7QUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFTSTtBQUFLLGVBQVMsRUFBRUEsYUFBaEI7QUFBQSw4QkFDSTtBQUFLLGFBQUssRUFBRTtBQUFFYyxpQkFBTyxFQUFFLENBQVg7QUFBY0QsZ0JBQU0sRUFBRSxDQUF0QjtBQUF3QmxFLG1CQUFTLEVBQUM7QUFBbEMsU0FBWjtBQUFBLCtCQUNJLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFDLEdBQVg7QUFBQSxpQ0FBZTtBQUFLLGVBQUcsRUFBQyxhQUFUO0FBQXVCLGlCQUFLLEVBQUU7QUFBRW1FLHFCQUFPLEVBQUUsQ0FBWDtBQUFjRCxvQkFBTSxFQUFFLENBQXRCO0FBQXlCL0Qsb0JBQU0sRUFBRSxTQUFqQztBQUEyQ0gsdUJBQVMsRUFBQztBQUFyRCxhQUE5QjtBQUErRixxQkFBUyxFQUFDLGVBQXpHO0FBQXlILGVBQUcsRUFBRyxHQUFFMEUsOENBQU87QUFBeEk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURKLGVBSUk7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSwrQkFDSTtBQUFJLGVBQUssRUFBRTtBQUFFL0QsMkJBQWUsRUFBRTtBQUFuQjtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQUpKLGVBT0k7QUFBSyxpQkFBUyxFQUFDLFdBQWY7QUFBQSwrQkFDSTtBQUFBLGtDQUNJO0FBQUEsbUNBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxrQkFBSSxFQUFDLEdBQVg7QUFBQSxxQ0FBZTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQURKLGVBSUk7QUFBQSxtQ0FDSSxxRUFBQyxnREFBRDtBQUFNLGtCQUFJLEVBQUMsT0FBWDtBQUFBLHFDQUFtQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFuQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKSixlQU9JO0FBQUEsbUNBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxrQkFBSSxFQUFDLFVBQVg7QUFBQSxxQ0FBc0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBUEosZUFVSTtBQUFBLG1DQUNJLHFFQUFDLGdEQUFEO0FBQU0sa0JBQUksRUFBQyxTQUFYO0FBQUEscUNBQXFCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXJCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVZKLGVBYUk7QUFBQSxtQ0FDSSxxRUFBQyxnREFBRDtBQUFNLGtCQUFJLEVBQUMsUUFBWDtBQUFBLHFDQUFvQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFwQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFiSixlQWdCSTtBQUFBLG1DQUNJLHFFQUFDLGdEQUFEO0FBQU0sa0JBQUksRUFBQyxVQUFYO0FBQUEscUNBQXNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWhCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVBKLGVBNkJJO0FBQUssaUJBQVMsRUFBQyxXQUFmO0FBQUEsK0JBQ0k7QUFBSSxlQUFLLEVBQUU7QUFBRUEsMkJBQWUsRUFBRTtBQUFuQjtBQUFYO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQTdCSixlQWdDSTtBQUFLLGlCQUFTLEVBQUMscUJBQWY7QUFBQSxnQ0FDSTtBQUFBLGlDQUNJO0FBQUksaUJBQUssRUFBRTtBQUFFakIseUJBQVcsRUFBRSxDQUFmO0FBQWtCQywwQkFBWSxFQUFFLENBQWhDO0FBQW1DRywwQkFBWSxFQUFFLENBQWpEO0FBQW9EVSwyQkFBYSxFQUFFLENBQW5FO0FBQXNFQyx1QkFBUyxFQUFFLE1BQWpGO0FBQXlGVCx1QkFBUyxFQUFFLFFBQXBHO0FBQThHVSw0QkFBYyxFQUFFO0FBQTlILGFBQVg7QUFBQSxvQ0FDSTtBQUFBLHFDQUFJO0FBQUcsb0JBQUksRUFBQyxHQUFSO0FBQUEsdUNBQVkscUVBQUMsMERBQUQ7QUFBYSxzQkFBSSxFQUFDLE1BQWxCO0FBQXlCLHVCQUFLLEVBQUM7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQURKLGVBRUk7QUFBQSxxQ0FBSTtBQUFHLG9CQUFJLEVBQUMsR0FBUjtBQUFBLHVDQUFZLHFFQUFDLDBEQUFEO0FBQWEsc0JBQUksRUFBQyxNQUFsQjtBQUF5Qix1QkFBSyxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGSixlQUdJO0FBQUEscUNBQUk7QUFBRyxvQkFBSSxFQUFDLEdBQVI7QUFBQSx1Q0FBWSxxRUFBQywyREFBRDtBQUFjLHNCQUFJLEVBQUMsTUFBbkI7QUFBMEIsdUJBQUssRUFBQztBQUFoQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQVo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSEosZUFJSTtBQUFBLHFDQUFJO0FBQUcsb0JBQUksRUFBQyxHQUFSO0FBQUEsdUNBQVkscUVBQUMsd0RBQUQ7QUFBVyxzQkFBSSxFQUFDLE1BQWhCO0FBQXVCLHVCQUFLLEVBQUM7QUFBN0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBSjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQUpKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREosZUFTSTtBQUFBLGlDQUNJO0FBQUEsb0NBQ0k7QUFBQSxxQ0FBSTtBQUFHLG9CQUFJLEVBQUMsR0FBUjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFKO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBREosZUFFSTtBQUFBLHFDQUFJO0FBQUcsb0JBQUksRUFBQyxHQUFSO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUo7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFGSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVRKLGVBZUk7QUFBQSx3REFBdUI7QUFBRyxnQkFBSSxFQUFDLEdBQVI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBQXZCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFmSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBaENKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFUSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsZUFESjtBQThESCxDQXBFRDs7QUFzRWUrRCx5RUFBZixFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbEZBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFFQSxNQUFNRSxrQkFBa0IsR0FBSXhELEtBQUQsSUFBVztBQUNwQyxzQkFDRTtBQUFBLDJCQUNFO0FBQUssZUFBUyxFQUFDLDRCQUFmO0FBQUEsaUJBQ0dBLEtBQUssQ0FBQ3lELEtBQU4sZ0JBQ0M7QUFDRSxpQkFBUyxFQUFDLGtDQURaO0FBRUUsZUFBTyxFQUFFekQsS0FBSyxDQUFDMEQsYUFGakI7QUFHRSxhQUFLLEVBQUMsUUFIUjtBQUFBLCtCQUtFLHFFQUFDLHNEQUFEO0FBQVMsY0FBSSxFQUFDLFFBQWQ7QUFBdUIsZUFBSyxFQUFDO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQURELGdCQVNDO0FBQ0UsaUJBQVMsRUFBQyxrQ0FEWjtBQUVFLGVBQU8sRUFBRTFELEtBQUssQ0FBQzdGLE1BRmpCO0FBR0UsYUFBSyxFQUFDLG9CQUhSO0FBQUEsK0JBS0UscUVBQUMsdURBQUQ7QUFBVSxjQUFJLEVBQUMsUUFBZjtBQUF3QixlQUFLLEVBQUM7QUFBOUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUxGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVkosZUFtQkU7QUFDRSxhQUFLLEVBQUMsb0JBRFI7QUFFRSxpQkFBUyxFQUFDLGVBRlo7QUFHRSxlQUFPLEVBQUU2RixLQUFLLENBQUNDLEtBSGpCO0FBQUEsZ0NBS0U7QUFBSyxtQkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMRixlQU1FO0FBQUssbUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBTkYsZUFPRTtBQUFLLG1CQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFuQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBaUNELENBbENEOztBQW9DZXVELGlGQUFmLEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUcsVUFBVSxHQUFJM0QsS0FBRCxJQUFXO0FBQzFCLHNCQUNJO0FBQUEsNEJBQ0k7QUFBQSw2QkFDSSxxRUFBQyxnREFBRDtBQUFBLCtCQUNJO0FBQ0ksYUFBRyxFQUFDLFlBRFI7QUFFSSxjQUFJLEVBQUM7QUFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREosZUFTSTtBQUFRLGVBQVMsRUFBQyxTQUFsQjtBQUFBLDZCQUNJO0FBQUssaUJBQVMsRUFBQyxxQkFBZjtBQUFBLGdDQUVJO0FBQUssbUJBQVMsRUFBQyxlQUFmO0FBQUEsaUNBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxnQkFBSSxFQUFDLEdBQVg7QUFBQSxtQ0FBZTtBQUFLLGlCQUFHLEVBQUMsYUFBVDtBQUF1QixtQkFBSyxFQUFFO0FBQUVoQixzQkFBTSxFQUFFO0FBQVYsZUFBOUI7QUFBcUQsdUJBQVMsRUFBQyxlQUEvRDtBQUErRSxpQkFBRyxFQUFHLEdBQUV1RSw4Q0FBTztBQUE5RjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBRkosZUFLSTtBQUFLLG1CQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQUxKLGVBTUk7QUFBSyxtQkFBUyxFQUFDLDBCQUFmO0FBQUEsaUNBQ0k7QUFBQSxvQ0FDSTtBQUFBLHFDQUNJLHFFQUFDLGdEQUFEO0FBQU0sb0JBQUksRUFBQyxHQUFYO0FBQUEsdUNBQWU7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFESixlQUlJO0FBQUEscUNBQ0kscUVBQUMsZ0RBQUQ7QUFBTSxvQkFBSSxFQUFDLE9BQVg7QUFBQSx1Q0FBbUI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBbkI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURKO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBSkosZUFPSTtBQUFBLHFDQUNJLHFFQUFDLGdEQUFEO0FBQU0sb0JBQUksRUFBQyxVQUFYO0FBQUEsdUNBQXNCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXRCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHlCQVBKLGVBVUk7QUFBQSxxQ0FDSSxxRUFBQyxnREFBRDtBQUFNLG9CQUFJLEVBQUMsU0FBWDtBQUFBLHVDQUFxQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFyQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFWSixlQWFJO0FBQUssdUJBQVMsRUFBQyxrQ0FBZjtBQUFBLHdCQUNLdkQsS0FBSyxDQUFDNEQsb0JBQU4sZ0JBQ0Q7QUFBSyx5QkFBUyxFQUFDLGtDQUFmO0FBQWtELHVCQUFPLEVBQUU1RCxLQUFLLENBQUM2RCx3QkFBakU7QUFBMkYscUJBQUssRUFBQyxRQUFqRztBQUFBLHVDQUEwRyxxRUFBQyxzREFBRDtBQUFTLHNCQUFJLEVBQUMsUUFBZDtBQUF1Qix1QkFBSyxFQUFDO0FBQTdCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBMUc7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFEQyxnQkFFQTtBQUFLLHlCQUFTLEVBQUMsa0NBQWY7QUFBa0QsdUJBQU8sRUFBRTdELEtBQUssQ0FBQzhELHdCQUFqRTtBQUEyRixxQkFBSyxFQUFDLG9CQUFqRztBQUFBLHVDQUFzSCxxRUFBQyx1REFBRDtBQUFVLHNCQUFJLEVBQUMsUUFBZjtBQUF3Qix1QkFBSyxFQUFDO0FBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBdEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUhMO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBYko7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREo7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFOSixlQThCSTtBQUFLLG1CQUFTLEVBQUMsd0JBQWY7QUFBQSxpQ0FDSSxxRUFBQyx5REFBRDtBQUFvQix5QkFBYSxFQUFFOUQsS0FBSyxDQUFDMEQsYUFBekM7QUFBd0QsaUJBQUssRUFBRTFELEtBQUssQ0FBQytELFNBQXJFO0FBQWdGLGtCQUFNLEVBQUUvRCxLQUFLLENBQUNnRSxtQkFBOUY7QUFBbUgsaUJBQUssRUFBRWhFLEtBQUssQ0FBQ2lFO0FBQWhJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQTlCSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFESjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVRKO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURKO0FBZ0RILENBakREOztBQW1EZU4seUVBQWYsRTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0RBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNTyxNQUFNLEdBQUcsQ0FBQztBQUFFQztBQUFGLENBQUQsS0FBa0I7QUFDL0Isc0JBQ0U7QUFBQSwyQkFDRTtBQUFBLDhCQUNFLHFFQUFDLGdEQUFEO0FBQUEsK0JBQ0U7QUFDRSxjQUFJLEVBQUMsVUFEUDtBQUVFLGlCQUFPLEVBQUM7QUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQU9FLHFFQUFDLGdFQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBUEYsRUFRR0EsUUFSSCxlQVNFLHFFQUFDLCtDQUFEO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBVEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxlQURGO0FBZUQsQ0FoQkQ7O0FBaUJlRCxxRUFBZixFOzs7Ozs7Ozs7Ozs7QUN4QkE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQSxNQUFNO0FBQUVFO0FBQUYsSUFBMEJDLGtEQUFTLEVBQXpDO0FBRU8sTUFBTW5NLEdBQUcsR0FBR2tNLG1CQUFtQixDQUFDRSxVQUFwQixHQUNmRixtQkFBbUIsQ0FBQ0csY0FETCxHQUVmSCxtQkFBbUIsQ0FBQ0ksZUFGakI7QUFJQSxNQUFNeEQsUUFBUSxHQUFHb0QsbUJBQW1CLENBQUNwRCxRQUFyQztBQUVBLE1BQU11QyxNQUFNLEdBQUdhLG1CQUFtQixDQUFDRSxVQUFwQixHQUNsQkYsbUJBQW1CLENBQUNLLGlCQURGLEdBRWxCTCxtQkFBbUIsQ0FBQ00sa0JBRmpCO0FBSUEsTUFBTUMsU0FBUyxHQUFHUCxtQkFBbUIsQ0FBQ08sU0FBdEM7QUFFQSxNQUFNQyxnQkFBZ0IsR0FBR1IsbUJBQW1CLENBQUNRLGdCQUE3QztBQUVBLE1BQU1DLGFBQWEsR0FBR1QsbUJBQW1CLENBQUNTLGFBQTFDLEM7Ozs7Ozs7Ozs7O0FDakJQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0M7Ozs7Ozs7Ozs7O0FDTkEsY0FBYyxtQkFBTyxDQUFDLDBFQUFtQjs7QUFFekM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUEseUM7Ozs7Ozs7Ozs7O0FDdERBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQSx5Qjs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTs7QUFFQTs7QUFRQTs7QUF1QkE7QUFDQSxNQUFNQyxTQUFTLEdBQUcsSUFBbEIsR0FBa0IsRUFBbEI7QUFDQSxNQUFNQyxvQkFBb0IsR0FDeEIsUUFBZ0NDLFNBQWhDLEdBREY7QUFFQSxNQUFNQyxVQUEyQyxHQUFqRDs7QUFFQSx1QkFBeUQ7QUFDdkQ7QUFDQSxzQkFBb0I7QUFDbEI7QUFHRixHQU51RCxDQU12RDs7O0FBQ0EsTUFBSSxDQUFKLHNCQUEyQjtBQUN6QjtBQUdGOztBQUFBLFNBQVFDLGNBQWMsR0FBRyx5QkFDdEJDLE9BQUQsSUFBYTtBQUNYQSxXQUFPLENBQVBBLFFBQWlCQyxLQUFELElBQVc7QUFDekIsVUFBSSxDQUFDTixTQUFTLENBQVRBLElBQWNNLEtBQUssQ0FBeEIsTUFBS04sQ0FBTCxFQUFrQztBQUNoQztBQUdGOztBQUFBLFlBQU1PLEVBQUUsR0FBR1AsU0FBUyxDQUFUQSxJQUFjTSxLQUFLLENBQTlCLE1BQVdOLENBQVg7O0FBQ0EsVUFBSU0sS0FBSyxDQUFMQSxrQkFBd0JBLEtBQUssQ0FBTEEsb0JBQTVCLEdBQXlEO0FBQ3ZERixzQkFBYyxDQUFkQSxVQUF5QkUsS0FBSyxDQUE5QkY7QUFDQUosaUJBQVMsQ0FBVEEsT0FBaUJNLEtBQUssQ0FBdEJOO0FBQ0FPLFVBQUU7QUFFTDtBQVhERjtBQUZxQixLQWV2QjtBQUFFRyxjQUFVLEVBZmQ7QUFlRSxHQWZ1QixDQUF6QjtBQW1CRjs7QUFBQSxNQUFNQyxxQkFBcUIsR0FBRyxZQUFpQztBQUM3RCxRQUFNQyxRQUFRLEdBQUdDLFdBQWpCOztBQUNBLE1BQUksQ0FBSixVQUFlO0FBQ2IsV0FBTyxNQUFNLENBQWI7QUFHRkQ7O0FBQUFBLFVBQVEsQ0FBUkE7QUFDQVYsV0FBUyxDQUFUQTtBQUNBLFNBQU8sTUFBTTtBQUNYLFFBQUk7QUFDRlUsY0FBUSxDQUFSQTtBQUNBLEtBRkYsQ0FFRSxZQUFZO0FBQ1oxTSxhQUFPLENBQVBBO0FBRUZnTTs7QUFBQUEsYUFBUyxDQUFUQTtBQU5GO0FBUkY7O0FBa0JBLDZDQUtRO0FBQ04sWUFBbUM7QUFDbkMsTUFBSSxDQUFDLHdCQUFMLElBQUssQ0FBTCxFQUF1QixPQUZqQixDQUdOO0FBQ0E7QUFDQTtBQUNBOztBQUNBWSxRQUFNLENBQU5BLGtDQUEwQzdNLEdBQUQsSUFBUztBQUNoRCxjQUEyQztBQUN6QztBQUNBO0FBRUg7QUFMRDZNLEtBUE0sQ0FhTjs7QUFDQVQsWUFBVSxDQUFDVSxJQUFJLEdBQUpBLE1BQVhWLEVBQVUsQ0FBVkE7QUFHRjs7QUFBQSxnQ0FBa0Q7QUFDaEQsUUFBTTtBQUFBO0FBQUEsTUFBYVcsS0FBSyxDQUF4QjtBQUNBLFNBQ0duRCxNQUFNLElBQUlBLE1BQU0sS0FBakIsT0FBQ0EsSUFDRG1ELEtBQUssQ0FETCxPQUFDbkQsSUFFRG1ELEtBQUssQ0FGTCxPQUFDbkQsSUFHRG1ELEtBQUssQ0FITCxRQUFDbkQsSUFJRG1ELEtBQUssQ0FKTCxNQUFDbkQsSUFJZTtBQUNmbUQsT0FBSyxDQUFMQSxlQUFxQkEsS0FBSyxDQUFMQSxzQkFOeEI7QUFVRjs7QUFBQSw0RUFTUTtBQUNOLFFBQU07QUFBQTtBQUFBLE1BQWVwRCxDQUFDLENBQXRCOztBQUVBLE1BQUlxRCxRQUFRLEtBQVJBLFFBQXFCQyxlQUFlLENBQWZBLENBQWUsQ0FBZkEsSUFBc0IsQ0FBQyx3QkFBaEQsSUFBZ0QsQ0FBNUNELENBQUosRUFBbUU7QUFDakU7QUFDQTtBQUdGckQ7O0FBQUFBLEdBQUMsQ0FBREEsaUJBUk0sQ0FVTjs7QUFDQSxNQUFJdUQsTUFBTSxJQUFWLE1BQW9CO0FBQ2xCQSxVQUFNLEdBQUdDLEVBQUUsQ0FBRkEsZUFBVEQ7QUFHRixHQWZNLENBZU47OztBQUNBTCxRQUFNLENBQUN4RSxPQUFPLGVBQWR3RSxNQUFNLENBQU5BLFdBQStDO0FBQUE7QUFBL0NBO0FBQStDLEdBQS9DQSxPQUNHTyxPQUFELElBQXNCO0FBQ3BCLFFBQUksQ0FBSixTQUFjOztBQUNkLGdCQUFZO0FBQ1ZqQixZQUFNLENBQU5BO0FBQ0FrQixjQUFRLENBQVJBO0FBRUg7QUFQSFI7QUFXRjs7QUFBQSxxQkFBeUQ7QUFDdkQsWUFBMkM7QUFDekMsbUNBSUc7QUFDRCxhQUFPLFVBQ0osZ0NBQStCUyxJQUFJLENBQUM3TSxHQUFJLGdCQUFlNk0sSUFBSSxDQUFDQyxRQUFTLDZCQUE0QkQsSUFBSSxDQUFDRSxNQUF2RyxhQUFDLElBQ0Usb0JBRkwsRUFDRyxDQURJLENBQVA7QUFRRixLQWR5QyxDQWN6Qzs7O0FBQ0EsVUFBTUMsa0JBQW1ELEdBQUc7QUFDMURYLFVBQUksRUFETjtBQUE0RCxLQUE1RDtBQUdBLFVBQU1ZLGFBQWtDLEdBQUdDLE1BQU0sQ0FBTkEsS0FBM0Msa0JBQTJDQSxDQUEzQztBQUdBLGlCQUFhLENBQWIsUUFBdUJsTixHQUFELElBQTRCO0FBQ2hELFVBQUlBLEdBQUcsS0FBUCxRQUFvQjtBQUNsQixZQUNFMEcsS0FBSyxDQUFMQSxHQUFLLENBQUxBLFlBQ0MsT0FBT0EsS0FBSyxDQUFaLEdBQVksQ0FBWixpQkFBa0MsT0FBT0EsS0FBSyxDQUFaLEdBQVksQ0FBWixLQUZyQyxVQUdFO0FBQ0EsZ0JBQU15RyxlQUFlLENBQUM7QUFBQTtBQUVwQkwsb0JBQVEsRUFGWTtBQUdwQkMsa0JBQU0sRUFBRXJHLEtBQUssQ0FBTEEsR0FBSyxDQUFMQSxxQkFBK0IsT0FBT0EsS0FBSyxDQUhyRCxHQUdxRDtBQUgvQixXQUFELENBQXJCO0FBTUg7QUFYRCxhQVdPO0FBQ0w7QUFDQTtBQUNBLGNBQU0wRyxDQUFRLEdBQWQ7QUFFSDtBQWpCRCxPQXJCeUMsQ0F3Q3pDOztBQUNBLFVBQU1DLGtCQUFtRCxHQUFHO0FBQzFEWCxRQUFFLEVBRHdEO0FBRTFEOUUsYUFBTyxFQUZtRDtBQUcxRDZFLFlBQU0sRUFIb0Q7QUFJMURhLGFBQU8sRUFKbUQ7QUFLMURDLGNBQVEsRUFMa0Q7QUFNMURDLGNBQVEsRUFOa0Q7QUFPMURDLFlBQU0sRUFQUjtBQUE0RCxLQUE1RDtBQVNBLFVBQU1DLGFBQWtDLEdBQUdSLE1BQU0sQ0FBTkEsS0FBM0Msa0JBQTJDQSxDQUEzQztBQUdBLGlCQUFhLENBQWIsUUFBdUJsTixHQUFELElBQTRCO0FBQ2hELFlBQU0yTixPQUFPLEdBQUcsT0FBT2pILEtBQUssQ0FBNUIsR0FBNEIsQ0FBNUI7O0FBRUEsVUFBSTFHLEdBQUcsS0FBUCxNQUFrQjtBQUNoQixZQUFJMEcsS0FBSyxDQUFMQSxHQUFLLENBQUxBLElBQWNpSCxPQUFPLEtBQXJCakgsWUFBc0NpSCxPQUFPLEtBQWpELFVBQWdFO0FBQzlELGdCQUFNUixlQUFlLENBQUM7QUFBQTtBQUVwQkwsb0JBQVEsRUFGWTtBQUdwQkMsa0JBQU0sRUFIUjtBQUFzQixXQUFELENBQXJCO0FBTUg7QUFSRCxhQVFPLElBQUkvTSxHQUFHLEtBQVAsVUFBc0I7QUFDM0IsWUFBSTBHLEtBQUssQ0FBTEEsR0FBSyxDQUFMQSxJQUFjaUgsT0FBTyxLQUF6QixVQUF3QztBQUN0QyxnQkFBTVIsZUFBZSxDQUFDO0FBQUE7QUFFcEJMLG9CQUFRLEVBRlk7QUFHcEJDLGtCQUFNLEVBSFI7QUFBc0IsV0FBRCxDQUFyQjtBQU1IO0FBUk0sYUFRQSxJQUNML00sR0FBRyxLQUFIQSxhQUNBQSxHQUFHLEtBREhBLFlBRUFBLEdBQUcsS0FGSEEsYUFHQUEsR0FBRyxLQUhIQSxjQUlBQSxHQUFHLEtBTEUsWUFNTDtBQUNBLFlBQUkwRyxLQUFLLENBQUxBLEdBQUssQ0FBTEEsWUFBc0JpSCxPQUFPLEtBQWpDLFdBQWlEO0FBQy9DLGdCQUFNUixlQUFlLENBQUM7QUFBQTtBQUVwQkwsb0JBQVEsRUFGWTtBQUdwQkMsa0JBQU0sRUFIUjtBQUFzQixXQUFELENBQXJCO0FBTUg7QUFkTSxhQWNBO0FBQ0w7QUFDQTtBQUNBLGNBQU1LLENBQVEsR0FBZDtBQUVIO0FBdENELE9BckR5QyxDQTZGekM7QUFDQTs7QUFDQSxVQUFNUSxTQUFTLEdBQUdDLHNCQUFsQixLQUFrQkEsQ0FBbEI7O0FBQ0EsUUFBSW5ILEtBQUssQ0FBTEEsWUFBa0IsQ0FBQ2tILFNBQVMsQ0FBaEMsU0FBMEM7QUFDeENBLGVBQVMsQ0FBVEE7QUFDQXBPLGFBQU8sQ0FBUEE7QUFJSDtBQUNEOztBQUFBLFFBQU1zTyxDQUFDLEdBQUdwSCxLQUFLLENBQUxBLGFBQVY7QUFFQSxRQUFNMEYsTUFBTSxHQUFHLGFBQWYsU0FBZSxHQUFmO0FBQ0EsUUFBTS9OLFFBQVEsR0FBSStOLE1BQU0sSUFBSUEsTUFBTSxDQUFqQixRQUFDQSxJQUFsQjs7QUFFQSxRQUFNO0FBQUE7QUFBQTtBQUFBLE1BQWV5Qix1QkFBYyxNQUFNO0FBQ3ZDLFVBQU0sNkJBQTZCLG1DQUFzQm5ILEtBQUssQ0FBM0IsTUFBbkMsSUFBbUMsQ0FBbkM7QUFDQSxXQUFPO0FBQ0wyRixVQUFJLEVBREM7QUFFTEssUUFBRSxFQUFFaEcsS0FBSyxDQUFMQSxLQUNBLG1DQUFzQkEsS0FBSyxDQUQzQkEsRUFDQSxDQURBQSxHQUVBcUgsVUFBVSxJQUpoQjtBQUFPLEtBQVA7QUFGbUJGLEtBUWxCLFdBQVduSCxLQUFLLENBQWhCLE1BQXVCQSxLQUFLLENBUi9CLEVBUUcsQ0FSa0JtSCxDQUFyQjs7QUFVQSxNQUFJO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLE1BQUosTUF2SHVELENBeUh2RDs7QUFDQSxNQUFJLG9CQUFKLFVBQWtDO0FBQ2hDaEQsWUFBUSxnQkFBRyx3Q0FBWEEsUUFBVyxDQUFYQTtBQUdGLEdBOUh1RCxDQThIdkQ7OztBQUNBLFFBQU1tRCxLQUFVLEdBQUdDLHFCQUFuQixRQUFtQkEsQ0FBbkI7O0FBQ0EsUUFBTUMsUUFBYSxHQUFHRixLQUFLLElBQUksaUJBQVRBLFlBQXNDQSxLQUFLLENBQWpFOztBQUVBLFFBQU1HLE9BQU8sR0FBR04sZUFBaEIsTUFBZ0JBLEVBQWhCOztBQUNBLFFBQU1PLE1BQU0sR0FBR1AsMkJBQ1pRLEVBQUQsSUFBaUI7QUFDZjtBQUNBLFFBQUlGLE9BQU8sQ0FBWCxTQUFxQjtBQUNuQkEsYUFBTyxDQUFQQTtBQUNBQSxhQUFPLENBQVBBO0FBR0Y7O0FBQUEsUUFBSUwsQ0FBQyxJQUFEQSw4QkFBbUNPLEVBQUUsQ0FBckNQLFdBQWlELHdCQUFyRCxJQUFxRCxDQUFyRCxFQUF1RTtBQUNyRTtBQUNBLFlBQU1RLFlBQVksR0FBRzNDLFVBQVUsQ0FBQ1UsSUFBSSxHQUFKQSxNQUFoQyxFQUErQixDQUEvQjs7QUFDQSxVQUFJLENBQUosY0FBbUI7QUFDakI4QixlQUFPLENBQVBBLFVBQWtCbEMscUJBQXFCLEtBQUssTUFBTTtBQUNoRHVCLGtCQUFRLG1CQUFtQjtBQUN6QkMsa0JBQU0sRUFDSix5Q0FFSXJCLE1BQU0sSUFBSUEsTUFBTSxDQUp4Qm9CO0FBQTJCLFdBQW5CLENBQVJBO0FBREZXLFNBQXVDLENBQXZDQTtBQVNIO0FBRUQ7O0FBQUEsa0JBQWM7QUFDWixVQUFJLG9CQUFKLFlBQW9DRCxRQUFRLENBQTVDLEVBQTRDLENBQVJBLENBQXBDLEtBQ0ssSUFBSSxvQkFBSixVQUFrQztBQUNyQ0EsZ0JBQVEsQ0FBUkE7QUFFSDtBQUNGO0FBN0JZTCxLQThCYixnQ0E5QkYsTUE4QkUsQ0E5QmFBLENBQWY7O0FBaUNBLFFBQU1VLFVBS0wsR0FBRztBQUNGQyxPQUFHLEVBREQ7QUFFRkMsV0FBTyxFQUFHdkYsQ0FBRCxJQUF5QjtBQUNoQyxVQUFJOEUsS0FBSyxDQUFMQSxTQUFlLE9BQU9BLEtBQUssQ0FBTEEsTUFBUCxZQUFuQixZQUE4RDtBQUM1REEsYUFBSyxDQUFMQTtBQUVGOztBQUFBLFVBQUksQ0FBQzlFLENBQUMsQ0FBTixrQkFBeUI7QUFDdkJ3RixtQkFBVyxnREFBWEEsTUFBVyxDQUFYQTtBQUVIO0FBZEg7QUFLSSxHQUxKOztBQWlCQSxTQUFPO0FBQ0xILGNBQVUsQ0FBVkEsZUFBMkJyRixDQUFELElBQXlCO0FBQ2pELFVBQUksQ0FBQyx3QkFBTCxJQUFLLENBQUwsRUFBdUI7O0FBQ3ZCLFVBQUk4RSxLQUFLLENBQUxBLFNBQWUsT0FBT0EsS0FBSyxDQUFMQSxNQUFQLGlCQUFuQixZQUFtRTtBQUNqRUEsYUFBSyxDQUFMQTtBQUVGUjs7QUFBQUEsY0FBUSxtQkFBbUI7QUFBRW1CLGdCQUFRLEVBQXJDbkI7QUFBMkIsT0FBbkIsQ0FBUkE7QUFMRmU7QUFTRixHQS9MdUQsQ0ErTHZEO0FBQ0E7OztBQUNBLE1BQUk3SCxLQUFLLENBQUxBLFlBQW1Cc0gsS0FBSyxDQUFMQSxnQkFBc0IsRUFBRSxVQUFVQSxLQUFLLENBQTlELEtBQTZDLENBQTdDLEVBQXdFO0FBQ3RFTyxjQUFVLENBQVZBLE9BQWtCLHlCQUNoQiwyQkFFRSx5Q0FBeUNuQyxNQUFNLElBQUlBLE1BQU0sQ0FGM0QsUUFHRUEsTUFBTSxJQUFJQSxNQUFNLENBSnBCbUMsYUFDRSxDQURnQixDQUFsQkE7QUFTRjs7QUFBQSxzQkFBT1YsbUNBQVAsVUFBT0EsQ0FBUDs7O2VBR2FlLEk7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNXZjs7OztBQUdPLHVDQUF1RDtBQUM1RCxTQUFPQyxJQUFJLENBQUpBLGlCQUFzQkEsSUFBSSxLQUExQkEsTUFBcUNBLElBQUksQ0FBSkEsU0FBYyxDQUFuREEsQ0FBcUNBLENBQXJDQSxHQUFQO0FBR0Y7QUFBQTs7Ozs7O0FBSU8sTUFBTUMsMEJBQTBCLEdBQUdDLFNBQ3JDRixTQURxQ0UsR0FBbkM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1ZQOztBQUNBOzs7OztBQUNBOztBQXNIQTs7O0FBekhBOztBQW1CQSxNQUFNQyxlQUFvQyxHQUFHO0FBQzNDNUMsUUFBTSxFQURxQztBQUM3QjtBQUNkNkMsZ0JBQWMsRUFGNkI7O0FBRzNDQyxPQUFLLEtBQWlCO0FBQ3BCLFFBQUksS0FBSixRQUFpQixPQUFPbkQsRUFBUDs7QUFDakIsZUFBbUMsRUFHcEM7QUFSSDs7QUFBNkMsQ0FBN0MsQyxDQVdBOztBQUNBLE1BQU1vRCxpQkFBaUIsR0FBRyxzR0FBMUIsZUFBMEIsQ0FBMUI7QUFZQSxNQUFNQyxZQUFZLEdBQUcsMEdBQXJCLG9CQUFxQixDQUFyQjtBQVFBLE1BQU1DLGdCQUFnQixHQUFHLGtEQUF6QixnQkFBeUIsQ0FBekIsQyxDQVNBOztBQUNBbkMsTUFBTSxDQUFOQSwwQ0FBaUQ7QUFDL0NvQyxLQUFHLEdBQUc7QUFDSixXQUFPblIsaUJBQVA7QUFGSitPOztBQUFpRCxDQUFqREE7QUFNQWlDLGlCQUFpQixDQUFqQkEsUUFBMkJJLEtBQUQsSUFBVztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBckMsUUFBTSxDQUFOQSx1Q0FBOEM7QUFDNUNvQyxPQUFHLEdBQUc7QUFDSixZQUFNbEQsTUFBTSxHQUFHb0QsU0FBZjtBQUNBLGFBQU9wRCxNQUFNLENBQWIsS0FBYSxDQUFiO0FBSEpjOztBQUE4QyxHQUE5Q0E7QUFMRmlDO0FBYUEsZ0JBQWdCLENBQWhCLFFBQTBCSSxLQUFELElBQVc7QUFDbEM7QUFDQTs7QUFBRVAsaUJBQUQsT0FBQ0EsR0FBaUMsQ0FBQyxHQUFELFNBQW9CO0FBQ3JELFVBQU01QyxNQUFNLEdBQUdvRCxTQUFmO0FBQ0EsV0FBT3BELE1BQU0sQ0FBTkEsS0FBTSxDQUFOQSxDQUFjLEdBQXJCLElBQU9BLENBQVA7QUFGRCxHQUFDNEM7QUFGSjtBQVFBSSxZQUFZLENBQVpBLFFBQXNCOUMsS0FBRCxJQUFXO0FBQzlCMEMsaUJBQWUsQ0FBZkEsTUFBc0IsTUFBTTtBQUMxQjdRLHNDQUF3QixDQUFDLEdBQUQsU0FBYTtBQUNuQyxZQUFNc1IsVUFBVSxHQUFJLEtBQUluRCxLQUFLLENBQUxBLHVCQUE4QixHQUFFQSxLQUFLLENBQUxBLFlBQXhEO0FBR0EsWUFBTW9ELGdCQUFnQixHQUF0Qjs7QUFDQSxVQUFJQSxnQkFBZ0IsQ0FBcEIsVUFBb0IsQ0FBcEIsRUFBa0M7QUFDaEMsWUFBSTtBQUNGQSwwQkFBZ0IsQ0FBaEJBLFVBQWdCLENBQWhCQSxDQUE2QixHQUE3QkE7QUFDQSxTQUZGLENBRUUsWUFBWTtBQUNabFEsaUJBQU8sQ0FBUEEsTUFBZSx3Q0FBdUNpUSxVQUF0RGpRO0FBQ0FBLGlCQUFPLENBQVBBLE1BQWUsR0FBRUQsR0FBRyxDQUFDaEIsT0FBUSxLQUFJZ0IsR0FBRyxDQUFDb1EsS0FBckNuUTtBQUVIO0FBQ0Y7QUFiRHJCO0FBREY2UTtBQURGSTs7QUFtQkEscUJBQTZCO0FBQzNCLE1BQUksQ0FBQ0osZUFBZSxDQUFwQixRQUE2QjtBQUMzQixVQUFNelEsT0FBTyxHQUNYLGdDQURGO0FBR0EsVUFBTSxVQUFOLE9BQU0sQ0FBTjtBQUVGOztBQUFBLFNBQU95USxlQUFlLENBQXRCO0FBR0YsQyxDQUFBOzs7ZUFDZUEsZSxFQUVmOzs7O0FBR08scUJBQWlDO0FBQ3RDLFNBQU9uQiwwQkFBaUIrQixlQUF4QixhQUFPL0IsQ0FBUDtBQUdGLEMsQ0FBQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7OztBQUNPLE1BQU1nQyxZQUFZLEdBQUcsQ0FBQyxHQUFELFNBQWlDO0FBQzNEYixpQkFBZSxDQUFmQSxTQUF5QixJQUFJN1EsU0FBSixRQUFXLEdBQXBDNlEsSUFBeUIsQ0FBekJBO0FBQ0FBLGlCQUFlLENBQWZBLHVCQUF3Q2pELEVBQUQsSUFBUUEsRUFBL0NpRDtBQUNBQSxpQkFBZSxDQUFmQTtBQUVBLFNBQU9BLGVBQWUsQ0FBdEI7QUFMSyxFLENBUVA7Ozs7O0FBQ08sMENBQThEO0FBQ25FLFFBQU1jLE9BQU8sR0FBYjtBQUNBLFFBQU1DLFFBQVEsR0FBZDs7QUFFQSxPQUFLLE1BQUwsK0JBQTBDO0FBQ3hDLFFBQUksT0FBT0QsT0FBTyxDQUFkLFFBQWMsQ0FBZCxLQUFKLFVBQTJDO0FBQ3pDQyxjQUFRLENBQVJBLFFBQVEsQ0FBUkEsR0FBcUI3QyxNQUFNLENBQU5BLE9BQ25COEMsS0FBSyxDQUFMQSxRQUFjRixPQUFPLENBQXJCRSxRQUFxQixDQUFyQkEsU0FEbUI5QyxJQUVuQjRDLE9BQU8sQ0FGVEMsUUFFUyxDQUZZN0MsQ0FBckI2QyxDQUR5QyxDQUl2Qzs7QUFDRjtBQUdGQTs7QUFBQUEsWUFBUSxDQUFSQSxRQUFRLENBQVJBLEdBQXFCRCxPQUFPLENBQTVCQyxRQUE0QixDQUE1QkE7QUFHRixHQWhCbUUsQ0FnQm5FOzs7QUFDQUEsVUFBUSxDQUFSQSxTQUFrQjVSLGlCQUFsQjRSO0FBRUFWLGtCQUFnQixDQUFoQkEsUUFBMEJFLEtBQUQsSUFBVztBQUNsQ1EsWUFBUSxDQUFSQSxLQUFRLENBQVJBLEdBQWtCLENBQUMsR0FBRCxTQUFvQjtBQUNwQyxhQUFPRCxPQUFPLENBQVBBLEtBQU8sQ0FBUEEsQ0FBZSxHQUF0QixJQUFPQSxDQUFQO0FBREZDO0FBREZWO0FBTUE7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDektEOztBQUVBOztBQVdlLHVDQUsrQjtBQUM1QyxvQ0FBdUM7QUFDckMsd0JBQU87QUFBbUIsWUFBTSxFQUFFLFlBQTNCLFNBQTJCO0FBQTNCLE9BQVAsS0FBTyxFQUFQO0FBR0Y7O0FBQUEsbUJBQWlCLENBQWpCLGtCQUFvQ1ksaUJBQWlCLENBQUNDLGVBQXRELENBQ0E7QUFEQTtBQUVFQyxtQkFBRCxvQkFBQ0EsR0FBaURGLGlCQUFELENBQWpELG1CQUFDRTs7QUFDRixZQUEyQztBQUN6QyxVQUFNeEksSUFBSSxHQUNSc0ksaUJBQWlCLENBQWpCQSxlQUFpQ0EsaUJBQWlCLENBQWxEQSxRQURGO0FBRUFFLHFCQUFpQixDQUFqQkEsY0FBaUMsY0FBYXhJLElBQTlDd0k7QUFHRjs7QUFBQTtBQUNELEM7Ozs7Ozs7Ozs7OztBQ2pDWTtBQUNiLDhDQUE4QyxjQUFjO0FBQzVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw4Q0FBOEM7QUFDdkU7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLG9EQUFvRDtBQUM3RTtBQUNBO0FBQ0EsdUJBQXVCO0FBQ3ZCLHlCQUF5QiwwQ0FBMEM7QUFDbkU7QUFDQTtBQUNBLHVCQUF1QjtBQUN2Qix5QkFBeUIsMkNBQTJDO0FBQ3BFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsc0NBQXNDO0FBQy9EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDRDQUE0QztBQUNyRTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsMENBQTBDO0FBQy9EO0FBQ0EsaUJBQWlCLG1DQUFtQztBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsY0FBYztBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsY0FBYztBQUMzQztBQUNBLG9FQUFvRSxVQUFVLEVBQUU7QUFDaEY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsdUJBQXVCLG1CQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLGtCQUFrQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLGNBQWM7QUFDM0Msb0VBQW9FLFVBQVUsRUFBRTtBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsY0FBYztBQUNyQztBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLG1CQUFtQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJDQUEyQyxpREFBaUQsRUFBRTtBQUM5RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsY0FBYztBQUMzQyx3T0FBd08sVUFBVSxFQUFFO0FBQ3BQO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDLHNCQUFzQjtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDZEQUE2RDtBQUMzRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JaQTs7Ozs7OztBQVlBO0FBQ0E7QUFDQTs7QUFVZSxnQkFBNkI7QUFDMUMsUUFBTUMsR0FBK0IsR0FBR2xELE1BQU0sQ0FBTkEsT0FBeEMsSUFBd0NBLENBQXhDO0FBRUEsU0FBTztBQUNMbUQsTUFBRSxnQkFBaUM7QUFDakM7QUFBQyxPQUFDRCxHQUFHLENBQUhBLElBQUcsQ0FBSEEsS0FBY0EsR0FBRyxDQUFIQSxJQUFHLENBQUhBLEdBQWYsRUFBQ0EsQ0FBRDtBQUZFOztBQUtMRSxPQUFHLGdCQUFpQztBQUNsQyxVQUFJRixHQUFHLENBQVAsSUFBTyxDQUFQLEVBQWU7QUFDYkEsV0FBRyxDQUFIQSxJQUFHLENBQUhBLFFBQWlCQSxHQUFHLENBQUhBLElBQUcsQ0FBSEEsc0JBQWpCQTtBQUVIO0FBVEk7O0FBV0xHLFFBQUksT0FBZSxHQUFmLE1BQStCO0FBQ2pDO0FBQ0E7QUFBQyxPQUFDSCxHQUFHLENBQUhBLElBQUcsQ0FBSEEsSUFBRCxnQkFBK0JJLE9BQUQsSUFBc0I7QUFDbkRBLGVBQU8sQ0FBQyxHQUFSQSxJQUFPLENBQVBBO0FBREQ7QUFiTDs7QUFBTyxHQUFQO0FBa0JELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeENEOztBQUtBOztBQUNBOztBQUNBOztBQVNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOztBQUNBOzs7Ozs7QUEzQkE7QUFBQTtBQUNBOzs7QUF5Q0EsTUFBTUMsUUFBUSxHQUFJMUIsVUFBbEI7O0FBRUEsa0NBQWtDO0FBQ2hDLFNBQU83QixNQUFNLENBQU5BLE9BQWMsVUFBZEEsaUJBQWMsQ0FBZEEsRUFBNEM7QUFDakR3RCxhQUFTLEVBRFg7QUFBbUQsR0FBNUN4RCxDQUFQO0FBS0Y7O0FBQUEscUNBQXNEO0FBQ3BELFNBQU95RCxNQUFNLElBQUk5QixJQUFJLENBQUpBLFdBQVY4QixHQUFVOUIsQ0FBVjhCLEdBQ0g5QixJQUFJLEtBQUpBLE1BQ0Usd0RBREZBLE1BQ0UsQ0FERkEsR0FFRyxHQUFFOEIsTUFBTyxHQUFFOUIsSUFIWDhCLEtBQVA7QUFPSzs7QUFBQSxnREFJTDtBQUNBLE1BQUk1QixLQUFKLEVBQXFDLEVBUXJDOztBQUFBO0FBR0s7O0FBQUEsaUNBQWtEO0FBQ3ZELE1BQUlBLEtBQUosRUFBcUMsRUFNckM7O0FBQUE7QUFHSzs7QUFBQSwyQkFBNEM7QUFDakQsU0FBT0YsSUFBSSxLQUFKQSxZQUFxQkEsSUFBSSxDQUFKQSxXQUFnQjRCLFFBQVEsR0FBcEQsR0FBNEI1QixDQUE1QjtBQUdLOztBQUFBLDJCQUEyQztBQUNoRDtBQUNBLFNBQU8rQixhQUFhLE9BQXBCLFFBQW9CLENBQXBCO0FBR0s7O0FBQUEsMkJBQTJDO0FBQ2hELFNBQU8vQixJQUFJLENBQUpBLE1BQVc0QixRQUFRLENBQW5CNUIsV0FBUDtBQUdGO0FBQUE7Ozs7O0FBR08seUJBQTBDO0FBQy9DLE1BQUloSSxHQUFHLENBQUhBLFdBQUosR0FBSUEsQ0FBSixFQUF5Qjs7QUFDekIsTUFBSTtBQUNGO0FBQ0EsVUFBTWdLLGNBQWMsR0FBRyxXQUF2QixpQkFBdUIsR0FBdkI7QUFDQSxVQUFNQyxRQUFRLEdBQUcsYUFBakIsY0FBaUIsQ0FBakI7QUFDQSxXQUFPQSxRQUFRLENBQVJBLDZCQUFzQ0MsV0FBVyxDQUFDRCxRQUFRLENBQWpFLFFBQXdELENBQXhEO0FBQ0EsR0FMRixDQUtFLFVBQVU7QUFDVjtBQUVIO0FBSU07O0FBQUEsaURBSUw7QUFDQSxNQUFJRSxpQkFBaUIsR0FBckI7QUFFQSxRQUFNQyxZQUFZLEdBQUcsK0JBQXJCLEtBQXFCLENBQXJCO0FBQ0EsUUFBTUMsYUFBYSxHQUFHRCxZQUFZLENBQWxDO0FBQ0EsUUFBTUUsY0FBYyxHQUNsQjtBQUNBLEdBQUNDLFVBQVUsS0FBVkEsUUFBdUIsaURBQXZCQSxVQUF1QixDQUF2QkEsR0FBRCxPQUNBO0FBQ0E7QUFKRjtBQU9BSixtQkFBaUIsR0FBakJBO0FBQ0EsUUFBTWxQLE1BQU0sR0FBR29MLE1BQU0sQ0FBTkEsS0FBZixhQUFlQSxDQUFmOztBQUVBLE1BQ0UsQ0FBQ3BMLE1BQU0sQ0FBTkEsTUFBY3VQLEtBQUQsSUFBVztBQUN2QixRQUFJcFIsS0FBSyxHQUFHa1IsY0FBYyxDQUFkQSxLQUFjLENBQWRBLElBQVo7QUFDQSxVQUFNO0FBQUE7QUFBQTtBQUFBLFFBQXVCRCxhQUFhLENBQTFDLEtBQTBDLENBQTFDLENBRnVCLENBSXZCO0FBQ0E7O0FBQ0EsUUFBSUksUUFBUSxHQUFJLElBQUdDLE1BQU0sV0FBVyxFQUFHLEdBQUVGLEtBQXpDOztBQUNBLGtCQUFjO0FBQ1pDLGNBQVEsR0FBSSxHQUFFLGVBQWUsRUFBRyxJQUFHQSxRQUFuQ0E7QUFFRjs7QUFBQSxRQUFJQyxNQUFNLElBQUksQ0FBQ3ZCLEtBQUssQ0FBTEEsUUFBZixLQUFlQSxDQUFmLEVBQXFDL1AsS0FBSyxHQUFHLENBQVJBLEtBQVEsQ0FBUkE7QUFFckMsV0FDRSxDQUFDdVIsUUFBUSxJQUFJSCxLQUFLLElBQWxCLHFCQUNBO0FBQ0NMLHFCQUFpQixHQUNoQkEsaUJBQWlCLENBQWpCQSxrQkFFRU8sTUFBTSxHQUNEdFIsS0FBRCxJQUFDQSxDQUF1QndSLHNCQUF4QixPQUFDeFIsRUFBRCxJQUFDQSxDQURDLEdBQ0RBLENBREMsR0FFRixtQ0FKTitRLEtBSU0sQ0FKTkEsS0FKSixHQUNFLENBREY7QUFiSixHQUNHbFAsQ0FESCxFQXlCRTtBQUNBa1AscUJBQWlCLEdBQWpCQSxHQURBLENBQ3VCO0FBRXZCO0FBQ0E7QUFFRjs7QUFBQSxTQUFPO0FBQUE7QUFFTFUsVUFBTSxFQUZSO0FBQU8sR0FBUDtBQU1GOztBQUFBLDJDQUFxRTtBQUNuRSxRQUFNQyxhQUE2QixHQUFuQztBQUVBekUsUUFBTSxDQUFOQSxvQkFBNEJsTixHQUFELElBQVM7QUFDbEMsUUFBSSxDQUFDOEIsTUFBTSxDQUFOQSxTQUFMLEdBQUtBLENBQUwsRUFBMkI7QUFDekI2UCxtQkFBYSxDQUFiQSxHQUFhLENBQWJBLEdBQXFCclQsS0FBSyxDQUExQnFULEdBQTBCLENBQTFCQTtBQUVIO0FBSkR6RTtBQUtBO0FBR0Y7QUFBQTs7Ozs7O0FBSU8sbURBSUc7QUFDUjtBQUNBLFFBQU0wRSxJQUFJLEdBQUcscUJBQWIsVUFBYSxDQUFiO0FBQ0EsUUFBTUMsV0FBVyxHQUNmLGtDQUFrQyxpQ0FEcEMsSUFDb0MsQ0FEcEM7O0FBRUEsTUFBSTtBQUNGLFVBQU1DLFFBQVEsR0FBRyxxQkFBakIsSUFBaUIsQ0FBakI7QUFDQUEsWUFBUSxDQUFSQSxXQUFvQix3REFBMkJBLFFBQVEsQ0FBdkRBLFFBQW9CLENBQXBCQTtBQUNBLFFBQUlDLGNBQWMsR0FBbEI7O0FBRUEsUUFDRSwrQkFBZUQsUUFBUSxDQUF2QixhQUNBQSxRQUFRLENBRFIsZ0JBREYsV0FJRTtBQUNBLFlBQU14VCxLQUFLLEdBQUcseUNBQXVCd1QsUUFBUSxDQUE3QyxZQUFjLENBQWQ7QUFFQSxZQUFNO0FBQUE7QUFBQTtBQUFBLFVBQXFCRSxhQUFhLENBQ3RDRixRQUFRLENBRDhCLFVBRXRDQSxRQUFRLENBRjhCLFVBQXhDLEtBQXdDLENBQXhDOztBQU1BLGtCQUFZO0FBQ1ZDLHNCQUFjLEdBQUcsaUNBQXFCO0FBQ3BDMVQsa0JBQVEsRUFENEI7QUFFcEM0VCxjQUFJLEVBQUVILFFBQVEsQ0FGc0I7QUFHcEN4VCxlQUFLLEVBQUU0VCxrQkFBa0IsUUFIM0JILE1BRzJCO0FBSFcsU0FBckIsQ0FBakJBO0FBTUg7QUFFRCxLQTNCRSxDQTJCRjs7O0FBQ0EsVUFBTUksWUFBWSxHQUNoQkwsUUFBUSxDQUFSQSxXQUFvQkYsSUFBSSxDQUF4QkUsU0FDSUEsUUFBUSxDQUFSQSxXQUFvQkEsUUFBUSxDQUFSQSxPQUR4QkEsTUFDSUEsQ0FESkEsR0FFSUEsUUFBUSxDQUhkO0FBS0EsV0FBUU0sU0FBUyxHQUNiLGVBQWVMLGNBQWMsSUFEaEIsWUFDYixDQURhLEdBQWpCO0FBR0EsR0FwQ0YsQ0FvQ0UsVUFBVTtBQUNWLFdBQVFLLFNBQVMsR0FBRyxDQUFILFdBQUcsQ0FBSCxHQUFqQjtBQUVIO0FBRUQ7O0FBQUEsTUFBTUMsZUFBZSxHQUFHQyxNQUFNLENBQTlCLGlCQUE4QixDQUE5Qjs7QUFDTywrQkFBNkM7QUFDbEQsU0FBT3BGLE1BQU0sQ0FBTkEscUNBQVAsRUFBT0EsQ0FBUDtBQUdGOztBQUFBLHVDQUE2RDtBQUMzRDtBQUNBO0FBQ0EsU0FBTztBQUNMckcsT0FBRyxFQUFFMEwsV0FBVyxDQUFDQyxXQUFXLENBQUNwRyxNQUFNLENBQVAsVUFEdkIsR0FDdUIsQ0FBWixDQURYO0FBRUxNLE1BQUUsRUFBRUEsRUFBRSxHQUFHNkYsV0FBVyxDQUFDQyxXQUFXLENBQUNwRyxNQUFNLENBQVAsVUFBMUIsRUFBMEIsQ0FBWixDQUFkLEdBRlI7QUFBTyxHQUFQO0FBMERGOztBQUFBLE1BQU1xRyx1QkFBdUIsR0FDM0IxRCxVQUVBLEtBSEY7QUFLQSxNQUFNMkQsd0JBQXdCLEdBQTlCOztBQUVBLG1DQUFpRTtBQUMvRCxTQUFPLEtBQUssTUFBTTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0FDLGVBQVcsRUFaTjtBQUFXLEdBQU4sQ0FBTCxNQWFFQyxHQUFELElBQVM7QUFDZixRQUFJLENBQUNBLEdBQUcsQ0FBUixJQUFhO0FBQ1gsVUFBSUMsUUFBUSxHQUFSQSxLQUFnQkQsR0FBRyxDQUFIQSxVQUFwQixLQUF1QztBQUNyQyxlQUFPRSxVQUFVLE1BQU1ELFFBQVEsR0FBL0IsQ0FBaUIsQ0FBakI7QUFFRjs7QUFBQSxVQUFJRCxHQUFHLENBQUhBLFdBQUosS0FBd0I7QUFDdEI7QUFDQTtBQUNBLGNBQU0sVUFBTix3QkFBTSxDQUFOO0FBRUY7O0FBQUEsWUFBTSxVQUFOLDZCQUFNLENBQU47QUFFRjs7QUFBQSxXQUFPQSxHQUFHLENBQVYsSUFBT0EsRUFBUDtBQXpCRixHQUFPLENBQVA7QUE2QkY7O0FBQUEsaURBQWtFO0FBQ2hFLFNBQU8sVUFBVSxXQUFXRyxjQUFjLE9BQW5DLENBQVUsQ0FBVixPQUFvRHhULEdBQUQsSUFBZ0I7QUFDeEU7QUFDQTtBQUNBO0FBRUEsUUFBSSxDQUFKLGdCQUFxQjtBQUNuQnlULHNCQUFnQixDQUFoQkEsR0FBZ0IsQ0FBaEJBO0FBRUY7O0FBQUE7QUFSRixHQUFPLENBQVA7QUFZYTs7QUFBQSxNQUFNN1UsTUFBTixDQUFtQztBQU9oRDs7QUFQZ0Q7QUFXaEQ7QUFrQkE4VSxhQUFXLHlCQUlUO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpTO0FBSVQsR0FKUyxFQStCVDtBQUFBLFNBM0RGQyxLQTJERTtBQUFBLFNBMURGN1UsUUEwREU7QUFBQSxTQXpERkMsS0F5REU7QUFBQSxTQXhERjZVLE1Bd0RFO0FBQUEsU0F2REYxQyxRQXVERTtBQUFBLFNBbERGMkMsVUFrREU7QUFBQSxTQWhERkMsR0FnREUsR0FoRGtDLEVBZ0RsQztBQUFBLFNBL0NGQyxHQStDRTtBQUFBLFNBOUNGQyxHQThDRTtBQUFBLFNBN0NGQyxVQTZDRTtBQUFBLFNBNUNGQyxJQTRDRTtBQUFBLFNBM0NGQyxNQTJDRTtBQUFBLFNBMUNGQyxRQTBDRTtBQUFBLFNBekNGQyxLQXlDRTtBQUFBLFNBeENGQyxVQXdDRTtBQUFBLFNBdkNGQyxjQXVDRTtBQUFBLFNBdENGQyxRQXNDRTtBQUFBLFNBckNGdEcsTUFxQ0U7QUFBQSxTQXBDRnVHLE9Bb0NFO0FBQUEsU0FuQ0ZDLGFBbUNFOztBQUFBLHNCQXFHWS9LLENBQUQsSUFBNEI7QUFDdkMsWUFBTWdMLEtBQUssR0FBR2hMLENBQUMsQ0FBZjs7QUFFQSxVQUFJLENBQUosT0FBWTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQU07QUFBQTtBQUFBO0FBQUEsWUFBTjtBQUNBLHlDQUVFLGlDQUFxQjtBQUFFN0ssa0JBQVEsRUFBRWtVLFdBQVcsQ0FBdkIsUUFBdUIsQ0FBdkI7QUFGdkI7QUFFdUIsU0FBckIsQ0FGRixFQUdFLFdBSEYsTUFHRSxHQUhGO0FBS0E7QUFHRjs7QUFBQSxVQUFJLENBQUMyQixLQUFLLENBQVYsS0FBZ0I7QUFDZDtBQUdGOztBQUFBLFlBQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUFOO0FBRUEsWUFBTTtBQUFBO0FBQUEsVUFBZSx3Q0FBckIsR0FBcUIsQ0FBckIsQ0E1QnVDLENBOEJ2QztBQUNBOztBQUNBLFVBQUksY0FBY3hILEVBQUUsS0FBSyxLQUFyQixVQUFvQ3JPLFFBQVEsS0FBSyxLQUFyRCxVQUFvRTtBQUNsRTtBQUdGLE9BcEN1QyxDQW9DdkM7QUFDQTs7O0FBQ0EsVUFBSSxhQUFhLENBQUMsVUFBbEIsS0FBa0IsQ0FBbEIsRUFBb0M7QUFDbEM7QUFHRjs7QUFBQSwyQ0FJRTZPLE1BQU0sQ0FBTkEsb0JBQTJCO0FBQ3pCSSxlQUFPLEVBQUU2RyxPQUFPLENBQVBBLFdBQW1CLEtBREg7QUFFekIxRyxjQUFNLEVBQUUwRyxPQUFPLENBQVBBLFVBQWtCLEtBTjlCO0FBSTZCLE9BQTNCakgsQ0FKRjtBQS9JQSxPQUNBOzs7QUFDQSxpQkFBYSxxREFBYixTQUFhLENBQWIsQ0FGQSxDQUlBOztBQUNBLHlCQUxBLENBTUE7QUFDQTtBQUNBOztBQUNBLFFBQUk3TyxTQUFRLEtBQVosV0FBNEI7QUFDMUIsc0JBQWdCLEtBQWhCLFNBQThCO0FBQUE7QUFFNUIrVixtQkFBVyxFQUZpQjtBQUc1QjFOLGFBQUssRUFIdUI7QUFBQTtBQUs1QjJOLGVBQU8sRUFBRUMsWUFBWSxJQUFJQSxZQUFZLENBTFQ7QUFNNUJDLGVBQU8sRUFBRUQsWUFBWSxJQUFJQSxZQUFZLENBTnZDO0FBQThCLE9BQTlCO0FBVUY7O0FBQUEsK0JBQTJCO0FBQ3pCRSxlQUFTLEVBRGdCO0FBRXpCSixpQkFBVyxFQUFFO0FBRmY7QUFFZTtBQUZZLEtBQTNCLENBcEJBLENBMkJBO0FBQ0E7O0FBQ0Esa0JBQWNqVyxNQUFNLENBQXBCO0FBRUE7QUFDQTtBQUNBLHdCQWpDQSxDQWtDQTtBQUNBOztBQUNBLGtCQUNFO0FBQ0EsaURBQTRCc1csYUFBYSxDQUF6Qyx5QkFGRjtBQUdBO0FBQ0E7QUFDQTtBQUNBLDRCQTFDQSxDQTJDQTtBQUNBOztBQUNBO0FBRUE7O0FBRUEsUUFBSTFGLEtBQUosRUFBcUMsRUFNckM7O0FBQUEsZUFBbUMsRUE0Q3BDO0FBdUREMkY7O0FBQUFBLFFBQU0sR0FBUztBQUNiaEosVUFBTSxDQUFOQTtBQUdGO0FBQUE7Ozs7O0FBR0FpSixNQUFJLEdBQUc7QUFDTGpKLFVBQU0sQ0FBTkE7QUFHRjtBQUFBOzs7Ozs7OztBQU1BdE4sTUFBSSxNQUFXc08sRUFBTyxHQUFsQixLQUEwQnlILE9BQTBCLEdBQXBELElBQTJEO0FBQzdEO0FBQUMsS0FBQztBQUFBO0FBQUE7QUFBQSxRQUFjUyxZQUFZLFlBQTNCLEVBQTJCLENBQTNCO0FBQ0QsV0FBTyxrQ0FBUCxPQUFPLENBQVA7QUFHRjtBQUFBOzs7Ozs7OztBQU1BaE4sU0FBTyxNQUFXOEUsRUFBTyxHQUFsQixLQUEwQnlILE9BQTBCLEdBQXBELElBQTJEO0FBQ2hFO0FBQUMsS0FBQztBQUFBO0FBQUE7QUFBQSxRQUFjUyxZQUFZLFlBQTNCLEVBQTJCLENBQTNCO0FBQ0QsV0FBTyxxQ0FBUCxPQUFPLENBQVA7QUFHRjs7QUFBQSx5Q0FLb0I7QUFDbEIsUUFBSSxDQUFDQyxVQUFVLENBQWYsR0FBZSxDQUFmLEVBQXNCO0FBQ3BCbkosWUFBTSxDQUFOQTtBQUNBO0FBR0Y7O0FBQUEsUUFBSXFELEtBQUosRUFBcUMsRUFtQnJDOztBQUFBLFFBQUksQ0FBRW9GLE9BQUQsQ0FBTCxJQUEwQjtBQUN4QjtBQUVGLEtBNUJrQixDQTRCbEI7OztBQUNBLFFBQUlXLE9BQUosSUFBUTtBQUNOQyxpQkFBVyxDQUFYQTtBQUdGOztBQUFBLFFBQUksS0FBSixnQkFBeUI7QUFDdkIsOEJBQXdCLEtBQXhCO0FBR0ZySTs7QUFBQUEsTUFBRSxHQUFHc0ksU0FBUyxLQUFLYixPQUFPLENBQVosUUFBcUIsS0FBbkN6SCxhQUFjLENBQWRBO0FBQ0EsVUFBTXVJLFNBQVMsR0FBR0MsU0FBUyxDQUN6Qm5FLFdBQVcsQ0FBWEEsRUFBVyxDQUFYQSxHQUFrQm9FLFdBQVcsQ0FBN0JwRSxFQUE2QixDQUE3QkEsR0FEeUIsSUFFekIsS0FGRixNQUEyQixDQUEzQjtBQUlBLDZCQTFDa0IsQ0E0Q2xCO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7O0FBQ0EsUUFBSSxDQUFFb0QsT0FBRCxDQUFELE1BQXdCLHFCQUE1QixTQUE0QixDQUE1QixFQUE2RDtBQUMzRDtBQUNBaFcsWUFBTSxDQUFOQSxtQ0FGMkQsQ0FHM0Q7O0FBQ0E7QUFDQTtBQUNBLGtCQUFZLGdCQUFnQixLQUE1QixLQUFZLENBQVo7QUFDQUEsWUFBTSxDQUFOQTtBQUNBO0FBR0YsS0E3RGtCLENBNkRsQjtBQUNBO0FBQ0E7OztBQUNBLFVBQU1pWCxLQUFLLEdBQUcsTUFBTSxnQkFBcEIsV0FBb0IsRUFBcEI7QUFDQSxVQUFNO0FBQUVDLGdCQUFVLEVBQVo7QUFBQSxRQUEyQixNQUFNLGdCQUF2QztBQUVBLFFBQUlDLE1BQU0sR0FBRyx3Q0FBYixHQUFhLENBQWI7QUFFQSxRQUFJO0FBQUE7QUFBQTtBQUFBLFFBQUo7QUFFQUEsVUFBTSxHQUFHLDBCQUFUQSxLQUFTLENBQVRBOztBQUVBLFFBQUlBLE1BQU0sQ0FBTkEsYUFBSixVQUFrQztBQUNoQ2pYLGNBQVEsR0FBR2lYLE1BQU0sQ0FBakJqWDtBQUNBd0ksU0FBRyxHQUFHLGlDQUFOQSxNQUFNLENBQU5BO0FBR0YsS0E5RWtCLENBOEVsQjtBQUNBO0FBQ0E7OztBQUNBeEksWUFBUSxHQUFHQSxRQUFRLEdBQ2YscURBQXdCOFcsV0FBVyxDQURwQixRQUNvQixDQUFuQyxDQURlLEdBQW5COVcsU0FqRmtCLENBcUZsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUNBLFFBQUksQ0FBQyxjQUFMLFNBQUssQ0FBTCxFQUErQjtBQUM3QlEsWUFBTSxHQUFOQTtBQUdGOztBQUFBLFFBQUlxVSxLQUFLLEdBQUcscURBQVosUUFBWSxDQUFaO0FBQ0EsVUFBTTtBQUFFNUYsYUFBTyxHQUFUO0FBQUEsUUFBTixRQS9Ga0IsQ0FpR2xCO0FBQ0E7O0FBQ0EsUUFBSVMsVUFBVSxHQUFkOztBQUVBLFFBQUlnQixJQUFKLEVBQXFDO0FBQ25DaEIsZ0JBQVUsR0FBRyw4QkFDWCw0Q0FEVyw0Q0FNVkQsQ0FBRCxJQUFlLGtCQUFrQjtBQUFFelAsZ0JBQVEsRUFBNUI7QUFBa0IsT0FBbEIsU0FOakIwUCxRQUFhLENBQWJBOztBQVNBLFVBQUlBLFVBQVUsS0FBZCxJQUF1QjtBQUNyQixjQUFNd0gsYUFBYSxHQUFHLHFEQUNwQixrQkFDRXJJLE1BQU0sQ0FBTkEsbUJBQTBCO0FBQUU3TyxrQkFBUSxFQUR0QztBQUM0QixTQUExQjZPLENBREYsZ0JBREYsUUFBc0IsQ0FBdEIsQ0FEcUIsQ0FTckI7QUFDQTs7QUFDQSxZQUFJa0ksS0FBSyxDQUFMQSxTQUFKLGFBQUlBLENBQUosRUFBbUM7QUFDakNsQyxlQUFLLEdBQUxBO0FBQ0E3VSxrQkFBUSxHQUFSQTtBQUNBaVgsZ0JBQU0sQ0FBTkE7QUFDQXpPLGFBQUcsR0FBRyxpQ0FBTkEsTUFBTSxDQUFOQTtBQUVIO0FBQ0Y7QUFDRGtIOztBQUFBQSxjQUFVLEdBQUdtSCxTQUFTLENBQUNDLFdBQVcsQ0FBWixVQUFZLENBQVosRUFBMEIsS0FBaERwSCxNQUFzQixDQUF0QkE7O0FBRUEsUUFBSSwrQkFBSixLQUFJLENBQUosRUFBMkI7QUFDekIsWUFBTXlILFFBQVEsR0FBRyx3Q0FBakIsVUFBaUIsQ0FBakI7QUFDQSxZQUFNcEUsVUFBVSxHQUFHb0UsUUFBUSxDQUEzQjtBQUVBLFlBQU1DLFVBQVUsR0FBRywrQkFBbkIsS0FBbUIsQ0FBbkI7QUFDQSxZQUFNQyxVQUFVLEdBQUcsK0NBQW5CLFVBQW1CLENBQW5CO0FBQ0EsWUFBTUMsaUJBQWlCLEdBQUd6QyxLQUFLLEtBQS9CO0FBQ0EsWUFBTW5CLGNBQWMsR0FBRzRELGlCQUFpQixHQUNwQzNELGFBQWEsb0JBRHVCLEtBQ3ZCLENBRHVCLEdBQXhDOztBQUlBLFVBQUksZUFBZ0IyRCxpQkFBaUIsSUFBSSxDQUFDNUQsY0FBYyxDQUF4RCxRQUFrRTtBQUNoRSxjQUFNNkQsYUFBYSxHQUFHMUksTUFBTSxDQUFOQSxLQUFZdUksVUFBVSxDQUF0QnZJLGVBQ25CbUUsS0FBRCxJQUFXLENBQUMvUyxLQUFLLENBRG5CLEtBQ21CLENBREc0TyxDQUF0Qjs7QUFJQSxZQUFJMEksYUFBYSxDQUFiQSxTQUFKLEdBQThCO0FBQzVCLG9CQUEyQztBQUN6Q3BXLG1CQUFPLENBQVBBLEtBQ0csR0FDQ21XLGlCQUFpQiwwQkFFWixpQ0FIUCw4QkFBQyxHQUtFLGVBQWNDLGFBQWEsQ0FBYkEsVUFObkJwVztBQVlGOztBQUFBLGdCQUFNLFVBQ0osQ0FBQ21XLGlCQUFpQixHQUNiLDBCQUF5QjlPLEdBQUksb0NBQW1DK08sYUFBYSxDQUFiQSxVQURuRCxvQ0FJYiw4QkFBNkJ4RSxVQUFXLDhDQUE2QzhCLEtBSjFGLFNBS0csNENBQ0N5QyxpQkFBaUIsaUNBRWIsc0JBVFYsRUFBTSxDQUFOO0FBYUg7QUFoQ0QsYUFnQ08sdUJBQXVCO0FBQzVCakosVUFBRSxHQUFHLGlDQUNIUSxNQUFNLENBQU5BLHFCQUE0QjtBQUMxQjdPLGtCQUFRLEVBQUUwVCxjQUFjLENBREU7QUFFMUJ6VCxlQUFLLEVBQUU0VCxrQkFBa0IsUUFBUUgsY0FBYyxDQUhuRHJGLE1BRzZCO0FBRkMsU0FBNUJRLENBREcsQ0FBTFI7QUFESyxhQU9BO0FBQ0w7QUFDQVEsY0FBTSxDQUFOQTtBQUVIO0FBRUQvTzs7QUFBQUEsVUFBTSxDQUFOQTs7QUFFQSxRQUFJO0FBQ0YsWUFBTTBYLFNBQVMsR0FBRyxNQUFNLDhDQUF4QixPQUF3QixDQUF4QjtBQU9BLFVBQUk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBQUosVUFSRSxDQVVGOztBQUNBLFVBQ0UsQ0FBQ3hCLE9BQU8sSUFBUixxQkFFQzNOLEtBQUQsQ0FGQSxhQUdDQSxLQUFELFVBQUNBLENBSkgsY0FLRTtBQUNBLGNBQU1vUCxXQUFXLEdBQUlwUCxLQUFELFVBQUNBLENBQXJCLGFBREEsQ0FHQTtBQUNBO0FBQ0E7O0FBQ0EsWUFBSW9QLFdBQVcsQ0FBWEEsV0FBSixHQUFJQSxDQUFKLEVBQWlDO0FBQy9CLGdCQUFNQyxVQUFVLEdBQUcsd0NBQW5CLFdBQW1CLENBQW5COztBQUNBOztBQUVBLGNBQUlYLEtBQUssQ0FBTEEsU0FBZVcsVUFBVSxDQUE3QixRQUFJWCxDQUFKLEVBQXlDO0FBQ3ZDLG1CQUFPLDhDQUFQLE9BQU8sQ0FBUDtBQUVIO0FBRUQxSjs7QUFBQUEsY0FBTSxDQUFOQTtBQUNBLGVBQU8sWUFBWSxNQUFNLENBQXpCLENBQU8sQ0FBUDtBQUdGdk47O0FBQUFBLFlBQU0sQ0FBTkE7QUFDQSxvQ0FHRTZXLFNBQVMsS0FBS2IsT0FBTyxDQUFaLFFBQXFCLEtBSGhDLGFBR1csQ0FIWDs7QUFPQSxnQkFBMkM7QUFDekMsY0FBTTZCLE9BQVksR0FBRyx5QkFBckI7QUFDRXRLLGNBQUQsS0FBQ0EsQ0FBRCxhQUFDQSxHQUNBc0ssT0FBTyxDQUFQQSxvQkFBNEJBLE9BQU8sQ0FBbkNBLHVCQUNBLENBQUVILFNBQVMsQ0FBVixTQUFDQSxDQUZILGVBQUNuSztBQUtKOztBQUFBLFlBQU0sNkRBQ0h4QyxDQUFELElBQU87QUFDTCxZQUFJQSxDQUFDLENBQUwsV0FBaUIrTSxLQUFLLEdBQUdBLEtBQUssSUFBOUIsQ0FBaUJBLENBQWpCLEtBQ0s7QUFIVCxPQUFNLENBQU47O0FBT0EsaUJBQVc7QUFDVDlYLGNBQU0sQ0FBTkE7QUFDQTtBQUdGOztBQUFBLFVBQUk0USxLQUFKLEVBQTJDLEVBTTNDOztBQUFBLFVBQUlBLEtBQUosRUFBcUMsRUFLckM1UTs7QUFBQUEsWUFBTSxDQUFOQTtBQUVBO0FBQ0EsS0E1RUYsQ0E0RUUsWUFBWTtBQUNaLFVBQUlvQixHQUFHLENBQVAsV0FBbUI7QUFDakI7QUFFRjs7QUFBQTtBQUVIO0FBRUQyVzs7QUFBQUEsYUFBVyxrQkFJVC9CLE9BQTBCLEdBSmpCLElBS0g7QUFDTixjQUEyQztBQUN6QyxVQUFJLE9BQU96SSxNQUFNLENBQWIsWUFBSixhQUEyQztBQUN6Q2xNLGVBQU8sQ0FBUEE7QUFDQTtBQUdGOztBQUFBLFVBQUksT0FBT2tNLE1BQU0sQ0FBTkEsUUFBUCxNQUFPQSxDQUFQLEtBQUosYUFBbUQ7QUFDakRsTSxlQUFPLENBQVBBLE1BQWUsMkJBQTBCWCxNQUF6Q1c7QUFDQTtBQUVIO0FBRUQ7O0FBQUEsUUFBSVgsTUFBTSxLQUFOQSxlQUEwQix5QkFBOUIsSUFBK0M7QUFDN0Msc0JBQWdCc1YsT0FBTyxDQUF2QjtBQUNBLFlBQU0sQ0FBTixnQkFDRTtBQUFBO0FBQUE7QUFBQTtBQUlFZ0MsV0FBRyxFQUxQO0FBQ0UsT0FERixFQU9FO0FBQ0E7QUFDQTtBQVRGO0FBY0g7QUFFRDs7QUFBQSxzRUFNNkI7QUFDM0IsUUFBSTVXLEdBQUcsQ0FBUCxXQUFtQjtBQUNqQjtBQUNBO0FBR0Y7O0FBQUEsUUFBSThTLGVBQWUsSUFBZkEsT0FBSixlQUE2QztBQUMzQ2xVLFlBQU0sQ0FBTkEseUNBRDJDLENBRzNDO0FBQ0E7QUFDQTtBQUNBO0FBRUE7O0FBQ0F1TixZQUFNLENBQU5BLG1CQVQyQyxDQVczQztBQUNBOztBQUNBLFlBQU0wSyxzQkFBTjtBQUdGOztBQUFBLFFBQUk7QUFDRjtBQUNBO0FBQ0E7QUFDQSxZQUFNQyxNQUFNLEdBQUc5VyxHQUFHLENBQUhBLFlBQWY7O0FBRUEsa0JBQVk7QUFDVixZQUFJO0FBQ0Y7QUFDQyxXQUFDO0FBQUUrVyxnQkFBSSxFQUFOO0FBQUE7QUFBQTtBQUFBLGNBQXdDLE1BQU0sb0JBQS9DLE1BQStDLENBQS9DLEVBRkMsQ0FNRjtBQUNBOztBQUNBLGNBQUlDLEdBQUcsSUFBSUEsR0FBRyxDQUFkLFNBQXdCO0FBQ3RCN1AsaUJBQUssR0FBRyxNQUFNLG9CQUNaLGtEQUFrRCxLQURwREEsTUFDRSxDQURZLENBQWRBO0FBSUg7QUFBQyxTQWJGLENBYUUsYUFBYSxDQUNiO0FBRUg7QUFFRDs7QUFBQSxVQUNFLG9DQUNBLHVCQUZGLGFBR0U7QUFDQTtBQUFDLFNBQUM7QUFBRTRQLGNBQUksRUFBTjtBQUFBO0FBQUEsWUFBbUMsTUFBTSxvQkFBMUMsU0FBMEMsQ0FBMUM7QUFLSDs7QUFBQSxZQUFNVCxTQUEyQixHQUFHO0FBQUE7QUFBQTtBQUFBO0FBSWxDdFcsV0FBRyxFQUFFOFcsTUFBTSxlQUp1QjtBQUtsQ0osYUFBSyxFQUFFSSxNQUFNLGVBTGY7QUFBb0MsT0FBcEM7O0FBUUEsVUFBSSxDQUFDUixTQUFTLENBQWQsT0FBc0I7QUFDcEIsWUFBSTtBQUNGQSxtQkFBUyxDQUFUQSxRQUFrQixNQUFNLGdDQUFnQztBQUFBO0FBQUE7QUFBeERBO0FBQXdELFdBQWhDLENBQXhCQTtBQUtBLFNBTkYsQ0FNRSxlQUFlO0FBQ2ZyVyxpQkFBTyxDQUFQQTtBQUNBcVcsbUJBQVMsQ0FBVEE7QUFFSDtBQUVEOztBQUFBO0FBQ0EsS0F4REYsQ0F3REUscUJBQXFCO0FBQ3JCLGFBQU8sNkRBQVAsSUFBTyxDQUFQO0FBRUg7QUFFRDs7QUFBQSxpREFLRXZJLE9BQWdCLEdBTGxCLE9BTTZCO0FBQzNCLFFBQUk7QUFDRixZQUFNa0osZUFBZSxHQUFHLGdCQUF4QixLQUF3QixDQUF4Qjs7QUFFQSxVQUFJbEosT0FBTyxJQUFQQSxtQkFBOEIsZUFBbEMsT0FBd0Q7QUFDdEQ7QUFHRjs7QUFBQSxZQUFNdUksU0FBMkIsR0FBR1csZUFBZSxxQkFFL0MsTUFBTSxnQ0FBaUM1RCxHQUFELEtBQVU7QUFDOUM0QixpQkFBUyxFQUFFNUIsR0FBRyxDQURnQztBQUU5Q3dCLG1CQUFXLEVBQUV4QixHQUFHLENBRjhCO0FBRzlDeUIsZUFBTyxFQUFFekIsR0FBRyxDQUFIQSxJQUhxQztBQUk5QzJCLGVBQU8sRUFBRTNCLEdBQUcsQ0FBSEEsSUFOZjtBQUVvRCxPQUFWLENBQWhDLENBRlY7QUFTQSxZQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUEsVUFBTjs7QUFFQSxnQkFBMkM7QUFDekMsY0FBTTtBQUFBO0FBQUEsWUFBeUJwTSxtQkFBTyxDQUF0QywwQkFBc0MsQ0FBdEM7O0FBQ0EsWUFBSSxDQUFDaVEsa0JBQWtCLENBQXZCLFNBQXVCLENBQXZCLEVBQW9DO0FBQ2xDLGdCQUFNLFVBQ0gseURBQXdEcFksUUFEM0QsR0FBTSxDQUFOO0FBSUg7QUFFRDs7QUFBQTs7QUFFQSxVQUFJZ1csT0FBTyxJQUFYLFNBQXdCO0FBQ3RCcUMsZ0JBQVEsR0FBRyw0QkFDVCxpQ0FBcUI7QUFBQTtBQURaO0FBQ1ksU0FBckIsQ0FEUyxFQUVUdkIsV0FBVyxDQUZGLEVBRUUsQ0FGRixXQUlULEtBSkZ1QixNQUFXLENBQVhBO0FBUUY7O0FBQUEsWUFBTWhRLEtBQUssR0FBRyxNQUFNLGNBQWdDLE1BQ2xEMk4sT0FBTyxHQUNILG9CQURHLFFBQ0gsQ0FERyxHQUVIRSxPQUFPLEdBQ1Asb0JBRE8sUUFDUCxDQURPLEdBRVAsZ0NBRUU7QUFDQTtBQUFBO0FBQUE7QUFHRXBCLGNBQU0sRUFYaEI7QUFRUSxPQUhGLENBTGMsQ0FBcEI7QUFnQkEwQyxlQUFTLENBQVRBO0FBQ0E7QUFDQTtBQUNBLEtBekRGLENBeURFLFlBQVk7QUFDWixhQUFPLGdEQUFQLEVBQU8sQ0FBUDtBQUVIO0FBRURjOztBQUFBQSxLQUFHLG1DQU1jO0FBQ2Y7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQU8sWUFBUCxJQUFPLENBQVA7QUFHRjtBQUFBOzs7Ozs7QUFJQUMsZ0JBQWMsS0FBNkI7QUFDekM7QUFHRkM7O0FBQUFBLGlCQUFlLEtBQXNCO0FBQ25DLFFBQUksQ0FBQyxLQUFMLFFBQWtCO0FBQ2xCLFVBQU0sMEJBQTBCLGtCQUFoQyxHQUFnQyxDQUFoQztBQUNBLFVBQU0sMEJBQTBCbkssRUFBRSxDQUFGQSxNQUFoQyxHQUFnQ0EsQ0FBaEMsQ0FIbUMsQ0FLbkM7O0FBQ0EsUUFBSW9LLE9BQU8sSUFBSUMsWUFBWSxLQUF2QkQsZ0JBQTRDRSxPQUFPLEtBQXZELFNBQXFFO0FBQ25FO0FBR0YsS0FWbUMsQ0FVbkM7OztBQUNBLFFBQUlELFlBQVksS0FBaEIsY0FBbUM7QUFDakM7QUFHRixLQWZtQyxDQWVuQztBQUNBO0FBQ0E7QUFDQTs7O0FBQ0EsV0FBT0MsT0FBTyxLQUFkO0FBR0ZDOztBQUFBQSxjQUFZLEtBQW1CO0FBQzdCLFVBQU0sV0FBV3ZLLEVBQUUsQ0FBRkEsTUFBakIsR0FBaUJBLENBQWpCLENBRDZCLENBRTdCOztBQUNBLFFBQUl1RixJQUFJLEtBQVIsSUFBaUI7QUFDZnZHLFlBQU0sQ0FBTkE7QUFDQTtBQUdGLEtBUjZCLENBUTdCOzs7QUFDQSxVQUFNd0wsSUFBSSxHQUFHdEssUUFBUSxDQUFSQSxlQUFiLElBQWFBLENBQWI7O0FBQ0EsY0FBVTtBQUNSc0ssVUFBSSxDQUFKQTtBQUNBO0FBRUYsS0FkNkIsQ0FjN0I7QUFDQTs7O0FBQ0EsVUFBTUMsTUFBTSxHQUFHdkssUUFBUSxDQUFSQSx3QkFBZixDQUFlQSxDQUFmOztBQUNBLGdCQUFZO0FBQ1Z1SyxZQUFNLENBQU5BO0FBRUg7QUFFREM7O0FBQUFBLFVBQVEsU0FBMEI7QUFDaEMsV0FBTyxnQkFBUDtBQUdGQzs7QUFBQUEsY0FBWSxvQkFBeUNDLGFBQWEsR0FBdEQsTUFBK0Q7QUFDekUsVUFBTTtBQUFBO0FBQUEsUUFBTjtBQUNBLFVBQU1DLGFBQWEsR0FBRyxxREFDcEIsOENBQW9CRCxhQUFhLEdBQUduQyxXQUFXLENBQWQsUUFBYyxDQUFkLEdBRG5DLFFBQ0UsQ0FEb0IsQ0FBdEI7O0FBSUEsUUFBSW9DLGFBQWEsS0FBYkEsVUFBNEJBLGFBQWEsS0FBN0MsV0FBNkQ7QUFDM0Q7QUFHRixLQVZ5RSxDQVV6RTs7O0FBQ0EsUUFBSSxDQUFDbkMsS0FBSyxDQUFMQSxTQUFMLGFBQUtBLENBQUwsRUFBcUM7QUFDbkM7QUFDQUEsV0FBSyxDQUFMQSxLQUFZa0IsSUFBRCxJQUFVO0FBQ25CLFlBQ0Usd0NBQ0EsNkNBRkYsYUFFRSxDQUZGLEVBR0U7QUFDQVAsb0JBQVUsQ0FBVkEsV0FBc0J1QixhQUFhLEdBQUcvRSxXQUFXLENBQWQsSUFBYyxDQUFkLEdBQW5Dd0Q7QUFDQTtBQUVIO0FBUkRYO0FBVUY7O0FBQUE7QUFHRjtBQUFBOzs7Ozs7OztBQU1BLHNCQUVFakMsTUFBYyxHQUZoQixLQUdFZ0IsT0FBd0IsR0FIMUIsSUFJaUI7QUFDZixRQUFJbUIsTUFBTSxHQUFHLHdDQUFiLEdBQWEsQ0FBYjtBQUVBLFFBQUk7QUFBQTtBQUFBLFFBQUo7O0FBRUEsUUFBSXZHLEtBQUosRUFBcUMsRUFvQnJDOztBQUFBLFVBQU1xRyxLQUFLLEdBQUcsTUFBTSxnQkFBcEIsV0FBb0IsRUFBcEI7QUFFQUUsVUFBTSxHQUFHLDBCQUFUQSxLQUFTLENBQVRBOztBQUVBLFFBQUlBLE1BQU0sQ0FBTkEsYUFBSixVQUFrQztBQUNoQ2pYLGNBQVEsR0FBR2lYLE1BQU0sQ0FBakJqWDtBQUNBd0ksU0FBRyxHQUFHLGlDQUFOQSxNQUFNLENBQU5BO0FBR0YsS0FsQ2UsQ0FrQ2Y7OztBQUNBLGNBQTJDO0FBQ3pDO0FBR0Y7O0FBQUEsVUFBTXFNLEtBQUssR0FBRyxxREFBZCxRQUFjLENBQWQ7QUFDQSxVQUFNc0UsT0FBTyxDQUFQQSxJQUFZLENBQ2hCLDBDQUdFLE9BQU9yRCxPQUFPLENBQWQseUJBQXdDQSxPQUFPLENBQS9DLFNBQXlELEtBSDNELFFBSUUsS0FMYyxhQUNoQixDQURnQixFQU9oQixnQkFBZ0JBLE9BQU8sQ0FBUEEsd0JBQWhCLFlBUEYsS0FPRSxDQVBnQixDQUFacUQsQ0FBTjtBQVdGOztBQUFBLDhCQUE0RDtBQUMxRCxRQUFJOUcsU0FBUyxHQUFiOztBQUNBLFVBQU0rRyxNQUFNLEdBQUksV0FBVyxNQUFNO0FBQy9CL0csZUFBUyxHQUFUQTtBQURGOztBQUlBLFVBQU1nSCxlQUFlLEdBQUcsTUFBTSx5QkFBOUIsS0FBOEIsQ0FBOUI7O0FBRUEsbUJBQWU7QUFDYixZQUFNekIsS0FBVSxHQUFHLFVBQ2hCLHdDQUF1Qy9DLEtBRDFDLEdBQW1CLENBQW5CO0FBR0ErQyxXQUFLLENBQUxBO0FBQ0E7QUFHRjs7QUFBQSxRQUFJd0IsTUFBTSxLQUFLLEtBQWYsS0FBeUI7QUFDdkI7QUFHRjs7QUFBQTtBQUdGRTs7QUFBQUEsVUFBUSxLQUFzQztBQUM1QyxRQUFJakgsU0FBUyxHQUFiOztBQUNBLFVBQU0rRyxNQUFNLEdBQUcsTUFBTTtBQUNuQi9HLGVBQVMsR0FBVEE7QUFERjs7QUFHQTtBQUNBLFdBQU9rSCxFQUFFLEdBQUZBLEtBQVd2WCxJQUFELElBQVU7QUFDekIsVUFBSW9YLE1BQU0sS0FBSyxLQUFmLEtBQXlCO0FBQ3ZCO0FBR0Y7O0FBQUEscUJBQWU7QUFDYixjQUFNbFksR0FBUSxHQUFHLFVBQWpCLGlDQUFpQixDQUFqQjtBQUNBQSxXQUFHLENBQUhBO0FBQ0E7QUFHRjs7QUFBQTtBQVhGLEtBQU9xWSxDQUFQO0FBZUZDOztBQUFBQSxnQkFBYyxXQUFvQztBQUNoRCxVQUFNO0FBQUV4TCxVQUFJLEVBQU47QUFBQSxRQUFxQixrQkFBa0JYLE1BQU0sQ0FBTkEsU0FBN0MsSUFBMkIsQ0FBM0I7O0FBQ0EsUUFBSXFELEtBQUosRUFBaUUsRUFHakU7O0FBQUEsV0FBTytJLGFBQWEsV0FBVyxLQUF4QkEsS0FBYSxDQUFiQSxNQUEwQ3pYLElBQUQsSUFBVTtBQUN4RDtBQUNBO0FBRkYsS0FBT3lYLENBQVA7QUFNRkM7O0FBQUFBLGdCQUFjLFdBQW9DO0FBQ2hELFdBQU9ELGFBQWEsV0FBVyxLQUEvQixLQUFvQixDQUFwQjtBQUdGNUg7O0FBQUFBLGlCQUFlLGlCQUdDO0FBQ2QsVUFBTTtBQUFFc0UsZUFBUyxFQUFYO0FBQUEsUUFBcUIsZ0JBQTNCLE9BQTJCLENBQTNCOztBQUNBLFVBQU13RCxPQUFPLEdBQUcsY0FBaEIsR0FBZ0IsQ0FBaEI7O0FBQ0FDLE9BQUcsQ0FBSEE7QUFDQSxXQUFPLHFDQUFpRDtBQUFBO0FBQUE7QUFHdEQ3TCxZQUFNLEVBSGdEO0FBQXhEO0FBQXdELEtBQWpELENBQVA7QUFRRjhMOztBQUFBQSxvQkFBa0IsS0FBbUI7QUFDbkMsUUFBSSxLQUFKLEtBQWM7QUFDWi9aLFlBQU0sQ0FBTkEsZ0NBQXVDaVksc0JBQXZDalk7QUFDQTtBQUNBO0FBRUg7QUFFRGdhOztBQUFBQSxRQUFNLE9BQXdDO0FBQzVDLFdBQU8sZUFBZSx5QkFBdEIsU0FBTyxDQUFQO0FBbDhCOEM7O0FBQUE7OztBQUE3QmhhLE0sQ0EyQlp1VixNQTNCWXZWLEdBMkJVLG9CQTNCVkEsQzs7Ozs7Ozs7Ozs7Ozs7O3dDQy9WckI7O0FBQ2UsdUNBQXVEO0FBQ3BFLFNBQU9pYSxPQUFPLENBQVBBLGtCQUEyQkMsSUFBRCxJQUFrQkMsa0JBQWtCLENBQXJFLElBQXFFLENBQTlERixDQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNxQkQ7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUF4QkEsQyxDQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBTUEsTUFBTUcsZ0JBQWdCLEdBQXRCOztBQUVPLDJCQUFzQztBQUMzQyxNQUFJO0FBQUE7QUFBQTtBQUFBLE1BQUo7QUFDQSxNQUFJQyxRQUFRLEdBQUdDLE1BQU0sQ0FBTkEsWUFBZjtBQUNBLE1BQUlwYSxRQUFRLEdBQUdvYSxNQUFNLENBQU5BLFlBQWY7QUFDQSxNQUFJeEcsSUFBSSxHQUFHd0csTUFBTSxDQUFOQSxRQUFYO0FBQ0EsTUFBSW5hLEtBQUssR0FBR21hLE1BQU0sQ0FBTkEsU0FBWjtBQUNBLE1BQUlDLElBQW9CLEdBQXhCO0FBRUFDLE1BQUksR0FBR0EsSUFBSSxHQUFHTCxrQkFBa0IsQ0FBbEJBLElBQWtCLENBQWxCQSx3QkFBSCxNQUFYSzs7QUFFQSxNQUFJRixNQUFNLENBQVYsTUFBaUI7QUFDZkMsUUFBSSxHQUFHQyxJQUFJLEdBQUdGLE1BQU0sQ0FBcEJDO0FBREYsU0FFTyxjQUFjO0FBQ25CQSxRQUFJLEdBQUdDLElBQUksSUFBSSxDQUFDQyxRQUFRLENBQVJBLFFBQUQsR0FBQ0EsQ0FBRCxHQUEwQixJQUFHQSxRQUE3QixNQUFmRixRQUFXLENBQVhBOztBQUNBLFFBQUlELE1BQU0sQ0FBVixNQUFpQjtBQUNmQyxVQUFJLElBQUksTUFBTUQsTUFBTSxDQUFwQkM7QUFFSDtBQUVEOztBQUFBLE1BQUlwYSxLQUFLLElBQUksaUJBQWIsVUFBd0M7QUFDdENBLFNBQUssR0FBR3VhLE1BQU0sQ0FBQ0MsV0FBVyxDQUFYQSx1QkFBZnhhLEtBQWV3YSxDQUFELENBQWR4YTtBQUdGOztBQUFBLE1BQUl5YSxNQUFNLEdBQUdOLE1BQU0sQ0FBTkEsVUFBa0JuYSxLQUFLLElBQUssSUFBR0EsS0FBL0JtYSxNQUFiO0FBRUEsTUFBSUQsUUFBUSxJQUFJQSxRQUFRLENBQVJBLE9BQWdCLENBQWhCQSxPQUFoQixLQUE2Q0EsUUFBUSxJQUFSQTs7QUFFN0MsTUFDRUMsTUFBTSxDQUFOQSxXQUNDLENBQUMsYUFBYUYsZ0JBQWdCLENBQWhCQSxLQUFkLFFBQWNBLENBQWQsS0FBa0RHLElBQUksS0FGekQsT0FHRTtBQUNBQSxRQUFJLEdBQUcsUUFBUUEsSUFBSSxJQUFuQkEsRUFBTyxDQUFQQTtBQUNBLFFBQUlyYSxRQUFRLElBQUlBLFFBQVEsQ0FBUkEsQ0FBUSxDQUFSQSxLQUFoQixLQUFxQ0EsUUFBUSxHQUFHLE1BQVhBO0FBTHZDLFNBTU8sSUFBSSxDQUFKLE1BQVc7QUFDaEJxYSxRQUFJLEdBQUpBO0FBR0Y7O0FBQUEsTUFBSXpHLElBQUksSUFBSUEsSUFBSSxDQUFKQSxDQUFJLENBQUpBLEtBQVosS0FBNkJBLElBQUksR0FBRyxNQUFQQTtBQUM3QixNQUFJOEcsTUFBTSxJQUFJQSxNQUFNLENBQU5BLENBQU0sQ0FBTkEsS0FBZCxLQUFpQ0EsTUFBTSxHQUFHLE1BQVRBO0FBRWpDMWEsVUFBUSxHQUFHQSxRQUFRLENBQVJBLGlCQUFYQSxrQkFBV0EsQ0FBWEE7QUFDQTBhLFFBQU0sR0FBR0EsTUFBTSxDQUFOQSxhQUFUQSxLQUFTQSxDQUFUQTtBQUVBLFNBQVEsR0FBRVAsUUFBUyxHQUFFRSxJQUFLLEdBQUVyYSxRQUFTLEdBQUUwYSxNQUFPLEdBQUU5RyxJQUFoRDtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozt5Q0N4RUQ7O0FBQ0EsTUFBTStHLFVBQVUsR0FBaEI7O0FBRU8sK0JBQWdEO0FBQ3JELFNBQU9BLFVBQVUsQ0FBVkEsS0FBUCxLQUFPQSxDQUFQO0FBQ0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNMRDs7QUFDQTs7QUFFQSxNQUFNQyxVQUFVLEdBQUcsUUFDakIsb0JBQTZDLFNBRDVCLENBQW5CO0FBSUE7Ozs7Ozs7QUFNTyxxQ0FBc0Q7QUFDM0QsUUFBTUMsWUFBWSxHQUFHdEgsSUFBSSxHQUFHLGNBQUgsVUFBRyxDQUFILEdBQXpCO0FBQ0EsUUFBTTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFRRixhQVJKLFlBUUksQ0FSSjs7QUFTQSxNQUNFdUgsTUFBTSxLQUFLRixVQUFVLENBQXJCRSxVQUNDWCxRQUFRLEtBQVJBLFdBQXdCQSxRQUFRLEtBRm5DLFVBR0U7QUFDQSxVQUFNLFVBQU4saUNBQU0sQ0FBTjtBQUVGOztBQUFBLFNBQU87QUFBQTtBQUVMbGEsU0FBSyxFQUFFLHlDQUZGLFlBRUUsQ0FGRjtBQUFBO0FBQUE7QUFLTCtOLFFBQUksRUFBRUEsSUFBSSxDQUFKQSxNQUFXNE0sVUFBVSxDQUFWQSxPQUxuQixNQUtRNU07QUFMRCxHQUFQO0FBT0QsQzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUlPOztBQUFBLE1BQU0rTSxjQUNjLEdBQUc7QUFDNUJDLFdBQVMsRUFEbUI7QUFFNUJDLFdBQVMsRUFISjtBQUN1QixDQUR2Qjs7O0FBTUEsTUFBTUMseUJBQ2MsbUNBQUcsY0FBSDtBQUV6QkMsUUFBTSxFQUhEO0FBQ29CLEVBRHBCOzs7O2VBTVEsQ0FBQ0MsV0FBVyxHQUFaLFVBQXlCO0FBQ3RDLFNBQVE1SyxJQUFELElBQWtCO0FBQ3ZCLFVBQU02SyxJQUF3QixHQUE5QjtBQUNBLFVBQU1DLFlBQVksR0FBR0MsWUFBWSxDQUFaQSx5QkFHbkJILFdBQVcsK0JBSGIsY0FBcUJHLENBQXJCO0FBS0EsVUFBTUMsT0FBTyxHQUFHRCxZQUFZLENBQVpBLCtCQUFoQixJQUFnQkEsQ0FBaEI7QUFFQSxXQUFPLHNCQUF1RDtBQUM1RCxZQUFNaEgsR0FBRyxHQUFHdlUsUUFBUSxJQUFSQSxlQUEyQndiLE9BQU8sQ0FBOUMsUUFBOEMsQ0FBOUM7O0FBQ0EsVUFBSSxDQUFKLEtBQVU7QUFDUjtBQUdGOztBQUFBLHVCQUFpQjtBQUNmLGFBQUssTUFBTCxhQUF3QjtBQUN0QjtBQUNBO0FBQ0EsY0FBSSxPQUFPN1osR0FBRyxDQUFWLFNBQUosVUFBa0M7QUFDaEMsbUJBQVE0UyxHQUFHLENBQUosTUFBQ0EsQ0FBbUI1UyxHQUFHLENBQTlCLElBQVE0UyxDQUFSO0FBRUg7QUFDRjtBQUVEOztBQUFBLDZDQUFPLE1BQVAsR0FBdUJBLEdBQUcsQ0FBMUI7QUFoQkY7QUFURjs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNoQkY7O0FBQ0E7O0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFJZTs7QUFBQSx1RkFNYjtBQUNBLE1BQUlrSCxpQkFLbUMsR0FMdkMsR0FEQSxDQVFBOztBQUNBeGIsT0FBSyxHQUFHNE8sTUFBTSxDQUFOQSxXQUFSNU8sS0FBUTRPLENBQVI1TztBQUNBLFNBQU9BLEtBQUssQ0FBWjs7QUFFQSxNQUFJd1gsV0FBVyxDQUFYQSxXQUFKLEdBQUlBLENBQUosRUFBaUM7QUFDL0JnRSxxQkFBaUIsR0FBRyx3Q0FBcEJBLFdBQW9CLENBQXBCQTtBQURGLFNBRU87QUFDTCxVQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFFBU0YsUUFUSixXQVNJLENBVEo7QUFXQUEscUJBQWlCLEdBQUc7QUFBQTtBQUVsQnhiLFdBQUssRUFBRSx5Q0FGVyxZQUVYLENBRlc7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQXBCd2I7QUFBb0IsS0FBcEJBO0FBWUY7O0FBQUEsUUFBTUMsU0FBUyxHQUFHRCxpQkFBaUIsQ0FBbkM7QUFDQSxRQUFNRSxRQUFRLEdBQUksR0FBRUYsaUJBQWlCLENBQUN6YixRQUFVLEdBQzlDeWIsaUJBQWlCLENBQWpCQSxRQUEwQixFQUQ1QjtBQUdBLFFBQU1HLGlCQUFxQyxHQUEzQztBQUNBTCxjQUFZLENBQVpBO0FBRUEsUUFBTU0sY0FBYyxHQUFHRCxpQkFBaUIsQ0FBakJBLElBQXVCamEsR0FBRCxJQUFTQSxHQUFHLENBQXpELElBQXVCaWEsQ0FBdkI7QUFFQSxNQUFJRSxtQkFBbUIsR0FBRyxZQUFZLENBQVosa0JBRXhCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUVDLFlBQVEsRUFSWjtBQVFFLEdBUndCLENBQTFCO0FBVUEsYUF6REEsQ0EyREE7O0FBQ0EsT0FBSyxNQUFNLE1BQVgsVUFBVyxDQUFYLElBQWdDbE4sTUFBTSxDQUFOQSxRQUFoQyxTQUFnQ0EsQ0FBaEMsRUFBMkQ7QUFDekQsUUFBSWpOLEtBQUssR0FBRytQLEtBQUssQ0FBTEEsc0JBQTRCcUssVUFBVSxDQUF0Q3JLLENBQXNDLENBQXRDQSxHQUFaOztBQUNBLGVBQVc7QUFDVDtBQUNBO0FBQ0EvUCxXQUFLLEdBQUksSUFBR0EsS0FBWkE7QUFDQSxZQUFNcWEsYUFBYSxHQUFHVixZQUFZLENBQVpBLGVBQTRCO0FBQUVRLGdCQUFRLEVBQTVEO0FBQWtELE9BQTVCUixDQUF0QjtBQUNBM1osV0FBSyxHQUFHcWEsYUFBYSxDQUFiQSxNQUFhLENBQWJBLFFBQVJyYSxDQUFRcWEsQ0FBUnJhO0FBRUY4Wjs7QUFBQUEsYUFBUyxDQUFUQSxHQUFTLENBQVRBO0FBR0YsR0F4RUEsQ0F3RUE7QUFDQTs7O0FBQ0EsUUFBTVEsU0FBUyxHQUFHck4sTUFBTSxDQUFOQSxLQUFsQixNQUFrQkEsQ0FBbEI7O0FBRUEsTUFDRXNOLG1CQUFtQixJQUNuQixDQUFDRCxTQUFTLENBQVRBLEtBQWdCdmEsR0FBRCxJQUFTa2EsY0FBYyxDQUFkQSxTQUYzQixHQUUyQkEsQ0FBeEJLLENBRkgsRUFHRTtBQUNBLFNBQUssTUFBTCxrQkFBNkI7QUFDM0IsVUFBSSxFQUFFdmEsR0FBRyxJQUFULFNBQUksQ0FBSixFQUF5QjtBQUN2QitaLGlCQUFTLENBQVRBLEdBQVMsQ0FBVEEsR0FBaUJqWSxNQUFNLENBQXZCaVksR0FBdUIsQ0FBdkJBO0FBRUg7QUFDRjtBQUVEOztBQUFBLFFBQU1VLGlCQUFpQixHQUFHM0UsV0FBVyxDQUFYQSxtQkFBMUI7O0FBRUEsTUFBSTtBQUNGNEUsVUFBTSxHQUFJLEdBQUVELGlCQUFpQixjQUFjLEVBQUcsR0FBRU4sbUJBQW1CLFFBQW5FTztBQUlBLFVBQU0sbUJBQW1CQSxNQUFNLENBQU5BLE1BQXpCLEdBQXlCQSxDQUF6QjtBQUNBWixxQkFBaUIsQ0FBakJBO0FBQ0FBLHFCQUFpQixDQUFqQkEsT0FBMEIsR0FBRTdILElBQUksU0FBUyxFQUFHLEdBQUVBLElBQUksSUFBSSxFQUF0RDZIO0FBQ0EsV0FBT0EsaUJBQWlCLENBQXhCO0FBQ0EsR0FURixDQVNFLFlBQVk7QUFDWixRQUFJdmEsR0FBRyxDQUFIQSxjQUFKLDhDQUFJQSxDQUFKLEVBQXVFO0FBQ3JFLFlBQU0sVUFBTix3S0FBTSxDQUFOO0FBSUY7O0FBQUE7QUFHRixHQTNHQSxDQTJHQTtBQUNBO0FBQ0E7QUFDQTs7O0FBQ0F1YSxtQkFBaUIsQ0FBakJBLHdDQUEwQixLQUExQkEsR0FFS0EsaUJBQWlCLENBRnRCQTtBQUtBLFNBQU87QUFBQTtBQUFQO0FBQU8sR0FBUDtBQUlELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuSU0sOENBRVc7QUFDaEIsUUFBTXhiLEtBQXFCLEdBQTNCO0FBQ0FxYyxjQUFZLENBQVpBLFFBQXFCLGdCQUFnQjtBQUNuQyxRQUFJLE9BQU9yYyxLQUFLLENBQVosR0FBWSxDQUFaLEtBQUosYUFBdUM7QUFDckNBLFdBQUssQ0FBTEEsR0FBSyxDQUFMQTtBQURGLFdBRU8sSUFBSTBSLEtBQUssQ0FBTEEsUUFBYzFSLEtBQUssQ0FBdkIsR0FBdUIsQ0FBbkIwUixDQUFKLEVBQStCO0FBQ3BDO0FBQUUxUixXQUFLLENBQU4sR0FBTSxDQUFMQSxDQUFELElBQUNBLENBQUQsS0FBQ0E7QUFERyxXQUVBO0FBQ0xBLFdBQUssQ0FBTEEsR0FBSyxDQUFMQSxHQUFhLENBQUNBLEtBQUssQ0FBTixHQUFNLENBQU4sRUFBYkEsS0FBYSxDQUFiQTtBQUVIO0FBUkRxYztBQVNBO0FBR0Y7O0FBQUEsdUNBQXVEO0FBQ3JELE1BQ0UsNkJBQ0MsNkJBQTZCLENBQUNDLEtBQUssQ0FEcEMsS0FDb0MsQ0FEcEMsSUFFQSxpQkFIRixXQUlFO0FBQ0EsV0FBTy9CLE1BQU0sQ0FBYixLQUFhLENBQWI7QUFMRixTQU1PO0FBQ0w7QUFFSDtBQUVNOztBQUFBLDBDQUVZO0FBQ2pCLFFBQU1uSCxNQUFNLEdBQUcsSUFBZixlQUFlLEVBQWY7QUFDQXhFLFFBQU0sQ0FBTkEsMEJBQWlDLENBQUMsTUFBRCxLQUFDLENBQUQsS0FBa0I7QUFDakQsUUFBSThDLEtBQUssQ0FBTEEsUUFBSixLQUFJQSxDQUFKLEVBQTBCO0FBQ3hCL1AsV0FBSyxDQUFMQSxRQUFlNGEsSUFBRCxJQUFVbkosTUFBTSxDQUFOQSxZQUFtQm9KLHNCQUFzQixDQUFqRTdhLElBQWlFLENBQXpDeVIsQ0FBeEJ6UjtBQURGLFdBRU87QUFDTHlSLFlBQU0sQ0FBTkEsU0FBZ0JvSixzQkFBc0IsQ0FBdENwSixLQUFzQyxDQUF0Q0E7QUFFSDtBQU5EeEU7QUFPQTtBQUdLOztBQUFBLHdCQUVMLEdBRkssa0JBR1k7QUFDakI2TixrQkFBZ0IsQ0FBaEJBLFFBQTBCSixZQUFELElBQWtCO0FBQ3pDM0ssU0FBSyxDQUFMQSxLQUFXMkssWUFBWSxDQUF2QjNLLElBQVcySyxFQUFYM0ssVUFBeUNoUSxHQUFELElBQVNtSixNQUFNLENBQU5BLE9BQWpENkcsR0FBaUQ3RyxDQUFqRDZHO0FBQ0EySyxnQkFBWSxDQUFaQSxRQUFxQixnQkFBZ0J4UixNQUFNLENBQU5BLFlBQXJDd1IsS0FBcUN4UixDQUFyQ3dSO0FBRkZJO0FBSUE7QUFDRCxDOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3BERDs7QUFDQTs7QUFFQTs7Ozs7O0FBRUE7O0FBQUEsTUFBTUMsa0JBQWtCLEdBQUcsd0JBQTNCLElBQTJCLENBQTNCOztBQUVlLGdGQU9iO0FBQ0EsTUFBSSxDQUFDNUYsS0FBSyxDQUFMQSxTQUFMLE1BQUtBLENBQUwsRUFBNkI7QUFDM0IsU0FBSyxNQUFMLHFCQUFnQztBQUM5QixZQUFNeUUsT0FBTyxHQUFHbUIsa0JBQWtCLENBQUNDLE9BQU8sQ0FBMUMsTUFBa0MsQ0FBbEM7QUFDQSxZQUFNblosTUFBTSxHQUFHK1gsT0FBTyxDQUF0QixNQUFzQixDQUF0Qjs7QUFFQSxrQkFBWTtBQUNWLFlBQUksQ0FBQ29CLE9BQU8sQ0FBWixhQUEwQjtBQUN4QjtBQUNBO0FBRUY7O0FBQUEsY0FBTUMsT0FBTyxHQUFHLGlDQUNkRCxPQUFPLENBRE8sa0NBS2RBLE9BQU8sQ0FBUEEsMEJBTEYsUUFBZ0IsQ0FBaEI7QUFPQTlILGNBQU0sR0FBRytILE9BQU8sQ0FBUEEsa0JBQVQvSDtBQUNBakcsY0FBTSxDQUFOQSxjQUFxQmdPLE9BQU8sQ0FBUEEsa0JBQXJCaE87O0FBRUEsWUFBSWtJLEtBQUssQ0FBTEEsU0FBZSxxREFBbkIsTUFBbUIsQ0FBZkEsQ0FBSixFQUFxRDtBQUNuRDtBQUNBO0FBQ0E7QUFHRixTQXJCVSxDQXFCVjs7O0FBQ0EsY0FBTWpELFlBQVksR0FBR0ssV0FBVyxDQUFoQyxNQUFnQyxDQUFoQzs7QUFFQSxZQUFJTCxZQUFZLEtBQVpBLFVBQTJCaUQsS0FBSyxDQUFMQSxTQUEvQixZQUErQkEsQ0FBL0IsRUFBNkQ7QUFDM0Q7QUFFSDtBQUNGO0FBQ0Y7QUFDRDs7QUFBQTtBQUNELEM7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDbERNLHFDQUF1RTtBQUM1RSxRQUFNO0FBQUE7QUFBQTtBQUFBLE1BQU47QUFDQSxTQUFRL1csUUFBRCxJQUF5QztBQUM5QyxVQUFNcVgsVUFBVSxHQUFHeUYsRUFBRSxDQUFGQSxLQUFuQixRQUFtQkEsQ0FBbkI7O0FBQ0EsUUFBSSxDQUFKLFlBQWlCO0FBQ2Y7QUFHRjs7QUFBQSxVQUFNQyxNQUFNLEdBQUkvSixLQUFELElBQW1CO0FBQ2hDLFVBQUk7QUFDRixlQUFPZ0ssa0JBQWtCLENBQXpCLEtBQXlCLENBQXpCO0FBQ0EsT0FGRixDQUVFLFVBQVU7QUFDVixjQUFNOWIsR0FBOEIsR0FBRyxVQUF2Qyx3QkFBdUMsQ0FBdkM7QUFHQUEsV0FBRyxDQUFIQTtBQUNBO0FBRUg7QUFWRDs7QUFXQSxVQUFNdUMsTUFBa0QsR0FBeEQ7QUFFQW9MLFVBQU0sQ0FBTkEscUJBQTZCb08sUUFBRCxJQUFzQjtBQUNoRCxZQUFNQyxDQUFDLEdBQUdDLE1BQU0sQ0FBaEIsUUFBZ0IsQ0FBaEI7QUFDQSxZQUFNQyxDQUFDLEdBQUcvRixVQUFVLENBQUM2RixDQUFDLENBQXRCLEdBQW9CLENBQXBCOztBQUNBLFVBQUlFLENBQUMsS0FBTCxXQUFxQjtBQUNuQjNaLGNBQU0sQ0FBTkEsUUFBTSxDQUFOQSxHQUFtQixDQUFDMlosQ0FBQyxDQUFEQSxRQUFELEdBQUNBLENBQUQsR0FDZkEsQ0FBQyxDQUFEQSxlQUFrQjNQLEtBQUQsSUFBV3NQLE1BQU0sQ0FEbkIsS0FDbUIsQ0FBbENLLENBRGUsR0FFZkYsQ0FBQyxDQUFEQSxTQUNBLENBQUNILE1BQU0sQ0FEUEcsQ0FDTyxDQUFQLENBREFBLEdBRUFILE1BQU0sQ0FKVnRaLENBSVUsQ0FKVkE7QUFNSDtBQVZEb0w7QUFXQTtBQTlCRjtBQWdDRCxDOzs7Ozs7Ozs7Ozs7Ozs7dUNDOUJEO0FBQ0E7O0FBQ0EsMEJBQWtDO0FBQ2hDLFNBQU93TyxHQUFHLENBQUhBLGdDQUFQLE1BQU9BLENBQVA7QUFHRjs7QUFBQSwrQkFBdUM7QUFDckMsUUFBTWxLLFFBQVEsR0FBR0gsS0FBSyxDQUFMQSxtQkFBeUJBLEtBQUssQ0FBTEEsU0FBMUMsR0FBMENBLENBQTFDOztBQUNBLGdCQUFjO0FBQ1pBLFNBQUssR0FBR0EsS0FBSyxDQUFMQSxTQUFlLENBQXZCQSxDQUFRQSxDQUFSQTtBQUVGOztBQUFBLFFBQU1FLE1BQU0sR0FBR0YsS0FBSyxDQUFMQSxXQUFmLEtBQWVBLENBQWY7O0FBQ0EsY0FBWTtBQUNWQSxTQUFLLEdBQUdBLEtBQUssQ0FBTEEsTUFBUkEsQ0FBUUEsQ0FBUkE7QUFFRjs7QUFBQSxTQUFPO0FBQUVyUixPQUFHLEVBQUw7QUFBQTtBQUFQO0FBQU8sR0FBUDtBQUdLOztBQUFBLHdDQU9MO0FBQ0EsUUFBTTJiLFFBQVEsR0FBRyxDQUFDQyxlQUFlLENBQWZBLHNCQUFELG9CQUFqQixHQUFpQixDQUFqQjtBQUlBLFFBQU1KLE1BQXNDLEdBQTVDO0FBQ0EsTUFBSUssVUFBVSxHQUFkO0FBQ0EsUUFBTUMsa0JBQWtCLEdBQUdILFFBQVEsQ0FBUkEsSUFDbkJ2RCxPQUFELElBQWE7QUFDaEIsUUFBSUEsT0FBTyxDQUFQQSxtQkFBMkJBLE9BQU8sQ0FBUEEsU0FBL0IsR0FBK0JBLENBQS9CLEVBQXNEO0FBQ3BELFlBQU07QUFBQTtBQUFBO0FBQUE7QUFBQSxVQUE0QjJELGNBQWMsQ0FBQzNELE9BQU8sQ0FBUEEsU0FBaUIsQ0FBbEUsQ0FBaURBLENBQUQsQ0FBaEQ7QUFDQW9ELFlBQU0sQ0FBTkEsR0FBTSxDQUFOQSxHQUFjO0FBQUVRLFdBQUcsRUFBRUgsVUFBUDtBQUFBO0FBQWRMO0FBQWMsT0FBZEE7QUFDQSxhQUFPakssTUFBTSxHQUFJQyxRQUFRLG1CQUFaLFdBQWI7QUFIRixXQUlPO0FBQ0wsYUFBUSxJQUFHeUssV0FBVyxTQUF0QjtBQUVIO0FBVHdCTixVQUEzQixFQUEyQkEsQ0FBM0IsQ0FQQSxDQW1CQTtBQUNBOztBQUNBLFlBQW1DO0FBQ2pDLFFBQUlPLGdCQUFnQixHQUFwQjtBQUNBLFFBQUlDLGtCQUFrQixHQUF0QixFQUZpQyxDQUlqQzs7QUFDQSxVQUFNQyxlQUFlLEdBQUcsTUFBTTtBQUM1QixVQUFJQyxRQUFRLEdBQVo7O0FBRUEsV0FBSyxJQUFJQyxDQUFDLEdBQVYsR0FBZ0JBLENBQUMsR0FBakIsb0JBQXdDQSxDQUF4QyxJQUE2QztBQUMzQ0QsZ0JBQVEsSUFBSXhELE1BQU0sQ0FBTkEsYUFBWndELGdCQUFZeEQsQ0FBWndEO0FBQ0FILHdCQUFnQjs7QUFFaEIsWUFBSUEsZ0JBQWdCLEdBQXBCLEtBQTRCO0FBQzFCQyw0QkFBa0I7QUFDbEJELDBCQUFnQixHQUFoQkE7QUFFSDtBQUNEOztBQUFBO0FBWkY7O0FBZUEsVUFBTUssU0FBc0MsR0FBNUM7QUFFQSxRQUFJQyx1QkFBdUIsR0FBR2IsUUFBUSxDQUFSQSxJQUN0QnZELE9BQUQsSUFBYTtBQUNoQixVQUFJQSxPQUFPLENBQVBBLG1CQUEyQkEsT0FBTyxDQUFQQSxTQUEvQixHQUErQkEsQ0FBL0IsRUFBc0Q7QUFDcEQsY0FBTTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBQTRCMkQsY0FBYyxDQUFDM0QsT0FBTyxDQUFQQSxTQUFpQixDQUFsRSxDQUFpREEsQ0FBRCxDQUFoRCxDQURvRCxDQUVwRDtBQUNBOztBQUNBLFlBQUlxRSxVQUFVLEdBQUd6YyxHQUFHLENBQUhBLGVBQWpCLEVBQWlCQSxDQUFqQjtBQUNBLFlBQUkwYyxVQUFVLEdBQWQsTUFMb0QsQ0FPcEQ7QUFDQTs7QUFDQSxZQUFJRCxVQUFVLENBQVZBLGdCQUEyQkEsVUFBVSxDQUFWQSxTQUEvQixJQUF1RDtBQUNyREMsb0JBQVUsR0FBVkE7QUFFRjs7QUFBQSxZQUFJLENBQUM5QixLQUFLLENBQUMrQixRQUFRLENBQUNGLFVBQVUsQ0FBVkEsVUFBcEIsQ0FBb0JBLENBQUQsQ0FBVCxDQUFWLEVBQStDO0FBQzdDQyxvQkFBVSxHQUFWQTtBQUdGOztBQUFBLHdCQUFnQjtBQUNkRCxvQkFBVSxHQUFHTCxlQUFiSztBQUdGRjs7QUFBQUEsaUJBQVMsQ0FBVEEsVUFBUyxDQUFUQTtBQUNBLGVBQU9oTCxNQUFNLEdBQ1RDLFFBQVEsR0FDTCxVQUFTaUwsVUFESixZQUVMLE9BQU1BLFVBSEEsVUFJUixPQUFNQSxVQUpYO0FBckJGLGFBMEJPO0FBQ0wsZUFBUSxJQUFHUixXQUFXLFNBQXRCO0FBRUg7QUEvQjJCTixZQUE5QixFQUE4QkEsQ0FBOUI7QUFrQ0EsV0FBTztBQUNMUixRQUFFLEVBQUUsV0FBWSxJQUFHVyxrQkFEZCxTQUNELENBREM7QUFBQTtBQUFBO0FBSUxjLGdCQUFVLEVBQUcsSUFBR0osdUJBSmxCO0FBQU8sS0FBUDtBQVFGOztBQUFBLFNBQU87QUFDTHJCLE1BQUUsRUFBRSxXQUFZLElBQUdXLGtCQURkLFNBQ0QsQ0FEQztBQUFQO0FBQU8sR0FBUDtBQUlELEM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BIRDtBQXlRQTs7Ozs7QUFHTyxzQkFFRjtBQUNILE1BQUllLElBQUksR0FBUjtBQUNBO0FBRUEsU0FBUSxDQUFDLEdBQUQsU0FBb0I7QUFDMUIsUUFBSSxDQUFKLE1BQVc7QUFDVEEsVUFBSSxHQUFKQTtBQUNBbkwsWUFBTSxHQUFHa0csRUFBRSxDQUFDLEdBQVpsRyxJQUFXLENBQVhBO0FBRUY7O0FBQUE7QUFMRjtBQVNLOztBQUFBLDZCQUE2QjtBQUNsQyxRQUFNO0FBQUE7QUFBQTtBQUFBO0FBQUEsTUFBK0JoRyxNQUFNLENBQTNDO0FBQ0EsU0FBUSxHQUFFOE0sUUFBUyxLQUFJSSxRQUFTLEdBQUVrRSxJQUFJLEdBQUcsTUFBSCxPQUFnQixFQUF0RDtBQUdLOztBQUFBLGtCQUFrQjtBQUN2QixRQUFNO0FBQUE7QUFBQSxNQUFXcFIsTUFBTSxDQUF2QjtBQUNBLFFBQU15TixNQUFNLEdBQUc0RCxpQkFBZjtBQUNBLFNBQU8xUSxJQUFJLENBQUpBLFVBQWU4TSxNQUFNLENBQTVCLE1BQU85TSxDQUFQO0FBR0s7O0FBQUEsbUNBQXdEO0FBQzdELFNBQU8sNENBRUhtSSxTQUFTLENBQVRBLGVBQXlCQSxTQUFTLENBQWxDQSxRQUZKO0FBS0s7O0FBQUEsd0JBQXdDO0FBQzdDLFNBQU81QixHQUFHLENBQUhBLFlBQWdCQSxHQUFHLENBQTFCO0FBR0s7O0FBQUEsNkNBSWtEO0FBQ3ZELFlBQTJDO0FBQUE7O0FBQ3pDLDBCQUFJb0ssR0FBRyxDQUFQLDhCQUFJQSxlQUFKLGlCQUFvQztBQUNsQyxZQUFNemUsT0FBTyxHQUFJLElBQUcwZSxjQUFjLEtBQWxDO0FBR0EsWUFBTSxVQUFOLE9BQU0sQ0FBTjtBQUVIO0FBQ0QsR0FUdUQsQ0FTdkQ7OztBQUNBLFFBQU1ySyxHQUFHLEdBQUdxRixHQUFHLENBQUhBLE9BQVlBLEdBQUcsQ0FBSEEsT0FBV0EsR0FBRyxDQUFIQSxJQUFuQzs7QUFFQSxNQUFJLENBQUMrRSxHQUFHLENBQVIsaUJBQTBCO0FBQ3hCLFFBQUkvRSxHQUFHLENBQUhBLE9BQVdBLEdBQUcsQ0FBbEIsV0FBOEI7QUFDNUI7QUFDQSxhQUFPO0FBQ0xpRixpQkFBUyxFQUFFLE1BQU1DLG1CQUFtQixDQUFDbEYsR0FBRyxDQUFKLFdBQWdCQSxHQUFHLENBRHpELEdBQ3NDO0FBRC9CLE9BQVA7QUFJRjs7QUFBQTtBQUdGOztBQUFBLFFBQU12UixLQUFLLEdBQUcsTUFBTXNXLEdBQUcsQ0FBSEEsZ0JBQXBCLEdBQW9CQSxDQUFwQjs7QUFFQSxNQUFJcEssR0FBRyxJQUFJd0ssU0FBUyxDQUFwQixHQUFvQixDQUFwQixFQUEyQjtBQUN6QjtBQUdGOztBQUFBLE1BQUksQ0FBSixPQUFZO0FBQ1YsVUFBTTdlLE9BQU8sR0FBSSxJQUFHMGUsY0FBYyxLQUVoQywrREFBOER2VyxLQUZoRTtBQUdBLFVBQU0sVUFBTixPQUFNLENBQU47QUFHRjs7QUFBQSxZQUEyQztBQUN6QyxRQUFJd0csTUFBTSxDQUFOQSw0QkFBbUMsQ0FBQytLLEdBQUcsQ0FBM0MsS0FBaUQ7QUFDL0N6WSxhQUFPLENBQVBBLEtBQ0csR0FBRXlkLGNBQWMsS0FEbkJ6ZDtBQU1IO0FBRUQ7O0FBQUE7QUFHSzs7QUFBQSxNQUFNNmQsYUFBYSxHQUFHLHdHQUF0QixTQUFzQixDQUF0Qjs7O0FBZUEsbUNBQXNEO0FBQzNELFlBQTRDO0FBQzFDLFFBQUl4VyxHQUFHLEtBQUhBLFFBQWdCLGVBQXBCLFVBQTZDO0FBQzNDcUcsWUFBTSxDQUFOQSxrQkFBMEJsTixHQUFELElBQVM7QUFDaEMsWUFBSXFkLGFBQWEsQ0FBYkEsaUJBQStCLENBQW5DLEdBQXVDO0FBQ3JDN2QsaUJBQU8sQ0FBUEEsS0FDRyxxREFBb0RRLEdBRHZEUjtBQUlIO0FBTkQwTjtBQVFIO0FBRUQ7O0FBQUEsU0FBTywwQkFBUCxHQUFPLENBQVA7QUFHSzs7QUFBQSxNQUFNb1EsRUFBRSxHQUFHLHVCQUFYOztBQUNBLE1BQU14SSxFQUFFLEdBQ2J3SSxFQUFFLElBQ0YsT0FBT3ZJLFdBQVcsQ0FBbEIsU0FEQXVJLGNBRUEsT0FBT3ZJLFdBQVcsQ0FBbEIsWUFISzs7Ozs7Ozs7Ozs7OztBQ3hZTSx3QkFBd0IsMENBQTBDLGdEQUFnRCxnQ0FBZ0MsZ0NBQWdDLG1DQUFtQyw0QkFBNEIsK0JBQStCLG9CQUFvQix5QkFBeUIsVUFBVTtBQUNwVixpRDs7Ozs7Ozs7Ozs7QUNEQSxpQkFBaUIsbUJBQU8sQ0FBQyxtRUFBb0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ0E3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFPQTtBQVNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsTUFBTXdJLEtBQUssR0FBRyxDQUFDO0FBQ2JDLFlBRGE7QUFFYkMsa0JBRmE7QUFHYkMsY0FIYTtBQUliQyxvQkFKYTtBQUtiQyxtQkFMYTtBQU1iQyx1QkFOYTtBQU9iQyx3QkFQYTtBQVFiQyx1QkFSYTtBQVNiQywwQkFUYTtBQVViQywwQkFWYTtBQVdiQyxrQkFYYTtBQVliQyxvQkFaYTtBQWFiQztBQWJhLENBQUQsS0FjUjtBQUNKLFFBQU1DLElBQUksR0FBRyxtQkFDWCxxRUFBQyxnREFBRDtBQUFBLDRCQUNFO0FBQUEsaUNBQW9CM1csaURBQXBCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERixlQUVFO0FBQ0UsVUFBSSxFQUFDLGFBRFA7QUFFRSxhQUFPLEVBQUM7QUFGVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQUZGLGVBTUU7QUFBTSxTQUFHLEVBQUMsV0FBVjtBQUFzQixVQUFJLEVBQUcsR0FBRXVDLCtDQUFPO0FBQXRDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBTkYsZUFPRTtBQUFNLGNBQVEsRUFBQyxVQUFmO0FBQTBCLGFBQU8sRUFBRyxnQkFBZXZDLGlEQUFTO0FBQTVEO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUEYsZUFRRTtBQUNFLGNBQVEsRUFBQyxnQkFEWDtBQUVFLGFBQU8sRUFBQztBQUZWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBUkYsZUFZRTtBQUFNLGNBQVEsRUFBQyxTQUFmO0FBQXlCLGFBQU8sRUFBQztBQUFqQztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQVpGLGVBYUU7QUFBTSxjQUFRLEVBQUMsUUFBZjtBQUF3QixhQUFPLEVBQUcsR0FBRXVDLCtDQUFPO0FBQTNDO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBYkYsZUFjRTtBQUFNLGNBQVEsRUFBQyxjQUFmO0FBQThCLGFBQU8sRUFBRyxHQUFFdkMsaURBQVM7QUFBbkQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFkRixlQWdCRTtBQUNFLFNBQUcsRUFBQywrQkFETjtBQUVFLGNBQVEsRUFBQyxVQUZYO0FBR0UsYUFBTyxFQUFHO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFoQkYsZUFxQkU7QUFDRSxTQUFHLEVBQUMsK0JBRE47QUFFRSxjQUFRLEVBQUMscUJBRlg7QUFHRSxhQUFPLEVBQUc7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQXJCRixlQTBCRTtBQUFNLGNBQVEsRUFBQyxlQUFmO0FBQStCLGFBQU8sRUFBQztBQUF2QztBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQTFCRixlQTJCRTtBQUFNLGNBQVEsRUFBQyxXQUFmO0FBQTJCLGFBQU8sRUFBRyxHQUFFMkQsa0RBQVU7QUFBakQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkEzQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUFnQ0E7OztBQUNBLFFBQU1pVCxhQUFhLEdBQUcsTUFBTTtBQUMxQjtBQUFBOztBQUNFO0FBQ0E7QUFBSyxpQkFBUyxFQUFDLDBCQUFmO0FBQTBDLGFBQUssRUFBRTtBQUFFaFosZUFBSyxFQUFFO0FBQVQsU0FBakQ7QUFBQSwrQkFDRTtBQUNFLG1CQUFTLEVBQUMsZUFEWjtBQUVFLGVBQUssRUFBRTtBQUFFQSxpQkFBSyxFQUFFLE1BQVQ7QUFBaUJpRSxrQkFBTSxFQUFFO0FBQXpCLFdBRlQ7QUFBQSxrQ0FLRTtBQUNFLHFCQUFTLEVBQUMsb0JBRFo7QUFFRSxpQkFBSyxFQUFFO0FBQUVqRSxtQkFBSyxFQUFFLE1BQVQ7QUFBaUJpRSxvQkFBTSxFQUFFO0FBQXpCLGFBRlQ7QUFBQSxtQ0FJRSxxRUFBQyxnREFBRDtBQUFNLGtCQUFJLEVBQUcsU0FBUWlVLFVBQVUsQ0FBQ3BjLElBQUssRUFBckM7QUFBQSxxQ0FDRTtBQUNFLHFCQUFLLEVBQUU7QUFDTGlGLGdDQUFjLEVBQUU7QUFEWCxpQkFEVDtBQUFBLHVDQUtFO0FBQUssMkJBQVMsRUFBQyxpQ0FBZjtBQUFBLDBDQUNFO0FBQUssNkJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREYsZUFFRTtBQUNFLDZCQUFTLEVBQUMsYUFEWjtBQUVFLHVCQUFHLEVBQUcsR0FBRXpILDRDQUFJLGVBQWM0ZSxVQUFVLENBQUNwYyxJQUFLLEVBRjVDO0FBR0UsdUJBQUcsRUFBRW9jLFVBQVUsQ0FBQ3pUO0FBSGxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBRkYsZUFPRTtBQUFLLDZCQUFTLEVBQUMsWUFBZjtBQUFBLDJDQUNFO0FBQUEsZ0NBQUt5VCxVQUFVLENBQUN6VDtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFQRixlQVVFO0FBQUssNkJBQVMsRUFBQyxRQUFmO0FBQUEsMkNBQ0U7QUFBQSx3Q0FDTXlULFVBQVUsQ0FBQ2UsUUFBWCxDQUFvQkMsUUFEMUIsUUFDc0MsR0FEdEMsRUFFR0MsNkNBQU0sQ0FBQ2pCLFVBQVUsQ0FBQ2tCLFNBQVosQ0FBTixDQUE2QkMsT0FBN0IsRUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQVZGLGVBZ0JFO0FBQUssNkJBQVMsRUFBQyxXQUFmO0FBQUEsMkNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTEYsZUF3Q0U7QUFDRSxxQkFBUyxFQUFDLG9DQURaO0FBRUUsaUJBQUssRUFBRTtBQUFFclosbUJBQUssRUFBRSxNQUFUO0FBQWlCaUUsb0JBQU0sRUFBRTtBQUF6QixhQUZUO0FBQUEsbUNBSUU7QUFDRSx1QkFBUyxFQUFDLGVBRFo7QUFFRSxtQkFBSyxFQUFFO0FBQUVqRSxxQkFBSyxFQUFFLE1BQVQ7QUFBaUJpRSxzQkFBTSxFQUFFO0FBQXpCLGVBRlQ7QUFBQSxzQ0FLRTtBQUNFLHlCQUFTLEVBQUMscUJBRFo7QUFFRSxxQkFBSyxFQUFFO0FBQUVqRSx1QkFBSyxFQUFFLE1BQVQ7QUFBaUJpRSx3QkFBTSxFQUFFO0FBQXpCLGlCQUZUO0FBQUEsdUNBSUUscUVBQUMsZ0RBQUQ7QUFBTSxzQkFBSSxFQUFHLFNBQVFrVSxnQkFBZ0IsQ0FBQ3JjLElBQUssRUFBM0M7QUFBQSx5Q0FDRTtBQUNFLHlCQUFLLEVBQUU7QUFDTGlGLG9DQUFjLEVBQUU7QUFEWCxxQkFEVDtBQUFBLDJDQUtFO0FBQUssK0JBQVMsRUFBQyxzQ0FBZjtBQUFBLDhDQUNFO0FBQUssaUNBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBREYsZUFFRTtBQUNFLGlDQUFTLEVBQUMsYUFEWjtBQUVFLDJCQUFHLEVBQUcsR0FBRXpILDRDQUFJLGVBQWM2ZSxnQkFBZ0IsQ0FBQ3JjLElBQUssRUFGbEQ7QUFHRSwyQkFBRyxFQUFFcWMsZ0JBQWdCLENBQUMxVDtBQUh4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQUZGLGVBT0U7QUFBSyxpQ0FBUyxFQUFDLGlDQUFmO0FBQUEsK0NBQ0U7QUFBQSxvQ0FBSzBULGdCQUFnQixDQUFDMVQ7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBUEYsZUFVRTtBQUFLLGlDQUFTLEVBQUMsUUFBZjtBQUFBLCtDQUNFO0FBQUEsNENBQ00wVCxnQkFBZ0IsQ0FBQ2MsUUFBakIsQ0FBMEJDLFFBRGhDLFFBQzRDLEdBRDVDLEVBRUdDLDZDQUFNLENBQUNoQixnQkFBZ0IsQ0FBQ2lCLFNBQWxCLENBQU4sQ0FBbUNDLE9BQW5DLEVBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FWRixlQWdCRTtBQUFLLGlDQUFTLEVBQUMsV0FBZjtBQUFBLCtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUxGLGVBd0NFO0FBQ0UseUJBQVMsRUFBQyw0Q0FEWjtBQUVFLHFCQUFLLEVBQUU7QUFBRXJaLHVCQUFLLEVBQUUsTUFBVDtBQUFpQmlFLHdCQUFNLEVBQUU7QUFBekIsaUJBRlQ7QUFBQSx1Q0FJRTtBQUFLLDJCQUFTLEVBQUMsZUFBZjtBQUErQix1QkFBSyxFQUFFO0FBQUVqRSx5QkFBSyxFQUFFO0FBQVQsbUJBQXRDO0FBQUEsMENBRUU7QUFBSyw2QkFBUyxFQUFDLG9CQUFmO0FBQW9DLHlCQUFLLEVBQUU7QUFBRUEsMkJBQUssRUFBRTtBQUFULHFCQUEzQztBQUFBLDJDQUNFLHFFQUFDLGdEQUFEO0FBQU0sMEJBQUksRUFBRyxZQUFXb1ksWUFBWSxDQUFDdGMsSUFBSyxFQUExQztBQUFBLDZDQUNFO0FBQ0UsNkJBQUssRUFBRTtBQUNMaUYsd0NBQWMsRUFBRTtBQURYLHlCQURUO0FBQUEsK0NBS0U7QUFBSyxtQ0FBUyxFQUFDLDhDQUFmO0FBQUEsa0RBQ0U7QUFBSyxxQ0FBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FERixlQUVFO0FBQ0UscUNBQVMsRUFBQyxhQURaO0FBRUUsK0JBQUcsRUFBRyxHQUFFekgsNENBQUksa0JBQWlCOGUsWUFBWSxDQUFDdGMsSUFBSyxFQUZqRDtBQUdFLCtCQUFHLEVBQUVzYyxZQUFZLENBQUMzVDtBQUhwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQUZGLGVBT0U7QUFBSyxxQ0FBUyxFQUFDLHlDQUFmO0FBQUEsbURBQ0U7QUFBQSx3Q0FBSzJULFlBQVksQ0FBQzNUO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVDQVBGLGVBVUU7QUFBSyxxQ0FBUyxFQUFDLFFBQWY7QUFBQSxtREFDRTtBQUFBLGdEQUNNMlQsWUFBWSxDQUFDYSxRQUFiLENBQXNCQyxRQUQ1QixRQUN3QyxHQUR4QyxFQUVHQyw2Q0FBTSxDQUFDZixZQUFZLENBQUNnQixTQUFkLENBQU4sQ0FBK0JDLE9BQS9CLEVBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FWRixlQWdCRTtBQUFLLHFDQUFTLEVBQUMsV0FBZjtBQUFBLG1EQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQUZGLGVBa0NFO0FBQUssNkJBQVMsRUFBQyxvQkFBZjtBQUFvQyx5QkFBSyxFQUFFO0FBQUVyWiwyQkFBSyxFQUFFO0FBQVQscUJBQTNDO0FBQUEsMkNBQ0UscUVBQUMsZ0RBQUQ7QUFBTSwwQkFBSSxFQUFHLFlBQVdxWSxrQkFBa0IsQ0FBQ3ZjLElBQUssRUFBaEQ7QUFBQSw2Q0FDRTtBQUNFLDZCQUFLLEVBQUU7QUFDTGlGLHdDQUFjLEVBQUU7QUFEWCx5QkFEVDtBQUFBLCtDQUtFO0FBQUssbUNBQVMsRUFBQywrQ0FBZjtBQUFBLGtEQUNFO0FBQUsscUNBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUNBREYsZUFFRTtBQUNFLHFDQUFTLEVBQUMsYUFEWjtBQUVFLCtCQUFHLEVBQUcsR0FBRXpILDRDQUFJLGtCQUFpQitlLGtCQUFrQixDQUFDdmMsSUFBSyxFQUZ2RDtBQUdFLCtCQUFHLEVBQUV1YyxrQkFBa0IsQ0FBQzVUO0FBSDFCO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUNBRkYsZUFPRTtBQUFLLHFDQUFTLEVBQUMsMENBQWY7QUFBQSxtREFDRTtBQUFBLHdDQUFLNFQsa0JBQWtCLENBQUM1VDtBQUF4QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FQRixlQVVFO0FBQUsscUNBQVMsRUFBQyxRQUFmO0FBQUEsbURBQ0U7QUFBQSxnREFDTTRULGtCQUFrQixDQUFDWSxRQUFuQixDQUE0QkMsUUFEbEMsUUFDOEMsR0FEOUMsRUFFR0MsNkNBQU0sQ0FBQ2Qsa0JBQWtCLENBQUNlLFNBQXBCLENBQU4sQ0FBcUNDLE9BQXJDLEVBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FWRixlQWdCRTtBQUFLLHFDQUFTLEVBQUMsV0FBZjtBQUFBLG1EQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1Q0FoQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBTEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQWxDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQXhDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQXhDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBa0tBOztBQXBLRjtBQXNLRCxHQXZLRDtBQXlLQTs7O0FBQ0EsUUFBTUMseUJBQXlCLEdBQUcsTUFBTTtBQUN0QztBQUFBOztBQUNFO0FBQ0E7QUFBSyxpQkFBUyxFQUFDLDBCQUFmO0FBQTBDLGFBQUssRUFBRTtBQUFFdFosZUFBSyxFQUFFO0FBQVQsU0FBakQ7QUFBQSwrQkFDRTtBQUNFLG1CQUFTLEVBQUMsZUFEWjtBQUVFLGVBQUssRUFBRTtBQUFFQSxpQkFBSyxFQUFFLE1BQVQ7QUFBaUJpRSxrQkFBTSxFQUFFO0FBQXpCLFdBRlQ7QUFBQSxrQ0FLRTtBQUNFLHFCQUFTLEVBQUMsb0JBRFo7QUFFRSxpQkFBSyxFQUFFO0FBQUVqRSxtQkFBSyxFQUFFLE1BQVQ7QUFBaUJpRSxvQkFBTSxFQUFFO0FBQXpCLGFBRlQ7QUFBQSxtQ0FJRSxxRUFBQyxnREFBRDtBQUFNLGtCQUFJLEVBQUcsU0FBUWlVLFVBQVUsQ0FBQ3BjLElBQUssRUFBckM7QUFBQSxxQ0FDRTtBQUNFLHFCQUFLLEVBQUU7QUFDTGlGLGdDQUFjLEVBQUU7QUFEWCxpQkFEVDtBQUFBLHVDQUtFO0FBQUssMkJBQVMsRUFBQyxpQ0FBZjtBQUFBLDBDQUNFO0FBQUssNkJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBREYsZUFFRTtBQUNFLDZCQUFTLEVBQUMsYUFEWjtBQUVFLHVCQUFHLEVBQUcsR0FBRXpILDRDQUFJLGVBQWM0ZSxVQUFVLENBQUNwYyxJQUFLLEVBRjVDO0FBR0UsdUJBQUcsRUFBRW9jLFVBQVUsQ0FBQ3pUO0FBSGxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBRkYsZUFPRTtBQUFLLDZCQUFTLEVBQUMsWUFBZjtBQUFBLDJDQUNFO0FBQUEsZ0NBQUt5VCxVQUFVLENBQUN6VDtBQUFoQjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwrQkFQRixlQVVFO0FBQUssNkJBQVMsRUFBQyxRQUFmO0FBQUEsMkNBQ0U7QUFBQSx3Q0FDTXlULFVBQVUsQ0FBQ2UsUUFBWCxDQUFvQkMsUUFEMUIsUUFDc0MsR0FEdEMsRUFFR0MsNkNBQU0sQ0FBQ2pCLFVBQVUsQ0FBQ2tCLFNBQVosQ0FBTixDQUE2QkMsT0FBN0IsRUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQVZGLGVBZ0JFO0FBQUssNkJBQVMsRUFBQyxXQUFmO0FBQUEsMkNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQWhCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBTEYsZUF3Q0U7QUFDRSxxQkFBUyxFQUFDLG9CQURaO0FBRUUsaUJBQUssRUFBRTtBQUFFclosbUJBQUssRUFBRSxNQUFUO0FBQWlCaUUsb0JBQU0sRUFBRTtBQUF6QixhQUZUO0FBQUEsbUNBSUU7QUFDRSx1QkFBUyxFQUFDLGVBRFo7QUFFRSxtQkFBSyxFQUFFO0FBQUVqRSxxQkFBSyxFQUFFLE1BQVQ7QUFBaUJpRSxzQkFBTSxFQUFFO0FBQXpCLGVBRlQ7QUFBQSxxQ0FJRTtBQUNFLHlCQUFTLEVBQUMsbURBRFo7QUFFRSxxQkFBSyxFQUFFO0FBQUVqRSx1QkFBSyxFQUFFLE1BQVQ7QUFBaUJpRSx3QkFBTSxFQUFFO0FBQXpCLGlCQUZUO0FBQUEsd0NBS0U7QUFBSywyQkFBUyxFQUFDLG9EQUFmO0FBQUEseUNBQ0UscUVBQUMsZ0RBQUQ7QUFBTSx3QkFBSSxFQUFHLFNBQVFrVSxnQkFBZ0IsQ0FBQ3JjLElBQUssRUFBM0M7QUFBQSwyQ0FDRTtBQUNFLDJCQUFLLEVBQUU7QUFDTGlGLHNDQUFjLEVBQUU7QUFEWCx1QkFEVDtBQUFBLDhDQUtFO0FBQUssaUNBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBTEYsZUFNRTtBQUNFLGlDQUFTLEVBQUMsYUFEWjtBQUVFLDJCQUFHLEVBQUcsR0FBRXpILDRDQUFJLGVBQWM2ZSxnQkFBZ0IsQ0FBQ3JjLElBQUssRUFGbEQ7QUFHRSwyQkFBRyxFQUFFcWMsZ0JBQWdCLENBQUMxVDtBQUh4QjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQU5GLGVBV0U7QUFBSyxpQ0FBUyxFQUFDLGdEQUFmO0FBQUEsK0NBQ0U7QUFBQSxvQ0FBSzBULGdCQUFnQixDQUFDMVQ7QUFBdEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBWEYsZUFjRTtBQUFLLGlDQUFTLEVBQUMsUUFBZjtBQUFBLCtDQUNFO0FBQUEscUNBQ0csR0FESCxTQUVNMFQsZ0JBQWdCLENBQUNjLFFBQWpCLENBQTBCQyxRQUZoQyxRQUU0QyxHQUY1QyxFQUdHQyw2Q0FBTSxDQUFDaEIsZ0JBQWdCLENBQUNpQixTQUFsQixDQUFOLENBQW1DQyxPQUFuQyxFQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBZEYsZUFxQkU7QUFBSyxpQ0FBUyxFQUFDLFdBQWY7QUFBQSwrQ0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBckJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDZCQUxGLGVBb0NFO0FBQUssMkJBQVMsRUFBQyx1REFBZjtBQUFBLHlDQUNFLHFFQUFDLGdEQUFEO0FBQU0sd0JBQUksRUFBRyxZQUFXakIsWUFBWSxDQUFDdGMsSUFBSyxFQUExQztBQUFBLDJDQUNFO0FBQ0UsMkJBQUssRUFBRTtBQUNMaUYsc0NBQWMsRUFBRTtBQURYLHVCQURUO0FBQUEsOENBS0U7QUFBSyxpQ0FBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FMRixlQU1FO0FBQ0UsaUNBQVMsRUFBQyxhQURaO0FBRUUsMkJBQUcsRUFBRyxHQUFFekgsNENBQUksa0JBQWlCOGUsWUFBWSxDQUFDdGMsSUFBSyxFQUZqRDtBQUdFLDJCQUFHLEVBQUVzYyxZQUFZLENBQUMzVDtBQUhwQjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQU5GLGVBV0U7QUFBSyxpQ0FBUyxFQUFDLGtEQUFmO0FBQUEsK0NBQ0U7QUFBQSxvQ0FBSzJULFlBQVksQ0FBQzNUO0FBQWxCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQVhGLGVBY0U7QUFBSyxpQ0FBUyxFQUFDLFFBQWY7QUFBQSwrQ0FDRTtBQUFBLDRDQUNNMlQsWUFBWSxDQUFDYSxRQUFiLENBQXNCQyxRQUQ1QixRQUN3QyxHQUR4QyxFQUVHQyw2Q0FBTSxDQUFDZixZQUFZLENBQUNnQixTQUFkLENBQU4sQ0FBK0JDLE9BQS9CLEVBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FkRixlQW9CRTtBQUFLLGlDQUFTLEVBQUMsV0FBZjtBQUFBLCtDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBcENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFKRjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQXhDRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBd0hBOztBQTFIRjtBQTRIRCxHQTdIRDtBQStIQTs7O0FBQ0EsUUFBTUUsb0JBQW9CLEdBQUcsTUFBTTtBQUNqQztBQUFBOztBQUNFO0FBQ0E7QUFBSyxpQkFBUyxFQUFDLG1DQUFmO0FBQUEsZ0NBRUU7QUFBSyxtQkFBUyxFQUFDLHdCQUFmO0FBQUEsaUNBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxnQkFBSSxFQUFHLFlBQVduQixZQUFZLENBQUN0YyxJQUFLLEVBQTFDO0FBQUEsbUNBQ0U7QUFDRSxtQkFBSyxFQUFFO0FBQ0xpRiw4QkFBYyxFQUFFO0FBRFgsZUFEVDtBQUFBLHNDQUtFO0FBQUsseUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBTEYsZUFNRTtBQUNFLHlCQUFTLEVBQUMsMEJBRFo7QUFFRSxtQkFBRyxFQUFHLEdBQUV6SCw0Q0FBSSxrQkFBaUI4ZSxZQUFZLENBQUN0YyxJQUFLLEVBRmpEO0FBR0UsbUJBQUcsRUFBRXNjLFlBQVksQ0FBQzNUO0FBSHBCO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBTkYsZUFXRTtBQUFLLHlCQUFTLEVBQUMsb0NBQWY7QUFBQSx1Q0FDRTtBQUFBLDRCQUFLMlQsWUFBWSxDQUFDM1Q7QUFBbEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBWEYsZUFjRTtBQUFLLHlCQUFTLEVBQUMsUUFBZjtBQUFBLHVDQUNFO0FBQUEsb0NBQ00yVCxZQUFZLENBQUNhLFFBQWIsQ0FBc0JDLFFBRDVCLFFBQ3dDLEdBRHhDLEVBRUdDLDZDQUFNLENBQUNmLFlBQVksQ0FBQ2dCLFNBQWQsQ0FBTixDQUErQkMsT0FBL0IsRUFGSDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQWRGLGVBb0JFO0FBQUsseUJBQVMsRUFBQyxXQUFmO0FBQUEsdUNBQ0U7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQXBCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFGRixlQWdDRTtBQUFLLG1CQUFTLEVBQUMsd0JBQWY7QUFBQSxpQ0FDRSxxRUFBQyxnREFBRDtBQUFNLGdCQUFJLEVBQUcsU0FBUW5CLFVBQVUsQ0FBQ3BjLElBQUssRUFBckM7QUFBQSxtQ0FDRTtBQUNFLG1CQUFLLEVBQUU7QUFDTGlGLDhCQUFjLEVBQUU7QUFEWCxlQURUO0FBQUEsc0NBS0U7QUFBSyx5QkFBUyxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFMRixlQU1FO0FBQ0UseUJBQVMsRUFBQywwQkFEWjtBQUVFLG1CQUFHLEVBQUcsR0FBRXpILDRDQUFJLGVBQWM0ZSxVQUFVLENBQUNwYyxJQUFLLEVBRjVDO0FBR0UsbUJBQUcsRUFBRW9jLFVBQVUsQ0FBQ3pUO0FBSGxCO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBTkYsZUFXRTtBQUFLLHlCQUFTLEVBQUMsb0NBQWY7QUFBQSx1Q0FDRTtBQUFBLDRCQUFLeVQsVUFBVSxDQUFDelQ7QUFBaEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBWEYsZUFjRTtBQUFLLHlCQUFTLEVBQUMsUUFBZjtBQUFBLHVDQUNFO0FBQUEsb0NBQ015VCxVQUFVLENBQUNlLFFBQVgsQ0FBb0JDLFFBRDFCLFFBQ3NDLEdBRHRDLEVBRUdDLDZDQUFNLENBQUNqQixVQUFVLENBQUNrQixTQUFaLENBQU4sQ0FBNkJDLE9BQTdCLEVBRkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFkRixlQW9CRTtBQUFLLHlCQUFTLEVBQUMsV0FBZjtBQUFBLHVDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFwQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBaENGLGVBOERFO0FBQUssbUJBQVMsRUFBQyx3QkFBZjtBQUFBLGlDQUNFLHFFQUFDLGdEQUFEO0FBQU0sZ0JBQUksRUFBRyxZQUFXaEIsa0JBQWtCLENBQUN2YyxJQUFLLEVBQWhEO0FBQUEsbUNBQ0U7QUFDRSxtQkFBSyxFQUFFO0FBQ0xpRiw4QkFBYyxFQUFFO0FBRFgsZUFEVDtBQUFBLHNDQUtFO0FBQUsseUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBTEYsZUFNRTtBQUNFLHlCQUFTLEVBQUMsMEJBRFo7QUFFRSxtQkFBRyxFQUFHLEdBQUV6SCw0Q0FBSSxrQkFBaUIrZSxrQkFBa0IsQ0FBQ3ZjLElBQUssRUFGdkQ7QUFHRSxtQkFBRyxFQUFFdWMsa0JBQWtCLENBQUM1VDtBQUgxQjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQU5GLGVBV0U7QUFBSyx5QkFBUyxFQUFDLG9DQUFmO0FBQUEsdUNBQ0U7QUFBQSw0QkFBSzRULGtCQUFrQixDQUFDNVQ7QUFBeEI7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBWEYsZUFjRTtBQUFLLHlCQUFTLEVBQUMsUUFBZjtBQUFBLHVDQUNFO0FBQUEsb0NBQ000VCxrQkFBa0IsQ0FBQ1ksUUFBbkIsQ0FBNEJDLFFBRGxDLFFBQzhDLEdBRDlDLEVBRUdDLDZDQUFNLENBQUNkLGtCQUFrQixDQUFDZSxTQUFwQixDQUFOLENBQXFDQyxPQUFyQyxFQUZIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBZEYsZUFvQkU7QUFBSyx5QkFBUyxFQUFDLFdBQWY7QUFBQSx1Q0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBcEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQTlERixlQTRGRTtBQUFLLG1CQUFTLEVBQUMsd0JBQWY7QUFBQSxpQ0FDRSxxRUFBQyxnREFBRDtBQUFNLGdCQUFJLEVBQUcsU0FBUWxCLGdCQUFnQixDQUFDcmMsSUFBSyxFQUEzQztBQUFBLG1DQUNFO0FBQ0UsbUJBQUssRUFBRTtBQUNMaUYsOEJBQWMsRUFBRTtBQURYLGVBRFQ7QUFBQSxzQ0FLRTtBQUFLLHlCQUFTLEVBQUM7QUFBZjtBQUFBO0FBQUE7QUFBQTtBQUFBLDJCQUxGLGVBTUU7QUFDRSx5QkFBUyxFQUFDLDBCQURaO0FBRUUsbUJBQUcsRUFBRyxHQUFFekgsNENBQUksZUFBYzZlLGdCQUFnQixDQUFDcmMsSUFBSyxFQUZsRDtBQUdFLG1CQUFHLEVBQUVxYyxnQkFBZ0IsQ0FBQzFUO0FBSHhCO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBTkYsZUFXRTtBQUFLLHlCQUFTLEVBQUMsb0NBQWY7QUFBQSx1Q0FDRTtBQUFBLDRCQUFLMFQsZ0JBQWdCLENBQUMxVDtBQUF0QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFYRixlQWNFO0FBQUsseUJBQVMsRUFBQyxRQUFmO0FBQUEsdUNBQ0U7QUFBQSw2QkFDRyxHQURILFNBRU0wVCxnQkFBZ0IsQ0FBQ2MsUUFBakIsQ0FBMEJDLFFBRmhDLFFBRTRDLEdBRjVDLEVBR0dDLDZDQUFNLENBQUNoQixnQkFBZ0IsQ0FBQ2lCLFNBQWxCLENBQU4sQ0FBbUNDLE9BQW5DLEVBSEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFkRixlQXFCRTtBQUFLLHlCQUFTLEVBQUMsV0FBZjtBQUFBLHVDQUNFO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFyQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBNUZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQTJIQTs7QUE3SEY7QUErSEQsR0FoSUQ7O0FBa0lBLFFBQU1HLFNBQVMsR0FBRyxFQUFsQjtBQUNBLFFBQU1DLFFBQVEsR0FBRyxFQUFqQjtBQUNBLFFBQU07QUFBQSxPQUFDL2IsS0FBRDtBQUFBLE9BQVFnYztBQUFSLE1BQW9CMVgsc0RBQVEsQ0FBQ3dYLFNBQUQsQ0FBbEM7QUFDQSxRQUFNO0FBQUEsT0FBQy9iLElBQUQ7QUFBQSxPQUFPa2M7QUFBUCxNQUFrQjNYLHNEQUFRLENBQUN5WCxRQUFELENBQWhDO0FBQ0EsUUFBTTtBQUFBLE9BQUNHLFFBQUQ7QUFBQSxPQUFXQztBQUFYLE1BQTBCN1gsc0RBQVEsQ0FBQ3lXLHFCQUFxQixDQUFDcUIsTUFBdkIsQ0FBeEM7QUFDQSxRQUFNO0FBQUEsT0FBQ0MsVUFBRDtBQUFBLE9BQWFDO0FBQWIsTUFBOEJoWSxzREFBUSxDQUFDLEVBQUQsQ0FBNUM7O0FBRUEsUUFBTWlZLFFBQVEsR0FBRyxNQUFNO0FBQ3JCLFFBQUlDLE1BQU0sR0FBR3pjLElBQUksR0FBR0MsS0FBcEI7QUFDQUYsZ0dBQStCLENBQUNDLElBQUQsRUFBT0MsS0FBUCxDQUEvQixDQUE2QzVELElBQTdDLENBQW1EaUIsSUFBRCxJQUFVO0FBQzFELFVBQUlBLElBQUksQ0FBQzRWLEtBQVQsRUFBZ0I7QUFDZHpXLGVBQU8sQ0FBQ0MsR0FBUixDQUFZWSxJQUFJLENBQUM0VixLQUFqQjtBQUNELE9BRkQsTUFFTztBQUNMcUoscUJBQWEsQ0FBQyxDQUFDLEdBQUdELFVBQUosRUFBZ0IsR0FBR2hmLElBQW5CLENBQUQsQ0FBYjtBQUNBOGUsbUJBQVcsQ0FBQzllLElBQUksQ0FBQytlLE1BQU4sQ0FBWDtBQUNBSCxlQUFPLENBQUNPLE1BQUQsQ0FBUDtBQUNEO0FBQ0YsS0FSRDtBQVNELEdBWEQ7O0FBYUEsUUFBTUMsY0FBYyxHQUFHLE1BQU07QUFDM0Isd0JBQ0U7QUFBSyxlQUFTLEVBQUMsV0FBZjtBQUEyQixXQUFLLEVBQUU7QUFBRWxhLGlCQUFTLEVBQUUsUUFBYjtBQUF1QkQsYUFBSyxFQUFFO0FBQTlCLE9BQWxDO0FBQUEsZ0JBQ0c0WixRQUFRLEdBQUcsQ0FBWCxJQUFnQkEsUUFBUSxJQUFJbGMsS0FBNUIsaUJBQ0M7QUFBSyxlQUFPLEVBQUV1YyxRQUFkO0FBQXdCLGlCQUFTLEVBQUMsa0JBQWxDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRko7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQVNELEdBVkQ7O0FBWUEsUUFBTUcsa0JBQWtCLEdBQUcsTUFBTTtBQUMvQixXQUFPeEIsZ0JBQWdCLENBQUN5QixHQUFqQixDQUFxQixDQUFDcmUsSUFBRCxFQUFPZ2IsQ0FBUCxrQkFDMUI7QUFBQSw2QkFDRTtBQUFhLGlCQUFTLEVBQUMseUJBQXZCO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLHFCQUFmO0FBQUEsaUNBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxnQkFBSSxFQUFHLFlBQVdoYixJQUFJLENBQUNGLElBQUssRUFBbEM7QUFBQSxtQ0FDRTtBQUFHLG1CQUFLLEVBQUU7QUFBRWlGLDhCQUFjLEVBQUUsTUFBbEI7QUFBMEJmLHFCQUFLLEVBQUU7QUFBakMsZUFBVjtBQUFBLHFDQUNFO0FBQ0UseUJBQVMsRUFBQyxlQURaO0FBRUUsbUJBQUcsRUFBRyxHQUFFMUcsNENBQUksa0JBQWlCMEMsSUFBSSxDQUFDRixJQUFLLEVBRnpDO0FBR0UsbUJBQUcsRUFBRUUsSUFBSSxDQUFDeUk7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBWUU7QUFDRSxtQkFBUyxFQUFDLHVCQURaO0FBRUUsZUFBSyxFQUFFO0FBQUV2RSxtQkFBTyxFQUFFLE1BQVg7QUFBbUJDLHlCQUFhLEVBQUU7QUFBbEMsV0FGVDtBQUFBLGtDQUlFO0FBQUsscUJBQVMsRUFBQywyQkFBZjtBQUFBLG1DQUNFLHFFQUFDLGdEQUFEO0FBQU0sa0JBQUksRUFBRyxZQUFXbkUsSUFBSSxDQUFDRixJQUFLLEVBQWxDO0FBQUEscUNBQ0U7QUFBRyxxQkFBSyxFQUFFO0FBQUVpRixnQ0FBYyxFQUFFLE1BQWxCO0FBQTBCZix1QkFBSyxFQUFFO0FBQWpDLGlCQUFWO0FBQUEsdUNBQ0U7QUFBQSw0QkFBS2hFLElBQUksQ0FBQ3lJO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKRixlQVlFO0FBQUsscUJBQVMsRUFBQywwQkFBZjtBQUFBLG1DQUNFO0FBQUEseUJBQ0csR0FESCxFQUVHMFUsNkNBQU0sQ0FBQ25kLElBQUksQ0FBQ29kLFNBQU4sQ0FBTixDQUF1QkMsT0FBdkIsRUFGSCxZQUUyQ3JkLElBQUksQ0FBQ2lkLFFBQUwsQ0FBY0MsUUFGekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBWkY7QUFBQSxTQUFVbEMsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsT0FBVUEsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURLLENBQVA7QUFvQ0QsR0FyQ0Q7O0FBdUNBLFFBQU1zRCxrQkFBa0IsR0FBRyxNQUFNO0FBQy9CLFdBQU94QixnQkFBZ0IsQ0FBQ3VCLEdBQWpCLENBQXFCLENBQUNsRSxDQUFELEVBQUlhLENBQUosa0JBQzFCO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLHFCQUFmO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLCtCQUFmO0FBQUEsaUNBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxnQkFBSSxFQUFHLGlCQUFnQmIsQ0FBQyxDQUFDcmEsSUFBSyxFQUFwQztBQUFBLG1DQUNFO0FBQUEscUNBQ0U7QUFBSyxtQkFBRyxFQUFHLEdBQUV4Qyw0Q0FBSSxpQkFBZ0I2YyxDQUFDLENBQUNyYSxJQUFLLEVBQXhDO0FBQTJDLG1CQUFHLEVBQUcsR0FBRXFhLENBQUMsQ0FBQzFSLEtBQU07QUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQVFFO0FBQUssbUJBQVMsRUFBQyxzQkFBZjtBQUFBLGlDQUNFLHFFQUFDLGdEQUFEO0FBQU0sZ0JBQUksRUFBRyxpQkFBZ0IwUixDQUFDLENBQUNyYSxJQUFLLEVBQXBDO0FBQUEsbUNBQ0U7QUFBQSxxQ0FDRTtBQUFBLDBCQUFLcWEsQ0FBQyxDQUFDMVI7QUFBUDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLE9BQVV1UyxDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREssQ0FBUDtBQW9CRCxHQXJCRDs7QUF1QkEsUUFBTXVELGVBQWUsR0FBRyxNQUFNO0FBQzVCLHdCQUNFO0FBQUssZUFBUyxFQUFDLDBCQUFmO0FBQTBDLFdBQUssRUFBRTtBQUFFdmEsYUFBSyxFQUFFO0FBQVQsT0FBakQ7QUFBQSw4QkFDRTtBQUNFLGlCQUFTLEVBQUMsZUFEWjtBQUVFLGFBQUssRUFBRTtBQUFFQSxlQUFLLEVBQUUsTUFBVDtBQUFpQmlFLGdCQUFNLEVBQUU7QUFBekIsU0FGVDtBQUFBLCtCQUlFLHFFQUFDLGdEQUFEO0FBQU0sY0FBSSxFQUFHLFlBQVdxVSxpQkFBaUIsQ0FBQ3hjLElBQUssRUFBL0M7QUFBQSxpQ0FDRTtBQUNFLGlCQUFLLEVBQUU7QUFDTGlGLDRCQUFjLEVBQUUsTUFEWDtBQUVMZixtQkFBSyxFQUFFO0FBRkYsYUFEVDtBQUFBLG1DQU1FO0FBQUssdUJBQVMsRUFBQyx5QkFBZjtBQUFBLHNDQUNFO0FBQUsseUJBQVMsRUFBQztBQUFmO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBREYsZUFFRTtBQUNFLHlCQUFTLEVBQUMsYUFEWjtBQUVFLG1CQUFHLEVBQUcsR0FBRTFHLDRDQUFJLGtCQUFpQmdmLGlCQUFpQixDQUFDeGMsSUFBSyxFQUZ0RDtBQUdFLG1CQUFHLEVBQUV3YyxpQkFBaUIsQ0FBQzdUO0FBSHpCO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBRkYsZUFPRTtBQUFLLHlCQUFTLEVBQUMscUJBQWY7QUFBQSx1Q0FDRTtBQUFBLDRCQUFLNlQsaUJBQWlCLENBQUM3VDtBQUF2QjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSwyQkFQRixlQVVFO0FBQUsseUJBQVMsRUFBQyxRQUFmO0FBQUEsdUNBQ0U7QUFBQSw2QkFDRyxHQURILFNBRU02VCxpQkFBaUIsQ0FBQ1csUUFBbEIsQ0FBMkJDLFFBRmpDLFFBRTZDLEdBRjdDLEVBR0dDLDZDQUFNLENBQUNiLGlCQUFpQixDQUFDYyxTQUFuQixDQUFOLENBQW9DQyxPQUFwQyxFQUhIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBVkYsZUFpQkU7QUFBSyx5QkFBUyxFQUFDLFdBQWY7QUFBQSx1Q0FDRTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsMkJBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQU5GO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBSkY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQW9DRTtBQUNFLGlCQUFTLEVBQUMsb0JBRFo7QUFFRSxhQUFLLEVBQUU7QUFBRXJaLGVBQUssRUFBRSxNQUFUO0FBQWlCaUUsZ0JBQU0sRUFBRTtBQUF6QixTQUZUO0FBQUEsZ0NBSUU7QUFBSyxtQkFBUyxFQUFDLFVBQWY7QUFBQSxvQkFBMkJ1VyxnQ0FBZ0M7QUFBM0Q7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFKRixlQUtFO0FBQUssbUJBQVMsRUFBQyw0Q0FBZjtBQUFBLG9CQUNHQyxpQ0FBaUM7QUFEcEM7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFMRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBcENGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFERjtBQWdERCxHQWpERDs7QUFtREEsUUFBTUQsZ0NBQWdDLEdBQUcsTUFBTTtBQUM3QyxXQUFPOUIsd0JBQXdCLENBQUMyQixHQUF6QixDQUE2QixDQUFDcmUsSUFBRCxFQUFPZ2IsQ0FBUCxrQkFDbEM7QUFBQSw2QkFDRTtBQUFhLGlCQUFTLEVBQUMseUJBQXZCO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLHFCQUFmO0FBQUEsaUNBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxnQkFBSSxFQUFHLFlBQVdoYixJQUFJLENBQUNGLElBQUssRUFBbEM7QUFBQSxtQ0FDRTtBQUFHLG1CQUFLLEVBQUU7QUFBRWlGLDhCQUFjLEVBQUUsTUFBbEI7QUFBMEJmLHFCQUFLLEVBQUU7QUFBakMsZUFBVjtBQUFBLHFDQUNFO0FBQ0UseUJBQVMsRUFBQyxlQURaO0FBRUUsbUJBQUcsRUFBRyxHQUFFMUcsNENBQUksa0JBQWlCMEMsSUFBSSxDQUFDRixJQUFLLEVBRnpDO0FBR0UsbUJBQUcsRUFBRUUsSUFBSSxDQUFDeUk7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBWUU7QUFDRSxtQkFBUyxFQUFDLHVCQURaO0FBRUUsZUFBSyxFQUFFO0FBQUV2RSxtQkFBTyxFQUFFLE1BQVg7QUFBbUJDLHlCQUFhLEVBQUU7QUFBbEMsV0FGVDtBQUFBLGtDQUlFO0FBQUsscUJBQVMsRUFBQywyQkFBZjtBQUFBLG1DQUNFLHFFQUFDLGdEQUFEO0FBQU0sa0JBQUksRUFBRyxZQUFXbkUsSUFBSSxDQUFDRixJQUFLLEVBQWxDO0FBQUEscUNBQ0U7QUFBRyxxQkFBSyxFQUFFO0FBQUVpRixnQ0FBYyxFQUFFLE1BQWxCO0FBQTBCZix1QkFBSyxFQUFFO0FBQWpDLGlCQUFWO0FBQUEsdUNBQ0U7QUFBQSw0QkFBS2hFLElBQUksQ0FBQ3lJO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFKRixlQVlFO0FBQUsscUJBQVMsRUFBQywwQkFBZjtBQUFBLG1DQUNFO0FBQUEseUJBQ0csR0FESCxFQUVHMFUsNkNBQU0sQ0FBQ25kLElBQUksQ0FBQ29kLFNBQU4sQ0FBTixDQUF1QkMsT0FBdkIsRUFGSCxZQUUyQ3JkLElBQUksQ0FBQ2lkLFFBQUwsQ0FBY0MsUUFGekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFaRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBWkY7QUFBQSxTQUFVbEMsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsT0FBVUEsQ0FBVjtBQUFBO0FBQUE7QUFBQTtBQUFBLGlCQURLLENBQVA7QUFvQ0QsR0FyQ0Q7O0FBdUNBLFFBQU15RCxpQ0FBaUMsR0FBRyxNQUFNO0FBQzlDLFdBQU85Qix3QkFBd0IsQ0FBQzBCLEdBQXpCLENBQTZCLENBQUNyZSxJQUFELEVBQU9nYixDQUFQLGtCQUNsQztBQUFBLDZCQUNFO0FBQWEsaUJBQVMsRUFBQyx5QkFBdkI7QUFBQSxnQ0FDRTtBQUFLLG1CQUFTLEVBQUMscUJBQWY7QUFBQSxpQ0FDRSxxRUFBQyxnREFBRDtBQUFNLGdCQUFJLEVBQUcsWUFBV2hiLElBQUksQ0FBQ0YsSUFBSyxFQUFsQztBQUFBLG1DQUNFO0FBQUcsbUJBQUssRUFBRTtBQUFFaUYsOEJBQWMsRUFBRSxNQUFsQjtBQUEwQmYscUJBQUssRUFBRTtBQUFqQyxlQUFWO0FBQUEscUNBQ0U7QUFDRSx5QkFBUyxFQUFDLGVBRFo7QUFFRSxtQkFBRyxFQUFHLEdBQUUxRyw0Q0FBSSxrQkFBaUIwQyxJQUFJLENBQUNGLElBQUssRUFGekM7QUFHRSxtQkFBRyxFQUFFRSxJQUFJLENBQUN5STtBQUhaO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBREYsZUFZRTtBQUNFLG1CQUFTLEVBQUMsdUJBRFo7QUFFRSxlQUFLLEVBQUU7QUFBRXZFLG1CQUFPLEVBQUUsTUFBWDtBQUFtQkMseUJBQWEsRUFBRTtBQUFsQyxXQUZUO0FBQUEsa0NBSUU7QUFBSyxxQkFBUyxFQUFDLDJCQUFmO0FBQUEsbUNBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxrQkFBSSxFQUFHLFlBQVduRSxJQUFJLENBQUNGLElBQUssRUFBbEM7QUFBQSxxQ0FDRTtBQUFHLHFCQUFLLEVBQUU7QUFBRWlGLGdDQUFjLEVBQUUsTUFBbEI7QUFBMEJmLHVCQUFLLEVBQUU7QUFBakMsaUJBQVY7QUFBQSx1Q0FDRTtBQUFBLDRCQUFLaEUsSUFBSSxDQUFDeUk7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpGLGVBWUU7QUFBSyxxQkFBUyxFQUFDLDBCQUFmO0FBQUEsbUNBQ0U7QUFBQSx5QkFDRyxHQURILEVBRUcwVSw2Q0FBTSxDQUFDbmQsSUFBSSxDQUFDb2QsU0FBTixDQUFOLENBQXVCQyxPQUF2QixFQUZILFlBRTJDcmQsSUFBSSxDQUFDaWQsUUFBTCxDQUFjQyxRQUZ6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFaRjtBQUFBLFNBQVVsQyxDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixPQUFVQSxDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREssQ0FBUDtBQW9DRCxHQXJDRDs7QUF1Q0EsUUFBTTBELG9CQUFvQixHQUFHLE1BQU07QUFDakMsV0FBT25DLHFCQUFxQixDQUFDOEIsR0FBdEIsQ0FBMEIsQ0FBQ3JlLElBQUQsRUFBT2diLENBQVAsa0JBQy9CO0FBQUEsNkJBQ0U7QUFBSyxpQkFBUyxFQUFDLGlCQUFmO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLGFBQWY7QUFBQSxpQ0FDRSxxRUFBQyxnREFBRDtBQUFNLGdCQUFJLEVBQUcsU0FBUWhiLElBQUksQ0FBQ0YsSUFBSyxFQUEvQjtBQUFBLG1DQUNFO0FBQUcsbUJBQUssRUFBRTtBQUFFaUYsOEJBQWMsRUFBRSxNQUFsQjtBQUEwQmYscUJBQUssRUFBRTtBQUFqQyxlQUFWO0FBQUEscUNBQ0U7QUFDRSx5QkFBUyxFQUFDLGVBRFo7QUFFRSxtQkFBRyxFQUFHLEdBQUUxRyw0Q0FBSSxlQUFjMEMsSUFBSSxDQUFDRixJQUFLLEVBRnRDO0FBR0UsbUJBQUcsRUFBRUUsSUFBSSxDQUFDeUk7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBWUU7QUFDRSxtQkFBUyxFQUFDLGVBRFo7QUFFRSxlQUFLLEVBQUU7QUFBRXZFLG1CQUFPLEVBQUUsTUFBWDtBQUFtQkMseUJBQWEsRUFBRTtBQUFsQyxXQUZUO0FBQUEsa0NBSUU7QUFBSyxxQkFBUyxFQUFDLGNBQWY7QUFBQSxtQ0FDRSxxRUFBQyxnREFBRDtBQUFNLGtCQUFJLEVBQUcsU0FBUW5FLElBQUksQ0FBQ0YsSUFBSyxFQUEvQjtBQUFBLHFDQUNFO0FBQUcscUJBQUssRUFBRTtBQUFFaUYsZ0NBQWMsRUFBRSxNQUFsQjtBQUEwQmYsdUJBQUssRUFBRTtBQUFqQyxpQkFBVjtBQUFBLHVDQUNFO0FBQUEsNEJBQUtoRSxJQUFJLENBQUN5STtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkYsZUFXRTtBQUFLLHFCQUFTLEVBQUMsYUFBZjtBQUFBLG1DQUNFLHFFQUFDLGdEQUFEO0FBQU0sa0JBQUksRUFBRyxTQUFRekksSUFBSSxDQUFDRixJQUFLLEVBQS9CO0FBQUEscUNBQ0U7QUFBRyxxQkFBSyxFQUFFO0FBQUVpRixnQ0FBYyxFQUFFLE1BQWxCO0FBQTBCZix1QkFBSyxFQUFFO0FBQWpDLGlCQUFWO0FBQUEsMEJBQ0cyYSx5REFBVSxDQUFDM2UsSUFBSSxDQUFDNGUsT0FBTjtBQURiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFYRixlQWtCRTtBQUFLLHFCQUFTLEVBQUMsYUFBZjtBQUFBLG1DQUNFO0FBQUEseUJBQ0d6Qiw2Q0FBTSxDQUFDbmQsSUFBSSxDQUFDb2QsU0FBTixDQUFOLENBQXVCQyxPQUF2QixFQURILFlBQzJDcmQsSUFBSSxDQUFDaWQsUUFBTCxDQUFjQyxRQUR6RDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEscUJBWkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREYsT0FBVWxDLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESyxDQUFQO0FBeUNELEdBMUNEOztBQTRDQSxRQUFNNkQscUJBQXFCLEdBQUcsTUFBTTtBQUNsQyxXQUFPckMsc0JBQXNCLENBQUM2QixHQUF2QixDQUEyQixDQUFDcmUsSUFBRCxFQUFPZ2IsQ0FBUCxrQkFDaEM7QUFBQSw2QkFDRTtBQUFhLGlCQUFTLEVBQUMsaUJBQXZCO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLGFBQWY7QUFBQSxpQ0FDRSxxRUFBQyxnREFBRDtBQUFNLGdCQUFJLEVBQUcsU0FBUWhiLElBQUksQ0FBQ0YsSUFBSyxFQUEvQjtBQUFBLG1DQUNFO0FBQUcsbUJBQUssRUFBRTtBQUFFaUYsOEJBQWMsRUFBRSxNQUFsQjtBQUEwQmYscUJBQUssRUFBRTtBQUFqQyxlQUFWO0FBQUEscUNBQ0U7QUFDRSx5QkFBUyxFQUFDLGVBRFo7QUFFRSxtQkFBRyxFQUFHLEdBQUUxRyw0Q0FBSSxlQUFjMEMsSUFBSSxDQUFDRixJQUFLLEVBRnRDO0FBR0UsbUJBQUcsRUFBRUUsSUFBSSxDQUFDeUk7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBWUU7QUFDRSxtQkFBUyxFQUFDLGVBRFo7QUFFRSxlQUFLLEVBQUU7QUFBRXZFLG1CQUFPLEVBQUUsTUFBWDtBQUFtQkMseUJBQWEsRUFBRTtBQUFsQyxXQUZUO0FBQUEsa0NBSUU7QUFBSyxxQkFBUyxFQUFDLGNBQWY7QUFBQSxtQ0FDRSxxRUFBQyxnREFBRDtBQUFNLGtCQUFJLEVBQUcsU0FBUW5FLElBQUksQ0FBQ0YsSUFBSyxFQUEvQjtBQUFBLHFDQUNFO0FBQUcscUJBQUssRUFBRTtBQUFFaUYsZ0NBQWMsRUFBRSxNQUFsQjtBQUEwQmYsdUJBQUssRUFBRTtBQUFqQyxpQkFBVjtBQUFBLHVDQUNFO0FBQUEsNEJBQUtoRSxJQUFJLENBQUN5STtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkYsZUFXRTtBQUFLLHFCQUFTLEVBQUMsYUFBZjtBQUFBLG1DQUNFLHFFQUFDLGdEQUFEO0FBQU0sa0JBQUksRUFBRyxTQUFRekksSUFBSSxDQUFDRixJQUFLLEVBQS9CO0FBQUEscUNBQ0U7QUFBRyxxQkFBSyxFQUFFO0FBQUVpRixnQ0FBYyxFQUFFLE1BQWxCO0FBQTBCZix1QkFBSyxFQUFFO0FBQWpDLGlCQUFWO0FBQUEsMEJBQ0cyYSx5REFBVSxDQUFDM2UsSUFBSSxDQUFDNGUsT0FBTjtBQURiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFYRixlQWtCRTtBQUFLLHFCQUFTLEVBQUMsYUFBZjtBQUFBLG1DQUNFO0FBQUEseUJBQ0csR0FESCxFQUVHekIsNkNBQU0sQ0FBQ25kLElBQUksQ0FBQ29kLFNBQU4sQ0FBTixDQUF1QkMsT0FBdkIsRUFGSCxZQUUyQ3JkLElBQUksQ0FBQ2lkLFFBQUwsQ0FBY0MsUUFGekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVpGO0FBQUEsU0FBVWxDLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLE9BQVVBLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESyxDQUFQO0FBMENELEdBM0NEOztBQTZDQSxRQUFNOEQsb0JBQW9CLEdBQUcsTUFBTTtBQUNqQyxXQUFPckMscUJBQXFCLENBQUM0QixHQUF0QixDQUEwQixDQUFDcmUsSUFBRCxFQUFPZ2IsQ0FBUCxrQkFDL0I7QUFBQSw2QkFDRTtBQUFhLGlCQUFTLEVBQUMsaUJBQXZCO0FBQUEsZ0NBQ0U7QUFBSyxtQkFBUyxFQUFDLGFBQWY7QUFBQSxpQ0FDRSxxRUFBQyxnREFBRDtBQUFNLGdCQUFJLEVBQUcsU0FBUWhiLElBQUksQ0FBQ0YsSUFBSyxFQUEvQjtBQUFBLG1DQUNFO0FBQUcsbUJBQUssRUFBRTtBQUFFaUYsOEJBQWMsRUFBRSxNQUFsQjtBQUEwQmYscUJBQUssRUFBRTtBQUFqQyxlQUFWO0FBQUEscUNBQ0U7QUFDRSx5QkFBUyxFQUFDLGVBRFo7QUFFRSxtQkFBRyxFQUFHLEdBQUUxRyw0Q0FBSSxlQUFjMEMsSUFBSSxDQUFDRixJQUFLLEVBRnRDO0FBR0UsbUJBQUcsRUFBRUUsSUFBSSxDQUFDeUk7QUFIWjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURGLGVBWUU7QUFDRSxtQkFBUyxFQUFDLGVBRFo7QUFFRSxlQUFLLEVBQUU7QUFBRXZFLG1CQUFPLEVBQUUsTUFBWDtBQUFtQkMseUJBQWEsRUFBRTtBQUFsQyxXQUZUO0FBQUEsa0NBSUU7QUFBSyxxQkFBUyxFQUFDLGNBQWY7QUFBQSxtQ0FDRSxxRUFBQyxnREFBRDtBQUFNLGtCQUFJLEVBQUcsU0FBUW5FLElBQUksQ0FBQ0YsSUFBSyxFQUEvQjtBQUFBLHFDQUNFO0FBQUcscUJBQUssRUFBRTtBQUFFaUYsZ0NBQWMsRUFBRSxNQUFsQjtBQUEwQmYsdUJBQUssRUFBRTtBQUFqQyxpQkFBVjtBQUFBLHVDQUNFO0FBQUEsNEJBQUtoRSxJQUFJLENBQUN5STtBQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBSkYsZUFXRTtBQUFLLHFCQUFTLEVBQUMsYUFBZjtBQUFBLG1DQUNFLHFFQUFDLGdEQUFEO0FBQU0sa0JBQUksRUFBRyxTQUFRekksSUFBSSxDQUFDRixJQUFLLEVBQS9CO0FBQUEscUNBQ0U7QUFBRyxxQkFBSyxFQUFFO0FBQUVpRixnQ0FBYyxFQUFFLE1BQWxCO0FBQTBCZix1QkFBSyxFQUFFO0FBQWpDLGlCQUFWO0FBQUEsMEJBQ0cyYSx5REFBVSxDQUFDM2UsSUFBSSxDQUFDNGUsT0FBTjtBQURiO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFYRixlQWtCRTtBQUFLLHFCQUFTLEVBQUMsYUFBZjtBQUFBLG1DQUNFO0FBQUEseUJBQ0csR0FESCxFQUVHekIsNkNBQU0sQ0FBQ25kLElBQUksQ0FBQ29kLFNBQU4sQ0FBTixDQUF1QkMsT0FBdkIsRUFGSCxZQUUyQ3JkLElBQUksQ0FBQ2lkLFFBQUwsQ0FBY0MsUUFGekQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFsQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQVpGO0FBQUEsU0FBVWxDLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGLE9BQVVBLENBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQkFESyxDQUFQO0FBMENELEdBM0NEOztBQTZDQSxRQUFNK0QsOEJBQThCLEdBQUcsTUFBTTtBQUMzQyxXQUFPaEIsVUFBVSxDQUFDTSxHQUFYLENBQWUsQ0FBQ3JlLElBQUQsRUFBT2diLENBQVAsa0JBQ3BCO0FBQUEsNkJBQ0U7QUFBYSxpQkFBUyxFQUFDLGlCQUF2QjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyxhQUFmO0FBQUEsaUNBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxnQkFBSSxFQUFHLFNBQVFoYixJQUFJLENBQUNGLElBQUssRUFBL0I7QUFBQSxtQ0FDRTtBQUFHLG1CQUFLLEVBQUU7QUFBRWlGLDhCQUFjLEVBQUUsTUFBbEI7QUFBMEJmLHFCQUFLLEVBQUU7QUFBakMsZUFBVjtBQUFBLHFDQUNFO0FBQ0UseUJBQVMsRUFBQyxlQURaO0FBRUUsbUJBQUcsRUFBRyxHQUFFMUcsNENBQUksZUFBYzBDLElBQUksQ0FBQ0YsSUFBSyxFQUZ0QztBQUdFLG1CQUFHLEVBQUVFLElBQUksQ0FBQ3lJO0FBSFo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixlQVlFO0FBQ0UsbUJBQVMsRUFBQyxlQURaO0FBRUUsZUFBSyxFQUFFO0FBQUV2RSxtQkFBTyxFQUFFLE1BQVg7QUFBbUJDLHlCQUFhLEVBQUU7QUFBbEMsV0FGVDtBQUFBLGtDQUlFO0FBQUsscUJBQVMsRUFBQyxjQUFmO0FBQUEsbUNBQ0UscUVBQUMsZ0RBQUQ7QUFBTSxrQkFBSSxFQUFHLFNBQVFuRSxJQUFJLENBQUNGLElBQUssRUFBL0I7QUFBQSxxQ0FDRTtBQUFHLHFCQUFLLEVBQUU7QUFBRWlGLGdDQUFjLEVBQUUsTUFBbEI7QUFBMEJmLHVCQUFLLEVBQUU7QUFBakMsaUJBQVY7QUFBQSx1Q0FDRTtBQUFBLDRCQUFLaEUsSUFBSSxDQUFDeUk7QUFBVjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHVCQUpGLGVBV0U7QUFBSyxxQkFBUyxFQUFDLGFBQWY7QUFBQSxtQ0FDRSxxRUFBQyxnREFBRDtBQUFNLGtCQUFJLEVBQUcsU0FBUXpJLElBQUksQ0FBQ0YsSUFBSyxFQUEvQjtBQUFBLHFDQUNFO0FBQUcscUJBQUssRUFBRTtBQUFFaUYsZ0NBQWMsRUFBRSxNQUFsQjtBQUEwQmYsdUJBQUssRUFBRTtBQUFqQyxpQkFBVjtBQUFBLDBCQUNHMmEseURBQVUsQ0FBQzNlLElBQUksQ0FBQzRlLE9BQU47QUFEYjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBWEYsZUFrQkU7QUFBSyxxQkFBUyxFQUFDLGFBQWY7QUFBQSxtQ0FDRTtBQUFBLHlCQUNHLEdBREgsRUFFR3pCLDZDQUFNLENBQUNuZCxJQUFJLENBQUNvZCxTQUFOLENBQU4sQ0FBdUJDLE9BQXZCLEVBRkgsWUFFMkNyZCxJQUFJLENBQUNpZCxRQUFMLENBQWNDLFFBRnpEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBbEJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFaRjtBQUFBLFNBQVVsQyxDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERixPQUFVQSxDQUFWO0FBQUE7QUFBQTtBQUFBO0FBQUEsaUJBREssQ0FBUDtBQTBDRCxHQTNDRDs7QUE2Q0Esc0JBQ0UscUVBQUMsMERBQUQ7QUFBQSwyQkFDRTtBQUFBLDhCQUNFO0FBQUEsa0JBQU0rQixJQUFJO0FBQVY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFERixlQUVFO0FBQUssaUJBQVMsRUFBQyx3QkFBZjtBQUFBLGtCQUNHYixVQUFVLElBQUlFLFlBQWQsSUFBOEJDLGtCQUE5QixJQUFvREYsZ0JBQXBELEdBQ0dhLGFBQWEsRUFEaEIsR0FFRztBQUhOO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUJBRkYsZUFPRTtBQUFLLGlCQUFTLEVBQUMseUJBQWY7QUFBQSxrQkFDR2QsVUFBVSxJQUFJRSxZQUFkLElBQThCRCxnQkFBOUIsR0FDR21CLHlCQUF5QixFQUQ1QixHQUVHO0FBSE47QUFBQTtBQUFBO0FBQUE7QUFBQSxtQkFQRixlQVlFO0FBQUssaUJBQVMsRUFBQyx3QkFBZjtBQUFBLGtCQUNHcEIsVUFBVSxJQUFJRSxZQUFkLElBQThCQyxrQkFBOUIsSUFBb0RGLGdCQUFwRCxHQUNHb0Isb0JBQW9CLEVBRHZCLEdBRUc7QUFITjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQVpGLGVBa0JFO0FBQUssaUJBQVMsRUFBQywrQkFBZjtBQUFBLGdDQUNFO0FBQUssbUJBQVMsRUFBQyxlQUFmO0FBQUEsa0NBQ0U7QUFBSyxxQkFBUyxFQUFDLFVBQWY7QUFBQSxtQ0FDRTtBQUFLLHVCQUFTLEVBQUMsS0FBZjtBQUFBLHFDQUNFO0FBQUsseUJBQVMsRUFBQyxXQUFmO0FBQUEsdUNBQ0U7QUFDRSwyQkFBUyxFQUFDLEtBRFo7QUFFRSx1QkFBSyxFQUFFO0FBQ0wzWSxtQ0FBZSxFQUFFLE9BRFo7QUFFTDJELDZCQUFTLEVBQUU7QUFGTixtQkFGVDtBQUFBLDBDQU9FO0FBQ0UseUJBQUssRUFBRTtBQUNMTiw0QkFBTSxFQUFFLE1BREg7QUFFTGpFLDJCQUFLLEVBQUUsTUFGRjtBQUdMbUUsNEJBQU0sRUFBRSxDQUhIO0FBSUx2RCxxQ0FBZSxFQUFFO0FBSlo7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQVBGLGVBZUU7QUFBSyx5QkFBSyxFQUFFO0FBQUV3RCw2QkFBTyxFQUFFO0FBQVgscUJBQVo7QUFBQSwrQkFDR3NXLG9CQUFvQixFQUR2QixlQUVFO0FBQ0UsK0JBQVMsRUFBQyxXQURaO0FBRUUsMkJBQUssRUFBRTtBQUNMeGEsK0JBQU8sRUFBRSxNQURKO0FBRUxDLHFDQUFhLEVBQUUsS0FGVjtBQUdMSCw2QkFBSyxFQUFFLE1BSEY7QUFJTGdiLGlDQUFTLEVBQUU7QUFKTix1QkFGVDtBQUFBLDhDQVNFO0FBQUssNkJBQUssRUFBRTtBQUFFbmIscUNBQVcsRUFBRTtBQUFmLHlCQUFaO0FBQUEsK0NBQ0UscUVBQUMsNERBQUQ7QUFBYyw4QkFBSSxFQUFDLE1BQW5CO0FBQTBCLCtCQUFLLEVBQUM7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBVEYsZUFZRTtBQUFLLDZCQUFLLEVBQUU7QUFBRUcsK0JBQUssRUFBRSxNQUFUO0FBQWlCaWIsb0NBQVUsRUFBRTtBQUE3Qix5QkFBWjtBQUFBLCtDQUNFO0FBQ0UsK0JBQUssRUFBRTtBQUFFRCxxQ0FBUyxFQUFFO0FBQWIsMkJBRFQ7QUFFRSxtQ0FBUyxFQUFDLFFBRlo7QUFHRSwwQ0FBYTtBQUhmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0FGRixFQXNCR1QsZUFBZSxFQXRCbEIsZUF1QkU7QUFDRSwrQkFBUyxFQUFDLFdBRFo7QUFFRSwyQkFBSyxFQUFFO0FBQ0xyYSwrQkFBTyxFQUFFLE1BREo7QUFFTEMscUNBQWEsRUFBRSxLQUZWO0FBR0xILDZCQUFLLEVBQUUsTUFIRjtBQUlMZ2IsaUNBQVMsRUFBRSxDQUpOO0FBS0xqYixvQ0FBWSxFQUFFO0FBTFQsdUJBRlQ7QUFBQSw4Q0FVRTtBQUFLLDZCQUFLLEVBQUU7QUFBRUYscUNBQVcsRUFBRTtBQUFmLHlCQUFaO0FBQUEsK0NBQ0UscUVBQUMsMkRBQUQ7QUFBYSw4QkFBSSxFQUFDLE1BQWxCO0FBQXlCLCtCQUFLLEVBQUM7QUFBL0I7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBVkYsZUFhRTtBQUFLLDZCQUFLLEVBQUU7QUFBRUcsK0JBQUssRUFBRSxNQUFUO0FBQWlCaWIsb0NBQVUsRUFBRTtBQUE3Qix5QkFBWjtBQUFBLCtDQUNFO0FBQ0UsK0JBQUssRUFBRTtBQUFFRCxxQ0FBUyxFQUFFO0FBQWIsMkJBRFQ7QUFFRSxtQ0FBUyxFQUFDLFFBRlo7QUFHRSwwQ0FBYTtBQUhmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0F2QkYsRUE0Q0dILHFCQUFxQixFQTVDeEIsZUE2Q0U7QUFBSywrQkFBUyxFQUFDLG1DQUFmO0FBQUEsaUNBQ0dDLG9CQUFvQixFQUR2QixFQUVHZixVQUFVLEdBQ1RnQiw4QkFBOEIsRUFEckIsZ0JBR1Q7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBTEosZUFPRTtBQUFLLGlDQUFTLEVBQUMsV0FBZjtBQUFBLGtDQUE0QlosY0FBYztBQUExQztBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQVBGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxpQ0E3Q0Y7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQWZGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx1QkFERixlQStFRTtBQUFLLHFCQUFTLEVBQUMseUNBQWY7QUFBQSx1QkFDR3JCLGdCQUFnQixnQkFDZjtBQUFBLHFDQUNFO0FBQ0UseUJBQVMsRUFBQyxtQ0FEWjtBQUVFLHFCQUFLLEVBQUU7QUFDTGxZLGlDQUFlLEVBQUUsTUFEWjtBQUVMMkQsMkJBQVMsRUFBRTtBQUZOLGlCQUZUO0FBQUEsd0NBT0U7QUFDRSwyQkFBUyxFQUFDLFdBRFo7QUFFRSx1QkFBSyxFQUFFO0FBQ0xyRSwyQkFBTyxFQUFFLE1BREo7QUFFTEMsaUNBQWEsRUFBRSxLQUZWO0FBR0xILHlCQUFLLEVBQUUsTUFIRjtBQUlMZ2IsNkJBQVMsRUFBRSxNQUpOO0FBS0xqYixnQ0FBWSxFQUFFO0FBTFQsbUJBRlQ7QUFBQSwwQ0FVRTtBQUFLLHlCQUFLLEVBQUU7QUFBRUYsaUNBQVcsRUFBRTtBQUFmLHFCQUFaO0FBQUEsMkNBQ0UscUVBQUMsNERBQUQ7QUFBYywwQkFBSSxFQUFDLE1BQW5CO0FBQTBCLDJCQUFLLEVBQUM7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBVkYsZUFhRTtBQUFLLHlCQUFLLEVBQUU7QUFBRUcsMkJBQUssRUFBRSxNQUFUO0FBQWlCaWIsZ0NBQVUsRUFBRTtBQUE3QixxQkFBWjtBQUFBLDJDQUNFO0FBQ0UsMkJBQUssRUFBRTtBQUFFRCxpQ0FBUyxFQUFFO0FBQWIsdUJBRFQ7QUFFRSwrQkFBUyxFQUFDLFFBRlo7QUFHRSxzQ0FBYTtBQUhmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQWJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFQRixlQTRCRTtBQUNFLDJCQUFTLEVBQUMsV0FEWjtBQUVFLHVCQUFLLEVBQUU7QUFDTHBiLGdDQUFZLEVBQUUsTUFEVDtBQUVMRCwrQkFBVyxFQUFFO0FBRlIsbUJBRlQ7QUFBQSwwQ0FPRTtBQUFLLDZCQUFTLEVBQUMsbURBQWY7QUFBQSw4QkFDRzJhLGtCQUFrQjtBQURyQjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQVBGLGVBVUU7QUFDRSx5QkFBSyxFQUFFO0FBQ0xyVyw0QkFBTSxFQUFFLEtBREg7QUFFTGpFLDJCQUFLLEVBQUUsTUFGRjtBQUdMbUUsNEJBQU0sRUFBRSxDQUhIO0FBSUx2RCxxQ0FBZSxFQUFFO0FBSlo7QUFEVDtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQVZGLGVBa0JFO0FBQUsseUJBQUssRUFBRTtBQUFFWiwyQkFBSyxFQUFFO0FBQVQscUJBQVo7QUFBQSwyQ0FDRTtBQUNFLDJCQUFLLEVBQUU7QUFDTEUsK0JBQU8sRUFBRSxNQURKO0FBRUxDLHFDQUFhLEVBQUUsS0FGVjtBQUdMVSw2QkFBSyxFQUFFLE9BSEY7QUFJTGQsb0NBQVksRUFBRTtBQUpULHVCQURUO0FBQUEsOENBUUU7QUFBSyw2QkFBSyxFQUFFO0FBQUVGLHFDQUFXLEVBQUU7QUFBZix5QkFBWjtBQUFBLCtDQUNFLHFFQUFDLGdEQUFEO0FBQU0sOEJBQUksRUFBRyxTQUFiO0FBQUEsaURBQ0U7QUFBQSxtREFDRTtBQUNFLHVDQUFTLEVBQUMsb0JBRFo7QUFFRSxtQ0FBSyxFQUFFO0FBQ0xxYiwwQ0FBVSxFQUFFLE1BRFA7QUFFTEMsNkNBQWEsRUFBRSxZQUZWO0FBR0wzVyx3Q0FBUSxFQUFFLE1BSEw7QUFJTDRXLDBDQUFVLEVBQUUsTUFKUDtBQUtMdGEscUNBQUssRUFBRSxTQUxGO0FBTUxzRCx1Q0FBTyxFQUFFLE1BTko7QUFPTHhFLDRDQUFZLEVBQUUsQ0FQVDtBQVFMRyw0Q0FBWSxFQUFFO0FBUlQsK0JBRlQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBUkYsZUE2QkU7QUFBSyw2QkFBSyxFQUFFO0FBQUVrYixvQ0FBVSxFQUFFLEtBQWQ7QUFBcUJuYixvQ0FBVSxFQUFFO0FBQWpDLHlCQUFaO0FBQUEsK0NBQ0UscUVBQUMsZ0RBQUQ7QUFBTSw4QkFBSSxFQUFHLFNBQWI7QUFBQSxpREFDRTtBQUFBLG1EQUNFLHFFQUFDLDhEQUFEO0FBQWdCLGtDQUFJLEVBQUMsUUFBckI7QUFBOEIsbUNBQUssRUFBQztBQUFwQztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLG1DQTdCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsNkJBNUJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEseUJBRGUsR0EyRmYsRUE1RkosRUErRkduQix1RUFBZ0IsZ0JBQ2Y7QUFBQSxxQ0FDRTtBQUNFLHlCQUFTLEVBQUMscUVBRFo7QUFFRSxxQkFBSyxFQUFFO0FBQ0xpQyxpQ0FBZSxFQUFFLE1BRFo7QUFFTDJELDJCQUFTLEVBQUU7QUFGTixpQkFGVDtBQUFBLHdDQU9FO0FBQ0UsMkJBQVMsRUFBQyxXQURaO0FBRUUsdUJBQUssRUFBRTtBQUNMckUsMkJBQU8sRUFBRSxNQURKO0FBRUxDLGlDQUFhLEVBQUUsS0FGVjtBQUdMSCx5QkFBSyxFQUFFLE1BSEY7QUFJTGdiLDZCQUFTLEVBQUU7QUFKTixtQkFGVDtBQUFBLDBDQVNFO0FBQUsseUJBQUssRUFBRTtBQUFFbmIsaUNBQVcsRUFBRTtBQUFmLHFCQUFaO0FBQUEsMkNBQ0UscUVBQUMsNERBQUQ7QUFBYywwQkFBSSxFQUFDLE1BQW5CO0FBQTBCLDJCQUFLLEVBQUM7QUFBaEM7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBVEYsZUFZRTtBQUFLLHlCQUFLLEVBQUU7QUFBRUcsMkJBQUssRUFBRSxNQUFUO0FBQWlCaWIsZ0NBQVUsRUFBRTtBQUE3QixxQkFBWjtBQUFBLDJDQUNFO0FBQ0UsMkJBQUssRUFBRTtBQUFFRCxpQ0FBUyxFQUFFO0FBQWIsdUJBRFQ7QUFFRSwrQkFBUyxFQUFDLFFBRlo7QUFHRSxzQ0FBYTtBQUhmO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLCtCQVpGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkFQRixlQTJCRTtBQUNFLDJCQUFTLEVBQUMsV0FEWjtBQUVFLHVCQUFLLEVBQUU7QUFDTEMsOEJBQVUsRUFBRSxNQURQO0FBRUxyYixnQ0FBWSxFQUFFLE1BRlQ7QUFHTEQsK0JBQVcsRUFBRTtBQUhSLG1CQUZUO0FBQUEsNkJBUUd5YSxrQkFBa0IsRUFSckIsZUFTRTtBQUNFLHlCQUFLLEVBQUU7QUFDTG5XLDRCQUFNLEVBQUUsS0FESDtBQUVMakUsMkJBQUssRUFBRSxNQUZGO0FBR0xtRSw0QkFBTSxFQUFFLENBSEg7QUFJTHZELHFDQUFlLEVBQUU7QUFKWjtBQURUO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBVEYsZUFpQkU7QUFBSyx5QkFBSyxFQUFFO0FBQUVaLDJCQUFLLEVBQUU7QUFBVCxxQkFBWjtBQUFBLDJDQUNFO0FBQ0UsMkJBQUssRUFBRTtBQUNMRSwrQkFBTyxFQUFFLE1BREo7QUFFTEMscUNBQWEsRUFBRSxLQUZWO0FBR0xVLDZCQUFLLEVBQUUsT0FIRjtBQUlMZCxvQ0FBWSxFQUFFO0FBSlQsdUJBRFQ7QUFBQSw4Q0FRRTtBQUFLLDZCQUFLLEVBQUU7QUFBRUYscUNBQVcsRUFBRTtBQUFmLHlCQUFaO0FBQUEsK0NBQ0UscUVBQUMsZ0RBQUQ7QUFBTSw4QkFBSSxFQUFHLFVBQWI7QUFBQSxpREFDRTtBQUFBLG1EQUNFO0FBQ0UsdUNBQVMsRUFBQyxvQkFEWjtBQUVFLG1DQUFLLEVBQUU7QUFDTHFiLDBDQUFVLEVBQUUsTUFEUDtBQUVMQyw2Q0FBYSxFQUFFLFlBRlY7QUFHTDNXLHdDQUFRLEVBQUUsTUFITDtBQUlMNFcsMENBQVUsRUFBRSxNQUpQO0FBS0x0YSxxQ0FBSyxFQUFFLFNBTEY7QUFNTHNELHVDQUFPLEVBQUUsTUFOSjtBQU9MeEUsNENBQVksRUFBRSxDQVBUO0FBUUxHLDRDQUFZLEVBQUU7QUFSVCwrQkFGVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0FSRixlQTZCRTtBQUFLLDZCQUFLLEVBQUU7QUFBRWtiLG9DQUFVLEVBQUUsS0FBZDtBQUFxQm5iLG9DQUFVLEVBQUU7QUFBakMseUJBQVo7QUFBQSwrQ0FDRSxxRUFBQyxnREFBRDtBQUFNLDhCQUFJLEVBQUcsVUFBYjtBQUFBLGlEQUNFO0FBQUEsbURBQ0UscUVBQUMsOERBQUQ7QUFBZ0Isa0NBQUksRUFBQyxRQUFyQjtBQUE4QixtQ0FBSyxFQUFDO0FBQXBDO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBN0JGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUEsK0JBakJGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSw2QkEzQkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSx5QkFEZSxHQXlGZixFQXhMSjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsdUJBL0VGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQkFERixFQTZRRzJZLHFCQUFxQixnQkFDcEI7QUFBQSxpQ0FDRTtBQUFLLHFCQUFTLEVBQUMsd0RBQWY7QUFBQSxtQ0FDRTtBQUFLLHVCQUFTLEVBQUMsVUFBZjtBQUFBLHFDQUNFO0FBQUsseUJBQVMsRUFBQyxLQUFmO0FBQUEsdUNBQ0U7QUFBSywyQkFBUyxFQUFDLFdBQWY7QUFBQSx5Q0FDRTtBQUNFLDZCQUFTLEVBQUMsS0FEWjtBQUVFLHlCQUFLLEVBQUU7QUFDTDdYLHFDQUFlLEVBQUUsT0FEWjtBQUVMMkQsK0JBQVMsRUFBRTtBQUZOLHFCQUZUO0FBQUEsMkNBT0U7QUFBSywyQkFBSyxFQUFFO0FBQUVILCtCQUFPLEVBQUU7QUFBWCx1QkFBWjtBQUFBLDhDQUNFO0FBQ0UsaUNBQVMsRUFBQyxXQURaO0FBRUUsNkJBQUssRUFBRTtBQUNMbEUsaUNBQU8sRUFBRSxNQURKO0FBRUxDLHVDQUFhLEVBQUUsS0FGVjtBQUdMSCwrQkFBSyxFQUFFLE1BSEY7QUFJTGdiLG1DQUFTLEVBQUUsTUFKTjtBQUtMamIsc0NBQVksRUFBRTtBQUxULHlCQUZUO0FBQUEsZ0RBVUU7QUFBSywrQkFBSyxFQUFFO0FBQUVGLHVDQUFXLEVBQUU7QUFBZiwyQkFBWjtBQUFBLGlEQUNFLHFFQUFDLDJEQUFEO0FBQWEsZ0NBQUksRUFBQyxNQUFsQjtBQUF5QixpQ0FBSyxFQUFDO0FBQS9CO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFDQVZGLGVBYUU7QUFBSywrQkFBSyxFQUFFO0FBQUVHLGlDQUFLLEVBQUUsTUFBVDtBQUFpQmliLHNDQUFVLEVBQUU7QUFBN0IsMkJBQVo7QUFBQSxpREFDRTtBQUNFLGlDQUFLLEVBQUU7QUFBRUQsdUNBQVMsRUFBRTtBQUFiLDZCQURUO0FBRUUscUNBQVMsRUFBQyxRQUZaO0FBR0UsNENBQWE7QUFIZjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQSxxQ0FiRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsbUNBREYsRUFzQkdGLG9CQUFvQixFQXRCdkIsRUF1QkdmLFVBQVUsR0FDVGdCLDhCQUE4QixFQURyQixnQkFHVDtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0ExQkosZUE0QkU7QUFBSyxpQ0FBUyxFQUFDLFdBQWY7QUFBQSxrQ0FBNEJaLGNBQWM7QUFBMUM7QUFBQTtBQUFBO0FBQUE7QUFBQSxtQ0E1QkY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBUEY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBREY7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURGO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLHFCQURvQixHQWtEcEIsRUEvVEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLG1CQWxCRjtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFERjtBQUFBO0FBQUE7QUFBQTtBQUFBLGVBREY7QUF5VkQsQ0F2c0NELEMsQ0F5c0NBOzs7QUFDTyxlQUFla0IsY0FBZixHQUFnQztBQUNyQyxRQUFNOUMscUJBQXFCLEdBQUcsTUFBTWpiLDRGQUErQixHQUFHeEQsSUFBbEMsQ0FDakNpQixJQUFELElBQVU7QUFDUixRQUFJQSxJQUFJLENBQUM0VixLQUFULEVBQWdCO0FBQ2R6VyxhQUFPLENBQUNDLEdBQVIsQ0FBWVksSUFBSSxDQUFDNFYsS0FBakI7QUFDRCxLQUZELE1BRU87QUFDTCxhQUFPNVYsSUFBUDtBQUNEO0FBQ0YsR0FQaUMsQ0FBcEM7QUFVQSxRQUFNeWQsc0JBQXNCLEdBQUcsTUFBTWpiLDZGQUFnQyxHQUFHekQsSUFBbkMsQ0FDbENpQixJQUFELElBQVU7QUFDUixRQUFJQSxJQUFJLENBQUM0VixLQUFULEVBQWdCO0FBQ2R6VyxhQUFPLENBQUNDLEdBQVIsQ0FBWVksSUFBSSxDQUFDNFYsS0FBakI7QUFDRCxLQUZELE1BRU87QUFDTCxhQUFPNVYsSUFBUDtBQUNEO0FBQ0YsR0FQa0MsQ0FBckM7QUFVQSxNQUFJMEMsSUFBSSxHQUFHLEVBQVg7QUFDQSxNQUFJQyxLQUFLLEdBQUcsRUFBWjtBQUVBLFFBQU0rYSxxQkFBcUIsR0FBRyxNQUFNamIsNEZBQStCLENBQ2pFQyxJQURpRSxFQUVqRUMsS0FGaUUsQ0FBL0IsQ0FHbEM1RCxJQUhrQyxDQUc1QmlCLElBQUQsSUFBVTtBQUNmLFFBQUlBLElBQUksQ0FBQzRWLEtBQVQsRUFBZ0I7QUFDZHpXLGFBQU8sQ0FBQ0MsR0FBUixDQUFZWSxJQUFJLENBQUM0VixLQUFqQjtBQUNELEtBRkQsTUFFTztBQUNMLGFBQU81VixJQUFQO0FBQ0Q7QUFDRixHQVRtQyxDQUFwQztBQVVBLFFBQU02ZCxnQkFBZ0IsR0FBRyxNQUFNN1oseUZBQTBCLEdBQUdqRixJQUE3QixDQUFtQ2lCLElBQUQsSUFBVTtBQUN6RSxRQUFJQSxJQUFJLENBQUM0VixLQUFULEVBQWdCO0FBQ2R6VyxhQUFPLENBQUNDLEdBQVIsQ0FBWVksSUFBSSxDQUFDNFYsS0FBakI7QUFDRCxLQUZELE1BRU87QUFDTCxhQUFPNVYsSUFBUDtBQUNEO0FBQ0YsR0FOOEIsQ0FBL0I7QUFPQSxRQUFNOGQsa0JBQWtCLEdBQUcsTUFBTS9iLDRGQUFxQixHQUFHaEQsSUFBeEIsQ0FBOEJpQixJQUFELElBQVU7QUFDdEUsUUFBSUEsSUFBSSxDQUFDNFYsS0FBVCxFQUFnQjtBQUNkelcsYUFBTyxDQUFDQyxHQUFSLENBQVlZLElBQUksQ0FBQzRWLEtBQWpCO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsYUFBTzVWLElBQVA7QUFDRDtBQUNGLEdBTmdDLENBQWpDO0FBT0EsUUFBTStkLGdCQUFnQixHQUFHLE1BQU1sZCwwRkFBMkIsR0FBRzlCLElBQTlCLENBQW9DaUIsSUFBRCxJQUFVO0FBQzFFLFFBQUlBLElBQUksQ0FBQzRWLEtBQVQsRUFBZ0I7QUFDZHpXLGFBQU8sQ0FBQ0MsR0FBUixDQUFZWSxJQUFJLENBQUM0VixLQUFqQjtBQUNELEtBRkQsTUFFTztBQUNMLGFBQU81VixJQUFQO0FBQ0Q7QUFDRixHQU44QixDQUEvQjtBQVFBLFFBQU1tZCxVQUFVLEdBQUcsTUFBTXZhLDZFQUFnQixHQUFHN0QsSUFBbkIsQ0FBeUJpQixJQUFELElBQVU7QUFDekQsUUFBSUEsSUFBSSxDQUFDNFYsS0FBVCxFQUFnQjtBQUNkelcsYUFBTyxDQUFDQyxHQUFSLENBQVlZLElBQUksQ0FBQzRWLEtBQWpCO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsYUFBTzVWLElBQVA7QUFDRDtBQUNGLEdBTndCLENBQXpCO0FBT0EsUUFBTW9kLGdCQUFnQixHQUFHLE1BQU12YSxtRkFBc0IsR0FBRzlELElBQXpCLENBQStCaUIsSUFBRCxJQUFVO0FBQ3JFLFFBQUlBLElBQUksQ0FBQzRWLEtBQVQsRUFBZ0I7QUFDZHpXLGFBQU8sQ0FBQ0MsR0FBUixDQUFZWSxJQUFJLENBQUM0VixLQUFqQjtBQUNELEtBRkQsTUFFTztBQUNMLGFBQU81VixJQUFQO0FBQ0Q7QUFDRixHQU44QixDQUEvQjtBQU9BLFFBQU1xZCxZQUFZLEdBQUcsTUFBTXhaLGlGQUFrQixHQUFHOUUsSUFBckIsQ0FBMkJpQixJQUFELElBQVU7QUFDN0QsUUFBSUEsSUFBSSxDQUFDNFYsS0FBVCxFQUFnQjtBQUNkelcsYUFBTyxDQUFDQyxHQUFSLENBQVlZLElBQUksQ0FBQzRWLEtBQWpCO0FBQ0QsS0FGRCxNQUVPO0FBQ0wsYUFBTzVWLElBQVA7QUFDRDtBQUNGLEdBTjBCLENBQTNCO0FBT0EsUUFBTXNkLGtCQUFrQixHQUFHLE1BQU14Wix1RkFBd0IsR0FBRy9FLElBQTNCLENBQWlDaUIsSUFBRCxJQUFVO0FBQ3pFLFFBQUlBLElBQUksQ0FBQzRWLEtBQVQsRUFBZ0I7QUFDZHpXLGFBQU8sQ0FBQ0MsR0FBUixDQUFZWSxJQUFJLENBQUM0VixLQUFqQjtBQUNELEtBRkQsTUFFTztBQUNMLGFBQU81VixJQUFQO0FBQ0Q7QUFDRixHQU5nQyxDQUFqQztBQVFBLFFBQU11ZCxpQkFBaUIsR0FBRyxNQUFNeFosc0ZBQXVCLEdBQUdoRixJQUExQixDQUFnQ2lCLElBQUQsSUFBVTtBQUN2RSxRQUFJQSxJQUFJLENBQUM0VixLQUFULEVBQWdCO0FBQ2R6VyxhQUFPLENBQUNDLEdBQVIsQ0FBWVksSUFBSSxDQUFDNFYsS0FBakI7QUFDRCxLQUZELE1BRU87QUFDTCxhQUFPNVYsSUFBUDtBQUNEO0FBQ0YsR0FOK0IsQ0FBaEM7QUFPQSxRQUFNMmQsd0JBQXdCLEdBQUcsTUFBTTFaLGdHQUFpQyxHQUFHbEYsSUFBcEMsQ0FDcENpQixJQUFELElBQVU7QUFDUixRQUFJQSxJQUFJLENBQUM0VixLQUFULEVBQWdCO0FBQ2R6VyxhQUFPLENBQUNDLEdBQVIsQ0FBWVksSUFBSSxDQUFDNFYsS0FBakI7QUFDRCxLQUZELE1BRU87QUFDTCxhQUFPNVYsSUFBUDtBQUNEO0FBQ0YsR0FQb0MsQ0FBdkM7QUFTQSxRQUFNNGQsd0JBQXdCLEdBQUcsTUFBTTFaLGdHQUFpQyxHQUFHbkYsSUFBcEMsQ0FDcENpQixJQUFELElBQVU7QUFDUixRQUFJQSxJQUFJLENBQUM0VixLQUFULEVBQWdCO0FBQ2R6VyxhQUFPLENBQUNDLEdBQVIsQ0FBWVksSUFBSSxDQUFDNFYsS0FBakI7QUFDRCxLQUZELE1BRU87QUFDTCxhQUFPNVYsSUFBUDtBQUNEO0FBQ0YsR0FQb0MsQ0FBdkM7QUFVQSxTQUFPO0FBQ0xxRyxTQUFLLEVBQUU7QUFDTDhXLGdCQURLO0FBRUxDLHNCQUZLO0FBR0xDLGtCQUhLO0FBSUxDLHdCQUpLO0FBS0xDLHVCQUxLO0FBTUxDLDJCQU5LO0FBT0xDLDRCQVBLO0FBUUxDLDJCQVJLO0FBU0xDLDhCQVRLO0FBVUxDLDhCQVZLO0FBV0xDLHNCQVhLO0FBWUxDLHdCQVpLO0FBYUxDO0FBYkssS0FERjtBQWdCTDtBQUNBO0FBQ0F3QyxjQUFVLEVBQUU7QUFsQlAsR0FBUDtBQW9CRDtBQUVjckQsb0VBQWYsRTs7Ozs7Ozs7Ozs7QUM3MkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7QUN2REEsNkM7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsbUM7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEsd0M7Ozs7Ozs7Ozs7O0FDQUEsc0M7Ozs7Ozs7Ozs7O0FDQUEseUM7Ozs7Ozs7Ozs7O0FDQUEsa0M7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEsMkM7Ozs7Ozs7Ozs7O0FDQUEscUM7Ozs7Ozs7Ozs7O0FDQUEsOEM7Ozs7Ozs7Ozs7O0FDQUEsa0Q7Ozs7Ozs7Ozs7O0FDQUEsdUMiLCJmaWxlIjoicGFnZXMvaW5kZXguanMiLCJzb3VyY2VzQ29udGVudCI6WyIgXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4gXHR2YXIgaW5zdGFsbGVkTW9kdWxlcyA9IHJlcXVpcmUoJy4uL3Nzci1tb2R1bGUtY2FjaGUuanMnKTtcblxuIFx0Ly8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbiBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblxuIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbiBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbiBcdFx0XHRyZXR1cm4gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0uZXhwb3J0cztcbiBcdFx0fVxuIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuIFx0XHR2YXIgbW9kdWxlID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0gPSB7XG4gXHRcdFx0aTogbW9kdWxlSWQsXG4gXHRcdFx0bDogZmFsc2UsXG4gXHRcdFx0ZXhwb3J0czoge31cbiBcdFx0fTtcblxuIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbiBcdFx0dmFyIHRocmV3ID0gdHJ1ZTtcbiBcdFx0dHJ5IHtcbiBcdFx0XHRtb2R1bGVzW21vZHVsZUlkXS5jYWxsKG1vZHVsZS5leHBvcnRzLCBtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbiBcdFx0XHR0aHJldyA9IGZhbHNlO1xuIFx0XHR9IGZpbmFsbHkge1xuIFx0XHRcdGlmKHRocmV3KSBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG4gXHRcdH1cblxuIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4gXHRcdG1vZHVsZS5sID0gdHJ1ZTtcblxuIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4gXHR9XG5cblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG5cbiBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuXG4gXHQvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9uIGZvciBoYXJtb255IGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuIFx0XHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIG5hbWUpKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIG5hbWUsIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBnZXR0ZXIgfSk7XG4gXHRcdH1cbiBcdH07XG5cbiBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbiBcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbiBcdFx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG4gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4gXHRcdH1cbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbiBcdH07XG5cbiBcdC8vIGNyZWF0ZSBhIGZha2UgbmFtZXNwYWNlIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4gXHQvLyBtb2RlICYgMjogbWVyZ2UgYWxsIHByb3BlcnRpZXMgb2YgdmFsdWUgaW50byB0aGUgbnNcbiBcdC8vIG1vZGUgJiA0OiByZXR1cm4gdmFsdWUgd2hlbiBhbHJlYWR5IG5zIG9iamVjdFxuIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy50ID0gZnVuY3Rpb24odmFsdWUsIG1vZGUpIHtcbiBcdFx0aWYobW9kZSAmIDEpIHZhbHVlID0gX193ZWJwYWNrX3JlcXVpcmVfXyh2YWx1ZSk7XG4gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4gXHRcdGlmKChtb2RlICYgNCkgJiYgdHlwZW9mIHZhbHVlID09PSAnb2JqZWN0JyAmJiB2YWx1ZSAmJiB2YWx1ZS5fX2VzTW9kdWxlKSByZXR1cm4gdmFsdWU7XG4gXHRcdHZhciBucyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShucywgJ2RlZmF1bHQnLCB7IGVudW1lcmFibGU6IHRydWUsIHZhbHVlOiB2YWx1ZSB9KTtcbiBcdFx0aWYobW9kZSAmIDIgJiYgdHlwZW9mIHZhbHVlICE9ICdzdHJpbmcnKSBmb3IodmFyIGtleSBpbiB2YWx1ZSkgX193ZWJwYWNrX3JlcXVpcmVfXy5kKG5zLCBrZXksIGZ1bmN0aW9uKGtleSkgeyByZXR1cm4gdmFsdWVba2V5XTsgfS5iaW5kKG51bGwsIGtleSkpO1xuIFx0XHRyZXR1cm4gbnM7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gXCIuL3BhZ2VzL2luZGV4LmpzXCIpO1xuIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9kaXN0L25leHQtc2VydmVyL2xpYi9yb3V0ZXItY29udGV4dC5qc1wiKTsiLCJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XHJcbmltcG9ydCB7IEFQSSB9IGZyb20gJy4uL2NvbmZpZyc7XHJcbmltcG9ydCBjb29raWUgZnJvbSAnanMtY29va2llJztcclxuaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcblxyXG4vKipcclxuICogY29tcGxldGVkISBoYW5kbGUgcmVzcG9uc2VcclxuICovXHJcbmV4cG9ydCBjb25zdCBoYW5kbGVSZXNwb25zZSA9IChyZXNwb25zZSkgPT4ge1xyXG4gICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDAxKSB7XHJcbiAgICAgICAgc2lnbm91dCgoKSA9PiB7XHJcbiAgICAgICAgICAgIFJvdXRlci5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHBhdGhuYW1lOiAnL2FkbWluLXBhbmVsL3VzZXItc2lnbmluJyxcclxuICAgICAgICAgICAgICAgIHF1ZXJ5OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogJ1lvdXIgc2Vzc2lvbiBoYXMgYmVlbiBleHBpcmVkLiBQbGVhc2Ugc2lnbiBpbidcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG5cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcHJlU2lnbnVwID0gKHVzZXIsIHRva2VuKSA9PiB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7QVBJfS9zaWdudXBgLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWBcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXIpXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpO1xyXG4gICAgICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHNpZ251cCA9ICh1c2VyKSA9PiB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7QVBJfS92ZXJpZnktc2lnbnVwYCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXIpXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzaWduaW4gPSAodXNlcikgPT4ge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke0FQSX0vc2lnbmluYCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHVzZXIpXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBzaWdub3V0ID0gKG5leHQpID0+IHtcclxuICAgIHJlbW92ZUNvb2tpZSgndG9rZW4nKTtcclxuICAgIHJlbW92ZUxvY2FsU3RvcmFnZSgndXNlcicpO1xyXG4gICAgbmV4dCgpO1xyXG4gICAgcmV0dXJuIGZldGNoKGAke0FQSX0vc2lnbm91dGAsIHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnXHJcbiAgICB9KVxyXG4gICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ3NpZ25vdXQgc3VjY2VzcycpO1xyXG4gICAgICAgIH0pXHJcbiAgICAgICAgLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufVxyXG5cclxuLy9zZXQgY29va2llXHJcbmV4cG9ydCBjb25zdCBzZXRDb29raWUgPSAoa2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgICAgIGNvb2tpZS5zZXQoa2V5LCB2YWx1ZSwge1xyXG4gICAgICAgICAgICBleHBpcmVzOiAxXHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVtb3ZlQ29va2llID0gKGtleSkgPT4ge1xyXG4gICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgICAgIGNvb2tpZS5yZW1vdmUoa2V5LCB7XHJcbiAgICAgICAgICAgIGV4cGlyZXM6IDFcclxuICAgICAgICB9KTtcclxuICAgIH1cclxufTtcclxuLy9nZXQgY29va2llXHJcbmV4cG9ydCBjb25zdCBnZXRDb29raWUgPSAoa2V5KSA9PiB7XHJcbiAgICBpZiAocHJvY2Vzcy5icm93c2VyKSB7XHJcbiAgICAgICAgcmV0dXJuIGNvb2tpZS5nZXQoa2V5KTtcclxuICAgIH1cclxufTtcclxuXHJcbi8vbG9jYWxzdG9yYWdlXHJcbmV4cG9ydCBjb25zdCBzZXRMb2NhbFN0b3JhZ2UgPSAoa2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKGtleSwgSlNPTi5zdHJpbmdpZnkodmFsdWUpKTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZUxvY2FsU3RvcmFnZSA9IChrZXkpID0+IHtcclxuICAgIGlmIChwcm9jZXNzLmJyb3dzZXIpIHtcclxuICAgICAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShrZXkpO1xyXG4gICAgfVxyXG59XHJcblxyXG4vL2F1dGhcclxuZXhwb3J0IGNvbnN0IGF1dGhlbnRpY2F0ZSA9IChkYXRhLCBuZXh0KSA9PiB7XHJcbiAgICBzZXRDb29raWUoJ3Rva2VuJywgZGF0YS50b2tlbik7XHJcbiAgICBzZXRMb2NhbFN0b3JhZ2UoJ3VzZXInLCBkYXRhLnVzZXIpO1xyXG4gICAgbmV4dCgpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgaXNBdXRoID0gKCkgPT4ge1xyXG4gICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgICAgIGNvbnN0IGNvb2tpZUNoZWNrZWQgPSBnZXRDb29raWUoJ3Rva2VuJyk7XHJcbiAgICAgICAgaWYgKGNvb2tpZUNoZWNrZWQpIHtcclxuICAgICAgICAgICAgaWYgKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKGxvY2FsU3RvcmFnZS5nZXRJdGVtKCd1c2VyJykpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZVVzZXIgPSAodXNlciwgbmV4dCkgPT4ge1xyXG4gICAgaWYgKHByb2Nlc3MuYnJvd3Nlcikge1xyXG4gICAgICAgIGlmIChsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKSB7XHJcbiAgICAgICAgICAgIGxldCBhdXRoID0gSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndXNlcicpKTtcclxuICAgICAgICAgICAgYXV0aCA9IHVzZXI7XHJcbiAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd1c2VyJywgSlNPTi5zdHJpbmdpZnkoYXV0aCkpO1xyXG4gICAgICAgICAgICBuZXh0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5leHBvcnQgY29uc3QgZm9yZ290UGFzc3dvcmQgPSAoZW1haWwpID0+IHtcclxuICAgIHJldHVybiBmZXRjaChgJHtBUEl9L2ZvcmdvdC1wYXNzd29yZGAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcclxuICAgICAgICB9LFxyXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGVtYWlsKVxyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgcmVzZXRQYXNzd29yZCA9IChyZXNldEluZm8pID0+IHtcclxuICAgIHJldHVybiBmZXRjaChgJHtBUEl9L3Jlc2V0LXBhc3N3b3JkYCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BVVCcsXHJcbiAgICAgICAgaGVhZGVyczoge1xyXG4gICAgICAgICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocmVzZXRJbmZvKVxyXG4gICAgfSlcclxuICAgICAgICAudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59XHJcblxyXG4iLCJpbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtZmV0Y2hcIjtcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBoYW5kbGVSZXNwb25zZSB9IGZyb20gXCIuL2F1dGguYWN0aW9uXCI7XHJcbmltcG9ydCBxdWVyeVN0cmluZyBmcm9tIFwicXVlcnktc3RyaW5nXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlTW9iaWxlID0gKG1vYmlsZSwgdG9rZW4pID0+IHtcclxuICByZXR1cm4gZmV0Y2goYCR7QVBJfS9tb2JpbGVgLCB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgIH0sXHJcbiAgICBib2R5OiBtb2JpbGUsXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBoYW5kbGVSZXNwb25zZShyZXNwb25zZSk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG1vYmlsZUxpc3RQcml2YXRlID0gKCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L21vYmlsZS1wcml2YXRlLXJvb3RgLCB7XHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBtb2JpbGVMaXN0UHVibGljID0gKCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L21vYmlsZS1wdWJsaWMtcm9vdGAsIHtcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG1vYmlsZUxpc3RQdWJsaWNSZWxldmVudEJyYW5kcyA9IChpZCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L21vYmlsZS1icmFuZHMtbGlzdC8ke2lkfWAsIHtcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG1vYmlsZUxpc3RQdWJsaWNOZXdzUmV2aWV3cyA9ICgpID0+IHtcclxuICByZXR1cm4gZmV0Y2goYCR7QVBJfS9tb2JpbGUtbmV3cy1yZXZpZXdzYCwge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2luZ2xlTW9iaWxlID0gKHNsdWcpID0+IHtcclxuICByZXR1cm4gZmV0Y2goYCR7QVBJfS9tb2JpbGUvJHtzbHVnfWAsIHtcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3RSZWxhdGVkID0gKGJsb2cpID0+IHtcclxuICByZXR1cm4gZmV0Y2goYCR7QVBJfS9tb2JpbGUvcmVsYXRlZGAsIHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJsb2cpLFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGlzdFJlbGF0ZWROZXdzID0gKGJsb2cpID0+IHtcclxuICByZXR1cm4gZmV0Y2goYCR7QVBJfS9tb2JpbGUvbmV3cy1yZWxhdGVkYCwge1xyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYmxvZyksXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsaXN0UmVsYXRlZFJldmlld3MgPSAoYmxvZykgPT4ge1xyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L21vYmlsZS9yZXZpZXdzLXJlbGF0ZWRgLCB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShibG9nKSxcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZU1vYmlsZSA9IChzbHVnLCB0b2tlbikgPT4ge1xyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L21vYmlsZS8ke3NsdWd9YCwge1xyXG4gICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICB9LFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVNb2JpbGUgPSAobW9iaWxlLCB0b2tlbiwgc2x1ZykgPT4ge1xyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L21vYmlsZS8ke3NsdWd9YCwge1xyXG4gICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgIH0sXHJcbiAgICBib2R5OiBtb2JpbGUsXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBoYW5kbGVSZXNwb25zZShyZXNwb25zZSk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFwcHJvdmVNb2JpbGUgPSAoc2x1ZywgdG9rZW4pID0+IHtcclxuICAvL2NvbnNvbGUubG9nKCdmcm9tIGFjdGlvbnMgIDogJywgc2x1ZywgdG9rZW4pO1xyXG5cclxuICByZXR1cm4gZmV0Y2goYCR7QVBJfS9tb2JpbGUvYXBwcm92ZS8ke3NsdWd9YCwge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgIH0sXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBoYW5kbGVSZXNwb25zZShyZXNwb25zZSk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVuUHVibGlzaE1vYmlsZSA9IChzbHVnLCB0b2tlbikgPT4ge1xyXG4gIC8vY29uc29sZS5sb2coJ2Zyb20gYWN0aW9ucyAgOiAnLCBzbHVnLCB0b2tlbik7XHJcblxyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L21vYmlsZS91bi1wdWJsaXNoLyR7c2x1Z31gLCB7XHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgfSxcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGlzdFNlYXJjaEFkbWluID0gKHBhcmFtcykgPT4ge1xyXG4gIGxldCBxdWVyeSA9IHF1ZXJ5U3RyaW5nLnN0cmluZ2lmeShwYXJhbXMpO1xyXG5cclxuICByZXR1cm4gZmV0Y2goYCR7QVBJfS9tb2JpbGUtc2VhcmNoL3NlYXJjaD8ke3F1ZXJ5fWAsIHtcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuLyoqY29tcGxldGVkICovXHJcbmV4cG9ydCBjb25zdCBsaXN0U2VhcmNoVXNlciA9IChwYXJhbXMpID0+IHtcclxuICBsZXQgcXVlcnkgPSBxdWVyeVN0cmluZy5zdHJpbmdpZnkocGFyYW1zKTtcclxuXHJcbiAgcmV0dXJuIGZldGNoKGAke0FQSX0vbW9iaWxlLXNlYXJjaC11c2VyL3NlYXJjaD8ke3F1ZXJ5fWAsIHtcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG4iLCJpbXBvcnQgZmV0Y2ggZnJvbSAnaXNvbW9ycGhpYy1mZXRjaCc7XHJcbmltcG9ydCB7IEFQSSB9IGZyb20gJy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7IGhhbmRsZVJlc3BvbnNlIH0gZnJvbSAnLi9hdXRoLmFjdGlvbic7XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlTUNhdGVnb3J5ID0gKG1DYXRlZ29yeSwgdG9rZW4pID0+IHtcclxuXHJcblxyXG4gICAgcmV0dXJuIGZldGNoKGAke0FQSX0vbW9iaWxlLWNhdGVnb3J5YCwge1xyXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBtQ2F0ZWdvcnlcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBoYW5kbGVSZXNwb25zZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG1DYXRlZ29yeUxpc3QgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gZmV0Y2goYCR7QVBJfS9tb2JpbGUtY2F0ZWdvcnlgLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnR0VUJ1xyXG4gICAgfSkudGhlbihyZXNwb25zZSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pLmNhdGNoKGVyciA9PiBjb25zb2xlLmxvZyhlcnIpXHJcbiAgICApO1xyXG59XHJcblxyXG5leHBvcnQgY29uc3QgbUNhdGVnb3J5TGlzdEhvbWVQYWdlID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke0FQSX0vbW9iaWxlLWNhdGVnb3J5LWxpc3QtaG9tZS1wYWdlYCwge1xyXG4gICAgICAgIG1ldGhvZDogJ0dFVCdcclxuICAgIH0pLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKVxyXG4gICAgKTtcclxufVxyXG5cclxuXHJcblxyXG5leHBvcnQgY29uc3Qgc2luZ2xlTUNhdGVnb3J5ID0gKHNsdWcpID0+IHtcclxuICAgIHJldHVybiBmZXRjaChgJHtBUEl9L3NpbmdsZS1tb2JpbGUtY2F0ZWdvcnkvJHtzbHVnfWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdHRVQnXHJcbiAgICB9KS50aGVuKHJlc3BvbnNlID0+IHtcclxuICAgICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpXHJcbiAgICB9KS5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKVxyXG4gICAgKTtcclxufVxyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZU1DYXRlZ29yeSA9IChzbHVnLCB0b2tlbikgPT4ge1xyXG4gICAgcmV0dXJuIGZldGNoKGAke0FQSX0vbW9iaWxlLWNhdGVnb3J5LyR7c2x1Z31gLCB7XHJcbiAgICAgICAgbWV0aG9kOiAnREVMRVRFJyxcclxuICAgICAgICBoZWFkZXJzOiB7XHJcbiAgICAgICAgICAgIEFjY2VwdDogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nLFxyXG4gICAgICAgICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBoYW5kbGVSZXNwb25zZShyZXNwb25zZSlcclxuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgICAgICB9KVxyXG4gICAgICAgIC5jYXRjaChlcnIgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVNQ2F0ZWdvcnkgPSAobUNhdGVnb3J5LCB0b2tlbiwgc2x1ZykgPT4ge1xyXG5cclxuXHJcbiAgICByZXR1cm4gZmV0Y2goYCR7QVBJfS9tb2JpbGUtY2F0ZWdvcnkvJHtzbHVnfWAsIHtcclxuICAgICAgICBtZXRob2Q6ICdQVVQnLFxyXG4gICAgICAgIGhlYWRlcnM6IHtcclxuICAgICAgICAgICAgQWNjZXB0OiAnYXBwbGljYXRpb24vanNvbicsXHJcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXHJcbiAgICAgICAgfSxcclxuICAgICAgICBib2R5OiBtQ2F0ZWdvcnlcclxuICAgIH0pXHJcbiAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xyXG4gICAgICAgICAgICBoYW5kbGVSZXNwb25zZShyZXNwb25zZSk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgfSlcclxuICAgICAgICAuY2F0Y2goZXJyID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59XHJcbiIsImltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy1mZXRjaFwiO1xyXG5pbXBvcnQgeyBBUEkgfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IGhhbmRsZVJlc3BvbnNlIH0gZnJvbSBcIi4vYXV0aC5hY3Rpb25cIjtcclxuaW1wb3J0IHF1ZXJ5U3RyaW5nIGZyb20gXCJxdWVyeS1zdHJpbmdcIjtcclxuXHJcbi8qKlxyXG4gKlxyXG4gKi9cclxuZXhwb3J0IGNvbnN0IGNyZWF0ZU5ld3MgPSAobmV3cywgdG9rZW4pID0+IHtcclxuICByZXR1cm4gZmV0Y2goYCR7QVBJfS9uZXdzYCwge1xyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICB9LFxyXG4gICAgYm9keTogbmV3cyxcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbmV3c0xpc3RQcml2YXRlID0gKCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L25ld3MtcHJpdmF0ZS1yb290YCwge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbmV3c0xpc3RQdWJsaWMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKGAke0FQSX0vbmV3cy1wdWJsaWMtcm9vdGAsIHtcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG5ld3NMaXN0UHVibGljTGltaXRGaXJzdFNlY3Rpb24gPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKGAke0FQSX0vbmV3cy1wdWJsaWMtbGltaXQtZmlyc3Qtc2VjdGlvbmAsIHtcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG5ld3NMaXN0UHVibGljTGltaXRTZWNvbmRTZWN0aW9uID0gKCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L25ld3MtcHVibGljLWxpbWl0LXNlY29uZC1zZWN0aW9uYCwge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbmV3c0xpc3RQdWJsaWNMaW1pdEZpbmFsU2VjdGlvbiA9IChza2lwLGxpbWl0KSA9PiB7XHJcbiAgY29uc3QgZGF0YSA9IHtza2lwLGxpbWl0fVxyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L25ld3MtcHVibGljLWxpbWl0LWZpbmFsLXNlY3Rpb25gLCB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBY2NlcHQ6ICdhcHBsaWNhdGlvbi9qc29uJyxcclxuICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xyXG4gICAgfSxcclxuICAgIGJvZHk6SlNPTi5zdHJpbmdpZnkoZGF0YSlcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5leHBvcnQgY29uc3QgbmV3c1B1YmxpY0xhdGVzdCA9ICgpID0+IHtcclxuICByZXR1cm4gZmV0Y2goYCR7QVBJfS9uZXdzLXB1YmxpYy1sYXRlc3RgLCB7XHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBuZXdzUHVibGljU2Vjb25kTGF0ZXN0ID0gKCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L25ld3MtcHVibGljLXNlY29uZC1sYXRlc3RgLCB7XHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuZXhwb3J0IGNvbnN0IG5ld3NMaXN0UHVibGljVG9wU3RvcmllcyA9IChibG9nKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKGAke0FQSX0vbmV3c1RvcFN0b3JpZXNgLCB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShibG9nKSxcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG5ld3NMaXN0UHVibGljTW9iaWxlUmV2aWV3cyA9ICgpID0+IHtcclxuICByZXR1cm4gZmV0Y2goYCR7QVBJfS9uZXdzLW1vYmlsZS1yZXZpZXdzYCwge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbmV3c0xpc3RNb2RlcmF0b3JQcml2YXRlID0gKGlkKSA9PiB7XHJcbiAgLy9jb25zb2xlLmxvZygnZnJvbSBhY3Rpb24gJywgaWQpO1xyXG5cclxuICByZXR1cm4gZmV0Y2goYCR7QVBJfS9uZXdzL21vZGVyYXRvci1wcml2YXRlLyR7aWR9YCwge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbmV3c0xpc3RNb2RlcmF0b3JQdWJsaWMgPSAoaWQpID0+IHtcclxuICAvL2NvbnNvbGUubG9nKCdmcm9tIGFjdGlvbiAnLCBpZCk7XHJcblxyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L25ld3MvbW9kZXJhdG9yLXB1YmxpYy8ke2lkfWAsIHtcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHNpbmdsZU5ld3MgPSAoc2x1ZykgPT4ge1xyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L25ld3MvJHtzbHVnfWAsIHtcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3RSZWxhdGVkID0gKGJsb2cpID0+IHtcclxuICByZXR1cm4gZmV0Y2goYCR7QVBJfS9uZXdzL3JlbGF0ZWRgLCB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShibG9nKSxcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3RSZWxhdGVkUmV2aWV3cyA9IChibG9nKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKGAke0FQSX0vbmV3cy9yZXZpZXdzLXJlbGF0ZWRgLCB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShibG9nKSxcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3RSZWxhdGVkTW9iaWxlcyA9IChibG9nKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKGAke0FQSX0vbmV3cy9tb2JpbGVzLXJlbGF0ZWRgLCB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShibG9nKSxcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZU5ld3MgPSAoc2x1ZywgdG9rZW4pID0+IHtcclxuICByZXR1cm4gZmV0Y2goYCR7QVBJfS9uZXdzLyR7c2x1Z31gLCB7XHJcbiAgICBtZXRob2Q6IFwiREVMRVRFXCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgIH0sXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBoYW5kbGVSZXNwb25zZShyZXNwb25zZSk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVwZGF0ZU5ld3MgPSAobmV3cywgdG9rZW4sIHNsdWcpID0+IHtcclxuICByZXR1cm4gZmV0Y2goYCR7QVBJfS9uZXdzLyR7c2x1Z31gLCB7XHJcbiAgICBtZXRob2Q6IFwiUFVUXCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgfSxcclxuICAgIGJvZHk6IG5ld3MsXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBoYW5kbGVSZXNwb25zZShyZXNwb25zZSk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFwcHJvdmVOZXdzID0gKHNsdWcsIHRva2VuKSA9PiB7XHJcbiAgLy9jb25zb2xlLmxvZygnZnJvbSBhY3Rpb25zICA6ICcsIHNsdWcsIHRva2VuKTtcclxuXHJcbiAgcmV0dXJuIGZldGNoKGAke0FQSX0vbmV3cy9hcHByb3ZlLyR7c2x1Z31gLCB7XHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgfSxcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgdW5QdWJsaXNoTmV3cyA9IChzbHVnLCB0b2tlbikgPT4ge1xyXG4gIC8vY29uc29sZS5sb2coJ2Zyb20gYWN0aW9ucyAgOiAnLCBzbHVnLCB0b2tlbik7XHJcblxyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L25ld3MvdW4tcHVibGlzaC8ke3NsdWd9YCwge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgIH0sXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBoYW5kbGVSZXNwb25zZShyZXNwb25zZSk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3RTZWFyY2hBZG1pbiA9IChwYXJhbXMpID0+IHtcclxuICBjb25zb2xlLmxvZyhcInNlYXJjaCBwYXJhbXMgOiBcIiwgcGFyYW1zKTtcclxuXHJcbiAgbGV0IHF1ZXJ5ID0gcXVlcnlTdHJpbmcuc3RyaW5naWZ5KHBhcmFtcyk7XHJcblxyXG4gIGNvbnNvbGUubG9nKFwicXVlcnkgcGFyYW1zIDogXCIsIHBhcmFtcyk7XHJcblxyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L25ld3Mtc2VhcmNoL3NlYXJjaD8ke3F1ZXJ5fWAsIHtcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuLyoqY29tcGxldGVkICovXHJcbmV4cG9ydCBjb25zdCBsaXN0U2VhcmNoVXNlciA9IChwYXJhbXMpID0+IHtcclxuICBsZXQgcXVlcnkgPSBxdWVyeVN0cmluZy5zdHJpbmdpZnkocGFyYW1zKTtcclxuXHJcbiAgcmV0dXJuIGZldGNoKGAke0FQSX0vbmV3cy1zZWFyY2gtdXNlci9zZWFyY2g/JHtxdWVyeX1gLCB7XHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsaXN0U2VhcmNoTW9kZXJhdG9yID0gKHBhcmFtcykgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwic2VhcmNoIHBhcmFtcyA6IFwiLCBwYXJhbXMpO1xyXG5cclxuICBsZXQgcXVlcnkgPSBxdWVyeVN0cmluZy5zdHJpbmdpZnkocGFyYW1zKTtcclxuXHJcbiAgY29uc29sZS5sb2coXCJxdWVyeSBwYXJhbXMgOiBcIiwgcGFyYW1zKTtcclxuXHJcbiAgcmV0dXJuIGZldGNoKGAke0FQSX0vbmV3cy1zZWFyY2gtbW9kZXJhdG9yL3NlYXJjaD8ke3F1ZXJ5fWAsIHtcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG4iLCJpbXBvcnQgZmV0Y2ggZnJvbSBcImlzb21vcnBoaWMtZmV0Y2hcIjtcclxuaW1wb3J0IHsgQVBJIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBoYW5kbGVSZXNwb25zZSB9IGZyb20gXCIuL2F1dGguYWN0aW9uXCI7XHJcbmltcG9ydCBxdWVyeVN0cmluZyBmcm9tIFwicXVlcnktc3RyaW5nXCI7XHJcblxyXG5leHBvcnQgY29uc3QgY3JlYXRlUmV2aWV3ID0gKHJldmlldywgdG9rZW4pID0+IHtcclxuICByZXR1cm4gZmV0Y2goYCR7QVBJfS9yZXZpZXdgLCB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgIH0sXHJcbiAgICBib2R5OiByZXZpZXcsXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBoYW5kbGVSZXNwb25zZShyZXNwb25zZSk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJldmlld0xpc3RQcml2YXRlID0gKCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L3Jldmlld3MtcHJpdmF0ZS1yb290YCwge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmV2aWV3TGlzdFB1YmxpYyA9ICgpID0+IHtcclxuICByZXR1cm4gZmV0Y2goYCR7QVBJfS9yZXZpZXdzLXB1YmxpYy1yb290YCwge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmV2aWV3UHVibGljTGF0ZXN0ID0gKCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L3Jldmlldy1wdWJsaWMtbGF0ZXN0YCwge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcbmV4cG9ydCBjb25zdCByZXZpZXdQdWJsaWNTZWNvbmRMYXRlc3QgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKGAke0FQSX0vcmV2aWV3LXB1YmxpYy1zZWNvbmQtbGF0ZXN0YCwge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmV2aWV3UHVibGljRWlnaHRMYXRlc3QgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKGAke0FQSX0vcmV2aWV3LXB1YmxpYy1laWdodC1sYXRlc3RgLCB7XHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBuZXdzTGlzdFB1YmxpY1RvcFN0b3JpZXMgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKGAke0FQSX0vbmV3c1RvcFN0b3JpZXNgLCB7XHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZXZpZXdMaXN0UHVibGljTW9iaWxlTmV3cyA9ICgpID0+IHtcclxuICByZXR1cm4gZmV0Y2goYCR7QVBJfS9yZXZpZXdzLW5ld3MtbW9iaWxlYCwge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmV2aWV3TGlzdFB1YmxpY0xpbWl0ZWRTZWN0aW9uT25lID0gKCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L3Jldmlldy1wdWJsaWMtbGltaXRlZC1saXN0LXNlY3Rpb24tb25lYCwge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmV2aWV3TGlzdFB1YmxpY0xpbWl0ZWRTZWN0aW9uVHdvID0gKCkgPT4ge1xyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L3Jldmlldy1wdWJsaWMtbGltaXRlZC1saXN0LXNlY3Rpb24tdHdvYCwge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmV2aWV3TGlzdE1vZGVyYXRvclByaXZhdGUgPSAoaWQpID0+IHtcclxuICAvL2NvbnNvbGUubG9nKCdmcm9tIGFjdGlvbiAnLCBpZCk7XHJcblxyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L3Jldmlldy9tb2RlcmF0b3ItcHJpdmF0ZS8ke2lkfWAsIHtcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJldmlld0xpc3RNb2RlcmF0b3JQdWJsaWMgPSAoaWQpID0+IHtcclxuICAvL2NvbnNvbGUubG9nKCdmcm9tIGFjdGlvbiAnLCBpZCk7XHJcblxyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L3Jldmlldy9tb2RlcmF0b3ItcHVibGljLyR7aWR9YCwge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2luZ2xlUmV2aWV3ID0gKHNsdWcpID0+IHtcclxuICByZXR1cm4gZmV0Y2goYCR7QVBJfS9yZXZpZXcvJHtzbHVnfWAsIHtcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHJlbW92ZVJldmlldyA9IChzbHVnLCB0b2tlbikgPT4ge1xyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L3Jldmlldy8ke3NsdWd9YCwge1xyXG4gICAgbWV0aG9kOiBcIkRFTEVURVwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgQXV0aG9yaXphdGlvbjogYEJlYXJlciAke3Rva2VufWAsXHJcbiAgICB9LFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgaGFuZGxlUmVzcG9uc2UocmVzcG9uc2UpO1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCB1cGRhdGVSZXZpZXcgPSAocmV2aWV3LCB0b2tlbiwgc2x1ZykgPT4ge1xyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L3Jldmlldy8ke3NsdWd9YCwge1xyXG4gICAgbWV0aG9kOiBcIlBVVFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgIH0sXHJcbiAgICBib2R5OiByZXZpZXcsXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBoYW5kbGVSZXNwb25zZShyZXNwb25zZSk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGFwcHJvdmVSZXZpZXcgPSAoc2x1ZywgdG9rZW4pID0+IHtcclxuICAvL2NvbnNvbGUubG9nKCdmcm9tIGFjdGlvbnMgIDogJywgc2x1ZywgdG9rZW4pO1xyXG5cclxuICByZXR1cm4gZmV0Y2goYCR7QVBJfS9yZXZpZXcvYXBwcm92ZS8ke3NsdWd9YCwge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBBdXRob3JpemF0aW9uOiBgQmVhcmVyICR7dG9rZW59YCxcclxuICAgIH0sXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICBoYW5kbGVSZXNwb25zZShyZXNwb25zZSk7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IHVuUHVibGlzaFJldmlldyA9IChzbHVnLCB0b2tlbikgPT4ge1xyXG4gIC8vY29uc29sZS5sb2coJ2Zyb20gYWN0aW9ucyAgOiAnLCBzbHVnLCB0b2tlbik7XHJcblxyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L3Jldmlldy91bi1wdWJsaXNoLyR7c2x1Z31gLCB7XHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gLFxyXG4gICAgfSxcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIGhhbmRsZVJlc3BvbnNlKHJlc3BvbnNlKTtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGlzdFJlbGF0ZWQgPSAoYmxvZykgPT4ge1xyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L3Jldmlldy9yZWxhdGVkYCwge1xyXG4gICAgbWV0aG9kOiBcIlBPU1RcIixcclxuICAgIGhlYWRlcnM6IHtcclxuICAgICAgQWNjZXB0OiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgICAgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICB9LFxyXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoYmxvZyksXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsaXN0UmVsYXRlZE5ld3MgPSAoYmxvZykgPT4ge1xyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L3Jldmlldy9uZXdzLXJlbGF0ZWRgLCB7XHJcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxyXG4gICAgaGVhZGVyczoge1xyXG4gICAgICBBY2NlcHQ6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgICBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIixcclxuICAgIH0sXHJcbiAgICBib2R5OiBKU09OLnN0cmluZ2lmeShibG9nKSxcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IGxpc3RSZWxhdGVkTW9iaWxlcyA9IChibG9nKSA9PiB7XHJcbiAgcmV0dXJuIGZldGNoKGAke0FQSX0vcmV2aWV3L21vYmlsZXMtcmVsYXRlZGAsIHtcclxuICAgIG1ldGhvZDogXCJQT1NUXCIsXHJcbiAgICBoZWFkZXJzOiB7XHJcbiAgICAgIEFjY2VwdDogXCJhcHBsaWNhdGlvbi9qc29uXCIsXHJcbiAgICAgIFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiLFxyXG4gICAgfSxcclxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KGJsb2cpLFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgbGlzdFNlYXJjaEFkbWluID0gKHBhcmFtcykgPT4ge1xyXG4gIGxldCBxdWVyeSA9IHF1ZXJ5U3RyaW5nLnN0cmluZ2lmeShwYXJhbXMpO1xyXG5cclxuICByZXR1cm4gZmV0Y2goYCR7QVBJfS9yZXZpZXctc2VhcmNoL3NlYXJjaD8ke3F1ZXJ5fWAsIHtcclxuICAgIG1ldGhvZDogXCJHRVRcIixcclxuICB9KVxyXG4gICAgLnRoZW4oKHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XHJcbiAgICB9KVxyXG4gICAgLmNhdGNoKChlcnIpID0+IGNvbnNvbGUubG9nKGVycikpO1xyXG59O1xyXG5cclxuLyoqY29tcGxldGVkIGxpc3QgYWxsIHJldmlld3MgaXRlbSBpbiB1c2VyIGVuZCAqL1xyXG5leHBvcnQgY29uc3QgbGlzdFNlYXJjaFVzZXIgPSAocGFyYW1zKSA9PiB7XHJcbiAgbGV0IHF1ZXJ5ID0gcXVlcnlTdHJpbmcuc3RyaW5naWZ5KHBhcmFtcyk7XHJcblxyXG4gIHJldHVybiBmZXRjaChgJHtBUEl9L3Jldmlldy1zZWFyY2gtdXNlci9zZWFyY2g/JHtxdWVyeX1gLCB7XHJcbiAgICBtZXRob2Q6IFwiR0VUXCIsXHJcbiAgfSlcclxuICAgIC50aGVuKChyZXNwb25zZSkgPT4ge1xyXG4gICAgICByZXR1cm4gcmVzcG9uc2UuanNvbigpO1xyXG4gICAgfSlcclxuICAgIC5jYXRjaCgoZXJyKSA9PiBjb25zb2xlLmxvZyhlcnIpKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBsaXN0U2VhcmNoTW9kZXJhdG9yID0gKHBhcmFtcykgPT4ge1xyXG4gIGNvbnNvbGUubG9nKFwic2VhcmNoIHBhcmFtcyA6IFwiLCBwYXJhbXMpO1xyXG5cclxuICBsZXQgcXVlcnkgPSBxdWVyeVN0cmluZy5zdHJpbmdpZnkocGFyYW1zKTtcclxuXHJcbiAgY29uc29sZS5sb2coXCJxdWVyeSBwYXJhbXMgOiBcIiwgcGFyYW1zKTtcclxuXHJcbiAgcmV0dXJuIGZldGNoKGAke0FQSX0vcmV2aWV3LXNlYXJjaC1tb2RlcmF0b3Ivc2VhcmNoPyR7cXVlcnl9YCwge1xyXG4gICAgbWV0aG9kOiBcIkdFVFwiLFxyXG4gIH0pXHJcbiAgICAudGhlbigocmVzcG9uc2UpID0+IHtcclxuICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcclxuICAgIH0pXHJcbiAgICAuY2F0Y2goKGVycikgPT4gY29uc29sZS5sb2coZXJyKSk7XHJcbn07XHJcbiIsImltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQgeyBET01BSU4gfSBmcm9tIFwiLi4vY29uZmlnXCI7XHJcbmltcG9ydCB7IEZhRmFjZWJvb2tGIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCB7IEZhUGludGVyZXN0UCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5pbXBvcnQgeyBGYUluc3RhZ3JhbSB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xyXG5pbXBvcnQgeyBGYVlvdXR1YmUgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2Zvb3Rlci5tb2R1bGUuY3NzXCI7XHJcblxyXG5jb25zdCBGb290ZXJDb21wb25lbnQgPSAoKSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8c2NyaXB0IHNyYz1cImh0dHBzOi8va2l0LmZvbnRhd2Vzb21lLmNvbS9hMDc2ZDA1Mzk5LmpzXCI+PC9zY3JpcHQ+XHJcbiAgICAgICAgPC9IZWFkPlxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGZvb3RlciBzdHlsZT17eyBiYWNrZ3JvdW5kOiBcIiMyYzJjMmNcIiB9fSBjbGFzc05hbWU9XCJmb290ZXIgbXQtNVwiPlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAwLFxyXG4gICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IDAsXHJcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0OiAwLFxyXG4gICAgICAgICAgICBtYXJnaW5MZWZ0OiAwLFxyXG4gICAgICAgICAgICBtYXJnaW5Cb3R0b206IFwiMTBweFwiLFxyXG4gICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgIHRleHRBbGlnbjogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIsXHJcbiAgICAgICAgICB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicm93XCJcclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogMCxcclxuICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IDAsXHJcbiAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IDAsXHJcbiAgICAgICAgICAgICAgbWFyZ2luTGVmdDogMCxcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtM1wiIHN0eWxlPXt7IHRleHRBbGlnbjogXCJjZW50ZXJcIiB9fT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBhbHQ9XCJ0ZWNoYm90LmNvbVwiXHJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGN1cnNvcjogXCJwb2ludGVyXCIgfX1cclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nIGltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17YC9zdGF0aWMvaW1hZ2VzL2xvZ28ucG5nYH1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bjb2wtbWQtMyAke3N0eWxlcy5mb290ZXJfbGlzdF9pdGVtc31gfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyX2hlYWRlcnN9Pm1vYmlsZXM8L2gxPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICA8YT5zYW1zdW5nPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgPGE+YXBwbGU8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICA8YT5odWF3ZWk8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICA8YT54aWFvbWk8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICA8YT5vbmUgcGx1czwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgIDxhPnNvbnk8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICA8YT5ub2tpYTwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgIDxhPnZpZXcgYWxsPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9e2Bjb2wtbWQtMyAke3N0eWxlcy5mb290ZXJfbGlzdF9pdGVtc31gfVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8aDEgY2xhc3NOYW1lPXtzdHlsZXMuZm9vdGVyX2hlYWRlcnN9PnF1aWNrIGxpbmtzPC9oMT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgPGE+aG9tZTwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgIDxhPm5ld3M8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICA8YT5yZXZpZXdzPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgPGE+bW9iaWxlczwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgIDxhPnNpdGUgbWFwPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgPGE+YWJvdXQgdXM8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICA8YT5jb250YWN0IHVzPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPXtgY29sLW1kLTMgJHtzdHlsZXMuc29jaWFsX2ljb25zX2NsYXNzfWB9PlxyXG4gICAgICAgICAgICAgIDxoMSBjbGFzc05hbWU9e3N0eWxlcy5mb290ZXJfaGVhZGVyc30+Zm9sbG93IHVzIG9uPC9oMT5cclxuICAgICAgICAgICAgICA8dWxcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAwLFxyXG4gICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMCxcclxuICAgICAgICAgICAgICAgICAgcGFkZGluZ0JvdHRvbTogMCxcclxuICAgICAgICAgICAgICAgICAgbGlzdFN0eWxlOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxyXG4gICAgICAgICAgICAgICAgICBqdXN0aWZ5Q29udGVudDogXCJjZW50ZXJcIixcclxuICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8YSBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxGYUZhY2Vib29rRiBzaXplPVwiMnJlbVwiIGNvbG9yPVwiIzY2NlwiIC8+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPEZhSW5zdGFncmFtIHNpemU9XCIycmVtXCIgY29sb3I9XCIjNjY2XCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8RmFQaW50ZXJlc3RQIHNpemU9XCIycmVtXCIgY29sb3I9XCIjNjY2XCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgICAgICA8RmFZb3V0dWJlIHNpemU9XCIycmVtXCIgY29sb3I9XCIjNjY2XCIgLz5cclxuICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGhyIC8+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjMUUxRTFFXCIsXHJcbiAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgbWFyZ2luTGVmdDogXCJhdXRvXCIsXHJcbiAgICAgICAgICAgIG1hcmdpblJpZ2h0OiBcImF1dG9cIixcclxuICAgICAgICAgICAgcGFkZGluZ0xlZnQ6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMTBweFwiLFxyXG4gICAgICAgICAgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IGZsb2F0OiBcImxlZnRcIiB9fT5cclxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgY29sb3I6IFwiIzRlNGU0ZVwiIH19PlxyXG4gICAgICAgICAgICAgIEAgMjAyMCZuYnNwO3tcIiBcIn1cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgY29sb3I6IFwiIzRlNGU0ZVwiLCB0ZXh0RGVjb3JhdGlvbjogXCJ1bmRlcmxpbmVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgdGVjaGJvdC5jb21cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5jb3B5cmlnaHRfc2VjdGlvbn0gc3R5bGU9e3sgZmxvYXQ6IFwicmlnaHRcIiB9fT5cclxuICAgICAgICAgICAgPHAgc3R5bGU9e3sgbWFyZ2luTGVmdDogXCIyMHB4XCIsIG1hcmdpblJpZ2h0OiBcIjIwcHhcIiB9fT5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiI1wiPlxyXG4gICAgICAgICAgICAgICAgPGE+aG9tZTwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgIDxhPm5ld3M8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICA8YT5yZXZpZXdzPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAmbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgPGE+bW9iaWxlczwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgJm5ic3A7Jm5ic3A7XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9cIj5cclxuICAgICAgICAgICAgICAgIDxhPnNpdGUgbWFwPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAmbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgPGE+YWJvdXQgdXM8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICZuYnNwOyZuYnNwO1xyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XHJcbiAgICAgICAgICAgICAgICA8YT5jb250YWN0IHVzPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAmbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgPGE+dGVybXMgb2YgdXNlPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAmbmJzcDsmbmJzcDtcclxuICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPlxyXG4gICAgICAgICAgICAgICAgPGE+cHJpdmFjeSBwb2xpY3k8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L3A+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9mb290ZXI+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgRm9vdGVyQ29tcG9uZW50O1xyXG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5jb25zdCB7IFJGQ18yODIyIH0gPSByZXF1aXJlKFwibW9tZW50XCIpO1xyXG5cclxuLyoqXHJcbiAqIGNvbXBsZXRlZCFcclxuICovXHJcbmNvbnN0IGJhY2tEcm9wID0gKHByb3BzKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxSZWFjdC5GcmFnbWVudD5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxIZWFkPlxyXG4gICAgICAgICAgICAgICAgICAgIDxsaW5rXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlbD1cInN0eWxlc2hlZXRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPVwiL3N0YXRpYy9jc3MvSGVhZGVyLmNzc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgIDwvSGVhZD5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmFja2Ryb3BcIiBvbkNsaWNrPXtwcm9wcy5jbGlja30gLz5cclxuICAgICAgICA8L1JlYWN0LkZyYWdtZW50PlxyXG4gICAgKVxyXG59XHJcbmV4cG9ydCBkZWZhdWx0IGJhY2tEcm9wOyIsImltcG9ydCBIZWFkIGZyb20gJ25leHQvaGVhZCc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBzaWdub3V0LCBpc0F1dGggfSBmcm9tICcuLi8uLi9hY3Rpb25zL2F1dGguYWN0aW9uJztcclxuaW1wb3J0IE5Qcm9ncmVzcyBmcm9tICducHJvZ3Jlc3MnO1xyXG5pbXBvcnQgJy4uLy4uL25vZGVfbW9kdWxlcy9ucHJvZ3Jlc3MvbnByb2dyZXNzLmNzcyc7XHJcbmltcG9ydCB7XHJcbiAgICBDb2xsYXBzZSxcclxuICAgIE5hdmJhcixcclxuICAgIE5hdmJhclRvZ2dsZXIsXHJcbiAgICBOYXYsXHJcbiAgICBOYXZJdGVtLFxyXG4gICAgTmF2TGluayxcclxuICAgIFVuY29udHJvbGxlZERyb3Bkb3duLFxyXG4gICAgRHJvcGRvd25Ub2dnbGUsXHJcbiAgICBEcm9wZG93bk1lbnUsXHJcbiAgICBEcm9wZG93bkl0ZW1cclxufSBmcm9tICdyZWFjdHN0cmFwJztcclxuaW1wb3J0IHsgQVBQX05BTUUgfSBmcm9tICcuLi8uLi9jb25maWcnO1xyXG5pbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IFVzZXJIZWFkZXIgZnJvbSAnLi9Vc2VySGVhZGVyJztcclxuaW1wb3J0IFNpZGVEcmF3ZXIgZnJvbSAnLi9TaWRlRHJhd2VyJztcclxuaW1wb3J0IEJhY2tkcm9wIGZyb20gJy4vQmFja2Ryb3AnXHJcbmltcG9ydCBNb2JpbGVTZWFyY2ggZnJvbSAnLi9Nb2JpbGVTZWFyY2hCYXInO1xyXG5pbXBvcnQgTGFyZ2VTZWFyY2ggZnJvbSAnLi9MYXJnZVNjcmVlblNlYXJjaEJhcic7XHJcblxyXG4vKm5leHQganMgcHJvZHVjZSB0aGVzZSBmdW5jdGlvbnMuIGl0IGhlbHBzIHRvIGZ1bmN0aW9uIG5wcm9ncmVzcyBiYXIqL1xyXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZVN0YXJ0ID0gKHVybCkgPT4gTlByb2dyZXNzLnN0YXJ0KCk7XHJcblJvdXRlci5vblJvdXRlQ2hhbmdlQ29tcGxldGUgPSAodXJsKSA9PiBOUHJvZ3Jlc3MuZG9uZSgpO1xyXG5Sb3V0ZXIub25Sb3V0ZUNoYW5nZUVycm9yID0gKHVybCkgPT4gTlByb2dyZXNzLmRvbmUoKTtcclxuXHJcbi8qKlxyXG4gKiBjb21wbGV0ZWQhXHJcbiAqL1xyXG5jb25zdCBIZWFkZXJDb21wb25lbnQgPSAoKSA9PiB7XHJcblxyXG4gICAgY29uc3QgW2lzT3Blbiwgc2V0SXNPcGVuXSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuXHJcbiAgICBjb25zdCB0b2dnbGUgPSAoKSA9PiBzZXRJc09wZW4oIWlzT3Blbik7XHJcblxyXG4gICAgY29uc3QgYWRtaW5QYW5lbEhlYWRlciA9ICgpID0+IHtcclxuICAgICAgICByZXR1cm4gKFxyXG4gICAgICAgICAgICA8TmF2YmFyIGNvbG9yPVwiZGFya1wiIGRhcmsgZXhwYW5kPVwibWRcIj5cclxuICAgICAgICAgICAgICAgIHtpc0F1dGgoKSAmJiBpc0F1dGgoKS5yb2xlID09PSAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FkbWluLXBhbmVsL21vZGVyYXRvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBzdHlsZT17eyBjb2xvcjogJ3doaXRlJyB9fSBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkXCI+e0FQUF9OQU1FfTwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgIHtpc0F1dGgoKSAmJiBpc0F1dGgoKS5yb2xlID09PSAxICYmIChcclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FkbWluLXBhbmVsL3Jvb3QtYWRtaW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgc3R5bGU9e3sgY29sb3I6ICd3aGl0ZScgfX0gY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZFwiPntBUFBfTkFNRX08L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgKX1cclxuXHJcblxyXG4gICAgICAgICAgICAgICAgPE5hdmJhclRvZ2dsZXIgb25DbGljaz17dG9nZ2xlfSAvPlxyXG4gICAgICAgICAgICAgICAgPENvbGxhcHNlIGlzT3Blbj17aXNPcGVufSBuYXZiYXI+XHJcbiAgICAgICAgICAgICAgICAgICAgPE5hdiBjbGFzc05hbWU9XCJtci1hdXRvXCIgbmF2YmFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7aXNBdXRoKCkucm9sZSA9PT0gMSA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FkbWluLXBhbmVsL3Jvb3QtYWRtaW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0+SG9tZTwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL2FkbWluLXBhbmVsL21vZGVyYXRvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fT5Ib21lPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8VW5jb250cm9sbGVkRHJvcGRvd24gbmF2IGluTmF2YmFyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duVG9nZ2xlIG5hdiBjYXJldCBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBOZXcgY29udGVudFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93blRvZ2dsZT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bk1lbnUgcmlnaHQ+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPERyb3Bkb3duSXRlbSBocmVmPVwiL2FkbWluLXBhbmVsL2NydWQvbmV3LW5ld3NcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgTmV3c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxEcm9wZG93bkl0ZW0gaHJlZj1cIi9hZG1pbi1wYW5lbC9jcnVkL25ldy1yZXZpZXdcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUmV2ZWl3c1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvRHJvcGRvd25JdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9Ecm9wZG93bk1lbnU+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvVW5jb250cm9sbGVkRHJvcGRvd24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpc0F1dGgoKSAmJiBpc0F1dGgoKS5yb2xlID09PSAxICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWRtaW4tcGFuZWwvcm9vdC1hZG1pbi9jcnVkL21vYmlsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fT5OZXcgbW9iaWxlIHBob25lPC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAge2lzQXV0aCgpICYmIGlzQXV0aCgpLnJvbGUgPT09IDEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hZG1pbi1wYW5lbC91c2VyLXNpZ251cFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fT5OZXcgdXNlcjwvTmF2TGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpc0F1dGgoKSAmJiBpc0F1dGgoKS5yb2xlID09PSAwICYmIChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWRtaW4tcGFuZWwvbW9kZXJhdG9yL2xpc3QtYWxsLXBvc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0+TWFuYWdlIHBvc3Q8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2lzQXV0aCgpICYmIGlzQXV0aCgpLnJvbGUgPT09IDEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hZG1pbi1wYW5lbC9yb290LWFkbWluL2xpc3QtYWxsLXBvc3RcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0+TWFuYWdlIHBvc3Q8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxOYXYgY2xhc3NOYW1lPVwibWwtYXV0b1wiIG5hdmJhcj5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2lzQXV0aCgpICYmIGlzQXV0aCgpLnJvbGUgPT09IDAgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hZG1pbi1wYW5lbC9tb2RlcmF0b3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkxpbmsgc3R5bGU9e3sgY3Vyc29yOiAncG9pbnRlcicgfX0+e2Ake2lzQXV0aCgpLm5hbWV9J3MgZGFzaGJvYXJkYH08L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9OYXZJdGVtPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAge2lzQXV0aCgpICYmIGlzQXV0aCgpLnJvbGUgPT09IDEgJiYgKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPE5hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9hZG1pbi1wYW5lbC9yb290LWFkbWluXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxOYXZMaW5rIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19PntgJHtpc0F1dGgoKS5uYW1lfSdzIGRhc2hib2FyZGB9PC9OYXZMaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvTmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtpc0F1dGgoKSAmJiAoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2SXRlbT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TmF2TGluayBzdHlsZT17eyBjdXJzb3I6ICdwb2ludGVyJyB9fSBvbkNsaWNrPXsoKSA9PiBzaWdub3V0KCgpID0+IFJvdXRlci5yZXBsYWNlKCcvYWRtaW4tcGFuZWwvdXNlci1zaWduaW4nKSl9PlNpZ25vdXQ8L05hdkxpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L05hdkl0ZW0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICl9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIDwvTmF2PlxyXG4gICAgICAgICAgICAgICAgPC9Db2xsYXBzZT5cclxuICAgICAgICAgICAgPC9OYXZiYXI+XHJcbiAgICAgICAgKVxyXG4gICAgfVxyXG5cclxuICAgIC8qKm1vYmlsZSBzZWFyY2ggYnV0dG9uLHNpZGUgZHJhd2VyIG9wZW4gYW5kIGxhcmdlIHNjcmVlbiBzZWFyY2ggYnV0dG9uIGluaXRpYXRlIHN0YXRlcyAqL1xyXG4gICAgY29uc3QgW3NpZGVEcmF3ZXJPcGVuLCBzZXRTaWRlRHJhd2VyT3Blbl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcbiAgICBjb25zdCBbbW9iaWxlU2VhcmNoQnRuLCBzZXRNb2JpbGVTZWFyY2hCdG5dID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gICAgY29uc3QgW2xhcmdlU2NyZWVuU2VhcmNoQnRuLCBzZXRMYXJnZVNjcmVlblNlYXJjaEJ0bl0gPSB1c2VTdGF0ZShmYWxzZSk7XHJcblxyXG4gICAgLyoqc2lkZSBkcmF3ZXIgb3BlbiBjbG9zZSB0b2dnbGVyIGZ1bmN0aW9uICovXHJcbiAgICBjb25zdCBkcmF3ZXJUb2dnbGVDbGlja0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U2lkZURyYXdlck9wZW4oKHByZXZTdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgc2lkZURyYXdlck9wZW46ICFwcmV2U3RhdGUuc2lkZURyYXdlck9wZW5cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgIC8qKm1vYmlsZSBzZWFyY2ggYmFyIG9wZW4gdG9nZ2xlciBmdW5jdGlvbiAqL1xyXG4gICAgY29uc3QgbW9iaWxlU2VhcmNoVG9nZ2xlQ2xpY2tIYW5kbGVyID0gKCkgPT4ge1xyXG4gICAgICAgIHNldE1vYmlsZVNlYXJjaEJ0bigocHJldlN0YXRlKSA9PiB7XHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBtb2JpbGVTZWFyY2hCdG46ICFwcmV2U3RhdGUubW9iaWxlU2VhcmNoQnRuXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuXHJcbiAgICAgICAgLyoqbW9iaWxlIHNlYXJjaCBiYXIgY2xvc2UgdG9nZ2xlciBmdW5jdGlvbiAqL1xyXG4gICAgY29uc3QgbW9iaWxlU2VhcmNoVG9nZ2xlQ2xpY2tDbG9zZSA9ICgpID0+IHtcclxuICAgICAgICBzZXRNb2JpbGVTZWFyY2hCdG4oZmFsc2UpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8qKmxhcmdlIHNjcmVlbiBzZWFyY2ggYmFyIG9wZW4gdG9nZ2xlciBmdW5jdGlvbiAqL1xyXG4gICAgY29uc3QgbGFyZ2VTY3JlZW5TZWFyY2hUb2dnbGVDbGlja0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0TGFyZ2VTY3JlZW5TZWFyY2hCdG4oKHByZXZTdGF0ZSkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgbGFyZ2VTY3JlZW5TZWFyY2hCdG46ICFwcmV2U3RhdGUubGFyZ2VTY3JlZW5TZWFyY2hCdG5cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9KVxyXG4gICAgfVxyXG5cclxuICAgICAgICAvKiptb2JpbGUgc2VhcmNoIGJhciBjbG9zZSB0b2dnbGVyIGZ1bmN0aW9uICovXHJcbiAgICBjb25zdCBsYXJnZVNjcmVlblNlYXJjaFRvZ2dsZUNsaWNrQ2xvc2UgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0TGFyZ2VTY3JlZW5TZWFyY2hCdG4oZmFsc2UpXHJcbiAgICB9XHJcblxyXG4gICAgLyoqYmFja2Ryb3AgY2xvc2UgdG9nZ2xlciBmdW5jdGlvbiAqL1xyXG4gICAgY29uc3QgYmFja2Ryb3BDbGlja0hhbmRsZXIgPSAoKSA9PiB7XHJcbiAgICAgICAgc2V0U2lkZURyYXdlck9wZW4oZmFsc2UpXHJcbiAgICB9XHJcblxyXG4gICAgbGV0IGJhY2tkcm9wVGVtcDtcclxuXHJcbiAgICAvKipjbG9zZSB0aGUgYmFja2Ryb3AgaWYgc2lkZSBkcmF3ZXIgb3BlbnMgKi9cclxuICAgIGlmIChzaWRlRHJhd2VyT3Blbikge1xyXG4gICAgICAgIGJhY2tkcm9wVGVtcCA9IDxCYWNrZHJvcCBjbGljaz17YmFja2Ryb3BDbGlja0hhbmRsZXJ9IC8+XHJcbiAgICB9XHJcblxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvc3RhdGljL2Nzcy9IZWFkZXIuY3NzXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICBpc0F1dGgoKSA/IGFkbWluUGFuZWxIZWFkZXIoKSA6IFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPFVzZXJIZWFkZXIgbGFyZ2VTY3JlZW5BY3RpdmVCdG49e2xhcmdlU2NyZWVuU2VhcmNoQnRufSBsYXJnZVNjcmVlbkNsb3NlRnVuY3Rpb249e2xhcmdlU2NyZWVuU2VhcmNoVG9nZ2xlQ2xpY2tDbG9zZX0gbGFyZ2VTY3JlZW5TZWFyY2hIYW5kbGVyPXtsYXJnZVNjcmVlblNlYXJjaFRvZ2dsZUNsaWNrSGFuZGxlcn0gY2xvc2VGdW5jdGlvbj17bW9iaWxlU2VhcmNoVG9nZ2xlQ2xpY2tDbG9zZX0gYnRuQWN0aXZlPXttb2JpbGVTZWFyY2hCdG59IG1vYmlsZVNlYXJjaEhhbmxkZXI9e21vYmlsZVNlYXJjaFRvZ2dsZUNsaWNrSGFuZGxlcn0gZHJhd2VyQ2xpY2tIYW5kbGVyPXtkcmF3ZXJUb2dnbGVDbGlja0hhbmRsZXJ9IC8+XHJcbiAgICAgICAgICAgICAgICA8U2lkZURyYXdlciBzaG93PXtzaWRlRHJhd2VyT3Blbn0gLz5cclxuICAgICAgICAgICAgICAgIHtiYWNrZHJvcFRlbXB9XHJcbiAgICAgICAgICAgICAgICA8TW9iaWxlU2VhcmNoIHNob3c9e21vYmlsZVNlYXJjaEJ0bn0gLz5cclxuICAgICAgICAgICAgICAgIDxMYXJnZVNlYXJjaCBzaG93PXtsYXJnZVNjcmVlblNlYXJjaEJ0bn0gLz5cclxuICAgICAgICAgICAgPC9kaXY+fVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IEhlYWRlckNvbXBvbmVudDsiLCJpbXBvcnQgUm91dGVyIGZyb20gJ25leHQvcm91dGVyJztcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tICdyZWFjdCc7XHJcblxyXG4vKipcclxuICogY29tcGxldGVkIVxyXG4gKi9cclxuY29uc3QgbW9iaWxlU2VhcmNoQnV0dG9uID0gKHByb3BzKSA9PiB7XHJcbiAgICBsZXQgZHJhd2VyQ2xhc3NlcyA9ICdsYXJnZV9fc2NyZWVuX19zZWFyY2gnO1xyXG5cclxuICAgIGlmIChwcm9wcy5zaG93KSB7XHJcbiAgICAgICAgZHJhd2VyQ2xhc3NlcyA9ICdsYXJnZV9fc2NyZWVuX19zZWFyY2ggb3Blbic7XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBzZWFyY2hLZXk6ICcnXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB7IHNlYXJjaEtleSB9ID0gdmFsdWVzO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWVzKHsgLi4udmFsdWVzLCBzZWFyY2hLZXk6IGUudGFyZ2V0LnZhbHVlIH0pXHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2xpY2tTdWJtaXQgPSAoZSkgPT4ge1xyXG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICBSb3V0ZXIucHVzaChgL3NlYXJjaC8ke3NlYXJjaEtleX1gKVxyXG4gICAgfTtcclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtkcmF3ZXJDbGFzc2VzfT5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2NsaWNrU3VibWl0fSBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnIH19ID5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2Q4ZDhkOCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6ICcwLjknLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICc1MHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzJjMmMyYycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnODAlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGVmdDogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiAnOHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyOiAnMC4xcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBib3JkZXJSYWRpdXM6ICcwcHggMHB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiAnMXB4IDBweCA3cHggcmdiYSgwLDAsMCwwLjUpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6ICcyMHB4J1xyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgb25DaGFuZ2U9e2hhbmRsZUNoYW5nZX1cclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZT17c2VhcmNoS2V5fVxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImZvcm0tY29udHJvbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggSGVyZS4uLlwiXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInNlYXJjaFwiXHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWQgLz5cclxuICAgICAgICAgICAgICAgIDxidXR0b25cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic3VibWl0XCJcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJidG5cIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6ICcxJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMHB4IDBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiAnMjAlJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiAnMXB4IDBweCA3cHggcmdiYSgwLDAsMCwwLjUpJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYmFja2dyb3VuZENvbG9yOiAnIzI0MjQyNCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbG9yOiAnI2Q4ZDhkOCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiAnc2VhcmNoIHRlY2tib3QuY29tJ1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB9fT5TZWFyY2g8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgKVxyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBtb2JpbGVTZWFyY2hCdXR0b247IiwiaW1wb3J0IFJvdXRlciBmcm9tICduZXh0L3JvdXRlcic7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuLyoqXHJcbiAqIGNvbXBsZXRlZCFcclxuICovXHJcbmNvbnN0IG1vYmlsZVNlYXJjaEJ1dHRvbiA9IChwcm9wcykgPT4ge1xyXG4gICAgbGV0IGRyYXdlckNsYXNzZXMgPSAnbW9iaWxlX19zZWFyY2gnO1xyXG5cclxuICAgIGlmIChwcm9wcy5zaG93KSB7XHJcbiAgICAgICAgZHJhd2VyQ2xhc3NlcyA9ICdtb2JpbGVfX3NlYXJjaCBvcGVuJztcclxuICAgIH1cclxuXHJcblxyXG4gICAgY29uc3QgW3ZhbHVlcywgc2V0VmFsdWVzXSA9IHVzZVN0YXRlKHtcclxuICAgICAgICBzZWFyY2hLZXk6ICcnXHJcbiAgICB9KTtcclxuXHJcbiAgICBjb25zdCB7IHNlYXJjaEtleSB9ID0gdmFsdWVzO1xyXG5cclxuICAgIGNvbnN0IGhhbmRsZUNoYW5nZSA9IChlKSA9PiB7XHJcbiAgICAgICAgc2V0VmFsdWVzKHsgc2VhcmNoS2V5OiBlLnRhcmdldC52YWx1ZSB9KVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsaWNrU3VibWl0ID0gKGUpID0+IHtcclxuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgUm91dGVyLnB1c2goYC9zZWFyY2hTLyR7c2VhcmNoS2V5fWApXHJcbiAgICB9O1xyXG5cclxuXHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtkcmF3ZXJDbGFzc2VzfT5cclxuICAgICAgICAgICAgPGZvcm0gb25TdWJtaXQ9e2NsaWNrU3VibWl0fSBzdHlsZT17eyB3aWR0aDogJzEwMCUnLCBkaXNwbGF5OiAnZmxleCcsIGZsZXhEaXJlY3Rpb246ICdyb3cnIH19ID5cclxuICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiAnMjBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogJzIwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNkOGQ4ZDgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAnMC45JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiAnNTBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMyYzJjMmMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzgwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxlZnQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZzogJzhweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlcjogJzAuMXB4JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgYm9yZGVyUmFkaXVzOiAnMHB4IDBweCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogJzFweCAwcHggN3B4IHJnYmEoMCwwLDAsMC41KScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRTaXplOiAnMjBweCdcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgIG9uQ2hhbmdlPXtoYW5kbGVDaGFuZ2V9XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU9e3NlYXJjaEtleX1cclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb3JtLWNvbnRyb2xcIlxyXG4gICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIEhlcmUuLi5cIlxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU9XCJzZWFyY2hcIlxyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiYnRuXCJcclxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBvcGFjaXR5OiAnMScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvcmRlclJhZGl1czogJzBweCAwcHgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogJzIwJScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogJzFweCAwcHggN3B4IHJnYmEoMCwwLDAsMC41KScsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogJyMyNDI0MjQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogJyNkOGQ4ZDgnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ3NlYXJjaCB0ZWNrYm90LmNvbSdcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfX0+U2VhcmNoPC9idXR0b24+XHJcblxyXG4gICAgICAgICAgICA8L2Zvcm0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IG1vYmlsZVNlYXJjaEJ1dHRvbjsiLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgeyBET01BSU4gfSBmcm9tICcuLi8uLi9jb25maWcnO1xyXG5pbXBvcnQgeyBGYUZhY2Vib29rRiB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuaW1wb3J0IHsgRmFQaW50ZXJlc3RQIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5pbXBvcnQgeyBGYUluc3RhZ3JhbSB9IGZyb20gJ3JlYWN0LWljb25zL2ZhJztcclxuaW1wb3J0IHsgRmFZb3V0dWJlIH0gZnJvbSAncmVhY3QtaWNvbnMvZmEnO1xyXG5cclxuXHJcbi8qKlxyXG4gKiBjb21wbGV0ZWQhXHJcbiAqL1xyXG5jb25zdCBzaWRlRHJhd2VyID0gKHByb3BzKSA9PiB7XHJcbiAgICBsZXQgZHJhd2VyQ2xhc3NlcyA9ICdzaWRlLWRyYXdlcic7XHJcblxyXG4gICAgaWYgKHByb3BzLnNob3cpIHtcclxuICAgICAgICBkcmF3ZXJDbGFzc2VzID0gJ3NpZGUtZHJhd2VyIG9wZW4nO1xyXG4gICAgfVxyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvc3RhdGljL2Nzcy9IZWFkZXIuY3NzXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9e2RyYXdlckNsYXNzZXN9PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nOiAwLCBtYXJnaW46IDAsdGV4dEFsaWduOidsZWZ0JyB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxpbWcgYWx0PVwidGVjaGJvdC5jb21cIiBzdHlsZT17eyBwYWRkaW5nOiAwLCBtYXJnaW46IDAsIGN1cnNvcjogJ3BvaW50ZXInLHRleHRBbGlnbjonY2VudGVyJyB9fSBjbGFzc05hbWU9XCJpbWcgaW1nLWZsdWlkXCIgc3JjPXtgJHtET01BSU59L3N0YXRpYy9pbWFnZXMvbG9nby5wbmdgfSAvPjwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aHIgc3R5bGU9e3sgYmFja2dyb3VuZENvbG9yOiAnd2hpdGUnIH19IC8+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxuYXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhPkhvbWU8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL25ld3NcIj48YT5OZXdzPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZXZpZXdzXCI+PGE+UmV2aWV3czwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcGhvbmVzXCI+PGE+TW9iaWxlIFBob25lczwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvYWJvdXRcIj48YT5BYm91dCBVczwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvY29udGFjdFwiPjxhPkNvbnRhY3QgVXM8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICA8L25hdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGhyIHN0eWxlPXt7IGJhY2tncm91bmRDb2xvcjogJ3doaXRlJyB9fSAvPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNpZGUtZHJhd2VyX19mb290ZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8dWwgc3R5bGU9e3sgcGFkZGluZ0xlZnQ6IDAsIHBhZGRpbmdSaWdodDogMCwgbWFyZ2luQm90dG9tOiAwLCBwYWRkaW5nQm90dG9tOiAwLCBsaXN0U3R5bGU6ICdub25lJywgdGV4dEFsaWduOiAnY2VudGVyJywganVzdGlmeUNvbnRlbnQ6ICdjZW50ZXInIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PEZhRmFjZWJvb2tGIHNpemU9JzJyZW0nIGNvbG9yPScjNjY2JyAvPjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PEZhSW5zdGFncmFtIHNpemU9JzJyZW0nIGNvbG9yPScjNjY2JyAvPjwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+PEZhUGludGVyZXN0UCBzaXplPScycmVtJyBjb2xvcj0nIzY2NicgLz48L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPjxGYVlvdXR1YmUgc2l6ZT0nMnJlbScgY29sb3I9JyM2NjYnIC8+PC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPG5hdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHVsPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCIjXCI+UHJpdmFjeSBQb2xpY3k8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiI1wiPlRlcm1zIG9mIFVzZTwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvbmF2PlxyXG4gICAgICAgICAgICAgICAgICAgIDxwPkNvcHlyaWdoIEAyMDIwJm5ic3A7PGEgaHJlZj1cIi9cIj5UZWNoYm90LmNvbTwvYT48L3A+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHNpZGVEcmF3ZXI7IiwiaW1wb3J0IHsgRE9NQUlOIH0gZnJvbSBcIi4uLy4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBGaVNlYXJjaCB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xyXG5pbXBvcnQgeyBNZENsb3NlIH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XHJcblxyXG4vKipcclxuICogY29tcGxldGVkIVxyXG4gKi9cclxuXHJcbmNvbnN0IGRyYXdlclRvZ2dsZUJ1dHRvbiA9IChwcm9wcykgPT4ge1xyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZ2dsZS1idXR0b25fX3dpdGgtc2VhcmNoXCI+XHJcbiAgICAgICAge3Byb3BzLmNsb3NlID8gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0b2dnbGUtYnV0dG9uX193aXRoLXNlYXJjaF9pY29uc1wiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLmNsb3NlRnVuY3Rpb259XHJcbiAgICAgICAgICAgIHRpdGxlPVwiY2FuY2VsXCJcclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPE1kQ2xvc2Ugc2l6ZT1cIjEuNXJlbVwiIGNvbG9yPVwiIzg1ODU4NVwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApIDogKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJ0b2dnbGUtYnV0dG9uX193aXRoLXNlYXJjaF9pY29uc1wiXHJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLm1vYmlsZX1cclxuICAgICAgICAgICAgdGl0bGU9XCJzZWFyY2ggdGVjaGJvdC5jb21cIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8RmlTZWFyY2ggc2l6ZT1cIjEuNXJlbVwiIGNvbG9yPVwiIzg1ODU4NVwiIC8+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICApfVxyXG5cclxuICAgICAgICA8YnV0dG9uXHJcbiAgICAgICAgICB0aXRsZT1cIk1lbnUgVG9nZ2xlIEJ1dHRvblwiXHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJ0b2dnbGUtYnV0dG9uXCJcclxuICAgICAgICAgIG9uQ2xpY2s9e3Byb3BzLmNsaWNrfVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9nZ2xlLWJvdHRvbl9fbGluZVwiIC8+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRvZ2dsZS1ib3R0b25fX2xpbmVcIiAvPlxyXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2dnbGUtYm90dG9uX19saW5lXCIgLz5cclxuICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZHJhd2VyVG9nZ2xlQnV0dG9uO1xyXG4iLCJpbXBvcnQgSGVhZCBmcm9tICduZXh0L2hlYWQnO1xyXG5pbXBvcnQgTGluayBmcm9tICduZXh0L2xpbmsnO1xyXG5pbXBvcnQgRHJhd2VyVG9nZ2xlQnV0dG9uIGZyb20gJy4vU2lkZURyYXdlckJ1dHRvbic7XHJcbmltcG9ydCB7IERPTUFJTiB9IGZyb20gJy4uLy4uL2NvbmZpZyc7XHJcbmltcG9ydCB7RmlTZWFyY2h9IGZyb20gJ3JlYWN0LWljb25zL2ZpJztcclxuaW1wb3J0IHtNZENsb3NlfSBmcm9tICdyZWFjdC1pY29ucy9tZCc7XHJcblxyXG4vKipcclxuICogY29tcGxldGVkISBcclxuICogKi9cclxuY29uc3QgdXNlck5hdmJhciA9IChwcm9wcykgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPGxpbmtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVsPVwic3R5bGVzaGVldFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9XCIvc3RhdGljL2Nzcy9IZWFkZXIuY3NzXCJcclxuICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPC9IZWFkPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGhlYWRlciBjbGFzc05hbWU9XCJ0b29sYmFyXCI+XHJcbiAgICAgICAgICAgICAgICA8bmF2IGNsYXNzTmFtZT1cInRvb2xiYXJfX25hdmlnYXRpb25cIj5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sYmFyX19sb2dvXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+PGltZyBhbHQ9XCJ0ZWNoYm90LmNvbVwiIHN0eWxlPXt7IGN1cnNvcjogJ3BvaW50ZXInIH19IGNsYXNzTmFtZT1cImltZyBpbWctZmx1aWRcIiBzcmM9e2Ake0RPTUFJTn0vc3RhdGljL2ltYWdlcy9sb2dvNi1lZGl0ZWQucG5nYH0gLz48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzcGFjZXJcIiAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidG9vbGJhcl9uYXZpZ2F0aW9uLWl0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDx1bD5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL1wiPjxhPkhvbWU8L2E+PC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9saT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxsaT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPVwiL25ld3NcIj48YT5OZXdzPC9hPjwvTGluaz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj1cIi9yZXZpZXdzXCI+PGE+UmV2aWV3czwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9XCIvcGhvbmVzXCI+PGE+TW9iaWxlIFBob25lczwvYT48L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sYmFyX19uYXZpZ2F0aW9uLXNlYXJjaC1pbWFnZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtwcm9wcy5sYXJnZVNjcmVlbkFjdGl2ZUJ0biA/XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b2dnbGUtYnV0dG9uX193aXRoLXNlYXJjaF9pY29uc1wiIG9uQ2xpY2s9e3Byb3BzLmxhcmdlU2NyZWVuQ2xvc2VGdW5jdGlvbn0gdGl0bGU9XCJjYW5jZWxcIj48TWRDbG9zZSBzaXplPScxLjVyZW0nIGNvbG9yPScjODU4NTg1JyAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDo8ZGl2IGNsYXNzTmFtZT1cInRvZ2dsZS1idXR0b25fX3dpdGgtc2VhcmNoX2ljb25zXCIgb25DbGljaz17cHJvcHMubGFyZ2VTY3JlZW5TZWFyY2hIYW5kbGVyfSB0aXRsZT1cInNlYXJjaCB0ZWNoYm90LmNvbVwiPjxGaVNlYXJjaCBzaXplPScxLjVyZW0nIGNvbG9yPScjODU4NTg1JyAvPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC91bD5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0b29sYmFyX190b2dnbGUtYnV0dG9uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxEcmF3ZXJUb2dnbGVCdXR0b24gY2xvc2VGdW5jdGlvbj17cHJvcHMuY2xvc2VGdW5jdGlvbn0gY2xvc2U9e3Byb3BzLmJ0bkFjdGl2ZX0gbW9iaWxlPXtwcm9wcy5tb2JpbGVTZWFyY2hIYW5sZGVyfSBjbGljaz17cHJvcHMuZHJhd2VyQ2xpY2tIYW5kbGVyfSAvPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9uYXY+XHJcbiAgICAgICAgICAgIDwvaGVhZGVyID5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIClcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgdXNlck5hdmJhcjsiLCJpbXBvcnQgSGVhZGVyQ29tcG9uZW50IGZyb20gXCIuL0hlYWRlckNvbXBvbmVudHMvSGVhZGVyXCI7XHJcbmltcG9ydCBGb290ZXJDb21wb25lbnQgZnJvbSBcIi4vRm9vdGVyXCI7XHJcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcclxuXHJcbi8qKnRoaXMgZmlsZSByZXByZXNlbnRzIGFsbCB0aGUgY2hpbGRzLlxyXG4gKiBjb21wbGV0ZWQhXHJcbiAqL1xyXG5jb25zdCBMYXlvdXQgPSAoeyBjaGlsZHJlbiB9KSA9PiB7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxkaXY+XHJcbiAgICAgICAgPEhlYWQ+XHJcbiAgICAgICAgICA8bWV0YVxyXG4gICAgICAgICAgICBuYW1lPVwidmlld3BvcnRcIlxyXG4gICAgICAgICAgICBjb250ZW50PVwid2lkdGg9ZGV2aWNlLXdpZHRoLCBpbml0aWFsLXNjYWxlPTEuMFwiXHJcbiAgICAgICAgICAvPlxyXG4gICAgICAgIDwvSGVhZD5cclxuICAgICAgICA8SGVhZGVyQ29tcG9uZW50IC8+XHJcbiAgICAgICAge2NoaWxkcmVufVxyXG4gICAgICAgIDxGb290ZXJDb21wb25lbnQgLz5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59O1xyXG5leHBvcnQgZGVmYXVsdCBMYXlvdXQ7XHJcbiIsImltcG9ydCBnZXRDb25maWcgZnJvbSBcIm5leHQvY29uZmlnXCI7XHJcbmNvbnN0IHsgcHVibGljUnVudGltZUNvbmZpZyB9ID0gZ2V0Q29uZmlnKCk7XHJcblxyXG5leHBvcnQgY29uc3QgQVBJID0gcHVibGljUnVudGltZUNvbmZpZy5QUk9EVUNUSU9OXHJcbiAgPyBwdWJsaWNSdW50aW1lQ29uZmlnLkFQSV9QUk9EVUNUSU9OXHJcbiAgOiBwdWJsaWNSdW50aW1lQ29uZmlnLkFQSV9ERVZFTE9QTUVOVDtcclxuXHJcbmV4cG9ydCBjb25zdCBBUFBfTkFNRSA9IHB1YmxpY1J1bnRpbWVDb25maWcuQVBQX05BTUU7XHJcblxyXG5leHBvcnQgY29uc3QgRE9NQUlOID0gcHVibGljUnVudGltZUNvbmZpZy5QUk9EVUNUSU9OXHJcbiAgPyBwdWJsaWNSdW50aW1lQ29uZmlnLkRPTUFJTl9QUk9EVUNUSU9OXHJcbiAgOiBwdWJsaWNSdW50aW1lQ29uZmlnLkRPTUFJTl9ERVZFTE9QTUVOVDtcclxuXHJcbmV4cG9ydCBjb25zdCBGQl9BUFBfSUQgPSBwdWJsaWNSdW50aW1lQ29uZmlnLkZCX0FQUF9JRDtcclxuXHJcbmV4cG9ydCBjb25zdCBESVNRVVNfU0hPUlROQU1FID0gcHVibGljUnVudGltZUNvbmZpZy5ESVNRVVNfU0hPUlROQU1FO1xyXG5cclxuZXhwb3J0IGNvbnN0IFRJTllNQ19BUFBfSUQgPSBwdWJsaWNSdW50aW1lQ29uZmlnLlRJTllNQ19BUFBfSUQ7XHJcbiIsImZ1bmN0aW9uIF9pbnRlcm9wUmVxdWlyZURlZmF1bHQob2JqKSB7XG4gIHJldHVybiBvYmogJiYgb2JqLl9fZXNNb2R1bGUgPyBvYmogOiB7XG4gICAgXCJkZWZhdWx0XCI6IG9ialxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IF9pbnRlcm9wUmVxdWlyZURlZmF1bHQ7IiwidmFyIF90eXBlb2YgPSByZXF1aXJlKFwiLi4vaGVscGVycy90eXBlb2ZcIik7XG5cbmZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgaWYgKHR5cGVvZiBXZWFrTWFwICE9PSBcImZ1bmN0aW9uXCIpIHJldHVybiBudWxsO1xuICB2YXIgY2FjaGUgPSBuZXcgV2Vha01hcCgpO1xuXG4gIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSA9IGZ1bmN0aW9uIF9nZXRSZXF1aXJlV2lsZGNhcmRDYWNoZSgpIHtcbiAgICByZXR1cm4gY2FjaGU7XG4gIH07XG5cbiAgcmV0dXJuIGNhY2hlO1xufVxuXG5mdW5jdGlvbiBfaW50ZXJvcFJlcXVpcmVXaWxkY2FyZChvYmopIHtcbiAgaWYgKG9iaiAmJiBvYmouX19lc01vZHVsZSkge1xuICAgIHJldHVybiBvYmo7XG4gIH1cblxuICBpZiAob2JqID09PSBudWxsIHx8IF90eXBlb2Yob2JqKSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2Ygb2JqICE9PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4ge1xuICAgICAgXCJkZWZhdWx0XCI6IG9ialxuICAgIH07XG4gIH1cblxuICB2YXIgY2FjaGUgPSBfZ2V0UmVxdWlyZVdpbGRjYXJkQ2FjaGUoKTtcblxuICBpZiAoY2FjaGUgJiYgY2FjaGUuaGFzKG9iaikpIHtcbiAgICByZXR1cm4gY2FjaGUuZ2V0KG9iaik7XG4gIH1cblxuICB2YXIgbmV3T2JqID0ge307XG4gIHZhciBoYXNQcm9wZXJ0eURlc2NyaXB0b3IgPSBPYmplY3QuZGVmaW5lUHJvcGVydHkgJiYgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcjtcblxuICBmb3IgKHZhciBrZXkgaW4gb2JqKSB7XG4gICAgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIGtleSkpIHtcbiAgICAgIHZhciBkZXNjID0gaGFzUHJvcGVydHlEZXNjcmlwdG9yID8gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihvYmosIGtleSkgOiBudWxsO1xuXG4gICAgICBpZiAoZGVzYyAmJiAoZGVzYy5nZXQgfHwgZGVzYy5zZXQpKSB7XG4gICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShuZXdPYmosIGtleSwgZGVzYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBuZXdPYmpba2V5XSA9IG9ialtrZXldO1xuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5ld09ialtcImRlZmF1bHRcIl0gPSBvYmo7XG5cbiAgaWYgKGNhY2hlKSB7XG4gICAgY2FjaGUuc2V0KG9iaiwgbmV3T2JqKTtcbiAgfVxuXG4gIHJldHVybiBuZXdPYmo7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gX2ludGVyb3BSZXF1aXJlV2lsZGNhcmQ7IiwiZnVuY3Rpb24gX3R5cGVvZihvYmopIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIGlmICh0eXBlb2YgU3ltYm9sID09PSBcImZ1bmN0aW9uXCIgJiYgdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA9PT0gXCJzeW1ib2xcIikge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgICB9O1xuICB9IGVsc2Uge1xuICAgIG1vZHVsZS5leHBvcnRzID0gX3R5cGVvZiA9IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gICAgICByZXR1cm4gb2JqICYmIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvYmouY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvYmogIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG9iajtcbiAgICB9O1xuICB9XG5cbiAgcmV0dXJuIF90eXBlb2Yob2JqKTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBfdHlwZW9mOyIsImltcG9ydCBSZWFjdCwgeyBDaGlsZHJlbiB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgYWRkQmFzZVBhdGgsXG4gIGFkZExvY2FsZSxcbiAgaXNMb2NhbFVSTCxcbiAgTmV4dFJvdXRlcixcbiAgUHJlZmV0Y2hPcHRpb25zLFxuICByZXNvbHZlSHJlZixcbn0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyB1c2VSb3V0ZXIgfSBmcm9tICcuL3JvdXRlcidcblxudHlwZSBVcmwgPSBzdHJpbmcgfCBVcmxPYmplY3RcbnR5cGUgUmVxdWlyZWRLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBuZXZlciA6IEtcbn1ba2V5b2YgVF1cbnR5cGUgT3B0aW9uYWxLZXlzPFQ+ID0ge1xuICBbSyBpbiBrZXlvZiBUXS0/OiB7fSBleHRlbmRzIFBpY2s8VCwgSz4gPyBLIDogbmV2ZXJcbn1ba2V5b2YgVF1cblxuZXhwb3J0IHR5cGUgTGlua1Byb3BzID0ge1xuICBocmVmOiBVcmxcbiAgYXM/OiBVcmxcbiAgcmVwbGFjZT86IGJvb2xlYW5cbiAgc2Nyb2xsPzogYm9vbGVhblxuICBzaGFsbG93PzogYm9vbGVhblxuICBwYXNzSHJlZj86IGJvb2xlYW5cbiAgcHJlZmV0Y2g/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG50eXBlIExpbmtQcm9wc1JlcXVpcmVkID0gUmVxdWlyZWRLZXlzPExpbmtQcm9wcz5cbnR5cGUgTGlua1Byb3BzT3B0aW9uYWwgPSBPcHRpb25hbEtleXM8TGlua1Byb3BzPlxuXG5sZXQgY2FjaGVkT2JzZXJ2ZXI6IEludGVyc2VjdGlvbk9ic2VydmVyXG5jb25zdCBsaXN0ZW5lcnMgPSBuZXcgTWFwPEVsZW1lbnQsICgpID0+IHZvaWQ+KClcbmNvbnN0IEludGVyc2VjdGlvbk9ic2VydmVyID1cbiAgdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgPyB3aW5kb3cuSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgOiBudWxsXG5jb25zdCBwcmVmZXRjaGVkOiB7IFtjYWNoZUtleTogc3RyaW5nXTogYm9vbGVhbiB9ID0ge31cblxuZnVuY3Rpb24gZ2V0T2JzZXJ2ZXIoKTogSW50ZXJzZWN0aW9uT2JzZXJ2ZXIgfCB1bmRlZmluZWQge1xuICAvLyBSZXR1cm4gc2hhcmVkIGluc3RhbmNlIG9mIEludGVyc2VjdGlvbk9ic2VydmVyIGlmIGFscmVhZHkgY3JlYXRlZFxuICBpZiAoY2FjaGVkT2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gY2FjaGVkT2JzZXJ2ZXJcbiAgfVxuXG4gIC8vIE9ubHkgY3JlYXRlIHNoYXJlZCBJbnRlcnNlY3Rpb25PYnNlcnZlciBpZiBzdXBwb3J0ZWQgaW4gYnJvd3NlclxuICBpZiAoIUludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgcmV0dXJuIHVuZGVmaW5lZFxuICB9XG5cbiAgcmV0dXJuIChjYWNoZWRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcihcbiAgICAoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICBpZiAoIWxpc3RlbmVycy5oYXMoZW50cnkudGFyZ2V0KSkge1xuICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG5cbiAgICAgICAgY29uc3QgY2IgPSBsaXN0ZW5lcnMuZ2V0KGVudHJ5LnRhcmdldCkhXG4gICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZyB8fCBlbnRyeS5pbnRlcnNlY3Rpb25SYXRpbyA+IDApIHtcbiAgICAgICAgICBjYWNoZWRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGxpc3RlbmVycy5kZWxldGUoZW50cnkudGFyZ2V0KVxuICAgICAgICAgIGNiKClcbiAgICAgICAgfVxuICAgICAgfSlcbiAgICB9LFxuICAgIHsgcm9vdE1hcmdpbjogJzIwMHB4JyB9XG4gICkpXG59XG5cbmNvbnN0IGxpc3RlblRvSW50ZXJzZWN0aW9ucyA9IChlbDogRWxlbWVudCwgY2I6ICgpID0+IHZvaWQpID0+IHtcbiAgY29uc3Qgb2JzZXJ2ZXIgPSBnZXRPYnNlcnZlcigpXG4gIGlmICghb2JzZXJ2ZXIpIHtcbiAgICByZXR1cm4gKCkgPT4ge31cbiAgfVxuXG4gIG9ic2VydmVyLm9ic2VydmUoZWwpXG4gIGxpc3RlbmVycy5zZXQoZWwsIGNiKVxuICByZXR1cm4gKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBvYnNlcnZlci51bm9ic2VydmUoZWwpXG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycilcbiAgICB9XG4gICAgbGlzdGVuZXJzLmRlbGV0ZShlbClcbiAgfVxufVxuXG5mdW5jdGlvbiBwcmVmZXRjaChcbiAgcm91dGVyOiBOZXh0Um91dGVyLFxuICBocmVmOiBzdHJpbmcsXG4gIGFzOiBzdHJpbmcsXG4gIG9wdGlvbnM/OiBQcmVmZXRjaE9wdGlvbnNcbik6IHZvaWQge1xuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHJldHVyblxuICBpZiAoIWlzTG9jYWxVUkwoaHJlZikpIHJldHVyblxuICAvLyBQcmVmZXRjaCB0aGUgSlNPTiBwYWdlIGlmIGFza2VkIChvbmx5IGluIHRoZSBjbGllbnQpXG4gIC8vIFdlIG5lZWQgdG8gaGFuZGxlIGEgcHJlZmV0Y2ggZXJyb3IgaGVyZSBzaW5jZSB3ZSBtYXkgYmVcbiAgLy8gbG9hZGluZyB3aXRoIHByaW9yaXR5IHdoaWNoIGNhbiByZWplY3QgYnV0IHdlIGRvbid0XG4gIC8vIHdhbnQgdG8gZm9yY2UgbmF2aWdhdGlvbiBzaW5jZSB0aGlzIGlzIG9ubHkgYSBwcmVmZXRjaFxuICByb3V0ZXIucHJlZmV0Y2goaHJlZiwgYXMsIG9wdGlvbnMpLmNhdGNoKChlcnIpID0+IHtcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgLy8gcmV0aHJvdyB0byBzaG93IGludmFsaWQgVVJMIGVycm9yc1xuICAgICAgdGhyb3cgZXJyXG4gICAgfVxuICB9KVxuICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc10gPSB0cnVlXG59XG5cbmZ1bmN0aW9uIGlzTW9kaWZpZWRFdmVudChldmVudDogUmVhY3QuTW91c2VFdmVudCkge1xuICBjb25zdCB7IHRhcmdldCB9ID0gZXZlbnQuY3VycmVudFRhcmdldCBhcyBIVE1MQW5jaG9yRWxlbWVudFxuICByZXR1cm4gKFxuICAgICh0YXJnZXQgJiYgdGFyZ2V0ICE9PSAnX3NlbGYnKSB8fFxuICAgIGV2ZW50Lm1ldGFLZXkgfHxcbiAgICBldmVudC5jdHJsS2V5IHx8XG4gICAgZXZlbnQuc2hpZnRLZXkgfHxcbiAgICBldmVudC5hbHRLZXkgfHwgLy8gdHJpZ2dlcnMgcmVzb3VyY2UgZG93bmxvYWRcbiAgICAoZXZlbnQubmF0aXZlRXZlbnQgJiYgZXZlbnQubmF0aXZlRXZlbnQud2hpY2ggPT09IDIpXG4gIClcbn1cblxuZnVuY3Rpb24gbGlua0NsaWNrZWQoXG4gIGU6IFJlYWN0Lk1vdXNlRXZlbnQsXG4gIHJvdXRlcjogTmV4dFJvdXRlcixcbiAgaHJlZjogc3RyaW5nLFxuICBhczogc3RyaW5nLFxuICByZXBsYWNlPzogYm9vbGVhbixcbiAgc2hhbGxvdz86IGJvb2xlYW4sXG4gIHNjcm9sbD86IGJvb2xlYW4sXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG4pOiB2b2lkIHtcbiAgY29uc3QgeyBub2RlTmFtZSB9ID0gZS5jdXJyZW50VGFyZ2V0XG5cbiAgaWYgKG5vZGVOYW1lID09PSAnQScgJiYgKGlzTW9kaWZpZWRFdmVudChlKSB8fCAhaXNMb2NhbFVSTChocmVmKSkpIHtcbiAgICAvLyBpZ25vcmUgY2xpY2sgZm9yIGJyb3dzZXLigJlzIGRlZmF1bHQgYmVoYXZpb3JcbiAgICByZXR1cm5cbiAgfVxuXG4gIGUucHJldmVudERlZmF1bHQoKVxuXG4gIC8vICBhdm9pZCBzY3JvbGwgZm9yIHVybHMgd2l0aCBhbmNob3IgcmVmc1xuICBpZiAoc2Nyb2xsID09IG51bGwpIHtcbiAgICBzY3JvbGwgPSBhcy5pbmRleE9mKCcjJykgPCAwXG4gIH1cblxuICAvLyByZXBsYWNlIHN0YXRlIGluc3RlYWQgb2YgcHVzaCBpZiBwcm9wIGlzIHByZXNlbnRcbiAgcm91dGVyW3JlcGxhY2UgPyAncmVwbGFjZScgOiAncHVzaCddKGhyZWYsIGFzLCB7IHNoYWxsb3csIGxvY2FsZSB9KS50aGVuKFxuICAgIChzdWNjZXNzOiBib29sZWFuKSA9PiB7XG4gICAgICBpZiAoIXN1Y2Nlc3MpIHJldHVyblxuICAgICAgaWYgKHNjcm9sbCkge1xuICAgICAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgMClcbiAgICAgICAgZG9jdW1lbnQuYm9keS5mb2N1cygpXG4gICAgICB9XG4gICAgfVxuICApXG59XG5cbmZ1bmN0aW9uIExpbmsocHJvcHM6IFJlYWN0LlByb3BzV2l0aENoaWxkcmVuPExpbmtQcm9wcz4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBmdW5jdGlvbiBjcmVhdGVQcm9wRXJyb3IoYXJnczoge1xuICAgICAga2V5OiBzdHJpbmdcbiAgICAgIGV4cGVjdGVkOiBzdHJpbmdcbiAgICAgIGFjdHVhbDogc3RyaW5nXG4gICAgfSkge1xuICAgICAgcmV0dXJuIG5ldyBFcnJvcihcbiAgICAgICAgYEZhaWxlZCBwcm9wIHR5cGU6IFRoZSBwcm9wIFxcYCR7YXJncy5rZXl9XFxgIGV4cGVjdHMgYSAke2FyZ3MuZXhwZWN0ZWR9IGluIFxcYDxMaW5rPlxcYCwgYnV0IGdvdCBcXGAke2FyZ3MuYWN0dWFsfVxcYCBpbnN0ZWFkLmAgK1xuICAgICAgICAgICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJ1xuICAgICAgICAgICAgPyBcIlxcbk9wZW4geW91ciBicm93c2VyJ3MgY29uc29sZSB0byB2aWV3IHRoZSBDb21wb25lbnQgc3RhY2sgdHJhY2UuXCJcbiAgICAgICAgICAgIDogJycpXG4gICAgICApXG4gICAgfVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCByZXF1aXJlZFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNSZXF1aXJlZCwgdHJ1ZT4gPSB7XG4gICAgICBocmVmOiB0cnVlLFxuICAgIH0gYXMgY29uc3RcbiAgICBjb25zdCByZXF1aXJlZFByb3BzOiBMaW5rUHJvcHNSZXF1aXJlZFtdID0gT2JqZWN0LmtleXMoXG4gICAgICByZXF1aXJlZFByb3BzR3VhcmRcbiAgICApIGFzIExpbmtQcm9wc1JlcXVpcmVkW11cbiAgICByZXF1aXJlZFByb3BzLmZvckVhY2goKGtleTogTGlua1Byb3BzUmVxdWlyZWQpID0+IHtcbiAgICAgIGlmIChrZXkgPT09ICdocmVmJykge1xuICAgICAgICBpZiAoXG4gICAgICAgICAgcHJvcHNba2V5XSA9PSBudWxsIHx8XG4gICAgICAgICAgKHR5cGVvZiBwcm9wc1trZXldICE9PSAnc3RyaW5nJyAmJiB0eXBlb2YgcHJvcHNba2V5XSAhPT0gJ29iamVjdCcpXG4gICAgICAgICkge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogcHJvcHNba2V5XSA9PT0gbnVsbCA/ICdudWxsJyA6IHR5cGVvZiBwcm9wc1trZXldLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVHlwZVNjcmlwdCB0cmljayBmb3IgdHlwZS1ndWFyZGluZzpcbiAgICBjb25zdCBvcHRpb25hbFByb3BzR3VhcmQ6IFJlY29yZDxMaW5rUHJvcHNPcHRpb25hbCwgdHJ1ZT4gPSB7XG4gICAgICBhczogdHJ1ZSxcbiAgICAgIHJlcGxhY2U6IHRydWUsXG4gICAgICBzY3JvbGw6IHRydWUsXG4gICAgICBzaGFsbG93OiB0cnVlLFxuICAgICAgcGFzc0hyZWY6IHRydWUsXG4gICAgICBwcmVmZXRjaDogdHJ1ZSxcbiAgICAgIGxvY2FsZTogdHJ1ZSxcbiAgICB9IGFzIGNvbnN0XG4gICAgY29uc3Qgb3B0aW9uYWxQcm9wczogTGlua1Byb3BzT3B0aW9uYWxbXSA9IE9iamVjdC5rZXlzKFxuICAgICAgb3B0aW9uYWxQcm9wc0d1YXJkXG4gICAgKSBhcyBMaW5rUHJvcHNPcHRpb25hbFtdXG4gICAgb3B0aW9uYWxQcm9wcy5mb3JFYWNoKChrZXk6IExpbmtQcm9wc09wdGlvbmFsKSA9PiB7XG4gICAgICBjb25zdCB2YWxUeXBlID0gdHlwZW9mIHByb3BzW2tleV1cblxuICAgICAgaWYgKGtleSA9PT0gJ2FzJykge1xuICAgICAgICBpZiAocHJvcHNba2V5XSAmJiB2YWxUeXBlICE9PSAnc3RyaW5nJyAmJiB2YWxUeXBlICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgIHRocm93IGNyZWF0ZVByb3BFcnJvcih7XG4gICAgICAgICAgICBrZXksXG4gICAgICAgICAgICBleHBlY3RlZDogJ2BzdHJpbmdgIG9yIGBvYmplY3RgJyxcbiAgICAgICAgICAgIGFjdHVhbDogdmFsVHlwZSxcbiAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGtleSA9PT0gJ2xvY2FsZScpIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gJiYgdmFsVHlwZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgc3RyaW5nYCcsXG4gICAgICAgICAgICBhY3R1YWw6IHZhbFR5cGUsXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChcbiAgICAgICAga2V5ID09PSAncmVwbGFjZScgfHxcbiAgICAgICAga2V5ID09PSAnc2Nyb2xsJyB8fFxuICAgICAgICBrZXkgPT09ICdzaGFsbG93JyB8fFxuICAgICAgICBrZXkgPT09ICdwYXNzSHJlZicgfHxcbiAgICAgICAga2V5ID09PSAncHJlZmV0Y2gnXG4gICAgICApIHtcbiAgICAgICAgaWYgKHByb3BzW2tleV0gIT0gbnVsbCAmJiB2YWxUeXBlICE9PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICB0aHJvdyBjcmVhdGVQcm9wRXJyb3Ioe1xuICAgICAgICAgICAga2V5LFxuICAgICAgICAgICAgZXhwZWN0ZWQ6ICdgYm9vbGVhbmAnLFxuICAgICAgICAgICAgYWN0dWFsOiB2YWxUeXBlLFxuICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIC8vIFR5cGVTY3JpcHQgdHJpY2sgZm9yIHR5cGUtZ3VhcmRpbmc6XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdW51c2VkLXZhcnNcbiAgICAgICAgY29uc3QgXzogbmV2ZXIgPSBrZXlcbiAgICAgIH1cbiAgICB9KVxuXG4gICAgLy8gVGhpcyBob29rIGlzIGluIGEgY29uZGl0aW9uYWwgYnV0IHRoYXQgaXMgb2sgYmVjYXVzZSBgcHJvY2Vzcy5lbnYuTk9ERV9FTlZgIG5ldmVyIGNoYW5nZXNcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcmVhY3QtaG9va3MvcnVsZXMtb2YtaG9va3NcbiAgICBjb25zdCBoYXNXYXJuZWQgPSBSZWFjdC51c2VSZWYoZmFsc2UpXG4gICAgaWYgKHByb3BzLnByZWZldGNoICYmICFoYXNXYXJuZWQuY3VycmVudCkge1xuICAgICAgaGFzV2FybmVkLmN1cnJlbnQgPSB0cnVlXG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICdOZXh0LmpzIGF1dG8tcHJlZmV0Y2hlcyBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIHZpZXdwb3J0LiBUaGUgcHJlZmV0Y2ggYXR0cmlidXRlIGlzIG5vIGxvbmdlciBuZWVkZWQuIE1vcmU6IGh0dHBzOi8vZXJyLnNoL3ZlcmNlbC9uZXh0LmpzL3ByZWZldGNoLXRydWUtZGVwcmVjYXRlZCdcbiAgICAgIClcbiAgICB9XG4gIH1cbiAgY29uc3QgcCA9IHByb3BzLnByZWZldGNoICE9PSBmYWxzZVxuXG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpXG4gIGNvbnN0IHBhdGhuYW1lID0gKHJvdXRlciAmJiByb3V0ZXIucGF0aG5hbWUpIHx8ICcvJ1xuXG4gIGNvbnN0IHsgaHJlZiwgYXMgfSA9IFJlYWN0LnVzZU1lbW8oKCkgPT4ge1xuICAgIGNvbnN0IFtyZXNvbHZlZEhyZWYsIHJlc29sdmVkQXNdID0gcmVzb2x2ZUhyZWYocGF0aG5hbWUsIHByb3BzLmhyZWYsIHRydWUpXG4gICAgcmV0dXJuIHtcbiAgICAgIGhyZWY6IHJlc29sdmVkSHJlZixcbiAgICAgIGFzOiBwcm9wcy5hc1xuICAgICAgICA/IHJlc29sdmVIcmVmKHBhdGhuYW1lLCBwcm9wcy5hcylcbiAgICAgICAgOiByZXNvbHZlZEFzIHx8IHJlc29sdmVkSHJlZixcbiAgICB9XG4gIH0sIFtwYXRobmFtZSwgcHJvcHMuaHJlZiwgcHJvcHMuYXNdKVxuXG4gIGxldCB7IGNoaWxkcmVuLCByZXBsYWNlLCBzaGFsbG93LCBzY3JvbGwsIGxvY2FsZSB9ID0gcHJvcHNcblxuICAvLyBEZXByZWNhdGVkLiBXYXJuaW5nIHNob3duIGJ5IHByb3BUeXBlIGNoZWNrLiBJZiB0aGUgY2hpbGRyZW4gcHJvdmlkZWQgaXMgYSBzdHJpbmcgKDxMaW5rPmV4YW1wbGU8L0xpbms+KSB3ZSB3cmFwIGl0IGluIGFuIDxhPiB0YWdcbiAgaWYgKHR5cGVvZiBjaGlsZHJlbiA9PT0gJ3N0cmluZycpIHtcbiAgICBjaGlsZHJlbiA9IDxhPntjaGlsZHJlbn08L2E+XG4gIH1cblxuICAvLyBUaGlzIHdpbGwgcmV0dXJuIHRoZSBmaXJzdCBjaGlsZCwgaWYgbXVsdGlwbGUgYXJlIHByb3ZpZGVkIGl0IHdpbGwgdGhyb3cgYW4gZXJyb3JcbiAgY29uc3QgY2hpbGQ6IGFueSA9IENoaWxkcmVuLm9ubHkoY2hpbGRyZW4pXG4gIGNvbnN0IGNoaWxkUmVmOiBhbnkgPSBjaGlsZCAmJiB0eXBlb2YgY2hpbGQgPT09ICdvYmplY3QnICYmIGNoaWxkLnJlZlxuXG4gIGNvbnN0IGNsZWFudXAgPSBSZWFjdC51c2VSZWY8KCkgPT4gdm9pZD4oKVxuICBjb25zdCBzZXRSZWYgPSBSZWFjdC51c2VDYWxsYmFjayhcbiAgICAoZWw6IEVsZW1lbnQpID0+IHtcbiAgICAgIC8vIGNsZWFudXAgcHJldmlvdXMgZXZlbnQgaGFuZGxlcnNcbiAgICAgIGlmIChjbGVhbnVwLmN1cnJlbnQpIHtcbiAgICAgICAgY2xlYW51cC5jdXJyZW50KClcbiAgICAgICAgY2xlYW51cC5jdXJyZW50ID0gdW5kZWZpbmVkXG4gICAgICB9XG5cbiAgICAgIGlmIChwICYmIEludGVyc2VjdGlvbk9ic2VydmVyICYmIGVsICYmIGVsLnRhZ05hbWUgJiYgaXNMb2NhbFVSTChocmVmKSkge1xuICAgICAgICAvLyBKb2luIG9uIGFuIGludmFsaWQgVVJJIGNoYXJhY3RlclxuICAgICAgICBjb25zdCBpc1ByZWZldGNoZWQgPSBwcmVmZXRjaGVkW2hyZWYgKyAnJScgKyBhc11cbiAgICAgICAgaWYgKCFpc1ByZWZldGNoZWQpIHtcbiAgICAgICAgICBjbGVhbnVwLmN1cnJlbnQgPSBsaXN0ZW5Ub0ludGVyc2VjdGlvbnMoZWwsICgpID0+IHtcbiAgICAgICAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHtcbiAgICAgICAgICAgICAgbG9jYWxlOlxuICAgICAgICAgICAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnXG4gICAgICAgICAgICAgICAgICA/IGxvY2FsZVxuICAgICAgICAgICAgICAgICAgOiByb3V0ZXIgJiYgcm91dGVyLmxvY2FsZSxcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoY2hpbGRSZWYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ2Z1bmN0aW9uJykgY2hpbGRSZWYoZWwpXG4gICAgICAgIGVsc2UgaWYgKHR5cGVvZiBjaGlsZFJlZiA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICBjaGlsZFJlZi5jdXJyZW50ID0gZWxcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgW3AsIGNoaWxkUmVmLCBocmVmLCBhcywgcm91dGVyLCBsb2NhbGVdXG4gIClcblxuICBjb25zdCBjaGlsZFByb3BzOiB7XG4gICAgb25Nb3VzZUVudGVyPzogUmVhY3QuTW91c2VFdmVudEhhbmRsZXJcbiAgICBvbkNsaWNrOiBSZWFjdC5Nb3VzZUV2ZW50SGFuZGxlclxuICAgIGhyZWY/OiBzdHJpbmdcbiAgICByZWY/OiBhbnlcbiAgfSA9IHtcbiAgICByZWY6IHNldFJlZixcbiAgICBvbkNsaWNrOiAoZTogUmVhY3QuTW91c2VFdmVudCkgPT4ge1xuICAgICAgaWYgKGNoaWxkLnByb3BzICYmIHR5cGVvZiBjaGlsZC5wcm9wcy5vbkNsaWNrID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGNoaWxkLnByb3BzLm9uQ2xpY2soZSlcbiAgICAgIH1cbiAgICAgIGlmICghZS5kZWZhdWx0UHJldmVudGVkKSB7XG4gICAgICAgIGxpbmtDbGlja2VkKGUsIHJvdXRlciwgaHJlZiwgYXMsIHJlcGxhY2UsIHNoYWxsb3csIHNjcm9sbCwgbG9jYWxlKVxuICAgICAgfVxuICAgIH0sXG4gIH1cblxuICBpZiAocCkge1xuICAgIGNoaWxkUHJvcHMub25Nb3VzZUVudGVyID0gKGU6IFJlYWN0Lk1vdXNlRXZlbnQpID0+IHtcbiAgICAgIGlmICghaXNMb2NhbFVSTChocmVmKSkgcmV0dXJuXG4gICAgICBpZiAoY2hpbGQucHJvcHMgJiYgdHlwZW9mIGNoaWxkLnByb3BzLm9uTW91c2VFbnRlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBjaGlsZC5wcm9wcy5vbk1vdXNlRW50ZXIoZSlcbiAgICAgIH1cbiAgICAgIHByZWZldGNoKHJvdXRlciwgaHJlZiwgYXMsIHsgcHJpb3JpdHk6IHRydWUgfSlcbiAgICB9XG4gIH1cblxuICAvLyBJZiBjaGlsZCBpcyBhbiA8YT4gdGFnIGFuZCBkb2Vzbid0IGhhdmUgYSBocmVmIGF0dHJpYnV0ZSwgb3IgaWYgdGhlICdwYXNzSHJlZicgcHJvcGVydHkgaXNcbiAgLy8gZGVmaW5lZCwgd2Ugc3BlY2lmeSB0aGUgY3VycmVudCAnaHJlZicsIHNvIHRoYXQgcmVwZXRpdGlvbiBpcyBub3QgbmVlZGVkIGJ5IHRoZSB1c2VyXG4gIGlmIChwcm9wcy5wYXNzSHJlZiB8fCAoY2hpbGQudHlwZSA9PT0gJ2EnICYmICEoJ2hyZWYnIGluIGNoaWxkLnByb3BzKSkpIHtcbiAgICBjaGlsZFByb3BzLmhyZWYgPSBhZGRCYXNlUGF0aChcbiAgICAgIGFkZExvY2FsZShcbiAgICAgICAgYXMsXG4gICAgICAgIHR5cGVvZiBsb2NhbGUgIT09ICd1bmRlZmluZWQnID8gbG9jYWxlIDogcm91dGVyICYmIHJvdXRlci5sb2NhbGUsXG4gICAgICAgIHJvdXRlciAmJiByb3V0ZXIuZGVmYXVsdExvY2FsZVxuICAgICAgKVxuICAgIClcbiAgfVxuXG4gIHJldHVybiBSZWFjdC5jbG9uZUVsZW1lbnQoY2hpbGQsIGNoaWxkUHJvcHMpXG59XG5cbmV4cG9ydCBkZWZhdWx0IExpbmtcbiIsIi8qKlxuICogUmVtb3ZlcyB0aGUgdHJhaWxpbmcgc2xhc2ggb2YgYSBwYXRoIGlmIHRoZXJlIGlzIG9uZS4gUHJlc2VydmVzIHRoZSByb290IHBhdGggYC9gLlxuICovXG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguZW5kc1dpdGgoJy8nKSAmJiBwYXRoICE9PSAnLycgPyBwYXRoLnNsaWNlKDAsIC0xKSA6IHBhdGhcbn1cblxuLyoqXG4gKiBOb3JtYWxpemVzIHRoZSB0cmFpbGluZyBzbGFzaCBvZiBhIHBhdGggYWNjb3JkaW5nIHRvIHRoZSBgdHJhaWxpbmdTbGFzaGAgb3B0aW9uXG4gKiBpbiBgbmV4dC5jb25maWcuanNgLlxuICovXG5leHBvcnQgY29uc3Qgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2ggPSBwcm9jZXNzLmVudi5fX05FWFRfVFJBSUxJTkdfU0xBU0hcbiAgPyAocGF0aDogc3RyaW5nKTogc3RyaW5nID0+IHtcbiAgICAgIGlmICgvXFwuW14vXStcXC8/JC8udGVzdChwYXRoKSkge1xuICAgICAgICByZXR1cm4gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aClcbiAgICAgIH0gZWxzZSBpZiAocGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBwYXRoXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcGF0aCArICcvJ1xuICAgICAgfVxuICAgIH1cbiAgOiByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaFxuIiwiLyogZ2xvYmFsIHdpbmRvdyAqL1xuaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0J1xuaW1wb3J0IFJvdXRlciwgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci9yb3V0ZXInXG5pbXBvcnQgeyBSb3V0ZXJDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3JvdXRlci1jb250ZXh0J1xuXG50eXBlIENsYXNzQXJndW1lbnRzPFQ+ID0gVCBleHRlbmRzIG5ldyAoLi4uYXJnczogaW5mZXIgVSkgPT4gYW55ID8gVSA6IGFueVxuXG50eXBlIFJvdXRlckFyZ3MgPSBDbGFzc0FyZ3VtZW50czx0eXBlb2YgUm91dGVyPlxuXG50eXBlIFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogUm91dGVyIHwgbnVsbFxuICByZWFkeUNhbGxiYWNrczogQXJyYXk8KCkgPT4gYW55PlxuICByZWFkeShjYjogKCkgPT4gYW55KTogdm9pZFxufVxuXG5leHBvcnQgeyBSb3V0ZXIsIE5leHRSb3V0ZXIgfVxuXG5leHBvcnQgdHlwZSBTaW5nbGV0b25Sb3V0ZXIgPSBTaW5nbGV0b25Sb3V0ZXJCYXNlICYgTmV4dFJvdXRlclxuXG5jb25zdCBzaW5nbGV0b25Sb3V0ZXI6IFNpbmdsZXRvblJvdXRlckJhc2UgPSB7XG4gIHJvdXRlcjogbnVsbCwgLy8gaG9sZHMgdGhlIGFjdHVhbCByb3V0ZXIgaW5zdGFuY2VcbiAgcmVhZHlDYWxsYmFja3M6IFtdLFxuICByZWFkeShjYjogKCkgPT4gdm9pZCkge1xuICAgIGlmICh0aGlzLnJvdXRlcikgcmV0dXJuIGNiKClcbiAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIHRoaXMucmVhZHlDYWxsYmFja3MucHVzaChjYilcbiAgICB9XG4gIH0sXG59XG5cbi8vIENyZWF0ZSBwdWJsaWMgcHJvcGVydGllcyBhbmQgbWV0aG9kcyBvZiB0aGUgcm91dGVyIGluIHRoZSBzaW5nbGV0b25Sb3V0ZXJcbmNvbnN0IHVybFByb3BlcnR5RmllbGRzID0gW1xuICAncGF0aG5hbWUnLFxuICAncm91dGUnLFxuICAncXVlcnknLFxuICAnYXNQYXRoJyxcbiAgJ2NvbXBvbmVudHMnLFxuICAnaXNGYWxsYmFjaycsXG4gICdiYXNlUGF0aCcsXG4gICdsb2NhbGUnLFxuICAnbG9jYWxlcycsXG4gICdkZWZhdWx0TG9jYWxlJyxcbl1cbmNvbnN0IHJvdXRlckV2ZW50cyA9IFtcbiAgJ3JvdXRlQ2hhbmdlU3RhcnQnLFxuICAnYmVmb3JlSGlzdG9yeUNoYW5nZScsXG4gICdyb3V0ZUNoYW5nZUNvbXBsZXRlJyxcbiAgJ3JvdXRlQ2hhbmdlRXJyb3InLFxuICAnaGFzaENoYW5nZVN0YXJ0JyxcbiAgJ2hhc2hDaGFuZ2VDb21wbGV0ZScsXG5dXG5jb25zdCBjb3JlTWV0aG9kRmllbGRzID0gW1xuICAncHVzaCcsXG4gICdyZXBsYWNlJyxcbiAgJ3JlbG9hZCcsXG4gICdiYWNrJyxcbiAgJ3ByZWZldGNoJyxcbiAgJ2JlZm9yZVBvcFN0YXRlJyxcbl1cblxuLy8gRXZlbnRzIGlzIGEgc3RhdGljIHByb3BlcnR5IG9uIHRoZSByb3V0ZXIsIHRoZSByb3V0ZXIgZG9lc24ndCBoYXZlIHRvIGJlIGluaXRpYWxpemVkIHRvIHVzZSBpdFxuT2JqZWN0LmRlZmluZVByb3BlcnR5KHNpbmdsZXRvblJvdXRlciwgJ2V2ZW50cycsIHtcbiAgZ2V0KCkge1xuICAgIHJldHVybiBSb3V0ZXIuZXZlbnRzXG4gIH0sXG59KVxuXG51cmxQcm9wZXJ0eUZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBIZXJlIHdlIG5lZWQgdG8gdXNlIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSBiZWNhdXNlLCB3ZSBuZWVkIHRvIHJldHVyblxuICAvLyB0aGUgcHJvcGVydHkgYXNzaWduZWQgdG8gdGhlIGFjdHVhbCByb3V0ZXJcbiAgLy8gVGhlIHZhbHVlIG1pZ2h0IGdldCBjaGFuZ2VkIGFzIHdlIGNoYW5nZSByb3V0ZXMgYW5kIHRoaXMgaXMgdGhlXG4gIC8vIHByb3BlciB3YXkgdG8gYWNjZXNzIGl0XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShzaW5nbGV0b25Sb3V0ZXIsIGZpZWxkLCB7XG4gICAgZ2V0KCkge1xuICAgICAgY29uc3Qgcm91dGVyID0gZ2V0Um91dGVyKCkgYXMgYW55XG4gICAgICByZXR1cm4gcm91dGVyW2ZpZWxkXSBhcyBzdHJpbmdcbiAgICB9LFxuICB9KVxufSlcblxuY29yZU1ldGhvZEZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAvLyBXZSBkb24ndCByZWFsbHkga25vdyB0aGUgdHlwZXMgaGVyZSwgc28gd2UgYWRkIHRoZW0gbGF0ZXIgaW5zdGVhZFxuICA7KHNpbmdsZXRvblJvdXRlciBhcyBhbnkpW2ZpZWxkXSA9ICguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGNvbnN0IHJvdXRlciA9IGdldFJvdXRlcigpIGFzIGFueVxuICAgIHJldHVybiByb3V0ZXJbZmllbGRdKC4uLmFyZ3MpXG4gIH1cbn0pXG5cbnJvdXRlckV2ZW50cy5mb3JFYWNoKChldmVudCkgPT4ge1xuICBzaW5nbGV0b25Sb3V0ZXIucmVhZHkoKCkgPT4ge1xuICAgIFJvdXRlci5ldmVudHMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICBjb25zdCBldmVudEZpZWxkID0gYG9uJHtldmVudC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKX0ke2V2ZW50LnN1YnN0cmluZyhcbiAgICAgICAgMVxuICAgICAgKX1gXG4gICAgICBjb25zdCBfc2luZ2xldG9uUm91dGVyID0gc2luZ2xldG9uUm91dGVyIGFzIGFueVxuICAgICAgaWYgKF9zaW5nbGV0b25Sb3V0ZXJbZXZlbnRGaWVsZF0pIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBfc2luZ2xldG9uUm91dGVyW2V2ZW50RmllbGRdKC4uLmFyZ3MpXG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEVycm9yIHdoZW4gcnVubmluZyB0aGUgUm91dGVyIGV2ZW50OiAke2V2ZW50RmllbGR9YClcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGAke2Vyci5tZXNzYWdlfVxcbiR7ZXJyLnN0YWNrfWApXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9KVxuICB9KVxufSlcblxuZnVuY3Rpb24gZ2V0Um91dGVyKCk6IFJvdXRlciB7XG4gIGlmICghc2luZ2xldG9uUm91dGVyLnJvdXRlcikge1xuICAgIGNvbnN0IG1lc3NhZ2UgPVxuICAgICAgJ05vIHJvdXRlciBpbnN0YW5jZSBmb3VuZC5cXG4nICtcbiAgICAgICdZb3Ugc2hvdWxkIG9ubHkgdXNlIFwibmV4dC9yb3V0ZXJcIiBpbnNpZGUgdGhlIGNsaWVudCBzaWRlIG9mIHlvdXIgYXBwLlxcbidcbiAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSlcbiAgfVxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBFeHBvcnQgdGhlIHNpbmdsZXRvblJvdXRlciBhbmQgdGhpcyBpcyB0aGUgcHVibGljIEFQSS5cbmV4cG9ydCBkZWZhdWx0IHNpbmdsZXRvblJvdXRlciBhcyBTaW5nbGV0b25Sb3V0ZXJcblxuLy8gUmVleHBvcnQgdGhlIHdpdGhSb3V0ZSBIT0NcbmV4cG9ydCB7IGRlZmF1bHQgYXMgd2l0aFJvdXRlciB9IGZyb20gJy4vd2l0aC1yb3V0ZXInXG5cbmV4cG9ydCBmdW5jdGlvbiB1c2VSb3V0ZXIoKTogTmV4dFJvdXRlciB7XG4gIHJldHVybiBSZWFjdC51c2VDb250ZXh0KFJvdXRlckNvbnRleHQpXG59XG5cbi8vIElOVEVSTkFMIEFQSVNcbi8vIC0tLS0tLS0tLS0tLS1cbi8vIChkbyBub3QgdXNlIGZvbGxvd2luZyBleHBvcnRzIGluc2lkZSB0aGUgYXBwKVxuXG4vLyBDcmVhdGUgYSByb3V0ZXIgYW5kIGFzc2lnbiBpdCBhcyB0aGUgc2luZ2xldG9uIGluc3RhbmNlLlxuLy8gVGhpcyBpcyB1c2VkIGluIGNsaWVudCBzaWRlIHdoZW4gd2UgYXJlIGluaXRpbGl6aW5nIHRoZSBhcHAuXG4vLyBUaGlzIHNob3VsZCAqKm5vdCoqIHVzZSBpbnNpZGUgdGhlIHNlcnZlci5cbmV4cG9ydCBjb25zdCBjcmVhdGVSb3V0ZXIgPSAoLi4uYXJnczogUm91dGVyQXJncyk6IFJvdXRlciA9PiB7XG4gIHNpbmdsZXRvblJvdXRlci5yb3V0ZXIgPSBuZXcgUm91dGVyKC4uLmFyZ3MpXG4gIHNpbmdsZXRvblJvdXRlci5yZWFkeUNhbGxiYWNrcy5mb3JFYWNoKChjYikgPT4gY2IoKSlcbiAgc2luZ2xldG9uUm91dGVyLnJlYWR5Q2FsbGJhY2tzID0gW11cblxuICByZXR1cm4gc2luZ2xldG9uUm91dGVyLnJvdXRlclxufVxuXG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gY3JlYXRlIHRoZSBgd2l0aFJvdXRlcmAgcm91dGVyIGluc3RhbmNlXG5leHBvcnQgZnVuY3Rpb24gbWFrZVB1YmxpY1JvdXRlckluc3RhbmNlKHJvdXRlcjogUm91dGVyKTogTmV4dFJvdXRlciB7XG4gIGNvbnN0IF9yb3V0ZXIgPSByb3V0ZXIgYXMgYW55XG4gIGNvbnN0IGluc3RhbmNlID0ge30gYXMgYW55XG5cbiAgZm9yIChjb25zdCBwcm9wZXJ0eSBvZiB1cmxQcm9wZXJ0eUZpZWxkcykge1xuICAgIGlmICh0eXBlb2YgX3JvdXRlcltwcm9wZXJ0eV0gPT09ICdvYmplY3QnKSB7XG4gICAgICBpbnN0YW5jZVtwcm9wZXJ0eV0gPSBPYmplY3QuYXNzaWduKFxuICAgICAgICBBcnJheS5pc0FycmF5KF9yb3V0ZXJbcHJvcGVydHldKSA/IFtdIDoge30sXG4gICAgICAgIF9yb3V0ZXJbcHJvcGVydHldXG4gICAgICApIC8vIG1ha2VzIHN1cmUgcXVlcnkgaXMgbm90IHN0YXRlZnVsXG4gICAgICBjb250aW51ZVxuICAgIH1cblxuICAgIGluc3RhbmNlW3Byb3BlcnR5XSA9IF9yb3V0ZXJbcHJvcGVydHldXG4gIH1cblxuICAvLyBFdmVudHMgaXMgYSBzdGF0aWMgcHJvcGVydHkgb24gdGhlIHJvdXRlciwgdGhlIHJvdXRlciBkb2Vzbid0IGhhdmUgdG8gYmUgaW5pdGlhbGl6ZWQgdG8gdXNlIGl0XG4gIGluc3RhbmNlLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICBjb3JlTWV0aG9kRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgaW5zdGFuY2VbZmllbGRdID0gKC4uLmFyZ3M6IGFueVtdKSA9PiB7XG4gICAgICByZXR1cm4gX3JvdXRlcltmaWVsZF0oLi4uYXJncylcbiAgICB9XG4gIH0pXG5cbiAgcmV0dXJuIGluc3RhbmNlXG59XG4iLCJpbXBvcnQgUmVhY3QgZnJvbSAncmVhY3QnXG5pbXBvcnQgeyBOZXh0Q29tcG9uZW50VHlwZSwgTmV4dFBhZ2VDb250ZXh0IH0gZnJvbSAnLi4vbmV4dC1zZXJ2ZXIvbGliL3V0aWxzJ1xuaW1wb3J0IHsgTmV4dFJvdXRlciwgdXNlUm91dGVyIH0gZnJvbSAnLi9yb3V0ZXInXG5cbmV4cG9ydCB0eXBlIFdpdGhSb3V0ZXJQcm9wcyA9IHtcbiAgcm91dGVyOiBOZXh0Um91dGVyXG59XG5cbmV4cG9ydCB0eXBlIEV4Y2x1ZGVSb3V0ZXJQcm9wczxQPiA9IFBpY2s8XG4gIFAsXG4gIEV4Y2x1ZGU8a2V5b2YgUCwga2V5b2YgV2l0aFJvdXRlclByb3BzPlxuPlxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB3aXRoUm91dGVyPFxuICBQIGV4dGVuZHMgV2l0aFJvdXRlclByb3BzLFxuICBDID0gTmV4dFBhZ2VDb250ZXh0XG4+KFxuICBDb21wb3NlZENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8QywgYW55LCBQPlxuKTogUmVhY3QuQ29tcG9uZW50VHlwZTxFeGNsdWRlUm91dGVyUHJvcHM8UD4+IHtcbiAgZnVuY3Rpb24gV2l0aFJvdXRlcldyYXBwZXIocHJvcHM6IGFueSkge1xuICAgIHJldHVybiA8Q29tcG9zZWRDb21wb25lbnQgcm91dGVyPXt1c2VSb3V0ZXIoKX0gey4uLnByb3BzfSAvPlxuICB9XG5cbiAgV2l0aFJvdXRlcldyYXBwZXIuZ2V0SW5pdGlhbFByb3BzID0gQ29tcG9zZWRDb21wb25lbnQuZ2V0SW5pdGlhbFByb3BzXG4gIC8vIFRoaXMgaXMgbmVlZGVkIHRvIGFsbG93IGNoZWNraW5nIGZvciBjdXN0b20gZ2V0SW5pdGlhbFByb3BzIGluIF9hcHBcbiAgOyhXaXRoUm91dGVyV3JhcHBlciBhcyBhbnkpLm9yaWdHZXRJbml0aWFsUHJvcHMgPSAoQ29tcG9zZWRDb21wb25lbnQgYXMgYW55KS5vcmlnR2V0SW5pdGlhbFByb3BzXG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgY29uc3QgbmFtZSA9XG4gICAgICBDb21wb3NlZENvbXBvbmVudC5kaXNwbGF5TmFtZSB8fCBDb21wb3NlZENvbXBvbmVudC5uYW1lIHx8ICdVbmtub3duJ1xuICAgIFdpdGhSb3V0ZXJXcmFwcGVyLmRpc3BsYXlOYW1lID0gYHdpdGhSb3V0ZXIoJHtuYW1lfSlgXG4gIH1cblxuICByZXR1cm4gV2l0aFJvdXRlcldyYXBwZXJcbn1cbiIsIlwidXNlIHN0cmljdFwiO1xuT2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqXG4gKiBUb2tlbml6ZSBpbnB1dCBzdHJpbmcuXG4gKi9cbmZ1bmN0aW9uIGxleGVyKHN0cikge1xuICAgIHZhciB0b2tlbnMgPSBbXTtcbiAgICB2YXIgaSA9IDA7XG4gICAgd2hpbGUgKGkgPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgIHZhciBjaGFyID0gc3RyW2ldO1xuICAgICAgICBpZiAoY2hhciA9PT0gXCIqXCIgfHwgY2hhciA9PT0gXCIrXCIgfHwgY2hhciA9PT0gXCI/XCIpIHtcbiAgICAgICAgICAgIHRva2Vucy5wdXNoKHsgdHlwZTogXCJNT0RJRklFUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNoYXIgPT09IFwiXFxcXFwiKSB7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRVNDQVBFRF9DSEFSXCIsIGluZGV4OiBpKyssIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIntcIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIk9QRU5cIiwgaW5kZXg6IGksIHZhbHVlOiBzdHJbaSsrXSB9KTtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIn1cIikge1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIkNMT1NFXCIsIGluZGV4OiBpLCB2YWx1ZTogc3RyW2krK10gfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2hhciA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgIHZhciBuYW1lID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICB3aGlsZSAoaiA8IHN0ci5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICB2YXIgY29kZSA9IHN0ci5jaGFyQ29kZUF0KGopO1xuICAgICAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICAvLyBgMC05YFxuICAgICAgICAgICAgICAgIChjb2RlID49IDQ4ICYmIGNvZGUgPD0gNTcpIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBBLVpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDY1ICYmIGNvZGUgPD0gOTApIHx8XG4gICAgICAgICAgICAgICAgICAgIC8vIGBhLXpgXG4gICAgICAgICAgICAgICAgICAgIChjb2RlID49IDk3ICYmIGNvZGUgPD0gMTIyKSB8fFxuICAgICAgICAgICAgICAgICAgICAvLyBgX2BcbiAgICAgICAgICAgICAgICAgICAgY29kZSA9PT0gOTUpIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZSArPSBzdHJbaisrXTtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFuYW1lKVxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJNaXNzaW5nIHBhcmFtZXRlciBuYW1lIGF0IFwiICsgaSk7XG4gICAgICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiTkFNRVwiLCBpbmRleDogaSwgdmFsdWU6IG5hbWUgfSk7XG4gICAgICAgICAgICBpID0gajtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjaGFyID09PSBcIihcIikge1xuICAgICAgICAgICAgdmFyIGNvdW50ID0gMTtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuID0gXCJcIjtcbiAgICAgICAgICAgIHZhciBqID0gaSArIDE7XG4gICAgICAgICAgICBpZiAoc3RyW2pdID09PSBcIj9cIikge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQYXR0ZXJuIGNhbm5vdCBzdGFydCB3aXRoIFxcXCI/XFxcIiBhdCBcIiArIGopO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgd2hpbGUgKGogPCBzdHIubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCJcXFxcXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXSArIHN0cltqKytdO1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHN0cltqXSA9PT0gXCIpXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY291bnQtLTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvdW50ID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIGlmIChzdHJbal0gPT09IFwiKFwiKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzdHJbaiArIDFdICE9PSBcIj9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhcHR1cmluZyBncm91cHMgYXJlIG5vdCBhbGxvd2VkIGF0IFwiICsgaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcGF0dGVybiArPSBzdHJbaisrXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjb3VudClcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiVW5iYWxhbmNlZCBwYXR0ZXJuIGF0IFwiICsgaSk7XG4gICAgICAgICAgICBpZiAoIXBhdHRlcm4pXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk1pc3NpbmcgcGF0dGVybiBhdCBcIiArIGkpO1xuICAgICAgICAgICAgdG9rZW5zLnB1c2goeyB0eXBlOiBcIlBBVFRFUk5cIiwgaW5kZXg6IGksIHZhbHVlOiBwYXR0ZXJuIH0pO1xuICAgICAgICAgICAgaSA9IGo7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiQ0hBUlwiLCBpbmRleDogaSwgdmFsdWU6IHN0cltpKytdIH0pO1xuICAgIH1cbiAgICB0b2tlbnMucHVzaCh7IHR5cGU6IFwiRU5EXCIsIGluZGV4OiBpLCB2YWx1ZTogXCJcIiB9KTtcbiAgICByZXR1cm4gdG9rZW5zO1xufVxuLyoqXG4gKiBQYXJzZSBhIHN0cmluZyBmb3IgdGhlIHJhdyB0b2tlbnMuXG4gKi9cbmZ1bmN0aW9uIHBhcnNlKHN0ciwgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHRva2VucyA9IGxleGVyKHN0cik7XG4gICAgdmFyIF9hID0gb3B0aW9ucy5wcmVmaXhlcywgcHJlZml4ZXMgPSBfYSA9PT0gdm9pZCAwID8gXCIuL1wiIDogX2E7XG4gICAgdmFyIGRlZmF1bHRQYXR0ZXJuID0gXCJbXlwiICsgZXNjYXBlU3RyaW5nKG9wdGlvbnMuZGVsaW1pdGVyIHx8IFwiLyM/XCIpICsgXCJdKz9cIjtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleSA9IDA7XG4gICAgdmFyIGkgPSAwO1xuICAgIHZhciBwYXRoID0gXCJcIjtcbiAgICB2YXIgdHJ5Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIGlmIChpIDwgdG9rZW5zLmxlbmd0aCAmJiB0b2tlbnNbaV0udHlwZSA9PT0gdHlwZSlcbiAgICAgICAgICAgIHJldHVybiB0b2tlbnNbaSsrXS52YWx1ZTtcbiAgICB9O1xuICAgIHZhciBtdXN0Q29uc3VtZSA9IGZ1bmN0aW9uICh0eXBlKSB7XG4gICAgICAgIHZhciB2YWx1ZSA9IHRyeUNvbnN1bWUodHlwZSk7XG4gICAgICAgIGlmICh2YWx1ZSAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB2YXIgX2EgPSB0b2tlbnNbaV0sIG5leHRUeXBlID0gX2EudHlwZSwgaW5kZXggPSBfYS5pbmRleDtcbiAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlVuZXhwZWN0ZWQgXCIgKyBuZXh0VHlwZSArIFwiIGF0IFwiICsgaW5kZXggKyBcIiwgZXhwZWN0ZWQgXCIgKyB0eXBlKTtcbiAgICB9O1xuICAgIHZhciBjb25zdW1lVGV4dCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHJlc3VsdCA9IFwiXCI7XG4gICAgICAgIHZhciB2YWx1ZTtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgIHdoaWxlICgodmFsdWUgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKSB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpKSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICB3aGlsZSAoaSA8IHRva2Vucy5sZW5ndGgpIHtcbiAgICAgICAgdmFyIGNoYXIgPSB0cnlDb25zdW1lKFwiQ0hBUlwiKTtcbiAgICAgICAgdmFyIG5hbWUgPSB0cnlDb25zdW1lKFwiTkFNRVwiKTtcbiAgICAgICAgdmFyIHBhdHRlcm4gPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKTtcbiAgICAgICAgaWYgKG5hbWUgfHwgcGF0dGVybikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNoYXIgfHwgXCJcIjtcbiAgICAgICAgICAgIGlmIChwcmVmaXhlcy5pbmRleE9mKHByZWZpeCkgPT09IC0xKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSBwcmVmaXg7XG4gICAgICAgICAgICAgICAgcHJlZml4ID0gXCJcIjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwYXRoKSB7XG4gICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICAgICAgcGF0aCA9IFwiXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXN1bHQucHVzaCh7XG4gICAgICAgICAgICAgICAgbmFtZTogbmFtZSB8fCBrZXkrKyxcbiAgICAgICAgICAgICAgICBwcmVmaXg6IHByZWZpeCxcbiAgICAgICAgICAgICAgICBzdWZmaXg6IFwiXCIsXG4gICAgICAgICAgICAgICAgcGF0dGVybjogcGF0dGVybiB8fCBkZWZhdWx0UGF0dGVybixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogdHJ5Q29uc3VtZShcIk1PRElGSUVSXCIpIHx8IFwiXCJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHZhbHVlID0gY2hhciB8fCB0cnlDb25zdW1lKFwiRVNDQVBFRF9DSEFSXCIpO1xuICAgICAgICBpZiAodmFsdWUpIHtcbiAgICAgICAgICAgIHBhdGggKz0gdmFsdWU7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocGF0aCkge1xuICAgICAgICAgICAgcmVzdWx0LnB1c2gocGF0aCk7XG4gICAgICAgICAgICBwYXRoID0gXCJcIjtcbiAgICAgICAgfVxuICAgICAgICB2YXIgb3BlbiA9IHRyeUNvbnN1bWUoXCJPUEVOXCIpO1xuICAgICAgICBpZiAob3Blbikge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICB2YXIgbmFtZV8xID0gdHJ5Q29uc3VtZShcIk5BTUVcIikgfHwgXCJcIjtcbiAgICAgICAgICAgIHZhciBwYXR0ZXJuXzEgPSB0cnlDb25zdW1lKFwiUEFUVEVSTlwiKSB8fCBcIlwiO1xuICAgICAgICAgICAgdmFyIHN1ZmZpeCA9IGNvbnN1bWVUZXh0KCk7XG4gICAgICAgICAgICBtdXN0Q29uc3VtZShcIkNMT1NFXCIpO1xuICAgICAgICAgICAgcmVzdWx0LnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IG5hbWVfMSB8fCAocGF0dGVybl8xID8ga2V5KysgOiBcIlwiKSxcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBuYW1lXzEgJiYgIXBhdHRlcm5fMSA/IGRlZmF1bHRQYXR0ZXJuIDogcGF0dGVybl8xLFxuICAgICAgICAgICAgICAgIHByZWZpeDogcHJlZml4LFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogc3VmZml4LFxuICAgICAgICAgICAgICAgIG1vZGlmaWVyOiB0cnlDb25zdW1lKFwiTU9ESUZJRVJcIikgfHwgXCJcIlxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgICAgICBtdXN0Q29uc3VtZShcIkVORFwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbn1cbmV4cG9ydHMucGFyc2UgPSBwYXJzZTtcbi8qKlxuICogQ29tcGlsZSBhIHN0cmluZyB0byBhIHRlbXBsYXRlIGZ1bmN0aW9uIGZvciB0aGUgcGF0aC5cbiAqL1xuZnVuY3Rpb24gY29tcGlsZShzdHIsIG9wdGlvbnMpIHtcbiAgICByZXR1cm4gdG9rZW5zVG9GdW5jdGlvbihwYXJzZShzdHIsIG9wdGlvbnMpLCBvcHRpb25zKTtcbn1cbmV4cG9ydHMuY29tcGlsZSA9IGNvbXBpbGU7XG4vKipcbiAqIEV4cG9zZSBhIG1ldGhvZCBmb3IgdHJhbnNmb3JtaW5nIHRva2VucyBpbnRvIHRoZSBwYXRoIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiB0b2tlbnNUb0Z1bmN0aW9uKHRva2Vucywgb3B0aW9ucykge1xuICAgIGlmIChvcHRpb25zID09PSB2b2lkIDApIHsgb3B0aW9ucyA9IHt9OyB9XG4gICAgdmFyIHJlRmxhZ3MgPSBmbGFncyhvcHRpb25zKTtcbiAgICB2YXIgX2EgPSBvcHRpb25zLmVuY29kZSwgZW5jb2RlID0gX2EgPT09IHZvaWQgMCA/IGZ1bmN0aW9uICh4KSB7IHJldHVybiB4OyB9IDogX2EsIF9iID0gb3B0aW9ucy52YWxpZGF0ZSwgdmFsaWRhdGUgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iO1xuICAgIC8vIENvbXBpbGUgYWxsIHRoZSB0b2tlbnMgaW50byByZWdleHBzLlxuICAgIHZhciBtYXRjaGVzID0gdG9rZW5zLm1hcChmdW5jdGlvbiAodG9rZW4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJvYmplY3RcIikge1xuICAgICAgICAgICAgcmV0dXJuIG5ldyBSZWdFeHAoXCJeKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpJFwiLCByZUZsYWdzKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgcGF0aCA9IFwiXCI7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdG9rZW5zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdG9rZW4gPSB0b2tlbnNbaV07XG4gICAgICAgICAgICBpZiAodHlwZW9mIHRva2VuID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgICAgICAgICAgcGF0aCArPSB0b2tlbjtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGEgPyBkYXRhW3Rva2VuLm5hbWVdIDogdW5kZWZpbmVkO1xuICAgICAgICAgICAgdmFyIG9wdGlvbmFsID0gdG9rZW4ubW9kaWZpZXIgPT09IFwiP1wiIHx8IHRva2VuLm1vZGlmaWVyID09PSBcIipcIjtcbiAgICAgICAgICAgIHZhciByZXBlYXQgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgfHwgdG9rZW4ubW9kaWZpZXIgPT09IFwiK1wiO1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXBlYXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IHJlcGVhdCwgYnV0IGdvdCBhbiBhcnJheVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhbHVlLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAob3B0aW9uYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbm90IGJlIGVtcHR5XCIpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHZhbHVlLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKHZhbHVlW2pdLCB0b2tlbik7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YWxpZGF0ZSAmJiAhbWF0Y2hlc1tpXS50ZXN0KHNlZ21lbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgYWxsIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gbWF0Y2ggXFxcIlwiICsgdG9rZW4ucGF0dGVybiArIFwiXFxcIiwgYnV0IGdvdCBcXFwiXCIgKyBzZWdtZW50ICsgXCJcXFwiXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHZhbHVlID09PSBcInN0cmluZ1wiIHx8IHR5cGVvZiB2YWx1ZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgIHZhciBzZWdtZW50ID0gZW5jb2RlKFN0cmluZyh2YWx1ZSksIHRva2VuKTtcbiAgICAgICAgICAgICAgICBpZiAodmFsaWRhdGUgJiYgIW1hdGNoZXNbaV0udGVzdChzZWdtZW50KSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRXhwZWN0ZWQgXFxcIlwiICsgdG9rZW4ubmFtZSArIFwiXFxcIiB0byBtYXRjaCBcXFwiXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCJcXFwiLCBidXQgZ290IFxcXCJcIiArIHNlZ21lbnQgKyBcIlxcXCJcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGggKz0gdG9rZW4ucHJlZml4ICsgc2VnbWVudCArIHRva2VuLnN1ZmZpeDtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChvcHRpb25hbClcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIHZhciB0eXBlT2ZNZXNzYWdlID0gcmVwZWF0ID8gXCJhbiBhcnJheVwiIDogXCJhIHN0cmluZ1wiO1xuICAgICAgICAgICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIFxcXCJcIiArIHRva2VuLm5hbWUgKyBcIlxcXCIgdG8gYmUgXCIgKyB0eXBlT2ZNZXNzYWdlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICB9O1xufVxuZXhwb3J0cy50b2tlbnNUb0Z1bmN0aW9uID0gdG9rZW5zVG9GdW5jdGlvbjtcbi8qKlxuICogQ3JlYXRlIHBhdGggbWF0Y2ggZnVuY3Rpb24gZnJvbSBgcGF0aC10by1yZWdleHBgIHNwZWMuXG4gKi9cbmZ1bmN0aW9uIG1hdGNoKHN0ciwgb3B0aW9ucykge1xuICAgIHZhciBrZXlzID0gW107XG4gICAgdmFyIHJlID0gcGF0aFRvUmVnZXhwKHN0ciwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5tYXRjaCA9IG1hdGNoO1xuLyoqXG4gKiBDcmVhdGUgYSBwYXRoIG1hdGNoIGZ1bmN0aW9uIGZyb20gYHBhdGgtdG8tcmVnZXhwYCBvdXRwdXQuXG4gKi9cbmZ1bmN0aW9uIHJlZ2V4cFRvRnVuY3Rpb24ocmUsIGtleXMsIG9wdGlvbnMpIHtcbiAgICBpZiAob3B0aW9ucyA9PT0gdm9pZCAwKSB7IG9wdGlvbnMgPSB7fTsgfVxuICAgIHZhciBfYSA9IG9wdGlvbnMuZGVjb2RlLCBkZWNvZGUgPSBfYSA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfYTtcbiAgICByZXR1cm4gZnVuY3Rpb24gKHBhdGhuYW1lKSB7XG4gICAgICAgIHZhciBtID0gcmUuZXhlYyhwYXRobmFtZSk7XG4gICAgICAgIGlmICghbSlcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgdmFyIHBhdGggPSBtWzBdLCBpbmRleCA9IG0uaW5kZXg7XG4gICAgICAgIHZhciBwYXJhbXMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB2YXIgX2xvb3BfMSA9IGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAvLyB0c2xpbnQ6ZGlzYWJsZS1uZXh0LWxpbmVcbiAgICAgICAgICAgIGlmIChtW2ldID09PSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiY29udGludWVcIjtcbiAgICAgICAgICAgIHZhciBrZXkgPSBrZXlzW2kgLSAxXTtcbiAgICAgICAgICAgIGlmIChrZXkubW9kaWZpZXIgPT09IFwiKlwiIHx8IGtleS5tb2RpZmllciA9PT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICBwYXJhbXNba2V5Lm5hbWVdID0gbVtpXS5zcGxpdChrZXkucHJlZml4ICsga2V5LnN1ZmZpeCkubWFwKGZ1bmN0aW9uICh2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlKHZhbHVlLCBrZXkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgcGFyYW1zW2tleS5uYW1lXSA9IGRlY29kZShtW2ldLCBrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBmb3IgKHZhciBpID0gMTsgaSA8IG0ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9sb29wXzEoaSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHsgcGF0aDogcGF0aCwgaW5kZXg6IGluZGV4LCBwYXJhbXM6IHBhcmFtcyB9O1xuICAgIH07XG59XG5leHBvcnRzLnJlZ2V4cFRvRnVuY3Rpb24gPSByZWdleHBUb0Z1bmN0aW9uO1xuLyoqXG4gKiBFc2NhcGUgYSByZWd1bGFyIGV4cHJlc3Npb24gc3RyaW5nLlxuICovXG5mdW5jdGlvbiBlc2NhcGVTdHJpbmcoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC8oWy4rKj89XiE6JHt9KClbXFxdfC9cXFxcXSkvZywgXCJcXFxcJDFcIik7XG59XG4vKipcbiAqIEdldCB0aGUgZmxhZ3MgZm9yIGEgcmVnZXhwIGZyb20gdGhlIG9wdGlvbnMuXG4gKi9cbmZ1bmN0aW9uIGZsYWdzKG9wdGlvbnMpIHtcbiAgICByZXR1cm4gb3B0aW9ucyAmJiBvcHRpb25zLnNlbnNpdGl2ZSA/IFwiXCIgOiBcImlcIjtcbn1cbi8qKlxuICogUHVsbCBvdXQga2V5cyBmcm9tIGEgcmVnZXhwLlxuICovXG5mdW5jdGlvbiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKSB7XG4gICAgaWYgKCFrZXlzKVxuICAgICAgICByZXR1cm4gcGF0aDtcbiAgICAvLyBVc2UgYSBuZWdhdGl2ZSBsb29rYWhlYWQgdG8gbWF0Y2ggb25seSBjYXB0dXJpbmcgZ3JvdXBzLlxuICAgIHZhciBncm91cHMgPSBwYXRoLnNvdXJjZS5tYXRjaCgvXFwoKD8hXFw/KS9nKTtcbiAgICBpZiAoZ3JvdXBzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZ3JvdXBzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBrZXlzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IGksXG4gICAgICAgICAgICAgICAgcHJlZml4OiBcIlwiLFxuICAgICAgICAgICAgICAgIHN1ZmZpeDogXCJcIixcbiAgICAgICAgICAgICAgICBtb2RpZmllcjogXCJcIixcbiAgICAgICAgICAgICAgICBwYXR0ZXJuOiBcIlwiXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcGF0aDtcbn1cbi8qKlxuICogVHJhbnNmb3JtIGFuIGFycmF5IGludG8gYSByZWdleHAuXG4gKi9cbmZ1bmN0aW9uIGFycmF5VG9SZWdleHAocGF0aHMsIGtleXMsIG9wdGlvbnMpIHtcbiAgICB2YXIgcGFydHMgPSBwYXRocy5tYXAoZnVuY3Rpb24gKHBhdGgpIHsgcmV0dXJuIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKS5zb3VyY2U7IH0pO1xuICAgIHJldHVybiBuZXcgUmVnRXhwKFwiKD86XCIgKyBwYXJ0cy5qb2luKFwifFwiKSArIFwiKVwiLCBmbGFncyhvcHRpb25zKSk7XG59XG4vKipcbiAqIENyZWF0ZSBhIHBhdGggcmVnZXhwIGZyb20gc3RyaW5nIGlucHV0LlxuICovXG5mdW5jdGlvbiBzdHJpbmdUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgcmV0dXJuIHRva2Vuc1RvUmVnZXhwKHBhcnNlKHBhdGgsIG9wdGlvbnMpLCBrZXlzLCBvcHRpb25zKTtcbn1cbi8qKlxuICogRXhwb3NlIGEgZnVuY3Rpb24gZm9yIHRha2luZyB0b2tlbnMgYW5kIHJldHVybmluZyBhIFJlZ0V4cC5cbiAqL1xuZnVuY3Rpb24gdG9rZW5zVG9SZWdleHAodG9rZW5zLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKG9wdGlvbnMgPT09IHZvaWQgMCkgeyBvcHRpb25zID0ge307IH1cbiAgICB2YXIgX2EgPSBvcHRpb25zLnN0cmljdCwgc3RyaWN0ID0gX2EgPT09IHZvaWQgMCA/IGZhbHNlIDogX2EsIF9iID0gb3B0aW9ucy5zdGFydCwgc3RhcnQgPSBfYiA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9iLCBfYyA9IG9wdGlvbnMuZW5kLCBlbmQgPSBfYyA9PT0gdm9pZCAwID8gdHJ1ZSA6IF9jLCBfZCA9IG9wdGlvbnMuZW5jb2RlLCBlbmNvZGUgPSBfZCA9PT0gdm9pZCAwID8gZnVuY3Rpb24gKHgpIHsgcmV0dXJuIHg7IH0gOiBfZDtcbiAgICB2YXIgZW5kc1dpdGggPSBcIltcIiArIGVzY2FwZVN0cmluZyhvcHRpb25zLmVuZHNXaXRoIHx8IFwiXCIpICsgXCJdfCRcIjtcbiAgICB2YXIgZGVsaW1pdGVyID0gXCJbXCIgKyBlc2NhcGVTdHJpbmcob3B0aW9ucy5kZWxpbWl0ZXIgfHwgXCIvIz9cIikgKyBcIl1cIjtcbiAgICB2YXIgcm91dGUgPSBzdGFydCA/IFwiXlwiIDogXCJcIjtcbiAgICAvLyBJdGVyYXRlIG92ZXIgdGhlIHRva2VucyBhbmQgY3JlYXRlIG91ciByZWdleHAgc3RyaW5nLlxuICAgIGZvciAodmFyIF9pID0gMCwgdG9rZW5zXzEgPSB0b2tlbnM7IF9pIDwgdG9rZW5zXzEubGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIHZhciB0b2tlbiA9IHRva2Vuc18xW19pXTtcbiAgICAgICAgaWYgKHR5cGVvZiB0b2tlbiA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgICAgcm91dGUgKz0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIHByZWZpeCA9IGVzY2FwZVN0cmluZyhlbmNvZGUodG9rZW4ucHJlZml4KSk7XG4gICAgICAgICAgICB2YXIgc3VmZml4ID0gZXNjYXBlU3RyaW5nKGVuY29kZSh0b2tlbi5zdWZmaXgpKTtcbiAgICAgICAgICAgIGlmICh0b2tlbi5wYXR0ZXJuKSB7XG4gICAgICAgICAgICAgICAgaWYgKGtleXMpXG4gICAgICAgICAgICAgICAgICAgIGtleXMucHVzaCh0b2tlbik7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZpeCB8fCBzdWZmaXgpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRva2VuLm1vZGlmaWVyID09PSBcIitcIiB8fCB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtb2QgPSB0b2tlbi5tb2RpZmllciA9PT0gXCIqXCIgPyBcIj9cIiA6IFwiXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoKD86XCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpKD86XCIgKyBzdWZmaXggKyBwcmVmaXggKyBcIig/OlwiICsgdG9rZW4ucGF0dGVybiArIFwiKSkqKVwiICsgc3VmZml4ICsgXCIpXCIgKyBtb2Q7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgcHJlZml4ICsgXCIoXCIgKyB0b2tlbi5wYXR0ZXJuICsgXCIpXCIgKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByb3V0ZSArPSBcIihcIiArIHRva2VuLnBhdHRlcm4gKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHJvdXRlICs9IFwiKD86XCIgKyBwcmVmaXggKyBzdWZmaXggKyBcIilcIiArIHRva2VuLm1vZGlmaWVyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGlmIChlbmQpIHtcbiAgICAgICAgaWYgKCFzdHJpY3QpXG4gICAgICAgICAgICByb3V0ZSArPSBkZWxpbWl0ZXIgKyBcIj9cIjtcbiAgICAgICAgcm91dGUgKz0gIW9wdGlvbnMuZW5kc1dpdGggPyBcIiRcIiA6IFwiKD89XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgdmFyIGVuZFRva2VuID0gdG9rZW5zW3Rva2Vucy5sZW5ndGggLSAxXTtcbiAgICAgICAgdmFyIGlzRW5kRGVsaW1pdGVkID0gdHlwZW9mIGVuZFRva2VuID09PSBcInN0cmluZ1wiXG4gICAgICAgICAgICA/IGRlbGltaXRlci5pbmRleE9mKGVuZFRva2VuW2VuZFRva2VuLmxlbmd0aCAtIDFdKSA+IC0xXG4gICAgICAgICAgICA6IC8vIHRzbGludDpkaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAgICAgICAgIGVuZFRva2VuID09PSB1bmRlZmluZWQ7XG4gICAgICAgIGlmICghc3RyaWN0KSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/OlwiICsgZGVsaW1pdGVyICsgXCIoPz1cIiArIGVuZHNXaXRoICsgXCIpKT9cIjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWlzRW5kRGVsaW1pdGVkKSB7XG4gICAgICAgICAgICByb3V0ZSArPSBcIig/PVwiICsgZGVsaW1pdGVyICsgXCJ8XCIgKyBlbmRzV2l0aCArIFwiKVwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiBuZXcgUmVnRXhwKHJvdXRlLCBmbGFncyhvcHRpb25zKSk7XG59XG5leHBvcnRzLnRva2Vuc1RvUmVnZXhwID0gdG9rZW5zVG9SZWdleHA7XG4vKipcbiAqIE5vcm1hbGl6ZSB0aGUgZ2l2ZW4gcGF0aCBzdHJpbmcsIHJldHVybmluZyBhIHJlZ3VsYXIgZXhwcmVzc2lvbi5cbiAqXG4gKiBBbiBlbXB0eSBhcnJheSBjYW4gYmUgcGFzc2VkIGluIGZvciB0aGUga2V5cywgd2hpY2ggd2lsbCBob2xkIHRoZVxuICogcGxhY2Vob2xkZXIga2V5IGRlc2NyaXB0aW9ucy4gRm9yIGV4YW1wbGUsIHVzaW5nIGAvdXNlci86aWRgLCBga2V5c2Agd2lsbFxuICogY29udGFpbiBgW3sgbmFtZTogJ2lkJywgZGVsaW1pdGVyOiAnLycsIG9wdGlvbmFsOiBmYWxzZSwgcmVwZWF0OiBmYWxzZSB9XWAuXG4gKi9cbmZ1bmN0aW9uIHBhdGhUb1JlZ2V4cChwYXRoLCBrZXlzLCBvcHRpb25zKSB7XG4gICAgaWYgKHBhdGggaW5zdGFuY2VvZiBSZWdFeHApXG4gICAgICAgIHJldHVybiByZWdleHBUb1JlZ2V4cChwYXRoLCBrZXlzKTtcbiAgICBpZiAoQXJyYXkuaXNBcnJheShwYXRoKSlcbiAgICAgICAgcmV0dXJuIGFycmF5VG9SZWdleHAocGF0aCwga2V5cywgb3B0aW9ucyk7XG4gICAgcmV0dXJuIHN0cmluZ1RvUmVnZXhwKHBhdGgsIGtleXMsIG9wdGlvbnMpO1xufVxuZXhwb3J0cy5wYXRoVG9SZWdleHAgPSBwYXRoVG9SZWdleHA7XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5qcy5tYXAiLCIvKlxuTUlUIExpY2Vuc2VcblxuQ29weXJpZ2h0IChjKSBKYXNvbiBNaWxsZXIgKGh0dHBzOi8vamFzb25mb3JtYXQuY29tLylcblxuUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGEgY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmcgd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLCBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZSBmb2xsb3dpbmcgY29uZGl0aW9uczpcblxuVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWQgaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG5cblRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLCBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRSBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuKi9cblxuLy8gVGhpcyBmaWxlIGlzIGJhc2VkIG9uIGh0dHBzOi8vZ2l0aHViLmNvbS9kZXZlbG9waXQvbWl0dC9ibG9iL3YxLjEuMy9zcmMvaW5kZXguanNcbi8vIEl0J3MgYmVlbiBlZGl0ZWQgZm9yIHRoZSBuZWVkcyBvZiB0aGlzIHNjcmlwdFxuLy8gU2VlIHRoZSBMSUNFTlNFIGF0IHRoZSB0b3Agb2YgdGhlIGZpbGVcblxudHlwZSBIYW5kbGVyID0gKC4uLmV2dHM6IGFueVtdKSA9PiB2b2lkXG5cbmV4cG9ydCB0eXBlIE1pdHRFbWl0dGVyID0ge1xuICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIG9mZih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpOiB2b2lkXG4gIGVtaXQodHlwZTogc3RyaW5nLCAuLi5ldnRzOiBhbnlbXSk6IHZvaWRcbn1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gbWl0dCgpOiBNaXR0RW1pdHRlciB7XG4gIGNvbnN0IGFsbDogeyBbczogc3RyaW5nXTogSGFuZGxlcltdIH0gPSBPYmplY3QuY3JlYXRlKG51bGwpXG5cbiAgcmV0dXJuIHtcbiAgICBvbih0eXBlOiBzdHJpbmcsIGhhbmRsZXI6IEhhbmRsZXIpIHtcbiAgICAgIDsoYWxsW3R5cGVdIHx8IChhbGxbdHlwZV0gPSBbXSkpLnB1c2goaGFuZGxlcilcbiAgICB9LFxuXG4gICAgb2ZmKHR5cGU6IHN0cmluZywgaGFuZGxlcjogSGFuZGxlcikge1xuICAgICAgaWYgKGFsbFt0eXBlXSkge1xuICAgICAgICBhbGxbdHlwZV0uc3BsaWNlKGFsbFt0eXBlXS5pbmRleE9mKGhhbmRsZXIpID4+PiAwLCAxKVxuICAgICAgfVxuICAgIH0sXG5cbiAgICBlbWl0KHR5cGU6IHN0cmluZywgLi4uZXZ0czogYW55W10pIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIDsoYWxsW3R5cGVdIHx8IFtdKS5zbGljZSgpLm1hcCgoaGFuZGxlcjogSGFuZGxlcikgPT4ge1xuICAgICAgICBoYW5kbGVyKC4uLmV2dHMpXG4gICAgICB9KVxuICAgIH0sXG4gIH1cbn1cbiIsIi8qIGdsb2JhbCBfX05FWFRfREFUQV9fICovXG4vLyB0c2xpbnQ6ZGlzYWJsZTpuby1jb25zb2xlXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHtcbiAgbm9ybWFsaXplUGF0aFRyYWlsaW5nU2xhc2gsXG4gIHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoLFxufSBmcm9tICcuLi8uLi8uLi9jbGllbnQvbm9ybWFsaXplLXRyYWlsaW5nLXNsYXNoJ1xuaW1wb3J0IHsgR29vZFBhZ2VDYWNoZSwgU3R5bGVTaGVldFR1cGxlIH0gZnJvbSAnLi4vLi4vLi4vY2xpZW50L3BhZ2UtbG9hZGVyJ1xuaW1wb3J0IHsgZGVub3JtYWxpemVQYWdlUGF0aCB9IGZyb20gJy4uLy4uL3NlcnZlci9kZW5vcm1hbGl6ZS1wYWdlLXBhdGgnXG5pbXBvcnQgbWl0dCwgeyBNaXR0RW1pdHRlciB9IGZyb20gJy4uL21pdHQnXG5pbXBvcnQge1xuICBBcHBDb250ZXh0VHlwZSxcbiAgZm9ybWF0V2l0aFZhbGlkYXRpb24sXG4gIGdldExvY2F0aW9uT3JpZ2luLFxuICBnZXRVUkwsXG4gIGxvYWRHZXRJbml0aWFsUHJvcHMsXG4gIE5leHRQYWdlQ29udGV4dCxcbiAgU1QsXG59IGZyb20gJy4uL3V0aWxzJ1xuaW1wb3J0IHsgaXNEeW5hbWljUm91dGUgfSBmcm9tICcuL3V0aWxzL2lzLWR5bmFtaWMnXG5pbXBvcnQgeyBwYXJzZVJlbGF0aXZlVXJsIH0gZnJvbSAnLi91dGlscy9wYXJzZS1yZWxhdGl2ZS11cmwnXG5pbXBvcnQgeyBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5IH0gZnJvbSAnLi91dGlscy9xdWVyeXN0cmluZydcbmltcG9ydCByZXNvbHZlUmV3cml0ZXMgZnJvbSAnLi91dGlscy9yZXNvbHZlLXJld3JpdGVzJ1xuaW1wb3J0IHsgZ2V0Um91dGVNYXRjaGVyIH0gZnJvbSAnLi91dGlscy9yb3V0ZS1tYXRjaGVyJ1xuaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vdXRpbHMvcm91dGUtcmVnZXgnXG5pbXBvcnQgZXNjYXBlUGF0aERlbGltaXRlcnMgZnJvbSAnLi91dGlscy9lc2NhcGUtcGF0aC1kZWxpbWl0ZXJzJ1xuXG5pbnRlcmZhY2UgVHJhbnNpdGlvbk9wdGlvbnMge1xuICBzaGFsbG93PzogYm9vbGVhblxuICBsb2NhbGU/OiBzdHJpbmcgfCBmYWxzZVxufVxuXG5pbnRlcmZhY2UgTmV4dEhpc3RvcnlTdGF0ZSB7XG4gIHVybDogc3RyaW5nXG4gIGFzOiBzdHJpbmdcbiAgb3B0aW9uczogVHJhbnNpdGlvbk9wdGlvbnNcbn1cblxudHlwZSBIaXN0b3J5U3RhdGUgPSBudWxsIHwgeyBfX046IGZhbHNlIH0gfCAoeyBfX046IHRydWUgfSAmIE5leHRIaXN0b3J5U3RhdGUpXG5cbmNvbnN0IGJhc2VQYXRoID0gKHByb2Nlc3MuZW52Ll9fTkVYVF9ST1VURVJfQkFTRVBBVEggYXMgc3RyaW5nKSB8fCAnJ1xuXG5mdW5jdGlvbiBidWlsZENhbmNlbGxhdGlvbkVycm9yKCkge1xuICByZXR1cm4gT2JqZWN0LmFzc2lnbihuZXcgRXJyb3IoJ1JvdXRlIENhbmNlbGxlZCcpLCB7XG4gICAgY2FuY2VsbGVkOiB0cnVlLFxuICB9KVxufVxuXG5mdW5jdGlvbiBhZGRQYXRoUHJlZml4KHBhdGg6IHN0cmluZywgcHJlZml4Pzogc3RyaW5nKSB7XG4gIHJldHVybiBwcmVmaXggJiYgcGF0aC5zdGFydHNXaXRoKCcvJylcbiAgICA/IHBhdGggPT09ICcvJ1xuICAgICAgPyBub3JtYWxpemVQYXRoVHJhaWxpbmdTbGFzaChwcmVmaXgpXG4gICAgICA6IGAke3ByZWZpeH0ke3BhdGh9YFxuICAgIDogcGF0aFxufVxuXG5leHBvcnQgZnVuY3Rpb24gYWRkTG9jYWxlKFxuICBwYXRoOiBzdHJpbmcsXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlLFxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG4pIHtcbiAgaWYgKHByb2Nlc3MuZW52Ll9fTkVYVF9JMThOX1NVUFBPUlQpIHtcbiAgICByZXR1cm4gbG9jYWxlICYmXG4gICAgICBsb2NhbGUgIT09IGRlZmF1bHRMb2NhbGUgJiZcbiAgICAgICFwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlICsgJy8nKSAmJlxuICAgICAgcGF0aCAhPT0gJy8nICsgbG9jYWxlXG4gICAgICA/IGFkZFBhdGhQcmVmaXgocGF0aCwgJy8nICsgbG9jYWxlKVxuICAgICAgOiBwYXRoXG4gIH1cbiAgcmV0dXJuIHBhdGhcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGRlbExvY2FsZShwYXRoOiBzdHJpbmcsIGxvY2FsZT86IHN0cmluZykge1xuICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgIHJldHVybiBsb2NhbGUgJiZcbiAgICAgIChwYXRoLnN0YXJ0c1dpdGgoJy8nICsgbG9jYWxlICsgJy8nKSB8fCBwYXRoID09PSAnLycgKyBsb2NhbGUpXG4gICAgICA/IHBhdGguc3Vic3RyKGxvY2FsZS5sZW5ndGggKyAxKSB8fCAnLydcbiAgICAgIDogcGF0aFxuICB9XG4gIHJldHVybiBwYXRoXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBoYXNCYXNlUGF0aChwYXRoOiBzdHJpbmcpOiBib29sZWFuIHtcbiAgcmV0dXJuIHBhdGggPT09IGJhc2VQYXRoIHx8IHBhdGguc3RhcnRzV2l0aChiYXNlUGF0aCArICcvJylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFkZEJhc2VQYXRoKHBhdGg6IHN0cmluZyk6IHN0cmluZyB7XG4gIC8vIHdlIG9ubHkgYWRkIHRoZSBiYXNlcGF0aCBvbiByZWxhdGl2ZSB1cmxzXG4gIHJldHVybiBhZGRQYXRoUHJlZml4KHBhdGgsIGJhc2VQYXRoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZGVsQmFzZVBhdGgocGF0aDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHBhdGguc2xpY2UoYmFzZVBhdGgubGVuZ3RoKSB8fCAnLydcbn1cblxuLyoqXG4gKiBEZXRlY3RzIHdoZXRoZXIgYSBnaXZlbiB1cmwgaXMgcm91dGFibGUgYnkgdGhlIE5leHQuanMgcm91dGVyIChicm93c2VyIG9ubHkpLlxuICovXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbFVSTCh1cmw6IHN0cmluZyk6IGJvb2xlYW4ge1xuICBpZiAodXJsLnN0YXJ0c1dpdGgoJy8nKSkgcmV0dXJuIHRydWVcbiAgdHJ5IHtcbiAgICAvLyBhYnNvbHV0ZSB1cmxzIGNhbiBiZSBsb2NhbCBpZiB0aGV5IGFyZSBvbiB0aGUgc2FtZSBvcmlnaW5cbiAgICBjb25zdCBsb2NhdGlvbk9yaWdpbiA9IGdldExvY2F0aW9uT3JpZ2luKClcbiAgICBjb25zdCByZXNvbHZlZCA9IG5ldyBVUkwodXJsLCBsb2NhdGlvbk9yaWdpbilcbiAgICByZXR1cm4gcmVzb2x2ZWQub3JpZ2luID09PSBsb2NhdGlvbk9yaWdpbiAmJiBoYXNCYXNlUGF0aChyZXNvbHZlZC5wYXRobmFtZSlcbiAgfSBjYXRjaCAoXykge1xuICAgIHJldHVybiBmYWxzZVxuICB9XG59XG5cbnR5cGUgVXJsID0gVXJsT2JqZWN0IHwgc3RyaW5nXG5cbmV4cG9ydCBmdW5jdGlvbiBpbnRlcnBvbGF0ZUFzKFxuICByb3V0ZTogc3RyaW5nLFxuICBhc1BhdGhuYW1lOiBzdHJpbmcsXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuKSB7XG4gIGxldCBpbnRlcnBvbGF0ZWRSb3V0ZSA9ICcnXG5cbiAgY29uc3QgZHluYW1pY1JlZ2V4ID0gZ2V0Um91dGVSZWdleChyb3V0ZSlcbiAgY29uc3QgZHluYW1pY0dyb3VwcyA9IGR5bmFtaWNSZWdleC5ncm91cHNcbiAgY29uc3QgZHluYW1pY01hdGNoZXMgPVxuICAgIC8vIFRyeSB0byBtYXRjaCB0aGUgZHluYW1pYyByb3V0ZSBhZ2FpbnN0IHRoZSBhc1BhdGhcbiAgICAoYXNQYXRobmFtZSAhPT0gcm91dGUgPyBnZXRSb3V0ZU1hdGNoZXIoZHluYW1pY1JlZ2V4KShhc1BhdGhuYW1lKSA6ICcnKSB8fFxuICAgIC8vIEZhbGwgYmFjayB0byByZWFkaW5nIHRoZSB2YWx1ZXMgZnJvbSB0aGUgaHJlZlxuICAgIC8vIFRPRE86IHNob3VsZCB0aGlzIHRha2UgcHJpb3JpdHk7IGFsc28gbmVlZCB0byBjaGFuZ2UgaW4gdGhlIHJvdXRlci5cbiAgICBxdWVyeVxuXG4gIGludGVycG9sYXRlZFJvdXRlID0gcm91dGVcbiAgY29uc3QgcGFyYW1zID0gT2JqZWN0LmtleXMoZHluYW1pY0dyb3VwcylcblxuICBpZiAoXG4gICAgIXBhcmFtcy5ldmVyeSgocGFyYW0pID0+IHtcbiAgICAgIGxldCB2YWx1ZSA9IGR5bmFtaWNNYXRjaGVzW3BhcmFtXSB8fCAnJ1xuICAgICAgY29uc3QgeyByZXBlYXQsIG9wdGlvbmFsIH0gPSBkeW5hbWljR3JvdXBzW3BhcmFtXVxuXG4gICAgICAvLyBzdXBwb3J0IHNpbmdsZS1sZXZlbCBjYXRjaC1hbGxcbiAgICAgIC8vIFRPRE86IG1vcmUgcm9idXN0IGhhbmRsaW5nIGZvciB1c2VyLWVycm9yIChwYXNzaW5nIGAvYClcbiAgICAgIGxldCByZXBsYWNlZCA9IGBbJHtyZXBlYXQgPyAnLi4uJyA6ICcnfSR7cGFyYW19XWBcbiAgICAgIGlmIChvcHRpb25hbCkge1xuICAgICAgICByZXBsYWNlZCA9IGAkeyF2YWx1ZSA/ICcvJyA6ICcnfVske3JlcGxhY2VkfV1gXG4gICAgICB9XG4gICAgICBpZiAocmVwZWF0ICYmICFBcnJheS5pc0FycmF5KHZhbHVlKSkgdmFsdWUgPSBbdmFsdWVdXG5cbiAgICAgIHJldHVybiAoXG4gICAgICAgIChvcHRpb25hbCB8fCBwYXJhbSBpbiBkeW5hbWljTWF0Y2hlcykgJiZcbiAgICAgICAgLy8gSW50ZXJwb2xhdGUgZ3JvdXAgaW50byBkYXRhIFVSTCBpZiBwcmVzZW50XG4gICAgICAgIChpbnRlcnBvbGF0ZWRSb3V0ZSA9XG4gICAgICAgICAgaW50ZXJwb2xhdGVkUm91dGUhLnJlcGxhY2UoXG4gICAgICAgICAgICByZXBsYWNlZCxcbiAgICAgICAgICAgIHJlcGVhdFxuICAgICAgICAgICAgICA/ICh2YWx1ZSBhcyBzdHJpbmdbXSkubWFwKGVzY2FwZVBhdGhEZWxpbWl0ZXJzKS5qb2luKCcvJylcbiAgICAgICAgICAgICAgOiBlc2NhcGVQYXRoRGVsaW1pdGVycyh2YWx1ZSBhcyBzdHJpbmcpXG4gICAgICAgICAgKSB8fCAnLycpXG4gICAgICApXG4gICAgfSlcbiAgKSB7XG4gICAgaW50ZXJwb2xhdGVkUm91dGUgPSAnJyAvLyBkaWQgbm90IHNhdGlzZnkgYWxsIHJlcXVpcmVtZW50c1xuXG4gICAgLy8gbi5iLiBXZSBpZ25vcmUgdGhpcyBlcnJvciBiZWNhdXNlIHdlIGhhbmRsZSB3YXJuaW5nIGZvciB0aGlzIGNhc2UgaW5cbiAgICAvLyBkZXZlbG9wbWVudCBpbiB0aGUgYDxMaW5rPmAgY29tcG9uZW50IGRpcmVjdGx5LlxuICB9XG4gIHJldHVybiB7XG4gICAgcGFyYW1zLFxuICAgIHJlc3VsdDogaW50ZXJwb2xhdGVkUm91dGUsXG4gIH1cbn1cblxuZnVuY3Rpb24gb21pdFBhcm1zRnJvbVF1ZXJ5KHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSwgcGFyYW1zOiBzdHJpbmdbXSkge1xuICBjb25zdCBmaWx0ZXJlZFF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG5cbiAgT2JqZWN0LmtleXMocXVlcnkpLmZvckVhY2goKGtleSkgPT4ge1xuICAgIGlmICghcGFyYW1zLmluY2x1ZGVzKGtleSkpIHtcbiAgICAgIGZpbHRlcmVkUXVlcnlba2V5XSA9IHF1ZXJ5W2tleV1cbiAgICB9XG4gIH0pXG4gIHJldHVybiBmaWx0ZXJlZFF1ZXJ5XG59XG5cbi8qKlxuICogUmVzb2x2ZXMgYSBnaXZlbiBoeXBlcmxpbmsgd2l0aCBhIGNlcnRhaW4gcm91dGVyIHN0YXRlIChiYXNlUGF0aCBub3QgaW5jbHVkZWQpLlxuICogUHJlc2VydmVzIGFic29sdXRlIHVybHMuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiByZXNvbHZlSHJlZihcbiAgY3VycmVudFBhdGg6IHN0cmluZyxcbiAgaHJlZjogVXJsLFxuICByZXNvbHZlQXM/OiBib29sZWFuXG4pOiBzdHJpbmcge1xuICAvLyB3ZSB1c2UgYSBkdW1teSBiYXNlIHVybCBmb3IgcmVsYXRpdmUgdXJsc1xuICBjb25zdCBiYXNlID0gbmV3IFVSTChjdXJyZW50UGF0aCwgJ2h0dHA6Ly9uJylcbiAgY29uc3QgdXJsQXNTdHJpbmcgPVxuICAgIHR5cGVvZiBocmVmID09PSAnc3RyaW5nJyA/IGhyZWYgOiBmb3JtYXRXaXRoVmFsaWRhdGlvbihocmVmKVxuICB0cnkge1xuICAgIGNvbnN0IGZpbmFsVXJsID0gbmV3IFVSTCh1cmxBc1N0cmluZywgYmFzZSlcbiAgICBmaW5hbFVybC5wYXRobmFtZSA9IG5vcm1hbGl6ZVBhdGhUcmFpbGluZ1NsYXNoKGZpbmFsVXJsLnBhdGhuYW1lKVxuICAgIGxldCBpbnRlcnBvbGF0ZWRBcyA9ICcnXG5cbiAgICBpZiAoXG4gICAgICBpc0R5bmFtaWNSb3V0ZShmaW5hbFVybC5wYXRobmFtZSkgJiZcbiAgICAgIGZpbmFsVXJsLnNlYXJjaFBhcmFtcyAmJlxuICAgICAgcmVzb2x2ZUFzXG4gICAgKSB7XG4gICAgICBjb25zdCBxdWVyeSA9IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoZmluYWxVcmwuc2VhcmNoUGFyYW1zKVxuXG4gICAgICBjb25zdCB7IHJlc3VsdCwgcGFyYW1zIH0gPSBpbnRlcnBvbGF0ZUFzKFxuICAgICAgICBmaW5hbFVybC5wYXRobmFtZSxcbiAgICAgICAgZmluYWxVcmwucGF0aG5hbWUsXG4gICAgICAgIHF1ZXJ5XG4gICAgICApXG5cbiAgICAgIGlmIChyZXN1bHQpIHtcbiAgICAgICAgaW50ZXJwb2xhdGVkQXMgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbih7XG4gICAgICAgICAgcGF0aG5hbWU6IHJlc3VsdCxcbiAgICAgICAgICBoYXNoOiBmaW5hbFVybC5oYXNoLFxuICAgICAgICAgIHF1ZXJ5OiBvbWl0UGFybXNGcm9tUXVlcnkocXVlcnksIHBhcmFtcyksXG4gICAgICAgIH0pXG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gaWYgdGhlIG9yaWdpbiBkaWRuJ3QgY2hhbmdlLCBpdCBtZWFucyB3ZSByZWNlaXZlZCBhIHJlbGF0aXZlIGhyZWZcbiAgICBjb25zdCByZXNvbHZlZEhyZWYgPVxuICAgICAgZmluYWxVcmwub3JpZ2luID09PSBiYXNlLm9yaWdpblxuICAgICAgICA/IGZpbmFsVXJsLmhyZWYuc2xpY2UoZmluYWxVcmwub3JpZ2luLmxlbmd0aClcbiAgICAgICAgOiBmaW5hbFVybC5ocmVmXG5cbiAgICByZXR1cm4gKHJlc29sdmVBc1xuICAgICAgPyBbcmVzb2x2ZWRIcmVmLCBpbnRlcnBvbGF0ZWRBcyB8fCByZXNvbHZlZEhyZWZdXG4gICAgICA6IHJlc29sdmVkSHJlZikgYXMgc3RyaW5nXG4gIH0gY2F0Y2ggKF8pIHtcbiAgICByZXR1cm4gKHJlc29sdmVBcyA/IFt1cmxBc1N0cmluZ10gOiB1cmxBc1N0cmluZykgYXMgc3RyaW5nXG4gIH1cbn1cblxuY29uc3QgUEFHRV9MT0FEX0VSUk9SID0gU3ltYm9sKCdQQUdFX0xPQURfRVJST1InKVxuZXhwb3J0IGZ1bmN0aW9uIG1hcmtMb2FkaW5nRXJyb3IoZXJyOiBFcnJvcik6IEVycm9yIHtcbiAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlcnIsIFBBR0VfTE9BRF9FUlJPUiwge30pXG59XG5cbmZ1bmN0aW9uIHByZXBhcmVVcmxBcyhyb3V0ZXI6IE5leHRSb3V0ZXIsIHVybDogVXJsLCBhczogVXJsKSB7XG4gIC8vIElmIHVybCBhbmQgYXMgcHJvdmlkZWQgYXMgYW4gb2JqZWN0IHJlcHJlc2VudGF0aW9uLFxuICAvLyB3ZSdsbCBmb3JtYXQgdGhlbSBpbnRvIHRoZSBzdHJpbmcgdmVyc2lvbiBoZXJlLlxuICByZXR1cm4ge1xuICAgIHVybDogYWRkQmFzZVBhdGgocmVzb2x2ZUhyZWYocm91dGVyLnBhdGhuYW1lLCB1cmwpKSxcbiAgICBhczogYXMgPyBhZGRCYXNlUGF0aChyZXNvbHZlSHJlZihyb3V0ZXIucGF0aG5hbWUsIGFzKSkgOiBhcyxcbiAgfVxufVxuXG5leHBvcnQgdHlwZSBCYXNlUm91dGVyID0ge1xuICByb3V0ZTogc3RyaW5nXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5XG4gIGFzUGF0aDogc3RyaW5nXG4gIGJhc2VQYXRoOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG4gIGxvY2FsZXM/OiBzdHJpbmdbXVxuICBkZWZhdWx0TG9jYWxlPzogc3RyaW5nXG59XG5cbmV4cG9ydCB0eXBlIE5leHRSb3V0ZXIgPSBCYXNlUm91dGVyICZcbiAgUGljazxcbiAgICBSb3V0ZXIsXG4gICAgfCAncHVzaCdcbiAgICB8ICdyZXBsYWNlJ1xuICAgIHwgJ3JlbG9hZCdcbiAgICB8ICdiYWNrJ1xuICAgIHwgJ3ByZWZldGNoJ1xuICAgIHwgJ2JlZm9yZVBvcFN0YXRlJ1xuICAgIHwgJ2V2ZW50cydcbiAgICB8ICdpc0ZhbGxiYWNrJ1xuICA+XG5cbmV4cG9ydCB0eXBlIFByZWZldGNoT3B0aW9ucyA9IHtcbiAgcHJpb3JpdHk/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZyB8IGZhbHNlXG59XG5cbmV4cG9ydCB0eXBlIFByaXZhdGVSb3V0ZUluZm8gPSB7XG4gIENvbXBvbmVudDogQ29tcG9uZW50VHlwZVxuICBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbiAgcHJvcHM/OiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG4gIGVycj86IEVycm9yXG4gIGVycm9yPzogYW55XG59XG5cbmV4cG9ydCB0eXBlIEFwcFByb3BzID0gUGljazxQcml2YXRlUm91dGVJbmZvLCAnQ29tcG9uZW50JyB8ICdlcnInPiAmIHtcbiAgcm91dGVyOiBSb3V0ZXJcbn0gJiBSZWNvcmQ8c3RyaW5nLCBhbnk+XG5leHBvcnQgdHlwZSBBcHBDb21wb25lbnQgPSBDb21wb25lbnRUeXBlPEFwcFByb3BzPlxuXG50eXBlIFN1YnNjcmlwdGlvbiA9IChkYXRhOiBQcml2YXRlUm91dGVJbmZvLCBBcHA6IEFwcENvbXBvbmVudCkgPT4gUHJvbWlzZTx2b2lkPlxuXG50eXBlIEJlZm9yZVBvcFN0YXRlQ2FsbGJhY2sgPSAoc3RhdGU6IE5leHRIaXN0b3J5U3RhdGUpID0+IGJvb2xlYW5cblxudHlwZSBDb21wb25lbnRMb2FkQ2FuY2VsID0gKCgpID0+IHZvaWQpIHwgbnVsbFxuXG50eXBlIEhpc3RvcnlNZXRob2QgPSAncmVwbGFjZVN0YXRlJyB8ICdwdXNoU3RhdGUnXG5cbmNvbnN0IG1hbnVhbFNjcm9sbFJlc3RvcmF0aW9uID1cbiAgcHJvY2Vzcy5lbnYuX19ORVhUX1NDUk9MTF9SRVNUT1JBVElPTiAmJlxuICB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJyAmJlxuICAnc2Nyb2xsUmVzdG9yYXRpb24nIGluIHdpbmRvdy5oaXN0b3J5XG5cbmNvbnN0IFNTR19EQVRBX05PVF9GT1VORF9FUlJPUiA9ICdTU0cgRGF0YSBOT1RfRk9VTkQnXG5cbmZ1bmN0aW9uIGZldGNoUmV0cnkodXJsOiBzdHJpbmcsIGF0dGVtcHRzOiBudW1iZXIpOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gZmV0Y2godXJsLCB7XG4gICAgLy8gQ29va2llcyBhcmUgcmVxdWlyZWQgdG8gYmUgcHJlc2VudCBmb3IgTmV4dC5qcycgU1NHIFwiUHJldmlldyBNb2RlXCIuXG4gICAgLy8gQ29va2llcyBtYXkgYWxzbyBiZSByZXF1aXJlZCBmb3IgYGdldFNlcnZlclNpZGVQcm9wc2AuXG4gICAgLy9cbiAgICAvLyA+IGBmZXRjaGAgd29u4oCZdCBzZW5kIGNvb2tpZXMsIHVubGVzcyB5b3Ugc2V0IHRoZSBjcmVkZW50aWFscyBpbml0XG4gICAgLy8gPiBvcHRpb24uXG4gICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0ZldGNoX0FQSS9Vc2luZ19GZXRjaFxuICAgIC8vXG4gICAgLy8gPiBGb3IgbWF4aW11bSBicm93c2VyIGNvbXBhdGliaWxpdHkgd2hlbiBpdCBjb21lcyB0byBzZW5kaW5nICZcbiAgICAvLyA+IHJlY2VpdmluZyBjb29raWVzLCBhbHdheXMgc3VwcGx5IHRoZSBgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbidgXG4gICAgLy8gPiBvcHRpb24gaW5zdGVhZCBvZiByZWx5aW5nIG9uIHRoZSBkZWZhdWx0LlxuICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS9naXRodWIvZmV0Y2gjY2F2ZWF0c1xuICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICB9KS50aGVuKChyZXMpID0+IHtcbiAgICBpZiAoIXJlcy5vaykge1xuICAgICAgaWYgKGF0dGVtcHRzID4gMSAmJiByZXMuc3RhdHVzID49IDUwMCkge1xuICAgICAgICByZXR1cm4gZmV0Y2hSZXRyeSh1cmwsIGF0dGVtcHRzIC0gMSlcbiAgICAgIH1cbiAgICAgIGlmIChyZXMuc3RhdHVzID09PSA0MDQpIHtcbiAgICAgICAgLy8gVE9ETzogaGFuZGxlIHJlbG9hZGluZyBpbiBkZXZlbG9wbWVudCBmcm9tIGZhbGxiYWNrIHJldHVybmluZyAyMDBcbiAgICAgICAgLy8gdG8gb24tZGVtYW5kLWVudHJ5LWhhbmRsZXIgY2F1c2luZyBpdCB0byByZWxvYWQgcGVyaW9kaWNhbGx5XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihTU0dfREFUQV9OT1RfRk9VTkRfRVJST1IpXG4gICAgICB9XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoYEZhaWxlZCB0byBsb2FkIHN0YXRpYyBwcm9wc2ApXG4gICAgfVxuICAgIHJldHVybiByZXMuanNvbigpXG4gIH0pXG59XG5cbmZ1bmN0aW9uIGZldGNoTmV4dERhdGEoZGF0YUhyZWY6IHN0cmluZywgaXNTZXJ2ZXJSZW5kZXI6IGJvb2xlYW4pIHtcbiAgcmV0dXJuIGZldGNoUmV0cnkoZGF0YUhyZWYsIGlzU2VydmVyUmVuZGVyID8gMyA6IDEpLmNhdGNoKChlcnI6IEVycm9yKSA9PiB7XG4gICAgLy8gV2Ugc2hvdWxkIG9ubHkgdHJpZ2dlciBhIHNlcnZlci1zaWRlIHRyYW5zaXRpb24gaWYgdGhpcyB3YXMgY2F1c2VkXG4gICAgLy8gb24gYSBjbGllbnQtc2lkZSB0cmFuc2l0aW9uLiBPdGhlcndpc2UsIHdlJ2QgZ2V0IGludG8gYW4gaW5maW5pdGVcbiAgICAvLyBsb29wLlxuXG4gICAgaWYgKCFpc1NlcnZlclJlbmRlcikge1xuICAgICAgbWFya0xvYWRpbmdFcnJvcihlcnIpXG4gICAgfVxuICAgIHRocm93IGVyclxuICB9KVxufVxuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSb3V0ZXIgaW1wbGVtZW50cyBCYXNlUm91dGVyIHtcbiAgcm91dGU6IHN0cmluZ1xuICBwYXRobmFtZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBhc1BhdGg6IHN0cmluZ1xuICBiYXNlUGF0aDogc3RyaW5nXG5cbiAgLyoqXG4gICAqIE1hcCBvZiBhbGwgY29tcG9uZW50cyBsb2FkZWQgaW4gYFJvdXRlcmBcbiAgICovXG4gIGNvbXBvbmVudHM6IHsgW3BhdGhuYW1lOiBzdHJpbmddOiBQcml2YXRlUm91dGVJbmZvIH1cbiAgLy8gU3RhdGljIERhdGEgQ2FjaGVcbiAgc2RjOiB7IFthc1BhdGg6IHN0cmluZ106IG9iamVjdCB9ID0ge31cbiAgc3ViOiBTdWJzY3JpcHRpb25cbiAgY2xjOiBDb21wb25lbnRMb2FkQ2FuY2VsXG4gIHBhZ2VMb2FkZXI6IGFueVxuICBfYnBzOiBCZWZvcmVQb3BTdGF0ZUNhbGxiYWNrIHwgdW5kZWZpbmVkXG4gIGV2ZW50czogTWl0dEVtaXR0ZXJcbiAgX3dyYXBBcHA6IChBcHA6IEFwcENvbXBvbmVudCkgPT4gYW55XG4gIGlzU3NyOiBib29sZWFuXG4gIGlzRmFsbGJhY2s6IGJvb2xlYW5cbiAgX2luRmxpZ2h0Um91dGU/OiBzdHJpbmdcbiAgX3NoYWxsb3c/OiBib29sZWFuXG4gIGxvY2FsZT86IHN0cmluZ1xuICBsb2NhbGVzPzogc3RyaW5nW11cbiAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuXG4gIHN0YXRpYyBldmVudHM6IE1pdHRFbWl0dGVyID0gbWl0dCgpXG5cbiAgY29uc3RydWN0b3IoXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICB7XG4gICAgICBpbml0aWFsUHJvcHMsXG4gICAgICBwYWdlTG9hZGVyLFxuICAgICAgQXBwLFxuICAgICAgd3JhcEFwcCxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIGluaXRpYWxTdHlsZVNoZWV0cyxcbiAgICAgIGVycixcbiAgICAgIHN1YnNjcmlwdGlvbixcbiAgICAgIGlzRmFsbGJhY2ssXG4gICAgICBsb2NhbGUsXG4gICAgICBsb2NhbGVzLFxuICAgICAgZGVmYXVsdExvY2FsZSxcbiAgICB9OiB7XG4gICAgICBzdWJzY3JpcHRpb246IFN1YnNjcmlwdGlvblxuICAgICAgaW5pdGlhbFByb3BzOiBhbnlcbiAgICAgIHBhZ2VMb2FkZXI6IGFueVxuICAgICAgQ29tcG9uZW50OiBDb21wb25lbnRUeXBlXG4gICAgICBpbml0aWFsU3R5bGVTaGVldHM6IFN0eWxlU2hlZXRUdXBsZVtdXG4gICAgICBBcHA6IEFwcENvbXBvbmVudFxuICAgICAgd3JhcEFwcDogKEFwcDogQXBwQ29tcG9uZW50KSA9PiBhbnlcbiAgICAgIGVycj86IEVycm9yXG4gICAgICBpc0ZhbGxiYWNrOiBib29sZWFuXG4gICAgICBsb2NhbGU/OiBzdHJpbmdcbiAgICAgIGxvY2FsZXM/OiBzdHJpbmdbXVxuICAgICAgZGVmYXVsdExvY2FsZT86IHN0cmluZ1xuICAgIH1cbiAgKSB7XG4gICAgLy8gcmVwcmVzZW50cyB0aGUgY3VycmVudCBjb21wb25lbnQga2V5XG4gICAgdGhpcy5yb3V0ZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKHBhdGhuYW1lKVxuXG4gICAgLy8gc2V0IHVwIHRoZSBjb21wb25lbnQgY2FjaGUgKGJ5IHJvdXRlIGtleXMpXG4gICAgdGhpcy5jb21wb25lbnRzID0ge31cbiAgICAvLyBXZSBzaG91bGQgbm90IGtlZXAgdGhlIGNhY2hlLCBpZiB0aGVyZSdzIGFuIGVycm9yXG4gICAgLy8gT3RoZXJ3aXNlLCB0aGlzIGNhdXNlIGlzc3VlcyB3aGVuIHdoZW4gZ29pbmcgYmFjayBhbmRcbiAgICAvLyBjb21lIGFnYWluIHRvIHRoZSBlcnJvcmVkIHBhZ2UuXG4gICAgaWYgKHBhdGhuYW1lICE9PSAnL19lcnJvcicpIHtcbiAgICAgIHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSA9IHtcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0czogaW5pdGlhbFN0eWxlU2hlZXRzLFxuICAgICAgICBwcm9wczogaW5pdGlhbFByb3BzLFxuICAgICAgICBlcnIsXG4gICAgICAgIF9fTl9TU0c6IGluaXRpYWxQcm9wcyAmJiBpbml0aWFsUHJvcHMuX19OX1NTRyxcbiAgICAgICAgX19OX1NTUDogaW5pdGlhbFByb3BzICYmIGluaXRpYWxQcm9wcy5fX05fU1NQLFxuICAgICAgfVxuICAgIH1cblxuICAgIHRoaXMuY29tcG9uZW50c1snL19hcHAnXSA9IHtcbiAgICAgIENvbXBvbmVudDogQXBwIGFzIENvbXBvbmVudFR5cGUsXG4gICAgICBzdHlsZVNoZWV0czogW1xuICAgICAgICAvKiAvX2FwcCBkb2VzIG5vdCBuZWVkIGl0cyBzdHlsZXNoZWV0cyBtYW5hZ2VkICovXG4gICAgICBdLFxuICAgIH1cblxuICAgIC8vIEJhY2t3YXJkcyBjb21wYXQgZm9yIFJvdXRlci5yb3V0ZXIuZXZlbnRzXG4gICAgLy8gVE9ETzogU2hvdWxkIGJlIHJlbW92ZSB0aGUgZm9sbG93aW5nIG1ham9yIHZlcnNpb24gYXMgaXQgd2FzIG5ldmVyIGRvY3VtZW50ZWRcbiAgICB0aGlzLmV2ZW50cyA9IFJvdXRlci5ldmVudHNcblxuICAgIHRoaXMucGFnZUxvYWRlciA9IHBhZ2VMb2FkZXJcbiAgICB0aGlzLnBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICB0aGlzLnF1ZXJ5ID0gcXVlcnlcbiAgICAvLyBpZiBhdXRvIHByZXJlbmRlcmVkIGFuZCBkeW5hbWljIHJvdXRlIHdhaXQgdG8gdXBkYXRlIGFzUGF0aFxuICAgIC8vIHVudGlsIGFmdGVyIG1vdW50IHRvIHByZXZlbnQgaHlkcmF0aW9uIG1pc21hdGNoXG4gICAgdGhpcy5hc1BhdGggPVxuICAgICAgLy8gQHRzLWlnbm9yZSB0aGlzIGlzIHRlbXBvcmFyaWx5IGdsb2JhbCAoYXR0YWNoZWQgdG8gd2luZG93KVxuICAgICAgaXNEeW5hbWljUm91dGUocGF0aG5hbWUpICYmIF9fTkVYVF9EQVRBX18uYXV0b0V4cG9ydCA/IHBhdGhuYW1lIDogYXNcbiAgICB0aGlzLmJhc2VQYXRoID0gYmFzZVBhdGhcbiAgICB0aGlzLnN1YiA9IHN1YnNjcmlwdGlvblxuICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIHRoaXMuX3dyYXBBcHAgPSB3cmFwQXBwXG4gICAgLy8gbWFrZSBzdXJlIHRvIGlnbm9yZSBleHRyYSBwb3BTdGF0ZSBpbiBzYWZhcmkgb24gbmF2aWdhdGluZ1xuICAgIC8vIGJhY2sgZnJvbSBleHRlcm5hbCBzaXRlXG4gICAgdGhpcy5pc1NzciA9IHRydWVcblxuICAgIHRoaXMuaXNGYWxsYmFjayA9IGlzRmFsbGJhY2tcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVxuICAgICAgdGhpcy5sb2NhbGVzID0gbG9jYWxlc1xuICAgICAgdGhpcy5kZWZhdWx0TG9jYWxlID0gZGVmYXVsdExvY2FsZVxuICAgIH1cblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgLy8gbWFrZSBzdXJlIFwiYXNcIiBkb2Vzbid0IHN0YXJ0IHdpdGggZG91YmxlIHNsYXNoZXMgb3IgZWxzZSBpdCBjYW5cbiAgICAgIC8vIHRocm93IGFuIGVycm9yIGFzIGl0J3MgY29uc2lkZXJlZCBpbnZhbGlkXG4gICAgICBpZiAoYXMuc3Vic3RyKDAsIDIpICE9PSAnLy8nKSB7XG4gICAgICAgIC8vIGluIG9yZGVyIGZvciBgZS5zdGF0ZWAgdG8gd29yayBvbiB0aGUgYG9ucG9wc3RhdGVgIGV2ZW50XG4gICAgICAgIC8vIHdlIGhhdmUgdG8gcmVnaXN0ZXIgdGhlIGluaXRpYWwgcm91dGUgdXBvbiBpbml0aWFsaXphdGlvblxuICAgICAgICB0aGlzLmNoYW5nZVN0YXRlKFxuICAgICAgICAgICdyZXBsYWNlU3RhdGUnLFxuICAgICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgICAgZ2V0VVJMKClcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcigncG9wc3RhdGUnLCB0aGlzLm9uUG9wU3RhdGUpXG5cbiAgICAgIC8vIGVuYWJsZSBjdXN0b20gc2Nyb2xsIHJlc3RvcmF0aW9uIGhhbmRsaW5nIHdoZW4gYXZhaWxhYmxlXG4gICAgICAvLyBvdGhlcndpc2UgZmFsbGJhY2sgdG8gYnJvd3NlcidzIGRlZmF1bHQgaGFuZGxpbmdcbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbikge1xuICAgICAgICAgIHdpbmRvdy5oaXN0b3J5LnNjcm9sbFJlc3RvcmF0aW9uID0gJ21hbnVhbCdcblxuICAgICAgICAgIGxldCBzY3JvbGxEZWJvdW5jZVRpbWVvdXQ6IHVuZGVmaW5lZCB8IE5vZGVKUy5UaW1lb3V0XG5cbiAgICAgICAgICBjb25zdCBkZWJvdW5jZWRTY3JvbGxTYXZlID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHNjcm9sbERlYm91bmNlVGltZW91dCkgY2xlYXJUaW1lb3V0KHNjcm9sbERlYm91bmNlVGltZW91dClcblxuICAgICAgICAgICAgc2Nyb2xsRGVib3VuY2VUaW1lb3V0ID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHsgdXJsLCBhczogY3VyQXMsIG9wdGlvbnMgfSA9IGhpc3Rvcnkuc3RhdGVcbiAgICAgICAgICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgICAgICAgICAncmVwbGFjZVN0YXRlJyxcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgY3VyQXMsXG4gICAgICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgb3B0aW9ucywge1xuICAgICAgICAgICAgICAgICAgX05fWDogd2luZG93LnNjcm9sbFgsXG4gICAgICAgICAgICAgICAgICBfTl9ZOiB3aW5kb3cuc2Nyb2xsWSxcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9LCAxMClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignc2Nyb2xsJywgZGVib3VuY2VkU2Nyb2xsU2F2ZSlcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG9uUG9wU3RhdGUgPSAoZTogUG9wU3RhdGVFdmVudCk6IHZvaWQgPT4ge1xuICAgIGNvbnN0IHN0YXRlID0gZS5zdGF0ZSBhcyBIaXN0b3J5U3RhdGVcblxuICAgIGlmICghc3RhdGUpIHtcbiAgICAgIC8vIFdlIGdldCBzdGF0ZSBhcyB1bmRlZmluZWQgZm9yIHR3byByZWFzb25zLlxuICAgICAgLy8gIDEuIFdpdGggb2xkZXIgc2FmYXJpICg8IDgpIGFuZCBvbGRlciBjaHJvbWUgKDwgMzQpXG4gICAgICAvLyAgMi4gV2hlbiB0aGUgVVJMIGNoYW5nZWQgd2l0aCAjXG4gICAgICAvL1xuICAgICAgLy8gSW4gdGhlIGJvdGggY2FzZXMsIHdlIGRvbid0IG5lZWQgdG8gcHJvY2VlZCBhbmQgY2hhbmdlIHRoZSByb3V0ZS5cbiAgICAgIC8vIChhcyBpdCdzIGFscmVhZHkgY2hhbmdlZClcbiAgICAgIC8vIEJ1dCB3ZSBjYW4gc2ltcGx5IHJlcGxhY2UgdGhlIHN0YXRlIHdpdGggdGhlIG5ldyBjaGFuZ2VzLlxuICAgICAgLy8gQWN0dWFsbHksIGZvciAoMSkgd2UgZG9uJ3QgbmVlZCB0byBub3RoaW5nLiBCdXQgaXQncyBoYXJkIHRvIGRldGVjdCB0aGF0IGV2ZW50LlxuICAgICAgLy8gU28sIGRvaW5nIHRoZSBmb2xsb3dpbmcgZm9yICgxKSBkb2VzIG5vIGhhcm0uXG4gICAgICBjb25zdCB7IHBhdGhuYW1lLCBxdWVyeSB9ID0gdGhpc1xuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICAgIGZvcm1hdFdpdGhWYWxpZGF0aW9uKHsgcGF0aG5hbWU6IGFkZEJhc2VQYXRoKHBhdGhuYW1lKSwgcXVlcnkgfSksXG4gICAgICAgIGdldFVSTCgpXG4gICAgICApXG4gICAgICByZXR1cm5cbiAgICB9XG5cbiAgICBpZiAoIXN0YXRlLl9fTikge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3QgeyB1cmwsIGFzLCBvcHRpb25zIH0gPSBzdGF0ZVxuXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICAvLyBNYWtlIHN1cmUgd2UgZG9uJ3QgcmUtcmVuZGVyIG9uIGluaXRpYWwgbG9hZCxcbiAgICAvLyBjYW4gYmUgY2F1c2VkIGJ5IG5hdmlnYXRpbmcgYmFjayBmcm9tIGFuIGV4dGVybmFsIHNpdGVcbiAgICBpZiAodGhpcy5pc1NzciAmJiBhcyA9PT0gdGhpcy5hc1BhdGggJiYgcGF0aG5hbWUgPT09IHRoaXMucGF0aG5hbWUpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIC8vIElmIHRoZSBkb3duc3RyZWFtIGFwcGxpY2F0aW9uIHJldHVybnMgZmFsc3ksIHJldHVybi5cbiAgICAvLyBUaGV5IHdpbGwgdGhlbiBiZSByZXNwb25zaWJsZSBmb3IgaGFuZGxpbmcgdGhlIGV2ZW50LlxuICAgIGlmICh0aGlzLl9icHMgJiYgIXRoaXMuX2JwcyhzdGF0ZSkpIHtcbiAgICAgIHJldHVyblxuICAgIH1cblxuICAgIHRoaXMuY2hhbmdlKFxuICAgICAgJ3JlcGxhY2VTdGF0ZScsXG4gICAgICB1cmwsXG4gICAgICBhcyxcbiAgICAgIE9iamVjdC5hc3NpZ24oe30sIG9wdGlvbnMsIHtcbiAgICAgICAgc2hhbGxvdzogb3B0aW9ucy5zaGFsbG93ICYmIHRoaXMuX3NoYWxsb3csXG4gICAgICAgIGxvY2FsZTogb3B0aW9ucy5sb2NhbGUgfHwgdGhpcy5kZWZhdWx0TG9jYWxlLFxuICAgICAgfSlcbiAgICApXG4gIH1cblxuICByZWxvYWQoKTogdm9pZCB7XG4gICAgd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpXG4gIH1cblxuICAvKipcbiAgICogR28gYmFjayBpbiBoaXN0b3J5XG4gICAqL1xuICBiYWNrKCkge1xuICAgIHdpbmRvdy5oaXN0b3J5LmJhY2soKVxuICB9XG5cbiAgLyoqXG4gICAqIFBlcmZvcm1zIGEgYHB1c2hTdGF0ZWAgd2l0aCBhcmd1bWVudHNcbiAgICogQHBhcmFtIHVybCBvZiB0aGUgcm91dGVcbiAgICogQHBhcmFtIGFzIG1hc2tzIGB1cmxgIGZvciB0aGUgYnJvd3NlclxuICAgKiBAcGFyYW0gb3B0aW9ucyBvYmplY3QgeW91IGNhbiBkZWZpbmUgYHNoYWxsb3dgIGFuZCBvdGhlciBvcHRpb25zXG4gICAqL1xuICBwdXNoKHVybDogVXJsLCBhczogVXJsID0gdXJsLCBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9KSB7XG4gICAgOyh7IHVybCwgYXMgfSA9IHByZXBhcmVVcmxBcyh0aGlzLCB1cmwsIGFzKSlcbiAgICByZXR1cm4gdGhpcy5jaGFuZ2UoJ3B1c2hTdGF0ZScsIHVybCwgYXMsIG9wdGlvbnMpXG4gIH1cblxuICAvKipcbiAgICogUGVyZm9ybXMgYSBgcmVwbGFjZVN0YXRlYCB3aXRoIGFyZ3VtZW50c1xuICAgKiBAcGFyYW0gdXJsIG9mIHRoZSByb3V0ZVxuICAgKiBAcGFyYW0gYXMgbWFza3MgYHVybGAgZm9yIHRoZSBicm93c2VyXG4gICAqIEBwYXJhbSBvcHRpb25zIG9iamVjdCB5b3UgY2FuIGRlZmluZSBgc2hhbGxvd2AgYW5kIG90aGVyIG9wdGlvbnNcbiAgICovXG4gIHJlcGxhY2UodXJsOiBVcmwsIGFzOiBVcmwgPSB1cmwsIG9wdGlvbnM6IFRyYW5zaXRpb25PcHRpb25zID0ge30pIHtcbiAgICA7KHsgdXJsLCBhcyB9ID0gcHJlcGFyZVVybEFzKHRoaXMsIHVybCwgYXMpKVxuICAgIHJldHVybiB0aGlzLmNoYW5nZSgncmVwbGFjZVN0YXRlJywgdXJsLCBhcywgb3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGNoYW5nZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9uc1xuICApOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgICBpZiAoIWlzTG9jYWxVUkwodXJsKSkge1xuICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmxcbiAgICAgIHJldHVybiBmYWxzZVxuICAgIH1cblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSTE4Tl9TVVBQT1JUKSB7XG4gICAgICB0aGlzLmxvY2FsZSA9IG9wdGlvbnMubG9jYWxlIHx8IHRoaXMubG9jYWxlXG5cbiAgICAgIGlmICh0eXBlb2Ygb3B0aW9ucy5sb2NhbGUgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIG9wdGlvbnMubG9jYWxlID0gdGhpcy5sb2NhbGVcbiAgICAgIH1cblxuICAgICAgY29uc3Qge1xuICAgICAgICBub3JtYWxpemVMb2NhbGVQYXRoLFxuICAgICAgfSA9IHJlcXVpcmUoJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJykgYXMgdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnKVxuXG4gICAgICBjb25zdCBsb2NhbGVQYXRoUmVzdWx0ID0gbm9ybWFsaXplTG9jYWxlUGF0aChhcywgdGhpcy5sb2NhbGVzKVxuXG4gICAgICBpZiAobG9jYWxlUGF0aFJlc3VsdC5kZXRlY3RlZExvY2FsZSkge1xuICAgICAgICB0aGlzLmxvY2FsZSA9IGxvY2FsZVBhdGhSZXN1bHQuZGV0ZWN0ZWRMb2NhbGVcbiAgICAgICAgdXJsID0gbG9jYWxlUGF0aFJlc3VsdC5wYXRobmFtZVxuICAgICAgfVxuICAgIH1cblxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCkge1xuICAgICAgdGhpcy5pc1NzciA9IGZhbHNlXG4gICAgfVxuICAgIC8vIG1hcmtpbmcgcm91dGUgY2hhbmdlcyBhcyBhIG5hdmlnYXRpb24gc3RhcnQgZW50cnlcbiAgICBpZiAoU1QpIHtcbiAgICAgIHBlcmZvcm1hbmNlLm1hcmsoJ3JvdXRlQ2hhbmdlJylcbiAgICB9XG5cbiAgICBpZiAodGhpcy5faW5GbGlnaHRSb3V0ZSkge1xuICAgICAgdGhpcy5hYm9ydENvbXBvbmVudExvYWQodGhpcy5faW5GbGlnaHRSb3V0ZSlcbiAgICB9XG5cbiAgICBhcyA9IGFkZExvY2FsZShhcywgb3B0aW9ucy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSlcbiAgICBjb25zdCBjbGVhbmVkQXMgPSBkZWxMb2NhbGUoXG4gICAgICBoYXNCYXNlUGF0aChhcykgPyBkZWxCYXNlUGF0aChhcykgOiBhcyxcbiAgICAgIHRoaXMubG9jYWxlXG4gICAgKVxuICAgIHRoaXMuX2luRmxpZ2h0Um91dGUgPSBhc1xuXG4gICAgLy8gSWYgdGhlIHVybCBjaGFuZ2UgaXMgb25seSByZWxhdGVkIHRvIGEgaGFzaCBjaGFuZ2VcbiAgICAvLyBXZSBzaG91bGQgbm90IHByb2NlZWQuIFdlIHNob3VsZCBvbmx5IGNoYW5nZSB0aGUgc3RhdGUuXG5cbiAgICAvLyBXQVJOSU5HOiBgX2hgIGlzIGFuIGludGVybmFsIG9wdGlvbiBmb3IgaGFuZGluZyBOZXh0LmpzIGNsaWVudC1zaWRlXG4gICAgLy8gaHlkcmF0aW9uLiBZb3VyIGFwcCBzaG91bGQgX25ldmVyXyB1c2UgdGhpcyBwcm9wZXJ0eS4gSXQgbWF5IGNoYW5nZSBhdFxuICAgIC8vIGFueSB0aW1lIHdpdGhvdXQgbm90aWNlLlxuICAgIGlmICghKG9wdGlvbnMgYXMgYW55KS5faCAmJiB0aGlzLm9ubHlBSGFzaENoYW5nZShjbGVhbmVkQXMpKSB7XG4gICAgICB0aGlzLmFzUGF0aCA9IGNsZWFuZWRBc1xuICAgICAgUm91dGVyLmV2ZW50cy5lbWl0KCdoYXNoQ2hhbmdlU3RhcnQnLCBhcylcbiAgICAgIC8vIFRPRE86IGRvIHdlIG5lZWQgdGhlIHJlc29sdmVkIGhyZWYgd2hlbiBvbmx5IGEgaGFzaCBjaGFuZ2U/XG4gICAgICB0aGlzLmNoYW5nZVN0YXRlKG1ldGhvZCwgdXJsLCBhcywgb3B0aW9ucylcbiAgICAgIHRoaXMuc2Nyb2xsVG9IYXNoKGNsZWFuZWRBcylcbiAgICAgIHRoaXMubm90aWZ5KHRoaXMuY29tcG9uZW50c1t0aGlzLnJvdXRlXSlcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnaGFzaENoYW5nZUNvbXBsZXRlJywgYXMpXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH1cblxuICAgIC8vIFRoZSBidWlsZCBtYW5pZmVzdCBuZWVkcyB0byBiZSBsb2FkZWQgYmVmb3JlIGF1dG8tc3RhdGljIGR5bmFtaWMgcGFnZXNcbiAgICAvLyBnZXQgdGhlaXIgcXVlcnkgcGFyYW1ldGVycyB0byBhbGxvdyBlbnN1cmluZyB0aGV5IGNhbiBiZSBwYXJzZWQgcHJvcGVybHlcbiAgICAvLyB3aGVuIHJld3JpdHRlbiB0b1xuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcbiAgICBjb25zdCB7IF9fcmV3cml0ZXM6IHJld3JpdGVzIH0gPSBhd2FpdCB0aGlzLnBhZ2VMb2FkZXIucHJvbWlzZWRCdWlsZE1hbmlmZXN0XG5cbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSwgcXVlcnkgfSA9IHBhcnNlZFxuXG4gICAgcGFyc2VkID0gdGhpcy5fcmVzb2x2ZUhyZWYocGFyc2VkLCBwYWdlcykgYXMgdHlwZW9mIHBhcnNlZFxuXG4gICAgaWYgKHBhcnNlZC5wYXRobmFtZSAhPT0gcGF0aG5hbWUpIHtcbiAgICAgIHBhdGhuYW1lID0gcGFyc2VkLnBhdGhuYW1lXG4gICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG4gICAgfVxuXG4gICAgLy8gdXJsIGFuZCBhcyBzaG91bGQgYWx3YXlzIGJlIHByZWZpeGVkIHdpdGggYmFzZVBhdGggYnkgdGhpc1xuICAgIC8vIHBvaW50IGJ5IGVpdGhlciBuZXh0L2xpbmsgb3Igcm91dGVyLnB1c2gvcmVwbGFjZSBzbyBzdHJpcCB0aGVcbiAgICAvLyBiYXNlUGF0aCBmcm9tIHRoZSBwYXRobmFtZSB0byBtYXRjaCB0aGUgcGFnZXMgZGlyIDEtdG8tMVxuICAgIHBhdGhuYW1lID0gcGF0aG5hbWVcbiAgICAgID8gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goZGVsQmFzZVBhdGgocGF0aG5hbWUpKVxuICAgICAgOiBwYXRobmFtZVxuXG4gICAgLy8gSWYgYXNrZWQgdG8gY2hhbmdlIHRoZSBjdXJyZW50IFVSTCB3ZSBzaG91bGQgcmVsb2FkIHRoZSBjdXJyZW50IHBhZ2VcbiAgICAvLyAobm90IGxvY2F0aW9uLnJlbG9hZCgpIGJ1dCByZWxvYWQgZ2V0SW5pdGlhbFByb3BzIGFuZCBvdGhlciBOZXh0LmpzIHN0dWZmcylcbiAgICAvLyBXZSBhbHNvIG5lZWQgdG8gc2V0IHRoZSBtZXRob2QgPSByZXBsYWNlU3RhdGUgYWx3YXlzXG4gICAgLy8gYXMgdGhpcyBzaG91bGQgbm90IGdvIGludG8gdGhlIGhpc3RvcnkgKFRoYXQncyBob3cgYnJvd3NlcnMgd29yaylcbiAgICAvLyBXZSBzaG91bGQgY29tcGFyZSB0aGUgbmV3IGFzUGF0aCB0byB0aGUgY3VycmVudCBhc1BhdGgsIG5vdCB0aGUgdXJsXG4gICAgaWYgKCF0aGlzLnVybElzTmV3KGNsZWFuZWRBcykpIHtcbiAgICAgIG1ldGhvZCA9ICdyZXBsYWNlU3RhdGUnXG4gICAgfVxuXG4gICAgbGV0IHJvdXRlID0gcmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2gocGF0aG5hbWUpXG4gICAgY29uc3QgeyBzaGFsbG93ID0gZmFsc2UgfSA9IG9wdGlvbnNcblxuICAgIC8vIHdlIG5lZWQgdG8gcmVzb2x2ZSB0aGUgYXMgdmFsdWUgdXNpbmcgcmV3cml0ZXMgZm9yIGR5bmFtaWMgU1NHXG4gICAgLy8gcGFnZXMgdG8gYWxsb3cgYnVpbGRpbmcgdGhlIGRhdGEgVVJMIGNvcnJlY3RseVxuICAgIGxldCByZXNvbHZlZEFzID0gYXNcblxuICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfSEFTX1JFV1JJVEVTKSB7XG4gICAgICByZXNvbHZlZEFzID0gcmVzb2x2ZVJld3JpdGVzKFxuICAgICAgICBwYXJzZVJlbGF0aXZlVXJsKGFzKS5wYXRobmFtZSxcbiAgICAgICAgcGFnZXMsXG4gICAgICAgIGJhc2VQYXRoLFxuICAgICAgICByZXdyaXRlcyxcbiAgICAgICAgcXVlcnksXG4gICAgICAgIChwOiBzdHJpbmcpID0+IHRoaXMuX3Jlc29sdmVIcmVmKHsgcGF0aG5hbWU6IHAgfSwgcGFnZXMpLnBhdGhuYW1lIVxuICAgICAgKVxuXG4gICAgICBpZiAocmVzb2x2ZWRBcyAhPT0gYXMpIHtcbiAgICAgICAgY29uc3QgcG90ZW50aWFsSHJlZiA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKFxuICAgICAgICAgICAgT2JqZWN0LmFzc2lnbih7fSwgcGFyc2VkLCB7IHBhdGhuYW1lOiByZXNvbHZlZEFzIH0pLFxuICAgICAgICAgICAgcGFnZXMsXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICAgICkucGF0aG5hbWUhXG4gICAgICAgIClcblxuICAgICAgICAvLyBpZiB0aGlzIGRpcmVjdGx5IG1hdGNoZXMgYSBwYWdlIHdlIG5lZWQgdG8gdXBkYXRlIHRoZSBocmVmIHRvXG4gICAgICAgIC8vIGFsbG93IHRoZSBjb3JyZWN0IHBhZ2UgY2h1bmsgdG8gYmUgbG9hZGVkXG4gICAgICAgIGlmIChwYWdlcy5pbmNsdWRlcyhwb3RlbnRpYWxIcmVmKSkge1xuICAgICAgICAgIHJvdXRlID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhdGhuYW1lID0gcG90ZW50aWFsSHJlZlxuICAgICAgICAgIHBhcnNlZC5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJlc29sdmVkQXMgPSBkZWxMb2NhbGUoZGVsQmFzZVBhdGgocmVzb2x2ZWRBcyksIHRoaXMubG9jYWxlKVxuXG4gICAgaWYgKGlzRHluYW1pY1JvdXRlKHJvdXRlKSkge1xuICAgICAgY29uc3QgcGFyc2VkQXMgPSBwYXJzZVJlbGF0aXZlVXJsKHJlc29sdmVkQXMpXG4gICAgICBjb25zdCBhc1BhdGhuYW1lID0gcGFyc2VkQXMucGF0aG5hbWVcblxuICAgICAgY29uc3Qgcm91dGVSZWdleCA9IGdldFJvdXRlUmVnZXgocm91dGUpXG4gICAgICBjb25zdCByb3V0ZU1hdGNoID0gZ2V0Um91dGVNYXRjaGVyKHJvdXRlUmVnZXgpKGFzUGF0aG5hbWUpXG4gICAgICBjb25zdCBzaG91bGRJbnRlcnBvbGF0ZSA9IHJvdXRlID09PSBhc1BhdGhuYW1lXG4gICAgICBjb25zdCBpbnRlcnBvbGF0ZWRBcyA9IHNob3VsZEludGVycG9sYXRlXG4gICAgICAgID8gaW50ZXJwb2xhdGVBcyhyb3V0ZSwgYXNQYXRobmFtZSwgcXVlcnkpXG4gICAgICAgIDogKHt9IGFzIHsgcmVzdWx0OiB1bmRlZmluZWQ7IHBhcmFtczogdW5kZWZpbmVkIH0pXG5cbiAgICAgIGlmICghcm91dGVNYXRjaCB8fCAoc2hvdWxkSW50ZXJwb2xhdGUgJiYgIWludGVycG9sYXRlZEFzLnJlc3VsdCkpIHtcbiAgICAgICAgY29uc3QgbWlzc2luZ1BhcmFtcyA9IE9iamVjdC5rZXlzKHJvdXRlUmVnZXguZ3JvdXBzKS5maWx0ZXIoXG4gICAgICAgICAgKHBhcmFtKSA9PiAhcXVlcnlbcGFyYW1dXG4gICAgICAgIClcblxuICAgICAgICBpZiAobWlzc2luZ1BhcmFtcy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgYCR7XG4gICAgICAgICAgICAgICAgc2hvdWxkSW50ZXJwb2xhdGVcbiAgICAgICAgICAgICAgICAgID8gYEludGVycG9sYXRpbmcgaHJlZmBcbiAgICAgICAgICAgICAgICAgIDogYE1pc21hdGNoaW5nIFxcYGFzXFxgIGFuZCBcXGBocmVmXFxgYFxuICAgICAgICAgICAgICB9IGZhaWxlZCB0byBtYW51YWxseSBwcm92aWRlIGAgK1xuICAgICAgICAgICAgICAgIGB0aGUgcGFyYW1zOiAke21pc3NpbmdQYXJhbXMuam9pbihcbiAgICAgICAgICAgICAgICAgICcsICdcbiAgICAgICAgICAgICAgICApfSBpbiB0aGUgXFxgaHJlZlxcYCdzIFxcYHF1ZXJ5XFxgYFxuICAgICAgICAgICAgKVxuICAgICAgICAgIH1cblxuICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgIChzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICA/IGBUaGUgcHJvdmlkZWQgXFxgaHJlZlxcYCAoJHt1cmx9KSB2YWx1ZSBpcyBtaXNzaW5nIHF1ZXJ5IHZhbHVlcyAoJHttaXNzaW5nUGFyYW1zLmpvaW4oXG4gICAgICAgICAgICAgICAgICAnLCAnXG4gICAgICAgICAgICAgICAgKX0pIHRvIGJlIGludGVycG9sYXRlZCBwcm9wZXJseS4gYFxuICAgICAgICAgICAgICA6IGBUaGUgcHJvdmlkZWQgXFxgYXNcXGAgdmFsdWUgKCR7YXNQYXRobmFtZX0pIGlzIGluY29tcGF0aWJsZSB3aXRoIHRoZSBcXGBocmVmXFxgIHZhbHVlICgke3JvdXRlfSkuIGApICtcbiAgICAgICAgICAgICAgYFJlYWQgbW9yZTogaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvJHtcbiAgICAgICAgICAgICAgICBzaG91bGRJbnRlcnBvbGF0ZVxuICAgICAgICAgICAgICAgICAgPyAnaHJlZi1pbnRlcnBvbGF0aW9uLWZhaWxlZCdcbiAgICAgICAgICAgICAgICAgIDogJ2luY29tcGF0aWJsZS1ocmVmLWFzJ1xuICAgICAgICAgICAgICB9YFxuICAgICAgICAgIClcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChzaG91bGRJbnRlcnBvbGF0ZSkge1xuICAgICAgICBhcyA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKFxuICAgICAgICAgIE9iamVjdC5hc3NpZ24oe30sIHBhcnNlZEFzLCB7XG4gICAgICAgICAgICBwYXRobmFtZTogaW50ZXJwb2xhdGVkQXMucmVzdWx0LFxuICAgICAgICAgICAgcXVlcnk6IG9taXRQYXJtc0Zyb21RdWVyeShxdWVyeSwgaW50ZXJwb2xhdGVkQXMucGFyYW1zISksXG4gICAgICAgICAgfSlcbiAgICAgICAgKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2UgcGFyYW1zIGludG8gYHF1ZXJ5YCwgb3ZlcndyaXRpbmcgYW55IHNwZWNpZmllZCBpbiBzZWFyY2hcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgcm91dGVNYXRjaClcbiAgICAgIH1cbiAgICB9XG5cbiAgICBSb3V0ZXIuZXZlbnRzLmVtaXQoJ3JvdXRlQ2hhbmdlU3RhcnQnLCBhcylcblxuICAgIHRyeSB7XG4gICAgICBjb25zdCByb3V0ZUluZm8gPSBhd2FpdCB0aGlzLmdldFJvdXRlSW5mbyhcbiAgICAgICAgcm91dGUsXG4gICAgICAgIHBhdGhuYW1lLFxuICAgICAgICBxdWVyeSxcbiAgICAgICAgYXMsXG4gICAgICAgIHNoYWxsb3dcbiAgICAgIClcbiAgICAgIGxldCB7IGVycm9yLCBwcm9wcywgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIC8vIGhhbmRsZSByZWRpcmVjdCBvbiBjbGllbnQtdHJhbnNpdGlvblxuICAgICAgaWYgKFxuICAgICAgICAoX19OX1NTRyB8fCBfX05fU1NQKSAmJlxuICAgICAgICBwcm9wcyAmJlxuICAgICAgICAocHJvcHMgYXMgYW55KS5wYWdlUHJvcHMgJiZcbiAgICAgICAgKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuICAgICAgKSB7XG4gICAgICAgIGNvbnN0IGRlc3RpbmF0aW9uID0gKHByb3BzIGFzIGFueSkucGFnZVByb3BzLl9fTl9SRURJUkVDVFxuXG4gICAgICAgIC8vIGNoZWNrIGlmIGRlc3RpbmF0aW9uIGlzIGludGVybmFsIChyZXNvbHZlcyB0byBhIHBhZ2UpIGFuZCBhdHRlbXB0XG4gICAgICAgIC8vIGNsaWVudC1uYXZpZ2F0aW9uIGlmIGl0IGlzIGZhbGxpbmcgYmFjayB0byBoYXJkIG5hdmlnYXRpb24gaWZcbiAgICAgICAgLy8gaXQncyBub3RcbiAgICAgICAgaWYgKGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgIGNvbnN0IHBhcnNlZEhyZWYgPSBwYXJzZVJlbGF0aXZlVXJsKGRlc3RpbmF0aW9uKVxuICAgICAgICAgIHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZEhyZWYsIHBhZ2VzKVxuXG4gICAgICAgICAgaWYgKHBhZ2VzLmluY2x1ZGVzKHBhcnNlZEhyZWYucGF0aG5hbWUpKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5jaGFuZ2UobWV0aG9kLCBkZXN0aW5hdGlvbiwgZGVzdGluYXRpb24sIG9wdGlvbnMpXG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBkZXN0aW5hdGlvblxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKCkgPT4ge30pXG4gICAgICB9XG5cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgnYmVmb3JlSGlzdG9yeUNoYW5nZScsIGFzKVxuICAgICAgdGhpcy5jaGFuZ2VTdGF0ZShcbiAgICAgICAgbWV0aG9kLFxuICAgICAgICB1cmwsXG4gICAgICAgIGFkZExvY2FsZShhcywgb3B0aW9ucy5sb2NhbGUsIHRoaXMuZGVmYXVsdExvY2FsZSksXG4gICAgICAgIG9wdGlvbnNcbiAgICAgIClcblxuICAgICAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICAgICAgY29uc3QgYXBwQ29tcDogYW55ID0gdGhpcy5jb21wb25lbnRzWycvX2FwcCddLkNvbXBvbmVudFxuICAgICAgICA7KHdpbmRvdyBhcyBhbnkpLm5leHQuaXNQcmVyZW5kZXJlZCA9XG4gICAgICAgICAgYXBwQ29tcC5nZXRJbml0aWFsUHJvcHMgPT09IGFwcENvbXAub3JpZ0dldEluaXRpYWxQcm9wcyAmJlxuICAgICAgICAgICEocm91dGVJbmZvLkNvbXBvbmVudCBhcyBhbnkpLmdldEluaXRpYWxQcm9wc1xuICAgICAgfVxuXG4gICAgICBhd2FpdCB0aGlzLnNldChyb3V0ZSwgcGF0aG5hbWUhLCBxdWVyeSwgY2xlYW5lZEFzLCByb3V0ZUluZm8pLmNhdGNoKFxuICAgICAgICAoZSkgPT4ge1xuICAgICAgICAgIGlmIChlLmNhbmNlbGxlZCkgZXJyb3IgPSBlcnJvciB8fCBlXG4gICAgICAgICAgZWxzZSB0aHJvdyBlXG4gICAgICAgIH1cbiAgICAgIClcblxuICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVycm9yLCBjbGVhbmVkQXMpXG4gICAgICAgIHRocm93IGVycm9yXG4gICAgICB9XG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5fX05FWFRfU0NST0xMX1JFU1RPUkFUSU9OKSB7XG4gICAgICAgIGlmIChtYW51YWxTY3JvbGxSZXN0b3JhdGlvbiAmJiAnX05fWCcgaW4gb3B0aW9ucykge1xuICAgICAgICAgIHdpbmRvdy5zY3JvbGxUbygob3B0aW9ucyBhcyBhbnkpLl9OX1gsIChvcHRpb25zIGFzIGFueSkuX05fWSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgICBpZiAodGhpcy5sb2NhbGUpIHtcbiAgICAgICAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQubGFuZyA9IHRoaXMubG9jYWxlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VDb21wbGV0ZScsIGFzKVxuXG4gICAgICByZXR1cm4gdHJ1ZVxuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgaWYgKGVyci5jYW5jZWxsZWQpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlXG4gICAgICB9XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH1cblxuICBjaGFuZ2VTdGF0ZShcbiAgICBtZXRob2Q6IEhpc3RvcnlNZXRob2QsXG4gICAgdXJsOiBzdHJpbmcsXG4gICAgYXM6IHN0cmluZyxcbiAgICBvcHRpb25zOiBUcmFuc2l0aW9uT3B0aW9ucyA9IHt9XG4gICk6IHZvaWQge1xuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5ID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICBjb25zb2xlLmVycm9yKGBXYXJuaW5nOiB3aW5kb3cuaGlzdG9yeSBpcyBub3QgYXZhaWxhYmxlLmApXG4gICAgICAgIHJldHVyblxuICAgICAgfVxuXG4gICAgICBpZiAodHlwZW9mIHdpbmRvdy5oaXN0b3J5W21ldGhvZF0gPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoYFdhcm5pbmc6IHdpbmRvdy5oaXN0b3J5LiR7bWV0aG9kfSBpcyBub3QgYXZhaWxhYmxlYClcbiAgICAgICAgcmV0dXJuXG4gICAgICB9XG4gICAgfVxuXG4gICAgaWYgKG1ldGhvZCAhPT0gJ3B1c2hTdGF0ZScgfHwgZ2V0VVJMKCkgIT09IGFzKSB7XG4gICAgICB0aGlzLl9zaGFsbG93ID0gb3B0aW9ucy5zaGFsbG93XG4gICAgICB3aW5kb3cuaGlzdG9yeVttZXRob2RdKFxuICAgICAgICB7XG4gICAgICAgICAgdXJsLFxuICAgICAgICAgIGFzLFxuICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgX19OOiB0cnVlLFxuICAgICAgICB9IGFzIEhpc3RvcnlTdGF0ZSxcbiAgICAgICAgLy8gTW9zdCBicm93c2VycyBjdXJyZW50bHkgaWdub3JlcyB0aGlzIHBhcmFtZXRlciwgYWx0aG91Z2ggdGhleSBtYXkgdXNlIGl0IGluIHRoZSBmdXR1cmUuXG4gICAgICAgIC8vIFBhc3NpbmcgdGhlIGVtcHR5IHN0cmluZyBoZXJlIHNob3VsZCBiZSBzYWZlIGFnYWluc3QgZnV0dXJlIGNoYW5nZXMgdG8gdGhlIG1ldGhvZC5cbiAgICAgICAgLy8gaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvQVBJL0hpc3RvcnkvcmVwbGFjZVN0YXRlXG4gICAgICAgICcnLFxuICAgICAgICBhc1xuICAgICAgKVxuICAgIH1cbiAgfVxuXG4gIGFzeW5jIGhhbmRsZVJvdXRlSW5mb0Vycm9yKFxuICAgIGVycjogRXJyb3IgJiB7IGNvZGU6IGFueTsgY2FuY2VsbGVkOiBib29sZWFuIH0sXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogUGFyc2VkVXJsUXVlcnksXG4gICAgYXM6IHN0cmluZyxcbiAgICBsb2FkRXJyb3JGYWlsPzogYm9vbGVhblxuICApOiBQcm9taXNlPFByaXZhdGVSb3V0ZUluZm8+IHtcbiAgICBpZiAoZXJyLmNhbmNlbGxlZCkge1xuICAgICAgLy8gYnViYmxlIHVwIGNhbmNlbGxhdGlvbiBlcnJvcnNcbiAgICAgIHRocm93IGVyclxuICAgIH1cblxuICAgIGlmIChQQUdFX0xPQURfRVJST1IgaW4gZXJyIHx8IGxvYWRFcnJvckZhaWwpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGVyciwgYXMpXG5cbiAgICAgIC8vIElmIHdlIGNhbid0IGxvYWQgdGhlIHBhZ2UgaXQgY291bGQgYmUgb25lIG9mIGZvbGxvd2luZyByZWFzb25zXG4gICAgICAvLyAgMS4gUGFnZSBkb2Vzbid0IGV4aXN0c1xuICAgICAgLy8gIDIuIFBhZ2UgZG9lcyBleGlzdCBpbiBhIGRpZmZlcmVudCB6b25lXG4gICAgICAvLyAgMy4gSW50ZXJuYWwgZXJyb3Igd2hpbGUgbG9hZGluZyB0aGUgcGFnZVxuXG4gICAgICAvLyBTbywgZG9pbmcgYSBoYXJkIHJlbG9hZCBpcyB0aGUgcHJvcGVyIHdheSB0byBkZWFsIHdpdGggdGhpcy5cbiAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYXNcblxuICAgICAgLy8gQ2hhbmdpbmcgdGhlIFVSTCBkb2Vzbid0IGJsb2NrIGV4ZWN1dGluZyB0aGUgY3VycmVudCBjb2RlIHBhdGguXG4gICAgICAvLyBTbyBsZXQncyB0aHJvdyBhIGNhbmNlbGxhdGlvbiBlcnJvciBzdG9wIHRoZSByb3V0aW5nIGxvZ2ljLlxuICAgICAgdGhyb3cgYnVpbGRDYW5jZWxsYXRpb25FcnJvcigpXG4gICAgfVxuXG4gICAgdHJ5IHtcbiAgICAgIGxldCBDb21wb25lbnQ6IENvbXBvbmVudFR5cGVcbiAgICAgIGxldCBzdHlsZVNoZWV0czogU3R5bGVTaGVldFR1cGxlW11cbiAgICAgIGxldCBwcm9wczogUmVjb3JkPHN0cmluZywgYW55PiB8IHVuZGVmaW5lZFxuICAgICAgY29uc3Qgc3NnNDA0ID0gZXJyLm1lc3NhZ2UgPT09IFNTR19EQVRBX05PVF9GT1VORF9FUlJPUlxuXG4gICAgICBpZiAoc3NnNDA0KSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbGV0IG1vZDogYW55XG4gICAgICAgICAgOyh7IHBhZ2U6IENvbXBvbmVudCwgc3R5bGVTaGVldHMsIG1vZCB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAgICcvNDA0J1xuICAgICAgICAgICkpXG5cbiAgICAgICAgICAvLyBUT0RPOiBzaG91bGQgd2UgdG9sZXJhdGUgdGhlc2UgcHJvcHMgbWlzc2luZyBhbmQgc3RpbGwgcmVuZGVyIHRoZVxuICAgICAgICAgIC8vIHBhZ2UgaW5zdGVhZCBvZiBmYWxsaW5nIGJhY2sgdG8gX2Vycm9yP1xuICAgICAgICAgIGlmIChtb2QgJiYgbW9kLl9fTl9TU0cpIHtcbiAgICAgICAgICAgIHByb3BzID0gYXdhaXQgdGhpcy5fZ2V0U3RhdGljRGF0YShcbiAgICAgICAgICAgICAgdGhpcy5wYWdlTG9hZGVyLmdldERhdGFIcmVmKCcvNDA0JywgJy80MDQnLCB0cnVlLCB0aGlzLmxvY2FsZSlcbiAgICAgICAgICAgIClcbiAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKF9lcnIpIHtcbiAgICAgICAgICAvLyBub24tZmF0YWwgZmFsbGJhY2sgdG8gX2Vycm9yXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgaWYgKFxuICAgICAgICB0eXBlb2YgQ29tcG9uZW50ISA9PT0gJ3VuZGVmaW5lZCcgfHxcbiAgICAgICAgdHlwZW9mIHN0eWxlU2hlZXRzISA9PT0gJ3VuZGVmaW5lZCdcbiAgICAgICkge1xuICAgICAgICA7KHsgcGFnZTogQ29tcG9uZW50LCBzdHlsZVNoZWV0cyB9ID0gYXdhaXQgdGhpcy5mZXRjaENvbXBvbmVudChcbiAgICAgICAgICAnL19lcnJvcidcbiAgICAgICAgKSlcbiAgICAgIH1cblxuICAgICAgY29uc3Qgcm91dGVJbmZvOiBQcml2YXRlUm91dGVJbmZvID0ge1xuICAgICAgICBwcm9wcyxcbiAgICAgICAgQ29tcG9uZW50LFxuICAgICAgICBzdHlsZVNoZWV0cyxcbiAgICAgICAgZXJyOiBzc2c0MDQgPyB1bmRlZmluZWQgOiBlcnIsXG4gICAgICAgIGVycm9yOiBzc2c0MDQgPyB1bmRlZmluZWQgOiBlcnIsXG4gICAgICB9XG5cbiAgICAgIGlmICghcm91dGVJbmZvLnByb3BzKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0gYXdhaXQgdGhpcy5nZXRJbml0aWFsUHJvcHMoQ29tcG9uZW50LCB7XG4gICAgICAgICAgICBlcnIsXG4gICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIH0gYXMgYW55KVxuICAgICAgICB9IGNhdGNoIChnaXBFcnIpIHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBpbiBlcnJvciBwYWdlIGBnZXRJbml0aWFsUHJvcHNgOiAnLCBnaXBFcnIpXG4gICAgICAgICAgcm91dGVJbmZvLnByb3BzID0ge31cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gcm91dGVJbmZvXG4gICAgfSBjYXRjaCAocm91dGVJbmZvRXJyKSB7XG4gICAgICByZXR1cm4gdGhpcy5oYW5kbGVSb3V0ZUluZm9FcnJvcihyb3V0ZUluZm9FcnIsIHBhdGhuYW1lLCBxdWVyeSwgYXMsIHRydWUpXG4gICAgfVxuICB9XG5cbiAgYXN5bmMgZ2V0Um91dGVJbmZvKFxuICAgIHJvdXRlOiBzdHJpbmcsXG4gICAgcGF0aG5hbWU6IHN0cmluZyxcbiAgICBxdWVyeTogYW55LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgc2hhbGxvdzogYm9vbGVhbiA9IGZhbHNlXG4gICk6IFByb21pc2U8UHJpdmF0ZVJvdXRlSW5mbz4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBjYWNoZWRSb3V0ZUluZm8gPSB0aGlzLmNvbXBvbmVudHNbcm91dGVdXG5cbiAgICAgIGlmIChzaGFsbG93ICYmIGNhY2hlZFJvdXRlSW5mbyAmJiB0aGlzLnJvdXRlID09PSByb3V0ZSkge1xuICAgICAgICByZXR1cm4gY2FjaGVkUm91dGVJbmZvXG4gICAgICB9XG5cbiAgICAgIGNvbnN0IHJvdXRlSW5mbzogUHJpdmF0ZVJvdXRlSW5mbyA9IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA/IGNhY2hlZFJvdXRlSW5mb1xuICAgICAgICA6IGF3YWl0IHRoaXMuZmV0Y2hDb21wb25lbnQocm91dGUpLnRoZW4oKHJlcykgPT4gKHtcbiAgICAgICAgICAgIENvbXBvbmVudDogcmVzLnBhZ2UsXG4gICAgICAgICAgICBzdHlsZVNoZWV0czogcmVzLnN0eWxlU2hlZXRzLFxuICAgICAgICAgICAgX19OX1NTRzogcmVzLm1vZC5fX05fU1NHLFxuICAgICAgICAgICAgX19OX1NTUDogcmVzLm1vZC5fX05fU1NQLFxuICAgICAgICAgIH0pKVxuXG4gICAgICBjb25zdCB7IENvbXBvbmVudCwgX19OX1NTRywgX19OX1NTUCB9ID0gcm91dGVJbmZvXG5cbiAgICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViAhPT0gJ3Byb2R1Y3Rpb24nKSB7XG4gICAgICAgIGNvbnN0IHsgaXNWYWxpZEVsZW1lbnRUeXBlIH0gPSByZXF1aXJlKCdyZWFjdC1pcycpXG4gICAgICAgIGlmICghaXNWYWxpZEVsZW1lbnRUeXBlKENvbXBvbmVudCkpIHtcbiAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXG4gICAgICAgICAgICBgVGhlIGRlZmF1bHQgZXhwb3J0IGlzIG5vdCBhIFJlYWN0IENvbXBvbmVudCBpbiBwYWdlOiBcIiR7cGF0aG5hbWV9XCJgXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxldCBkYXRhSHJlZjogc3RyaW5nIHwgdW5kZWZpbmVkXG5cbiAgICAgIGlmIChfX05fU1NHIHx8IF9fTl9TU1ApIHtcbiAgICAgICAgZGF0YUhyZWYgPSB0aGlzLnBhZ2VMb2FkZXIuZ2V0RGF0YUhyZWYoXG4gICAgICAgICAgZm9ybWF0V2l0aFZhbGlkYXRpb24oeyBwYXRobmFtZSwgcXVlcnkgfSksXG4gICAgICAgICAgZGVsQmFzZVBhdGgoYXMpLFxuICAgICAgICAgIF9fTl9TU0csXG4gICAgICAgICAgdGhpcy5sb2NhbGVcbiAgICAgICAgKVxuICAgICAgfVxuXG4gICAgICBjb25zdCBwcm9wcyA9IGF3YWl0IHRoaXMuX2dldERhdGE8UHJpdmF0ZVJvdXRlSW5mbz4oKCkgPT5cbiAgICAgICAgX19OX1NTR1xuICAgICAgICAgID8gdGhpcy5fZ2V0U3RhdGljRGF0YShkYXRhSHJlZiEpXG4gICAgICAgICAgOiBfX05fU1NQXG4gICAgICAgICAgPyB0aGlzLl9nZXRTZXJ2ZXJEYXRhKGRhdGFIcmVmISlcbiAgICAgICAgICA6IHRoaXMuZ2V0SW5pdGlhbFByb3BzKFxuICAgICAgICAgICAgICBDb21wb25lbnQsXG4gICAgICAgICAgICAgIC8vIHdlIHByb3ZpZGUgQXBwVHJlZSBsYXRlciBzbyB0aGlzIG5lZWRzIHRvIGJlIGBhbnlgXG4gICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBwYXRobmFtZSxcbiAgICAgICAgICAgICAgICBxdWVyeSxcbiAgICAgICAgICAgICAgICBhc1BhdGg6IGFzLFxuICAgICAgICAgICAgICB9IGFzIGFueVxuICAgICAgICAgICAgKVxuICAgICAgKVxuXG4gICAgICByb3V0ZUluZm8ucHJvcHMgPSBwcm9wc1xuICAgICAgdGhpcy5jb21wb25lbnRzW3JvdXRlXSA9IHJvdXRlSW5mb1xuICAgICAgcmV0dXJuIHJvdXRlSW5mb1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgcmV0dXJuIHRoaXMuaGFuZGxlUm91dGVJbmZvRXJyb3IoZXJyLCBwYXRobmFtZSwgcXVlcnksIGFzKVxuICAgIH1cbiAgfVxuXG4gIHNldChcbiAgICByb3V0ZTogc3RyaW5nLFxuICAgIHBhdGhuYW1lOiBzdHJpbmcsXG4gICAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICAgIGFzOiBzdHJpbmcsXG4gICAgZGF0YTogUHJpdmF0ZVJvdXRlSW5mb1xuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICB0aGlzLmlzRmFsbGJhY2sgPSBmYWxzZVxuXG4gICAgdGhpcy5yb3V0ZSA9IHJvdXRlXG4gICAgdGhpcy5wYXRobmFtZSA9IHBhdGhuYW1lXG4gICAgdGhpcy5xdWVyeSA9IHF1ZXJ5XG4gICAgdGhpcy5hc1BhdGggPSBhc1xuICAgIHJldHVybiB0aGlzLm5vdGlmeShkYXRhKVxuICB9XG5cbiAgLyoqXG4gICAqIENhbGxiYWNrIHRvIGV4ZWN1dGUgYmVmb3JlIHJlcGxhY2luZyByb3V0ZXIgc3RhdGVcbiAgICogQHBhcmFtIGNiIGNhbGxiYWNrIHRvIGJlIGV4ZWN1dGVkXG4gICAqL1xuICBiZWZvcmVQb3BTdGF0ZShjYjogQmVmb3JlUG9wU3RhdGVDYWxsYmFjaykge1xuICAgIHRoaXMuX2JwcyA9IGNiXG4gIH1cblxuICBvbmx5QUhhc2hDaGFuZ2UoYXM6IHN0cmluZyk6IGJvb2xlYW4ge1xuICAgIGlmICghdGhpcy5hc1BhdGgpIHJldHVybiBmYWxzZVxuICAgIGNvbnN0IFtvbGRVcmxOb0hhc2gsIG9sZEhhc2hdID0gdGhpcy5hc1BhdGguc3BsaXQoJyMnKVxuICAgIGNvbnN0IFtuZXdVcmxOb0hhc2gsIG5ld0hhc2hdID0gYXMuc3BsaXQoJyMnKVxuXG4gICAgLy8gTWFrZXMgc3VyZSB3ZSBzY3JvbGwgdG8gdGhlIHByb3ZpZGVkIGhhc2ggaWYgdGhlIHVybC9oYXNoIGFyZSB0aGUgc2FtZVxuICAgIGlmIChuZXdIYXNoICYmIG9sZFVybE5vSGFzaCA9PT0gbmV3VXJsTm9IYXNoICYmIG9sZEhhc2ggPT09IG5ld0hhc2gpIHtcbiAgICAgIHJldHVybiB0cnVlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIHVybHMgYXJlIGNoYW5nZSwgdGhlcmUncyBtb3JlIHRoYW4gYSBoYXNoIGNoYW5nZVxuICAgIGlmIChvbGRVcmxOb0hhc2ggIT09IG5ld1VybE5vSGFzaCkge1xuICAgICAgcmV0dXJuIGZhbHNlXG4gICAgfVxuXG4gICAgLy8gSWYgdGhlIGhhc2ggaGFzIGNoYW5nZWQsIHRoZW4gaXQncyBhIGhhc2ggb25seSBjaGFuZ2UuXG4gICAgLy8gVGhpcyBjaGVjayBpcyBuZWNlc3NhcnkgdG8gaGFuZGxlIGJvdGggdGhlIGVudGVyIGFuZFxuICAgIC8vIGxlYXZlIGhhc2ggPT09ICcnIGNhc2VzLiBUaGUgaWRlbnRpdHkgY2FzZSBmYWxscyB0aHJvdWdoXG4gICAgLy8gYW5kIGlzIHRyZWF0ZWQgYXMgYSBuZXh0IHJlbG9hZC5cbiAgICByZXR1cm4gb2xkSGFzaCAhPT0gbmV3SGFzaFxuICB9XG5cbiAgc2Nyb2xsVG9IYXNoKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBjb25zdCBbLCBoYXNoXSA9IGFzLnNwbGl0KCcjJylcbiAgICAvLyBTY3JvbGwgdG8gdG9wIGlmIHRoZSBoYXNoIGlzIGp1c3QgYCNgIHdpdGggbm8gdmFsdWVcbiAgICBpZiAoaGFzaCA9PT0gJycpIHtcbiAgICAgIHdpbmRvdy5zY3JvbGxUbygwLCAwKVxuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgLy8gRmlyc3Qgd2UgY2hlY2sgaWYgdGhlIGVsZW1lbnQgYnkgaWQgaXMgZm91bmRcbiAgICBjb25zdCBpZEVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaGFzaClcbiAgICBpZiAoaWRFbCkge1xuICAgICAgaWRFbC5zY3JvbGxJbnRvVmlldygpXG4gICAgICByZXR1cm5cbiAgICB9XG4gICAgLy8gSWYgdGhlcmUncyBubyBlbGVtZW50IHdpdGggdGhlIGlkLCB3ZSBjaGVjayB0aGUgYG5hbWVgIHByb3BlcnR5XG4gICAgLy8gVG8gbWlycm9yIGJyb3dzZXJzXG4gICAgY29uc3QgbmFtZUVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeU5hbWUoaGFzaClbMF1cbiAgICBpZiAobmFtZUVsKSB7XG4gICAgICBuYW1lRWwuc2Nyb2xsSW50b1ZpZXcoKVxuICAgIH1cbiAgfVxuXG4gIHVybElzTmV3KGFzUGF0aDogc3RyaW5nKTogYm9vbGVhbiB7XG4gICAgcmV0dXJuIHRoaXMuYXNQYXRoICE9PSBhc1BhdGhcbiAgfVxuXG4gIF9yZXNvbHZlSHJlZihwYXJzZWRIcmVmOiBVcmxPYmplY3QsIHBhZ2VzOiBzdHJpbmdbXSwgYXBwbHlCYXNlUGF0aCA9IHRydWUpIHtcbiAgICBjb25zdCB7IHBhdGhuYW1lIH0gPSBwYXJzZWRIcmVmXG4gICAgY29uc3QgY2xlYW5QYXRobmFtZSA9IHJlbW92ZVBhdGhUcmFpbGluZ1NsYXNoKFxuICAgICAgZGVub3JtYWxpemVQYWdlUGF0aChhcHBseUJhc2VQYXRoID8gZGVsQmFzZVBhdGgocGF0aG5hbWUhKSA6IHBhdGhuYW1lISlcbiAgICApXG5cbiAgICBpZiAoY2xlYW5QYXRobmFtZSA9PT0gJy80MDQnIHx8IGNsZWFuUGF0aG5hbWUgPT09ICcvX2Vycm9yJykge1xuICAgICAgcmV0dXJuIHBhcnNlZEhyZWZcbiAgICB9XG5cbiAgICAvLyBoYW5kbGUgcmVzb2x2aW5nIGhyZWYgZm9yIGR5bmFtaWMgcm91dGVzXG4gICAgaWYgKCFwYWdlcy5pbmNsdWRlcyhjbGVhblBhdGhuYW1lISkpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBhcnJheS1jYWxsYmFjay1yZXR1cm5cbiAgICAgIHBhZ2VzLnNvbWUoKHBhZ2UpID0+IHtcbiAgICAgICAgaWYgKFxuICAgICAgICAgIGlzRHluYW1pY1JvdXRlKHBhZ2UpICYmXG4gICAgICAgICAgZ2V0Um91dGVSZWdleChwYWdlKS5yZS50ZXN0KGNsZWFuUGF0aG5hbWUhKVxuICAgICAgICApIHtcbiAgICAgICAgICBwYXJzZWRIcmVmLnBhdGhuYW1lID0gYXBwbHlCYXNlUGF0aCA/IGFkZEJhc2VQYXRoKHBhZ2UpIDogcGFnZVxuICAgICAgICAgIHJldHVybiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgfVxuICAgIHJldHVybiBwYXJzZWRIcmVmXG4gIH1cblxuICAvKipcbiAgICogUHJlZmV0Y2ggcGFnZSBjb2RlLCB5b3UgbWF5IHdhaXQgZm9yIHRoZSBkYXRhIGR1cmluZyBwYWdlIHJlbmRlcmluZy5cbiAgICogVGhpcyBmZWF0dXJlIG9ubHkgd29ya3MgaW4gcHJvZHVjdGlvbiFcbiAgICogQHBhcmFtIHVybCB0aGUgaHJlZiBvZiBwcmVmZXRjaGVkIHBhZ2VcbiAgICogQHBhcmFtIGFzUGF0aCB0aGUgYXMgcGF0aCBvZiB0aGUgcHJlZmV0Y2hlZCBwYWdlXG4gICAqL1xuICBhc3luYyBwcmVmZXRjaChcbiAgICB1cmw6IHN0cmluZyxcbiAgICBhc1BhdGg6IHN0cmluZyA9IHVybCxcbiAgICBvcHRpb25zOiBQcmVmZXRjaE9wdGlvbnMgPSB7fVxuICApOiBQcm9taXNlPHZvaWQ+IHtcbiAgICBsZXQgcGFyc2VkID0gcGFyc2VSZWxhdGl2ZVVybCh1cmwpXG5cbiAgICBsZXQgeyBwYXRobmFtZSB9ID0gcGFyc2VkXG5cbiAgICBpZiAocHJvY2Vzcy5lbnYuX19ORVhUX0kxOE5fU1VQUE9SVCkge1xuICAgICAgY29uc3Qgbm9ybWFsaXplTG9jYWxlUGF0aCA9IHJlcXVpcmUoJy4uL2kxOG4vbm9ybWFsaXplLWxvY2FsZS1wYXRoJylcbiAgICAgICAgLm5vcm1hbGl6ZUxvY2FsZVBhdGggYXMgdHlwZW9mIGltcG9ydCgnLi4vaTE4bi9ub3JtYWxpemUtbG9jYWxlLXBhdGgnKS5ub3JtYWxpemVMb2NhbGVQYXRoXG5cbiAgICAgIGlmIChvcHRpb25zLmxvY2FsZSA9PT0gZmFsc2UpIHtcbiAgICAgICAgcGF0aG5hbWUgPSBub3JtYWxpemVMb2NhbGVQYXRoIShwYXRobmFtZSwgdGhpcy5sb2NhbGVzKS5wYXRobmFtZVxuICAgICAgICBwYXJzZWQucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgICAgICB1cmwgPSBmb3JtYXRXaXRoVmFsaWRhdGlvbihwYXJzZWQpXG5cbiAgICAgICAgbGV0IHBhcnNlZEFzID0gcGFyc2VSZWxhdGl2ZVVybChhc1BhdGgpXG4gICAgICAgIGNvbnN0IGxvY2FsZVBhdGhSZXN1bHQgPSBub3JtYWxpemVMb2NhbGVQYXRoIShcbiAgICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSxcbiAgICAgICAgICB0aGlzLmxvY2FsZXNcbiAgICAgICAgKVxuICAgICAgICBwYXJzZWRBcy5wYXRobmFtZSA9IGxvY2FsZVBhdGhSZXN1bHQucGF0aG5hbWVcbiAgICAgICAgb3B0aW9ucy5sb2NhbGUgPSBsb2NhbGVQYXRoUmVzdWx0LmRldGVjdGVkTG9jYWxlIHx8IG9wdGlvbnMubG9jYWxlXG4gICAgICAgIGFzUGF0aCA9IGZvcm1hdFdpdGhWYWxpZGF0aW9uKHBhcnNlZEFzKVxuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHBhZ2VzID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmdldFBhZ2VMaXN0KClcblxuICAgIHBhcnNlZCA9IHRoaXMuX3Jlc29sdmVIcmVmKHBhcnNlZCwgcGFnZXMpIGFzIHR5cGVvZiBwYXJzZWRcblxuICAgIGlmIChwYXJzZWQucGF0aG5hbWUgIT09IHBhdGhuYW1lKSB7XG4gICAgICBwYXRobmFtZSA9IHBhcnNlZC5wYXRobmFtZVxuICAgICAgdXJsID0gZm9ybWF0V2l0aFZhbGlkYXRpb24ocGFyc2VkKVxuICAgIH1cblxuICAgIC8vIFByZWZldGNoIGlzIG5vdCBzdXBwb3J0ZWQgaW4gZGV2ZWxvcG1lbnQgbW9kZSBiZWNhdXNlIGl0IHdvdWxkIHRyaWdnZXIgb24tZGVtYW5kLWVudHJpZXNcbiAgICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgICAgcmV0dXJuXG4gICAgfVxuXG4gICAgY29uc3Qgcm91dGUgPSByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaChwYXRobmFtZSlcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXG4gICAgICB0aGlzLnBhZ2VMb2FkZXIucHJlZmV0Y2hEYXRhKFxuICAgICAgICB1cmwsXG4gICAgICAgIGFzUGF0aCxcbiAgICAgICAgdHlwZW9mIG9wdGlvbnMubG9jYWxlICE9PSAndW5kZWZpbmVkJyA/IG9wdGlvbnMubG9jYWxlIDogdGhpcy5sb2NhbGUsXG4gICAgICAgIHRoaXMuZGVmYXVsdExvY2FsZVxuICAgICAgKSxcbiAgICAgIHRoaXMucGFnZUxvYWRlcltvcHRpb25zLnByaW9yaXR5ID8gJ2xvYWRQYWdlJyA6ICdwcmVmZXRjaCddKHJvdXRlKSxcbiAgICBdKVxuICB9XG5cbiAgYXN5bmMgZmV0Y2hDb21wb25lbnQocm91dGU6IHN0cmluZyk6IFByb21pc2U8R29vZFBhZ2VDYWNoZT4ge1xuICAgIGxldCBjYW5jZWxsZWQgPSBmYWxzZVxuICAgIGNvbnN0IGNhbmNlbCA9ICh0aGlzLmNsYyA9ICgpID0+IHtcbiAgICAgIGNhbmNlbGxlZCA9IHRydWVcbiAgICB9KVxuXG4gICAgY29uc3QgY29tcG9uZW50UmVzdWx0ID0gYXdhaXQgdGhpcy5wYWdlTG9hZGVyLmxvYWRQYWdlKHJvdXRlKVxuXG4gICAgaWYgKGNhbmNlbGxlZCkge1xuICAgICAgY29uc3QgZXJyb3I6IGFueSA9IG5ldyBFcnJvcihcbiAgICAgICAgYEFib3J0IGZldGNoaW5nIGNvbXBvbmVudCBmb3Igcm91dGU6IFwiJHtyb3V0ZX1cImBcbiAgICAgIClcbiAgICAgIGVycm9yLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgIHRocm93IGVycm9yXG4gICAgfVxuXG4gICAgaWYgKGNhbmNlbCA9PT0gdGhpcy5jbGMpIHtcbiAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgIH1cblxuICAgIHJldHVybiBjb21wb25lbnRSZXN1bHRcbiAgfVxuXG4gIF9nZXREYXRhPFQ+KGZuOiAoKSA9PiBQcm9taXNlPFQ+KTogUHJvbWlzZTxUPiB7XG4gICAgbGV0IGNhbmNlbGxlZCA9IGZhbHNlXG4gICAgY29uc3QgY2FuY2VsID0gKCkgPT4ge1xuICAgICAgY2FuY2VsbGVkID0gdHJ1ZVxuICAgIH1cbiAgICB0aGlzLmNsYyA9IGNhbmNlbFxuICAgIHJldHVybiBmbigpLnRoZW4oKGRhdGEpID0+IHtcbiAgICAgIGlmIChjYW5jZWwgPT09IHRoaXMuY2xjKSB7XG4gICAgICAgIHRoaXMuY2xjID0gbnVsbFxuICAgICAgfVxuXG4gICAgICBpZiAoY2FuY2VsbGVkKSB7XG4gICAgICAgIGNvbnN0IGVycjogYW55ID0gbmV3IEVycm9yKCdMb2FkaW5nIGluaXRpYWwgcHJvcHMgY2FuY2VsbGVkJylcbiAgICAgICAgZXJyLmNhbmNlbGxlZCA9IHRydWVcbiAgICAgICAgdGhyb3cgZXJyXG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkYXRhXG4gICAgfSlcbiAgfVxuXG4gIF9nZXRTdGF0aWNEYXRhKGRhdGFIcmVmOiBzdHJpbmcpOiBQcm9taXNlPG9iamVjdD4ge1xuICAgIGNvbnN0IHsgaHJlZjogY2FjaGVLZXkgfSA9IG5ldyBVUkwoZGF0YUhyZWYsIHdpbmRvdy5sb2NhdGlvbi5ocmVmKVxuICAgIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ3Byb2R1Y3Rpb24nICYmIHRoaXMuc2RjW2NhY2hlS2V5XSkge1xuICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0aGlzLnNkY1tjYWNoZUtleV0pXG4gICAgfVxuICAgIHJldHVybiBmZXRjaE5leHREYXRhKGRhdGFIcmVmLCB0aGlzLmlzU3NyKS50aGVuKChkYXRhKSA9PiB7XG4gICAgICB0aGlzLnNkY1tjYWNoZUtleV0gPSBkYXRhXG4gICAgICByZXR1cm4gZGF0YVxuICAgIH0pXG4gIH1cblxuICBfZ2V0U2VydmVyRGF0YShkYXRhSHJlZjogc3RyaW5nKTogUHJvbWlzZTxvYmplY3Q+IHtcbiAgICByZXR1cm4gZmV0Y2hOZXh0RGF0YShkYXRhSHJlZiwgdGhpcy5pc1NzcilcbiAgfVxuXG4gIGdldEluaXRpYWxQcm9wcyhcbiAgICBDb21wb25lbnQ6IENvbXBvbmVudFR5cGUsXG4gICAgY3R4OiBOZXh0UGFnZUNvbnRleHRcbiAgKTogUHJvbWlzZTxhbnk+IHtcbiAgICBjb25zdCB7IENvbXBvbmVudDogQXBwIH0gPSB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ11cbiAgICBjb25zdCBBcHBUcmVlID0gdGhpcy5fd3JhcEFwcChBcHAgYXMgQXBwQ29tcG9uZW50KVxuICAgIGN0eC5BcHBUcmVlID0gQXBwVHJlZVxuICAgIHJldHVybiBsb2FkR2V0SW5pdGlhbFByb3BzPEFwcENvbnRleHRUeXBlPFJvdXRlcj4+KEFwcCwge1xuICAgICAgQXBwVHJlZSxcbiAgICAgIENvbXBvbmVudCxcbiAgICAgIHJvdXRlcjogdGhpcyxcbiAgICAgIGN0eCxcbiAgICB9KVxuICB9XG5cbiAgYWJvcnRDb21wb25lbnRMb2FkKGFzOiBzdHJpbmcpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5jbGMpIHtcbiAgICAgIFJvdXRlci5ldmVudHMuZW1pdCgncm91dGVDaGFuZ2VFcnJvcicsIGJ1aWxkQ2FuY2VsbGF0aW9uRXJyb3IoKSwgYXMpXG4gICAgICB0aGlzLmNsYygpXG4gICAgICB0aGlzLmNsYyA9IG51bGxcbiAgICB9XG4gIH1cblxuICBub3RpZnkoZGF0YTogUHJpdmF0ZVJvdXRlSW5mbyk6IFByb21pc2U8dm9pZD4ge1xuICAgIHJldHVybiB0aGlzLnN1YihkYXRhLCB0aGlzLmNvbXBvbmVudHNbJy9fYXBwJ10uQ29tcG9uZW50IGFzIEFwcENvbXBvbmVudClcbiAgfVxufVxuIiwiLy8gZXNjYXBlIGRlbGltaXRlcnMgdXNlZCBieSBwYXRoLXRvLXJlZ2V4cFxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gZXNjYXBlUGF0aERlbGltaXRlcnMoc2VnbWVudDogc3RyaW5nKTogc3RyaW5nIHtcbiAgcmV0dXJuIHNlZ21lbnQucmVwbGFjZSgvWy8jP10vZywgKGNoYXI6IHN0cmluZykgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGNoYXIpKVxufVxuIiwiLy8gRm9ybWF0IGZ1bmN0aW9uIG1vZGlmaWVkIGZyb20gbm9kZWpzXG4vLyBDb3B5cmlnaHQgSm95ZW50LCBJbmMuIGFuZCBvdGhlciBOb2RlIGNvbnRyaWJ1dG9ycy5cbi8vXG4vLyBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYVxuLy8gY29weSBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZVxuLy8gXCJTb2Z0d2FyZVwiKSwgdG8gZGVhbCBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nXG4vLyB3aXRob3V0IGxpbWl0YXRpb24gdGhlIHJpZ2h0cyB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsXG4vLyBkaXN0cmlidXRlLCBzdWJsaWNlbnNlLCBhbmQvb3Igc2VsbCBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0XG4vLyBwZXJzb25zIHRvIHdob20gdGhlIFNvZnR3YXJlIGlzIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGVcbi8vIGZvbGxvd2luZyBjb25kaXRpb25zOlxuLy9cbi8vIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkXG4vLyBpbiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbi8vXG4vLyBUSEUgU09GVFdBUkUgSVMgUFJPVklERUQgXCJBUyBJU1wiLCBXSVRIT1VUIFdBUlJBTlRZIE9GIEFOWSBLSU5ELCBFWFBSRVNTXG4vLyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIFRIRSBXQVJSQU5USUVTIE9GXG4vLyBNRVJDSEFOVEFCSUxJVFksIEZJVE5FU1MgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFIEFORCBOT05JTkZSSU5HRU1FTlQuIElOXG4vLyBOTyBFVkVOVCBTSEFMTCBUSEUgQVVUSE9SUyBPUiBDT1BZUklHSFQgSE9MREVSUyBCRSBMSUFCTEUgRk9SIEFOWSBDTEFJTSxcbi8vIERBTUFHRVMgT1IgT1RIRVIgTElBQklMSVRZLCBXSEVUSEVSIElOIEFOIEFDVElPTiBPRiBDT05UUkFDVCwgVE9SVCBPUlxuLy8gT1RIRVJXSVNFLCBBUklTSU5HIEZST00sIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFNPRlRXQVJFIE9SIFRIRVxuLy8gVVNFIE9SIE9USEVSIERFQUxJTkdTIElOIFRIRSBTT0ZUV0FSRS5cblxuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCAqIGFzIHF1ZXJ5c3RyaW5nIGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IHNsYXNoZWRQcm90b2NvbHMgPSAvaHR0cHM/fGZ0cHxnb3BoZXJ8ZmlsZS9cblxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdFVybCh1cmxPYmo6IFVybE9iamVjdCkge1xuICBsZXQgeyBhdXRoLCBob3N0bmFtZSB9ID0gdXJsT2JqXG4gIGxldCBwcm90b2NvbCA9IHVybE9iai5wcm90b2NvbCB8fCAnJ1xuICBsZXQgcGF0aG5hbWUgPSB1cmxPYmoucGF0aG5hbWUgfHwgJydcbiAgbGV0IGhhc2ggPSB1cmxPYmouaGFzaCB8fCAnJ1xuICBsZXQgcXVlcnkgPSB1cmxPYmoucXVlcnkgfHwgJydcbiAgbGV0IGhvc3Q6IHN0cmluZyB8IGZhbHNlID0gZmFsc2VcblxuICBhdXRoID0gYXV0aCA/IGVuY29kZVVSSUNvbXBvbmVudChhdXRoKS5yZXBsYWNlKC8lM0EvaSwgJzonKSArICdAJyA6ICcnXG5cbiAgaWYgKHVybE9iai5ob3N0KSB7XG4gICAgaG9zdCA9IGF1dGggKyB1cmxPYmouaG9zdFxuICB9IGVsc2UgaWYgKGhvc3RuYW1lKSB7XG4gICAgaG9zdCA9IGF1dGggKyAofmhvc3RuYW1lLmluZGV4T2YoJzonKSA/IGBbJHtob3N0bmFtZX1dYCA6IGhvc3RuYW1lKVxuICAgIGlmICh1cmxPYmoucG9ydCkge1xuICAgICAgaG9zdCArPSAnOicgKyB1cmxPYmoucG9ydFxuICAgIH1cbiAgfVxuXG4gIGlmIChxdWVyeSAmJiB0eXBlb2YgcXVlcnkgPT09ICdvYmplY3QnKSB7XG4gICAgcXVlcnkgPSBTdHJpbmcocXVlcnlzdHJpbmcudXJsUXVlcnlUb1NlYXJjaFBhcmFtcyhxdWVyeSBhcyBQYXJzZWRVcmxRdWVyeSkpXG4gIH1cblxuICBsZXQgc2VhcmNoID0gdXJsT2JqLnNlYXJjaCB8fCAocXVlcnkgJiYgYD8ke3F1ZXJ5fWApIHx8ICcnXG5cbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09ICc6JykgcHJvdG9jb2wgKz0gJzonXG5cbiAgaWYgKFxuICAgIHVybE9iai5zbGFzaGVzIHx8XG4gICAgKCghcHJvdG9jb2wgfHwgc2xhc2hlZFByb3RvY29scy50ZXN0KHByb3RvY29sKSkgJiYgaG9zdCAhPT0gZmFsc2UpXG4gICkge1xuICAgIGhvc3QgPSAnLy8nICsgKGhvc3QgfHwgJycpXG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lWzBdICE9PSAnLycpIHBhdGhuYW1lID0gJy8nICsgcGF0aG5hbWVcbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSAnJ1xuICB9XG5cbiAgaWYgKGhhc2ggJiYgaGFzaFswXSAhPT0gJyMnKSBoYXNoID0gJyMnICsgaGFzaFxuICBpZiAoc2VhcmNoICYmIHNlYXJjaFswXSAhPT0gJz8nKSBzZWFyY2ggPSAnPycgKyBzZWFyY2hcblxuICBwYXRobmFtZSA9IHBhdGhuYW1lLnJlcGxhY2UoL1s/I10vZywgZW5jb2RlVVJJQ29tcG9uZW50KVxuICBzZWFyY2ggPSBzZWFyY2gucmVwbGFjZSgnIycsICclMjMnKVxuXG4gIHJldHVybiBgJHtwcm90b2NvbH0ke2hvc3R9JHtwYXRobmFtZX0ke3NlYXJjaH0ke2hhc2h9YFxufVxuIiwiLy8gSWRlbnRpZnkgL1twYXJhbV0vIGluIHJvdXRlIHN0cmluZ1xuY29uc3QgVEVTVF9ST1VURSA9IC9cXC9cXFtbXi9dKz9cXF0oPz1cXC98JCkvXG5cbmV4cG9ydCBmdW5jdGlvbiBpc0R5bmFtaWNSb3V0ZShyb3V0ZTogc3RyaW5nKTogYm9vbGVhbiB7XG4gIHJldHVybiBURVNUX1JPVVRFLnRlc3Qocm91dGUpXG59XG4iLCJpbXBvcnQgeyBnZXRMb2NhdGlvbk9yaWdpbiB9IGZyb20gJy4uLy4uL3V0aWxzJ1xuaW1wb3J0IHsgc2VhcmNoUGFyYW1zVG9VcmxRdWVyeSB9IGZyb20gJy4vcXVlcnlzdHJpbmcnXG5cbmNvbnN0IERVTU1ZX0JBU0UgPSBuZXcgVVJMKFxuICB0eXBlb2Ygd2luZG93ID09PSAndW5kZWZpbmVkJyA/ICdodHRwOi8vbicgOiBnZXRMb2NhdGlvbk9yaWdpbigpXG4pXG5cbi8qKlxuICogUGFyc2VzIHBhdGgtcmVsYXRpdmUgdXJscyAoZS5nLiBgL2hlbGxvL3dvcmxkP2Zvbz1iYXJgKS4gSWYgdXJsIGlzbid0IHBhdGgtcmVsYXRpdmVcbiAqIChlLmcuIGAuL2hlbGxvYCkgdGhlbiBhdCBsZWFzdCBiYXNlIG11c3QgYmUuXG4gKiBBYnNvbHV0ZSB1cmxzIGFyZSByZWplY3RlZCB3aXRoIG9uZSBleGNlcHRpb24sIGluIHRoZSBicm93c2VyLCBhYnNvbHV0ZSB1cmxzIHRoYXQgYXJlIG9uXG4gKiB0aGUgY3VycmVudCBvcmlnaW4gd2lsbCBiZSBwYXJzZWQgYXMgcmVsYXRpdmVcbiAqL1xuZXhwb3J0IGZ1bmN0aW9uIHBhcnNlUmVsYXRpdmVVcmwodXJsOiBzdHJpbmcsIGJhc2U/OiBzdHJpbmcpIHtcbiAgY29uc3QgcmVzb2x2ZWRCYXNlID0gYmFzZSA/IG5ldyBVUkwoYmFzZSwgRFVNTVlfQkFTRSkgOiBEVU1NWV9CQVNFXG4gIGNvbnN0IHtcbiAgICBwYXRobmFtZSxcbiAgICBzZWFyY2hQYXJhbXMsXG4gICAgc2VhcmNoLFxuICAgIGhhc2gsXG4gICAgaHJlZixcbiAgICBvcmlnaW4sXG4gICAgcHJvdG9jb2wsXG4gIH0gPSBuZXcgVVJMKHVybCwgcmVzb2x2ZWRCYXNlKVxuICBpZiAoXG4gICAgb3JpZ2luICE9PSBEVU1NWV9CQVNFLm9yaWdpbiB8fFxuICAgIChwcm90b2NvbCAhPT0gJ2h0dHA6JyAmJiBwcm90b2NvbCAhPT0gJ2h0dHBzOicpXG4gICkge1xuICAgIHRocm93IG5ldyBFcnJvcignaW52YXJpYW50OiBpbnZhbGlkIHJlbGF0aXZlIFVSTCcpXG4gIH1cbiAgcmV0dXJuIHtcbiAgICBwYXRobmFtZSxcbiAgICBxdWVyeTogc2VhcmNoUGFyYW1zVG9VcmxRdWVyeShzZWFyY2hQYXJhbXMpLFxuICAgIHNlYXJjaCxcbiAgICBoYXNoLFxuICAgIGhyZWY6IGhyZWYuc2xpY2UoRFVNTVlfQkFTRS5vcmlnaW4ubGVuZ3RoKSxcbiAgfVxufVxuIiwiaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxuZXhwb3J0IHsgcGF0aFRvUmVnZXhwIH1cblxuZXhwb3J0IGNvbnN0IG1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgc2Vuc2l0aXZlOiBmYWxzZSxcbiAgZGVsaW1pdGVyOiAnLycsXG59XG5cbmV4cG9ydCBjb25zdCBjdXN0b21Sb3V0ZU1hdGNoZXJPcHRpb25zOiBwYXRoVG9SZWdleHAuVG9rZW5zVG9SZWdleHBPcHRpb25zICZcbiAgcGF0aFRvUmVnZXhwLlBhcnNlT3B0aW9ucyA9IHtcbiAgLi4ubWF0Y2hlck9wdGlvbnMsXG4gIHN0cmljdDogdHJ1ZSxcbn1cblxuZXhwb3J0IGRlZmF1bHQgKGN1c3RvbVJvdXRlID0gZmFsc2UpID0+IHtcbiAgcmV0dXJuIChwYXRoOiBzdHJpbmcpID0+IHtcbiAgICBjb25zdCBrZXlzOiBwYXRoVG9SZWdleHAuS2V5W10gPSBbXVxuICAgIGNvbnN0IG1hdGNoZXJSZWdleCA9IHBhdGhUb1JlZ2V4cC5wYXRoVG9SZWdleHAoXG4gICAgICBwYXRoLFxuICAgICAga2V5cyxcbiAgICAgIGN1c3RvbVJvdXRlID8gY3VzdG9tUm91dGVNYXRjaGVyT3B0aW9ucyA6IG1hdGNoZXJPcHRpb25zXG4gICAgKVxuICAgIGNvbnN0IG1hdGNoZXIgPSBwYXRoVG9SZWdleHAucmVnZXhwVG9GdW5jdGlvbihtYXRjaGVyUmVnZXgsIGtleXMpXG5cbiAgICByZXR1cm4gKHBhdGhuYW1lOiBzdHJpbmcgfCBudWxsIHwgdW5kZWZpbmVkLCBwYXJhbXM/OiBhbnkpID0+IHtcbiAgICAgIGNvbnN0IHJlcyA9IHBhdGhuYW1lID09IG51bGwgPyBmYWxzZSA6IG1hdGNoZXIocGF0aG5hbWUpXG4gICAgICBpZiAoIXJlcykge1xuICAgICAgICByZXR1cm4gZmFsc2VcbiAgICAgIH1cblxuICAgICAgaWYgKGN1c3RvbVJvdXRlKSB7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpIHtcbiAgICAgICAgICAvLyB1bm5hbWVkIHBhcmFtcyBzaG91bGQgYmUgcmVtb3ZlZCBhcyB0aGV5XG4gICAgICAgICAgLy8gYXJlIG5vdCBhbGxvd2VkIHRvIGJlIHVzZWQgaW4gdGhlIGRlc3RpbmF0aW9uXG4gICAgICAgICAgaWYgKHR5cGVvZiBrZXkubmFtZSA9PT0gJ251bWJlcicpIHtcbiAgICAgICAgICAgIGRlbGV0ZSAocmVzLnBhcmFtcyBhcyBhbnkpW2tleS5uYW1lXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4geyAuLi5wYXJhbXMsIC4uLnJlcy5wYXJhbXMgfVxuICAgIH1cbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcbmltcG9ydCB7IHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkgfSBmcm9tICcuL3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgcGFyc2VSZWxhdGl2ZVVybCB9IGZyb20gJy4vcGFyc2UtcmVsYXRpdmUtdXJsJ1xuaW1wb3J0ICogYXMgcGF0aFRvUmVnZXhwIGZyb20gJ25leHQvZGlzdC9jb21waWxlZC9wYXRoLXRvLXJlZ2V4cCdcblxudHlwZSBQYXJhbXMgPSB7IFtwYXJhbTogc3RyaW5nXTogYW55IH1cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gcHJlcGFyZURlc3RpbmF0aW9uKFxuICBkZXN0aW5hdGlvbjogc3RyaW5nLFxuICBwYXJhbXM6IFBhcmFtcyxcbiAgcXVlcnk6IFBhcnNlZFVybFF1ZXJ5LFxuICBhcHBlbmRQYXJhbXNUb1F1ZXJ5OiBib29sZWFuLFxuICBiYXNlUGF0aDogc3RyaW5nXG4pIHtcbiAgbGV0IHBhcnNlZERlc3RpbmF0aW9uOiB7XG4gICAgcXVlcnk/OiBQYXJzZWRVcmxRdWVyeVxuICAgIHByb3RvY29sPzogc3RyaW5nXG4gICAgaG9zdG5hbWU/OiBzdHJpbmdcbiAgICBwb3J0Pzogc3RyaW5nXG4gIH0gJiBSZXR1cm5UeXBlPHR5cGVvZiBwYXJzZVJlbGF0aXZlVXJsPiA9IHt9IGFzIGFueVxuXG4gIC8vIGNsb25lIHF1ZXJ5IHNvIHdlIGRvbid0IG1vZGlmeSB0aGUgb3JpZ2luYWxcbiAgcXVlcnkgPSBPYmplY3QuYXNzaWduKHt9LCBxdWVyeSlcbiAgZGVsZXRlIHF1ZXJ5Ll9fbmV4dExvY2FsZVxuXG4gIGlmIChkZXN0aW5hdGlvbi5zdGFydHNXaXRoKCcvJykpIHtcbiAgICBwYXJzZWREZXN0aW5hdGlvbiA9IHBhcnNlUmVsYXRpdmVVcmwoZGVzdGluYXRpb24pXG4gIH0gZWxzZSB7XG4gICAgY29uc3Qge1xuICAgICAgcGF0aG5hbWUsXG4gICAgICBzZWFyY2hQYXJhbXMsXG4gICAgICBoYXNoLFxuICAgICAgaG9zdG5hbWUsXG4gICAgICBwb3J0LFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH0gPSBuZXcgVVJMKGRlc3RpbmF0aW9uKVxuXG4gICAgcGFyc2VkRGVzdGluYXRpb24gPSB7XG4gICAgICBwYXRobmFtZSxcbiAgICAgIHF1ZXJ5OiBzZWFyY2hQYXJhbXNUb1VybFF1ZXJ5KHNlYXJjaFBhcmFtcyksXG4gICAgICBoYXNoLFxuICAgICAgcHJvdG9jb2wsXG4gICAgICBob3N0bmFtZSxcbiAgICAgIHBvcnQsXG4gICAgICBzZWFyY2gsXG4gICAgICBocmVmLFxuICAgIH1cbiAgfVxuXG4gIGNvbnN0IGRlc3RRdWVyeSA9IHBhcnNlZERlc3RpbmF0aW9uLnF1ZXJ5XG4gIGNvbnN0IGRlc3RQYXRoID0gYCR7cGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUhfSR7XG4gICAgcGFyc2VkRGVzdGluYXRpb24uaGFzaCB8fCAnJ1xuICB9YFxuICBjb25zdCBkZXN0UGF0aFBhcmFtS2V5czogcGF0aFRvUmVnZXhwLktleVtdID0gW11cbiAgcGF0aFRvUmVnZXhwLnBhdGhUb1JlZ2V4cChkZXN0UGF0aCwgZGVzdFBhdGhQYXJhbUtleXMpXG5cbiAgY29uc3QgZGVzdFBhdGhQYXJhbXMgPSBkZXN0UGF0aFBhcmFtS2V5cy5tYXAoKGtleSkgPT4ga2V5Lm5hbWUpXG5cbiAgbGV0IGRlc3RpbmF0aW9uQ29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZShcbiAgICBkZXN0UGF0aCxcbiAgICAvLyB3ZSBkb24ndCB2YWxpZGF0ZSB3aGlsZSBjb21waWxpbmcgdGhlIGRlc3RpbmF0aW9uIHNpbmNlIHdlIHNob3VsZFxuICAgIC8vIGhhdmUgYWxyZWFkeSB2YWxpZGF0ZWQgYmVmb3JlIHdlIGdvdCB0byB0aGlzIHBvaW50IGFuZCB2YWxpZGF0aW5nXG4gICAgLy8gYnJlYWtzIGNvbXBpbGluZyBkZXN0aW5hdGlvbnMgd2l0aCBuYW1lZCBwYXR0ZXJuIHBhcmFtcyBmcm9tIHRoZSBzb3VyY2VcbiAgICAvLyBlLmcuIC9zb21ldGhpbmc6aGVsbG8oLiopIC0+IC9hbm90aGVyLzpoZWxsbyBpcyBicm9rZW4gd2l0aCB2YWxpZGF0aW9uXG4gICAgLy8gc2luY2UgY29tcGlsZSB2YWxpZGF0aW9uIGlzIG1lYW50IGZvciByZXZlcnNpbmcgYW5kIG5vdCBmb3IgaW5zZXJ0aW5nXG4gICAgLy8gcGFyYW1zIGZyb20gYSBzZXBhcmF0ZSBwYXRoLXJlZ2V4IGludG8gYW5vdGhlclxuICAgIHsgdmFsaWRhdGU6IGZhbHNlIH1cbiAgKVxuICBsZXQgbmV3VXJsXG5cbiAgLy8gdXBkYXRlIGFueSBwYXJhbXMgaW4gcXVlcnkgdmFsdWVzXG4gIGZvciAoY29uc3QgW2tleSwgc3RyT3JBcnJheV0gb2YgT2JqZWN0LmVudHJpZXMoZGVzdFF1ZXJ5KSkge1xuICAgIGxldCB2YWx1ZSA9IEFycmF5LmlzQXJyYXkoc3RyT3JBcnJheSkgPyBzdHJPckFycmF5WzBdIDogc3RyT3JBcnJheVxuICAgIGlmICh2YWx1ZSkge1xuICAgICAgLy8gdGhlIHZhbHVlIG5lZWRzIHRvIHN0YXJ0IHdpdGggYSBmb3J3YXJkLXNsYXNoIHRvIGJlIGNvbXBpbGVkXG4gICAgICAvLyBjb3JyZWN0bHlcbiAgICAgIHZhbHVlID0gYC8ke3ZhbHVlfWBcbiAgICAgIGNvbnN0IHF1ZXJ5Q29tcGlsZXIgPSBwYXRoVG9SZWdleHAuY29tcGlsZSh2YWx1ZSwgeyB2YWxpZGF0ZTogZmFsc2UgfSlcbiAgICAgIHZhbHVlID0gcXVlcnlDb21waWxlcihwYXJhbXMpLnN1YnN0cigxKVxuICAgIH1cbiAgICBkZXN0UXVlcnlba2V5XSA9IHZhbHVlXG4gIH1cblxuICAvLyBhZGQgcGF0aCBwYXJhbXMgdG8gcXVlcnkgaWYgaXQncyBub3QgYSByZWRpcmVjdCBhbmQgbm90XG4gIC8vIGFscmVhZHkgZGVmaW5lZCBpbiBkZXN0aW5hdGlvbiBxdWVyeSBvciBwYXRoXG4gIGNvbnN0IHBhcmFtS2V5cyA9IE9iamVjdC5rZXlzKHBhcmFtcylcblxuICBpZiAoXG4gICAgYXBwZW5kUGFyYW1zVG9RdWVyeSAmJlxuICAgICFwYXJhbUtleXMuc29tZSgoa2V5KSA9PiBkZXN0UGF0aFBhcmFtcy5pbmNsdWRlcyhrZXkpKVxuICApIHtcbiAgICBmb3IgKGNvbnN0IGtleSBvZiBwYXJhbUtleXMpIHtcbiAgICAgIGlmICghKGtleSBpbiBkZXN0UXVlcnkpKSB7XG4gICAgICAgIGRlc3RRdWVyeVtrZXldID0gcGFyYW1zW2tleV1cbiAgICAgIH1cbiAgICB9XG4gIH1cblxuICBjb25zdCBzaG91bGRBZGRCYXNlUGF0aCA9IGRlc3RpbmF0aW9uLnN0YXJ0c1dpdGgoJy8nKSAmJiBiYXNlUGF0aFxuXG4gIHRyeSB7XG4gICAgbmV3VXJsID0gYCR7c2hvdWxkQWRkQmFzZVBhdGggPyBiYXNlUGF0aCA6ICcnfSR7ZGVzdGluYXRpb25Db21waWxlcihcbiAgICAgIHBhcmFtc1xuICAgICl9YFxuXG4gICAgY29uc3QgW3BhdGhuYW1lLCBoYXNoXSA9IG5ld1VybC5zcGxpdCgnIycpXG4gICAgcGFyc2VkRGVzdGluYXRpb24ucGF0aG5hbWUgPSBwYXRobmFtZVxuICAgIHBhcnNlZERlc3RpbmF0aW9uLmhhc2ggPSBgJHtoYXNoID8gJyMnIDogJyd9JHtoYXNoIHx8ICcnfWBcbiAgICBkZWxldGUgcGFyc2VkRGVzdGluYXRpb24uc2VhcmNoXG4gIH0gY2F0Y2ggKGVycikge1xuICAgIGlmIChlcnIubWVzc2FnZS5tYXRjaCgvRXhwZWN0ZWQgLio/IHRvIG5vdCByZXBlYXQsIGJ1dCBnb3QgYW4gYXJyYXkvKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgICBgVG8gdXNlIGEgbXVsdGktbWF0Y2ggaW4gdGhlIGRlc3RpbmF0aW9uIHlvdSBtdXN0IGFkZCBcXGAqXFxgIGF0IHRoZSBlbmQgb2YgdGhlIHBhcmFtIG5hbWUgdG8gc2lnbmlmeSBpdCBzaG91bGQgcmVwZWF0LiBodHRwczovL2Vyci5zaC92ZXJjZWwvbmV4dC5qcy9pbnZhbGlkLW11bHRpLW1hdGNoYFxuICAgICAgKVxuICAgIH1cbiAgICB0aHJvdyBlcnJcbiAgfVxuXG4gIC8vIFF1ZXJ5IG1lcmdlIG9yZGVyIGxvd2VzdCBwcmlvcml0eSB0byBoaWdoZXN0XG4gIC8vIDEuIGluaXRpYWwgVVJMIHF1ZXJ5IHZhbHVlc1xuICAvLyAyLiBwYXRoIHNlZ21lbnQgdmFsdWVzXG4gIC8vIDMuIGRlc3RpbmF0aW9uIHNwZWNpZmllZCBxdWVyeSB2YWx1ZXNcbiAgcGFyc2VkRGVzdGluYXRpb24ucXVlcnkgPSB7XG4gICAgLi4ucXVlcnksXG4gICAgLi4ucGFyc2VkRGVzdGluYXRpb24ucXVlcnksXG4gIH1cblxuICByZXR1cm4ge1xuICAgIG5ld1VybCxcbiAgICBwYXJzZWREZXN0aW5hdGlvbixcbiAgfVxufVxuIiwiaW1wb3J0IHsgUGFyc2VkVXJsUXVlcnkgfSBmcm9tICdxdWVyeXN0cmluZydcblxuZXhwb3J0IGZ1bmN0aW9uIHNlYXJjaFBhcmFtc1RvVXJsUXVlcnkoXG4gIHNlYXJjaFBhcmFtczogVVJMU2VhcmNoUGFyYW1zXG4pOiBQYXJzZWRVcmxRdWVyeSB7XG4gIGNvbnN0IHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSA9IHt9XG4gIHNlYXJjaFBhcmFtcy5mb3JFYWNoKCh2YWx1ZSwga2V5KSA9PiB7XG4gICAgaWYgKHR5cGVvZiBxdWVyeVtrZXldID09PSAndW5kZWZpbmVkJykge1xuICAgICAgcXVlcnlba2V5XSA9IHZhbHVlXG4gICAgfSBlbHNlIGlmIChBcnJheS5pc0FycmF5KHF1ZXJ5W2tleV0pKSB7XG4gICAgICA7KHF1ZXJ5W2tleV0gYXMgc3RyaW5nW10pLnB1c2godmFsdWUpXG4gICAgfSBlbHNlIHtcbiAgICAgIHF1ZXJ5W2tleV0gPSBbcXVlcnlba2V5XSBhcyBzdHJpbmcsIHZhbHVlXVxuICAgIH1cbiAgfSlcbiAgcmV0dXJuIHF1ZXJ5XG59XG5cbmZ1bmN0aW9uIHN0cmluZ2lmeVVybFF1ZXJ5UGFyYW0ocGFyYW06IHN0cmluZyk6IHN0cmluZyB7XG4gIGlmIChcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdzdHJpbmcnIHx8XG4gICAgKHR5cGVvZiBwYXJhbSA9PT0gJ251bWJlcicgJiYgIWlzTmFOKHBhcmFtKSkgfHxcbiAgICB0eXBlb2YgcGFyYW0gPT09ICdib29sZWFuJ1xuICApIHtcbiAgICByZXR1cm4gU3RyaW5nKHBhcmFtKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiAnJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiB1cmxRdWVyeVRvU2VhcmNoUGFyYW1zKFxuICB1cmxRdWVyeTogUGFyc2VkVXJsUXVlcnlcbik6IFVSTFNlYXJjaFBhcmFtcyB7XG4gIGNvbnN0IHJlc3VsdCA9IG5ldyBVUkxTZWFyY2hQYXJhbXMoKVxuICBPYmplY3QuZW50cmllcyh1cmxRdWVyeSkuZm9yRWFjaCgoW2tleSwgdmFsdWVdKSA9PiB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpKSB7XG4gICAgICB2YWx1ZS5mb3JFYWNoKChpdGVtKSA9PiByZXN1bHQuYXBwZW5kKGtleSwgc3RyaW5naWZ5VXJsUXVlcnlQYXJhbShpdGVtKSkpXG4gICAgfSBlbHNlIHtcbiAgICAgIHJlc3VsdC5zZXQoa2V5LCBzdHJpbmdpZnlVcmxRdWVyeVBhcmFtKHZhbHVlKSlcbiAgICB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGFzc2lnbihcbiAgdGFyZ2V0OiBVUkxTZWFyY2hQYXJhbXMsXG4gIC4uLnNlYXJjaFBhcmFtc0xpc3Q6IFVSTFNlYXJjaFBhcmFtc1tdXG4pOiBVUkxTZWFyY2hQYXJhbXMge1xuICBzZWFyY2hQYXJhbXNMaXN0LmZvckVhY2goKHNlYXJjaFBhcmFtcykgPT4ge1xuICAgIEFycmF5LmZyb20oc2VhcmNoUGFyYW1zLmtleXMoKSkuZm9yRWFjaCgoa2V5KSA9PiB0YXJnZXQuZGVsZXRlKGtleSkpXG4gICAgc2VhcmNoUGFyYW1zLmZvckVhY2goKHZhbHVlLCBrZXkpID0+IHRhcmdldC5hcHBlbmQoa2V5LCB2YWx1ZSkpXG4gIH0pXG4gIHJldHVybiB0YXJnZXRcbn1cbiIsImltcG9ydCB7IFBhcnNlZFVybFF1ZXJ5IH0gZnJvbSAncXVlcnlzdHJpbmcnXG5pbXBvcnQgcGF0aE1hdGNoIGZyb20gJy4vcGF0aC1tYXRjaCdcbmltcG9ydCBwcmVwYXJlRGVzdGluYXRpb24gZnJvbSAnLi9wcmVwYXJlLWRlc3RpbmF0aW9uJ1xuaW1wb3J0IHsgUmV3cml0ZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9sb2FkLWN1c3RvbS1yb3V0ZXMnXG5pbXBvcnQgeyByZW1vdmVQYXRoVHJhaWxpbmdTbGFzaCB9IGZyb20gJy4uLy4uLy4uLy4uL2NsaWVudC9ub3JtYWxpemUtdHJhaWxpbmctc2xhc2gnXG5cbmNvbnN0IGN1c3RvbVJvdXRlTWF0Y2hlciA9IHBhdGhNYXRjaCh0cnVlKVxuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXNvbHZlUmV3cml0ZXMoXG4gIGFzUGF0aDogc3RyaW5nLFxuICBwYWdlczogc3RyaW5nW10sXG4gIGJhc2VQYXRoOiBzdHJpbmcsXG4gIHJld3JpdGVzOiBSZXdyaXRlW10sXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeSxcbiAgcmVzb2x2ZUhyZWY6IChwYXRoOiBzdHJpbmcpID0+IHN0cmluZ1xuKSB7XG4gIGlmICghcGFnZXMuaW5jbHVkZXMoYXNQYXRoKSkge1xuICAgIGZvciAoY29uc3QgcmV3cml0ZSBvZiByZXdyaXRlcykge1xuICAgICAgY29uc3QgbWF0Y2hlciA9IGN1c3RvbVJvdXRlTWF0Y2hlcihyZXdyaXRlLnNvdXJjZSlcbiAgICAgIGNvbnN0IHBhcmFtcyA9IG1hdGNoZXIoYXNQYXRoKVxuXG4gICAgICBpZiAocGFyYW1zKSB7XG4gICAgICAgIGlmICghcmV3cml0ZS5kZXN0aW5hdGlvbikge1xuICAgICAgICAgIC8vIHRoaXMgaXMgYSBwcm94aWVkIHJld3JpdGUgd2hpY2ggaXNuJ3QgaGFuZGxlZCBvbiB0aGUgY2xpZW50XG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkZXN0UmVzID0gcHJlcGFyZURlc3RpbmF0aW9uKFxuICAgICAgICAgIHJld3JpdGUuZGVzdGluYXRpb24sXG4gICAgICAgICAgcGFyYW1zLFxuICAgICAgICAgIHF1ZXJ5LFxuICAgICAgICAgIHRydWUsXG4gICAgICAgICAgcmV3cml0ZS5iYXNlUGF0aCA9PT0gZmFsc2UgPyAnJyA6IGJhc2VQYXRoXG4gICAgICAgIClcbiAgICAgICAgYXNQYXRoID0gZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5wYXRobmFtZSFcbiAgICAgICAgT2JqZWN0LmFzc2lnbihxdWVyeSwgZGVzdFJlcy5wYXJzZWREZXN0aW5hdGlvbi5xdWVyeSlcblxuICAgICAgICBpZiAocGFnZXMuaW5jbHVkZXMocmVtb3ZlUGF0aFRyYWlsaW5nU2xhc2goYXNQYXRoKSkpIHtcbiAgICAgICAgICAvLyBjaGVjayBpZiB3ZSBub3cgbWF0Y2ggYSBwYWdlIGFzIHRoaXMgbWVhbnMgd2UgYXJlIGRvbmVcbiAgICAgICAgICAvLyByZXNvbHZpbmcgdGhlIHJld3JpdGVzXG4gICAgICAgICAgYnJlYWtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNoZWNrIGlmIHdlIG1hdGNoIGEgZHluYW1pYy1yb3V0ZSwgaWYgc28gd2UgYnJlYWsgdGhlIHJld3JpdGVzIGNoYWluXG4gICAgICAgIGNvbnN0IHJlc29sdmVkSHJlZiA9IHJlc29sdmVIcmVmKGFzUGF0aClcblxuICAgICAgICBpZiAocmVzb2x2ZWRIcmVmICE9PSBhc1BhdGggJiYgcGFnZXMuaW5jbHVkZXMocmVzb2x2ZWRIcmVmKSkge1xuICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGFzUGF0aFxufVxuIiwiaW1wb3J0IHsgZ2V0Um91dGVSZWdleCB9IGZyb20gJy4vcm91dGUtcmVnZXgnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSb3V0ZU1hdGNoZXIocm91dGVSZWdleDogUmV0dXJuVHlwZTx0eXBlb2YgZ2V0Um91dGVSZWdleD4pIHtcbiAgY29uc3QgeyByZSwgZ3JvdXBzIH0gPSByb3V0ZVJlZ2V4XG4gIHJldHVybiAocGF0aG5hbWU6IHN0cmluZyB8IG51bGwgfCB1bmRlZmluZWQpID0+IHtcbiAgICBjb25zdCByb3V0ZU1hdGNoID0gcmUuZXhlYyhwYXRobmFtZSEpXG4gICAgaWYgKCFyb3V0ZU1hdGNoKSB7XG4gICAgICByZXR1cm4gZmFsc2VcbiAgICB9XG5cbiAgICBjb25zdCBkZWNvZGUgPSAocGFyYW06IHN0cmluZykgPT4ge1xuICAgICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGRlY29kZVVSSUNvbXBvbmVudChwYXJhbSlcbiAgICAgIH0gY2F0Y2ggKF8pIHtcbiAgICAgICAgY29uc3QgZXJyOiBFcnJvciAmIHsgY29kZT86IHN0cmluZyB9ID0gbmV3IEVycm9yKFxuICAgICAgICAgICdmYWlsZWQgdG8gZGVjb2RlIHBhcmFtJ1xuICAgICAgICApXG4gICAgICAgIGVyci5jb2RlID0gJ0RFQ09ERV9GQUlMRUQnXG4gICAgICAgIHRocm93IGVyclxuICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBwYXJhbXM6IHsgW3BhcmFtTmFtZTogc3RyaW5nXTogc3RyaW5nIHwgc3RyaW5nW10gfSA9IHt9XG5cbiAgICBPYmplY3Qua2V5cyhncm91cHMpLmZvckVhY2goKHNsdWdOYW1lOiBzdHJpbmcpID0+IHtcbiAgICAgIGNvbnN0IGcgPSBncm91cHNbc2x1Z05hbWVdXG4gICAgICBjb25zdCBtID0gcm91dGVNYXRjaFtnLnBvc11cbiAgICAgIGlmIChtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcGFyYW1zW3NsdWdOYW1lXSA9IH5tLmluZGV4T2YoJy8nKVxuICAgICAgICAgID8gbS5zcGxpdCgnLycpLm1hcCgoZW50cnkpID0+IGRlY29kZShlbnRyeSkpXG4gICAgICAgICAgOiBnLnJlcGVhdFxuICAgICAgICAgID8gW2RlY29kZShtKV1cbiAgICAgICAgICA6IGRlY29kZShtKVxuICAgICAgfVxuICAgIH0pXG4gICAgcmV0dXJuIHBhcmFtc1xuICB9XG59XG4iLCJpbnRlcmZhY2UgR3JvdXAge1xuICBwb3M6IG51bWJlclxuICByZXBlYXQ6IGJvb2xlYW5cbiAgb3B0aW9uYWw6IGJvb2xlYW5cbn1cblxuLy8gdGhpcyBpc24ndCBpbXBvcnRpbmcgdGhlIGVzY2FwZS1zdHJpbmctcmVnZXggbW9kdWxlXG4vLyB0byByZWR1Y2UgYnl0ZXNcbmZ1bmN0aW9uIGVzY2FwZVJlZ2V4KHN0cjogc3RyaW5nKSB7XG4gIHJldHVybiBzdHIucmVwbGFjZSgvW3xcXFxce30oKVtcXF1eJCsqPy4tXS9nLCAnXFxcXCQmJylcbn1cblxuZnVuY3Rpb24gcGFyc2VQYXJhbWV0ZXIocGFyYW06IHN0cmluZykge1xuICBjb25zdCBvcHRpb25hbCA9IHBhcmFtLnN0YXJ0c1dpdGgoJ1snKSAmJiBwYXJhbS5lbmRzV2l0aCgnXScpXG4gIGlmIChvcHRpb25hbCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMSwgLTEpXG4gIH1cbiAgY29uc3QgcmVwZWF0ID0gcGFyYW0uc3RhcnRzV2l0aCgnLi4uJylcbiAgaWYgKHJlcGVhdCkge1xuICAgIHBhcmFtID0gcGFyYW0uc2xpY2UoMylcbiAgfVxuICByZXR1cm4geyBrZXk6IHBhcmFtLCByZXBlYXQsIG9wdGlvbmFsIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJvdXRlUmVnZXgoXG4gIG5vcm1hbGl6ZWRSb3V0ZTogc3RyaW5nXG4pOiB7XG4gIHJlOiBSZWdFeHBcbiAgbmFtZWRSZWdleD86IHN0cmluZ1xuICByb3V0ZUtleXM/OiB7IFtuYW1lZDogc3RyaW5nXTogc3RyaW5nIH1cbiAgZ3JvdXBzOiB7IFtncm91cE5hbWU6IHN0cmluZ106IEdyb3VwIH1cbn0ge1xuICBjb25zdCBzZWdtZW50cyA9IChub3JtYWxpemVkUm91dGUucmVwbGFjZSgvXFwvJC8sICcnKSB8fCAnLycpXG4gICAgLnNsaWNlKDEpXG4gICAgLnNwbGl0KCcvJylcblxuICBjb25zdCBncm91cHM6IHsgW2dyb3VwTmFtZTogc3RyaW5nXTogR3JvdXAgfSA9IHt9XG4gIGxldCBncm91cEluZGV4ID0gMVxuICBjb25zdCBwYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgIC5tYXAoKHNlZ21lbnQpID0+IHtcbiAgICAgIGlmIChzZWdtZW50LnN0YXJ0c1dpdGgoJ1snKSAmJiBzZWdtZW50LmVuZHNXaXRoKCddJykpIHtcbiAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICBncm91cHNba2V5XSA9IHsgcG9zOiBncm91cEluZGV4KyssIHJlcGVhdCwgb3B0aW9uYWwgfVxuICAgICAgICByZXR1cm4gcmVwZWF0ID8gKG9wdGlvbmFsID8gJyg/Oi8oLis/KSk/JyA6ICcvKC4rPyknKSA6ICcvKFteL10rPyknXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYC8ke2VzY2FwZVJlZ2V4KHNlZ21lbnQpfWBcbiAgICAgIH1cbiAgICB9KVxuICAgIC5qb2luKCcnKVxuXG4gIC8vIGRlYWQgY29kZSBlbGltaW5hdGUgZm9yIGJyb3dzZXIgc2luY2UgaXQncyBvbmx5IG5lZWRlZFxuICAvLyB3aGlsZSBnZW5lcmF0aW5nIHJvdXRlcy1tYW5pZmVzdFxuICBpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICBsZXQgcm91dGVLZXlDaGFyQ29kZSA9IDk3XG4gICAgbGV0IHJvdXRlS2V5Q2hhckxlbmd0aCA9IDFcblxuICAgIC8vIGJ1aWxkcyBhIG1pbmltYWwgcm91dGVLZXkgdXNpbmcgb25seSBhLXogYW5kIG1pbmltYWwgbnVtYmVyIG9mIGNoYXJhY3RlcnNcbiAgICBjb25zdCBnZXRTYWZlUm91dGVLZXkgPSAoKSA9PiB7XG4gICAgICBsZXQgcm91dGVLZXkgPSAnJ1xuXG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHJvdXRlS2V5Q2hhckxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHJvdXRlS2V5ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUocm91dGVLZXlDaGFyQ29kZSlcbiAgICAgICAgcm91dGVLZXlDaGFyQ29kZSsrXG5cbiAgICAgICAgaWYgKHJvdXRlS2V5Q2hhckNvZGUgPiAxMjIpIHtcbiAgICAgICAgICByb3V0ZUtleUNoYXJMZW5ndGgrK1xuICAgICAgICAgIHJvdXRlS2V5Q2hhckNvZGUgPSA5N1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gcm91dGVLZXlcbiAgICB9XG5cbiAgICBjb25zdCByb3V0ZUtleXM6IHsgW25hbWVkOiBzdHJpbmddOiBzdHJpbmcgfSA9IHt9XG5cbiAgICBsZXQgbmFtZWRQYXJhbWV0ZXJpemVkUm91dGUgPSBzZWdtZW50c1xuICAgICAgLm1hcCgoc2VnbWVudCkgPT4ge1xuICAgICAgICBpZiAoc2VnbWVudC5zdGFydHNXaXRoKCdbJykgJiYgc2VnbWVudC5lbmRzV2l0aCgnXScpKSB7XG4gICAgICAgICAgY29uc3QgeyBrZXksIG9wdGlvbmFsLCByZXBlYXQgfSA9IHBhcnNlUGFyYW1ldGVyKHNlZ21lbnQuc2xpY2UoMSwgLTEpKVxuICAgICAgICAgIC8vIHJlcGxhY2UgYW55IG5vbi13b3JkIGNoYXJhY3RlcnMgc2luY2UgdGhleSBjYW4gYnJlYWtcbiAgICAgICAgICAvLyB0aGUgbmFtZWQgcmVnZXhcbiAgICAgICAgICBsZXQgY2xlYW5lZEtleSA9IGtleS5yZXBsYWNlKC9cXFcvZywgJycpXG4gICAgICAgICAgbGV0IGludmFsaWRLZXkgPSBmYWxzZVxuXG4gICAgICAgICAgLy8gY2hlY2sgaWYgdGhlIGtleSBpcyBzdGlsbCBpbnZhbGlkIGFuZCBmYWxsYmFjayB0byB1c2luZyBhIGtub3duXG4gICAgICAgICAgLy8gc2FmZSBrZXlcbiAgICAgICAgICBpZiAoY2xlYW5lZEtleS5sZW5ndGggPT09IDAgfHwgY2xlYW5lZEtleS5sZW5ndGggPiAzMCkge1xuICAgICAgICAgICAgaW52YWxpZEtleSA9IHRydWVcbiAgICAgICAgICB9XG4gICAgICAgICAgaWYgKCFpc05hTihwYXJzZUludChjbGVhbmVkS2V5LnN1YnN0cigwLCAxKSkpKSB7XG4gICAgICAgICAgICBpbnZhbGlkS2V5ID0gdHJ1ZVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChpbnZhbGlkS2V5KSB7XG4gICAgICAgICAgICBjbGVhbmVkS2V5ID0gZ2V0U2FmZVJvdXRlS2V5KClcbiAgICAgICAgICB9XG5cbiAgICAgICAgICByb3V0ZUtleXNbY2xlYW5lZEtleV0gPSBrZXlcbiAgICAgICAgICByZXR1cm4gcmVwZWF0XG4gICAgICAgICAgICA/IG9wdGlvbmFsXG4gICAgICAgICAgICAgID8gYCg/Oi8oPzwke2NsZWFuZWRLZXl9Pi4rPykpP2BcbiAgICAgICAgICAgICAgOiBgLyg/PCR7Y2xlYW5lZEtleX0+Lis/KWBcbiAgICAgICAgICAgIDogYC8oPzwke2NsZWFuZWRLZXl9PlteL10rPylgXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGAvJHtlc2NhcGVSZWdleChzZWdtZW50KX1gXG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuam9pbignJylcblxuICAgIHJldHVybiB7XG4gICAgICByZTogbmV3IFJlZ0V4cChgXiR7cGFyYW1ldGVyaXplZFJvdXRlfSg/Oi8pPyRgKSxcbiAgICAgIGdyb3VwcyxcbiAgICAgIHJvdXRlS2V5cyxcbiAgICAgIG5hbWVkUmVnZXg6IGBeJHtuYW1lZFBhcmFtZXRlcml6ZWRSb3V0ZX0oPzovKT8kYCxcbiAgICB9XG4gIH1cblxuICByZXR1cm4ge1xuICAgIHJlOiBuZXcgUmVnRXhwKGBeJHtwYXJhbWV0ZXJpemVkUm91dGV9KD86Lyk/JGApLFxuICAgIGdyb3VwcyxcbiAgfVxufVxuIiwiaW1wb3J0IHsgSW5jb21pbmdNZXNzYWdlLCBTZXJ2ZXJSZXNwb25zZSB9IGZyb20gJ2h0dHAnXG5pbXBvcnQgeyBQYXJzZWRVcmxRdWVyeSB9IGZyb20gJ3F1ZXJ5c3RyaW5nJ1xuaW1wb3J0IHsgQ29tcG9uZW50VHlwZSB9IGZyb20gJ3JlYWN0J1xuaW1wb3J0IHsgVXJsT2JqZWN0IH0gZnJvbSAndXJsJ1xuaW1wb3J0IHsgZm9ybWF0VXJsIH0gZnJvbSAnLi9yb3V0ZXIvdXRpbHMvZm9ybWF0LXVybCdcbmltcG9ydCB7IE1hbmlmZXN0SXRlbSB9IGZyb20gJy4uL3NlcnZlci9sb2FkLWNvbXBvbmVudHMnXG5pbXBvcnQgeyBOZXh0Um91dGVyIH0gZnJvbSAnLi9yb3V0ZXIvcm91dGVyJ1xuaW1wb3J0IHsgRW52IH0gZnJvbSAnQG5leHQvZW52J1xuaW1wb3J0IHsgQnVpbGRNYW5pZmVzdCB9IGZyb20gJy4uL3NlcnZlci9nZXQtcGFnZS1maWxlcydcblxuLyoqXG4gKiBUeXBlcyB1c2VkIGJ5IGJvdGggbmV4dCBhbmQgbmV4dC1zZXJ2ZXJcbiAqL1xuXG5leHBvcnQgdHlwZSBOZXh0Q29tcG9uZW50VHlwZTxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4gPSBDb21wb25lbnRUeXBlPFA+ICYge1xuICAvKipcbiAgICogVXNlZCBmb3IgaW5pdGlhbCBwYWdlIGxvYWQgZGF0YSBwb3B1bGF0aW9uLiBEYXRhIHJldHVybmVkIGZyb20gYGdldEluaXRpYWxQcm9wc2AgaXMgc2VyaWFsaXplZCB3aGVuIHNlcnZlciByZW5kZXJlZC5cbiAgICogTWFrZSBzdXJlIHRvIHJldHVybiBwbGFpbiBgT2JqZWN0YCB3aXRob3V0IHVzaW5nIGBEYXRlYCwgYE1hcGAsIGBTZXRgLlxuICAgKiBAcGFyYW0gY3R4IENvbnRleHQgb2YgYHBhZ2VgXG4gICAqL1xuICBnZXRJbml0aWFsUHJvcHM/KGNvbnRleHQ6IEMpOiBJUCB8IFByb21pc2U8SVA+XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50VHlwZSA9IE5leHRDb21wb25lbnRUeXBlPFxuICBEb2N1bWVudENvbnRleHQsXG4gIERvY3VtZW50SW5pdGlhbFByb3BzLFxuICBEb2N1bWVudFByb3BzXG4+ICYge1xuICByZW5kZXJEb2N1bWVudChcbiAgICBEb2N1bWVudDogRG9jdW1lbnRUeXBlLFxuICAgIHByb3BzOiBEb2N1bWVudFByb3BzXG4gICk6IFJlYWN0LlJlYWN0RWxlbWVudFxufVxuXG5leHBvcnQgdHlwZSBBcHBUeXBlID0gTmV4dENvbXBvbmVudFR5cGU8XG4gIEFwcENvbnRleHRUeXBlLFxuICBBcHBJbml0aWFsUHJvcHMsXG4gIEFwcFByb3BzVHlwZVxuPlxuXG5leHBvcnQgdHlwZSBBcHBUcmVlVHlwZSA9IENvbXBvbmVudFR5cGU8XG4gIEFwcEluaXRpYWxQcm9wcyAmIHsgW25hbWU6IHN0cmluZ106IGFueSB9XG4+XG5cbi8qKlxuICogV2ViIHZpdGFscyBwcm92aWRlZCB0byBfYXBwLnJlcG9ydFdlYlZpdGFscyBieSBDb3JlIFdlYiBWaXRhbHMgcGx1Z2luIGRldmVsb3BlZCBieSBHb29nbGUgQ2hyb21lIHRlYW0uXG4gKiBodHRwczovL25leHRqcy5vcmcvYmxvZy9uZXh0LTktNCNpbnRlZ3JhdGVkLXdlYi12aXRhbHMtcmVwb3J0aW5nXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRXZWJWaXRhbHNNZXRyaWMgPSB7XG4gIGlkOiBzdHJpbmdcbiAgbGFiZWw6IHN0cmluZ1xuICBuYW1lOiBzdHJpbmdcbiAgc3RhcnRUaW1lOiBudW1iZXJcbiAgdmFsdWU6IG51bWJlclxufVxuXG5leHBvcnQgdHlwZSBFbmhhbmNlcjxDPiA9IChDb21wb25lbnQ6IEMpID0+IENcblxuZXhwb3J0IHR5cGUgQ29tcG9uZW50c0VuaGFuY2VyID1cbiAgfCB7XG4gICAgICBlbmhhbmNlQXBwPzogRW5oYW5jZXI8QXBwVHlwZT5cbiAgICAgIGVuaGFuY2VDb21wb25lbnQ/OiBFbmhhbmNlcjxOZXh0Q29tcG9uZW50VHlwZT5cbiAgICB9XG4gIHwgRW5oYW5jZXI8TmV4dENvbXBvbmVudFR5cGU+XG5cbmV4cG9ydCB0eXBlIFJlbmRlclBhZ2VSZXN1bHQgPSB7XG4gIGh0bWw6IHN0cmluZ1xuICBoZWFkPzogQXJyYXk8SlNYLkVsZW1lbnQgfCBudWxsPlxufVxuXG5leHBvcnQgdHlwZSBSZW5kZXJQYWdlID0gKFxuICBvcHRpb25zPzogQ29tcG9uZW50c0VuaGFuY2VyXG4pID0+IFJlbmRlclBhZ2VSZXN1bHQgfCBQcm9taXNlPFJlbmRlclBhZ2VSZXN1bHQ+XG5cbmV4cG9ydCB0eXBlIEJhc2VDb250ZXh0ID0ge1xuICByZXM/OiBTZXJ2ZXJSZXNwb25zZVxuICBbazogc3RyaW5nXTogYW55XG59XG5cbmV4cG9ydCB0eXBlIEhlYWRFbnRyeSA9IFtzdHJpbmcsIHsgW2tleTogc3RyaW5nXTogYW55IH1dXG5cbmV4cG9ydCB0eXBlIE5FWFRfREFUQSA9IHtcbiAgcHJvcHM6IFJlY29yZDxzdHJpbmcsIGFueT5cbiAgcGFnZTogc3RyaW5nXG4gIHF1ZXJ5OiBQYXJzZWRVcmxRdWVyeVxuICBidWlsZElkOiBzdHJpbmdcbiAgYXNzZXRQcmVmaXg/OiBzdHJpbmdcbiAgcnVudGltZUNvbmZpZz86IHsgW2tleTogc3RyaW5nXTogYW55IH1cbiAgbmV4dEV4cG9ydD86IGJvb2xlYW5cbiAgYXV0b0V4cG9ydD86IGJvb2xlYW5cbiAgaXNGYWxsYmFjaz86IGJvb2xlYW5cbiAgZHluYW1pY0lkcz86IHN0cmluZ1tdXG4gIGVycj86IEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH1cbiAgZ3NwPzogYm9vbGVhblxuICBnc3NwPzogYm9vbGVhblxuICBjdXN0b21TZXJ2ZXI/OiBib29sZWFuXG4gIGdpcD86IGJvb2xlYW5cbiAgYXBwR2lwPzogYm9vbGVhblxuICBoZWFkOiBIZWFkRW50cnlbXVxuICBsb2NhbGU/OiBzdHJpbmdcbiAgbG9jYWxlcz86IHN0cmluZ1tdXG4gIGRlZmF1bHRMb2NhbGU/OiBzdHJpbmdcbn1cblxuLyoqXG4gKiBgTmV4dGAgY29udGV4dFxuICovXG5leHBvcnQgaW50ZXJmYWNlIE5leHRQYWdlQ29udGV4dCB7XG4gIC8qKlxuICAgKiBFcnJvciBvYmplY3QgaWYgZW5jb3VudGVyZWQgZHVyaW5nIHJlbmRlcmluZ1xuICAgKi9cbiAgZXJyPzogKEVycm9yICYgeyBzdGF0dXNDb2RlPzogbnVtYmVyIH0pIHwgbnVsbFxuICAvKipcbiAgICogYEhUVFBgIHJlcXVlc3Qgb2JqZWN0LlxuICAgKi9cbiAgcmVxPzogSW5jb21pbmdNZXNzYWdlXG4gIC8qKlxuICAgKiBgSFRUUGAgcmVzcG9uc2Ugb2JqZWN0LlxuICAgKi9cbiAgcmVzPzogU2VydmVyUmVzcG9uc2VcbiAgLyoqXG4gICAqIFBhdGggc2VjdGlvbiBvZiBgVVJMYC5cbiAgICovXG4gIHBhdGhuYW1lOiBzdHJpbmdcbiAgLyoqXG4gICAqIFF1ZXJ5IHN0cmluZyBzZWN0aW9uIG9mIGBVUkxgIHBhcnNlZCBhcyBhbiBvYmplY3QuXG4gICAqL1xuICBxdWVyeTogUGFyc2VkVXJsUXVlcnlcbiAgLyoqXG4gICAqIGBTdHJpbmdgIG9mIHRoZSBhY3R1YWwgcGF0aCBpbmNsdWRpbmcgcXVlcnkuXG4gICAqL1xuICBhc1BhdGg/OiBzdHJpbmdcbiAgLyoqXG4gICAqIGBDb21wb25lbnRgIHRoZSB0cmVlIG9mIHRoZSBBcHAgdG8gdXNlIGlmIG5lZWRpbmcgdG8gcmVuZGVyIHNlcGFyYXRlbHlcbiAgICovXG4gIEFwcFRyZWU6IEFwcFRyZWVUeXBlXG59XG5cbmV4cG9ydCB0eXBlIEFwcENvbnRleHRUeXBlPFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcj4gPSB7XG4gIENvbXBvbmVudDogTmV4dENvbXBvbmVudFR5cGU8TmV4dFBhZ2VDb250ZXh0PlxuICBBcHBUcmVlOiBBcHBUcmVlVHlwZVxuICBjdHg6IE5leHRQYWdlQ29udGV4dFxuICByb3V0ZXI6IFJcbn1cblxuZXhwb3J0IHR5cGUgQXBwSW5pdGlhbFByb3BzID0ge1xuICBwYWdlUHJvcHM6IGFueVxufVxuXG5leHBvcnQgdHlwZSBBcHBQcm9wc1R5cGU8XG4gIFIgZXh0ZW5kcyBOZXh0Um91dGVyID0gTmV4dFJvdXRlcixcbiAgUCA9IHt9XG4+ID0gQXBwSW5pdGlhbFByb3BzICYge1xuICBDb21wb25lbnQ6IE5leHRDb21wb25lbnRUeXBlPE5leHRQYWdlQ29udGV4dCwgYW55LCBQPlxuICByb3V0ZXI6IFJcbiAgX19OX1NTRz86IGJvb2xlYW5cbiAgX19OX1NTUD86IGJvb2xlYW5cbn1cblxuZXhwb3J0IHR5cGUgRG9jdW1lbnRDb250ZXh0ID0gTmV4dFBhZ2VDb250ZXh0ICYge1xuICByZW5kZXJQYWdlOiBSZW5kZXJQYWdlXG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50SW5pdGlhbFByb3BzID0gUmVuZGVyUGFnZVJlc3VsdCAmIHtcbiAgc3R5bGVzPzogUmVhY3QuUmVhY3RFbGVtZW50W10gfCBSZWFjdC5SZWFjdEZyYWdtZW50XG59XG5cbmV4cG9ydCB0eXBlIERvY3VtZW50UHJvcHMgPSBEb2N1bWVudEluaXRpYWxQcm9wcyAmIHtcbiAgX19ORVhUX0RBVEFfXzogTkVYVF9EQVRBXG4gIGRhbmdlcm91c0FzUGF0aDogc3RyaW5nXG4gIGRvY0NvbXBvbmVudHNSZW5kZXJlZDoge1xuICAgIEh0bWw/OiBib29sZWFuXG4gICAgTWFpbj86IGJvb2xlYW5cbiAgICBIZWFkPzogYm9vbGVhblxuICAgIE5leHRTY3JpcHQ/OiBib29sZWFuXG4gIH1cbiAgYnVpbGRNYW5pZmVzdDogQnVpbGRNYW5pZmVzdFxuICBhbXBQYXRoOiBzdHJpbmdcbiAgaW5BbXBNb2RlOiBib29sZWFuXG4gIGh5YnJpZEFtcDogYm9vbGVhblxuICBpc0RldmVsb3BtZW50OiBib29sZWFuXG4gIGR5bmFtaWNJbXBvcnRzOiBNYW5pZmVzdEl0ZW1bXVxuICBhc3NldFByZWZpeD86IHN0cmluZ1xuICBjYW5vbmljYWxCYXNlOiBzdHJpbmdcbiAgaGVhZFRhZ3M6IGFueVtdXG4gIHVuc3RhYmxlX3J1bnRpbWVKUz86IGZhbHNlXG4gIGRldk9ubHlDYWNoZUJ1c3RlclF1ZXJ5U3RyaW5nOiBzdHJpbmdcbiAgbG9jYWxlPzogc3RyaW5nXG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSByZXF1ZXN0XG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmV4dEFwaVJlcXVlc3QgZXh0ZW5kcyBJbmNvbWluZ01lc3NhZ2Uge1xuICAvKipcbiAgICogT2JqZWN0IG9mIGBxdWVyeWAgdmFsdWVzIGZyb20gdXJsXG4gICAqL1xuICBxdWVyeToge1xuICAgIFtrZXk6IHN0cmluZ106IHN0cmluZyB8IHN0cmluZ1tdXG4gIH1cbiAgLyoqXG4gICAqIE9iamVjdCBvZiBgY29va2llc2AgZnJvbSBoZWFkZXJcbiAgICovXG4gIGNvb2tpZXM6IHtcbiAgICBba2V5OiBzdHJpbmddOiBzdHJpbmdcbiAgfVxuXG4gIGJvZHk6IGFueVxuXG4gIGVudjogRW52XG5cbiAgcHJldmlldz86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFByZXZpZXcgZGF0YSBzZXQgb24gdGhlIHJlcXVlc3QsIGlmIGFueVxuICAgKiAqL1xuICBwcmV2aWV3RGF0YT86IGFueVxufVxuXG4vKipcbiAqIFNlbmQgYm9keSBvZiByZXNwb25zZVxuICovXG50eXBlIFNlbmQ8VD4gPSAoYm9keTogVCkgPT4gdm9pZFxuXG4vKipcbiAqIE5leHQgYEFQSWAgcm91dGUgcmVzcG9uc2VcbiAqL1xuZXhwb3J0IHR5cGUgTmV4dEFwaVJlc3BvbnNlPFQgPSBhbnk+ID0gU2VydmVyUmVzcG9uc2UgJiB7XG4gIC8qKlxuICAgKiBTZW5kIGRhdGEgYGFueWAgZGF0YSBpbiByZXNwb25zZVxuICAgKi9cbiAgc2VuZDogU2VuZDxUPlxuICAvKipcbiAgICogU2VuZCBkYXRhIGBqc29uYCBkYXRhIGluIHJlc3BvbnNlXG4gICAqL1xuICBqc29uOiBTZW5kPFQ+XG4gIHN0YXR1czogKHN0YXR1c0NvZGU6IG51bWJlcikgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHVybDogc3RyaW5nKTogTmV4dEFwaVJlc3BvbnNlPFQ+XG4gIHJlZGlyZWN0KHN0YXR1czogbnVtYmVyLCB1cmw6IHN0cmluZyk6IE5leHRBcGlSZXNwb25zZTxUPlxuXG4gIC8qKlxuICAgKiBTZXQgcHJldmlldyBkYXRhIGZvciBOZXh0LmpzJyBwcmVyZW5kZXIgbW9kZVxuICAgKi9cbiAgc2V0UHJldmlld0RhdGE6IChcbiAgICBkYXRhOiBvYmplY3QgfCBzdHJpbmcsXG4gICAgb3B0aW9ucz86IHtcbiAgICAgIC8qKlxuICAgICAgICogU3BlY2lmaWVzIHRoZSBudW1iZXIgKGluIHNlY29uZHMpIGZvciB0aGUgcHJldmlldyBzZXNzaW9uIHRvIGxhc3QgZm9yLlxuICAgICAgICogVGhlIGdpdmVuIG51bWJlciB3aWxsIGJlIGNvbnZlcnRlZCB0byBhbiBpbnRlZ2VyIGJ5IHJvdW5kaW5nIGRvd24uXG4gICAgICAgKiBCeSBkZWZhdWx0LCBubyBtYXhpbXVtIGFnZSBpcyBzZXQgYW5kIHRoZSBwcmV2aWV3IHNlc3Npb24gZmluaXNoZXNcbiAgICAgICAqIHdoZW4gdGhlIGNsaWVudCBzaHV0cyBkb3duIChicm93c2VyIGlzIGNsb3NlZCkuXG4gICAgICAgKi9cbiAgICAgIG1heEFnZT86IG51bWJlclxuICAgIH1cbiAgKSA9PiBOZXh0QXBpUmVzcG9uc2U8VD5cbiAgY2xlYXJQcmV2aWV3RGF0YTogKCkgPT4gTmV4dEFwaVJlc3BvbnNlPFQ+XG59XG5cbi8qKlxuICogTmV4dCBgQVBJYCByb3V0ZSBoYW5kbGVyXG4gKi9cbmV4cG9ydCB0eXBlIE5leHRBcGlIYW5kbGVyPFQgPSBhbnk+ID0gKFxuICByZXE6IE5leHRBcGlSZXF1ZXN0LFxuICByZXM6IE5leHRBcGlSZXNwb25zZTxUPlxuKSA9PiB2b2lkIHwgUHJvbWlzZTx2b2lkPlxuXG4vKipcbiAqIFV0aWxzXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBleGVjT25jZTxUIGV4dGVuZHMgKC4uLmFyZ3M6IGFueVtdKSA9PiBSZXR1cm5UeXBlPFQ+PihcbiAgZm46IFRcbik6IFQge1xuICBsZXQgdXNlZCA9IGZhbHNlXG4gIGxldCByZXN1bHQ6IFJldHVyblR5cGU8VD5cblxuICByZXR1cm4gKCguLi5hcmdzOiBhbnlbXSkgPT4ge1xuICAgIGlmICghdXNlZCkge1xuICAgICAgdXNlZCA9IHRydWVcbiAgICAgIHJlc3VsdCA9IGZuKC4uLmFyZ3MpXG4gICAgfVxuICAgIHJldHVybiByZXN1bHRcbiAgfSkgYXMgVFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TG9jYXRpb25PcmlnaW4oKSB7XG4gIGNvbnN0IHsgcHJvdG9jb2wsIGhvc3RuYW1lLCBwb3J0IH0gPSB3aW5kb3cubG9jYXRpb25cbiAgcmV0dXJuIGAke3Byb3RvY29sfS8vJHtob3N0bmFtZX0ke3BvcnQgPyAnOicgKyBwb3J0IDogJyd9YFxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VVJMKCkge1xuICBjb25zdCB7IGhyZWYgfSA9IHdpbmRvdy5sb2NhdGlvblxuICBjb25zdCBvcmlnaW4gPSBnZXRMb2NhdGlvbk9yaWdpbigpXG4gIHJldHVybiBocmVmLnN1YnN0cmluZyhvcmlnaW4ubGVuZ3RoKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0RGlzcGxheU5hbWU8UD4oQ29tcG9uZW50OiBDb21wb25lbnRUeXBlPFA+KSB7XG4gIHJldHVybiB0eXBlb2YgQ29tcG9uZW50ID09PSAnc3RyaW5nJ1xuICAgID8gQ29tcG9uZW50XG4gICAgOiBDb21wb25lbnQuZGlzcGxheU5hbWUgfHwgQ29tcG9uZW50Lm5hbWUgfHwgJ1Vua25vd24nXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1Jlc1NlbnQocmVzOiBTZXJ2ZXJSZXNwb25zZSkge1xuICByZXR1cm4gcmVzLmZpbmlzaGVkIHx8IHJlcy5oZWFkZXJzU2VudFxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbG9hZEdldEluaXRpYWxQcm9wczxcbiAgQyBleHRlbmRzIEJhc2VDb250ZXh0LFxuICBJUCA9IHt9LFxuICBQID0ge31cbj4oQXBwOiBOZXh0Q29tcG9uZW50VHlwZTxDLCBJUCwgUD4sIGN0eDogQyk6IFByb21pc2U8SVA+IHtcbiAgaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WICE9PSAncHJvZHVjdGlvbicpIHtcbiAgICBpZiAoQXBwLnByb3RvdHlwZT8uZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgICBjb25zdCBtZXNzYWdlID0gYFwiJHtnZXREaXNwbGF5TmFtZShcbiAgICAgICAgQXBwXG4gICAgICApfS5nZXRJbml0aWFsUHJvcHMoKVwiIGlzIGRlZmluZWQgYXMgYW4gaW5zdGFuY2UgbWV0aG9kIC0gdmlzaXQgaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZ2V0LWluaXRpYWwtcHJvcHMtYXMtYW4taW5zdGFuY2UtbWV0aG9kIGZvciBtb3JlIGluZm9ybWF0aW9uLmBcbiAgICAgIHRocm93IG5ldyBFcnJvcihtZXNzYWdlKVxuICAgIH1cbiAgfVxuICAvLyB3aGVuIGNhbGxlZCBmcm9tIF9hcHAgYGN0eGAgaXMgbmVzdGVkIGluIGBjdHhgXG4gIGNvbnN0IHJlcyA9IGN0eC5yZXMgfHwgKGN0eC5jdHggJiYgY3R4LmN0eC5yZXMpXG5cbiAgaWYgKCFBcHAuZ2V0SW5pdGlhbFByb3BzKSB7XG4gICAgaWYgKGN0eC5jdHggJiYgY3R4LkNvbXBvbmVudCkge1xuICAgICAgLy8gQHRzLWlnbm9yZSBwYWdlUHJvcHMgZGVmYXVsdFxuICAgICAgcmV0dXJuIHtcbiAgICAgICAgcGFnZVByb3BzOiBhd2FpdCBsb2FkR2V0SW5pdGlhbFByb3BzKGN0eC5Db21wb25lbnQsIGN0eC5jdHgpLFxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4ge30gYXMgSVBcbiAgfVxuXG4gIGNvbnN0IHByb3BzID0gYXdhaXQgQXBwLmdldEluaXRpYWxQcm9wcyhjdHgpXG5cbiAgaWYgKHJlcyAmJiBpc1Jlc1NlbnQocmVzKSkge1xuICAgIHJldHVybiBwcm9wc1xuICB9XG5cbiAgaWYgKCFwcm9wcykge1xuICAgIGNvbnN0IG1lc3NhZ2UgPSBgXCIke2dldERpc3BsYXlOYW1lKFxuICAgICAgQXBwXG4gICAgKX0uZ2V0SW5pdGlhbFByb3BzKClcIiBzaG91bGQgcmVzb2x2ZSB0byBhbiBvYmplY3QuIEJ1dCBmb3VuZCBcIiR7cHJvcHN9XCIgaW5zdGVhZC5gXG4gICAgdGhyb3cgbmV3IEVycm9yKG1lc3NhZ2UpXG4gIH1cblxuICBpZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgIT09ICdwcm9kdWN0aW9uJykge1xuICAgIGlmIChPYmplY3Qua2V5cyhwcm9wcykubGVuZ3RoID09PSAwICYmICFjdHguY3R4KSB7XG4gICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgIGAke2dldERpc3BsYXlOYW1lKFxuICAgICAgICAgIEFwcFxuICAgICAgICApfSByZXR1cm5lZCBhbiBlbXB0eSBvYmplY3QgZnJvbSBcXGBnZXRJbml0aWFsUHJvcHNcXGAuIFRoaXMgZGUtb3B0aW1pemVzIGFuZCBwcmV2ZW50cyBhdXRvbWF0aWMgc3RhdGljIG9wdGltaXphdGlvbi4gaHR0cHM6Ly9lcnIuc2gvdmVyY2VsL25leHQuanMvZW1wdHktb2JqZWN0LWdldEluaXRpYWxQcm9wc2BcbiAgICAgIClcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcHJvcHNcbn1cblxuZXhwb3J0IGNvbnN0IHVybE9iamVjdEtleXMgPSBbXG4gICdhdXRoJyxcbiAgJ2hhc2gnLFxuICAnaG9zdCcsXG4gICdob3N0bmFtZScsXG4gICdocmVmJyxcbiAgJ3BhdGgnLFxuICAncGF0aG5hbWUnLFxuICAncG9ydCcsXG4gICdwcm90b2NvbCcsXG4gICdxdWVyeScsXG4gICdzZWFyY2gnLFxuICAnc2xhc2hlcycsXG5dXG5cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXRXaXRoVmFsaWRhdGlvbih1cmw6IFVybE9iamVjdCk6IHN0cmluZyB7XG4gIGlmIChwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50Jykge1xuICAgIGlmICh1cmwgIT09IG51bGwgJiYgdHlwZW9mIHVybCA9PT0gJ29iamVjdCcpIHtcbiAgICAgIE9iamVjdC5rZXlzKHVybCkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGlmICh1cmxPYmplY3RLZXlzLmluZGV4T2Yoa2V5KSA9PT0gLTEpIHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICBgVW5rbm93biBrZXkgcGFzc2VkIHZpYSB1cmxPYmplY3QgaW50byB1cmwuZm9ybWF0OiAke2tleX1gXG4gICAgICAgICAgKVxuICAgICAgICB9XG4gICAgICB9KVxuICAgIH1cbiAgfVxuXG4gIHJldHVybiBmb3JtYXRVcmwodXJsKVxufVxuXG5leHBvcnQgY29uc3QgU1AgPSB0eXBlb2YgcGVyZm9ybWFuY2UgIT09ICd1bmRlZmluZWQnXG5leHBvcnQgY29uc3QgU1QgPVxuICBTUCAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWFyayA9PT0gJ2Z1bmN0aW9uJyAmJlxuICB0eXBlb2YgcGVyZm9ybWFuY2UubWVhc3VyZSA9PT0gJ2Z1bmN0aW9uJ1xuIiwiXCJ1c2Ugc3RyaWN0XCI7ZXhwb3J0cy5fX2VzTW9kdWxlPXRydWU7ZXhwb3J0cy5ub3JtYWxpemVQYXRoU2VwPW5vcm1hbGl6ZVBhdGhTZXA7ZXhwb3J0cy5kZW5vcm1hbGl6ZVBhZ2VQYXRoPWRlbm9ybWFsaXplUGFnZVBhdGg7ZnVuY3Rpb24gbm9ybWFsaXplUGF0aFNlcChwYXRoKXtyZXR1cm4gcGF0aC5yZXBsYWNlKC9cXFxcL2csJy8nKTt9ZnVuY3Rpb24gZGVub3JtYWxpemVQYWdlUGF0aChwYWdlKXtwYWdlPW5vcm1hbGl6ZVBhdGhTZXAocGFnZSk7aWYocGFnZS5zdGFydHNXaXRoKCcvaW5kZXgvJykpe3BhZ2U9cGFnZS5zbGljZSg2KTt9ZWxzZSBpZihwYWdlPT09Jy9pbmRleCcpe3BhZ2U9Jy8nO31yZXR1cm4gcGFnZTt9XG4vLyMgc291cmNlTWFwcGluZ1VSTD1kZW5vcm1hbGl6ZS1wYWdlLXBhdGguanMubWFwIiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL2Rpc3QvY2xpZW50L2xpbmsnKVxuIiwiaW1wb3J0IExheW91dCBmcm9tIFwiLi4vY29tcG9uZW50cy9MYXlvdXRcIjtcclxuaW1wb3J0IHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcclxuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xyXG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcclxuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xyXG5pbXBvcnQge1xyXG4gIG5ld3NQdWJsaWNMYXRlc3QsXHJcbiAgbmV3c1B1YmxpY1NlY29uZExhdGVzdCxcclxuICBuZXdzTGlzdFB1YmxpY0xpbWl0Rmlyc3RTZWN0aW9uLFxyXG4gIG5ld3NMaXN0UHVibGljTGltaXRTZWNvbmRTZWN0aW9uLFxyXG4gIG5ld3NMaXN0UHVibGljTGltaXRGaW5hbFNlY3Rpb24sXHJcbn0gZnJvbSBcIi4uL2FjdGlvbnMvbmV3cy5hY3Rpb25cIjtcclxuaW1wb3J0IHtcclxuICByZXZpZXdQdWJsaWNMYXRlc3QsXHJcbiAgcmV2aWV3UHVibGljU2Vjb25kTGF0ZXN0LFxyXG4gIHJldmlld1B1YmxpY0VpZ2h0TGF0ZXN0LFxyXG4gIHJldmlld0xpc3RQdWJsaWNNb2JpbGVOZXdzLFxyXG4gIHJldmlld0xpc3RQdWJsaWNMaW1pdGVkU2VjdGlvbk9uZSxcclxuICByZXZpZXdMaXN0UHVibGljTGltaXRlZFNlY3Rpb25Ud28sXHJcbiAgcmV2aWV3TGlzdFB1YmxpYyxcclxufSBmcm9tIFwiLi4vYWN0aW9ucy9yZXZpZXcuYWN0aW9uXCI7XHJcbmltcG9ydCB7IG1DYXRlZ29yeUxpc3RIb21lUGFnZSB9IGZyb20gXCIuLi9hY3Rpb25zL21vYmlsZUNhdGVnb3J5LmFjdGlvblwiO1xyXG5pbXBvcnQgeyBtb2JpbGVMaXN0UHVibGljTmV3c1Jldmlld3MgfSBmcm9tIFwiLi4vYWN0aW9ucy9tb2JpbGUuYWN0aW9uXCI7XHJcbmltcG9ydCB7IEFQSSwgRE9NQUlOLCBBUFBfTkFNRSwgRkJfQVBQX0lEIH0gZnJvbSBcIi4uL2NvbmZpZ1wiO1xyXG5pbXBvcnQgeyBNZFJhdGVSZXZpZXcsIE1kTmF2aWdhdGVOZXh0IH0gZnJvbSBcInJlYWN0LWljb25zL21kXCI7XHJcbmltcG9ydCB7IEZhTmV3c3BhcGVyIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XHJcbmltcG9ydCB7IEZpU21hcnRwaG9uZSB9IGZyb20gXCJyZWFjdC1pY29ucy9maVwiO1xyXG5pbXBvcnQgcmVuZGVySFRNTCBmcm9tIFwicmVhY3QtcmVuZGVyLWh0bWxcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiLi4vc3R5bGVzL2hvbWVQYWdlLm1vZHVsZS5jc3NcIjtcclxuXHJcbmNvbnN0IEluZGV4ID0gKHtcclxuICBsYXRlc3ROZXdzLFxyXG4gIHNlY29uZExhdGVzdE5ld3MsXHJcbiAgbGF0ZXN0UmV2aWV3LFxyXG4gIHNlY29uZExhdGVzdFJldmlldyxcclxuICBlaWdodExhdGVzdFJldmlldyxcclxuICBuZXdzTGltaXRGaXJzdFNlY3Rpb24sXHJcbiAgbmV3c0xpbWl0U2Vjb25kU2VjdGlvbixcclxuICBuZXdzTGltaXRGaW5hbFNlY3Rpb24sXHJcbiAgbGltaXRlZFJldmlld3NTZWN0aW9uT25lLFxyXG4gIGxpbWl0ZWRSZXZpZXdzU2VjdGlvblR3byxcclxuICByZXZpZXdMaXN0TGF0ZXN0LFxyXG4gIG1vYmlsZUNhdGVnb3J5TGlzdCxcclxuICBtb2JpbGVMaXN0TGF0ZXN0LFxyXG59KSA9PiB7XHJcbiAgY29uc3QgaGVhZCA9ICgpID0+IChcclxuICAgIDxIZWFkPlxyXG4gICAgICA8dGl0bGU+SG9tZSBQYWdlIC0ge0FQUF9OQU1FfTwvdGl0bGU+XHJcbiAgICAgIDxtZXRhXHJcbiAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcclxuICAgICAgICBjb250ZW50PVwiTGlzdCBvZiBhbGwgbW9iaWxlIHBob25lcyxzbWFydHBob25lcyx0YWJsZXRzLHdlYXJhYmxlcyBhbmQgYWNjZXNzb3JpZXMgYnJhbmRzXCJcclxuICAgICAgLz5cclxuICAgICAgPGxpbmsgcmVsPVwiY2Fub25pY2FsXCIgaHJlZj17YCR7RE9NQUlOfS9gfSAvPlxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17YEhvbWUgUGFnZXMgLSAke0FQUF9OQU1FfWB9IC8+XHJcbiAgICAgIDxtZXRhXHJcbiAgICAgICAgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiXHJcbiAgICAgICAgY29udGVudD1cIkxpc3Qgb2YgYWxsIG1vYmlsZSBwaG9uZXMsc21hcnRwaG9uZXMsdGFibGV0cyx3ZWFyYWJsZXMgYW5kIGFjY2Vzc29yaWVzIGJyYW5kc1wiXHJcbiAgICAgIC8+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dHlwZVwiIGNvbnRlbnQ9XCJ3ZWJzaXRlXCIgLz5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp1cmxcIiBjb250ZW50PXtgJHtET01BSU59L3Bob25lc2B9IC8+XHJcbiAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6c2l0ZV9uYW1lXCIgY29udGVudD17YCR7QVBQX05BTUV9YH0gLz5cclxuXHJcbiAgICAgIDxtZXRhXHJcbiAgICAgICAgYWx0PVwiUGhvdG8gYnkgc2FtIGxveWQgb24gVW5zcGxhc2hcIlxyXG4gICAgICAgIHByb3BlcnR5PVwib2c6aW1hZ2VcIlxyXG4gICAgICAgIGNvbnRlbnQ9e2Avc3RhdGljL2ltYWdlcy9zYW0tbG95ZC1zaW5nbGUtYnJhbmQtY292ZXItcGFnZS5qcGdgfVxyXG4gICAgICAvPlxyXG4gICAgICA8bWV0YVxyXG4gICAgICAgIGFsdD1cIlBob3RvIGJ5IHNhbSBsb3lkIG9uIFVuc3BsYXNoXCJcclxuICAgICAgICBwcm9wZXJ0eT1cIm9nOmltYWdlOnNlY3VyZV91cmxcIlxyXG4gICAgICAgIGNvbnRlbnQ9e2Avc3RhdGljL2ltYWdlcy9zYW0tbG95ZC1zaW5nbGUtYnJhbmQtY292ZXItcGFnZS5qcGdgfVxyXG4gICAgICAvPlxyXG4gICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlOnR5cGVcIiBjb250ZW50PVwiaW1hZ2UvanBnXCIgLz5cclxuICAgICAgPG1ldGEgcHJvcGVydHk9XCJmYjphcHBfaWRcIiBjb250ZW50PXtgJHtGQl9BUFBfSUR9YH0gLz5cclxuICAgIDwvSGVhZD5cclxuICApO1xyXG5cclxuICAvKip0aGlzIGZ1bmN0aW9uIGV4ZWN1dGVzIG1haW4gdG9wIGZlYXR1cmluZyBjb250ZW50cyAtIGZvciBsYXJnZSBzY3JlZW4gMTIwMHB4Ki9cclxuICBjb25zdCBzaG93SGlnaGxpZ2h0ID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgLyoqbWFpbiBsYXJnZSBzY3JlZW4gZGl2IHN0YXJ0cyBoZXJlICovXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyIHBsLTAgcHItMCBtdC00XCIgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgIDxkaXZcclxuICAgICAgICAgIGNsYXNzTmFtZT1cInJvdyBtbC0wIG1yLTBcIlxyXG4gICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiNTAwcHhcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIHsvKipsZWZ0c2lkZSBiYW5uZXIgKi99XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC1tZC02IHBsLTAgcHItMFwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjUwMHB4XCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9uZXdzLyR7bGF0ZXN0TmV3cy5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyX2NvbW1vbiBjb250YWluZXJfbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZ193cmFwcGVyXCJcclxuICAgICAgICAgICAgICAgICAgICBzcmM9e2Ake0FQSX0vbmV3cy9waG90by8ke2xhdGVzdE5ld3Muc2x1Z31gfVxyXG4gICAgICAgICAgICAgICAgICAgIGFsdD17bGF0ZXN0TmV3cy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzX3RpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgxPntsYXRlc3ROZXdzLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGhvclwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgQnkge2xhdGVzdE5ld3MucG9zdGVkQnkudXNlcm5hbWV9IHx7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgICAgICB7bW9tZW50KGxhdGVzdE5ld3MudXBkYXRlZEF0KS5mcm9tTm93KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nX3R5cGVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5ORVdTPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyoqZW5kIGxlZnRzaWRlIGJhbm5lciAqL1xyXG4gICAgICAgICAgLyoqcmlnaHQgc2lkZSBiYW5uZXIgYmxvY2sgY29udGFpbmVyKi99XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC1tZC02IHBsLTAgcHItMCBjb250YWluZXJfcmlnaHRcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCI1MDBweFwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3cgbWwtMCBtci0wXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCI1MDBweFwiIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICB7LyoqcmlnaCBzaWRlIHRvcCBiYW5uZXIqL31cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtbWQtMTIgcGwtMCBwci0wXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjI1MHB4XCIgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL25ld3MvJHtzZWNvbmRMYXRlc3ROZXdzLnNsdWd9YH0+XHJcbiAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJfY29tbW9uIGNvbnRhaW5lcl9yaWdodF90b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWdfd3JhcHBlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7QVBJfS9uZXdzL3Bob3RvLyR7c2Vjb25kTGF0ZXN0TmV3cy5zbHVnfWB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17c2Vjb25kTGF0ZXN0TmV3cy50aXRsZX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3NfdGl0bGUgbmV3c190aXRsZV9yaWdodF90b3BcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPntzZWNvbmRMYXRlc3ROZXdzLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEJ5IHtzZWNvbmRMYXRlc3ROZXdzLnBvc3RlZEJ5LnVzZXJuYW1lfSB8e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHttb21lbnQoc2Vjb25kTGF0ZXN0TmV3cy51cGRhdGVkQXQpLmZyb21Ob3coKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2dfdHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5ORVdTPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICB7LyoqZW5kIHJpZ2ggc2lkZSB0b3AgYmFubmVyKi9cclxuICAgICAgICAgICAgICAvKipyaWdoIHNpZGUgYm90dG9tIGJhbm5lciBibG9jayBjb250YWluZXIqL31cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtbWQtMTIgcGwtMCBwci0wIGNvbnRhaW5lcl9yaWdodF9ib3R0b21cIlxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBoZWlnaHQ6IFwiMjUwcHhcIiB9fVxyXG4gICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1sLTAgbXItMFwiIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgey8qKnJpZ2ggc2lkZSBib3R0b20gbGVmdCBiYW5uZXIqL31cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtNiBwbC0wIHByLTBcIiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9yZXZpZXdzLyR7bGF0ZXN0UmV2aWV3LnNsdWd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJfY29tbW9uIGNvbnRhaW5lcl9yaWdodF9ib3R0b21fbGVmdFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZ193cmFwcGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7QVBJfS9yZXZpZXdzL3Bob3RvLyR7bGF0ZXN0UmV2aWV3LnNsdWd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17bGF0ZXN0UmV2aWV3LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzX3RpdGxlIG5ld3NfdGl0bGVfcmlnaHRfYm90dG9tX2xlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMT57bGF0ZXN0UmV2aWV3LnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRob3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBCeSB7bGF0ZXN0UmV2aWV3LnBvc3RlZEJ5LnVzZXJuYW1lfSB8e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7bW9tZW50KGxhdGVzdFJldmlldy51cGRhdGVkQXQpLmZyb21Ob3coKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2dfdHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+UkVWSUVXPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICB7LyoqZW5kIHJpZ2ggc2lkZSBib3R0b20gbGVmdCBiYW5uZXIqL1xyXG4gICAgICAgICAgICAgICAgICAvKipyaWdoIHNpZGUgYm90dG9tIHJpZ2h0IGJhbm5lciovfVxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC02IHBsLTAgcHItMFwiIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Jldmlld3MvJHtzZWNvbmRMYXRlc3RSZXZpZXcuc2x1Z31gfT5cclxuICAgICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lcl9jb21tb24gY29udGFpbmVyX3JpZ2h0X2JvdHRvbV9yaWdodFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZ193cmFwcGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7QVBJfS9yZXZpZXdzL3Bob3RvLyR7c2Vjb25kTGF0ZXN0UmV2aWV3LnNsdWd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFsdD17c2Vjb25kTGF0ZXN0UmV2aWV3LnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzX3RpdGxlIG5ld3NfdGl0bGVfcmlnaHRfYm90dG9tX3JpZ2h0XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aDE+e3NlY29uZExhdGVzdFJldmlldy50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aG9yXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQnkge3NlY29uZExhdGVzdFJldmlldy5wb3N0ZWRCeS51c2VybmFtZX0gfHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge21vbWVudChzZWNvbmRMYXRlc3RSZXZpZXcudXBkYXRlZEF0KS5mcm9tTm93KCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nX3R5cGVcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuPlJFVklFVzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgey8qKmVuZCByaWdoIHNpZGUgYm90dG9tIHJpZ2h0IGJhbm5lciovfVxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgey8qKmVuZCByaWdoIHNpZGUgYm90dG9tIGJhbm5lciBibG9jayBjb250YWluZXIqL31cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIHsvKiplbmQgcmlnaHQgc2lkZSBiYW5uZXIgYmxvY2sgY29udGFpbmVyKi99XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAvKiptYWluIGxhcmdlIHNjcmVlbiBkaXYgZW5kcyBoZXJlICovXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIC8qKnRoaXMgZnVuY3Rpb24gZXhlY3V0ZXMgbWFpbiB0b3AgZmVhdHVyaW5nIGNvbnRlbnRzIC0gZm9yIG1lZGl1bSBzY3JlZW4gMTAwMXB4Ki9cclxuICBjb25zdCBzaG93SGlnaGxpZ2h0TWVkaXVtU2NyZWVuID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIChcclxuICAgICAgLyoqbWFpbiBtZWRpdW0gc2NyZWVuIGRpdiBzdGFydHMgaGVyZSAqL1xyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMiBwbC0wIHByLTAgbXQtNFwiIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJyb3cgbWwtMCBtci0wXCJcclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjUwMHB4XCIgfX1cclxuICAgICAgICA+XHJcbiAgICAgICAgICB7LyoqbGVmdHNpZGUgYmFubmVyICovfVxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtbWQtNiBwbC0wIHByLTBcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCI1MDBweFwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvbmV3cy8ke2xhdGVzdE5ld3Muc2x1Z31gfT5cclxuICAgICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lcl9jb21tb24gY29udGFpbmVyX2xlZnRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWdfd3JhcHBlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtBUEl9L25ld3MvcGhvdG8vJHtsYXRlc3ROZXdzLnNsdWd9YH1cclxuICAgICAgICAgICAgICAgICAgICBhbHQ9e2xhdGVzdE5ld3MudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3c190aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxoMT57bGF0ZXN0TmV3cy50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRob3JcIj5cclxuICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICAgIEJ5IHtsYXRlc3ROZXdzLnBvc3RlZEJ5LnVzZXJuYW1lfSB8e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAge21vbWVudChsYXRlc3ROZXdzLnVwZGF0ZWRBdCkuZnJvbU5vdygpfVxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZ190eXBlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4+TkVXUzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgey8qKmxlZnRzaWRlIGJhbm5lciBlbmRzIGhlcmUqL31cclxuICAgICAgICAgIHsvKipyaWdodHNpZGUgYmFubmVyIGJsb2NrIGNvbnRhaW5lciovfVxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtbWQtNiBwbC0wIHByLTBcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCI1MDBweFwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3cgbWwtMCBtci0wXCJcclxuICAgICAgICAgICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCI1MDBweFwiIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtbWQtMTIgcGwtMCBwci0wIGNvbnRhaW5lcl9yaWdodF9tZWRpdW1fc2NyZWVuXCJcclxuICAgICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjQyMHB4XCIgfX1cclxuICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICB7LyoqcmlnaHRzaWRlIGJhbm5lciAgdG9wIGRpdiovfVxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJfY29tbW9uIGNvbnRhaW5lcl9yaWdodF90b3BfbWVkaXVtX3NjcmVlblwiPlxyXG4gICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL25ld3MvJHtzZWNvbmRMYXRlc3ROZXdzLnNsdWd9YH0+XHJcbiAgICAgICAgICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZ193cmFwcGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3JjPXtgJHtBUEl9L25ld3MvcGhvdG8vJHtzZWNvbmRMYXRlc3ROZXdzLnNsdWd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtzZWNvbmRMYXRlc3ROZXdzLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwibmV3c190aXRsZSBuZXdzX3RpdGxlX3JpZ2h0X3RvcF9tZWRpdW1fc2NyZWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aDE+e3NlY29uZExhdGVzdE5ld3MudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRob3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIEJ5IHtzZWNvbmRMYXRlc3ROZXdzLnBvc3RlZEJ5LnVzZXJuYW1lfSB8e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHttb21lbnQoc2Vjb25kTGF0ZXN0TmV3cy51cGRhdGVkQXQpLmZyb21Ob3coKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2dfdHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5ORVdTPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIHsvKipyaWdodHNpZGUgYmFubmVyICB0b3AgZGl2IGVuZHMgaGVyZSovXHJcbiAgICAgICAgICAgICAgICAvKipyaWdodHNpZGUgYmFubmVyICBib3R0b20gZGl2IHN0c3J0cyBoZXJlKi99XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lcl9jb21tb24gY29udGFpbmVyX3JpZ2h0X2JvdHRvbV9tZWRpdW1fc2NyZWVuXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcmV2aWV3cy8ke2xhdGVzdFJldmlldy5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWdfd3JhcHBlclwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNyYz17YCR7QVBJfS9yZXZpZXdzL3Bob3RvLyR7bGF0ZXN0UmV2aWV3LnNsdWd9YH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgYWx0PXtsYXRlc3RSZXZpZXcudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzX3RpdGxlIG5ld3NfdGl0bGVfcmlnaHRfYm90dG9tX21lZGl1bV9zY3JlZW5cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGgxPntsYXRlc3RSZXZpZXcudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRob3JcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgQnkge2xhdGVzdFJldmlldy5wb3N0ZWRCeS51c2VybmFtZX0gfHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICB7bW9tZW50KGxhdGVzdFJldmlldy51cGRhdGVkQXQpLmZyb21Ob3coKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2dfdHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5SRVZJRVc8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgey8qKnJpZ2h0c2lkZSBiYW5uZXIgIGJvdHRvbSBkaXYgZW5kcyBoZXJlKi99XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICB7LyoqcmlnaHRzaWRlIGJhbm5lciBibG9jayBjb250YWluZXIqL31cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICAgIC8qKm1haW4gbWVkaXVtIHNjcmVlbiBkaXYgZW5kcyBoZXJlICovXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIC8qKnRoaXMgZnVuY3Rpb24gZXhlY3V0ZXMgbWFpbiB0b3AgZmVhdHVyaW5nIGNvbnRlbnRzIC0gZm9yIHNtYWxsIHNjcmVlbiA3NjdweCovXHJcbiAgY29uc3Qgc21hbGxTY3JlZW5IaWdobGlnaHQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICAvKiptYWluIHNtYWxsIHNjcmVlbiBkaXYgc3RhcnRzIGhlcmUgKi9cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTIgbXQtNCBzbWFsbF9zY3JlZW5fYmxvY2tcIj5cclxuICAgICAgICB7Lyoqc21hbGwgc2NyZWVuIGNhcmQgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbF9zY3JlZW5fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtgL3Jldmlld3MvJHtsYXRlc3RSZXZpZXcuc2x1Z31gfT5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzbWFsbF9zY3JlZW5faW1nX3dyYXBwZXJcIlxyXG4gICAgICAgICAgICAgICAgc3JjPXtgJHtBUEl9L3Jldmlld3MvcGhvdG8vJHtsYXRlc3RSZXZpZXcuc2x1Z31gfVxyXG4gICAgICAgICAgICAgICAgYWx0PXtsYXRlc3RSZXZpZXcudGl0bGV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3NfdGl0bGUgbmV3c190aXRsZV9zbWFsbF9zY3JlZW5cIj5cclxuICAgICAgICAgICAgICAgIDxoMT57bGF0ZXN0UmV2aWV3LnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRob3JcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICBCeSB7bGF0ZXN0UmV2aWV3LnBvc3RlZEJ5LnVzZXJuYW1lfSB8e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICB7bW9tZW50KGxhdGVzdFJldmlldy51cGRhdGVkQXQpLmZyb21Ob3coKX1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2dfdHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+UkVWSUVXPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qKnNtYWxsIHNjcmVlbiBjYXJkICovXHJcbiAgICAgICAgLyoqZW5kcyBoZXJlICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGxfc2NyZWVuX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj17YC9uZXdzLyR7bGF0ZXN0TmV3cy5zbHVnfWB9PlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNtYWxsX3NjcmVlbl9pbWdfd3JhcHBlclwiXHJcbiAgICAgICAgICAgICAgICBzcmM9e2Ake0FQSX0vbmV3cy9waG90by8ke2xhdGVzdE5ld3Muc2x1Z31gfVxyXG4gICAgICAgICAgICAgICAgYWx0PXtsYXRlc3ROZXdzLnRpdGxlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzX3RpdGxlIG5ld3NfdGl0bGVfc21hbGxfc2NyZWVuXCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+e2xhdGVzdE5ld3MudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGhvclwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgIEJ5IHtsYXRlc3ROZXdzLnBvc3RlZEJ5LnVzZXJuYW1lfSB8e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICB7bW9tZW50KGxhdGVzdE5ld3MudXBkYXRlZEF0KS5mcm9tTm93KCl9XHJcbiAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJibG9nX3R5cGVcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPk5FV1M8L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICB7Lyoqc21hbGwgc2NyZWVuIGNhcmQgKi9cclxuICAgICAgICAvKiplbmRzIGhlcmUgKi99XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzbWFsbF9zY3JlZW5fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8TGluayBocmVmPXtgL3Jldmlld3MvJHtzZWNvbmRMYXRlc3RSZXZpZXcuc2x1Z31gfT5cclxuICAgICAgICAgICAgPGFcclxuICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgdGV4dERlY29yYXRpb246IFwibm9uZVwiLFxyXG4gICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm92ZXJsYXlcIj48L2Rpdj5cclxuICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzbWFsbF9zY3JlZW5faW1nX3dyYXBwZXJcIlxyXG4gICAgICAgICAgICAgICAgc3JjPXtgJHtBUEl9L3Jldmlld3MvcGhvdG8vJHtzZWNvbmRMYXRlc3RSZXZpZXcuc2x1Z31gfVxyXG4gICAgICAgICAgICAgICAgYWx0PXtzZWNvbmRMYXRlc3RSZXZpZXcudGl0bGV9XHJcbiAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIm5ld3NfdGl0bGUgbmV3c190aXRsZV9zbWFsbF9zY3JlZW5cIj5cclxuICAgICAgICAgICAgICAgIDxoMT57c2Vjb25kTGF0ZXN0UmV2aWV3LnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRob3JcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPlxyXG4gICAgICAgICAgICAgICAgICBCeSB7c2Vjb25kTGF0ZXN0UmV2aWV3LnBvc3RlZEJ5LnVzZXJuYW1lfSB8e1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICB7bW9tZW50KHNlY29uZExhdGVzdFJldmlldy51cGRhdGVkQXQpLmZyb21Ob3coKX1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2dfdHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+UkVWSUVXPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgey8qKnNtYWxsIHNjcmVlbiBjYXJkICovXHJcbiAgICAgICAgLyoqZW5kcyBoZXJlICovfVxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGxfc2NyZWVuX2NvbnRhaW5lclwiPlxyXG4gICAgICAgICAgPExpbmsgaHJlZj17YC9uZXdzLyR7c2Vjb25kTGF0ZXN0TmV3cy5zbHVnfWB9PlxyXG4gICAgICAgICAgICA8YVxyXG4gICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsXHJcbiAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwib3ZlcmxheVwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInNtYWxsX3NjcmVlbl9pbWdfd3JhcHBlclwiXHJcbiAgICAgICAgICAgICAgICBzcmM9e2Ake0FQSX0vbmV3cy9waG90by8ke3NlY29uZExhdGVzdE5ld3Muc2x1Z31gfVxyXG4gICAgICAgICAgICAgICAgYWx0PXtzZWNvbmRMYXRlc3ROZXdzLnRpdGxlfVxyXG4gICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzX3RpdGxlIG5ld3NfdGl0bGVfc21hbGxfc2NyZWVuXCI+XHJcbiAgICAgICAgICAgICAgICA8aDE+e3NlY29uZExhdGVzdE5ld3MudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGhvclwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgQnkge3NlY29uZExhdGVzdE5ld3MucG9zdGVkQnkudXNlcm5hbWV9IHx7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICAgIHttb21lbnQoc2Vjb25kTGF0ZXN0TmV3cy51cGRhdGVkQXQpLmZyb21Ob3coKX1cclxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImJsb2dfdHlwZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+TkVXUzwvc3Bhbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIHsvKiplbmRzIGhlcmUgKi99XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICAvKiptYWluIHNtYWxsIHNjcmVlbiBkaXYgZW5kcyBoZXJlICovXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IG5ld3NMaW1pdCA9IDEwO1xyXG4gIGNvbnN0IG5ld3NTa2lwID0gMzI7XHJcbiAgY29uc3QgW2xpbWl0LCBzZXRMaW1pdF0gPSB1c2VTdGF0ZShuZXdzTGltaXQpO1xyXG4gIGNvbnN0IFtza2lwLCBzZXRTa2lwXSA9IHVzZVN0YXRlKG5ld3NTa2lwKTtcclxuICBjb25zdCBbbmV3c1NpemUsIHNldE5ld3NTaXplXSA9IHVzZVN0YXRlKG5ld3NMaW1pdEZpbmFsU2VjdGlvbi5sZW5ndGgpO1xyXG4gIGNvbnN0IFtsb2FkZWROZXdzLCBzZXRMb2FkZWROZXdzXSA9IHVzZVN0YXRlKFtdKTtcclxuXHJcbiAgY29uc3QgbG9hZE1vcmUgPSAoKSA9PiB7XHJcbiAgICBsZXQgdG9Ta2lwID0gc2tpcCArIGxpbWl0O1xyXG4gICAgbmV3c0xpc3RQdWJsaWNMaW1pdEZpbmFsU2VjdGlvbihza2lwLCBsaW1pdCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEuZXJyb3IpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHNldExvYWRlZE5ld3MoWy4uLmxvYWRlZE5ld3MsIC4uLmRhdGFdKTtcclxuICAgICAgICBzZXROZXdzU2l6ZShkYXRhLmxlbmd0aCk7XHJcbiAgICAgICAgc2V0U2tpcCh0b1NraXApO1xyXG4gICAgICB9XHJcbiAgICB9KTtcclxuICB9O1xyXG5cclxuICBjb25zdCBsb2FkTW9yZUJ1dHRvbiA9ICgpID0+IHtcclxuICAgIHJldHVybiAoXHJcbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCIgc3R5bGU9e3sgdGV4dEFsaWduOiBcImNlbnRlclwiLCB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAge25ld3NTaXplID4gMCAmJiBuZXdzU2l6ZSA+PSBsaW1pdCAmJiAoXHJcbiAgICAgICAgICA8ZGl2IG9uQ2xpY2s9e2xvYWRNb3JlfSBjbGFzc05hbWU9XCJsb2FkX21vcmVfYnV0dG9uXCI+XHJcbiAgICAgICAgICAgIExvYWQgbW9yZVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKX1cclxuICAgICAgPC9kaXY+XHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNob3dTaWRlQmFyUmV2aWV3cyA9ICgpID0+IHtcclxuICAgIHJldHVybiByZXZpZXdMaXN0TGF0ZXN0Lm1hcCgoYmxvZywgaSkgPT4gKFxyXG4gICAgICA8ZGl2IGtleT17aX0+XHJcbiAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cInJldmlld19jb250YWluZXJfbWlkZGxlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlX3Jldmlld19taWRkbGVcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9yZXZpZXdzLyR7YmxvZy5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgIDxhIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWcgaW1nLWZsdWlkXCJcclxuICAgICAgICAgICAgICAgICAgc3JjPXtgJHtBUEl9L3Jldmlld3MvcGhvdG8vJHtibG9nLnNsdWd9YH1cclxuICAgICAgICAgICAgICAgICAgYWx0PXtibG9nLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjb250ZW50X3Jldmlld19taWRkbGVcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfZGl2X3Jldmlld19taWRkbGVcIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Jldmlld3MvJHtibG9nLnNsdWd9YH0+XHJcbiAgICAgICAgICAgICAgICA8YSBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsIHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGgxPntibG9nLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aG9yX2Rpdl9yZXZpZXdfbWlkZGxlXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICB7bW9tZW50KGJsb2cudXBkYXRlZEF0KS5mcm9tTm93KCl9IHwgYnkge2Jsb2cucG9zdGVkQnkudXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNob3dTaWRlQmFyTW9iaWxlcyA9ICgpID0+IHtcclxuICAgIHJldHVybiBtb2JpbGVMaXN0TGF0ZXN0Lm1hcCgobSwgaSkgPT4gKFxyXG4gICAgICA8ZGl2IGtleT17aX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzaW5nbGVfX2NhcmRfX3Bob25lXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2ltYWdlX19jb250YWluZXJfX3Bob25lXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcGhvbmVzL2JyYW5kLyR7bS5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPGltZyBzcmM9e2Ake0FQSX0vbW9iaWxlL3Bob3RvLyR7bS5zbHVnfWB9IGFsdD17YCR7bS50aXRsZX1gfSAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNhcmRfX2NvbnRlbnRfX3Bob25lXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcGhvbmVzL2JyYW5kLyR7bS5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgPGgxPnttLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICApKTtcclxuICB9O1xyXG5cclxuICBjb25zdCBzaG93UmV2aWV3QmxvY2sgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gKFxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1tZC0xMiBwbC0wIHByLTAgbXQtMlwiIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICA8ZGl2XHJcbiAgICAgICAgICBjbGFzc05hbWU9XCJyb3cgbWwtMCBtci0wXCJcclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcmV2aWV3cy8ke2VpZ2h0TGF0ZXN0UmV2aWV3LnNsdWd9YH0+XHJcbiAgICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgIHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIixcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250YWluZXJfcmV2aWV3X21pZGRsZVwiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJvdmVybGF5XCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZ193cmFwcGVyXCJcclxuICAgICAgICAgICAgICAgICAgc3JjPXtgJHtBUEl9L3Jldmlld3MvcGhvdG8vJHtlaWdodExhdGVzdFJldmlldy5zbHVnfWB9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD17ZWlnaHRMYXRlc3RSZXZpZXcudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZV9yZXZpZXdfbWlkZGxlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxoMT57ZWlnaHRMYXRlc3RSZXZpZXcudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRob3JcIj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAge1wiIFwifVxyXG4gICAgICAgICAgICAgICAgICAgIEJ5IHtlaWdodExhdGVzdFJldmlldy5wb3N0ZWRCeS51c2VybmFtZX0gfHtcIiBcIn1cclxuICAgICAgICAgICAgICAgICAgICB7bW9tZW50KGVpZ2h0TGF0ZXN0UmV2aWV3LnVwZGF0ZWRBdCkuZnJvbU5vdygpfVxyXG4gICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYmxvZ190eXBlXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuPlJFVklFVzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdlxyXG4gICAgICAgICAgY2xhc3NOYW1lPVwicm93IG1sLTAgbXItMCBtdC0zXCJcclxuICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgaGVpZ2h0OiBcIjEwMCVcIiB9fVxyXG4gICAgICAgID5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTZcIj57c2hvd1Jldmlld3NJbnNpZGVSZXZpZXdCbG9ja0xlZnQoKX08L2Rpdj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTYgZGlzcGxheV9ub25lX3Jldmlld19taWRkbGVfYm90dG9tXCI+XHJcbiAgICAgICAgICAgIHtzaG93UmV2aWV3c0luc2lkZVJldmlld0Jsb2NrUmlnaHQoKX1cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2hvd1Jldmlld3NJbnNpZGVSZXZpZXdCbG9ja0xlZnQgPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gbGltaXRlZFJldmlld3NTZWN0aW9uT25lLm1hcCgoYmxvZywgaSkgPT4gKFxyXG4gICAgICA8ZGl2IGtleT17aX0+XHJcbiAgICAgICAgPGRpdiBrZXk9e2l9IGNsYXNzTmFtZT1cInJldmlld19jb250YWluZXJfbWlkZGxlXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlX3Jldmlld19taWRkbGVcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9yZXZpZXdzLyR7YmxvZy5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgIDxhIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWcgaW1nLWZsdWlkXCJcclxuICAgICAgICAgICAgICAgICAgc3JjPXtgJHtBUEl9L3Jldmlld3MvcGhvdG8vJHtibG9nLnNsdWd9YH1cclxuICAgICAgICAgICAgICAgICAgYWx0PXtibG9nLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjb250ZW50X3Jldmlld19taWRkbGVcIlxyXG4gICAgICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImZsZXhcIiwgZmxleERpcmVjdGlvbjogXCJjb2x1bW5cIiB9fVxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRlbnRfZGl2X3Jldmlld19taWRkbGVcIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Jldmlld3MvJHtibG9nLnNsdWd9YH0+XHJcbiAgICAgICAgICAgICAgICA8YSBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsIHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGgxPntibG9nLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aG9yX2Rpdl9yZXZpZXdfbWlkZGxlXCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICB7bW9tZW50KGJsb2cudXBkYXRlZEF0KS5mcm9tTm93KCl9IHwgYnkge2Jsb2cucG9zdGVkQnkudXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNob3dSZXZpZXdzSW5zaWRlUmV2aWV3QmxvY2tSaWdodCA9ICgpID0+IHtcclxuICAgIHJldHVybiBsaW1pdGVkUmV2aWV3c1NlY3Rpb25Ud28ubWFwKChibG9nLCBpKSA9PiAoXHJcbiAgICAgIDxkaXYga2V5PXtpfT5cclxuICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwicmV2aWV3X2NvbnRhaW5lcl9taWRkbGVcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VfcmV2aWV3X21pZGRsZVwiPlxyXG4gICAgICAgICAgICA8TGluayBocmVmPXtgL3Jldmlld3MvJHtibG9nLnNsdWd9YH0+XHJcbiAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiLCB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICA8aW1nXHJcbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImltZyBpbWctZmx1aWRcIlxyXG4gICAgICAgICAgICAgICAgICBzcmM9e2Ake0FQSX0vcmV2aWV3cy9waG90by8ke2Jsb2cuc2x1Z31gfVxyXG4gICAgICAgICAgICAgICAgICBhbHQ9e2Jsb2cudGl0bGV9XHJcbiAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbnRlbnRfcmV2aWV3X21pZGRsZVwiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9kaXZfcmV2aWV3X21pZGRsZVwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcmV2aWV3cy8ke2Jsb2cuc2x1Z31gfT5cclxuICAgICAgICAgICAgICAgIDxhIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICA8aDE+e2Jsb2cudGl0bGV9PC9oMT5cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRob3JfZGl2X3Jldmlld19taWRkbGVcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgIHttb21lbnQoYmxvZy51cGRhdGVkQXQpLmZyb21Ob3coKX0gfCBieSB7YmxvZy5wb3N0ZWRCeS51c2VybmFtZX1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2hvd05ld3NGaXJzdFNlY3Rpb24gPSAoKSA9PiB7XHJcbiAgICByZXR1cm4gbmV3c0xpbWl0Rmlyc3RTZWN0aW9uLm1hcCgoYmxvZywgaSkgPT4gKFxyXG4gICAgICA8ZGl2IGtleT17aX0+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJuZXdzX19jb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VfX25ld3NcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9uZXdzLyR7YmxvZy5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgIDxhIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWcgaW1nLWZsdWlkXCJcclxuICAgICAgICAgICAgICAgICAgc3JjPXtgJHtBUEl9L25ld3MvcGhvdG8vJHtibG9nLnNsdWd9YH1cclxuICAgICAgICAgICAgICAgICAgYWx0PXtibG9nLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjb250ZW50X19uZXdzXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19kaXZcIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL25ld3MvJHtibG9nLnNsdWd9YH0+XHJcbiAgICAgICAgICAgICAgICA8YSBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsIHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGgxPntibG9nLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleGNlcnB0X2RpdlwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvbmV3cy8ke2Jsb2cuc2x1Z31gfT5cclxuICAgICAgICAgICAgICAgIDxhIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICB7cmVuZGVySFRNTChibG9nLmV4Y2VycHQpfVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aG9yX19kaXZcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIHttb21lbnQoYmxvZy51cGRhdGVkQXQpLmZyb21Ob3coKX0gfCBieSB7YmxvZy5wb3N0ZWRCeS51c2VybmFtZX1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2hvd05ld3NTZWNvbmRTZWN0aW9uID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIG5ld3NMaW1pdFNlY29uZFNlY3Rpb24ubWFwKChibG9nLCBpKSA9PiAoXHJcbiAgICAgIDxkaXYga2V5PXtpfT5cclxuICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwibmV3c19fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlX19uZXdzXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvbmV3cy8ke2Jsb2cuc2x1Z31gfT5cclxuICAgICAgICAgICAgICA8YSBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsIHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nIGltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17YCR7QVBJfS9uZXdzL3Bob3RvLyR7YmxvZy5zbHVnfWB9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD17YmxvZy50aXRsZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGVudF9fbmV3c1wiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fZGl2XCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9uZXdzLyR7YmxvZy5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiLCB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxoMT57YmxvZy50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhjZXJwdF9kaXZcIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL25ld3MvJHtibG9nLnNsdWd9YH0+XHJcbiAgICAgICAgICAgICAgICA8YSBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsIHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAge3JlbmRlckhUTUwoYmxvZy5leGNlcnB0KX1cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGhvcl9fZGl2XCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICB7bW9tZW50KGJsb2cudXBkYXRlZEF0KS5mcm9tTm93KCl9IHwgYnkge2Jsb2cucG9zdGVkQnkudXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICkpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IHNob3dOZXdzRmluYWxTZWN0aW9uID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIG5ld3NMaW1pdEZpbmFsU2VjdGlvbi5tYXAoKGJsb2csIGkpID0+IChcclxuICAgICAgPGRpdiBrZXk9e2l9PlxyXG4gICAgICAgIDxkaXYga2V5PXtpfSBjbGFzc05hbWU9XCJuZXdzX19jb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiaW1hZ2VfX25ld3NcIj5cclxuICAgICAgICAgICAgPExpbmsgaHJlZj17YC9uZXdzLyR7YmxvZy5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgIDxhIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgICAgICAgPGltZ1xyXG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJpbWcgaW1nLWZsdWlkXCJcclxuICAgICAgICAgICAgICAgICAgc3JjPXtgJHtBUEl9L25ld3MvcGhvdG8vJHtibG9nLnNsdWd9YH1cclxuICAgICAgICAgICAgICAgICAgYWx0PXtibG9nLnRpdGxlfVxyXG4gICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJjb250ZW50X19uZXdzXCJcclxuICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJmbGV4XCIsIGZsZXhEaXJlY3Rpb246IFwiY29sdW1uXCIgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb250ZW50X19kaXZcIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL25ld3MvJHtibG9nLnNsdWd9YH0+XHJcbiAgICAgICAgICAgICAgICA8YSBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsIHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgPGgxPntibG9nLnRpdGxlfTwvaDE+XHJcbiAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJleGNlcnB0X2RpdlwiPlxyXG4gICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvbmV3cy8ke2Jsb2cuc2x1Z31gfT5cclxuICAgICAgICAgICAgICAgIDxhIHN0eWxlPXt7IHRleHREZWNvcmF0aW9uOiBcIm5vbmVcIiwgd2lkdGg6IFwiMTAwJVwiIH19PlxyXG4gICAgICAgICAgICAgICAgICB7cmVuZGVySFRNTChibG9nLmV4Y2VycHQpfVxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aG9yX19kaXZcIj5cclxuICAgICAgICAgICAgICA8c3Bhbj5cclxuICAgICAgICAgICAgICAgIHtcIiBcIn1cclxuICAgICAgICAgICAgICAgIHttb21lbnQoYmxvZy51cGRhdGVkQXQpLmZyb21Ob3coKX0gfCBieSB7YmxvZy5wb3N0ZWRCeS51c2VybmFtZX1cclxuICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgKSk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3Qgc2hvd05ld3NGaW5hbFNlY3Rpb25Mb2FkZWROZXdzID0gKCkgPT4ge1xyXG4gICAgcmV0dXJuIGxvYWRlZE5ld3MubWFwKChibG9nLCBpKSA9PiAoXHJcbiAgICAgIDxkaXYga2V5PXtpfT5cclxuICAgICAgICA8ZGl2IGtleT17aX0gY2xhc3NOYW1lPVwibmV3c19fY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImltYWdlX19uZXdzXCI+XHJcbiAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvbmV3cy8ke2Jsb2cuc2x1Z31gfT5cclxuICAgICAgICAgICAgICA8YSBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsIHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgICAgICAgIDxpbWdcclxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaW1nIGltZy1mbHVpZFwiXHJcbiAgICAgICAgICAgICAgICAgIHNyYz17YCR7QVBJfS9uZXdzL3Bob3RvLyR7YmxvZy5zbHVnfWB9XHJcbiAgICAgICAgICAgICAgICAgIGFsdD17YmxvZy50aXRsZX1cclxuICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29udGVudF9fbmV3c1wiXHJcbiAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiZmxleFwiLCBmbGV4RGlyZWN0aW9uOiBcImNvbHVtblwiIH19XHJcbiAgICAgICAgICA+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGVudF9fZGl2XCI+XHJcbiAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9uZXdzLyR7YmxvZy5zbHVnfWB9PlxyXG4gICAgICAgICAgICAgICAgPGEgc3R5bGU9e3sgdGV4dERlY29yYXRpb246IFwibm9uZVwiLCB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgIDxoMT57YmxvZy50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgIDwvTGluaz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZXhjZXJwdF9kaXZcIj5cclxuICAgICAgICAgICAgICA8TGluayBocmVmPXtgL25ld3MvJHtibG9nLnNsdWd9YH0+XHJcbiAgICAgICAgICAgICAgICA8YSBzdHlsZT17eyB0ZXh0RGVjb3JhdGlvbjogXCJub25lXCIsIHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAge3JlbmRlckhUTUwoYmxvZy5leGNlcnB0KX1cclxuICAgICAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGhvcl9fZGl2XCI+XHJcbiAgICAgICAgICAgICAgPHNwYW4+XHJcbiAgICAgICAgICAgICAgICB7XCIgXCJ9XHJcbiAgICAgICAgICAgICAgICB7bW9tZW50KGJsb2cudXBkYXRlZEF0KS5mcm9tTm93KCl9IHwgYnkge2Jsb2cucG9zdGVkQnkudXNlcm5hbWV9XHJcbiAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L2Rpdj5cclxuICAgICkpO1xyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8TGF5b3V0PlxyXG4gICAgICA8ZGl2PlxyXG4gICAgICAgIDxkaXY+e2hlYWQoKX08L2Rpdj5cclxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImxhcmdlX3NjcmVlbl9mZWF0dXJpbmdcIj5cclxuICAgICAgICAgIHtsYXRlc3ROZXdzICYmIGxhdGVzdFJldmlldyAmJiBzZWNvbmRMYXRlc3RSZXZpZXcgJiYgc2Vjb25kTGF0ZXN0TmV3c1xyXG4gICAgICAgICAgICA/IHNob3dIaWdobGlnaHQoKVxyXG4gICAgICAgICAgICA6IFwiXCJ9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJtZWRpdW1fc2NyZWVuX2ZlYXR1cmluZ1wiPlxyXG4gICAgICAgICAge2xhdGVzdE5ld3MgJiYgbGF0ZXN0UmV2aWV3ICYmIHNlY29uZExhdGVzdE5ld3NcclxuICAgICAgICAgICAgPyBzaG93SGlnaGxpZ2h0TWVkaXVtU2NyZWVuKClcclxuICAgICAgICAgICAgOiBcIlwifVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic21hbGxfc2NyZWVuX2ZlYXR1cmluZ1wiPlxyXG4gICAgICAgICAge2xhdGVzdE5ld3MgJiYgbGF0ZXN0UmV2aWV3ICYmIHNlY29uZExhdGVzdFJldmlldyAmJiBzZWNvbmRMYXRlc3ROZXdzXHJcbiAgICAgICAgICAgID8gc21hbGxTY3JlZW5IaWdobGlnaHQoKVxyXG4gICAgICAgICAgICA6IFwiXCJ9XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyIG10LTQgbWItNCBwbC0wIHByLTBcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1sLTAgbXItMFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy04XCI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3dcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgIGJveFNoYWRvdzogXCIwcHggMHB4IDFweCByZ2JhKDAsMCwwLDAuNSlcIixcclxuICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW46IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIwMiwgMjgsIDI4LCAwLjk0NSlcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHBhZGRpbmc6IFwiMTBweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAge3Nob3dOZXdzRmlyc3RTZWN0aW9uKCl9XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8TWRSYXRlUmV2aWV3IHNpemU9XCIxcmVtXCIgY29sb3I9XCIjODE4MDc4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBwYWRkaW5nVG9wOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxoclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luVG9wOiBcIjZweFwiIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoclRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jb250ZW50PVwicmV2aWV3c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtzaG93UmV2aWV3QmxvY2soKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjhweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxGYU5ld3NwYXBlciBzaXplPVwiMXJlbVwiIGNvbG9yPVwiIzgxODA3OFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiwgcGFkZGluZ1RvcDogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8aHJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCI2cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiaHJUZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY29udGVudD1cIm1vcmUgbmV3c1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIHtzaG93TmV3c1NlY29uZFNlY3Rpb24oKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZGlzcGxheV9ub25lX21vcmVfbmV3c19tYWluX2Jsb2NrXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93TmV3c0ZpbmFsU2VjdGlvbigpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB7bG9hZGVkTmV3cyA/IChcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93TmV3c0ZpbmFsU2VjdGlvbkxvYWRlZE5ld3MoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXY+TG9hZGluZy4uLjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICApfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPntsb2FkTW9yZUJ1dHRvbigpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbGctNCBzaWRlX19iYXJfX3NpbmdsZV9fYnJhbmRfX21haW5cIj5cclxuICAgICAgICAgICAgICB7bW9iaWxlTGlzdExhdGVzdCA/IChcclxuICAgICAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJyb3cgbXItMCBzaWRlX19iYXJfX3NpbmdsZV9fYnJhbmRcIlxyXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwiI2ZmZlwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgYm94U2hhZG93OiBcIjBweCAwcHggMXB4IHJnYmEoMCwwLDAsMC41KVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEwMCVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiBcIjIwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPEZpU21hcnRwaG9uZSBzaXplPVwiMXJlbVwiIGNvbG9yPVwiIzgxODA3OFwiIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiLCBwYWRkaW5nVG9wOiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8aHJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Ub3A6IFwiNnB4XCIgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJoclRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEtY29udGVudD1cImxhdGVzdCBwaG9uZXNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdSaWdodDogXCIxMnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdMZWZ0OiBcIjEycHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjYXJkc19fcGhvbmUgYm94X19zaXppbmdfX3Bob25lIHNpZGVfX2Jhcl9fcGhvbmVzXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93U2lkZUJhck1vYmlsZXMoKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogXCIzcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIwMiwgMjgsIDI4LCAwLjk0NSlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgIC8+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246IFwicm93XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbG9hdDogXCJyaWdodFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luQm90dG9tOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcGhvbmVzYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoMlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiZm9udC13ZWlnaHQtYm9sZGVyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxpbmVIZWlnaHQ6IFwiMTMwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0VHJhbnNmb3JtOiBcImNhcGl0YWxpemVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9udFNpemU6IFwiMTZweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250V2VpZ2h0OiBcImJvbGRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IFwiIzM4MzgzOFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nOiBcIjEwcHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcGFkZGluZ1JpZ2h0OiAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Cb3R0b206IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZpZXcgYWxsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9oMj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZ1RvcDogXCI4cHhcIiwgbWFyZ2luTGVmdDogMCB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxMaW5rIGhyZWY9e2AvcGhvbmVzYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZE5hdmlnYXRlTmV4dCBzaXplPVwiMS41cmVtXCIgY29sb3I9XCIjMDAwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgKX1cclxuXHJcbiAgICAgICAgICAgICAge3Jldmlld0xpc3RQdWJsaWMgPyAoXHJcbiAgICAgICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2XHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm93IG1yLTAgbXQtMiBzaWRlX19iYXJfX3NpbmdsZV9fYnJhbmQgZGlzcGxheV9ub25lX3NpZGVfYmFyX3Jldmlld1wiXHJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgIGJhY2tncm91bmRDb2xvcjogXCIjZmZmXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6IFwiMHB4IDBweCAxcHggcmdiYSgwLDAsMCwwLjUpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImNvbC1tZC0xMlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgZmxleERpcmVjdGlvbjogXCJyb3dcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IFwiMjBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblJpZ2h0OiBcIjVweFwiIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8TWRSYXRlUmV2aWV3IHNpemU9XCIxcmVtXCIgY29sb3I9XCIjODE4MDc4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIHBhZGRpbmdUb3A6IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxoclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCI2cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhyVGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jb250ZW50PVwibGF0ZXN0IHJldmlld3NcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmdUb3A6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IFwiMTJweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nTGVmdDogXCIxMnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICB9fVxyXG4gICAgICAgICAgICAgICAgICAgID5cclxuICAgICAgICAgICAgICAgICAgICAgIHtzaG93U2lkZUJhclJldmlld3MoKX1cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiM3B4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IFwiMTAwJVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbjogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyMDIsIDI4LCAyOCwgMC45NDUpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAvPlxyXG4gICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZmxvYXQ6IFwicmlnaHRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luUmlnaHQ6IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8TGluayBocmVmPXtgL3Jldmlld3NgfT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGE+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPGgyXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmb250LXdlaWdodC1ib2xkZXJcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGluZUhlaWdodDogXCIxMzAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHRUcmFuc2Zvcm06IFwiY2FwaXRhbGl6ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb250U2l6ZTogXCIxNnB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvbnRXZWlnaHQ6IFwiYm9sZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogXCIjMzgzODM4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhZGRpbmc6IFwiMTBweFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYWRkaW5nUmlnaHQ6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmlldyBhbGxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2gyPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L2E+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L0xpbms+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBwYWRkaW5nVG9wOiBcIjhweFwiLCBtYXJnaW5MZWZ0OiAwIH19PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPExpbmsgaHJlZj17YC9yZXZpZXdzYH0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxhPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxNZE5hdmlnYXRlTmV4dCBzaXplPVwiMS41cmVtXCIgY29sb3I9XCIjMDAwXCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9MaW5rPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgICAgICBcIlwiXHJcbiAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICB7bmV3c0xpbWl0RmluYWxTZWN0aW9uID8gKFxyXG4gICAgICAgICAgICA8ZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93IG1sLTAgbXItMCBtdC0yIGRpc3BsYXlfbm9uZV9tb3JlX25ld3Nfc21hbGxfc2NyZWVuXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbC1sZy04XCI+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb2wtbWQtMTJcIj5cclxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwicm93XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kQ29sb3I6IFwid2hpdGVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICBib3hTaGFkb3c6IFwiMHB4IDBweCAxcHggcmdiYSgwLDAsMCwwLjUpXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICA+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCIxMHB4XCIgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwiY29sLW1kLTEyXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmbGV4RGlyZWN0aW9uOiBcInJvd1wiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogXCIxMDAlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogXCIxMHB4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hcmdpbkJvdHRvbTogXCI4cHhcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyBtYXJnaW5SaWdodDogXCI1cHhcIiB9fT5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPEZhTmV3c3BhcGVyIHNpemU9XCIxcmVtXCIgY29sb3I9XCIjODE4MDc4XCIgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdiBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIHBhZGRpbmdUb3A6IDAgfX0+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxoclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpblRvcDogXCI2cHhcIiB9fVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cImhyVGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS1jb250ZW50PVwibW9yZSBuZXdzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLz5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtzaG93TmV3c0ZpbmFsU2VjdGlvbigpfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtsb2FkZWROZXdzID8gKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd05ld3NGaW5hbFNlY3Rpb25Mb2FkZWROZXdzKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGRpdj5Mb2FkaW5nLi4uPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKX1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImNvbnRhaW5lclwiPntsb2FkTW9yZUJ1dHRvbigpfTwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICkgOiAoXHJcbiAgICAgICAgICAgIFwiXCJcclxuICAgICAgICAgICl9XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9MYXlvdXQ+XHJcbiAgKTtcclxufTtcclxuXHJcbi8vIFRoaXMgYWxzbyBnZXRzIGNhbGxlZCBhdCBidWlsZCB0aW1lXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRTdGF0aWNQcm9wcygpIHtcclxuICBjb25zdCBuZXdzTGltaXRGaXJzdFNlY3Rpb24gPSBhd2FpdCBuZXdzTGlzdFB1YmxpY0xpbWl0Rmlyc3RTZWN0aW9uKCkudGhlbihcclxuICAgIChkYXRhKSA9PiB7XHJcbiAgICAgIGlmIChkYXRhLmVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YS5lcnJvcik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICApO1xyXG5cclxuICBjb25zdCBuZXdzTGltaXRTZWNvbmRTZWN0aW9uID0gYXdhaXQgbmV3c0xpc3RQdWJsaWNMaW1pdFNlY29uZFNlY3Rpb24oKS50aGVuKFxyXG4gICAgKGRhdGEpID0+IHtcclxuICAgICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhLmVycm9yKTtcclxuICAgICAgfSBlbHNlIHtcclxuICAgICAgICByZXR1cm4gZGF0YTtcclxuICAgICAgfVxyXG4gICAgfVxyXG4gICk7XHJcblxyXG4gIGxldCBza2lwID0gMjI7XHJcbiAgbGV0IGxpbWl0ID0gMTA7XHJcblxyXG4gIGNvbnN0IG5ld3NMaW1pdEZpbmFsU2VjdGlvbiA9IGF3YWl0IG5ld3NMaXN0UHVibGljTGltaXRGaW5hbFNlY3Rpb24oXHJcbiAgICBza2lwLFxyXG4gICAgbGltaXRcclxuICApLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIGlmIChkYXRhLmVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEuZXJyb3IpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgY29uc3QgcmV2aWV3TGlzdExhdGVzdCA9IGF3YWl0IHJldmlld0xpc3RQdWJsaWNNb2JpbGVOZXdzKCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZGF0YS5lcnJvcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuICB9KTtcclxuICBjb25zdCBtb2JpbGVDYXRlZ29yeUxpc3QgPSBhd2FpdCBtQ2F0ZWdvcnlMaXN0SG9tZVBhZ2UoKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhLmVycm9yKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGNvbnN0IG1vYmlsZUxpc3RMYXRlc3QgPSBhd2FpdCBtb2JpbGVMaXN0UHVibGljTmV3c1Jldmlld3MoKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhLmVycm9yKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBsYXRlc3ROZXdzID0gYXdhaXQgbmV3c1B1YmxpY0xhdGVzdCgpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIGlmIChkYXRhLmVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEuZXJyb3IpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgY29uc3Qgc2Vjb25kTGF0ZXN0TmV3cyA9IGF3YWl0IG5ld3NQdWJsaWNTZWNvbmRMYXRlc3QoKS50aGVuKChkYXRhKSA9PiB7XHJcbiAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICBjb25zb2xlLmxvZyhkYXRhLmVycm9yKTtcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgfVxyXG4gIH0pO1xyXG4gIGNvbnN0IGxhdGVzdFJldmlldyA9IGF3YWl0IHJldmlld1B1YmxpY0xhdGVzdCgpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIGlmIChkYXRhLmVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEuZXJyb3IpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgY29uc3Qgc2Vjb25kTGF0ZXN0UmV2aWV3ID0gYXdhaXQgcmV2aWV3UHVibGljU2Vjb25kTGF0ZXN0KCkudGhlbigoZGF0YSkgPT4ge1xyXG4gICAgaWYgKGRhdGEuZXJyb3IpIHtcclxuICAgICAgY29uc29sZS5sb2coZGF0YS5lcnJvcik7XHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICByZXR1cm4gZGF0YTtcclxuICAgIH1cclxuICB9KTtcclxuXHJcbiAgY29uc3QgZWlnaHRMYXRlc3RSZXZpZXcgPSBhd2FpdCByZXZpZXdQdWJsaWNFaWdodExhdGVzdCgpLnRoZW4oKGRhdGEpID0+IHtcclxuICAgIGlmIChkYXRhLmVycm9yKSB7XHJcbiAgICAgIGNvbnNvbGUubG9nKGRhdGEuZXJyb3IpO1xyXG4gICAgfSBlbHNlIHtcclxuICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICB9XHJcbiAgfSk7XHJcbiAgY29uc3QgbGltaXRlZFJldmlld3NTZWN0aW9uT25lID0gYXdhaXQgcmV2aWV3TGlzdFB1YmxpY0xpbWl0ZWRTZWN0aW9uT25lKCkudGhlbihcclxuICAgIChkYXRhKSA9PiB7XHJcbiAgICAgIGlmIChkYXRhLmVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YS5lcnJvcik7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgcmV0dXJuIGRhdGE7XHJcbiAgICAgIH1cclxuICAgIH1cclxuICApO1xyXG4gIGNvbnN0IGxpbWl0ZWRSZXZpZXdzU2VjdGlvblR3byA9IGF3YWl0IHJldmlld0xpc3RQdWJsaWNMaW1pdGVkU2VjdGlvblR3bygpLnRoZW4oXHJcbiAgICAoZGF0YSkgPT4ge1xyXG4gICAgICBpZiAoZGF0YS5lcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEuZXJyb3IpO1xyXG4gICAgICB9IGVsc2Uge1xyXG4gICAgICAgIHJldHVybiBkYXRhO1xyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgKTtcclxuXHJcbiAgcmV0dXJuIHtcclxuICAgIHByb3BzOiB7XHJcbiAgICAgIGxhdGVzdE5ld3MsXHJcbiAgICAgIHNlY29uZExhdGVzdE5ld3MsXHJcbiAgICAgIGxhdGVzdFJldmlldyxcclxuICAgICAgc2Vjb25kTGF0ZXN0UmV2aWV3LFxyXG4gICAgICBlaWdodExhdGVzdFJldmlldyxcclxuICAgICAgbmV3c0xpbWl0Rmlyc3RTZWN0aW9uLFxyXG4gICAgICBuZXdzTGltaXRTZWNvbmRTZWN0aW9uLFxyXG4gICAgICBuZXdzTGltaXRGaW5hbFNlY3Rpb24sXHJcbiAgICAgIGxpbWl0ZWRSZXZpZXdzU2VjdGlvbk9uZSxcclxuICAgICAgbGltaXRlZFJldmlld3NTZWN0aW9uVHdvLFxyXG4gICAgICByZXZpZXdMaXN0TGF0ZXN0LFxyXG4gICAgICBtb2JpbGVDYXRlZ29yeUxpc3QsXHJcbiAgICAgIG1vYmlsZUxpc3RMYXRlc3QsXHJcbiAgICB9LFxyXG4gICAgLy8gUmUtZ2VuZXJhdGUgdGhlIHBvc3QgYXQgbW9zdCBvbmNlIHBlciBzZWNvbmRcclxuICAgIC8vIGlmIGEgcmVxdWVzdCBjb21lcyBpblxyXG4gICAgcmV2YWxpZGF0ZTogMSxcclxuICB9O1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBJbmRleDtcclxuIiwiLy8gRXhwb3J0c1xubW9kdWxlLmV4cG9ydHMgPSB7XG5cdFwic29jaWFsX2ljb25zX2NsYXNzXCI6IFwiZm9vdGVyX3NvY2lhbF9pY29uc19jbGFzc19fM3pLaGtcIixcblx0XCJmb290ZXJfaGVhZGVyc1wiOiBcImZvb3Rlcl9mb290ZXJfaGVhZGVyc19fMko0N2RcIixcblx0XCJmb290ZXJfbGlzdF9pdGVtc1wiOiBcImZvb3Rlcl9mb290ZXJfbGlzdF9pdGVtc19fYzc2SGdcIixcblx0XCJjb3B5cmlnaHRfc2VjdGlvblwiOiBcImZvb3Rlcl9jb3B5cmlnaHRfc2VjdGlvbl9felNoakVcIlxufTtcbiIsIi8vIEV4cG9ydHNcbm1vZHVsZS5leHBvcnRzID0ge1xuXHRcImNvbnRhaW5lcl9jb21tb25cIjogXCJob21lUGFnZV9jb250YWluZXJfY29tbW9uX18yQkFoU1wiLFxuXHRcIm92ZXJsYXlcIjogXCJob21lUGFnZV9vdmVybGF5X19pa3pXZlwiLFxuXHRcImNvbnRhaW5lcl9sZWZ0XCI6IFwiaG9tZVBhZ2VfY29udGFpbmVyX2xlZnRfXzNJRHE3XCIsXG5cdFwiY29udGFpbmVyX3JpZ2h0XCI6IFwiaG9tZVBhZ2VfY29udGFpbmVyX3JpZ2h0X19HYTJzb1wiLFxuXHRcImNvbnRhaW5lcl9yaWdodF90b3BcIjogXCJob21lUGFnZV9jb250YWluZXJfcmlnaHRfdG9wX18xM25qM1wiLFxuXHRcImNvbnRhaW5lcl9yaWdodF9ib3R0b21cIjogXCJob21lUGFnZV9jb250YWluZXJfcmlnaHRfYm90dG9tX18xUjUwZlwiLFxuXHRcImNvbnRhaW5lcl9yaWdodF9ib3R0b21fbGVmdFwiOiBcImhvbWVQYWdlX2NvbnRhaW5lcl9yaWdodF9ib3R0b21fbGVmdF9fMXFyWS1cIixcblx0XCJjb250YWluZXJfcmlnaHRfYm90dG9tX3JpZ2h0XCI6IFwiaG9tZVBhZ2VfY29udGFpbmVyX3JpZ2h0X2JvdHRvbV9yaWdodF9fVEZVR3lcIixcblx0XCJpbWdfd3JhcHBlclwiOiBcImhvbWVQYWdlX2ltZ193cmFwcGVyX18zMXg3NFwiLFxuXHRcIm5ld3NfdGl0bGVcIjogXCJob21lUGFnZV9uZXdzX3RpdGxlX18zM3lxMFwiLFxuXHRcIm5ld3NfdGl0bGVfcmlnaHRfdG9wXCI6IFwiaG9tZVBhZ2VfbmV3c190aXRsZV9yaWdodF90b3BfXzNPX1J3XCIsXG5cdFwibmV3c190aXRsZV9yaWdodF9ib3R0b21fcmlnaHRcIjogXCJob21lUGFnZV9uZXdzX3RpdGxlX3JpZ2h0X2JvdHRvbV9yaWdodF9fMXZtaEhcIixcblx0XCJuZXdzX3RpdGxlX3JpZ2h0X2JvdHRvbV9sZWZ0XCI6IFwiaG9tZVBhZ2VfbmV3c190aXRsZV9yaWdodF9ib3R0b21fbGVmdF9fMVN3cVZcIixcblx0XCJibG9nX3R5cGVcIjogXCJob21lUGFnZV9ibG9nX3R5cGVfX1NqdkZhXCIsXG5cdFwiYXV0aG9yXCI6IFwiaG9tZVBhZ2VfYXV0aG9yX18zQ0s0elwiLFxuXHRcImNvbnRhaW5lcl9yaWdodF9tZWRpdW1fc2NyZWVuXCI6IFwiaG9tZVBhZ2VfY29udGFpbmVyX3JpZ2h0X21lZGl1bV9zY3JlZW5fX2JJWURaXCIsXG5cdFwiY29udGFpbmVyX3JpZ2h0X3RvcF9tZWRpdW1fc2NyZWVuXCI6IFwiaG9tZVBhZ2VfY29udGFpbmVyX3JpZ2h0X3RvcF9tZWRpdW1fc2NyZWVuX19DVXVDZFwiLFxuXHRcImNvbnRhaW5lcl9yaWdodF9ib3R0b21fbWVkaXVtX3NjcmVlblwiOiBcImhvbWVQYWdlX2NvbnRhaW5lcl9yaWdodF9ib3R0b21fbWVkaXVtX3NjcmVlbl9fMVNRNHdcIixcblx0XCJuZXdzX3RpdGxlX3JpZ2h0X2JvdHRvbV9tZWRpdW1fc2NyZWVuXCI6IFwiaG9tZVBhZ2VfbmV3c190aXRsZV9yaWdodF9ib3R0b21fbWVkaXVtX3NjcmVlbl9fR2xCZlZcIixcblx0XCJuZXdzX3RpdGxlX3JpZ2h0X3RvcF9tZWRpdW1fc2NyZWVudFwiOiBcImhvbWVQYWdlX25ld3NfdGl0bGVfcmlnaHRfdG9wX21lZGl1bV9zY3JlZW50X18xVFhNWFwiLFxuXHRcInNtYWxsX3NjcmVlbl9ibG9ja1wiOiBcImhvbWVQYWdlX3NtYWxsX3NjcmVlbl9ibG9ja19fM1FHLUtcIixcblx0XCJzbWFsbF9zY3JlZW5fY29udGFpbmVyXCI6IFwiaG9tZVBhZ2Vfc21hbGxfc2NyZWVuX2NvbnRhaW5lcl9fMzgzZWRcIixcblx0XCJuZXdzX3RpdGxlX3NtYWxsX3NjcmVlblwiOiBcImhvbWVQYWdlX25ld3NfdGl0bGVfc21hbGxfc2NyZWVuX19LUkNEUFwiLFxuXHRcInNtYWxsX3NjcmVlbl9pbWdfd3JhcHBlclwiOiBcImhvbWVQYWdlX3NtYWxsX3NjcmVlbl9pbWdfd3JhcHBlcl9fMUJwX2RcIixcblx0XCJsYXJnZV9zY3JlZW5fZmVhdHVyaW5nXCI6IFwiaG9tZVBhZ2VfbGFyZ2Vfc2NyZWVuX2ZlYXR1cmluZ19fd1dpQmJcIixcblx0XCJtZWRpdW1fc2NyZWVuX2ZlYXR1cmluZ1wiOiBcImhvbWVQYWdlX21lZGl1bV9zY3JlZW5fZmVhdHVyaW5nX18xN3hRZFwiLFxuXHRcInNtYWxsX3NjcmVlbl9mZWF0dXJpbmdcIjogXCJob21lUGFnZV9zbWFsbF9zY3JlZW5fZmVhdHVyaW5nX18xbkJhelwiLFxuXHRcImNvbnRhaW5lcl9yZXZpZXdfbWlkZGxlXCI6IFwiaG9tZVBhZ2VfY29udGFpbmVyX3Jldmlld19taWRkbGVfX0hhYWJ6XCIsXG5cdFwidGl0bGVfcmV2aWV3X21pZGRsZVwiOiBcImhvbWVQYWdlX3RpdGxlX3Jldmlld19taWRkbGVfXzFUOFBTXCIsXG5cdFwicmV2aWV3X2NvbnRhaW5lcl9taWRkbGVcIjogXCJob21lUGFnZV9yZXZpZXdfY29udGFpbmVyX21pZGRsZV9fM1RpX2lcIixcblx0XCJpbWFnZV9yZXZpZXdfbWlkZGxlXCI6IFwiaG9tZVBhZ2VfaW1hZ2VfcmV2aWV3X21pZGRsZV9fMndfdmVcIixcblx0XCJjb250ZW50X2Rpdl9yZXZpZXdfbWlkZGxlXCI6IFwiaG9tZVBhZ2VfY29udGVudF9kaXZfcmV2aWV3X21pZGRsZV9fMmFyZzRcIixcblx0XCJjb250ZW50X3Jldmlld19taWRkbGVcIjogXCJob21lUGFnZV9jb250ZW50X3Jldmlld19taWRkbGVfXzFNZ1JoXCIsXG5cdFwiYXV0aG9yX2Rpdl9yZXZpZXdfbWlkZGxlXCI6IFwiaG9tZVBhZ2VfYXV0aG9yX2Rpdl9yZXZpZXdfbWlkZGxlX18yeHBnR1wiLFxuXHRcImRpc3BsYXlfbm9uZV9yZXZpZXdfbWlkZGxlX2JvdHRvbVwiOiBcImhvbWVQYWdlX2Rpc3BsYXlfbm9uZV9yZXZpZXdfbWlkZGxlX2JvdHRvbV9fM09fWU1cIixcblx0XCJuZXdzX19jb250YWluZXJcIjogXCJob21lUGFnZV9uZXdzX19jb250YWluZXJfXzFJcWNYXCIsXG5cdFwiaW1hZ2VfX25ld3NcIjogXCJob21lUGFnZV9pbWFnZV9fbmV3c19fM1ZFbERcIixcblx0XCJjb250ZW50X19kaXZcIjogXCJob21lUGFnZV9jb250ZW50X19kaXZfXzMwa1RIXCIsXG5cdFwiY29udGVudF9fbmV3c1wiOiBcImhvbWVQYWdlX2NvbnRlbnRfX25ld3NfXzJ4cmJyXCIsXG5cdFwiZXhjZXJwdF9kaXZcIjogXCJob21lUGFnZV9leGNlcnB0X2Rpdl9fTFBNMDRcIixcblx0XCJhdXRob3JfX2RpdlwiOiBcImhvbWVQYWdlX2F1dGhvcl9fZGl2X19oZHR1TFwiLFxuXHRcImRpc3BsYXlfbm9uZV9tb3JlX25ld3Nfc21hbGxfc2NyZWVuXCI6IFwiaG9tZVBhZ2VfZGlzcGxheV9ub25lX21vcmVfbmV3c19zbWFsbF9zY3JlZW5fX2tpNXJ2XCIsXG5cdFwiZGlzcGxheV9ub25lX21vcmVfbmV3c19tYWluX2Jsb2NrXCI6IFwiaG9tZVBhZ2VfZGlzcGxheV9ub25lX21vcmVfbmV3c19tYWluX2Jsb2NrX19PenNIblwiLFxuXHRcInNpZGVfX2Jhcl9fc2luZ2xlX19icmFuZFwiOiBcImhvbWVQYWdlX3NpZGVfX2Jhcl9fc2luZ2xlX19icmFuZF9fM1N2ekhcIixcblx0XCJzaWRlX19iYXJfX3NpbmdsZV9fYnJhbmRfX21haW5cIjogXCJob21lUGFnZV9zaWRlX19iYXJfX3NpbmdsZV9fYnJhbmRfX21haW5fXzM5c0VDXCIsXG5cdFwiYm94X19zaXppbmdfX3Bob25lXCI6IFwiaG9tZVBhZ2VfYm94X19zaXppbmdfX3Bob25lX19Wck1UT1wiLFxuXHRcImNhcmRzX19waG9uZVwiOiBcImhvbWVQYWdlX2NhcmRzX19waG9uZV9fMUpsZ1pcIixcblx0XCJzaWRlX19iYXJfX3Bob25lc1wiOiBcImhvbWVQYWdlX3NpZGVfX2Jhcl9fcGhvbmVzX195MDEwUVwiLFxuXHRcInNpbmdsZV9fY2FyZF9fcGhvbmVcIjogXCJob21lUGFnZV9zaW5nbGVfX2NhcmRfX3Bob25lX18zd0dYRlwiLFxuXHRcImNhcmRfX2ltYWdlX19jb250YWluZXJfX3Bob25lXCI6IFwiaG9tZVBhZ2VfY2FyZF9faW1hZ2VfX2NvbnRhaW5lcl9fcGhvbmVfXzJNT2lQXCIsXG5cdFwiY2FyZF9fY29udGVudF9fcGhvbmVcIjogXCJob21lUGFnZV9jYXJkX19jb250ZW50X19waG9uZV9fMU5ZMnlcIixcblx0XCJoclRleHRcIjogXCJob21lUGFnZV9oclRleHRfX0dOWXBYXCIsXG5cdFwibG9hZF9tb3JlX2J1dHRvblwiOiBcImhvbWVQYWdlX2xvYWRfbW9yZV9idXR0b25fXzRBT3NxXCJcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJpc29tb3JwaGljLWZldGNoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImpzLWNvb2tpZVwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJtb21lbnRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9jb25maWdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwibmV4dC9oZWFkXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5leHQvcm91dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm5wcm9ncmVzc1wiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJxdWVyeS1zdHJpbmdcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3RcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvZmFcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvZmlcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaWNvbnMvbWRcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtaXNcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QtcmVuZGVyLWh0bWxcIik7IiwibW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKFwicmVhY3QvanN4LWRldi1ydW50aW1lXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0c3RyYXBcIik7Il0sInNvdXJjZVJvb3QiOiIifQ==