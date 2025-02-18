import { serverFetch } from "@/services/serverApi";
import Hero from "@/module/Hero";
import SearchSection from "@/module/SearchSection";
import CTA from "@/module/CTA";
import WhyTorino from "@/module/WhyTorino";
import Features from "@/module/Features";
import ToursList from "@/module/ToursList";

export default async function HomePage({ searchParams }) {
  const tours = await serverFetch("/tour", searchParams, { cache: "no-store" });

  return (
    <>
      <Hero />
      <SearchSection />
      <ToursList toursData={tours} />
      <CTA />
      <WhyTorino />
      <Features />
    </>
  );
}
