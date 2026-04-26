import { useState } from "react";
import { TESTIMONIALS } from "../data";
import { Stars } from "../components/UI";
import PageHero from "../components/PageHero";

export default function TestimonialsPage() {
  const [idx, setIdx] = useState(0);
  const t = TESTIMONIALS[idx];
  const prev = () => setIdx(i => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setIdx(i => (i + 1) % TESTIMONIALS.length);

  return (
    <>
      <PageHero
        label="Guest Stories"
        title="What They Say"
        subtitle="Words from those who have lived the Aurum experience."
        video="https://videos.pexels.com/video-files/3194277/3194277-uhd_2560_1440_25fps.mp4"
        img="https://images.unsplash.com/photo-1445019980597-93fa8acb246c?w=1600&q=80"
      />
      <section style={{ background: "var(--dark2)", padding: "80px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24, maxWidth: 1100, margin: "0 auto 80px" }}>
          {TESTIMONIALS.map((t, i) => (
            <div key={t.name} className="card fade-in" style={{ padding: "36px 32px", textAlign: "center", animationDelay: `${i * 0.1}s`, cursor: "pointer", border: i === idx ? "1px solid rgba(212,175,55,0.4)" : "1px solid rgba(212,175,55,0.1)" }} onClick={() => setIdx(i)}>
              <img src={t.img} alt={t.name} style={{ width: 64, height: 64, borderRadius: "50%", border: "2px solid var(--gold)", marginBottom: 16, objectFit: "cover" }} />
              <Stars n={t.rating} />
              <p style={{ fontSize: "0.95rem", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", lineHeight: 1.8, margin: "16px 0 20px", color: "#ccc" }}>"{t.text}"</p>
              <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1rem", color: "var(--gold)", marginBottom: 4 }}>{t.name}</h4>
              <p style={{ fontSize: "0.7rem", color: "#666", letterSpacing: 2, textTransform: "uppercase", fontFamily: "'Jost', sans-serif" }}>{t.role}</p>
            </div>
          ))}
        </div>

        <div style={{ maxWidth: 700, margin: "0 auto", position: "relative" }}>
          <div style={{ position: "absolute", top: -20, left: "50%", transform: "translateX(-50%)", fontFamily: "'Cormorant Garamond', serif", fontSize: 120, color: "rgba(212,175,55,0.05)", lineHeight: 1, userSelect: "none", zIndex: 0 }}>"</div>
          <div className="card" style={{ padding: "52px 48px", position: "relative", zIndex: 1, textAlign: "center" }}>
            <img src={t.img} alt={t.name} style={{ width: 80, height: 80, borderRadius: "50%", border: "2px solid var(--gold)", marginBottom: 20, objectFit: "cover" }} />
            <Stars n={t.rating} />
            <p style={{ fontSize: "1.2rem", fontFamily: "'Cormorant Garamond', serif", fontStyle: "italic", lineHeight: 1.85, margin: "24px 0 28px", color: "#ccc" }}>"{t.text}"</p>
            <div style={{ width: 30, height: 1, background: "var(--gold)", margin: "0 auto 20px", opacity: 0.5 }} />
            <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.1rem", color: "var(--gold)", marginBottom: 4 }}>{t.name}</h4>
            <p style={{ fontSize: "0.72rem", color: "#666", letterSpacing: 2.5, textTransform: "uppercase", fontFamily: "'Jost', sans-serif" }}>{t.role}</p>
          </div>
          <div style={{ display: "flex", justifyContent: "center", alignItems: "center", gap: 20, marginTop: 32 }}>
            <button onClick={prev} style={{ background: "none", border: "1px solid rgba(212,175,55,0.3)", color: "var(--gold)", width: 42, height: 42, cursor: "pointer", fontSize: 20 }}>‹</button>
            <div style={{ display: "flex", gap: 8 }}>
              {TESTIMONIALS.map((_, i) => <button key={i} onClick={() => setIdx(i)} style={{ width: i === idx ? 28 : 8, height: 8, borderRadius: 4, border: "none", cursor: "pointer", background: i === idx ? "var(--gold)" : "rgba(212,175,55,0.2)", transition: "all 0.3s" }} />)}
            </div>
            <button onClick={next} style={{ background: "none", border: "1px solid rgba(212,175,55,0.3)", color: "var(--gold)", width: 42, height: 42, cursor: "pointer", fontSize: 20 }}>›</button>
          </div>
        </div>
      </section>
    </>
  );
}
