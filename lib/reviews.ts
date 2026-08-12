export interface Review {
  id: string;
  guestName: string;
  propertyTag: string;
  quote: string;
  stars: number;
}

export const aggregateRating = { count: 140, average: 4.89 };

export const reviews: Review[] = [
  {
    id: "simon",
    guestName: "Simon",
    propertyTag: "Stylish Boho",
    stars: 5,
    quote:
      "Very nice people. Felt right at home. Helpful and very clear in communication. Would definitely recommend.",
  },
  {
    id: "gaurav",
    guestName: "Gaurav",
    propertyTag: "Stylish Boho",
    stars: 5,
    quote:
      "A lovely property — the interiors, rooms, and shared kitchen were beautifully kept. Nigel was extremely responsive and made us feel welcome before we even arrived. Highly recommended!",
  },
  {
    id: "dhaval",
    guestName: "Dhaval",
    propertyTag: "Terracotta Nest",
    stars: 5,
    quote:
      "The place was very aesthetically pleasing, perfectly located in Candolim. Nigel was very approachable and we had no problems with our stay.",
  },
  {
    id: "bharani",
    guestName: "Bharani",
    propertyTag: "Terracotta Nest",
    stars: 5,
    quote:
      "The place truly felt like our own home — clean, cozy, and comfortable. We loved having access to the kitchen for morning chai and eggs. Highly recommended!",
  },
  {
    id: "lincy",
    guestName: "Lincy",
    propertyTag: "Olive Room",
    stars: 5,
    quote: "One of the best rooms and a great host — totally recommended.",
  },
  {
    id: "maitrayee",
    guestName: "Maitrayee",
    propertyTag: "Olive Room",
    stars: 5,
    quote:
      "An amazing host. The property is beautiful and the surroundings are extremely peaceful and safe. A perfect Goa retreat!",
  },
  {
    id: "tushita",
    guestName: "Tushita",
    propertyTag: "Rainforest Suite",
    stars: 5,
    quote:
      "Very clean, well-maintained, and exactly as described. The owner was extremely cooperative and responsive — a great experience I'd recommend to anyone visiting Goa.",
  },
  {
    id: "rhea",
    guestName: "Rhea",
    propertyTag: "Rainforest Suite",
    stars: 5,
    quote:
      "Nigel and Amelia aunty were amazing hosts — helpful and responsive. The place looked exactly like the photos and was spotlessly clean. We felt right at home.",
  },
  {
    id: "riya",
    guestName: "Riya",
    propertyTag: "Birdsong Nature",
    stars: 5,
    quote:
      "The space is stunning — great aesthetics and incredibly well-kept. Location was spot on and the host was warm and attentive. Highly recommend for a hassle-free stay in Goa. 10/10.",
  },
  {
    id: "sweta",
    guestName: "Sweta",
    propertyTag: "Birdsong Nature",
    stars: 5,
    quote:
      "Nigel and his mom are detail-oriented and attentive, making sure we had everything we needed. Renting a scooter was easy, and kitchen access was a great plus. Great value for money!",
  },
];
