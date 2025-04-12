import React from 'react';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const posters = [
    { 
        id: 1, 
        src: "https://images.unsplash.com/photo-1742156345582-b857d994c84e?q=80&w=2070&auto=format&fit=crop", 
        title: "Movie 1",
        description: "An action-packed adventure where heroes rise against all odds."
    },
    { 
        id: 2, 
        src: "https://images.unsplash.com/photo-1742107082664-83b3125267ac?q=80&w=2070&auto=format&fit=crop", 
        title: "Movie 2",
        description: "A thrilling mystery that will keep you on the edge of your seat."
    },
];

const CarouselCustom = () => {
  return (
    <div className="w-full h-[80vh] mt-0 overflow-hidden">
      <Carousel showThumbs={false} autoPlay infiniteLoop>
        {posters.map((poster) => (
          <div key={poster.id} className="relative w-full h-[80vh]">
            {/* Image */}
            <img
              src={poster.src}
              alt={poster.title}
              className="w-full h-full object-cover"
            />
            
            {/* Title & Description Box - Positioned Bottom Left */}
            {/* <div className="absolute bottom-10 left-10 bg-black/30 rounded-md text-white p-6 w-full max-w-2xl">
              <h3 className="text-4xl font-bold">{poster.title}</h3>
              <p className="text-lg mt-2">{poster.description}</p>
            </div> */}
            <div className="absolute bottom-0 left-0 transform translate-x-0 translate-y-0 bg-black/30 rounded-md text-white pt-6 w-full h-1/3">
              <div className='w-2/3'>
              <h3 className="text-3xl font-bold">{poster.title}</h3>
              <p className="text-lg mt-2">{poster.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default CarouselCustom;
