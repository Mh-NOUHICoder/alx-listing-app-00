import React, { useState } from "react";
import Image from "next/image";
import { Card } from "@/components/common/Card";
import Button from "@/components/common/Button";
import Pill from "@/components/common/Pill";
import { IMAGES } from "@/constants/images";

const sampleListings = [
  { id: 1, title: "Cozy studio near downtown", description: "Perfect for short stays — 1 bed, 1 bath", imageUrl: "/assets/images/cozy-studio.png", category: ["Studio"] },
  { id: 2, title: "Bright apartment with balcony", description: "2 beds, great light, fast Wi-Fi", imageUrl: "/assets/images/bright-apartment.jpg", category: ["Apartment"] },
  { id: 3, title: "Modern loft", description: "Open plan, great for photoshoots", imageUrl: "/assets/images/modern-loft.jpg", category: ["Loft"] },
];

// Define filter options
const FILTERS = ["Studio", "Apartment", "Loft"];

const Home: React.FC = () => {
  const [activeFilter, setActiveFilter] = useState<string | null>(null);

  // Filter listings based on active filter
  const filteredListings = activeFilter
    ? sampleListings.filter(l => l.category.includes(activeFilter))
    : sampleListings;

  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[80vh] md:h-[75vh] pt-12 flex items-center justify-center">
        <Image src={IMAGES.HERO_BG} alt="Hero background" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative z-10 text-center px-4 max-w-4xl">
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-extrabold text-white mb-4 drop-shadow-lg">
            Find your favorite place here!
          </h1>
          <p className="text-base md:text-lg text-gray-200 mb-6">
            The best prices for over 2 million properties worldwide.
          </p>
          <Button
            label="Top level button"
            onClick={() => alert("Top-level button clicked")}
            className="bg-transparent border border-2 border-indigo-600 text-white hover:bg-indigo-600/90"
          />
        </div>
      </section>

      {/* Filter Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-wrap gap-3">
        {FILTERS.map(filter => (
          <Pill
            key={filter}
            label={filter}
            active={activeFilter === filter}
            onClick={() => setActiveFilter(activeFilter === filter ? null : filter)}
          />
        ))}
      </section>

      {/* Listings Section */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
          {filteredListings.map(l => (
            <Card
              key={l.id}
              id={String(l.id)}
              title={l.title}
              description={l.description}
              imageUrl={l.imageUrl}
            />
          ))}
        </section>
      </main>
    </>
  );
};

export default Home;
