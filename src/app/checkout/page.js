"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { FadeLoader } from "react-spinners";
import { useCheckOutBasket } from "@/services/mutations";
import { useGetBasket, useGetUserData } from "@/services/queries";
import Checkout from "@/template/checkoutPage";

export default function CheckoutPage() {
  const router = useRouter();

  const { data: userData } = useGetUserData();
  const { data: basketData, isPending } = useGetBasket();
  const { mutate } = useCheckOutBasket();

  if (isPending) return <FadeLoader color="#28a745" speedMultiplier={2} cssOverride={{ margin: "5% auto" }} />;

  if (!basketData?.data) {
    return (
      <div className="emptyCart">
        <Image src="/images/empty-cart.webp" alt="empty-cart" width={400} height={250} priority />
        <Link href="/">بازگشت به صفحه اصلی</Link>
      </div>
    );
  }

  const submitHandler = (formData) => {
    if (isPending) return;

    if (!formData.fullName?.trim()) {
      toast.error("نام و نام خانوادگی را وارد کنید");
      return;
    }

    mutate(formData, {
      onSuccess: (data) => {
        toast.success(data?.data.message);
        router.push(`/payment?status=success&orderId=${basketData?.data.id}`);
      },
      onError: (error) => {
        console.log(error);
        router.push(`/payment?status=reject&orderId=${basketData?.data.id}`);
      },
    });
  };

  return <Checkout userData={userData?.data} basketData={basketData?.data} submitHandler={submitHandler} />;
}
