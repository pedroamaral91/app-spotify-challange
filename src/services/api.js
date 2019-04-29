const apiURL = 'http://localhost:3001/';

export const fetchGET = async (url) => {
  const fetchAPI = await fetch(`${apiURL}${url}`);
  const response = await fetchAPI.json();
  return response;
};

export const fetchPOST = async (url, params) => {
  const formData = new FormData();
  Object.keys(params).forEach((key) => {
    formData.append(key, params[key]);
  });
  const requestInfo = { method: 'POST', body: formData };
  const fetchApi = await fetch(`${apiURL}${url}`, requestInfo);
  return fetchApi;
};
