import { useNavigate } from "react-router-dom";
import { ROOMS } from "../data";
import { RoomCard } from "../components/UI";
import PageHero from "../components/PageHero";

export default function RoomsPage() {
  const navigate = useNavigate();
  return (
    <>
      <PageHero
        label="Accommodation"
        title="Rooms & Suites"
        subtitle="Six distinct retreats, each a world unto itself."
        video="https://videos.pexels.com/video-files/7578596/7578596-uhd_2560_1440_25fps.mp4"
        img="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=1600&q=80"
      />
      <section style={{ background: "var(--dark2)", padding: "80px 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))", gap: 24, maxWidth: 1100, margin: "0 auto" }}>
          {ROOMS.map((room, i) => (
            <RoomCard
              key={room.name}
              room={room}
              delay={i * 0.08}
              onBook={() => navigate("/book", { state: { room: room.name } })}
            />
          ))}
        </div>
      </section>
    </>
  );
}
