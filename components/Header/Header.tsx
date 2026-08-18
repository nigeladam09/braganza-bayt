import styles from "./Header.module.css";
import MobileNav from "./MobileNav";

// Root-relative so they still resolve correctly from sub-pages like /privacy.
// On the home page these stay same-document fragment jumps, so smooth scroll is preserved.
const NAV_LINKS = [
  { href: "/#stays", label: "Stays" },
  { href: "/#group-stays", label: "Groups" },
  { href: "/#book", label: "Book" },
  { href: "/#reviews", label: "Reviews" },
  { href: "/#contact", label: "Contact" },
  { href: "/privacy", label: "Privacy" },
];

export default function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.wordmark}>
        Braganza<span>·</span>Bayt
      </div>
      <nav className={styles.nav}>
        {NAV_LINKS.map((link) => (
          <a key={link.href} href={link.href}>
            {link.label}
          </a>
        ))}
      </nav>
      <MobileNav links={NAV_LINKS} />
    </header>
  );
}
