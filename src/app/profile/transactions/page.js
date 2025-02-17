"use client";

import { useGetUserTransactions } from "@/services/queries";
import Loading from "@/app/profile/loading";
import Error from "@/app/error";
import NothingFound from "@/element/NothingFound";
import Transactions from "@/template/profilePage/Transactions";

export default function TransactionsPage() {
  const { data: { data } = {}, isLoading, error, refetch } = useGetUserTransactions();

  if (isLoading) return <Loading />;

  if (error) return <Error reset={refetch} />;

  if (!data || data.length === 0) return <NothingFound />;

  return <Transactions transactionsData={data} />;
}
