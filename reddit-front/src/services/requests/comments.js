/* eslint-disable no-unused-vars */
/* eslint-disable import/prefer-default-export */
import api from './api';
import getCookie from './getCookie';
// 639da7ae5037e305d283a479

const token = getCookie('Authorization');

export const getComments = async (object) => {
  const { id } = object;
  console.log(object);
  try {
    console.log('first');
    const response = await api.get(`/api/thing/${id}/with-children`, {
      headers: { Authorization: token }
    });
    console.log('last');
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const postComment = async (object) => {
  console.log(object);
  try {
    console.log('first');
    const response = await api.post('/api/comment/submit', object, {
      headers: { Authorization: token }
    });
    console.log('last');
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const deleteComment = async (object) => {
  console.log(object);
  const { id } = object;
  try {
    console.log('first');
    const response = await api.delete(`/api/comment/${id}`, {
      headers: { Authorization: token }
    });
    console.log('last');
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};

export const patchComment = async (object) => {
  console.log(object);
  const { id, body } = object;
  try {
    console.log('first');
    const response = await api.patch(
      `/api/comment/${id}`,
      { body },
      {
        headers: { Authorization: token }
      }
    );
    console.log('last');
    return response.data;
  } catch (error) {
    return error.response.data;
  }
};
