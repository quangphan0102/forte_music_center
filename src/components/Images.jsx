import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';
import IMAGES_DATA from "../DATA/IMAGES_DATA"



export default function Images() {
  const [modalImageIndex, setModalImageIndex] = useState(null);

  const handleImageClick = (index) => {
    setModalImageIndex(index);
  };

  const handleCloseModal = () => {
    setModalImageIndex(null);
  };

  const handlePrevImage = () => {
    setModalImageIndex(prevIndex => Math.max(0, prevIndex - 1));
  };

  const handleNextImage = () => {
    setModalImageIndex(prevIndex => Math.min(IMAGES_DATA.length - 1, prevIndex + 1));
  };

  const currentImage = modalImageIndex !== null ? IMAGES_DATA[modalImageIndex] : null;

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#dfeeff] relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#1b73c5] text-center mb-16"
          style={{ 
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2), 0px 4px 8px rgba(0, 0, 0, 0.1)'
          }}>
          Hình Ảnh
        </h2>

        {/* Image Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 md:gap-4 grid-flow-dense">
          {IMAGES_DATA.map((image, index) => (
            <motion.div
              key={image.id}
              className={`relative group cursor-pointer overflow-hidden rounded-2xl ${image.gridClass}`}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.2 }}
              onClick={() => handleImageClick(index)}
            >
              {/* Display actual image */}
              <img 
                src={image.src}
                alt={image.alt}
                className="absolute inset-0 w-full h-full object-cover"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-300 flex items-center justify-center">
                <div className="transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-300">
                  <span className="text-white text-lg font-medium px-4 py-2 bg-black bg-opacity-50 rounded-full">
                    {image.category}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Modal for enlarged image */}
        {modalImageIndex !== null && currentImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-75 p-4"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              className="relative max-w-4xl w-full"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Display actual image in modal */}
              <img 
                src={currentImage.src}
                alt={currentImage.alt}
                className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
              />
              
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 text-white bg-black bg-opacity-50 rounded-full p-2 hover:bg-opacity-75 transition-all duration-300 z-10"
                onClick={handleCloseModal}
                aria-label="Close modal"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Navigation Buttons */}
              {modalImageIndex > 0 && (
                <button
                  className="absolute top-1/2 left-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-75 transition-all duration-300 z-10"
                  onClick={(e) => { e.stopPropagation(); handlePrevImage(); }}
                  aria-label="Previous image"
                >
                  <ChevronLeftIcon className="h-6 w-6" />
                </button>
              )}

              {modalImageIndex < IMAGES_DATA.length - 1 && (
                <button
                  className="absolute top-1/2 right-4 transform -translate-y-1/2 text-white bg-black bg-opacity-50 rounded-full p-3 hover:bg-opacity-75 transition-all duration-300 z-10"
                  onClick={(e) => { e.stopPropagation(); handleNextImage(); }}
                  aria-label="Next image"
                >
                  <ChevronRightIcon className="h-6 w-6" />
                </button>
              )}
            </motion.div>
          </motion.div>
        )}
      </div>
    </section>
  );
} 