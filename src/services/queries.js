import { useQuery } from "@tanstack/react-query";
import api from "@/configs/apiConfig";

export const useGetUserData = () => {
  const queryFn = () => api.get("/user/profile");
  const queryKey = ["user-data"];

  return useQuery({ queryFn, queryKey });
};
