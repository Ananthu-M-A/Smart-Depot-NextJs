import Banners from "@/components/Banners";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Posters from "@/components/Posters";
import Scrollers from "@/components/Scrollers";

export default function Home() {
  return (
    <>
      <Navbar />
      <div className="pt-24">
        <Banners />
        <Posters />
        {/* Smartphones */}
        <Scrollers />
        {/* Tools and Equipments */}
        <Scrollers />
      </div>
      <Footer />
    </>
  );
}
