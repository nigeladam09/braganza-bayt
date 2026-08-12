"use client";

import Image from "next/image";
import type { Room } from "@/lib/rooms";
import { useLightbox } from "@/components/Lightbox/context";
import { useBookingSelection } from "@/components/BookingForm/context";
import styles from "./StayCard.module.css";

export default function StayCard({ room }: { room: Room }) {
  const { open } = useLightbox();
  const { preselect } = useBookingSelection();
  const cover = room.gallery[0];

  return (
    <div className={styles.card}>
      <div className={styles.photoFrame} onClick={() => open(room.gallery)}>
        <Image src={cover.src} alt={cover.alt} fill sizes="(max-width: 640px) 100vw, 33vw" />
      </div>
      <div className={styles.body}>
        <div className={styles.location}>{room.location}</div>
        <h3>{room.displayTitle}</h3>
        <p className={styles.desc}>{room.description}</p>
        <div className={styles.amenities}>
          {room.amenities.map((amenity) => (
            <span key={amenity}>{amenity}</span>
          ))}
        </div>
        <a
          className={styles.bookLink}
          href="#book"
          onClick={(e) => {
            e.preventDefault();
            preselect(room.name);
          }}
        >
          Check dates &amp; book →
        </a>
      </div>
    </div>
  );
}
