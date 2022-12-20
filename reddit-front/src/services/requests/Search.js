/* eslint-disable object-curly-newline */
/* eslint-disable no-else-return */
/* eslint-disable consistent-return */
/* eslint-disable arrow-body-style */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import api from './api';
import getCookie from './getCookie';

/**
 * This service for fetching the search results
 * @param {object} data - The request data
 */
export const retrieveResults = async (data) => {
  const token = getCookie('Authorization');
  try {
    let { searchingCategory, key } = data;
    const request = data; // this data that will be sent the api request
    // fetching the results
    const response = await api.get(
      `/api/search/${searchingCategory}?word=${key}`,
      {
        headers: { Authorization: token }
      }
    );
    return { data: response.data, statusCode: 200 };
    // Work with the response...
  } catch (err) {
    if (err.response) {
      // The client was given an error response (5xx, 4xx)
      return { data: [], statusCode: 400 };
    } else if (err.request) {
      // The client never received a response, and the request was never left
      return { data: [], statusCode: 400 };
    } else {
      // Anything else
      console.log('Error', err.message);
      return { data: [], statusCode: 400 };
    }
  }
};

/**
 * This service for fetching the search results of posts
 * @param {object} data - The request data
 */
export const retrievePostResults = async (data) => {
  try {
    let { searchingCategory, key, sort, time } = data;
    let endPoint = `/api/search/${searchingCategory}?word=${key}`;
    // preparing the request
    if (sort) {
      endPoint += `&sort=${sort}`;
    }
    if (time) {
      endPoint += `&time=${time}`;
    }

    const request = data; // this data that will be sent the api request
    // fetching the results
    const response = await api.get(endPoint);
    return { data: response.data, statusCode: 200 };
    // Work with the response...
  } catch (err) {
    if (err.response) {
      // The client was given an error response (5xx, 4xx)
      return { data: [], statusCode: 400 };
    } else if (err.request) {
      // The client never received a response, and the request was never left
      return { data: [], statusCode: 400 };
    } else {
      // Anything else
      console.log('Error', err.message);
      return { data: [], statusCode: 400 };
    }
  }
};
