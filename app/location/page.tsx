import type { Metadata } from "next";
import { CtaBand, OfficeList, PageHero } from "@/components/Shared";
import { img } from "@/lib/site";

export const metadata: Metadata = {
  title: "Location",
  description: "Atlantic Sealine offices in Canada, Sri Lanka, and Mexico.",
};

export default function LocationPage() {
  return (
    <>
      <PageHero
        eyebrow="Our Location"
        title="Our Location"
        text="With over 25 years of experience, Atlantic Sealine proudly operates from Canada, Sri Lanka, and Mexico, providing efficient and reliable logistics solutions to businesses worldwide."
        bg={img.innerBg}
      />

      <section>
        <div className="container">
          <div className="section-title">
            <span className="eyebrow">Our Offices</span>
            <h2>Find Us</h2>
          </div>
          <OfficeList />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
