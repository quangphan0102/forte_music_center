import forteLogo from '../assets/images/logos/forte_logo.png';

export default function Hero() {  
  return (
    <div className="relative isolate px-6 pt-14 lg:px-8">
      <div
        className="absolute inset-x-0 -top-40 -z-10 overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#1b73c5] to-[#1b73c5] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>

      <div className="mx-auto max-w-7xl py-24 sm:py-32">
        <div className="grid grid-cols-1 gap-x-8 gap-y-16 sm:grid-cols-2 sm:items-center">
          <div className="text-center sm:text-left flex flex-col items-center sm:items-start">
            <h1 className="text-balance text-4xl font-semibold tracking-tight text-[#1b73c5] sm:text-5xl sm:max-w-xl lg:max-w-2xl tracking-[0.05em]"
              style={{
                fontFamily: "'Montserrat', sans-serif",
                lineHeight: "1.2em",
                textShadow: '2px 2px 4px rgba(20, 121, 216, 0.3), 0px 4px 8px rgba(20, 121, 216, 0.2)'
              }}>
              Trung tâm đào tạo âm nhạc Forte Music
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 max-w-[30ch]">
              Tham gia lớp âm nhạc vui nhộn blah blah blah
            </p>
            <div className="mt-8 flex justify-center sm:justify-start w-full">
              <a
                href="tel:0965509184"
                className="rounded-md bg-[#1b73c5] px-6 py-4 text-base font-semibold text-white shadow-sm hover:bg-[#1b73c5]/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#1b73c5] sm:px-3.5 sm:py-2.5 sm:text-sm transition-colors duration-300"
              >
                Liên hệ ngay
              </a>
            </div>
          </div>

          <div className="relative hidden sm:block">
            <img
              src={forteLogo}
              alt="Happy student"
              className="relative z-10 w-full rounded-2xl"
            />
          </div>
        </div>
      </div>

      <div
        className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true"
      >
        <div
          className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#1b73c5] to-[#1b73c5] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
        />
      </div>
    </div>
  );
} 
