import { useState } from "react";
import { GALLERY_IMGS } from "../data";
import { SectionHeader } from "./UI";

export default function GallerySection() {
  const [lightbox, setLightbox] = useState(null);
  const [lightboxIdx, setLightboxIdx] = useState(0);

  const openLightbox = (src, idx) => {
    setLightbox(src);
    setLightboxIdx(idx);
  };

  const navigate = (dir) => {
    const newIdx = (lightboxIdx + dir + GALLERY_IMGS.length) % GALLERY_IMGS.length;
    setLightboxIdx(newIdx);
    setLightbox(GALLERY_IMGS[newIdx].src);
  };

  return (
    <section id="Gallery" style={{ background: "var(--dark2)" }}>
      <SectionHeader label="Visual Stories" title="Gallery" />

      {/* Masonry grid */}
      <div
        style={{
          columns: "3 280px",
          gap: 12,
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
        {GALLERY_IMGS.map((img, i) => (
          <div
            key={i}
            onClick={() => openLightbox(img.src, i)}
            style={{
              breakInside: "avoid",
              marginBottom: 12,
              overflow: "hidden",
              cursor: "zoom-in",
              position: "relative",
              borderRadius: 2,
              border: "1px solid rgba(212,175,55,0.06)",
            }}
          >
            <img
              src={img.src}
              alt={img.label}
              style={{
                width: "100%",
                display: "block",
                transition: "transform 0.6s ease, filter 0.4s ease",
                filter: "brightness(0.85)",
              }}
              onMouseOver={(e) => {
                e.target.style.transform = "scale(1.06)";
                e.target.style.filter = "brightness(1)";
              }}
              onMouseOut={(e) => {
                e.target.style.transform = "scale(1)";
                e.target.style.filter = "brightness(0.85)";
              }}
              loading="lazy"
            />
            {/* Label overlay */}
            <div
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                padding: "20px 16px 14px",
                background: "linear-gradient(to top, rgba(0,0,0,0.7), transparent)",
                opacity: 0,
                transition: "opacity 0.3s",
              }}
              onMouseOver={(e) => (e.currentTarget.style.opacity = 1)}
              onMouseOut={(e) => (e.currentTarget.style.opacity = 0)}
            >
              <span
                style={{
                  fontSize: "0.7rem",
                  letterSpacing: 3,
                  color: "var(--gold)",
                  textTransform: "uppercase",
                  fontFamily: "'Jost', sans-serif",
                }}
              >
                {img.label}
              </span>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightbox && (
        <div
          onClick={() => setLightbox(null)}
          style={{
            position: "fixed",
            inset: 0,
            background: "rgba(0,0,0,0.97)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* Prev */}
          <button
            onClick={(e) => { e.stopPropagation(); navigate(-1); }}
            style={{
              position: "absolute",
              left: 32,
              background: "none",
              border: "1px solid rgba(212,175,55,0.3)",
              color: "var(--gold)",
              fontSize: 24,
              width: 52,
              height: 52,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s",
              zIndex: 10000,
            }}
          >
            ‹
          </button>

          <img
            src={lightbox}
            alt=""
            style={{
              maxWidth: "80vw",
              maxHeight: "85vh",
              objectFit: "contain",
              boxShadow: "0 0 80px rgba(212,175,55,0.1)",
              borderRadius: 2,
            }}
          />

          {/* Next */}
          <button
            onClick={(e) => { e.stopPropagation(); navigate(1); }}
            style={{
              position: "absolute",
              right: 32,
              background: "none",
              border: "1px solid rgba(212,175,55,0.3)",
              color: "var(--gold)",
              fontSize: 24,
              width: 52,
              height: 52,
              cursor: "pointer",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              transition: "all 0.2s",
              zIndex: 10000,
            }}
          >
            ›
          </button>

          {/* Close */}
          <button
            onClick={() => setLightbox(null)}
            style={{
              position: "absolute",
              top: 28,
              right: 36,
              background: "none",
              border: "none",
              color: "var(--gold)",
              fontSize: 28,
              cursor: "pointer",
              zIndex: 10000,
            }}
          >
            ✕
          </button>

          {/* Counter */}
          <div
            style={{
              position: "absolute",
              bottom: 28,
              left: "50%",
              transform: "translateX(-50%)",
              fontSize: "0.72rem",
              letterSpacing: 3,
              color: "rgba(212,175,55,0.6)",
              fontFamily: "'Jost', sans-serif",
            }}
          >
            {lightboxIdx + 1} / {GALLERY_IMGS.length}
          </div>
        </div>
      )}
    </section>
  );
}
