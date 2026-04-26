export default function PageHero({ label, title, subtitle, img, video }) {
  return (
    <div style={{
      position: "relative",
      height: "55vh",
      minHeight: 360,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      textAlign: "center",
      overflow: "hidden",
    }}>
      {/* Video background */}
      {video ? (
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={img}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
          src={video}
        />
      ) : (
        <img
          src={img}
          alt={title}
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "100%",
            objectFit: "cover",
            zIndex: 0,
          }}
        />
      )}

      {/* Gradient overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        background: "linear-gradient(to bottom, rgba(0,0,0,0.35) 0%, rgba(0,0,0,0.7) 60%, rgba(0,0,0,0.92) 100%)",
        zIndex: 1,
      }} />

      {/* Text content */}
      <div style={{
        position: "relative",
        zIndex: 2,
        padding: "0 24px",
        paddingTop: "var(--nav-height)",
      }}>
        <span style={{
          display: "block",
          color: "var(--gold)",
          fontSize: "0.72rem",
          letterSpacing: 6,
          textTransform: "uppercase",
          fontFamily: "'Jost', sans-serif",
          marginBottom: 14,
        }}>
          {label}
        </span>

        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(2.2rem, 6vw, 4.5rem)",
          fontWeight: 300,
          letterSpacing: 4,
          color: "#f5f0e8",
          marginBottom: 14,
          lineHeight: 1.1,
        }}>
          {title}
        </h1>

        <div style={{
          width: 40,
          height: 1,
          background: "linear-gradient(to right, transparent, var(--gold), transparent)",
          margin: "0 auto 18px",
        }} />

        {subtitle && (
          <p style={{
            color: "#aaa",
            fontSize: "0.9rem",
            fontFamily: "'Jost', sans-serif",
            fontWeight: 300,
            maxWidth: 500,
            margin: "0 auto",
            lineHeight: 1.7,
          }}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
}
