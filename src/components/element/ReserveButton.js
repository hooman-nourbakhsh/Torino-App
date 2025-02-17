"use client";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";
import { useAddToBasket } from "@/services/mutations";

export default function ReserveButton({ tourId }) {
  const router = useRouter();
  const { mutate, isPending } = useAddToBasket();

  const cartHandler = () => {
    if (isPending) return;

    mutate(tourId, {
      onSuccess: (data) => {
        toast.success(data?.data.message);
        router.push("/checkout");
      },
      onError(error) {
        if (error?.status === 401 || error?.status === 403) {
          router.push("/login");
          toast.error("برای رزرو و خرید باید وارد شوید");
        } else {
          console.log(error);
          toast.error(error?.data.message);
        }
      },
    });
  };
  return <button onClick={cartHandler}>رزرو و خرید</button>;
}
