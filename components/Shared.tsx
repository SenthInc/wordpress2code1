import Link from "next/link";
import { faqs, img, industries, offices, stats } from "@/lib/site";

export function PageHero({
  eyebrow,
  title,
  text,
  bg,
}: {
  eyebrow?: string;
  title: string;
  text?: string;
  bg?: string;
}) {
  return (
    <section
      className={`page-hero${bg ? " has-bg" : ""}`}
      style={bg ? { backgroundImage: `url(${bg})` } : undefined}
    >
      <div className="container">
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {text && <p>{text}</p>}
      </div>
    </section>
  );
}

export function IndustriesGrid() {
  return (
    <div className="grid">
      {industries.map((item) => (
        <div className="card" key={item.title}>
          <img className="icon-img" src={item.image} alt="" loading="lazy" />
          <h3>{item.title}</h3>
          <p>{item.text}</p>
        </div>
      ))}
    </div>
  );
}

export function Photo({ src, alt = "" }: { src: string; alt?: string }) {
  // Plain img keeps the static export simple; alt is empty when decorative.
  return <img className="media-img" src={src} alt={alt} loading="lazy" />;
}

export function StatsBand() {
  return (
    <section className="stats">
      <div className="container grid">
        {stats.map((s) => (
          <div key={s.label}>
            <div className="stat-value">{s.value}</div>
            <p>{s.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function OfficeList() {
  return (
    <div className="grid">
      {offices.map((o) => (
        <div className="office" key={o.country}>
          <img className="office-img" src={o.image} alt="" loading="lazy" />
          <h3>{o.country}{o.headquarters ? " (Headquarters)" : ""}</h3>
          <p>{o.address}</p>
          <p>
            <a href={`tel:${o.phone.replace(/\s/g, "")}`}>{o.phone}</a>
          </p>
        </div>
      ))}
    </div>
  );
}

export function FaqList() {
  return (
    <div className="faq-list">
      {faqs.map((f) => (
        <details className="faq-item" key={f.q}>
          <summary>{f.q}</summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}

export function CtaBand({
  title = "Start Your Journey with Atlantic Sealine",
  text = "Ready to simplify your logistics? Get a personalized quote tailored to your shipping needs.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section
      className="cta has-bg"
      style={{ backgroundImage: `url(${img.ctaBg})` }}
    >
      <div className="container">
        <h2>{title}</h2>
        <p>{text}</p>
        <Link href="/contact" className="btn btn-accent">
          Get a Quote
        </Link>
      </div>
    </section>
  );
}
