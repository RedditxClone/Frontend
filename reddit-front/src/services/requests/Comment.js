/* eslint-disable */
import api from './api';

/**
 * This service for fetching the posts
 * @param {object} data - The request data
 */
export const getComments = async () => {
  
  const response = await api.get('/api/comment');
  console.log(response.data);
  return response.data;
};

export const spamComment = async (data) => {
    const { id, request } = data;
    console.log('spam called');
    console.log(request);
    const response = await api.patch(`api/comment/${id}/spam`, request);

    return response.data;
};

export const lockComment = async (data) => {
    const { id, request } = data;
    const response = await api.patch(`api/comment/${id}/lock`, request);
    return response.data;
};
export const approveComment = async (data) => {
    const { id, request } = data;
    const response = await api.patch(`api/comment/${id}/approve`, request);

    return response.data;
};

export const removeComment = async (data) => {
    const { id, request } = data;
    const response = await api.patch(`api/comment/${id}/remove`, request);
    return response.data;
};

export const saveComment = async (data) => {
    const { id, request } = data;
    const response = await api.patch(`api/comment/${id}/save`, request);
    return response.data;
};

export const deleteComment = async (data) => {
    const { id, request } = data;
    const response = await api.patch(`api/comment/${id}/delete`, request);
    return response.data;
};

