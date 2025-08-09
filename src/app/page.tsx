import Header from "@/components/header";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import Featured from "@/components/featured";
import Trending from "@/components/trending";
import Announcement from "@/components/announcement";
import Subscribe from "@/components/subscribe";
import TrendingTopics from "@/components/trendingTopics";
import BlogSection from "@/components/blogsSection";

export default function Home() {
  return (
    <>
        <Announcement />
        <Header />
        <Hero />
        <Featured />
        <Trending />
        {/* <BlogSection /> */}
        {/* <AllFeatures /> */}
        {/* <NewsLetter /> */}
        <TrendingTopics />
        <Subscribe />
        <Footer />
    </>

  );
}
