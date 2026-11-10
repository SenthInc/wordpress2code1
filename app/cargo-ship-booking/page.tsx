import type { Metadata } from "next";
import Link from "next/link";
import { CtaBand, IndustriesGrid, PageHero } from "@/components/Shared";
import { img } from "@/lib/site";

export const metadata: Metadata = {
  title: "Cargo Ship Booking",
  description: "Cargo ship booking for bulk, container, and specialized freight across our global network.",
};

const features = [
  { title: "Global Shipping Network", text: "Extensive coverage to major ports worldwide." },
  { title: "Flexible Freight Options", text: "FCL, LCL, bulk, and breakbulk cargo services." },
  { title: "Competitive Pricing", text: "Cost-effective solutions tailored to your needs." },
  { title: "Reliable & Secure", text: "Safe transport with strict quality control." },
];

export default function CargoShipBookingPage() {
  return (
    <>
      <PageHero
        eyebrow="Cargo Ship Booking"
        title="Reliable & Efficient Freight Shipping Across the Globe"
        text="We provide seamless and efficient cargo ship booking services, ensuring your goods are transported safely and on time. Whether you're shipping bulk cargo, containers, or specialized freight, our global shipping network guarantees cost-effective delivery."
        bg={img.innerBg}
      />

      <section>
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Types of Cargo Shipping</span>
            <h2>Freight for Every Shipment</h2>
          </div>
          <div className="grid">
            <div className="card">
              <img className="card-img" src={img.fcl} alt="Full container load" loading="lazy" />
              <h3>FCL (Full Container Load)</h3>
              <p>A full container dedicated to your cargo.</p>
            </div>
            <div className="card">
              <img className="card-img" src={img.lcl} alt="Less than container load" loading="lazy" />
              <h3>LCL (Less than Container Load)</h3>
              <p>Share container space for smaller shipments.</p>
            </div>
            <div className="card">
              <img className="card-img" src={img.bulk} alt="Bulk and breakbulk cargo" loading="lazy" />
              <h3>Bulk & Breakbulk</h3>
              <p>Loose or palletized cargo that does not fit in containers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Industries We Serve</span>
            <h2>Freight Solutions by Industry</h2>
          </div>
          <IndustriesGrid />
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Why Choose Us</span>
            <h2>Why Ship With Atlantic Sealine</h2>
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
              Book Your Cargo Space Now
            </Link>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
