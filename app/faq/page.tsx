import type { Metadata } from "next";
import { CtaBand, FaqList, PageHero } from "@/components/Shared";

export const metadata: Metadata = {
  title: "FAQ",
  description: "Answers to common questions about Atlantic Sealine's shipping and logistics services.",
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        eyebrow="Help & FAQ"
        title="Have Questions?"
        text="Got questions? We've got answers. Here are some of the most common queries about our services. If you need more information, feel free to get in touch with us!"
      />

      <section>
        <div className="container">
          <FaqList />
        </div>
      </section>

      <CtaBand title="Still have questions?" text="Contact our team and we will be happy to help." />
    </>
  );
}
