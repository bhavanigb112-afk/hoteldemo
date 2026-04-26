import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { useScrolled } from "../hooks";

const NAV_LINKS = [
  { label: "Home",         path: "/" },
  { label: "Rooms",        path: "/rooms" },
  { label: "Amenities",    path: "/amenities" },
  { label: "Gallery",      path: "/gallery" },
  { label: "Offers",       path: "/offers" },
  { label: "Testimonials", path: "/testimonials" },
  { label: "Contact",      path: "/contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const scrolled = useScrolled(60);
  const location = useLocation();

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? "rgba(10,10,10,0.97)" : "transparent",
        backdropFilter: scrolled ? "blur(16px)" : "none",
        borderBottom: scrolled ? "1px solid rgba(212,175,55,0.12)" : "none",
        transition: "all 0.4s ease",
        padding: "0 48px",
        display: "flex", alignItems: "center", justifyContent: "space-between",
        height: "var(--nav-height)",
      }}>
        {/* Logo */}
        <Link to="/" style={{ textDecoration: "none", display: "flex", alignItems: "baseline", gap: 8 }}>
          <span style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: 26, fontWeight: 300, letterSpacing: 6, color: "var(--gold)" }}>AURUM</span>
          <span style={{ color: "#fff", fontSize: 10, letterSpacing: 4, fontFamily: "'Jost', sans-serif", fontWeight: 300, opacity: 0.7 }}>RESORT</span>
        </Link>

        {/* Desktop Nav */}
        <div style={{ display: "flex", gap: 32, alignItems: "center" }} className="desktop-nav">
          {NAV_LINKS.map(({ label, path }) => {
            const active = location.pathname === path;
            return (
              <Link key={path} to={path} onClick={() => setMenuOpen(false)} style={{
                textDecoration: "none",
                color: active ? "var(--gold)" : "#999",
                fontSize: "0.72rem", letterSpacing: 2.5, textTransform: "uppercase",
                fontFamily: "'Jost', sans-serif", fontWeight: 400,
                borderBottom: active ? "1px solid var(--gold)" : "1px solid transparent",
                paddingBottom: 2, transition: "color 0.3s, border-color 0.3s",
              }}
              onMouseOver={e => e.currentTarget.style.color = "var(--gold)"}
              onMouseOut={e => e.currentTarget.style.color = active ? "var(--gold)" : "#999"}
              >{label}</Link>
            );
          })}
        </div>

        {/* Book CTA */}
        <Link to="/book" className="btn-gold" style={{ fontSize: "0.7rem", padding: "10px 24px", textDecoration: "none" }}>
          Book Now
        </Link>

        {/* Hamburger */}
        <button onClick={() => setMenuOpen(!menuOpen)} className="hamburger"
          style={{ display: "none", background: "none", border: "none", color: "var(--gold)", fontSize: 22, cursor: "pointer", padding: 4 }}
          aria-label="Toggle menu">
          {menuOpen ? "✕" : "☰"}
        </button>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div style={{
          position: "fixed", top: "var(--nav-height)", left: 0, right: 0,
          background: "rgba(10,10,10,0.99)", zIndex: 999,
          padding: "32px 0", display: "flex", flexDirection: "column", alignItems: "center", gap: 22,
          borderBottom: "1px solid rgba(212,175,55,0.12)",
        }}>
          {NAV_LINKS.map(({ label, path }) => (
            <Link key={path} to={path} onClick={() => setMenuOpen(false)} style={{
              textDecoration: "none", color: location.pathname === path ? "var(--gold)" : "#aaa",
              fontSize: "0.85rem", letterSpacing: 3, textTransform: "uppercase", fontFamily: "'Jost', sans-serif",
            }}>{label}</Link>
          ))}
          <Link to="/book" className="btn-gold" style={{ marginTop: 8, textDecoration: "none" }} onClick={() => setMenuOpen(false)}>
            Reserve Now
          </Link>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .hamburger { display: block !important; }
          nav > a.btn-gold { display: none; }
        }
      `}</style>
    </>
  );
}
