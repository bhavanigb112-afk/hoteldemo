import { useCountdown } from "../hooks";

/* ── Stars ── */
export function Stars({ n }) {
  return (
    <span style={{ color: "var(--gold)", fontSize: 16, letterSpacing: 2 }}>
      {"★".repeat(n)}
      <span style={{ color: "#333" }}>{"★".repeat(5 - n)}</span>
    </span>
  );
}

/* ── Countdown Timer ── */
export function Countdown({ days }) {
  const { h, m, s } = useCountdown(days);
  const pad = (n) => String(n).padStart(2, "0");

  return (
    <div
      style={{
        display: "flex",
        gap: 8,
        justifyContent: "center",
        margin: "12px 0",
      }}
    >
      {[
        ["Days", days],
        ["Hrs", pad(h)],
        ["Min", pad(m)],
        ["Sec", pad(s)],
      ].map(([label, val]) => (
        <div
          key={label}
          style={{
            background: "rgba(212,175,55,0.08)",
            border: "1px solid rgba(212,175,55,0.2)",
            borderRadius: 4,
            padding: "8px 12px",
            textAlign: "center",
            minWidth: 52,
          }}
        >
          <div
            style={{
              fontSize: 20,
              fontWeight: 700,
              color: "var(--gold)",
              fontFamily: "'Cormorant Garamond', serif",
            }}
          >
            {val}
          </div>
          <div
            style={{
              fontSize: 9,
              opacity: 0.5,
              letterSpacing: 2,
              fontFamily: "'Jost', sans-serif",
              marginTop: 2,
            }}
          >
            {label.toUpperCase()}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ── Section Header ── */
export function SectionHeader({ label, title }) {
  return (
    <>
      <span className="section-label">{label}</span>
      <h2 className="section-title">{title}</h2>
      <div className="divider" />
    </>
  );
}

/* ── Room Card ── */
export function RoomCard({ room, onBook, delay = 0 }) {
  return (
    <div
      className="card fade-in"
      style={{ animationDelay: `${delay}s`, borderRadius: 2 }}
    >
      {/* Image */}
      <div style={{ position: "relative", overflow: "hidden", height: 220 }}>
        <img
          src={room.img}
          alt={room.name}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            transition: "transform 0.6s ease",
          }}
          onMouseOver={(e) => (e.target.style.transform = "scale(1.08)")}
          onMouseOut={(e) => (e.target.style.transform = "scale(1)")}
          loading="lazy"
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: 16,
            left: 16,
            background: "linear-gradient(135deg, #d4af37, #f0c840)",
            color: "#000",
            padding: "5px 14px",
            fontSize: "0.72rem",
            fontWeight: 700,
            letterSpacing: 1.5,
            fontFamily: "'Jost', sans-serif",
          }}
        >
          FROM ${room.price}
          <span style={{ fontWeight: 400, opacity: 0.7 }}>/night</span>
        </div>
      </div>

      {/* Content */}
      <div style={{ padding: "24px 24px 28px", textAlign: "left" }}>
        <h3
          style={{
            fontSize: "1.35rem",
            fontWeight: 400,
            marginBottom: 8,
            fontFamily: "'Cormorant Garamond', serif",
            letterSpacing: 0.5,
          }}
        >
          {room.name}
        </h3>
        <p
          style={{
            fontSize: "0.8rem",
            color: "#777",
            lineHeight: 1.6,
            marginBottom: 16,
          }}
        >
          {room.description}
        </p>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
            marginBottom: 20,
          }}
        >
          {room.amenities.map((a, j) => (
            <span
              key={j}
              style={{
                background: "rgba(212,175,55,0.07)",
                border: "1px solid rgba(212,175,55,0.18)",
                padding: "4px 10px",
                fontSize: "0.72rem",
                color: "#aaa",
                borderRadius: 2,
              }}
            >
              {a}
            </span>
          ))}
        </div>
        <button
          className="btn-outline"
          style={{ width: "100%", textAlign: "center" }}
          onClick={onBook}
        >
          Book This Room
        </button>
      </div>
    </div>
  );
}
