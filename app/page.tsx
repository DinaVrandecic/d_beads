import HeroSection from "./_components/HeroSection";
import CollectionSection from "./_components/CollectionSection";
import CustomerReviews from "./_components/CustomerReviews";
import AddProducts from "./firebase/addProducts";

export default function Home() {
  return (
    <main className="flex flex-col justify-between items-center relative">
      <HeroSection />
      <CollectionSection />
      <CustomerReviews />
      <AddProducts />
    </main>
  );
}
