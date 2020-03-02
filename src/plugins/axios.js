import axios from 'axios';
import createAuthRefreshInterceptor from 'axios-auth-refresh';

// Function that will be called to refresh authorization
const refreshAuthLogic = failedRequest => axios.post('https://www.example.com/auth/token/refresh').then(tokenRefreshResponse => {
    localStorage.setItem('token', tokenRefreshResponse.data.token);
    failedRequest.response.config.headers['Authorization'] = 'Bearer ' + tokenRefreshResponse.data.token;
    return Promise.resolve();
});

// Instantiate the interceptor (you can chain it as it returns the axios instance)
createAuthRefreshInterceptor(axios, refreshAuthLogic);

// Obtain the fresh token each time the function is called
function getAccessToken () {
    return localStorage.getItem('token'); //Use store instead localStorage for security reasons
}

// Use interceptor to inject the token to requests
axios.interceptors.request.use(request => {
    request.headers['Authorization'] = `Bearer ${getAccessToken()}`;
    return request;
});
