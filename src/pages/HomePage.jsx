import { useNavigate, Link } from "react-router-dom";
import HeroSection from "../components/HeroSection";

const HIGHLIGHTS = [
  { label: "Rooms & Suites", desc: "Six distinct retreats crafted for the extraordinary.", path: "/rooms", img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&q=80" },
  { label: "Amenities",      desc: "World-class facilities open around the clock.",         path: "/amenities", img: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=600&q=80" },
  { label: "Gallery",        desc: "Moments captured — a glimpse into Aurum life.",         path: "/gallery", img: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?w=600&q=80" },
  { label: "Offers",         desc: "Exclusive packages at exceptional value.",               path: "/offers", img: "https://images.unsplash.com/photo-1551882547-ff40c63fe2e6?w=600&q=80" },
  { label: "Testimonials",   desc: "Stories from guests who've lived the experience.",      path: "/testimonials", img: "https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=600&q=80" },
  { label: "Contact",        desc: "Reach our concierge team, any hour of the day.",        path: "/contact", img: "https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=600&q=80" },
];

export default function HomePage() {
  return (
    <>
      <HeroSection />

      {/* Explore section */}
      <section style={{ background: "var(--dark2)", padding: "100px 24px", textAlign: "center" }}>
        <span className="section-label">Explore Aurum</span>
        <h2 className="section-title">Everything You Need</h2>
        <div className="divider" />
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20, maxWidth: 1100, margin: "0 auto" }}>
          {HIGHLIGHTS.map(({ label, desc, path, img }) => (
            <Link key={path} to={path} style={{ textDecoration: "none" }}>
              <div className="card" style={{ overflow: "hidden", cursor: "pointer" }}>
                <div style={{ height: 180, overflow: "hidden", position: "relative" }}>
                  <img src={img} alt={label} style={{ width: "100%", height: "100%", objectFit: "cover", transition: "transform 0.6s" }}
                    onMouseOver={e => e.target.style.transform = "scale(1.07)"}
                    onMouseOut={e => e.target.style.transform = "scale(1)"} />
                  <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.6), transparent)" }} />
                </div>
                <div style={{ padding: "20px 24px", textAlign: "left" }}>
                  <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.3rem", fontWeight: 400, color: "var(--gold)", marginBottom: 8 }}>{label}</h3>
                  <p style={{ fontSize: "0.82rem", color: "#777", lineHeight: 1.6, marginBottom: 14 }}>{desc}</p>
                  <span style={{ fontSize: "0.68rem", letterSpacing: 3, color: "var(--gold)", textTransform: "uppercase", fontFamily: "'Jost', sans-serif" }}>Explore →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA strip */}
      <div style={{ background: "#050505", borderTop: "1px solid rgba(212,175,55,0.1)", borderBottom: "1px solid rgba(212,175,55,0.1)", padding: "60px 24px", textAlign: "center" }}>
        <span className="section-label">Limited Availability</span>
        <h2 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "clamp(1.8rem, 4vw, 3rem)", fontWeight: 300, letterSpacing: 2, marginBottom: 24, color: "var(--light)" }}>
          Reserve Your Stay Today
        </h2>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Link to="/rooms" className="btn-outline" style={{ textDecoration: "none" }}>View Rooms</Link>
          <Link to="/book" className="btn-gold" style={{ textDecoration: "none" }}>Book Now</Link>
        </div>
      </div>
    </>
  );
}
