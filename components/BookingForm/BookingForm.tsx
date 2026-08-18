"use client";

import { useEffect, useState } from "react";
import { rooms } from "@/lib/rooms";
import { buildBookingMessage, buildWhatsAppUrl, validateBooking } from "@/lib/whatsapp";
import { useBookingSelection } from "./context";
import styles from "./BookingForm.module.css";

export default function BookingForm() {
  const { selectedRooms, toggleRoom } = useBookingSelection();

  const [name, setName] = useState("");
  const [checkin, setCheckin] = useState("");
  const [checkout, setCheckout] = useState("");
  const [guests, setGuests] = useState("2");
  const [whatsapp, setWhatsapp] = useState("");
  const [email, setEmail] = useState("");
  const [note, setNote] = useState("");
  const [consent, setConsent] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [today, setToday] = useState("");

  useEffect(() => {
    setToday(new Date().toISOString().split("T")[0]);
  }, []);

  function handleCheckinChange(value: string) {
    setCheckin(value);
    if (checkout && checkout <= value) {
      setCheckout("");
    }
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    const fields = {
      rooms: selectedRooms,
      name,
      checkin,
      checkout,
      guests,
      whatsapp,
      email,
      note,
      consent,
    };
    const validation = validateBooking(fields);
    if (!validation.ok) {
      alert(validation.message);
      return;
    }

    const message = buildBookingMessage(fields);
    const url = buildWhatsAppUrl(message);
    window.open(url, "_blank");
    setShowConfirm(true);
  }

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <div className={styles.field}>
        <label>
          Which room(s)?{" "}
          <span className={styles.fieldHint}>— tick as many as you need</span>
        </label>
        <div className={styles.roomCheckboxes}>
          {rooms.map((room) => (
            <label key={room.slug} className={styles.roomCheck}>
              <input
                type="checkbox"
                name="property"
                value={room.name}
                checked={selectedRooms.includes(room.name)}
                onChange={() => toggleRoom(room.name)}
              />
              {room.displayTitle}
            </label>
          ))}
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="name">Your full name</label>
        <input
          type="text"
          id="name"
          placeholder="Jane Guest"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>

      <div className={styles.twoCol}>
        <div className={styles.field}>
          <label htmlFor="checkin">Check-in date</label>
          <input
            type="date"
            id="checkin"
            required
            min={today || undefined}
            value={checkin}
            onChange={(e) => handleCheckinChange(e.target.value)}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="checkout">Check-out date</label>
          <input
            type="date"
            id="checkout"
            required
            min={checkin || today || undefined}
            value={checkout}
            onChange={(e) => setCheckout(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="guests">Number of guests</label>
        <input
          type="number"
          id="guests"
          min={1}
          max={20}
          required
          value={guests}
          onChange={(e) => setGuests(e.target.value)}
        />
      </div>

      <div className={styles.twoCol}>
        <div className={styles.field}>
          <label htmlFor="whatsapp">Your WhatsApp number</label>
          <input
            type="tel"
            id="whatsapp"
            placeholder="+91 XXXXXXXXXX"
            required
            value={whatsapp}
            onChange={(e) => setWhatsapp(e.target.value)}
          />
        </div>
        <div className={styles.field}>
          <label htmlFor="email">Your email (optional)</label>
          <input
            type="email"
            id="email"
            placeholder="you@email.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
      </div>

      <div className={styles.field}>
        <label htmlFor="note">Anything else? (optional)</label>
        <textarea
          id="note"
          rows={3}
          placeholder="Early check-in, scooter booking, special occasion, etc."
          value={note}
          onChange={(e) => setNote(e.target.value)}
        />
      </div>

      <label className={styles.consent}>
        <input
          type="checkbox"
          required
          checked={consent}
          onChange={(e) => setConsent(e.target.checked)}
        />
        <span>
          I agree to the{" "}
          <a href="/privacy" target="_blank" rel="noreferrer">
            Privacy Policy
          </a>
          .
        </span>
      </label>

      <button type="submit" className={styles.submitBtn}>
        Send inquiry via WhatsApp →
      </button>
      <p className={styles.privacyNote}>
        Your inquiry opens in WhatsApp — Meta handles that message. Nothing is stored on this
        site.
      </p>
      <div className={`${styles.confirmMsg} ${showConfirm ? styles.show : ""}`}>
        WhatsApp should be opening in a new tab with your inquiry pre-filled. If it didn&apos;t
        open, check your pop-up blocker, or email us directly at the address in the footer.
      </div>
    </form>
  );
}
