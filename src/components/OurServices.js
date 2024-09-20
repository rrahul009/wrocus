import Link from 'next/link';
import { FaCodepen, FaMobileAlt, FaCheckCircle, FaLaptopCode, FaPaintBrush, FaUserFriends } from 'react-icons/fa';

const services = [
    { icon: FaCodepen, title: 'Web Development', description: [
      'We carry more than just good coding skills.',
      'Our experience makes us stand out from other web development firms.'
    ]},
    { icon: FaMobileAlt, title: 'Mobile Development', description: [
      'Expertise in creating seamless mobile applications.',
      'Innovative solutions for both iOS and Android platforms.'
    ]},
    { icon: FaCheckCircle, title: 'QA and Testing', description: [
      'Ensuring quality with rigorous testing processes.',
      'Delivering reliable and bug-free software.'
    ]},
    { icon: FaLaptopCode, title: 'IT Consulting', description: [
      'Strategic IT consulting to optimize your business.',
      'Tailored solutions for your unique IT needs.'
    ]},
    { icon: FaPaintBrush, title: 'UX/UI Design', description: [
      'Designing intuitive and user-friendly interfaces.',
      'Enhancing user experience through creative solutions.'
    ]},
    { icon: FaUserFriends, title: 'Dedicated Team', description: [
      'Providing a dedicated team for your projects.',
      'Skilled professionals working as an extension of your team.'
    ]}
  ];
  

const ServiceCards = () => {
  return (
  <>
     <div className="flex flex-col md:flex-row justify-between items-center p-10">
                <div className="text-center md:text-left mb-6 md:mb-0">
                    <h2 className="text-purple-700 font-bold text-lg md:text-xl uppercase mb-2">
                        Our Service
                    </h2>
                    <p className="text-black text-2xl md:text-4xl font-bold">
                        We offer a wide variety<br /> of IT services.
                    </p>
                </div>

                <div>
                    <button className="bg-customBlue text-white py-3   px-8  hover:bg-purple-600 transition-colors duration-300">
                        All Services
                    </button>
                </div>
            </div>

            <div className="p-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <Link
          href="/about"
            key={index}
            className="bg-white text-black p-6 rounded-lg shadow-lg transition-transform transition-shadow duration-300 ease-out hover:shadow-2xl hover:scale-105 flex items-start hover:bg-blue-20 hover:text-blue-800"
            data-aos="zoom-in-down"
          >
            <div className="flex-shrink-0 mr-4">
              <service.icon className="text-blue-500 text-4xl" /> {/* Adjusted icon size */}
            </div>
            <div className="flex-1">
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <div className="text-gray-700">
                {service.description.map((line, idx) => (
                  <p key={idx} className='mt-1'>{line}</p>  
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </>
  );
};

export default ServiceCards;
