export interface Host {
  key: "nigel" | "amelia";
  name: string;
  bio: string;
  photo: { src: string; alt: string };
}

export const hosts: Record<"nigel" | "amelia", Host> = {
  nigel: {
    key: "nigel",
    name: "Nigel",
    bio: "A sports lover who enjoys travelling, Afro music, and good vibes. He's always happy to share local recommendations and help guests make the most of their stay at Braganza Bayt. If you're up for a chat, he'd be glad to swap travel stories over a cold beer.",
    photo: { src: "/images/hosts/nigel.jpg", alt: "Nigel, host" },
  },
  amelia: {
    key: "amelia",
    name: "Amelia",
    bio: "The heart and soul of Braganza Bayt. A passionate gardener, she loves caring for her plants and spending time with her two beloved dogs, Hugo and Boss. Her warm hospitality and caring nature help make every guest feel right at home.",
    photo: { src: "/images/hosts/amelia.jpg", alt: "Amelia, host" },
  },
};
