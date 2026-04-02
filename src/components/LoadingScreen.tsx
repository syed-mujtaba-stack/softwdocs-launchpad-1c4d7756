import { motion, Variants } from "framer-motion";
import logo from "@/assets/logo.png";

const LoadingScreen = () => {
  const brandName = "SoftwDocs";

  // Parent container variants for staggered children
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3, // Increased stagger for cinematic effect
        delayChildren: 1.5,   // Wait for logo to settle
      },
    },
  };

  // Individual letter variants for "fly in" effect
  const letterVariants: Variants = {
    hidden: { 
      y: 100, 
      opacity: 0, 
      filter: "blur(20px)",
      rotateX: -45,
      scale: 0.3
    },
    visible: {
      y: 0,
      opacity: 1,
      filter: "blur(0px)",
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.23, 1, 0.32, 1] as any, // Cast to any to avoid complex tuple mismatch
      },
    },
  };

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, ease: "easeInOut" }}
      className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#030303] overflow-hidden"
    >
      {/* Background noise/gradient enhancements */}
      <div className="absolute inset-0 opacity-30 pointer-events-none noise-bg" />
      <div className="absolute inset-0 bg-gradient-to-tr from-black via-white/5 to-black pointer-events-none" />
      
      {/* Floating particles/accents */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3],
          rotate: [0, 5, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        className="absolute w-[800px] h-[800px] bg-white/[0.015] blur-[150px] rounded-full pointer-events-none"
      />

      <div className="relative flex flex-col items-center gap-20">
        {/* Logo Animation - Flying in from top */}
        <motion.div
          initial={{ y: -100, opacity: 0, scale: 0.5, filter: "blur(10px)" }}
          animate={{ y: 0, opacity: 1, scale: 1, filter: "blur(0px)" }}
          transition={{ 
            duration: 1.5, 
            ease: [0.23, 1, 0.32, 1] as any,
          }}
          className="relative"
        >
          <img 
            src={logo} 
            alt="SoftwDocs" 
            className="h-24 w-auto md:h-32 filter drop-shadow-[0_0_40px_rgba(255,255,255,0.4)]"
          />
          <motion.div 
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ 
              duration: 3, 
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="absolute inset-0 bg-white/20 blur-[100px] rounded-full"
          />
        </motion.div>

        {/* Text Animation: SoftwDocs fly-in alphabetically (staggered) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex items-center justify-center gap-2"
        >
          {brandName.split("").map((letter, index) => (
            <motion.span
              key={index}
              variants={letterVariants}
              className="text-4xl md:text-7xl font-display font-bold tracking-tighter text-white inline-block relative"
              style={{
                textShadow: "0 0 30px rgba(255,255,255,0.2)",
              }}
            >
              {letter}
              {/* Subtle glow behind each letter as it appears */}
              <motion.span
                variants={{
                  hidden: { opacity: 0 },
                  visible: { opacity: [0, 0.5, 0], transition: { duration: 1, delay: 0.5 } }
                }}
                className="absolute inset-0 bg-white/10 blur-xl rounded-full"
              />
            </motion.span>
          ))}
        </motion.div>
      </div>

      {/* Progress Line at the bottom */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 w-64 h-[1px] bg-white/10 overflow-hidden">
        <motion.div 
          initial={{ x: "-100%" }}
          animate={{ x: "0%" }}
          transition={{ duration: 5.5, ease: "linear" }}
          className="w-full h-full bg-gradient-to-r from-transparent via-white/60 to-transparent"
        />
      </div>
    </motion.div>
  );
};

export default LoadingScreen;
