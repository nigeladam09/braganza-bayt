import { hosts } from "@/lib/hosts";
import { guestFavorite, superhost } from "@/lib/badges";
import HostAvatarButton from "@/components/HostModal/HostAvatarButton";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.copy}>
            <div className={styles.eyebrow}>Direct booking · No commission · No middleman</div>
            <h1 className={styles.headline}>
              A harmonious cluster of stylish rooms, each crafted with comfort, calm, and a sense
              of home.
              <br />
              <span className={styles.tagline}>Family-run, and it shows.</span>
            </h1>
            <p className={styles.lede}>
              Skip the booking-platform markup. Tell us your dates and party size below, and
              we&apos;ll confirm your stay at Braganza Bayt ourselves — usually within a few
              hours.
            </p>
            <div className={styles.ctaRow}>
              <a href="#stays" className={`${styles.btn} ${styles.btnPrimary}`}>
                View the stays
              </a>
              <a href="#book" className={`${styles.btn} ${styles.btnOutline}`}>
                Send an inquiry
              </a>
              <div className={styles.hostAvatars}>
                <HostAvatarButton host={hosts.nigel} />
                <HostAvatarButton host={hosts.amelia} />
                <span className={styles.hostAvatarsLabel}>Meet your hosts</span>
              </div>
              <div className={styles.badges}>
                <div className={styles.badge}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={guestFavorite}
                    alt="Guest favorite — one of the most loved homes on Airbnb"
                  />
                </div>
                <div className={styles.badge}>
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={superhost} alt="Airbnb Superhost, 5 stars" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.tileBand} />
    </>
  );
}
