import BookingForm from "./BookingForm";
import styles from "./BookingSection.module.css";

export default function BookingSection() {
  return (
    <section id="book" className={styles.section}>
      <div className={styles.sectionHead}>
        <div className={styles.eyebrow}>Book Direct</div>
        <h2>Send us your dates</h2>
        <p>
          Fill this in and it&apos;ll open WhatsApp with your details already typed out — just
          hit send there and we&apos;ll confirm availability directly with you.
        </p>
      </div>

      <div className={styles.perkCallout}>
        🛵 <strong>2 scooters are available to book at the property</strong> during your stay, so
        you can explore Goa the right way. Let us know in your inquiry if you&apos;d like to
        reserve one in advance.
      </div>

      <div className={styles.formWrap}>
        <BookingForm />
      </div>
    </section>
  );
}
