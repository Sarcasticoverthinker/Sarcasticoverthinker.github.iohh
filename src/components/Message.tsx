import React from 'react';
import { motion } from 'framer-motion';

const Message = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-200 via-purple-300 to-purple-400 flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="max-w-2xl bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-xl text-center"
      >
        <h1 className="text-4xl font-serif font-bold text-gray-800 mb-6 tracking-wide">
          Dear Madam Ji,
        </h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.6 }}
          className="text-xl text-gray-700 leading-relaxed mb-6"
        >
          Even though we have met recently & I guess we know nothing about each other, this is my way
          of showing you how much I value people. This is a start to our friendship, and I hope we’ll
          create many beautiful memories together.
        </motion.p>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.9 }}
          className="text-xl text-gray-700 leading-relaxed mb-6"
        >
          I'm beginning this new year with a new friend like you, and I hope our friendship lasts forever.
        </motion.p>
        <p className="text-lg text-purple-600 font-semibold">
          On your special day, I wish you the happiest birthday!
        </p>
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-8 px-6 py-3 bg-purple-600 text-white rounded-full font-semibold text-lg shadow-md hover:bg-purple-700 transition-all duration-300"
        >
          Click to Reveal More
        </motion.button>
      </motion.div>
    </div>
  );
};

export default Message;
