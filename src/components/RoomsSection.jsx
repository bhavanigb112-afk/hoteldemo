import { useNavigate } from "react-router-dom";
import { ROOMS } from "../data";
import { SectionHeader, RoomCard } from "./UI";

export default function RoomsSection() {
  const navigate = useNavigate();

  return (
    <section id="Rooms" style={{ background: "var(--dark2)" }}>
      <SectionHeader label="Accommodation" title="Rooms & Suites" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(310px, 1fr))",
          gap: 24,
          maxWidth: 1100,
          margin: "0 auto",
        }}
      >
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
  );
}
