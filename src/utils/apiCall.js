import axios from "axios";

const BASE_URL = "https://reqres.in/api/";

const api = axios.create();

export const apiPrivate = axios.create({
  baseURL: BASE_URL,
  headers: { "Content-Type": "application/json" },
  withCredentials: true,
});

api.defaults.baseURL = BASE_URL;

api.defaults.headers = {
  "Content-type": "application/json",
  Accept: "application/json",
};

export function getRequest(url, config = {}) {
  return api
    .get(`/${url}`, config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      if (error?.response?.status === 404) {
      }
      return Promise.reject(error);
    });
}

export function postRequest(url, payload) {
  return api
    .post(`/${url}`, payload, {
      headers: { "Content-Type": "application/json" },
      withCredentials: true,
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return Promise.reject(error);
    });
}
