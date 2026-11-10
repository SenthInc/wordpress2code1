import Link from "next/link";
import { CtaBand, FaqList, IndustriesGrid, OfficeList, Photo, StatsBand } from "@/components/Shared";
import { img } from "@/lib/site";

export default function HomePage() {
  return (
    <>
      <section
        className="hero has-bg"
        style={{ backgroundImage: `url(${img.heroBg})` }}
      >
        <div className="container">
          <span className="eyebrow">Atlantic Sealine</span>
          <h1>Seamless Cargo Shipping Solutions Across the Atlantic</h1>
          <p>
            At Atlantic Sealine, we specialize in cargo ship bookings, container
            management, and end-to-end logistics solutions tailored to your needs.
          </p>
          <div className="btn-row">
            <Link href="/contact" className="btn btn-accent">
              Contact Us
            </Link>
            <Link href="/cargo-ship-booking" className="btn btn-outline" style={{ color: "#fff", borderColor: "#fff" }}>
              Book Cargo Space
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="grid">
            <div className="card">
              <img className="card-img" src={img.dropShipping} alt="Drop shipping" loading="lazy" />
              <h3>Drop Shipping</h3>
              <p>
                Streamline your business with our hassle-free drop shipping services.
                We handle the logistics, so you can focus on growing your brand.
              </p>
            </div>
            <div className="card">
              <img className="card-img" src={img.crossDocking} alt="Cross-docking" loading="lazy" />
              <h3>Cross-Docking</h3>
              <p>
                Efficient cargo docking solutions to ensure smooth loading, unloading,
                and transfer of goods with precision and care.
              </p>
            </div>
            <div className="card">
              <img className="card-img" src={img.multiWarehouse} alt="Multi-warehouse network" loading="lazy" />
              <h3>Multi Warehouse</h3>
              <p>
                Optimize your supply chain with our multi-warehouse network, providing
                secure storage and faster delivery across regions.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-light">
        <div className="container split">
          <Photo src={img.about[0]} alt="Atlantic Sealine cargo operations" />
          <div>
            <span className="eyebrow">About Us</span>
            <h2>Your Trusted Partner in Cargo Shipping</h2>
            <p>
              With years of expertise in cargo shipping and container solutions,
              Atlantic Sealine is your trusted partner for efficient, reliable, and
              seamless logistics.
            </p>
            <Link href="/about" className="btn btn-primary">
              Read More
            </Link>
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">What We Do</span>
            <h2>Specialist Logistics Services</h2>
            <p>
              From container booking to cargo freight services, we provide expert
              logistics solutions tailored to your shipping needs.
            </p>
          </div>
          <IndustriesGrid />
        </div>
      </section>

      <section className="section-light">
        <div className="container split">
          <div>
            <span className="eyebrow">Why Choose Us</span>
            <h2>Why Choose Atlantic Sealine?</h2>
            <p>
              We prioritize efficiency, reliability, and customer satisfaction. Our
              expertise in logistics and dedication to seamless shipping make us the
              preferred choice for businesses worldwide.
            </p>
            <div className="grid" style={{ gridTemplateColumns: "1fr 1fr" }}>
              <div>
                <h3>Trusted Expertise</h3>
                <p>Backed by years of experience in shipping and logistics.</p>
              </div>
              <div>
                <h3>End-to-End Support</h3>
                <p>From booking to delivery, a smooth and hassle-free experience.</p>
              </div>
            </div>
          </div>
          <Photo src={img.whyChoose} alt="" />
        </div>
      </section>

      <StatsBand />

      <section>
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Global Network</span>
            <h2>Connecting the World, One Shipment at a Time</h2>
          </div>
          <OfficeList />
        </div>
      </section>

      <section className="section-light">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Popular Questions</span>
            <h2>Have Questions?</h2>
            <p>
              Got questions? We&apos;ve got answers. If you need more information,
              feel free to get in touch with us!
            </p>
          </div>
          <FaqList />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
