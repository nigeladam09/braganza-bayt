import type { Metadata } from "next";
import type { ReactNode } from "react";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";
import { POLICY_LAST_UPDATED, policySections } from "@/lib/privacy";
import styles from "./privacy.module.css";

export const metadata: Metadata = {
  title: "Privacy Policy — Braganza Bayt",
  description:
    "How Braganza Bayt handles the details you share when you send a booking inquiry. No cookies, no analytics, no database.",
};

// Matches `**bold**` or `[label](href)` in policy copy from lib/privacy.ts.
const INLINE = /\*\*(.+?)\*\*|\[([^\]]+)\]\(([^)]+)\)/g;

function renderInline(text: string): ReactNode[] {
  const out: ReactNode[] = [];
  let last = 0;
  let match: RegExpExecArray | null;

  INLINE.lastIndex = 0;
  while ((match = INLINE.exec(text)) !== null) {
    if (match.index > last) out.push(text.slice(last, match.index));

    const [, bold, label, href] = match;
    if (bold) {
      out.push(<strong key={match.index}>{bold}</strong>);
    } else {
      const external = !href.startsWith("mailto:");
      out.push(
        <a
          key={match.index}
          href={href}
          {...(external ? { target: "_blank", rel: "noreferrer" } : {})}
        >
          {label}
        </a>
      );
    }
    last = match.index + match[0].length;
  }

  if (last < text.length) out.push(text.slice(last));
  return out;
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main className={styles.page}>
        <article className={styles.prose}>
          <div className={styles.eyebrow}>Legal</div>
          <h1>Privacy Policy</h1>
          <p className={styles.updated}>Last updated {POLICY_LAST_UPDATED}</p>

          {policySections.map((section) => (
            <section key={section.id} id={section.id} className={styles.section}>
              <h2>{section.heading}</h2>
              {section.blocks.map((block, i) =>
                block.kind === "p" ? (
                  <p key={i}>{renderInline(block.text)}</p>
                ) : (
                  <ul key={i}>
                    {block.items.map((item) => (
                      <li key={item}>{renderInline(item)}</li>
                    ))}
                  </ul>
                )
              )}
            </section>
          ))}
        </article>
      </main>
      <Footer />
    </>
  );
}
