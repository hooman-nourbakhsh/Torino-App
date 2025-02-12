import { serverFetch } from "@/services/serverApi";
import TourDetails from "@/template/tourDetailsPage";

export default async function TourDetailsPage({ params }) {
  const tourData = await serverFetch(`/tour/${params.id}`, null, { cache: "no-store" });
  return <TourDetails tourData={tourData} />;
}
