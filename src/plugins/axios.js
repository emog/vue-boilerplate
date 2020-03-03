import axios from 'axios';
import NProgress from 'vue-nprogress'

const instance = axios.create({
    baseURL: '/api'
});

import createAuthRefreshInterceptor from 'axios-auth-refresh';

// Function that will be called to refresh authorization
const refreshAuthLogic = failedRequest => instance.post('https://www.example.com/auth/token/refresh').then(tokenRefreshResponse => {
    localStorage.setItem('token', tokenRefreshResponse.data.token);
    failedRequest.response.config.headers['Authorization'] = 'Bearer ' + tokenRefreshResponse.data.token;
    return Promise.resolve();
});

// Instantiate the interceptor (you can chain it as it returns the axios instance)
createAuthRefreshInterceptor(instance, refreshAuthLogic);

// Obtain the fresh token each time the function is called
function getAccessToken () {
    return localStorage.getItem('token'); //Use store instead localStorage for security reasons
}

// Use interceptor to inject the token to requests
instance.interceptors.request.use(request => {
    request.headers['Authorization'] = `Bearer ${getAccessToken()}`;
    return request;
});

// before a request is made start the nprogress
instance.interceptors.request.use(config => {
    NProgress.start();
    return config
});

// before a response is returned stop nprogress
instance.interceptors.response.use(response => {
    NProgress.done();
    return response
});

export default instance
