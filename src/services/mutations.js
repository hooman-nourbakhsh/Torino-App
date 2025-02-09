import { useMutation, useQueryClient } from "@tanstack/react-query";
import api from "@/configs/apiConfig";
import { setCookie } from "@/utils/cookie";

export const useSendOTP = () => {
  const mutationFn = (data) => api.post("/auth/send-otp", data);
  return useMutation({ mutationFn });
};

export const useCheckOTP = () => {
  const queryClient = useQueryClient();
  const mutationFn = (data) => api.post("/auth/check-otp", data);

  const onSuccess = (data) => {
    setCookie("accessToken", data?.data?.accessToken, 30);
    setCookie("refreshToken", data?.data?.refreshToken, 365);
    queryClient.invalidateQueries({ queryKey: ["user-data"] });
  };
  return useMutation({ mutationFn, onSuccess });
};