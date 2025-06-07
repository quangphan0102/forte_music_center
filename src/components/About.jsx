import { useState, useEffect, useRef } from 'react';
import aboutImage1 from '../assets/images/about_images/about_img_1.jpg';
import aboutImage2 from '../assets/images/about_images/about_img_2.jpg';
import aboutImage3 from '../assets/images/about_images/about_img_3.jpg';

const ABOUT_DATA = [
  {
    id: 1,
    title: "Lorem ipsum dolor sit amet",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.",
    image: aboutImage1
  },
  {
    id: 2,
    title: "Consectetur adipiscing elit",
    description: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.",
    image: aboutImage2
  },
  {
    id: 3,
    title: "Sed do eiusmod tempor",
    description: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
    image: aboutImage3
  }
];

export default function About() {
  const [selectedId, setSelectedId] = useState(1);
  const intervalRef = useRef(null);
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 1024);
    };

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const startInterval = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
    }
    intervalRef.current = setInterval(() => {
      setSelectedId(current => current === 3 ? 1 : current + 1);
    }, 3000);
  };

  useEffect(() => {
    startInterval();
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, []);

  const handleNumberClick = (id) => {
    if (id === selectedId) return;
    setSelectedId(id);
    startInterval();
  };

  return (
    <section className="relative min-h-screen w-full bg-[#dfeeff] py-20 px-4 sm:px-6 lg:px-8">
      {/* Simplified background decoration */}
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 opacity-10"
        style={{
          background: 'linear-gradient(45deg, #1b73c5 25%, transparent 25%, transparent 75%, #1b73c5 75%)',
          backgroundSize: '60px 60px'
        }}
      />

      <div className="mx-auto max-w-7xl">
        <h2 className="text-3xl sm:text-4xl font-semibold text-[#1b73c5] text-center mb-16">
          Về Chúng Tôi
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left column - Image */}
          <div className="relative aspect-[4/3] bg-white rounded-2xl overflow-hidden shadow-xl">
            <img 
              key={`current-${selectedId}`}
              src={ABOUT_DATA[selectedId - 1].image}
              alt={`About section ${selectedId}`}
              className="w-full h-full object-cover"
              style={{ objectPosition: 'center' }}
            />
          </div>

          {/* Right column - Numbers and Content */}
          <div className="relative lg:min-h-[600px]">
            {ABOUT_DATA.map((item, index) => (
              <div
                key={item.id}
                className={`w-full ${index < ABOUT_DATA.length - 1 ? 'mb-8' : ''} relative ${isLargeScreen ? 'lg:absolute lg:left-0 lg:w-full lg:mb-0' : ''}`}
                style={isLargeScreen && index !== 0 ? { top: `${index * 200}px` } : {}}
              >
                {/* Vertical dotted line */}
                {isLargeScreen && index < ABOUT_DATA.length - 1 && (
                  <div
                    className="absolute left-8 transform -translate-x-1/2"
                    style={{
                      width: '4px',
                      height: '200px',
                      background: 'linear-gradient(to bottom, #1b73c5 25%, transparent 25%, transparent 75%, #1b73c5 75%)',
                      backgroundSize: '4px 8px',
                      top: '2rem',
                    }}
                  />
                )}

                <div className="flex gap-8">
                  <button
                    onClick={() => handleNumberClick(item.id)}
                    className={`w-16 h-16 rounded-full flex items-center justify-center text-xl sm:text-2xl font-bold transition-colors duration-300 shrink-0
                      ${selectedId === item.id 
                        ? 'bg-[#1b73c5] text-white' 
                        : 'bg-white text-gray-400 hover:bg-[#1b73c5] hover:text-white'
                      } shadow-lg relative z-10`}
                  >
                    {item.id}
                  </button>

                  <div className="flex-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-[#1b73c5] mb-2 sm:mb-4">
                      {item.title}
                    </h3>
                    <p className="text-sm sm:text-base text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
} 