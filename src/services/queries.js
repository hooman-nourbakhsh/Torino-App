import { useQuery } from "@tanstack/react-query";
import api from "@/configs/apiConfig";

export const useGetUserData = () => {
  const queryFn = () => api.get("/user/profile");
  const queryKey = ["user-data"];

  return useQuery({ queryFn, queryKey });
};

export const useGetUserTours = () => {
  const queryFn = () => api.get("/user/tours");
  const queryKey = ["user-tours"];

  return useQuery({ queryFn, queryKey });
};

export const useGetUserTransactions = () => {
  const queryFn = () => api.get("/user/transactions");
  const queryKey = ["user-transactions"];

  return useQuery({ queryFn, queryKey });
};
