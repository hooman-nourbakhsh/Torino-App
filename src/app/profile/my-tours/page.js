"use client";
import { FadeLoader } from "react-spinners";
import { useGetUserTours } from "@/services/queries";
import MyTours from "@/template/profilePage/MyTours";

export default function MyToursPage() {
  const { data: { data } = {}, isLoading, refetch } = useGetUserTours();

  if (isLoading) return <FadeLoader color="#28a745" speedMultiplier={2} cssOverride={{ margin: "5% auto" }} />;

  if (!data)
    return (
      <div className="errorContainer">
        <p className="errorText">مشکلی وجود دارد، لطفاً دوباره تلاش کنید.</p>
        <button onClick={() => refetch()} className="retryButton">
          بارگیری مجدد
        </button>
      </div>
    );
    
  return <MyTours myTours={data} />;
}
