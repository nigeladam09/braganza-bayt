"use client";

import Image from "next/image";
import type { Host } from "@/lib/hosts";
import { useHostModal } from "./context";
import styles from "./HostModal.module.css";

export default function HostAvatarButton({ host }: { host: Host }) {
  const { open } = useHostModal();

  return (
    <button
      className={styles.avatarBtn}
      onClick={() => open(host.key)}
      aria-label={`Meet ${host.name}`}
    >
      <Image src={host.photo.src} alt={host.photo.alt} fill sizes="52px" />
    </button>
  );
}
