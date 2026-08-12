"use client";

import { useLightbox } from "./context";
import styles from "./Lightbox.module.css";

export default function Lightbox() {
  const { images, index, isOpen, close, nav } = useLightbox();
  const current = images[index];

  return (
    <div
      className={`${styles.overlay} ${isOpen ? styles.open : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <button className={styles.close} onClick={close} aria-label="Close">
        &times;
      </button>
      <button
        className={`${styles.nav} ${styles.prev}`}
        onClick={() => nav(-1)}
        aria-label="Previous photo"
      >
        &#10094;
      </button>
      {current && <img className={styles.image} src={current.src} alt={current.alt} />}
      <button
        className={`${styles.nav} ${styles.next}`}
        onClick={() => nav(1)}
        aria-label="Next photo"
      >
        &#10095;
      </button>
      <div className={styles.counter}>
        {images.length ? `${index + 1} / ${images.length}` : ""}
      </div>
    </div>
  );
}
