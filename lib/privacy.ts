// Privacy policy copy. Paragraph text supports a minimal `[label](href)` inline-link
// syntax, rendered by `renderInline` in app/privacy/page.tsx (lib/*.ts cannot hold JSX).
//
// TODO (owner to confirm before this is treated as final):
//   - POLICY_ENTITY: the registered/legal name the stays trade under.
//   - GRIEVANCE_CONTACT: the DPDP Act 2023 s.13 grievance contact must be a named person.

export const POLICY_LAST_UPDATED = "17 August 2026";

export const POLICY_ENTITY = "Braganza Bayt";
export const GRIEVANCE_CONTACT = "Nigel";
export const GRIEVANCE_EMAIL = "nigel_adam@hotmail.com";
export const GRIEVANCE_WHATSAPP = "+971 56 582 6417";

export type PolicyBlock =
  | { kind: "p"; text: string }
  | { kind: "ul"; items: string[] };

export interface PolicySection {
  id: string;
  heading: string;
  blocks: PolicyBlock[];
}

export const policySections: PolicySection[] = [
  {
    id: "who-we-are",
    heading: "Who we are",
    blocks: [
      {
        kind: "p",
        text: `${POLICY_ENTITY} is a small, family-run cluster of rooms in Candolim, North Goa. We take bookings directly — there is no agency, no platform, and no middleman between you and us.`,
      },
      {
        kind: "p",
        text: `This policy explains what happens to the details you type into the booking form on this site, and to anything you send us afterwards. If you would rather ask a person, write to [${GRIEVANCE_EMAIL}](mailto:${GRIEVANCE_EMAIL}).`,
      },
    ],
  },
  {
    id: "what-we-collect",
    heading: "What we collect",
    blocks: [
      {
        kind: "p",
        text: "The booking form asks for exactly this, and nothing else:",
      },
      {
        kind: "ul",
        items: [
          "The room or rooms you are interested in",
          "Your full name",
          "Your check-in and check-out dates",
          "The number of guests",
          "Your WhatsApp number",
          "Your email address — optional",
          "A free-text note, if you want to tell us anything else — optional",
        ],
      },
      {
        kind: "p",
        text: "There are no hidden fields. We do not ask for payment details, identity documents, or passport information through this website. Anything else you share later — for example when we arrange check-in over WhatsApp — you share knowingly, in that conversation.",
      },
    ],
  },
  {
    id: "how-the-form-works",
    heading: "How the booking form actually works",
    blocks: [
      {
        kind: "p",
        text: "This is worth spelling out, because it is unusual and it works in your favour.",
      },
      {
        kind: "p",
        text: "This website is a set of static files. It has no server that can receive data, no database, and no account system. When you press “Send inquiry via WhatsApp”, nothing is transmitted to us over the web. Your browser assembles the details you typed into a plain text message, and opens WhatsApp in a new tab with that message already written out.",
      },
      {
        kind: "p",
        text: "You then choose whether to press send. Until you do, we have received nothing at all. If you close that tab instead, your details simply disappear when you leave this page — there is no copy of them anywhere.",
      },
    ],
  },
  {
    id: "why-we-use-it",
    heading: "Why we use it, and our lawful basis",
    blocks: [
      {
        kind: "p",
        text: "We use what you send for one purpose: to answer your inquiry, confirm availability, agree a price, and arrange your stay. We do not use it for marketing, we do not build guest profiles, and we do not send newsletters.",
      },
      {
        kind: "p",
        text: "Under India's Digital Personal Data Protection Act, 2023, our basis is your consent, given when you tick the box on the booking form and press send in WhatsApp. Under the UK and EU GDPR, our bases are your consent (Article 6(1)(a)) and the steps taken at your request before entering into a contract (Article 6(1)(b)).",
      },
    ],
  },
  {
    id: "who-else-sees-it",
    heading: "Who else sees it",
    blocks: [
      {
        kind: "p",
        text: "**WhatsApp, operated by Meta.** Your inquiry travels as a WhatsApp message, so Meta carries and stores it exactly as it does any other message you send, on its own terms. Their handling is governed by the [WhatsApp Privacy Policy](https://www.whatsapp.com/legal/privacy-policy), not by ours. If you would prefer Meta not to be involved at all, email us instead at [${GRIEVANCE_EMAIL}](mailto:${GRIEVANCE_EMAIL}).",
      },
      {
        kind: "p",
        text: "**Google Fonts.** The name at the top of every page uses a typeface loaded from Google's servers. That request tells Google your IP address and browser user-agent. It happens on page load, whether or not you use the booking form. See the [Google Privacy Policy](https://policies.google.com/privacy).",
      },
      {
        kind: "p",
        text: "**Our web host.** Like any website, the server that delivers these pages keeps standard access logs, which typically include IP addresses and timestamps.",
      },
      {
        kind: "p",
        text: "That is the complete list. We do not sell your data, we do not rent it, and we do not share it with advertisers, data brokers, or booking platforms.",
      },
    ],
  },
  {
    id: "cookies",
    heading: "Cookies and tracking",
    blocks: [
      {
        kind: "p",
        text: "This site sets no cookies. It runs no analytics, no advertising pixels, no heatmaps, and no session recording. It does not write to local storage or session storage. There is no consent banner here because there is nothing to consent to.",
      },
    ],
  },
  {
    id: "retention",
    heading: "How long we keep it",
    blocks: [
      {
        kind: "p",
        text: "Your inquiry lives in our WhatsApp conversation, and in our email inbox if you wrote to us there. We keep it for the duration of your stay and a reasonable period afterwards — in case you return, or a question comes up about the booking — and we may keep basic booking records longer where Indian law requires it of accommodation providers.",
      },
      {
        kind: "p",
        text: "Ask us to delete your conversation and we will, subject to those record-keeping obligations.",
      },
    ],
  },
  {
    id: "transfers",
    heading: "Where your data goes",
    blocks: [
      {
        kind: "p",
        text: "The property is in Goa, India, and your inquiry reaches a WhatsApp number registered in the United Arab Emirates. Meta's own infrastructure carries the message internationally. So if you are writing to us from the EU, the UK, or anywhere else, your details will cross borders — that is inherent to contacting us at all, and it is what you are agreeing to when you send.",
      },
    ],
  },
  {
    id: "your-rights",
    heading: "Your rights",
    blocks: [
      {
        kind: "p",
        text: "Under the Digital Personal Data Protection Act, 2023, you may ask us for a summary of the personal data we hold about you and how we have processed it; ask us to correct or complete anything inaccurate; ask us to erase it; nominate someone to exercise these rights if you die or become incapacitated; and withdraw your consent at any time, as easily as you gave it. You may also raise a grievance with us, and escalate to the Data Protection Board of India if we do not resolve it.",
      },
      {
        kind: "p",
        text: "Withdrawing consent does not undo anything we did while it was valid, and it may mean we can no longer arrange your stay.",
      },
    ],
  },
  {
    id: "gdpr",
    heading: "If you are in the EU or the UK",
    blocks: [
      {
        kind: "p",
        text: "The GDPR gives you the additional rights of access, rectification, erasure, restriction of processing, data portability, and objection to processing, alongside the right to withdraw consent at any time.",
      },
      {
        kind: "p",
        text: "If you think we have handled your data badly, please tell us first — we would rather fix it. You also have the right to complain to your national supervisory authority, or to the Information Commissioner's Office in the UK.",
      },
    ],
  },
  {
    id: "children",
    heading: "Children",
    blocks: [
      {
        kind: "p",
        text: "This site is not directed at children, and we do not knowingly collect personal data from anyone under 18. Bookings must be made by an adult, who may of course include children in the guest count. If you believe a child has sent us their details, contact us and we will delete them.",
      },
    ],
  },
  {
    id: "changes",
    heading: "Changes to this policy",
    blocks: [
      {
        kind: "p",
        text: "If we change how we handle your data, we will update this page and change the date at the top. There is no mailing list to notify, so it is worth a glance if you are booking again after a long gap.",
      },
    ],
  },
  {
    id: "contact",
    heading: "Contact and grievances",
    blocks: [
      {
        kind: "p",
        text: `For anything in this policy — a request, a correction, a deletion, or a complaint — reach ${GRIEVANCE_CONTACT} at [${GRIEVANCE_EMAIL}](mailto:${GRIEVANCE_EMAIL}) or on WhatsApp at [${GRIEVANCE_WHATSAPP}](https://wa.me/971565826417).`,
      },
      {
        kind: "p",
        text: "We aim to reply within a few days, and in any case within 30 days.",
      },
    ],
  },
];
