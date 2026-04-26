import { useLocation, Link } from "react-router-dom";
import { useState } from "react";
import { ROOMS, CONTACT_INFO } from "../data";
import PageHero from "../components/PageHero";

export default function BookPage() {
  const location = useLocation();
  const preselectedRoom = location.state?.room || "";
  const preselectedOffer = location.state?.offer || "";

  const [form, setForm] = useState({ name: "", email: "", checkin: "", checkout: "", room: preselectedRoom, message: preselectedOffer ? `I'd like to claim the ${preselectedOffer} package.` : "" });
  const [submitted, setSubmitted] = useState(false);
  const handleChange = e => setForm(p => ({ ...p, [e.target.name]: e.target.value }));
  const handleSubmit = e => { e.preventDefault(); setSubmitted(true); };

  return (
    <>
      <PageHero
        label={preselectedOffer ? `Package: ${preselectedOffer}` : "Reservations"}
        title="Reserve Your Stay"
        subtitle="Our concierge team will confirm your booking within 2 hours."
        video="https://videos.pexels.com/video-files/3770438/3770438-uhd_2560_1440_25fps.mp4"
        img="https://images.unsplash.com/photo-1564501049412-61c2a3083791?w=1600&q=80"
      />

      <section style={{ background: "#0d0d0d", padding: "80px 24px" }}>
        {/* Breadcrumb */}
        <div style={{ display: "flex", justifyContent: "center", gap: 12, alignItems: "center", marginBottom: 48, fontSize: "0.68rem", letterSpacing: 3, color: "#555", textTransform: "uppercase", fontFamily: "'Jost', sans-serif" }}>
          <Link to="/" style={{ color: "#555", textDecoration: "none" }} onMouseOver={e => e.target.style.color = "var(--gold)"} onMouseOut={e => e.target.style.color = "#555"}>Home</Link>
          <span style={{ color: "#333" }}>—</span>
          <span style={{ color: "var(--gold)" }}>Reservations</span>
        </div>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, maxWidth: 1040, margin: "0 auto", textAlign: "left" }} className="contact-grid">
          <div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.7rem", fontWeight: 300, marginBottom: 32, color: "var(--gold)" }}>Make a Reservation</h3>
            {submitted ? (
              <div style={{ padding: "48px 32px", border: "1px solid rgba(212,175,55,0.3)", textAlign: "center" }}>
                <div style={{ fontSize: 40, marginBottom: 16, color: "var(--gold)" }}>✓</div>
                <h4 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.5rem", color: "var(--gold)", marginBottom: 12 }}>Request Received</h4>
                <p style={{ color: "#777", fontSize: "0.85rem", lineHeight: 1.7 }}>Our concierge team will reach out within 2 hours to confirm your reservation.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit}>
                <input type="text" name="name" placeholder="Full Name" value={form.name} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Email Address" value={form.email} onChange={handleChange} required />
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12 }}>
                  <input type="date" name="checkin" value={form.checkin} onChange={handleChange} />
                  <input type="date" name="checkout" value={form.checkout} onChange={handleChange} />
                </div>
                <select name="room" value={form.room} onChange={handleChange}>
                  <option value="">Select Room Type</option>
                  {ROOMS.map(r => <option key={r.name} value={r.name}>{r.name} — from ${r.price}/night</option>)}
                </select>
                <textarea name="message" rows={4} placeholder="Special Requests or Message..." value={form.message} onChange={handleChange} />
                <button type="submit" className="btn-gold" style={{ width: "100%" }}>Send Reservation Request</button>
              </form>
            )}
          </div>
          <div>
            <h3 style={{ fontFamily: "'Cormorant Garamond', serif", fontSize: "1.7rem", fontWeight: 300, marginBottom: 32, color: "var(--gold)" }}>Find Us</h3>
            <div style={{ borderRadius: 2, overflow: "hidden", marginBottom: 32, border: "1px solid rgba(212,175,55,0.15)" }}>
              <iframe title="Hotel Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0!2d77.5946!3d12.9716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTLCsDU4JzE3LjgiTiA3N8KwMzUnNDAuNiJF!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin"
                width="100%" height="220" style={{ border: 0, display: "block", filter: "invert(0.9) hue-rotate(200deg) saturate(0.8)" }}
                allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
              {CONTACT_INFO.map(({ icon, text }) => (
                <div key={text} style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                  <span style={{ fontSize: 18, minWidth: 26, marginTop: 1 }}>{icon}</span>
                  <span style={{ color: "#888", fontSize: "0.85rem", lineHeight: 1.6, fontFamily: "'Jost', sans-serif" }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <style>{`@media(max-width:768px){.contact-grid{grid-template-columns:1fr!important;gap:40px!important}}`}</style>
    </>
  );
}
