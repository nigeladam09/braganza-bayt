export type RoomSlug =
  | "stylish-boho"
  | "terracotta-nest"
  | "olive-room"
  | "rainforest-suite"
  | "birdsong-nature";

export interface RoomImage {
  src: string;
  alt: string;
}

export interface Room {
  slug: RoomSlug;
  name: string;
  displayTitle: string;
  location: string;
  description: string;
  amenities: string[];
  /** Always [cover, extra1, extra2, sharedKitchen] — the exact order the original lightbox used. */
  gallery: RoomImage[];
  reviewStat: { rating: number; reviewCount: number; label: string };
}

const LOCATION = "Candolim, North Goa — India";
const KITCHEN_PHOTO: RoomImage = {
  src: "/images/kitchen/shared-kitchen.jpg",
  alt: "Shared kitchen at Braganza Bayt",
};

export const rooms: Room[] = [
  {
    slug: "stylish-boho",
    name: "The Stylish Boho",
    displayTitle: "Braganza Bayt — The Stylish Boho",
    location: LOCATION,
    description:
      "A cozy Goan sanctuary with a unique limewash finish and a warm blend of terracotta and soft orange tones. Designed for slow, comforting moments and effortless modern living, this intimate boho-styled room pairs earthy textures with the relaxed spirit of Goa — a stylish escape for travelers who appreciate thoughtful, design-forward spaces.",
    amenities: ["AC", "Water Heater", "Wifi", "1 Bedroom", "Parking", "Standing Balcony", "Kitchen"],
    gallery: [
      {
        src: "/images/rooms/stylish-boho/cover.jpg",
        alt: "Terracotta-walled bedroom with rattan headboard at The Stylish Boho",
      },
      { src: "/images/rooms/stylish-boho/extra-1.jpg", alt: "The Stylish Boho — additional view" },
      { src: "/images/rooms/stylish-boho/extra-2.jpg", alt: "The Stylish Boho — additional view" },
      KITCHEN_PHOTO,
    ],
    reviewStat: { rating: 4.91, reviewCount: 36, label: "The Stylish Boho" },
  },
  {
    slug: "terracotta-nest",
    name: "Trendy Terracotta Nest",
    displayTitle: "Braganza Bayt — Trendy Terracotta Nest",
    location: LOCATION,
    description:
      "A contemporary Goan sanctuary designed for slow mornings, restful evenings, and effortless comfort. Styled in soothing terracotta hues and elevated with modern amenities, this intimate space blends aesthetic living with the relaxed spirit of Goa.",
    amenities: [
      "AC",
      "Water Heater",
      "Wifi",
      "1 Bedroom",
      "Parking",
      "Balcony",
      "TV",
      "Kitchen",
      "Bluetooth Speakers",
      "Work Station",
    ],
    gallery: [
      {
        src: "/images/rooms/terracotta-nest/cover.jpg",
        alt: "Bedroom with terracotta bedspread, rattan headboard, and balcony overlooking palm trees at Trendy Terracotta Nest",
      },
      { src: "/images/rooms/terracotta-nest/extra-1.jpg", alt: "Trendy Terracotta Nest — additional view" },
      { src: "/images/rooms/terracotta-nest/extra-2.jpg", alt: "Trendy Terracotta Nest — additional view" },
      KITCHEN_PHOTO,
    ],
    reviewStat: { rating: 4.88, reviewCount: 25, label: "Trendy Terracotta Nest" },
  },
  {
    slug: "olive-room",
    name: "The Olive Room",
    displayTitle: "Braganza Bayt — The Olive Room",
    location: LOCATION,
    description:
      "A serene Goan hideaway dressed in soft olive and sage tones, designed for slow, grounding moments and effortless comfort. This intimate room blends modern simplicity with the relaxed spirit of Goa, offering a refined yet homely stay for travelers seeking calm and clarity.",
    amenities: [
      "AC",
      "Water Heater",
      "Wifi",
      "1 Bedroom",
      "Parking",
      "Standing Balcony",
      "TV",
      "Kitchen",
      "Bluetooth Speakers",
      "Work Station",
    ],
    gallery: [
      {
        src: "/images/rooms/olive-room/cover.jpg",
        alt: "Olive green bedroom with rattan headboard and garden view at The Olive Room",
      },
      { src: "/images/rooms/olive-room/extra-1.jpg", alt: "The Olive Room — additional view" },
      { src: "/images/rooms/olive-room/extra-2.jpg", alt: "The Olive Room — additional view" },
      KITCHEN_PHOTO,
    ],
    reviewStat: { rating: 4.86, reviewCount: 31, label: "The Olive Room" },
  },
  {
    slug: "rainforest-suite",
    name: "The Rainforest Suite",
    displayTitle: "Braganza Bayt — The Rainforest Suite",
    location: LOCATION,
    description:
      "A vibrant Goan sanctuary inspired by rainforest greens, tropical birds, and lush botanical art. Designed for slow, refreshing moments and effortless comfort, this intimate suite blends modern simplicity with Goa's natural, tropical spirit — a refined escape for travelers seeking something beautifully unique.",
    amenities: [
      "AC",
      "Water Heater",
      "Wifi",
      "1 Bedroom",
      "Parking",
      "Balcony",
      "TV",
      "Kitchen",
      "Bluetooth Speakers",
      "Work Station",
    ],
    gallery: [
      {
        src: "/images/rooms/rainforest-suite/cover.jpg",
        alt: "Bedroom with tropical leaf mural and teal bedspread at The Rainforest Suite",
      },
      { src: "/images/rooms/rainforest-suite/extra-1.jpg", alt: "The Rainforest Suite — additional view" },
      { src: "/images/rooms/rainforest-suite/extra-2.jpg", alt: "The Rainforest Suite — additional view" },
      KITCHEN_PHOTO,
    ],
    reviewStat: { rating: 4.93, reviewCount: 32, label: "The Rainforest Suite" },
  },
  {
    slug: "birdsong-nature",
    name: "Birdsong Nature Stylish",
    displayTitle: "Braganza Bayt — Birdsong Nature Stylish",
    location: LOCATION,
    description:
      "A nature-kissed Goan sanctuary with a balcony that opens out to lush trees, fresh air, and the gentle melody of birdsong. Designed for slow, peaceful moments and effortless comfort, this stylish room blends modern simplicity with the serene, natural spirit of Goa — a refreshing escape for travelers seeking quiet and clarity.",
    amenities: [
      "AC",
      "Water Heater",
      "Wifi",
      "1 Bedroom",
      "Parking",
      "Balcony",
      "TV",
      "Kitchen",
      "Bluetooth Speakers",
      "Work Station",
    ],
    gallery: [
      {
        src: "/images/rooms/birdsong-nature/cover.jpg",
        alt: "Olive green bedroom with rattan chair and leafy balcony view at Birdsong Nature Stylish",
      },
      { src: "/images/rooms/birdsong-nature/extra-1.jpg", alt: "Birdsong Nature Stylish — additional view" },
      { src: "/images/rooms/birdsong-nature/extra-2.jpg", alt: "Birdsong Nature Stylish — additional view" },
      KITCHEN_PHOTO,
    ],
    reviewStat: { rating: 4.85, reviewCount: 16, label: "Birdsong Nature Stylish" },
  },
];
