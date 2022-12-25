/* eslint-disable import/prefer-default-export */
import api from './api';
import getCookie from './getCookie';

const token = getCookie('Authorization');
export const getPostRepliesMessages = async (object) => {
  const { limit, page } = object;
  const response = await api.get(
    `/api/message/me?limit=${limit}&page=${page}`,
    {
      headers: { Authorization: token }
    }
  );
  return response.data.data;
};
export const postReplySpam = async (data) => {
  const { id } = data;
  const response = await api.post(
    `api/message/${id}/spam`,
    {},
    {
      headers: { Authorization: token }
    }
  );
  return response.data;
};

export const postReplyReply = async (data) => {
  const { id, body } = data;
  const response = await api.post(`api/message/${id}/spam`, body, {
    headers: { Authorization: token }
  });
  return response.data;
};

export const deleteReplySpam = async (data) => {
  const { id } = data;
  const response = await api.delete(
    `api/message/${id}`,
    {},
    {
      headers: { Authorization: token }
    }
  );
  return response.data;
};

export const postReplyMarkAsRead = async (data) => {
  const { body } = data;
  const response = await api.post('/api/message/mark_as_read', body, {
    headers: { Authorization: token }
  });
  return response.data;
};
