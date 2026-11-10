import type { Metadata } from "next";
import { CtaBand, PageHero, Photo, StatsBand } from "@/components/Shared";
import { img } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description: "Learn about Atlantic Sealine, our values, and the logistics services we deliver.",
};

const values = [
  { title: "Entrepreneur Spirit", text: "We embrace innovation and creative thinking, empowering our team to find solutions that drive growth and success." },
  { title: "Collaboration", text: "Working together with clients and partners is at the heart of everything we do, ensuring mutual success through shared goals and efforts." },
  { title: "Commitment", text: "We are dedicated to providing reliable and timely logistics solutions, ensuring the highest level of service for every client." },
  { title: "Integrity & Respect", text: "Honesty, transparency, and respect for all are the foundation of our business relationships and how we conduct our operations." },
];

const strengths = [
  { title: "Safe & Secure", text: "We guarantee that your cargo is transported safely. From cargo ships to containers, we apply best practices so your goods arrive in perfect condition." },
  { title: "Cost-Effective Operation", text: "Affordable logistics solutions without compromising on quality." },
  { title: "Wide Range of Equipment", text: "Flexible container options to meet all your shipping needs." },
  { title: "Logistics Warehousing", text: "Strategically located warehouses for flexible storage and faster access to your goods." },
];

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Atlantic Sealine"
        text="With over 25 years of experience, we're your trusted partner in global logistics, delivering efficient and reliable solutions across the world."
        bg={img.innerBg}
      />

      <section>
        <div className="container split">
          <Photo src={img.about[1]} alt="Atlantic Sealine cargo operations" />
          <div>
            <span className="eyebrow">About Us</span>
            <h2>Built on Experience</h2>
            <p>
              With years of expertise in cargo shipping and container solutions,
              Atlantic Sealine is your trusted partner for efficient, reliable, and
              seamless logistics. We are committed to delivering excellence and
              driving your success across the seas.
            </p>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Our Strengths</span>
            <h2>Why Our Clients Trust Us</h2>
          </div>
          <div className="grid">
            {strengths.map((s) => (
              <div className="card" key={s.title}>
                <div className="icon" aria-hidden="true" />
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <StatsBand />

      <section>
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Company Values</span>
            <h2>What Drives Us</h2>
            <p>
              Our core principles guide us in delivering exceptional service and
              building lasting partnerships.
            </p>
          </div>
          <div className="grid">
            {values.map((v) => (
              <div className="card" key={v.title}>
                <h3>{v.title}</h3>
                <p>{v.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="container split">
          <div>
            <span className="eyebrow">We Are Logistics</span>
            <h2>Your Guide to Global Logistics</h2>
            <p>
              At Atlantic Sealine, we specialize in simplifying the complexities of
              global logistics. Our services ensure that your cargo, no matter the
              size or destination, is handled with precision and care.
            </p>
          </div>
          <div className="grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
            <div>
              <h3>Real-Time Tracking</h3>
              <p>Live tracking of your shipments for full visibility at every step.</p>
            </div>
            <div>
              <h3>24/7 Online Support</h3>
              <p>Our support team is available anytime to help with your logistics needs.</p>
            </div>
            <div>
              <h3>Multi Warehouse</h3>
              <p>Flexible storage and faster access to your goods.</p>
            </div>
            <div>
              <h3>Cross-Docking</h3>
              <p>Reduce transit times and costs with efficient cross-docking.</p>
            </div>
          </div>
        </div>
      </section>

      <CtaBand />
    </>
  );
}
