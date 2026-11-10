import type { Metadata } from "next";
import { CtaBand, FaqList, IndustriesGrid, PageHero, Photo } from "@/components/Shared";
import { img } from "@/lib/site";

export const metadata: Metadata = {
  title: "Services",
  description: "Container booking, cargo freight, and specialist logistics services from Atlantic Sealine.",
};

export default function ServicePage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Our Logistics Services"
        text="Explore our comprehensive logistics solutions, from specialized container services to reliable cargo ship freight booking. We ensure safe, efficient, and timely delivery."
        bg={img.innerBg}
      />

      <section>
        <div className="container split">
          <div>
            <span className="eyebrow">What We Do</span>
            <h2>Specialist Logistics Services</h2>
            <p>
              At Atlantic Sealine, we provide expert logistics solutions tailored to
              meet your shipping needs. From container booking to cargo freight
              services, we ensure your goods move safely and on schedule.
            </p>
          </div>
          <Photo src={img.globalFreight} alt="Global freight solutions" />
        </div>
      </section>

      <section className="section-light">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Industries We Serve</span>
            <h2>Built for Your Cargo</h2>
          </div>
          <IndustriesGrid />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Popular Questions</span>
            <h2>Have Questions?</h2>
          </div>
          <FaqList />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
