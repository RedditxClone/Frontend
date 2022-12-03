/* eslint-disable no-else-return */
/* eslint-disable consistent-return */
/* eslint-disable arrow-body-style */
/* eslint-disable no-plusplus */
/* eslint-disable prefer-arrow-callback */
/* eslint-disable func-names */
/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
/* eslint-disable no-param-reassign */
import axios from 'axios';

const SERVER_NAME = process.env.REACT_APP_BASE_URL;

const api = axios.create({
  baseURL: SERVER_NAME
});

/**
 * This service for fetching the search results
 * @param {object} data - The request data
 */
const retrieveResults = async (data) => {
  try {
    let { searchingCategory } = data;
    const request = data; // this data that will be sent the api request
    // fetching the results
    const response = await api.get(`/api/search/${searchingCategory}`);
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

  // let { searchingCategory } = data;
  // const request = data; // this data that will be sent the api request
  // // fetching the results
  // const response = await api
  //   .get(`/api/search/${searchingCategory}`)
  //   .then(() => {
  //     return response.data;
  //   })
  //   .catch((e) => console.log(e.message));
};

export default retrieveResults;
