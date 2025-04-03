import axios, { InternalAxiosRequestConfig, AxiosResponse, AxiosError } from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001/api';

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Request interceptor for adding auth token and logging
api.interceptors.request.use((config: InternalAxiosRequestConfig) => {
  // Log request details
  console.log('API Request:', {
    url: config.url,
    method: config.method?.toUpperCase(),
    params: config.params,
    data: config.data,
  });

  // Only access localStorage in browser environment
  if (typeof window !== 'undefined') {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
  }
  return config;
});

// Response interceptor for handling errors and logging
api.interceptors.response.use(
  (response: AxiosResponse) => {
    // Log successful response
    console.log('API Response:', {
      url: response.config.url,
      status: response.status,
      data: response.data,
    });
    return response;
  },
  (error: AxiosError) => {
    // Log error details
    console.error('API Error:', {
      url: error.config?.url,
      status: error.response?.status,
      message: error.message,
      data: error.response?.data,
    });

    // Handle unauthorized access
    if (error.response?.status === 401 && typeof window !== 'undefined') {
      localStorage.removeItem('token');
      window.location.href = '/login';
    }

    // Handle other common errors
    if (error.response?.status === 404) {
      console.error('Resource not found');
    } else if (error.response?.status === 500) {
      console.error('Server error');
    }

    return Promise.reject(error);
  }
);

export default api; 