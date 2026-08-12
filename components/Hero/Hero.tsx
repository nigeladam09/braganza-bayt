import Image from "next/image";
import { hosts } from "@/lib/hosts";
import { rooms } from "@/lib/rooms";
import HostAvatarButton from "@/components/HostModal/HostAvatarButton";
import styles from "./Hero.module.css";

const heroPhoto = rooms.find((room) => room.slug === "rainforest-suite")!.gallery[0];

export default function Hero() {
  return (
    <>
      <div className={styles.hero}>
        <div className={styles.heroInner}>
          <div className={styles.copy}>
            <div className={styles.eyebrow}>Direct booking · No commission · No middleman</div>
            <h1 className={styles.headline}>
              A harmonious cluster of stylish rooms.
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
            </div>
          </div>
          <div className={styles.photoFrame}>
            <Image
              src={heroPhoto.src}
              alt={heroPhoto.alt}
              fill
              sizes="(max-width: 900px) 100vw, 44vw"
              priority
            />
          </div>
        </div>
      </div>
      <div className={styles.tileBand} />
    </>
  );
}
