import { getCookie, setCookie } from "@/utils/cookie";
import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: {
    "Content-Type": "application/json; charset=utf-8",
  },
});

api.interceptors.request.use(
  (request) => {
    const accessToken = getCookie("accessToken");
    if (accessToken) {
      request.headers["Authorization"] = `Bearer ${accessToken}`;
    }
    return request;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      const result = await getNewTokens();
      if (result?.response?.status === 201) {
        setCookie("accessToken", result?.response?.data.accessToken, 30);
        setCookie("refreshToken", result?.response?.data.refreshToken, 360);
        return api(originalRequest);
      } else {
        setCookie("accessToken", "", 0);
        setCookie("refreshToken", "", 0);
      }
    }
    return Promise.reject(error.response);
  }
);
export default api;

const getNewTokens = async () => {
  const refreshToken = getCookie("refreshToken");
  if (!refreshToken) return;

  try {
    const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/auth/refresh-token`, { refreshToken });
    return { response };
  } catch (error) {
    return { error };
  }
};
