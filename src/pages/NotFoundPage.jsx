import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "0 24px",
        background: "var(--dark)",
      }}
    >
      <div
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(6rem, 20vw, 14rem)",
          fontWeight: 300,
          color: "rgba(212,175,55,0.08)",
          lineHeight: 1,
          userSelect: "none",
          marginBottom: -20,
        }}
      >
        404
      </div>

      <span
        style={{
          color: "var(--gold)",
          fontSize: "0.72rem",
          letterSpacing: 6,
          textTransform: "uppercase",
          fontFamily: "'Jost', sans-serif",
          marginBottom: 16,
          display: "block",
        }}
      >
        Page Not Found
      </span>

      <h1
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(1.8rem, 4vw, 2.8rem)",
          fontWeight: 300,
          color: "#f5f0e8",
          marginBottom: 16,
        }}
      >
        You seem to have wandered off
      </h1>

      <p
        style={{
          color: "#666",
          maxWidth: 400,
          lineHeight: 1.8,
          fontSize: "0.9rem",
          marginBottom: 40,
        }}
      >
        The page you're looking for doesn't exist. Let us guide you back to the
        comfort of Aurum.
      </p>

      <Link to="/" className="btn-gold">
        Return Home
      </Link>
    </div>
  );
}
