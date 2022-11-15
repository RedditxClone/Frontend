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
  const { searchingCategory } = data;
  const request = data; // this data that will be sent the api request

  // fetching the results
  const response = await api.get(`/api/search/${searchingCategory}`);
  return response.data;
};

export default retrieveResults;
