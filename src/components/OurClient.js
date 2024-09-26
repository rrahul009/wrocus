import React from 'react';

const OurClient = () => {
  const logos = [
    {
      src: "https://images.seeklogo.com/logo-png/53/1/aaj-tak-news-logo-png_seeklogo-534139.png",
      alt: "Aaj Tak",
      size: { width: 80, height: 60 }
    },
    {
      src: "https://www.pluginhive.com/wp-content/uploads/2021/09/DELHIVERY-VAN.jpg",
      alt: "Delhivery",
      size: { width: 120, height: 80 }
    },
    {
      src: "https://yt3.googleusercontent.com/rxxycwwjFXuC-eQNBcklj4P-uduSg-aHJJ7w77Ynf_LZV742N5tvTFSnJwRmV5CnNhFNbj7uKdQ=s900-c-k-c0x00ffffff-no-rj",
      alt: "Client Logo",
      size: { width: 80, height: 80 }
    },
    {
      src: "https://wrocus.com/wp-content/uploads/2021/08/timesinternetlimited.png",
      alt: "Times Internet",
      size: { width: 80, height: 80 }
    },
    {
      src: "https://cdn.brandfetch.io/id0rnPjco0/w/400/h/400/theme/dark/icon.png?k=id64Mup7ac&t=1668516570940",
      alt: "Brand Logo",
      size: { width: 80, height: 60 }
    },
    {
      src: "https://www.saasbuddy.in/community/wp-content/uploads/2024/03/magicbrick-1200x900.png",
      alt: "Magicbricks",
      size: { width: 80, height: 60 }
    },
    {
      src: "https://exchange4media.gumlet.io/news-photo/110551-hungamadigital1.jpg",
      alt: "Hungama",
      size: { width: 80, height: 80 }
    }
  ];

  return (
    <>
      <div className='p-3 py-5 bg-gray-100'>
        <h2 className='text-4xl font-bold text-center mb-8'>Clients We Support</h2>

        {/* Inline style for animation */}
        <style>
          {`
            @keyframes slide {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-100%);
              }
            }
            .sliderr {
              display: flex;
              animation: slide 15s linear infinite;
              white-space: nowrap;
            }
            
            .logo-container {
              display: flex;
              flex-shrink: 0;
            }
            .logo-container .logo {
              flex: 0 0 auto; /* Prevent shrinking */
              margin-right: 20px; /* Space between logos */
            }
          `}
        </style>

        <div className='overflow-hidden bg-white p-4'>
          <div className='sliderr'>
            <div className='logo-container flex justify-between gap-20'>
              {logos.map((logo, index) => (
                <div key={index} className='logo flex items-center p-2 bg-gray-50 hover:shadow-xl transition-shadow duration-300 rounded-lg'>
                  <img
                    src={logo.src}
                    width={logo.size.width}
                    height={logo.size.height}
                    alt={logo.alt}
                    className='object-contain'
                  />
                </div>
              ))}
              {/* Duplicate logos for seamless effect */}
              {logos.map((logo, index) => (
                <div key={`duplicate-${index}`} className='logo flex justify-between items-center 
                p-4 bg-gray-50 hover:shadow-xl transition-shadow duration-300 rounded-lg'>
                  <img
                    src={logo.src}
                    width={logo.size.width}
                    height={logo.size.height}
                    alt={logo.alt}
                    className='object-contain'
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurClient;
