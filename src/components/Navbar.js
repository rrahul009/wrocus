'use client';
import { useState, useEffect, useRef } from 'react';
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
    const [isNavbarFixed, setIsNavbarFixed] = useState(false);
    const [dropdown, setDropdown] = useState(null);

    const dropdownRef = useRef(null); // Create a ref for the dropdown

    // Toggle mobile sidebar
    const toggleSidebar = () => setIsSidebarOpen(prevState => !prevState);

    // Handle scroll event
    const handleScroll = () => {
        const scrollTop = window.scrollY;

        setShowScrollTop(scrollTop > 300);

        if (scrollTop > 50) {
            setIsNavbarFixed(true);
        } else {
            setIsNavbarFixed(false);
        }

        if (scrollTop > lastScrollTop) {
            if (scrollTop > 50) {
                setNavbarStyle('-translate-y-20');
            }
        } else {
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

    // Close dropdown when clicking outside
    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdown(null);
        }
    };

    // Setup event listeners
    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        window.addEventListener('click', handleClickOutside); // Add click event for outside clicks
        return () => {
            window.removeEventListener('scroll', handleScroll);
            window.removeEventListener('click', handleClickOutside); // Clean up
        };
    }, [lastScrollTop]);

    return (
        <>
            {/* Sidebar for mobile view */}
            {/* ... your existing sidebar code ... */}

            {/* Main Navbar */}
            <nav className={`sticky top-0 bg-white p-2  z-40 w-full transition-transform duration-300 ${navbarStyle}`}>
                <div className="container mx-auto flex items-center justify-between px-4">
                    <div className="text-white text-lg font-bold p-5">
                        <Link href="/">
                            <img src="wrocus.png" style={{ height: '40px' }} alt="Logo" />
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
                        <ul className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0 gap-2 text-md ">
                            <li><Link href="/" className="text-black hover:text-blue-800">Home</Link></li>
                            <li><Link href="/talentrecruitment" className="text-black hover:text-blue-800">Talent Recruitment</Link></li>
                            {/* service dropdown */}
                            <li className="relative"
                                onMouseEnter={() => setDropdown('services')} // Open on hover
                                onMouseLeave={() => setDropdown(null)} // Close on mouse leave
                                ref={dropdownRef}
                            >
                                <button
                                    className="text-black hover:text-blue-800 focus:outline-none"
                                >
                                    Services <ArrowDropDownIcon />
                                </button>
                                {dropdown === 'services' && (
                                    <ul className="absolute top-full left-0  bg-white text-black   rounded-lg" style={{ width: '250px' }}>
                                        <li><Link href="/about" className="block px-4 py-2 hover:bg-gray-200">Tech Recruitment</Link></li>
                                        <li><Link href="/service2" className="block px-4 py-2 hover:bg-gray-200">Web Development</Link></li>
                                        <li><Link href="/service3" className="block px-4 py-2 hover:bg-gray-200">Mobile Development</Link></li>
                                        <li><Link href="/service4" className="block px-4 py-2 hover:bg-gray-200">Artificial Intelligence</Link></li>
                                        <li><Link href="/service5" className="block px-4 py-2 hover:bg-gray-200">Data Analytics</Link></li>
                                        <li><Link href="/service6" className="block px-4 py-2 hover:bg-gray-200">Data Science</Link></li>
                                        <li><Link href="/service7" className="block px-4 py-2 hover:bg-gray-200">Client-Based Hiring Solutions</Link></li>
                                        <li><Link href="/service8" className="block px-4 py-2 hover:bg-gray-200">Executive Search</Link></li>
                                    </ul>
                                )}
                            </li>


                            {/* odoo developement */}
                            <li className="relative"
                                onMouseEnter={() => setDropdown('odoo')} // Open on hover
                                onMouseLeave={() => setDropdown(null)} // Close on mouse leave
                                ref={dropdownRef}
                            >
                                <button
                                    className="text-black hover:text-blue-800 focus:outline-none"
                                >
                                    Odoo <ArrowDropDownIcon />
                                </button>
                                {dropdown === 'odoo' && (
                                    <ul className="absolute top-full left-0  bg-white text-black   rounded-lg" style={{ width: '250px' }}>
                                        <li><Link href="/about" className="block px-4 py-2 hover:bg-gray-200"> Odoo Consulting</Link></li>
                                        <li><Link href="/about" className="block px-4 py-2 hover:bg-gray-200">Odoo Website Development</Link></li>
                                        <li><Link href="/service3" className="block px-4 py-2 hover:bg-gray-200">Odoo App Development</Link></li>
                                        <li><Link href="/service4" className="block px-4 py-2 hover:bg-gray-200">Odoo Theme Development</Link></li>
                                        <li><Link href="/service5" className="block px-4 py-2 hover:bg-gray-200">Odoo Customization</Link></li>
                                        <li><Link href="/service6" className="block px-4 py-2 hover:bg-gray-200">Odoo Migration</Link></li>
                                        <li><Link href="/service7" className="block px-4 py-2 hover:bg-gray-200">Odoo Integration</Link></li>
                                        <li><Link href="/service8" className="block px-4 py-2 hover:bg-gray-200">Odoo Implementation</Link></li>
                                        <li><Link href="/service8" className="block px-4 py-2 hover:bg-gray-200"> Odoo Support</Link></li>

                                    </ul>
                                )}
                            </li>
                            <li><Link href="/about" className="text-black hover:text-blue-800">Technologies</Link></li>
                            <li><Link href="/about" className="text-black hover:text-blue-800">About</Link></li>
                            <li><Link href="/blog" className="text-black hover:text-blue-800">Contact</Link></li>
                        </ul>
                    </div>
                    {/* <div className="text-gray-800 text-lg flex items-center space-x-4">
                        <button>Case Study</button>
                    </div> */}
                </div>
            </nav>

            {/* Scroll to Top Button */}
            {showScrollTop && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-4 right-4 bg-gray-500 z-20 text-white p-3 rounded-full   hover:bg-black transition-colors duration-300"
                    aria-label="Scroll to top"
                >
                    <ArrowUpwardIcon style={{ fontSize: 30 }} />
                </button>
            )}
        </>
    );
};

export default Navbar;
