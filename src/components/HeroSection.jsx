import { useNavigate } from "react-router-dom";

export default function HeroSection() {
  const navigate = useNavigate();

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="Home"
      style={{
        padding: 0,
        position: "relative",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
      }}
    >
      {/* Video background */}
      <video
        autoPlay
        muted
        loop
        playsInline
        style={{
          position: "absolute",
          inset: 0,
          width: "100%",
          height: "100%",
          objectFit: "cover",
          zIndex: 0,
        }}
        src="https://videos.pexels.com/video-files/3571264/3571264-uhd_2560_1440_30fps.mp4"
        poster="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?w=1600&q=80"
      />

      {/* Gradient overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(to bottom, rgba(0,0,0,0.25) 0%, rgba(0,0,0,0.6) 60%, rgba(0,0,0,0.92) 100%)",
          zIndex: 1,
        }}
      />

      {/* Content */}
      <div
        style={{
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          padding: "0 20px",
          maxWidth: 860,
        }}
      >
        <p
          className="fade-up section-label"
          style={{ animationDelay: "0.2s", marginBottom: 20 }}
        >
          Welcome to
        </p>

        <h1
          className="fade-up"
          style={{
            fontSize: "clamp(3.5rem, 10vw, 7.5rem)",
            fontWeight: 300,
            letterSpacing: "0.1em",
            lineHeight: 1,
            animationDelay: "0.4s",
          }}
        >
          AURUM
          <br />
          <em
            style={{
              color: "var(--gold)",
              fontStyle: "italic",
              fontSize: "0.65em",
              letterSpacing: "0.12em",
            }}
          >
            Resort & Spa
          </em>
        </h1>

        <p
          className="fade-up"
          style={{
            margin: "28px auto 44px",
            maxWidth: 500,
            fontSize: "1.05rem",
            fontWeight: 300,
            opacity: 0.8,
            lineHeight: 1.8,
            animationDelay: "0.7s",
          }}
        >
          Where timeless luxury meets the art of living. An experience
          crafted for the extraordinary.
        </p>

        <div
          className="fade-up"
          style={{
            display: "flex",
            gap: 16,
            justifyContent: "center",
            flexWrap: "wrap",
            animationDelay: "1s",
          }}
        >
          <button className="btn-gold" onClick={() => navigate("/rooms")}>
            Explore Suites
          </button>
          <button className="btn-outline" onClick={() => navigate("/book")}>
            Reserve Now
          </button>
        </div>

        {/* Trust badges */}
        <div
          className="fade-up"
          style={{
            display: "flex",
            gap: 32,
            justifyContent: "center",
            marginTop: 52,
            flexWrap: "wrap",
            animationDelay: "1.3s",
          }}
        >
          {[
            ["⭐", "5-Star Rated"],
            ["🏆", "Award Winning"],
            ["🌿", "Sustainable Luxury"],
          ].map(([icon, label]) => (
            <div
              key={label}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                color: "rgba(255,255,255,0.6)",
                fontSize: "0.72rem",
                letterSpacing: 2,
                textTransform: "uppercase",
              }}
            >
              <span style={{ fontSize: 14 }}>{icon}</span>
              {label}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        style={{
          position: "absolute",
          bottom: 40,
          left: "50%",
          zIndex: 2,
          textAlign: "center",
          animation: "scrollBounce 2s ease-in-out infinite",
          cursor: "pointer",
        }}
        onClick={() => navigate("/rooms")}
      >
        <div
          style={{
            width: 1,
            height: 56,
            background: "linear-gradient(to bottom, transparent, var(--gold))",
            margin: "0 auto 10px",
          }}
        />
        <span
          style={{
            fontSize: "0.6rem",
            letterSpacing: 5,
            color: "var(--gold)",
            fontFamily: "'Jost', sans-serif",
          }}
        >
          SCROLL
        </span>
      </div>
    </section>
  );
}
