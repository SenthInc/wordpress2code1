// Shared site data taken from the WordPress export (atlanticsealine.com).

export const site = {
  name: "Atlantic Sealine",
  tagline: "The Best Shipping Provider Company",
  url: "https://atlanticsealine.com",
  email: "info@atlanticsealine.com",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/service", label: "Services" },
  { href: "/container-booking", label: "Container Booking" },
  { href: "/cargo-ship-booking", label: "Cargo Ship Booking" },
  { href: "/location", label: "Location" },
  { href: "/faq", label: "FAQ" },
  { href: "/contact", label: "Contact" },
];

// Image files are in public/uploads (downloaded from the WordPress export).
export const img = {
  heroBg: "/uploads/2025/01/Hero-Image-1.jpg",
  innerBg: "/uploads/2025/01/Rectangle-4834-1.jpg",
  ctaBg: "/uploads/2025/01/CTA-banner.jpg",
  about: ["/uploads/2025/01/About-1.jpg", "/uploads/2025/01/About-2.jpg", "/uploads/2025/01/About-3.jpg"],
  whyChoose: "/uploads/2025/01/Why-Choose-us-1.jpg",
  dropShipping: "/uploads/2025/01/drop-shipping.jpg",
  crossDocking: "/uploads/2025/01/Cross-Docking.jpg",
  multiWarehouse: "/uploads/2025/01/multi-warehouse.jpg",
  canada: "/uploads/2025/02/3kshami-building-now-jpg.jpg",
  srilanka: "/uploads/2025/01/Srilanka.png",
  mexico: "/uploads/2025/02/mexico.png",
  standardContainer: "/uploads/2025/01/standard-container-1.jpg",
  reefer: "/uploads/2025/01/Heated-Cooled-Containers.jpg",
  tankContainer: "/uploads/2025/01/chemical-container.png",
  fcl: "/uploads/2025/01/fcl.jpg",
  lcl: "/uploads/2025/01/LCL.jpg",
  bulk: "/uploads/2025/01/Bulk-Breakbulk-Cargo.png",
  globalFreight: "/uploads/2025/01/global-freight-solution.png",
  worldwide: "/uploads/2025/01/worldwide.png",
};

export const offices = [
  {
    country: "Canada",
    headquarters: true,
    address: "306-2225 Markham Road, Scarborough, Ontario, Canada",
    phone: "+1 647 409 8264",
    image: img.canada,
  },
  {
    country: "Sri Lanka",
    address: "324G 35/6, 9th Lane, Pubudugama, Kandana, Sri Lanka",
    phone: "+94 78 581 2143",
    image: img.srilanka,
  },
  {
    country: "Mexico",
    address: "Mexico S de RL CV, Av FC de Cuernavaca 214-301, Col Polanco III Sección, Cd de México 11540, Mexico",
    phone: "+52 55 8623 5611",
    image: img.mexico,
  },
];

export const industries = [
  { title: "Frozen Seafood", text: "Specialized cold-chain logistics to maintain freshness during transport.", image: "/uploads/2025/01/Seafood.png" },
  { title: "Spices", text: "Secure and climate-controlled shipping to preserve quality and aroma.", image: "/uploads/2025/01/Spices.png" },
  { title: "Automotive", text: "Reliable shipping solutions for vehicles, parts, and accessories.", image: "/uploads/2025/01/Automotive.png" },
  { title: "Clothes", text: "Safe and timely delivery of garments and textiles to global markets.", image: "/uploads/2025/01/clothes-1.png" },
  { title: "Coconut", text: "Efficient handling and transportation for coconut and related products.", image: "/uploads/2025/01/Coconut.png" },
  { title: "Dry Seafood", text: "Optimal storage and shipping solutions for dried seafood exports.", image: "/uploads/2025/01/Dry-Seafood.png" },
];

export const stats = [
  { value: "25+", label: "Years of Experience" },
  { value: "60+", label: "Countries Covered" },
  { value: "25,000+", label: "Goods Delivered" },
  { value: "110+", label: "Worldwide Clients" },
];

// The FAQ questions are not in the WordPress export (they were likely stored
// by a plugin). These placeholders must be replaced with the real questions.
export const faqs = [
  {
    q: "[Placeholder] What shipping services do you offer?",
    a: "[Placeholder answer. Replace with the real answer from the current site.]",
  },
  {
    q: "[Placeholder] How do I book a container or cargo space?",
    a: "[Placeholder answer. Replace with the real answer from the current site.]",
  },
  {
    q: "[Placeholder] Can I track my shipment?",
    a: "[Placeholder answer. Replace with the real answer from the current site.]",
  },
];
