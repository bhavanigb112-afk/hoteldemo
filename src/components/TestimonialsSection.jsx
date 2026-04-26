import { useState } from "react";
import { TESTIMONIALS } from "../data";
import { SectionHeader, Stars } from "./UI";

export default function TestimonialsSection() {
  const [idx, setIdx] = useState(0);
  const t = TESTIMONIALS[idx];

  const prev = () => setIdx((i) => (i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length);
  const next = () => setIdx((i) => (i + 1) % TESTIMONIALS.length);

  return (
    <section id="Testimonials" style={{ background: "var(--dark2)" }}>
      <SectionHeader label="Guest Stories" title="What They Say" />

      <div style={{ maxWidth: 720, margin: "0 auto", position: "relative" }}>
        {/* Quote mark */}
        <div
          style={{
            position: "absolute",
            top: -20,
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: 120,
            color: "rgba(212,175,55,0.06)",
            lineHeight: 1,
            userSelect: "none",
            zIndex: 0,
          }}
        >
          "
        </div>

        <div
          className="card"
          style={{
            padding: "52px 48px",
            position: "relative",
            zIndex: 1,
            textAlign: "center",
          }}
        >
          <img
            src={t.img}
            alt={t.name}
            style={{
              width: 76,
              height: 76,
              borderRadius: "50%",
              border: "2px solid var(--gold)",
              marginBottom: 20,
              objectFit: "cover",
            }}
          />

          <Stars n={t.rating} />

          <p
            style={{
              fontSize: "1.15rem",
              fontFamily: "'Cormorant Garamond', serif",
              fontStyle: "italic",
              lineHeight: 1.85,
              margin: "24px 0 28px",
              color: "#ccc",
              fontWeight: 300,
            }}
          >
            "{t.text}"
          </p>

          <div
            style={{
              width: 30,
              height: 1,
              background: "var(--gold)",
              margin: "0 auto 20px",
              opacity: 0.5,
            }}
          />

          <h4
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "1.1rem",
              fontWeight: 600,
              color: "var(--gold)",
              marginBottom: 4,
            }}
          >
            {t.name}
          </h4>
          <p
            style={{
              fontSize: "0.72rem",
              color: "#666",
              letterSpacing: 2.5,
              textTransform: "uppercase",
              fontFamily: "'Jost', sans-serif",
            }}
          >
            {t.role}
          </p>
        </div>

        {/* Navigation */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: 20,
            marginTop: 32,
          }}
        >
          <button
            onClick={prev}
            style={{
              background: "none",
              border: "1px solid rgba(212,175,55,0.3)",
              color: "var(--gold)",
              width: 42,
              height: 42,
              cursor: "pointer",
              fontSize: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "rgba(212,175,55,0.1)")}
            onMouseOut={(e) => (e.currentTarget.style.background = "none")}
          >
            ‹
          </button>

          {/* Dots */}
          <div style={{ display: "flex", gap: 8 }}>
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setIdx(i)}
                style={{
                  width: i === idx ? 28 : 8,
                  height: 8,
                  borderRadius: 4,
                  border: "none",
                  cursor: "pointer",
                  background:
                    i === idx
                      ? "var(--gold)"
                      : "rgba(212,175,55,0.2)",
                  transition: "all 0.3s ease",
                }}
              />
            ))}
          </div>

          <button
            onClick={next}
            style={{
              background: "none",
              border: "1px solid rgba(212,175,55,0.3)",
              color: "var(--gold)",
              width: 42,
              height: 42,
              cursor: "pointer",
              fontSize: 20,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s",
            }}
            onMouseOver={(e) => (e.currentTarget.style.background = "rgba(212,175,55,0.1)")}
            onMouseOut={(e) => (e.currentTarget.style.background = "none")}
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
