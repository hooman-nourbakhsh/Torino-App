"use client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { FadeLoader } from "react-spinners";
import { useCheckOutBasket } from "@/services/mutations";
import { useGetBasket, useGetUserData } from "@/services/queries";
import Checkout from "@/template/checkoutPage";

export default function checkoutPage() {
  const router = useRouter();

  const { data: { data: userData } = {}, isLoading } = useGetUserData();
  const { data: { data: basketData } = {}, isPending } = useGetBasket();

  const { mutate } = useCheckOutBasket();

  if (isLoading) return <FadeLoader color="#28a745" speedMultiplier={2} cssOverride={{ margin: "5% auto" }} />;

  const submitHandler = (data) => {
    if (isPending) return;

    if (!data.fullName.trim()) {
      toast.error("نام و نام خانوادگی را وارد کنید");
      return;
    }

    mutate(data, {
      onSuccess: (data) => {
        console.log(data);
        toast.success(data?.data.message);
        router.push(`/payment?status=success&orderId=${basketData.id}`);
      },
      onError: (error) => {
        console.log(error);
        router.push(`/payment?status=reject&orderId=${basketData.id}`);
      },
    });
  };

  return <Checkout userData={userData} basketData={basketData} submitHandler={submitHandler} />;
}
