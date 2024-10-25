import { useState } from "react";

const SlotMachine = () => {
  const images = [
    "/image/scatter.jpeg",
    "/image/ali.jpg",
    "/image/hermawan.jpg",
    "/image/syauqi.jpg",
    "/image/marsel.jpg",
    "/image/annan.jpg",
    "/image/faruq.jpg",
    "/image/ainun.jpg",
    "/image/danu.jpg",
    "/image/ikfal.jpg",
    "/image/irpak.jpg",
    "/image/dani.jpg",
    "/image/regi.jpg",
    "/image/hadi.jpg",
    "/image/akmal.jpg",
  ];

  const [displayedImages, setDisplayedImages] = useState(
    Array(25).fill(images[0])
  );
  const [isSpinning, setIsSpinning] = useState(false);

  const randomWithProbability = (probability) => Math.random() < probability;

  const spinReels = () => {
    setIsSpinning(true);

    setTimeout(() => {
      const randomImages = Array(25).fill(null);

      for (let rowIndex = 0; rowIndex < 5; rowIndex++) {
        for (let columnIndex = 0; columnIndex < 5; columnIndex++) {
          const index = rowIndex * 5 + columnIndex;

          if (randomWithProbability(0.01)) {
            const randomImage =
              images[Math.floor(Math.random() * images.length)];
            for (let i = 0; i < 5; i++) {
              randomImages[rowIndex * 5 + i] = randomImage;
            }
            break;
          }

          if (randomWithProbability(0.01)) {
            const randomImage =
              images[Math.floor(Math.random() * images.length)];
            for (let i = 0; i < 5; i++) {
              randomImages[i * 5 + columnIndex] = randomImage;
            }
            break;
          }

          if (!randomImages[index]) {
            randomImages[index] =
              images[Math.floor(Math.random() * images.length)];
          }
        }
      }

      setDisplayedImages(randomImages);
      setIsSpinning(false);
    }, 1000);
  };

  return (
    <div className="bg-cover bg-center w-full h-screen flex items-center justify-center">
      <div className="relative bg-white border-4 border-yellow-600 rounded-xl shadow-lg p-6">
        <div className="text-center text-3xl text-yellow-600 font-bold mb-4">
          Pick Your Team
        </div>
        <div className="grid grid-cols-5 gap-4">
          {Array(5)
            .fill(0)
            .map((_, rowIndex) => (
              <div key={rowIndex} className="grid grid-cols-1 gap-4">
                {Array(3)
                  .fill(0)
                  .map((_, columnIndex) => (
                    <div
                      key={columnIndex}
                      className={`slot-container w-24 h-24 bg-gray-100 border-2 border-yellow-600 rounded-lg overflow-hidden relative`}
                    >
                      <div
                        className={`image-container w-full h-full absolute transition-transform duration-[1s] ease-in-out`}
                        style={{
                          transform: isSpinning
                            ? `translateY(${Math.random() * 1000}px)` // Randomize final scroll position for each reel
                            : "translateY(0)",
                        }}
                      >
                        <img
                          src={displayedImages[rowIndex * 5 + columnIndex]}
                          alt={`Slot image ${rowIndex * 5 + columnIndex + 1}`}
                          className="slot-image w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  ))}
              </div>
            ))}
        </div>
        <button
          className="absolute top-1/2 -left-16 bg-yellow-600 text-white p-4 rounded-full hover:bg-yellow-700 focus:outline-none transform transition-transform duration-300"
          onClick={spinReels}
        >
          Start
        </button>
      </div>
    </div>
  );
};

export default SlotMachine;
