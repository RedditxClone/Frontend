/* eslint-disable */
import api from "./api";

export const getTrafficChartData = async () => {
  try {
    const response = await api.get(
      "/api/subreddit/traffic_states/traffic_chart_data"
    );
    if (response.status >= 200 && response.status < 300) {
      //   console.log(response.data);
      return response.data;
    }
    return null;
  } catch (error) {
    console.log(error);
    return null;
  }
};

export const getTrafficTableJoinedThisWeek = async () => {
  try {
    const response = await api.get(
      "/api/subreddit/traffic_states/traffic_table/joined_this_week"
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

export const getTrafficTableJoinedThisYear = async () => {
  try {
    const response = await api.get(
      "/api/subreddit/traffic_states/traffic_table/joined_this_year"
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

export const getTrafficLastWeek = async () => {
    try {
      const response = await api.get(
        "/api/subreddit/traffic_states/total_last_week"
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

  export const getTrafficLastMonth = async () => {
    try {
      const response = await api.get(
        "/api/subreddit/traffic_states/total_last_month"
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
