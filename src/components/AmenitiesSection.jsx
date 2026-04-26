import { AMENITIES } from "../data";
import { SectionHeader } from "./UI";

export default function AmenitiesSection() {
  return (
    <section id="Amenities" style={{ background: "#0d0d0d" }}>
      <SectionHeader label="Facilities" title="World-Class Amenities" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
          gap: 20,
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        {AMENITIES.map((a, i) => (
          <AmenityCard key={a.name} amenity={a} index={i} />
        ))}
      </div>
    </section>
  );
}

function AmenityCard({ amenity, index }) {
  return (
    <div
      className="card fade-in"
      style={{
        padding: 36,
        textAlign: "center",
        cursor: "default",
        animationDelay: `${index * 0.07}s`,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Subtle corner accent */}
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: 40,
          height: 40,
          background:
            "linear-gradient(135deg, transparent 50%, rgba(212,175,55,0.08) 50%)",
        }}
      />

      <div style={{ fontSize: 40, marginBottom: 18 }}>{amenity.icon}</div>
      <h3
        style={{
          fontSize: "1.15rem",
          fontWeight: 400,
          color: "var(--gold)",
          marginBottom: 12,
          fontFamily: "'Cormorant Garamond', serif",
          letterSpacing: 0.5,
        }}
      >
        {amenity.name}
      </h3>
      <p
        style={{
          fontSize: "0.82rem",
          lineHeight: 1.8,
          color: "#777",
          fontFamily: "'Jost', sans-serif",
        }}
      >
        {amenity.desc}
      </p>
    </div>
  );
}
