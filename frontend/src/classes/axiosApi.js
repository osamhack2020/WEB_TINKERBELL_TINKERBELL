import axios from 'axios'

const axiosInstance = axios.create({
    baseURL: 'http://localhost:8000/api/',
    timeout: 5000,
    headers: {
        'Authorization': "JWT " + sessionStorage.getItem('access_token'),
        'Content-Type': 'application/json',
        'accept': 'application/json'
    }
});

// django에서 나온값이 401일경우 refresh 시켜준다
axiosInstance.interceptors.response.use(
    response => response,
    error => {
      const originalRequest = error.config;

      if (error.response.status === 401 && error.response.statusText === "Unauthorized") {
          const refresh_token = sessionStorage.getItem('refresh_token');

          return axiosInstance
              .post('/token/refresh/', {refresh: refresh_token})
              .then((response) => {

                  sessionStorage.setItem('access_token', response.data.access);
                  sessionStorage.setItem('refresh_token', response.data.refresh);

                  axiosInstance.defaults.headers['Authorization'] = "JWT " + response.data.access;
                  originalRequest.headers['Authorization'] = "JWT " + response.data.access;

                  return axiosInstance(originalRequest);
              })
              .catch(err => {
                  console.log(err)
              });
      }
      return Promise.reject(error);
  }
);
export default axiosInstance
