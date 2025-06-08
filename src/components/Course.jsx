import { useState, useRef, useEffect } from 'react';
import { motion, useAnimation, PanInfo } from 'framer-motion';
import COURSES_DATA from '../DATA/COURSE_DATA';
import MusicBackgroundDecoration from './MusicBackgroundDecoration';

export default function Course() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);
  const controls = useAnimation();
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const dragStartX = useRef(0);
  const dragStartTime = useRef(0);

  useEffect(() => {
    const updateWidth = () => {
      if (containerRef.current) {
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };

    updateWidth();
    window.addEventListener('resize', updateWidth);
    return () => window.removeEventListener('resize', updateWidth);
  }, []);

  const snapToNearestCard = () => {
    controls.start({
      x: -currentIndex * containerWidth,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    });
  };

  const handleDragStart = (event, info) => {
    setIsDragging(true);
    dragStartX.current = info.point.x;
    dragStartTime.current = Date.now();
  };

  const moveToNextCard = (direction) => {
    const nextIndex = Math.max(0, Math.min(COURSES_DATA.length - 1, currentIndex + direction));
    if (nextIndex !== currentIndex) {
      setCurrentIndex(nextIndex);
      controls.start({
        x: -nextIndex * containerWidth,
        transition: {
          type: "spring",
          stiffness: 400,
          damping: 40
        }
      });
    } else {
      snapToNearestCard();
    }
  };

  const handleDrag = (event, info) => {
    if (!isDragging) return;

    const currentTime = Date.now();
    const dragDuration = currentTime - dragStartTime.current;
    const dragDistance = info.point.x - dragStartX.current;
    const dragSpeed = Math.abs(dragDistance / dragDuration);
    
    // Reset nếu kéo quá chậm
    if (dragDuration > 300 || dragSpeed < 0.5) {
      snapToNearestCard();
      return;
    }

    const threshold = containerWidth * 0.2; // Tăng ngưỡng lên 20%
    if (Math.abs(dragDistance) > threshold) {
      const direction = dragDistance > 0 ? -1 : 1;
      moveToNextCard(direction);
      setIsDragging(false);
      dragStartX.current = info.point.x;
      dragStartTime.current = currentTime;
    }
  };

  const handleDragEnd = (event, info) => {
    setIsDragging(false);
    const dragDuration = Date.now() - dragStartTime.current;
    const dragDistance = info.point.x - dragStartX.current;
    const dragSpeed = Math.abs(dragDistance / dragDuration);

    if (dragDuration <= 300 && dragSpeed >= 0.5) {
      const direction = dragDistance > 0 ? -1 : 1;
      moveToNextCard(direction);
    } else {
      snapToNearestCard();
    }
  };

  const goToSlide = (index) => {
    setCurrentIndex(index);
    controls.start({
      x: -index * containerWidth,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 40
      }
    });
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white relative overflow-hidden">
      {/* Background Decoration */}
      <MusicBackgroundDecoration />

      <div className="max-w-7xl mx-auto relative">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#1b73c5] text-center mb-16"
          style={{ 
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.2), 0px 4px 8px rgba(0, 0, 0, 0.1)'
          }}>
          Các Khóa Học
        </h2>

        {/* Desktop & Tablet View */}
        <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {COURSES_DATA.map((course) => (
            <div
              key={course.id}
              className={`${course.bgColor} rounded-3xl p-8 relative overflow-hidden group hover:shadow-lg transition-shadow duration-300 h-[300px]`}
            >
              {/* Category Tag */}
              <span className={`inline-block py-2 rounded-full text-sm font-medium ${course.textColor} mb-4`}>
                {course.category}
              </span>

              {/* Title */}
              <h3 className={`text-2xl font-bold ${course.textColor} mb-3`}>
                {course.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600 mb-12">
                {course.description}
              </p>

              {/* Icon Container - bottom right */}
              <div className="absolute bottom-6 right-6">
                <course.Icon className={`w-12 h-12 ${course.iconColor}`} />
              </div>
            </div>
          ))}
        </div>

        {/* Mobile View with Slider */}
        <div className="sm:hidden relative">
          <div
            ref={containerRef}
            className="overflow-hidden touch-pan-y"
          >
            <motion.div
              className="flex touch-pan-x"
              animate={controls}
              initial={{ x: 0 }}
              drag="x"
              dragConstraints={{ 
                left: -((COURSES_DATA.length - 1) * containerWidth), 
                right: 0 
              }}
              dragElastic={0}
              dragMomentum={false}
              onDragStart={handleDragStart}
              onDrag={handleDrag}
              onDragEnd={handleDragEnd}
              style={{ 
                width: `${COURSES_DATA.length * 100}%`,
              }}
            >
              {COURSES_DATA.map((course) => (
                <div
                  key={course.id}
                  className={`${course.bgColor} rounded-3xl mx-2 p-8 relative overflow-hidden ${
                    isDragging ? '' : 'transition-all duration-300'
                  } h-[300px]`}
                  style={{
                    width: `${100 / COURSES_DATA.length}%`,
                    paddingRight: '1rem'
                  }}
                >
                  {/* Category Tag */}
                  <span className={`inline-block py-2 rounded-full text-sm font-medium ${course.textColor} mb-6`}>
                    {course.category}
                  </span>

                  {/* Title */}
                  <h3 className={`text-2xl font-bold ${course.textColor} mb-4`}>
                    {course.title}
                  </h3>

                  {/* Description */}
                  <p className="text-gray-600">
                    {course.description}
                  </p>

                  {/* Icon Container - bottom right */}
                  <div className="absolute bottom-6 right-6">
                    <course.Icon className={`w-12 h-12 ${course.iconColor}`} />
                  </div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-6">
            {COURSES_DATA.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  currentIndex === index ? 'bg-gray-800 w-4' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 