import Link from "next/link";
import { nav, site } from "@/lib/site";

export default function Header() {
  return (
    <header className="site-header">
      <div className="container header-inner">
        <Link href="/" className="logo">
          Atlantic <span>Sealine</span>
        </Link>

        <nav className="main-nav" aria-label="Main">
          {nav.map((item) => (
            <Link key={item.href} href={item.href}>
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn btn-accent">
            Get A Quote
          </Link>
        </nav>

        {/* Mobile menu: a native details element, so it needs no client JS */}
        <details className="nav-toggle">
          <summary aria-label={`Open menu for ${site.name}`}>Menu</summary>
          <nav className="mobile-menu" aria-label="Mobile">
            {nav.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </nav>
        </details>
      </div>
    </header>
  );
}
