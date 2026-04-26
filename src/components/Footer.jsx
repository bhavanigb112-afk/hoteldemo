import { Link } from "react-router-dom";

const NAV_LINKS = [
  { label: "Home",         path: "/" },
  { label: "Rooms",        path: "/rooms" },
  { label: "Amenities",    path: "/amenities" },
  { label: "Gallery",      path: "/gallery" },
  { label: "Offers",       path: "/offers" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Contact",      path: "/contact" },
];

export default function Footer() {
  return (
    <footer style={{ background: "#050505", borderTop: "1px solid rgba(212,175,55,0.12)", padding: "60px 24px 40px", textAlign: "center" }}>
      <div style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 28, fontWeight: 300, letterSpacing: 8, color: "var(--gold)", marginBottom: 6 }}>AURUM</div>
      <div style={{ fontSize: "0.65rem", letterSpacing: 6, color: "#555", fontFamily: "'Jost', sans-serif", marginBottom: 36 }}>RESORT & SPA</div>
      <div style={{ width: 40, height: 1, background: "linear-gradient(to right, transparent, var(--gold), transparent)", margin: "0 auto 32px" }} />
      <div style={{ display: "flex", justifyContent: "center", gap: 28, flexWrap: "wrap", marginBottom: 36 }}>
        {NAV_LINKS.map(({ label, path }) => (
          <Link key={path} to={path} style={{
            textDecoration: "none", color: "#555", fontSize: "0.68rem",
            letterSpacing: 2.5, textTransform: "uppercase", fontFamily: "'Jost', sans-serif", transition: "color 0.3s",
          }}
          onMouseOver={e => e.target.style.color = "var(--gold)"}
          onMouseOut={e => e.target.style.color = "#555"}
          >{label}</Link>
        ))}
      </div>
      <div style={{ display: "flex", justifyContent: "center", gap: 20, marginBottom: 36 }}>
        {["Instagram", "Facebook", "Twitter", "LinkedIn"].map(s => (
          <a key={s} href="#" style={{ color: "#444", fontSize: "0.65rem", letterSpacing: 2, textTransform: "uppercase", fontFamily: "'Jost', sans-serif", textDecoration: "none" }}
            onMouseOver={e => e.target.style.color = "var(--gold)"}
            onMouseOut={e => e.target.style.color = "#444"}>{s}</a>
        ))}
      </div>
      <p style={{ color: "#333", fontSize: "0.72rem", letterSpacing: 1 }}>© 2026 Aurum Resort & Spa. All rights reserved.</p>
    </footer>
  );
}
