import { useNavigate } from "react-router-dom";
import { OFFERS } from "../data";
import { Countdown } from "../components/UI";
import PageHero from "../components/PageHero";

export default function OffersPage() {
  const navigate = useNavigate();
  return (
    <>
      <PageHero
        label="Exclusive"
        title="Offers & Packages"
        subtitle="Curated escapes at exceptional value — for a limited time only."
        video="https://videos.pexels.com/video-files/4992994/4992994-uhd_2560_1440_30fps.mp4"
        img="https://images.unsplash.com/photo-1551882547-ff40c63fe2e6?w=1600&q=80"
      />
      <section style={{ background: "#0d0d0d", padding: "80px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 28, maxWidth: 1020, margin: "0 auto" }}>
          {OFFERS.map((offer, i) => (
            <div key={offer.title} className="card" style={{ padding: 36, position: "relative", overflow: "visible", border: i === 0 ? "1px solid rgba(212,175,55,0.4)" : "1px solid rgba(212,175,55,0.12)" }}>
              <div style={{ position: "absolute", top: -14, left: 24, background: "linear-gradient(135deg, #d4af37, #f0c840)", color: "#000", padding: "6px 18px", fontWeight: 700, fontSize: "0.72rem", letterSpacing: 2.5, fontFamily: "'Jost', sans-serif" }}>{offer.discount}</div>
              {offer.tag && <div style={{ position: "absolute", top: -14, right: 24, background: "rgba(10,10,10,0.9)", border: "1px solid rgba(212,175,55,0.3)", color: "var(--gold)", padding: "5px 14px", fontSize: "0.68rem", letterSpacing: 2, fontFamily: "'Jost', sans-serif" }}>{offer.tag}</div>}
              <h3 style={{ fontSize: "1.6rem", fontWeight: 400, margin: "20px 0 10px", fontFamily: "'Cormorant Garamond', serif" }}>{offer.title}</h3>
              <p style={{ fontSize: "0.85rem", color: "#777", lineHeight: 1.7, marginBottom: 20 }}>{offer.desc}</p>
              <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 4 }}>
                <span style={{ textDecoration: "line-through", color: "#444", fontSize: "0.85rem" }}>${offer.original}</span>
                <span style={{ fontSize: "2rem", color: "var(--gold)", fontFamily: "'Cormorant Garamond'" }}>${offer.sale}</span>
                <span style={{ color: "#555", fontSize: "0.75rem" }}>/night</span>
              </div>
              <div style={{ fontSize: "0.68rem", color: "#555", letterSpacing: 2, textTransform: "uppercase", fontFamily: "'Jost', sans-serif", marginBottom: 4 }}>Expires in</div>
              <Countdown days={offer.ends} />
              <button className="btn-gold" style={{ width: "100%", marginTop: 20 }} onClick={() => navigate("/book", { state: { offer: offer.title } })}>Claim Offer</button>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
