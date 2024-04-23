import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import NavigationIcon from './icons/NavigationIcon';
import CloseIcon from './icons/CloseIcon';

type LinkItem = {
  name: string;
  url: string;
};

const linkItems: LinkItem[] = [
  { name: 'Experiencia', url: '/experience' },
  { name: 'Proyectos', url: '/projects' },
  { name: 'Sobre mí', url: '/about' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkVariants = {
    initial: { backgroundColor: 'transparent' },
    hover: { scale: 1.1, backgroundColor: '#444', transition: { duration: 0.3 } },
  };

  return (
    <nav className="bg-gray-900 bg-opacity-80 border border-gray-700 px-4 py-2 mt-4 rounded-2xl max-w-[42em] w-auto mx-auto z-50 relative">
      {isOpen && (
        <button
          type="button"
          className="absolute -top-2 -right-2 text-white hover:text-gray-200 focus:text-gray-200 focus:outline-none z-20"
          onClick={() => setIsOpen(false)}
        >
          <CloseIcon />
        </button>
      )}
      <div className="flex justify-center md:justify-center items-center">
        <div className="md:hidden">
          <button type="button" className="block text-white hover:text-gray-200 focus:text-gray-200 focus:outline-none relative z-10" onClick={() => setIsOpen(!isOpen)}>
            {!isOpen && <NavigationIcon />}
          </button>
        </div>
        <div className={`flex flex-col md:flex-row ${isOpen ? 'block' : 'hidden'} md:block`}>
          {linkItems.map((item) => (
            <Link key={item.name} href={item.url}>
              <motion.div
                className="cursor-pointer block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-200 md:mx-6 px-4 py-2 rounded-full border-2 border-transparent hover:border-gray-200 transition-all duration-200 ease-in-out"
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
  );
};

export default Navbar;