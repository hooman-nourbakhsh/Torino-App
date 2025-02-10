import { serverFetch } from "@/services/serverApi";
import TourDetailsPage from "@/template/tourDetailsPage";

export default async function TourDetails({ params }) {
  const tourData = await serverFetch(`/tour/${params.id}`, null, { cache: "no-store" });
  return <TourDetailsPage tourData={tourData} />;
}
