'use client';

import { useEffect, useRef } from 'react';

export default function AboutPage() {
  const imageRef = useRef(null);

  // Simple 3D tilt effect
  useEffect(() => {
    const image = imageRef.current;

    const handleMouseMove = (e) => {
      const { left, top, width, height } = image.getBoundingClientRect();
      const x = e.clientX - left - width / 2;
      const y = e.clientY - top - height / 2;

      const rotateX = -(y / height) * 15;
      const rotateY = (x / width) * 15;

      image.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
    };

    const resetRotation = () => {
      image.style.transform = 'rotateX(0deg) rotateY(0deg)';
    };

    image.addEventListener('mousemove', handleMouseMove);
    image.addEventListener('mouseleave', resetRotation);

    return () => {
      image.removeEventListener('mousemove', handleMouseMove);
      image.removeEventListener('mouseleave', resetRotation);
    };
  }, []);

  return (
    <section className="min-h-screen grid md:grid-cols-2 bg-[#0f0f0f] text-white items-center px-10 py-20">
      
      {/* Left Side - Text */}
      <div className="max-w-xl">
        <h2 className="text-5xl font-extrabold mb-6 text-[#e94560]">About Us</h2>
        <p className="text-lg text-gray-300 mb-6 leading-relaxed">
          We are a passionate team of designers, developers, and strategists dedicated to creating meaningful digital experiences.
        </p>
        <ul className="list-disc pl-5 space-y-3 text-white font-semibold text-lg">
          <li>10+ Years of Experience</li>
          <li>Global Clientele & Partners</li>
          <li>Creative & Scalable Solutions</li>
        </ul>
      </div>

      {/* Right Side - Animated Image */}
      <div className="flex justify-center mt-10 md:mt-0">
        <div
          ref={imageRef}
          className="w-[300px] h-[300px] rounded-xl overflow-hidden transition-transform duration-300 shadow-[0_15px_30px_rgba(0,0,0,0.4)]"
          style={{ perspective: '1000px' }}
        >
          <img
            src="https://images.pexels.com/photos/8292817/pexels-photo-8292817.jpeg?_gl=1*37pfzk*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTAzNTIyNjEkbzQkZzEkdDE3NTAzNTIyNjUkajU2JGwwJGgw"
            alt="Team Working"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </div>
      
    </section>
  );
}
