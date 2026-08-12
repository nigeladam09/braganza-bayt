"use client";

import Image from "next/image";
import { hosts } from "@/lib/hosts";
import { useHostModal } from "./context";
import styles from "./HostModal.module.css";

export default function HostModal() {
  const { openHostKey, close } = useHostModal();
  const host = openHostKey ? hosts[openHostKey] : null;

  return (
    <div
      className={`${styles.overlay} ${openHostKey ? styles.open : ""}`}
      onClick={(e) => {
        if (e.target === e.currentTarget) close();
      }}
    >
      <div className={styles.card}>
        <button className={styles.close} onClick={close} aria-label="Close">
          &times;
        </button>
        {host && (
          <>
            <div className={styles.photoWrap}>
              <Image src={host.photo.src} alt={host.photo.alt} fill sizes="120px" />
            </div>
            <h3>{host.name}</h3>
            <p>{host.bio}</p>
          </>
        )}
      </div>
    </div>
  );
}
