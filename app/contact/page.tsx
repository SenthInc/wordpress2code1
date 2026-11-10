import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";
import { OfficeList, PageHero } from "@/components/Shared";
import { img } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description: "Contact Atlantic Sealine for bookings, inquiries, and logistics quotes.",
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact Us"
        title="Get In Touch"
        text="Have questions about our cargo ship booking, container services, or logistics solutions? Our team is here to help. Contact us today for inquiries, bookings, or a custom shipping quote."
        bg={img.innerBg}
      />

      <section>
        <div className="container">
          <ContactForm />
        </div>
      </section>

      <section className="section-light">
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Our Offices</span>
            <h2>Check out our locations</h2>
          </div>
          <OfficeList />
        </div>
      </section>
    </>
  );
}
