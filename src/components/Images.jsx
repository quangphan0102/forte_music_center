import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ChevronLeftIcon,
  ChevronRightIcon
} from '@heroicons/react/24/outline';

// Import images
import image1 from '../assets/images/class_images/class_img_10.jpg';
import image2 from '../assets/images/class_images/class_img_2.jpg';
import image3 from '../assets/images/class_images/class_img_3.jpg';
import image4 from '../assets/images/class_images/class_img_4.jpg';
import image5 from '../assets/images/class_images/class_img_5.jpg';
import image6 from '../assets/images/class_images/class_img_6.jpg';
import image7 from '../assets/images/class_images/class_img_7.jpg';
import image8 from '../assets/images/class_images/class_img_8.jpg';

// Placeholder data for images
const IMAGES_DATA = [
  {
    id: 1,
    src: image1, // Use imported image
    alt: 'Hình ảnh hoạt động 1',
    category: 'Hoạt động',
    gridClass: 'md:col-span-2 md:row-span-2 aspect-[4/2.916]' // Rộng hơn, cao hơn (chiều cao tương đương Image 2)
  },
  {
    id: 2,
    src: image2, // Use imported image
    alt: 'Hình ảnh hoạt động 2',
    category: 'Hoạt động',
    gridClass: 'md:col-span-1 md:row-span-2 aspect-[2/3]' // Cao hơn, hẹp hơn (chiều cao tương đương Image 1)
  },
  {
    id: 3,
    src: image3, // Use imported image
    alt: 'Hình ảnh hoạt động 3',
    category: 'Hoạt động',
    gridClass: 'md:col-span-1 md:row-span-1 aspect-[8/9.176]' // Vuông nhỏ (chiều cao tương đương Image 4)
  },
  {
    id: 4,
    src: image4, // Use imported image
    alt: 'Hình ảnh hoạt động 4',
    category: 'Hoạt động',
    gridClass: 'md:col-span-2 md:row-span-1 aspect-[16/9]' // Rộng và ngắn (chiều cao tương đương Image 3)
  },
  {
    id: 5,
    src: image5, // Use imported image
    alt: 'Hình ảnh hoạt động 5',
    category: 'Hoạt động',
    gridClass: 'md:col-span-1 md:row-span-3 aspect-[4/8.73]' // Chiều cao bằng Image 6 + Image 8
  },
  {
    id: 6,
    src: image6, // Use imported image
    alt: 'Hình ảnh hoạt động 6',
    category: 'Hoạt động',
    gridClass: 'md:col-span-1 md:row-span-1 aspect-square' // Vuông nhỏ (tương tự 3)
  },
  {
    id: 7,
    src: image7, // Use imported image
    alt: 'Hình ảnh hoạt động 7',
    category: 'Hoạt động',
    gridClass: 'md:col-span-1 md:row-span-1 aspect-square' // Hình ảnh 7 nhỏ
  },
  {
    id: 8,
    src: image8, // Use imported image
    alt: 'Hình ảnh hoạt động 8',
    category: 'Hoạt động',
    gridClass: 'md:col-span-2 md:row-span-1 aspect-[16/9]' // Hình ảnh 8 chiếm phần còn lại
  }
];

export default function Images() {
  const [selectedImage, setSelectedImage] = useState(null);
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