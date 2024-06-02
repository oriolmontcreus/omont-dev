
//Uncomment the following code to use page transition with framer-motion

// "use client"
// import { motion, AnimatePresence } from 'framer-motion';
// import { usePathname, useRouter } from 'next/navigation';
// import { ReactNode } from 'react';

// const pageTransition = {
//     hidden: { opacity: 0 },
//     show: { opacity: 1, transition: { duration: 0.5, ease: 'easeInOut' } },
//     exit: { opacity: 0, transition: { duration: 0.5, ease: 'easeInOut' } },
//   };
  
//   const curtainTransition = {
//     hidden: { y: '0%' },
//     show: { y: '-100%', transition: { duration: 0.5, delay: 0.5, ease: 'easeInOut' } },
//     exit: { y: '0%', transition: { duration: 0.5, ease: 'easeInOut' } },
//   };
  
// interface TemplateProps {
//     children: ReactNode;
// }

// export default function Template({ children }: TemplateProps) {
//     const router = useRouter();
//     const path = usePathname();

//     return (
//         <AnimatePresence mode='wait'>
//           <motion.div
//             initial="hidden"
//             animate="show"
//             exit="exit"
//             variants={pageTransition}
//           >
//             {children}
//             <motion.div
//               variants={curtainTransition}
//               style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', backgroundColor: 'black', zIndex: 9999, display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'white' }}
//             >
//               <h3>{path}</h3>
//             </motion.div>
//           </motion.div>
//         </AnimatePresence>
//       );
// }