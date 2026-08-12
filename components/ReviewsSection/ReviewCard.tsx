import type { Review } from "@/lib/reviews";
import styles from "./ReviewCard.module.css";

export default function ReviewCard({ guestName, propertyTag, quote, stars }: Review) {
  return (
    <div className={styles.card}>
      <div className={styles.stars}>{"★".repeat(stars)}</div>
      <p className={styles.quote}>{quote}</p>
      <div className={styles.attribution}>
        <span className={styles.guestName}>— {guestName}</span>
        <span className={styles.propertyTag}>{propertyTag}</span>
      </div>
    </div>
  );
}
