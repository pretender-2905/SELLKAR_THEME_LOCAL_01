"use client";
import { useState, useEffect, useRef } from "react";

export default function HeroCarousel({ slides = [], autoPlay = true, interval = 5000, showIndicators = true }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const timeoutRef = useRef(null);

    const prevSlide = () => {
        setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const nextSlide = () => {
        setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };


    useEffect(() => {
        if (!autoPlay) return;

        timeoutRef.current = setTimeout(() => {
            nextSlide();
        }, interval);

        return () => clearTimeout(timeoutRef.current);
    }, [currentIndex, autoPlay, interval]);

    return (
        <div className="relative w-full h-[130vh] overflow-hidden mb-8">
            {/* Slides */}
            <div className="w-full h-full relative">
                {slides.map((slide, i) => (
                    <div
                        key={i}
                        className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${i === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                            }`}
                    >
                        <img
                            src={slide.image}
                            alt={slide.title}
                            className="w-full h-full object-cover "
                        />
                        {/* <div
                            className={`absolute top-1/2 -translate-y-1/2 max-w-lg text-black ${slide.position === "left" ? "left-22 text-left" : "right-25 text-right"
                                }`}
                        >
                            <p className="tracking-widest text-sm ">{slide.subtitle}</p>
                            <h2 className="text-6xl mt-7 tracking-widest">{slide.title}</h2>
                            <p className="mt-4 text-gray-500">{slide.description}</p>
                            {slide.button && (
                                <button className="mt-6 px-6 py-3 bg-white text-black rounded">
                                    {slide.button}
                                </button>
                            )}
                        </div> */}
                          <div
  className={`
    absolute top-1/2 -translate-y-1/2 max-w-lg
    left-1/2 -translate-x-1/2 text-center  
    sm:left-auto sm:-translate-x-0 
    sm:${slide.position === "left" ? "left-6 text-left" : ""}
    sm:${slide.position === "right" ? "right-6 text-right" : ""}
    sm:${slide.position === "center" ? "left-1/2 -translate-x-1/2 text-center" : ""}
    md:${slide.position === "left" ? "left-12 text-left" : ""}
    md:${slide.position === "right" ? "right-12 text-right" : ""}
    md:${slide.position === "center" ? "left-1/2 -translate-x-1/2 text-center" : ""}
  `}
>
  <p className="tracking-widest text-xs sm:text-sm md:text-base lg:text-base">{slide.subtitle}</p>
  <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 sm:mt-4 md:mt-6">{slide.title}</h2>
  <p className="mt-2 sm:mt-3 md:mt-4 text-gray-500 text-sm sm:text-base md:text-lg lg:text-lg">{slide.description}</p>
  {slide.button && (
    <button className="mt-2 sm:mt-4 md:mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-white text-black rounded">
      {slide.button}
    </button>
  )}
</div>


                    </div>
                ))}
            </div>


            {showIndicators && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            className={`w-2 h-2 rounded-full transition-colors duration-300 ${i === currentIndex ? "bg-black" : "bg-gray-400"
                                }`}
                            onClick={() => setCurrentIndex(i)}
                        />
                    ))}
                </div>
            )}


            <button
                className="absolute top-1/2 left-4 -translate-y-1/2 text-white text-3xl font-bold p-2 z-20"
                onClick={prevSlide}
            >
                &#10094;
            </button>
            <button
                className="absolute top-1/2 right-4 -translate-y-1/2 text-white text-3xl font-bold p-2 z-20"
                onClick={nextSlide}
            >
                &#10095;
            </button>
        </div>
    );
}







// "use client";
// import { useState, useEffect, useRef } from "react";

// export default function HeroCarousel({ slides = [], autoPlay = true, interval = 5000, showIndicators = true }) {
//     const [currentIndex, setCurrentIndex] = useState(0);
//     const timeoutRef = useRef(null);

//     const prevSlide = () => {
//         setCurrentIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//     };

//     const nextSlide = () => {
//         setCurrentIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//     };

//     useEffect(() => {
//         if (!autoPlay) return;

//         timeoutRef.current = setTimeout(() => {
//             nextSlide();
//         }, interval);

//         return () => clearTimeout(timeoutRef.current);
//     }, [currentIndex, autoPlay, interval]);

//     return (
//         <div className="relative w-full h-[70vh] sm:h-[80vh] md:h-[90vh] lg:h-[100vh] overflow-hidden mb-8">


//             <div className="w-full h-full relative">
//                 {slides.map((slide, i) => (
//                     <div
//                         key={i}
//                         className={`absolute inset-0 transition-opacity duration-700 ease-in-out ${i === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"}`}
//                     >
//                         <img
//                             src={slide.image}
//                             alt={slide.title}
//                             className="w-full h-full object-cover"
//                         />
//                         {/* <div
//                             className={`absolute top-1/2 -translate-y-1/2 max-w-lg sm:max-w-md md:max-w-lg lg:max-w-xl text-black 
//                             ${slide.position === "left" ? "left-4 sm:left-6 md:left-12" : "right-4 sm:right-6 md:right-12"} 
//                             text-left sm:text-left md:text-left lg:text-left`}
//                         >
                       

//                             <p className="tracking-widest text-xs sm:text-sm md:text-base">{slide.subtitle}</p>
//                             <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 sm:mt-4 md:mt-6">{slide.title}</h2>
//                             <p className="mt-2 sm:mt-3 md:mt-4 text-gray-500 text-sm sm:text-base md:text-lg">{slide.description}</p>
//                             {slide.button && (
//                                 <button className="mt-2 sm:mt-4 md:mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-white text-black rounded">
//                                     {slide.button}
//                                 </button>
//                             )}
//                         </div> */}

//                         <div
//   className={`
//     absolute top-1/2 -translate-y-1/2 max-w-lg
//     left-1/2 -translate-x-1/2 text-center  
//     sm:left-auto sm:-translate-x-0 
//     sm:${slide.position === "left" ? "left-6 text-left" : ""}
//     sm:${slide.position === "right" ? "right-6 text-right" : ""}
//     sm:${slide.position === "center" ? "left-1/2 -translate-x-1/2 text-center" : ""}
//     md:${slide.position === "left" ? "left-12 text-left" : ""}
//     md:${slide.position === "right" ? "right-12 text-right" : ""}
//     md:${slide.position === "center" ? "left-1/2 -translate-x-1/2 text-center" : ""}
//   `}
// >
//   <p className="tracking-widest text-xs sm:text-sm md:text-base lg:text-base">{slide.subtitle}</p>
//   <h2 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl mt-2 sm:mt-4 md:mt-6">{slide.title}</h2>
//   <p className="mt-2 sm:mt-3 md:mt-4 text-gray-500 text-sm sm:text-base md:text-lg lg:text-lg">{slide.description}</p>
//   {slide.button && (
//     <button className="mt-2 sm:mt-4 md:mt-6 px-4 sm:px-6 py-2 sm:py-3 bg-white text-black rounded">
//       {slide.button}
//     </button>
//   )}
// </div>


//                     </div>
//                 ))}
//             </div>


//             {showIndicators && (
//                 <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
//                     {slides.map((_, i) => (
//                         <button
//                             key={i}
//                             className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-colors duration-300 ${i === currentIndex ? "bg-black" : "bg-gray-400"}`}
//                             onClick={() => setCurrentIndex(i)}
//                         />
//                     ))}
//                 </div>
//             )}


//             <button
//                 className="absolute top-1/2 left-2 sm:left-4 -translate-y-1/2 text-white text-2xl sm:text-3xl md:text-4xl font-bold p-2 z-20"
//                 onClick={prevSlide}
//             >
//                 &#10094;
//             </button>
//             <button
//                 className="absolute top-1/2 right-2 sm:right-4 -translate-y-1/2 text-white text-2xl sm:text-3xl md:text-4xl font-bold p-2 z-20"
//                 onClick={nextSlide}
//             >
//                 &#10095;
//             </button>
//         </div>
//     );
// }
