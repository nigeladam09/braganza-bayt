import { rooms } from "@/lib/rooms";
import { aggregateRating, reviews } from "@/lib/reviews";
import HoverMarquee from "@/components/Marquee/HoverMarquee";
import ReviewCard from "./ReviewCard";
import styles from "./ReviewsSection.module.css";

export default function ReviewsSection() {
  const reviewCards = reviews.map((review) => <ReviewCard key={review.id} {...review} />);

  return (
    <section className={styles.section} id="reviews">
      <div className={styles.sectionHead}>
        <p className={styles.eyebrow}>What Past Guests Say</p>
        <h2>
          {aggregateRating.count} reviews, {aggregateRating.average}★ average across all five
          stays
        </h2>
        <p>Real guest reviews from our Airbnb listings, so you can book with confidence.</p>
      </div>

      <div className={styles.stats}>
        {rooms.map((room) => (
          <div key={room.slug} className={styles.statBlock}>
            <span className={styles.num}>{room.reviewStat.rating}★</span>
            <span className={styles.lbl}>
              {room.reviewStat.label} · {room.reviewStat.reviewCount} reviews
            </span>
          </div>
        ))}
      </div>

      <HoverMarquee items={reviewCards} />
    </section>
  );
}
