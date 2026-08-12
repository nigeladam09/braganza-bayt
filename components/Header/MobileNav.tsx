"use client";

import { useState } from "react";
import styles from "./MobileNav.module.css";

interface NavLink {
  href: string;
  label: string;
}

export default function MobileNav({ links }: { links: NavLink[] }) {
  const [open, setOpen] = useState(false);

  return (
    <div className={styles.wrap}>
      <button
        className={styles.toggle}
        onClick={() => setOpen((o) => !o)}
        aria-expanded={open}
        aria-label={open ? "Close menu" : "Open menu"}
      >
        {open ? (
          <span className={styles.close}>&times;</span>
        ) : (
          <span className={styles.bars}>
            <span />
            <span />
            <span />
          </span>
        )}
      </button>
      {open && (
        <nav className={styles.panel}>
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
        </nav>
      )}
    </div>
  );
}
