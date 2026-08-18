export const OWNER_WHATSAPP = "971565826417";

export interface BookingFields {
  rooms: string[];
  name: string;
  checkin: string;
  checkout: string;
  guests: string;
  whatsapp: string;
  email?: string;
  note?: string;
  consent: boolean;
}

export type BookingValidation = { ok: true } | { ok: false; message: string };

export function validateBooking(fields: BookingFields): BookingValidation {
  if (!fields.rooms.length) {
    return { ok: false, message: "Please select at least one room." };
  }
  if (fields.checkout <= fields.checkin) {
    return { ok: false, message: "Check-out date needs to be after check-in date." };
  }
  if (!fields.consent) {
    return { ok: false, message: "Please agree to the Privacy Policy before sending your inquiry." };
  }
  return { ok: true };
}

export function buildBookingMessage(fields: BookingFields): string {
  const property = fields.rooms.join(", ");
  let message = `Hi Braganza Bayt! I'd like to book a stay.\n\n`;
  message += `Room(s): ${property}\n`;
  message += `Name: ${fields.name}\n`;
  message += `Check-in: ${fields.checkin}\n`;
  message += `Check-out: ${fields.checkout}\n`;
  message += `Guests: ${fields.guests}\n`;
  message += `My WhatsApp: ${fields.whatsapp}\n`;
  if (fields.email) message += `My Email: ${fields.email}\n`;
  if (fields.note) message += `Note: ${fields.note}\n`;
  return message;
}

export function buildWhatsAppUrl(message: string): string {
  return `https://wa.me/${OWNER_WHATSAPP}?text=${encodeURIComponent(message)}`;
}
