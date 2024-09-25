'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import GridViewIcon from '@mui/icons-material/GridView';
import SearchIcon from '@mui/icons-material/Search';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
const Navbar = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);
    const [navbarStyle, setNavbarStyle] = useState('translate-y-0');
    const [lastScrollTop, setLastScrollTop] = useState(0);
    const [isNavbarFixed, setIsNavbarFixed] = useState(false); // Track if the navbar should be fixed
    const [dropdown, setDropdown] = useState(null); // Track which dropdown is open

    // Toggle mobile sidebar
    const toggleSidebar = () => setIsSidebarOpen(prevState => !prevState);

    // Handle scroll event
    const handleScroll = () => {
        const scrollTop = window.scrollY;

        // Show/hide scroll-to-top button
        setShowScrollTop(scrollTop > 300);

        // Determine if the navbar should be fixed
        if (scrollTop > 50) { // Adjust this value based on when you want the navbar to become fixed
            setIsNavbarFixed(true);
        } else {
            setIsNavbarFixed(false);
        }

        // Show/hide navbar based on scroll direction
        if (scrollTop > lastScrollTop) {
            // Scrolling down
            if (scrollTop > 50) { // Only hide navbar if it has already been fixed
                setNavbarStyle('-translate-y-20'); // Adjust this value based on the height of your navbar
            }
        } else {
            // Scrolling up
            setNavbarStyle('translate-y-0');
        }
        setLastScrollTop(scrollTop);
    };

    // Scroll to top function
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    // Setup event listeners
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [lastScrollTop]);

    return (
        <>
            {/* Sidebar for mobile view */}
            <div
                className={`fixed inset-0 top-0 left-0 p-4 bg-white bg-opacity-100 w-full h-full z-50 transition-transform transform
                ${isSidebarOpen ? 'translate-x-0' : 'translate-x-full'}`}
                aria-hidden={!isSidebarOpen}
            >
                <div className="flex flex-col h-full p-6 border-l border-gray-200 z-50">
                    <button
                        aria-label="Close menu"
                        className="text-gray-600 mb-6  self-end hover:text-gray-800 transition-colors duration-300"
                        onClick={toggleSidebar}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                        </svg>
                    </button>
                    <ul className="flex flex-col space-y-4 text-center">
                        <li>
                            <Link href="/" passHref>
                                <div className="text-black text-lg transition-transform duration-300 transform hover:scale-105 hover:bg-red-500 cursor-pointer px-4 py-2">
                                    Home
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about" passHref>
                                <div className="text-black text-lg transition-transform duration-300 transform hover:scale-105 hover:bg-red-500 cursor-pointer px-4 py-2">
                                    Company
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/services" passHref>
                                <div className="text-black text-lg transition-transform duration-300 transform hover:scale-105 hover:bg-red-500 cursor-pointer px-4 py-2">
                                    Services
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact" passHref>
                                <div className="text-black text-lg transition-transform duration-300 transform hover:scale-105 hover:bg-red-500 cursor-pointer px-4 py-2">
                                    Contact
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link href="/blog" passHref>
                                <div className="text-black text-lg transition-transform duration-300 transform hover:scale-105 hover:bg-red-500 cursor-pointer px-4 py-2">
                                    Blog
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>

            {/* Main Navbar */}
            <nav className={`sticky top-0 bg-white p-2 shadow-lg z-40 w-full transition-transform duration-300 ${navbarStyle}`}>
                <div className="container mx-auto flex items-center justify-between px-4">
                    <div className="text-white text-lg font-bold">
                        <Link href="/">
                            <img src="https://media.licdn.com/dms/image/v2/D560BAQEoGKndHrp88w/company-logo_200_200/company-logo_200_200/0/1726744040758/wrocus_logo?e=2147483647&v=beta&t=kWbtChGnL8NdFa28L1sZOBT0TsDNXLqFcKLi5HCUooI" height="50px" width="60px" alt="Logo" />
                        </Link>
                    </div>
                    <button
                        aria-label="Toggle navigation"
                        aria-expanded={isSidebarOpen}
                        aria-controls="sidebar-menu"
                        className="text-black lg:hidden"
                        onClick={toggleSidebar}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                        </svg>
                    </button>
                    <div className="hidden lg:flex lg:items-center lg:justify-center flex-grow">
                        <ul className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0 gap-2">
                            {/* Industries Dropdown */}
                            {/* <li className="relative">
                                <button 
                                    className="text-black font-medium hover:text-blue-800 focus:outline-none"
                                    onClick={() => setDropdown(dropdown === 'industries' ? null : 'industries')}
                                >
                                    Industries<ArrowDropDownIcon/>
                                </button>
                                {dropdown === 'industries' && (
                                    <ul className="absolute top-full left-0 mt-2 bg-white text-black shadow-lg rounded-lg w-48">
                                        <li><Link href="/industry1" className="block px-4 py-2 hover:bg-gray-200">Software Development</Link></li>
                                        <li><Link href="/industry2" className="block px-4 py-2 hover:bg-gray-200"> Cybersecurity</Link></li>
                                        <li><Link href="/industry3" className="block px-4 py-2 hover:bg-gray-200">Customer Support</Link></li>
                                        
                                    </ul>
                                )}
                            </li> */}


                            {/* Company Dropdown */}
                            {/* <li className="relative">
                                <button 
                                    className="text-black font-medium hover:text-blue-800 focus:outline-none"
                                    onClick={() => setDropdown(dropdown === 'company' ? null : 'company')}
                                >
                                    Company<ArrowDropDownIcon/>
                                </button>
                                {dropdown === 'company' && (
                                    <ul className="absolute top-full left-0 mt-2 bg-white text-black shadow-lg rounded-lg w-48">
                                        <li><Link href="/about" className="block px-4 py-2 hover:bg-gray-200">About Us</Link></li>
                                        <li><Link href="/team" className="block px-4 py-2 hover:bg-gray-200">Our Team</Link></li>
                                        <li><Link href="/careers" className="block px-4 py-2 hover:bg-gray-200">Careers</Link></li>
                                    </ul>
                                )}
                            </li> */}
                            {/* Home  */}
                            <li><Link href="/" className="text-gray-700 font-medium hover:text-blue-800">Home</Link></li>

                            
                            {/* Talent Recruitment */}
                             
                            <li><Link href="/talentrecruitment" className="text-gray-700 font-medium hover:text-blue-800">Talent Recruitment</Link></li>

                            

                            {/* Services Dropdown */}
                            {/* <li className="relative">
                                <button 
                                    className="text-black font-medium hover:text-blue-800 focus:outline-none"
                                    onClick={() => setDropdown(dropdown === 'services' ? null : 'services')}
                                >
                                    Services<ArrowDropDownIcon/>
                                </button>
                                {dropdown === 'services' && (
                                    <ul className="absolute top-full left-0 mt-2 bg-white text-black shadow-lg rounded-lg  " style={{width:'250px'}}>
                                        <li><Link href="/service1" className="block px-4 py-2 hover:bg-gray-200 ">Tech Recruitment</Link></li>
                                        <li><Link href="/service1" className="block px-4 py-2 hover:bg-gray-200 ">Web Development</Link></li>
                                        <li><Link href="/service1" className="block px-4 py-2 hover:bg-gray-200 ">Mobile Development</Link></li>
                                        <li><Link href="/service1" className="block px-4 py-2 hover:bg-gray-200 ">Artificial Intelligence</Link></li>
                                        <li><Link href="/service1" className="block px-4 py-2 hover:bg-gray-200 ">Data analytics</Link></li>
                                        <li><Link href="/service1" className="block px-4 py-2 hover:bg-gray-200 ">Data Science</Link></li>
                                        <li><Link href="/service2" className="block px-4 py-2 hover:bg-gray-200 ">Client-Based Hiring Solutions</Link></li>
                                        <li><Link href="/service3" className="block px-4 py-2 hover:bg-gray-200 ">Executive Search</Link></li>
                                    </ul>
                                )}
                            </li> */}
                            {/* servce */}
                            <li><Link href="/service" className="text-gray-700 font-medium hover:text-blue-800">Service</Link></li>


                            <li><Link href="/contact" className="text-gray-700 font-medium hover:text-blue-800">Odoo</Link></li>
                            <li><Link href="/resourcecenter" className="text-gray-700 font-medium hover:text-blue-800"> Resource Center</Link></li>

                            <li><Link href="/about" className="text-gray-700 font-medium hover:text-blue-800">About</Link></li>
                            {/* <li><Link href="/blog" className="text-black font-medium hover:text-blue-800">Contact</Link></li> */}
                        </ul>
                    </div>
                    <div className="text-gray-800 text-lg  flex items-center space-x-4">
                        {/* <SearchIcon style={{ fontSize: 24 }} /> */}
                        {/* <GridViewIcon style={{ fontSize: 24 }} /> */}
                    </div>
                </div>
            </nav>

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-4 right-4 bg-gray-500 z-20 text-white p-3 rounded-full shadow-lg hover:bg-black transition-colors duration-300"
                    aria-label="Scroll to top"
                >
                    <ArrowUpwardIcon style={{ fontSize: 30 }} />
                </button>
            )}
        </>
    );
};

export default Navbar;
