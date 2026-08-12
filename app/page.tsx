import Header from "@/components/Header/Header";
import Hero from "@/components/Hero/Hero";
import StaysGrid from "@/components/StaysGrid/StaysGrid";
import GroupStaysGuide from "@/components/GroupStaysGuide/GroupStaysGuide";
import BookingSection from "@/components/BookingForm/BookingSection";
import ReviewsSection from "@/components/ReviewsSection/ReviewsSection";
import GuestGallerySection from "@/components/GuestGallerySection/GuestGallerySection";
import Footer from "@/components/Footer/Footer";
import { HostModalProvider } from "@/components/HostModal/context";
import HostModal from "@/components/HostModal/HostModal";
import { LightboxProvider } from "@/components/Lightbox/context";
import Lightbox from "@/components/Lightbox/Lightbox";
import { BookingSelectionProvider } from "@/components/BookingForm/context";

export default function Home() {
  return (
    <HostModalProvider>
      <LightboxProvider>
        <BookingSelectionProvider>
          <Header />
          <Hero />
          <StaysGrid />
          <GroupStaysGuide />
          <BookingSection />
          <ReviewsSection />
          <GuestGallerySection />
          <Footer />
          <Lightbox />
          <HostModal />
        </BookingSelectionProvider>
      </LightboxProvider>
    </HostModalProvider>
  );
}
