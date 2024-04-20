import { useState } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const linkVariants = {
    initial: { backgroundColor: 'transparent' },
    hover: { scale: 1.1, backgroundColor: '#444', transition: { duration: 0.3 } },
  };

  return (
<nav className="bg-gray-900 bg-opacity-80 border border-gray-700 px-4 py-2 mt-4 rounded-2xl max-w-[42em] w-auto mx-auto z-50">
      <div className="flex justify-center md:justify-center items-center">
        <div className="md:hidden">
          <button type="button" className="block text-white hover:text-gray-200 focus:text-gray-200 focus:outline-none" onClick={() => setIsOpen(!isOpen)}>
            <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24">
              {isOpen && (
                <path fillRule="evenodd" d="M6 18L18 6M6 6l12 12" />
              )}
              {!isOpen && (
                <path fillRule="evenodd" d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
        <div className={`flex flex-col md:flex-row ${isOpen ? 'block' : 'hidden'} md:block`}>
          <Link href="/experience">
            <motion.div
              className="cursor-pointer block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-200 md:mx-6 px-4 py-2 rounded-full border-2 border-transparent hover:border-gray-200 transition-all duration-200 ease-in-out"
              variants={linkVariants}
              initial="initial"
              whileHover="hover"
            >
              Experiencia
            </motion.div>
          </Link>
          <Link href="/projects">
            <motion.div
              className="cursor-pointer block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-200 md:mx-6 px-4 py-2 rounded-full border-2 border-transparent hover:border-gray-200 transition-all duration-200 ease-in-out"
              variants={linkVariants}
              initial="initial"
              whileHover="hover"
            >
              Proyectos
            </motion.div>
          </Link>
          <Link href="/about">
            <motion.div
              className="cursor-pointer block mt-4 md:inline-block md:mt-0 text-white hover:text-gray-200 md:mx-6 px-4 py-2 rounded-full border-2 border-transparent hover:border-gray-200 transition-all duration-200 ease-in-out"
              variants={linkVariants}
              initial="initial"
              whileHover="hover"
            >
              Sobre mí
            </motion.div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;