/* eslint-disable no-unused-vars */
const API_BASE_URL = 'https://api.tvmaze.com';
async function apiGet(queryString) {
  export const response = await fetch(`${API_BASE_URL}${queryString}`).then(r =>
    r.json()
  );
  return response;
}
