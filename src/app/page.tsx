import Image from "next/image";
import Header from "@/components/header";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Featured from "@/components/featured";
import Trending from "@/components/trending";

export default function Home() {
  return (
    <>
        <Header />
        <Hero />
        <Featured />
        <Trending />
        <Footer />
    </>

  );
}
