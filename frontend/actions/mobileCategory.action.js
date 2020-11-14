import fetch from 'isomorphic-fetch';
import { API } from '../config';
import { handleResponse } from './auth.action';

export const createMCategory = (mCategory, token) => {


    return fetch(`${API}/mobile-category`, {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: mCategory
    })
        .then(response => {
            handleResponse(response);
            return response.json();
        })
        .catch(err => console.log(err));
};

export const mCategoryList = () => {
    return fetch(`${API}/mobile-category`, {
        method: 'GET'
    }).then(response => {
        return response.json();
    }).catch(err => console.log(err)
    );
}

export const mCategoryListHomePage = () => {
    return fetch(`${API}/mobile-category-list-home-page`, {
        method: 'GET'
    }).then(response => {
        return response.json();
    }).catch(err => console.log(err)
    );
}



export const singleMCategory = (slug) => {
    return fetch(`${API}/single-mobile-category/${slug}`, {
        method: 'GET'
    }).then(response => {
        return response.json()
    }).catch(err => console.log(err)
    );
}

export const removeMCategory = (slug, token) => {
    return fetch(`${API}/mobile-category/${slug}`, {
        method: 'DELETE',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: `Bearer ${token}`
        }
    })
        .then(response => {
            handleResponse(response)
            return response.json();
        })
        .catch(err => console.log(err));
}

export const updateMCategory = (mCategory, token, slug) => {


    return fetch(`${API}/mobile-category/${slug}`, {
        method: 'PUT',
        headers: {
            Accept: 'application/json',
            Authorization: `Bearer ${token}`
        },
        body: mCategory
    })
        .then(response => {
            handleResponse(response);
            return response.json();
        })
        .catch(err => console.log(err));
}
