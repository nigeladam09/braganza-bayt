export interface GroupStayRow {
  groupSize: string;
  guests: number;
  roomsNeeded: string;
  highlight?: boolean;
}

export const groupStayRows: GroupStayRow[] = [
  { groupSize: "1–2 guests", guests: 2, roomsNeeded: "1 room" },
  { groupSize: "3–4 guests", guests: 4, roomsNeeded: "2 rooms" },
  { groupSize: "5–6 guests", guests: 6, roomsNeeded: "3 rooms" },
  { groupSize: "7–8 guests", guests: 8, roomsNeeded: "4 rooms" },
  { groupSize: "9–10 guests", guests: 10, roomsNeeded: "All 5 rooms — whole property", highlight: true },
];
