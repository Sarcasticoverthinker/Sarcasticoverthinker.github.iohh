import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Music, Cake as CakeIcon } from 'lucide-react';
import CatCake from './images/cat-face-cake.jpg';
import Musicc from './musicc.mp3';
import Confetti from 'react-confetti'; // A library for confetti

const StarryNight = () => {
  const [stars, setStars] = useState<{ top: string; left: string; opacity: number }[]>([]);

  useEffect(() => {
    // Generate random stars on component mount
    const generateStars = () => {
      let newStars: { top: string; left: string; opacity: number }[] = [];
      for (let i = 0; i < 100; i++) {
        newStars.push({
          top: `${Math.random() * 100}vh`,        // Random vertical position
          left: `${Math.random() * 100}vw`,       // Random horizontal position
          opacity: Math.random(),                 // Random opacity
        });
      }
      setStars(newStars);
    };

    // Call the function to generate stars
    generateStars();
  }, []);

  return (
    <div className="absolute inset-0">
      {stars.map((star, i) => (
        <div
          key={i}
          className="absolute rounded-full bg-white"
          style={{
            top: star.top,
            left: star.left,
            width: `${Math.random() * 2 + 1}px`,   // Random size for stars
            height: `${Math.random() * 2 + 1}px`,
            opacity: star.opacity,                 // Apply random opacity to each star
            animation: 'twinkle 1.5s infinite ease-in-out', // Add a twinkling effect
          }}
        />
      ))}
    </div>
  );
};

const Surprise = () => {
  const [stage, setStage] = useState(0);
  const [isLit, setIsLit] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);
  const navigate = useNavigate();

  const buttonLabels = [
    "Lights On",
    "Play Music",
    "Decorate",
    "Fly the Balloons",
    "Let's Cut the Cake Mam :)",
    "Well, I Have a Message for Khadijah"
  ];

  const handleClick = () => {
    if (stage === 0) {
      setIsLit(true);
    } else if (stage === 1 && audioRef.current) {
      audioRef.current.play();
    } else if (stage === 5) {
      navigate('/message');
      return;
    }
    setStage((prev) => prev + 1);
  };

  return (
    <div
      className={`min-h-screen relative overflow-hidden transition-all duration-1000 ${isLit ? 'bg-gradient-to-br from-pink-100 to-purple-100' : 'bg-gray-900'
        }`}
    >
      {/* Starry Night Background */}
      {stage >= 2 && <StarryNight />}

      {/* Confetti on Cake Cut */}
      {stage >= 4 && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
        />
      )}

      {/* Happy Birthday Message */}
      {stage >= 3 && (
        <motion.h1
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: -20, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="absolute inset-0 flex justify-center items-start mt-40"
        >
          <img
            src={CatCake}
            className="w-full max-w-xs md:max-w-md h-auto mt-10 pt-10"
            alt="Happy Birthday"
          />
        </motion.h1>
      )}

      {/* Cake Animation */}
      {stage >= 4 && (
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="absolute flex justify-center items-center w-full"
          style={{ top: '50%' }}
        >
          {/* Cake Animation */}
          <div className="w-40 h-40 rounded-lg bg-gradient-to-t from-yellow-400 via-yellow-300 to-yellow-200 shadow-lg flex items-center justify-center">
            <CakeIcon className="w-20 h-20 text-white" />
          </div>
        </motion.div>
      )}

      {/* Audio Element */}
      <audio ref={audioRef} loop>
        <source src={Musicc} type="audio/mpeg" />
      </audio>

      {/* Music Icon */}
      {stage >= 2 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="absolute top-4 right-4"
        >
          <Music className="w-6 h-6 md:w-8 md:h-8 text-pink-500" />
        </motion.div>
      )}

      {/* Control Button Container */}
      <div className="absolute inset-x-0 flex justify-center items-center px-4 mt-20 py-4">
        <motion.button
          onClick={handleClick}
          className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base text-white font-semibold shadow-lg w-full max-w-sm ${isLit
              ? 'bg-pink-500 hover:bg-pink-600'
              : 'bg-blue-500 hover:bg-blue-600'
            }`}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          style={{ transformOrigin: 'center' }}
        >
          {buttonLabels[stage]}
        </motion.button>
      </div>
    </div>
  );
};

export default Surprise;
