import { guestPhotos } from "@/lib/guest-photos";
import HoverMarquee from "@/components/Marquee/HoverMarquee";
import GuestPhotoCard from "./GuestPhotoCard";
import styles from "./GuestGallerySection.module.css";

export default function GuestGallerySection() {
  const photoCards = guestPhotos.map((photo) => <GuestPhotoCard key={photo.id} {...photo} />);

  return (
    <section className={styles.section} id="guest-gallery">
      <div className={styles.sectionHead}>
        <p className={styles.eyebrow}>Our Beautiful Guests</p>
        <h2>Moments from past stays</h2>
        <p>A few snapshots from guests who&apos;ve stayed with us at Braganza Bayt.</p>
      </div>

      <HoverMarquee items={photoCards} />
    </section>
  );
}
