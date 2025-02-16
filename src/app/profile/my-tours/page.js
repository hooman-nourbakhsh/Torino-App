"use client";
import { useGetUserTours } from "@/services/queries";
import Loading from "@/app/profile/loading";
import Error from "@/app/error";
import NothingFound from "@/element/NothingFound";
import MyTours from "@/template/profilePage/MyTours";

export default function MyToursPage() {
  const { data: { data } = {}, isLoading, error, refetch } = useGetUserTours();

  if (isLoading) return <Loading />;

  if (error) return <Error reset={refetch} />;

  if (!data || data.length === 0) return <NothingFound />;

  return <MyTours myTours={data} />;
}
