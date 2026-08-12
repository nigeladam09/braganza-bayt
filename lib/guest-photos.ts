export interface GuestPhoto {
  id: string;
  src: string;
  alt: string;
}

export const guestPhotos: GuestPhoto[] = Array.from({ length: 16 }, (_, i) => {
  const num = String(i + 1).padStart(2, "0");
  return {
    id: `guest-${num}`,
    src: `/images/guests/guest-${num}.jpg`,
    alt: "Guest at Braganza Bayt",
  };
});
