import api from './api';

/**
 * This service for fetching the Chart Data
 */

export const getTrafficChartData = async (data) => {
  try {
    const { srName } = data;
    const response = await api.get(
      `/api/subreddit/${srName}/statistics/week`
    );
    if (response.status >= 200 && response.status < 300) {
      console.log(response.data);
      return response.data;
    }
    return null;
  } catch (error) {
    console.log(error);
    console.log("error");
    return null;
  }
};

/**
 * This service for fetching the no. people joined this week for each day
 */

export const getTrafficTableJoinedThisWeek = async () => {
  try {
    const response = await api.get(
      '/api/subreddit/traffic_states/traffic_table/joined_this_week'
    );
    if (response.status >= 200 && response.status < 300) {
      console.log(response.data);
      return response.data;
    }
    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

/**
 * This service for fetching the no. people joined this year for each month
 */

export const getTrafficTableJoinedThisYear = async () => {
  try {
    const response = await api.get(
      '/api/subreddit/traffic_states/traffic_table/joined_this_year'
    );
    if (response.status >= 200 && response.status < 300) {
      console.log(response.data);
      return response.data;
    }
    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

/**
 * This service for fetching the no. people joined last week
 */

export const getTrafficLastWeek = async () => {
  try {
    const response = await api.get(
      '/api/subreddit/traffic_states/total_last_week'
    );
    if (response.status >= 200 && response.status < 300) {
      console.log(response.data);
      return response.data;
    }
    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

/**
 * This service for fetching the no. people joined last month
 */

export const getTrafficLastMonth = async () => {
  try {
    const response = await api.get(
      '/api/subreddit/traffic_states/total_last_month'
    );
    if (response.status >= 200 && response.status < 300) {
      console.log(response.data);
      return response.data;
    }
    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};
