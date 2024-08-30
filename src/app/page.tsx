import Banners from "@/components/Banners";
import Posters from "@/components/Posters";
import Scrollers from "@/components/Scrollers";

export default function Home() {
  return (
    <>
      <Banners />
      <Posters />
      {/* Smartphones */}
      <Scrollers />
      {/* Tools and Equipments */}
      <Scrollers />
    </>
  );
}
