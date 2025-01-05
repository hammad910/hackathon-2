import Hero from "@/components/home/hero";
import Features from "@/components/home/features";
import Products from "@/components/home/product";
import About from "@/components/home/about";
import SecondFooter from "@/components/home/secondFooter";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Products />
      <About />
      <SecondFooter />
    </>
  );
}
