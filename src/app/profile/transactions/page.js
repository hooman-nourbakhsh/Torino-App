"use client";
import { FadeLoader } from "react-spinners";
import { useGetUserTransactions } from "@/services/queries";
import Transactions from "@/template/profilePage/Transactions";

export default function TransactionsPage() {
  const { data: { data } = {}, isLoading, refetch } = useGetUserTransactions();

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
    
  return <Transactions transactionsData={data} />;
}
