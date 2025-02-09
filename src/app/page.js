import Hero from "@/module/Hero";
import CTA from "@/module/CTA";
import WhyTorino from "@/module/WhyTorino";
import Features from "@/module/Features";
import ToursList from "@/module/ToursList";
import { serverFetch } from "@/services/serverApi";

export default async function HomePage({ searchParams }) {
  const tours = await serverFetch("/tour", searchParams, { cache: "no-store" });

  return (
    <>
      <Hero />
      <ToursList toursData={tours} />
      <CTA />
      <WhyTorino />
      <Features />
    </>
  );
}
