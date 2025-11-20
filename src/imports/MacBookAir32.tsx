import { motion } from 'motion/react';
import * as React from 'react';

function Frame2() {
  return (
    <div className="flex flex-col gap-[8px] items-start md:items-center w-full">
      <p className="font-signifier leading-[normal] not-italic text-[28px] md:text-[36px] text-black text-left md:text-center w-full max-w-[790px]">I design for real world decision-making</p>
    </div>
  );
}

function Frame() {
  return (
    <div className="flex gap-[16px] md:gap-[24px] items-center text-[18px] md:text-[20px] text-black">
      <motion.a 
        className="block" 
        href="https://x.com/robinconline"
        whileHover={{ 
          scale: 1.1,
          rotate: [-2, 2, -2, 0],
          transition: { duration: 0.4 }
        }}
        whileTap={{ scale: 0.95 }}
      >
        <p className="cursor-pointer leading-[normal] whitespace-nowrap">Twitter</p>
      </motion.a>
      <motion.a 
        className="block" 
        href="https://www.linkedin.com/in/robincdesign"
        whileHover={{ 
          scale: 1.1,
          rotate: [2, -2, 2, 0],
          transition: { duration: 0.4 }
        }}
        whileTap={{ scale: 0.95 }}
      >
        <p className="cursor-pointer leading-[normal] whitespace-nowrap">Linkedin</p>
      </motion.a>
    </div>
  );
}

function SparklyName() {
  const [isHovered, setIsHovered] = React.useState(false);
  
  // Generate more sparkles with random positions
  const sparkles = React.useMemo(() => 
    Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: Math.random() * 160 - 10, // Random x position across the width
      y: Math.random() * 40 - 12, // Random y position around the text
      delay: Math.random() * 0.5, // Random initial delay
      duration: 0.6 + Math.random() * 0.6, // Random duration between 0.6-1.2s
      repeatDelay: Math.random() * 0.8, // Random repeat delay
      size: 0.5 + Math.random() * 1, // Random size multiplier
      rotation: Math.random() * 360, // Random rotation amount
    }))
  , []);
  
  return (
    <motion.div 
      className="relative inline-block cursor-pointer"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <motion.p 
        className="font-pixelscript leading-[normal] not-italic relative shrink-0 text-[#3d3b3e] text-[24px] text-nowrap whitespace-pre"
        animate={isHovered ? {
          textShadow: [
            '0 0 0px rgba(216, 180, 254, 0)',
            '0 0 20px rgba(216, 180, 254, 0.8), 0 0 30px rgba(251, 207, 232, 0.6)',
            '0 0 20px rgba(216, 180, 254, 0.8), 0 0 30px rgba(251, 207, 232, 0.6)',
            '0 0 0px rgba(216, 180, 254, 0)',
          ],
          color: ['#3d3b3e', '#d8b4fe', '#fbcfe8', '#3d3b3e'],
        } : {
          textShadow: '0 0 0px rgba(216, 180, 254, 0)',
          color: '#3d3b3e'
        }}
        transition={{ 
          duration: 1.5,
          repeat: isHovered ? Infinity : 0,
          repeatType: 'loop'
        }}
      >
        robin chen
      </motion.p>
      
      {sparkles.map((sparkle) => (
        <motion.svg
          key={sparkle.id}
          className="absolute"
          style={{ 
            left: sparkle.x,
            top: sparkle.y,
            width: `${sparkle.size * 8}px`,
            height: `${sparkle.size * 8}px`,
          }}
          viewBox="0 0 24 24"
          fill="none"
          initial={{ scale: 0, opacity: 0 }}
          animate={isHovered ? {
            scale: [0, sparkle.size * 1.5, 0],
            opacity: [0, 1, 0],
            rotate: [0, sparkle.rotation, sparkle.rotation * 2],
          } : { scale: 0, opacity: 0 }}
          transition={{
            duration: sparkle.duration,
            delay: sparkle.delay,
            repeat: isHovered ? Infinity : 0,
            repeatDelay: sparkle.repeatDelay,
            ease: "easeInOut",
          }}
        >
          <path
            d="M12 2L13.5 8.5L20 10L13.5 11.5L12 18L10.5 11.5L4 10L10.5 8.5L12 2Z"
            fill="url(#sparkle-gradient)"
          />
          <path
            d="M12 6L12.5 9.5L16 10L12.5 10.5L12 14L11.5 10.5L8 10L11.5 9.5L12 6Z"
            fill="white"
            opacity="0.8"
          />
          <defs>
            <linearGradient id="sparkle-gradient" x1="4" y1="10" x2="20" y2="10">
              <stop offset="0%" stopColor="#d8b4fe" />
              <stop offset="100%" stopColor="#fbcfe8" />
            </linearGradient>
          </defs>
        </motion.svg>
      ))}
    </motion.div>
  );
}

function Frame1() {
  return (
    <div className="flex flex-row items-center justify-between w-full gap-2 md:gap-0">
      <SparklyName />
      <Frame />
    </div>
  );
}

export default function MacBookAir() {
  return (
    <div className="bg-white min-h-screen w-full" data-name="MacBook Air - 32">
      <div className="max-w-[1280px] mx-auto px-6 md:px-12 lg:px-16 py-8 md:py-12">
        {/* Header */}
        <Frame1 />
        
        {/* Headline */}
        <div className="mt-12 md:mt-16 mb-8 md:mb-12 flex justify-start md:justify-center">
          <Frame2 />
        </div>
        
        {/* Main Content */}
        <div className="leading-[28px] text-[18px] md:text-[20px] text-black max-w-[598px] mx-auto">
          <p className="mb-0">{`I'm a product designer with a background in 0 → 1 fintech. `}</p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">
            <span>{`Currently making `}</span>
            <motion.a 
              className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid underline inline-block" 
              href="https://aidesignfieldguide.com"
              whileHover={{ 
                y: -2,
                color: '#6366f1',
                transition: { type: 'spring', stiffness: 400, damping: 10 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[28px]" href="https://aidesignfieldguide.com">
                AI Design Field Guide
              </span>
            </motion.a>
            !
          </p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">
            <span>{`Most recently, I led design at `}</span>
            <motion.a 
              className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid underline inline-block" 
              href="https://www.pathpoint.com/"
              whileHover={{ 
                y: -2,
                color: '#ec4899',
                transition: { type: 'spring', stiffness: 400, damping: 10 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[28px]" href="https://www.pathpoint.com/">
                Pathpoint
              </span>
            </motion.a>
            <span>{`, a digital E&S brokerage`}</span>
            <span>{`. `}</span>I built complex, high-accuracy workflows for expert users making critical decisions in a regulated, multi-party environment.
          </p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">
            <span>{`Before that, I established the design foundations for `}</span>
            <motion.a 
              className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid underline inline-block" 
              href="https://runway.com/"
              whileHover={{ 
                y: -2,
                color: '#8b5cf6',
                transition: { type: 'spring', stiffness: 400, damping: 10 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[28px]" href="https://runway.com/">
                Runway Financials
              </span>
            </motion.a>
            <span>{` and collaborated with `}</span>
            <motion.a 
              className="[text-decoration-skip-ink:none] [text-underline-position:from-font] cursor-pointer decoration-solid underline inline-block" 
              href="https://www.fastcompany.com/90512520/kevin-gibbon-airhouse"
              whileHover={{ 
                y: -2,
                color: '#f59e0b',
                transition: { type: 'spring', stiffness: 400, damping: 10 }
              }}
              whileTap={{ scale: 0.98 }}
            >
              <span className="[text-decoration-skip-ink:none] [text-underline-position:from-font] decoration-solid leading-[28px]" href="https://www.fastcompany.com/90512520/kevin-gibbon-airhouse">
                Airhouse
              </span>
            </motion.a>
            <span>{` to create their brand.`}</span>
          </p>
          <p className="mb-0">&nbsp;</p>
          <p className="mb-0">Past Clients: Honda, Logitech, City of Long Beach</p>
          <p className="mb-0">&nbsp;</p>
          <p>Case studies and references available upon request via robincdesign@gmail.com</p>
        </div>
      </div>
    </div>
  );
}
