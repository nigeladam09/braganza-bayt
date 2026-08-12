import Image from "next/image";
import type { GuestPhoto } from "@/lib/guest-photos";
import styles from "./GuestPhotoCard.module.css";

export default function GuestPhotoCard({ src, alt }: GuestPhoto) {
  return (
    <div className={styles.card}>
      <Image src={src} alt={alt} fill sizes="220px" loading="lazy" />
    </div>
  );
}
