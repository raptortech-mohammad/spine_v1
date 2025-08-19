import LandingPage from "@/components/LandingPage/LandingPage";
import Footer from "@/components/Layout/Footer/Footer";
import NavBar from "@/components/Layout/NavBar/NavBar";
import TapTop from "@/components/Layout/TapTop/TapTop";

export default function Home() {
  return (
    <>
      <NavBar />
      <LandingPage />
      <Footer />
      <TapTop />
    </>
  );
}
