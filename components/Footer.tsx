import Link from "next/link";
import { nav, offices, site } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div>
            <h3>{site.name}</h3>
            <p>
              Cargo ship bookings, container management, and end-to-end logistics
              solutions tailored to your needs.
            </p>
            <p>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </p>
          </div>

          <div>
            <h3>Quick Links</h3>
            <ul>
              {nav.map((item) => (
                <li key={item.href}>
                  <Link href={item.href}>{item.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Offices</h3>
            <ul>
              {offices.map((o) => (
                <li key={o.country}>
                  <strong>{o.country}:</strong> {o.phone}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3>Address</h3>
            <ul>
              {offices.map((o) => (
                <li key={o.country}>{o.address}</li>
              ))}
            </ul>
          </div>
        </div>

        <div className="footer-bottom">
          &copy; {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
