import axios from "axios";
import { toast } from "react-toastify";
import { getCookie, setCookie } from "@/utils/cookie";

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
    if ((error.response.status === 401 && !originalRequest._retry) || error.response.status === 403) {
      originalRequest._retry = true;

      const result = await getNewTokens();
      if (result?.response?.status === 200) {
        setCookie("accessToken", result?.response?.data.accessToken, 30);
        setCookie("refreshToken", refreshToken, 360);
        return api(originalRequest);
      } else {
        setCookie("accessToken", "", 0);
        setCookie("refreshToken", "", 0);

        if (window.location.pathname !== "/" && ["/profile", "/payment", "/checkout"].some((path) => window.location.pathname.startsWith(path))) {
          toast.error(
            <>
              لطفاً مجدداً وارد شوید! <br />
              <br />
              در حال هدایت به صفحه ورود ...
            </>,
            { toastId: "auth-error" }
          );
          setTimeout(() => {
            window.location.replace("/login");
          }, 2500);
        }
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
    return { response, refreshToken };
  } catch (error) {
    return { error };
  }
};
