import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';

import NavigationIcon from './icons/NavigationIcon';
import CloseIcon from './icons/CloseIcon';
import HomeIcon from './icons/HomeIcon';

type LinkItem = {
  name: string;
  url: string;
};

const linkItems: LinkItem[] = [
  { name: 'Experiencia', url: '/experiencia' },
  { name: 'Proyectos', url: '/proyectos' },
  { name: 'Conocimientos', url: '/conocimientos' },
  { name: 'Sobre mí', url: '/sobre-mi' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const path = usePathname();

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const linkVariants = {
    initial: { backgroundColor: 'rgba(68, 68, 68, 0)' },
    hover: { scale: 1.1, transition: { duration: 0.3 } },
  };

  const closeMenu = (e: React.MouseEvent) => {
    e.stopPropagation();
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && isMobile && (
        <div 
          className="absolute h-screen w-screen  bg-gray-900 bg-opacity-50 z-10 backdrop-blur-md"
          onClick={closeMenu}
        />
      )}
    <nav 
      className="bg-gray-900 bg-opacity-80 border border-gray-700 px-4 py-2 mt-4 rounded-2xl max-w-[200px] md:max-w-[42rem] mx-auto z-50 relative backdrop-blur-md cursor-pointer md:cursor-default"
      onClick={() => isMobile && setIsOpen(!isOpen)}
    >
      {isOpen && isMobile && (
        <button
          type="button"
          className="absolute -top-2 -right-2 text-white hover:text-gray-200 focus:text-gray-200 focus:outline-none z-20"
          onClick={(e) => {
            e.stopPropagation();
            setIsOpen(false);
          }}
        >
          <CloseIcon />
        </button>
      )}
      <div className="flex justify-center md:justify-center items-center">
          <div className="md:hidden">
            {!isOpen && (
              <div className="block text-white relative z-10 p-2">
                <NavigationIcon />
              </div>
            )}
          </div>
          <div className={`flex flex-col space-y-4 md:flex-row md:space-x-4 ${isOpen ? 'block' : 'hidden'} md:block`}>
          <Link href="/">
            <motion.div
              className={`cursor-pointer inline-block px-4 py-2 -mb-3.5 rounded-full border-2 border-transparent transition-all duration-200 ease-in-out items-center ${path === '/' ? 'text-blue-400 hover:border-red-500' : 'text-white hover:text-gray-200  hover:border-white'}`}
              variants={linkVariants}
              initial="initial"
              whileHover="hover"
            >
              <HomeIcon />
            </motion.div>
          </Link>
          {linkItems.map((item) => (
            <Link key={item.name} href={item.url}>
              <motion.div
                className={`cursor-pointer inline-block px-4 py-2 rounded-full border-2 border-transparent transition-all duration-200 ease-in-out ${path === item.url ? 'text-blue-400 hover:border-white' : 'text-white hover:text-gray-200  hover:border-white'}`}
                variants={linkVariants}
                initial="initial"
                whileHover="hover"
              >
                {item.name}
              </motion.div>
            </Link>
          ))}
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;