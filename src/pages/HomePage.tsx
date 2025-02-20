import Hero from "@/components/sections/Hero";
import PortfolioGrid from "@/components/sections/PortfolioGrid";
import BlogSection from "@/components/sections/BlogSection";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <PortfolioGrid />
      <BlogSection />
    </div>
  );
};

export default HomePage;