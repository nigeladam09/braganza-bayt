import { groupStayRows } from "@/lib/group-stays";
import styles from "./GroupStaysGuide.module.css";

export default function GroupStaysGuide() {
  return (
    <section id="group-stays" className={styles.section}>
      <div className={styles.sectionHead}>
        <p className={styles.eyebrow}>Traveling As A Group?</p>
        <h2>Book multiple rooms, all under one roof</h2>
        <p>
          All 5 rooms sit within the same property — so instead of splitting your group across
          different Airbnb listings, book as many rooms as you need with us directly. Each room
          comfortably sleeps 2 on a queen bed.
        </p>
      </div>

      <div className={styles.guide}>
        <div className={`${styles.row} ${styles.rowHead}`}>
          <span>Group size</span>
          <span>Guests (2/room)</span>
          <span>Rooms needed</span>
        </div>
        {groupStayRows.map((row) => (
          <div
            key={row.groupSize}
            className={`${styles.row} ${row.highlight ? styles.rowHighlight : ""}`}
          >
            <span>{row.groupSize}</span>
            <span>{row.guests}</span>
            <span>{row.roomsNeeded}</span>
          </div>
        ))}
      </div>

      <div className={styles.wholeHouseCallout}>
        🏡 <strong>Booking for 9–10+ guests?</strong> Take all 5 rooms and have the entire
        Braganza Bayt property to yourselves — ideal for weddings, reunions, and big group trips.
        Just tick &quot;All 5 rooms&quot; in the form below and mention your group size.
      </div>
    </section>
  );
}
