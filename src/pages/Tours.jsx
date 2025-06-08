import { useState } from "react";

const tours = [
    {
        id: 1,
        title: "Paris Getaway",
        description: "Explore the romantic city of lights with guided tours and fine dining.",
        price: "$1,499",
        image: "/images/paris.avif",
    },
    {
        id: 2,
        title: "Safari in Kenya",
        description: "Experience breathtaking wildlife on a guided African safari adventure.",
        price: "$2,299",
        image: "/images/safari.avif",
    },
    {
        id: 3,
        title: "Tokyo Discovery",
        description: "Dive into Tokyo's vibrant culture, cuisine, and technology scene.",
        price: "$1,899",
        image: "/images/tokyo.avif",
    },
    {
        id: 4,
        title: "Barcelona City Break",
        description: "Wander the colorful streets of Barcelona and admire Gaudí's architecture.",
        price: "$1,299",
        image: "/images/barcelona.avif",
    },
    {
        id: 5,
        title: "Madrid Essentials",
        description: "Experience art, tapas, and flamenco in Spain’s vibrant capital city.",
        price: "$1,199",
        image: "/images/madrid.avif",
    },
    {
        id: 6,
        title: "Amsterdam Adventure",
        description: "Cruise the canals and enjoy the laid-back charm of Amsterdam.",
        price: "$1,349",
        image: "/images/amsterdam.avif",
    },
];

const ITEMS_PER_PAGE = 3;

const Tours = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(tours.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentTours = tours.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  const handlePrev = () => {
    setCurrentPage((prev) => Math.max(prev - 1, 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  };

  return (
    <section
      className="relative min-h-screen bg-cover bg-center bg-no-repeat text-white"
      style={{ backgroundImage: "url('/images/backgroundImg.jpeg')" }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative z-10 px-8 py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">Explore Our Tours</h2>
        <p className="text-lg max-w-2xl mx-auto mb-10">
          Handpicked travel experiences from around the world, just for you.
        </p>

        {/* Cards */}
        <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 max-w-6xl mx-auto mb-10">
          {currentTours.map((tour) => (
            <div key={tour.id} className="bg-white text-black rounded-lg overflow-hidden shadow-lg">
              <img src={tour.image} alt={tour.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{tour.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{tour.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-blue-600">{tour.price}</span>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
                    Book Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center gap-4">
          <button
            onClick={handlePrev}
            disabled={currentPage === 1}
            className="bg-white text-black px-4 py-2 rounded disabled:opacity-50"
          >
            Previous
          </button>
          <span className="text-white self-center">
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={handleNext}
            disabled={currentPage === totalPages}
            className="bg-white text-black px-4 py-2 rounded disabled:opacity-50"
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default Tours;