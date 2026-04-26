import { AMENITIES } from "../data";
import PageHero from "../components/PageHero";

export default function AmenitiesPage() {
  return (
    <>
      <PageHero
        label="Facilities"
        title="World-Class Amenities"
        subtitle="Every indulgence you could desire, and a few you haven't imagined yet."
        video="https://videos.pexels.com/video-files/3738673/3738673-uhd_2560_1440_25fps.mp4"
        img="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?w=1600&q=80"
      />
      <section style={{ background: "#0d0d0d", padding: "80px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20, maxWidth: 1100, margin: "0 auto" }}>
          {AMENITIES.map((a, i) => (
            <div key={a.name} className="card fade-in" style={{ padding: 40, textAlign: "center", animationDelay: `${i * 0.07}s` }}>
              <div style={{ fontSize: 44, marginBottom: 20 }}>{a.icon}</div>
              <h3 style={{ fontSize: "1.25rem", fontWeight: 400, color: "var(--gold)", marginBottom: 12, fontFamily: "'Cormorant Garamond', serif" }}>{a.name}</h3>
              <p style={{ fontSize: "0.85rem", lineHeight: 1.8, color: "#777" }}>{a.desc}</p>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
