"use client";

import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import Footer from "@/components/Footer";
import Approach from "@/components/Approach";
import Experience from "@/components/Experience";
import Infrastructure from "@/components/Infrastructure";
import GeoMap from "@/components/GeoMap";
import { FloatingNav } from "@/components/ui/FloatingNavbar";

const HomePage = () => {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Experience />
        <Infrastructure />
        <GeoMap />
        <Approach />
        <Footer />
      </div>
    </main>
  );
};

export default HomePage;