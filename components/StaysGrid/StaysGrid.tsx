import { rooms } from "@/lib/rooms";
import StayCard from "./StayCard";
import styles from "./StaysGrid.module.css";

export default function StaysGrid() {
  return (
    <section id="stays" className={styles.section}>
      <div className={styles.sectionHead}>
        <div className={styles.eyebrow}>The Collection</div>
        <h2>Five rooms, one address, endless Goa.</h2>
        <p>
          All five stays sit in Candolim, North Goa — each with its own character, styled by us
          and ready to book direct.
        </p>
      </div>

      <div className={styles.grid}>
        {rooms.map((room) => (
          <StayCard key={room.slug} room={room} />
        ))}
      </div>
    </section>
  );
}
