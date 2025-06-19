'use client';

export default function ServicesPage() {
  return (
    <section className="grid md:grid-cols-2 min-h-[70vh] items-center bg-white">
      
      {/* Left Side: Text */}
      <div className="p-10">
        <div className="max-w-xl">
          <h2 className="text-5xl font-extrabold mb-6 text-[#e94560]">
            Our Services
          </h2>
          <p className="text-lg text-gray-700 mb-6">
            We provide powerful digital solutions to grow your business with speed and scale.
          </p>
          <ul className="space-y-3 font-semibold text-lg list-disc pl-5 text-gray-800">
            <li>Custom Web & App Development</li>
            <li>UI/UX Design & Prototyping</li>
            <li>E-Commerce Solutions</li>
            <li>SEO & Online Marketing</li>
            <li>Cloud & API Integrations</li>
          </ul>
        </div>
      </div>

      {/* Right Side: Square/Short Image */}
      <div className="p-6 flex justify-center items-center">
        <div className="w-[300px] h-[300px] rounded-xl overflow-hidden shadow-lg">
          <img
            src="https://images.pexels.com/photos/7144191/pexels-photo-7144191.jpeg?_gl=1*1a3aian*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTAzNDgwMTIkbzMkZzEkdDE3NTAzNDk1ODYkajIkbDAkaDA."
            alt="Services"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
      
    </section>
  );
}
