import axios from 'axios'

export const BASE_URL = 'http://localhost:1337';

function request<T>(
  url: string,
): Promise<T> {
  return axios.get(`${BASE_URL}${url}`)
    .then(response => {
      if (response.status < 200 || response.status >= 300) {
        throw new Error(`Request failed with status ${response.status}`);
      }

      return response.data;
    })
}

export const client = {
  get: <T>(url: string) => request<T>(url),
};
