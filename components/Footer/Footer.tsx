import YearStamp from "./YearStamp";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer id="contact" className={styles.footer}>
      <div className={styles.footGrid}>
        <div>
          <div className={styles.wordmark}>
            Braganza<span>·</span>Bayt
          </div>
          <p className={styles.tagline}>
            Direct bookings only — no platform fees, no middleman.
          </p>
        </div>
        <div>
          <div className={styles.reachLabel}>Reach us</div>
          <p>
            WhatsApp:{" "}
            <a href="https://wa.me/971565826417" target="_blank" rel="noreferrer">
              +971 56 582 6417
            </a>
          </p>
          <p>
            Email: <a href="mailto:nigel_adam@hotmail.com">nigel_adam@hotmail.com</a>
          </p>
        </div>
      </div>
      <div className={styles.fine}>
        © <YearStamp /> Braganza Bayt. All rights reserved. ·{" "}
        <a href="/privacy">Privacy Policy</a>
      </div>
    </footer>
  );
}
