'use client';

import React, { useState, useEffect } from 'react';
import { fixed_btn } from '@/assets/images/brandstory/images';
import Image from 'next/image';

const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const toggleVisibility = () => {
    if (window.scrollY > 50) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  useEffect(() => {
    if (typeof window !== 'undefined') {
      window.addEventListener('scroll', toggleVisibility);
      return () => {
        window.removeEventListener('scroll', toggleVisibility);
      };
    }
  }, []);

  return (
    <div
      className={`fixed bottom-5 left-1/2 transform -translate-x-1/2 transition-transform duration-500 z-20 ${
        isVisible ? 'translate-y-0' : 'translate-y-[150%]'
      }`}
    >
      <button className="w-[400px] h-auto">
        <Image src={fixed_btn} alt="fixdbtn" className="w-full h-full" width={400} height={400} />
      </button>
    </div>
  );
};

export default ScrollToTopButton;