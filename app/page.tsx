import Header from "@/components/organisms/Header";
import Hero from "@/components/organisms/Hero";
import Industries from "@/components/organisms/industries";
import BusinessNeeds from "@/components/organisms/BusinessNeeds";
import ERPAddons from "@/components/organisms/ERPAddons";
import Testimonial from "@/components/organisms/Testimonial";
import Footer from "@/components/organisms/footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Header />
      <Hero />
      <Industries />
      <BusinessNeeds />
      <ERPAddons />
      <Testimonial />
      <Footer />
    </main>
  );
}