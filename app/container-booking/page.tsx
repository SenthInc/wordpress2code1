import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, IndustriesGrid, PageHero } from "@/components/Shared";
import { img } from "@/lib/site";

export const metadata: Metadata = {
  title: "Container Booking",
  description: "Flexible and efficient container booking for standard, temperature-controlled, and tank containers.",
};

const features = [
  { title: "Global Network", text: "Reliable shipping routes connecting key international ports." },
  { title: "Flexible Options", text: "Choose from various container sizes and types." },
  { title: "Real-Time Tracking", text: "Stay updated on your cargo's journey." },
  { title: "Affordable Rates", text: "Cost-effective solutions tailored to your needs." },
];

export default function ContainerBookingPage() {
  return (
    <>
      <PageHero
        eyebrow="Container Booking"
        title="Seamless & Reliable Container Shipping Solutions"
        text="We provide flexible and efficient container booking services to ensure your cargo is transported safely across the globe. Whether you need a standard container, a temperature-controlled unit, or a specialized tank for liquids, we have you covered."
        bg={img.innerBg}
      />

      <section>
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Types of Container</span>
            <h2>Choose the Right Container</h2>
          </div>
          <div className="grid">
            <div className="card">
              <img className="card-img" src={img.standardContainer} alt="Standard container" loading="lazy" />
              <h3>Standard Container</h3>
              <p>General cargo in dry containers for everyday shipments.</p>
            </div>
            <div className="card">
              <img className="card-img" src={img.reefer} alt="Temperature-controlled container" loading="lazy" />
              <h3>Temperature-Controlled</h3>
              <p>Reefer units for perishable goods that need steady temperatures.</p>
            </div>
            <div className="card">
              <img className="card-img" src={img.tankContainer} alt="Specialized tank container" loading="lazy" />
              <h3>Specialized Tank</h3>
              <p>Tank containers for liquid cargo.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Industries We Serve</span>
            <h2>Container Solutions by Industry</h2>
          </div>
          <IndustriesGrid />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Why Choose Us</span>
            <h2>Why Ship With Atlantic Sealine</h2>
            <p>
              We ensure your cargo reaches its destination on time and in good
              condition.
            </p>
          </div>
          <div className="grid">
            {features.map((f) => (
              <div className="card" key={f.title}>
                <div className="icon" aria-hidden="true" />
                <h3>{f.title}</h3>
                <p>{f.text}</p>
              </div>
            ))}
          </div>
          <div className="btn-row" style={{ justifyContent: "center", marginTop: 40 }}>
            <Link href="/contact" className="btn btn-primary">
              Book Your Container Now
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
