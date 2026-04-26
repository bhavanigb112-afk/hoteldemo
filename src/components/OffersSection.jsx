import { useNavigate } from "react-router-dom";
import { OFFERS } from "../data";
import { SectionHeader, Countdown } from "./UI";

export default function OffersSection() {
  const navigate = useNavigate();

  return (
    <section id="Offers" style={{ background: "#0d0d0d" }}>
      <SectionHeader label="Exclusive" title="Offers & Packages" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
          gap: 28,
          maxWidth: 1020,
          margin: "0 auto",
        }}
      >
        {OFFERS.map((offer, i) => (
          <OfferCard
            key={offer.title}
            offer={offer}
            featured={i === 0}
            onClaim={() => navigate("/book", { state: { offer: offer.title } })}
          />
        ))}
      </div>
    </section>
  );
}

function OfferCard({ offer, featured, onClaim }) {
  return (
    <div
      className="card"
      style={{
        padding: 32,
        position: "relative",
        border: featured
          ? "1px solid rgba(212,175,55,0.4)"
          : "1px solid rgba(212,175,55,0.12)",
        overflow: "visible",
      }}
    >
      {/* Discount badge */}
      <div
        style={{
          position: "absolute",
          top: -14,
          left: 24,
          background: "linear-gradient(135deg, #d4af37, #f0c840)",
          color: "#000",
          padding: "6px 18px",
          fontWeight: 700,
          fontSize: "0.72rem",
          letterSpacing: 2.5,
          fontFamily: "'Jost', sans-serif",
        }}
      >
        {offer.discount}
      </div>

      {/* Tag */}
      {offer.tag && (
        <div
          style={{
            position: "absolute",
            top: -14,
            right: 24,
            background: "rgba(10,10,10,0.9)",
            border: "1px solid rgba(212,175,55,0.3)",
            color: "var(--gold)",
            padding: "5px 14px",
            fontSize: "0.68rem",
            letterSpacing: 2,
            fontFamily: "'Jost', sans-serif",
          }}
        >
          {offer.tag}
        </div>
      )}

      <h3
        style={{
          fontSize: "1.5rem",
          fontWeight: 400,
          margin: "20px 0 10px",
          color: "#fff",
          fontFamily: "'Cormorant Garamond', serif",
        }}
      >
        {offer.title}
      </h3>

      <p
        style={{
          fontSize: "0.83rem",
          color: "#777",
          lineHeight: 1.7,
          marginBottom: 20,
        }}
      >
        {offer.desc}
      </p>

      {/* Pricing */}
      <div style={{ marginBottom: 4, display: "flex", alignItems: "baseline", gap: 10 }}>
        <span
          style={{
            textDecoration: "line-through",
            color: "#444",
            fontSize: "0.85rem",
          }}
        >
          ${offer.original}
        </span>
        <span
          style={{
            fontSize: "2rem",
            color: "var(--gold)",
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 300,
          }}
        >
          ${offer.sale}
        </span>
        <span style={{ color: "#555", fontSize: "0.75rem" }}>/night</span>
      </div>

      <div
        style={{
          fontSize: "0.68rem",
          color: "#555",
          letterSpacing: 2,
          marginBottom: 4,
          textTransform: "uppercase",
          fontFamily: "'Jost', sans-serif",
        }}
      >
        Expires in
      </div>
      <Countdown days={offer.ends} />

      <button
        className="btn-gold"
        style={{ width: "100%", marginTop: 20, textAlign: "center" }}
        onClick={onClaim}
      >
        Claim Offer
      </button>
    </div>
  );
}
