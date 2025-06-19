'use client';

export default function Header() {
  return (
    <header
      className="relative h-screen bg-cover bg-center text-white"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/5054354/pexels-photo-5054354.jpeg?_gl=1*1f3h4zz*_ga*MTU3NjA0MjQ0NS4xNzUwMzMyOTg3*_ga_8JE65Q40S6*czE3NTAzNDgwMTIkbzMkZzEkdDE3NTAzNDgyODUkajQ4JGwwJGgw')`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 z-0"></div>

      {/* Top Navbar */}
      <div className="relative z-10 flex items-center justify-between px-6 md:px-16 py-6">
        {/* Logo */}
        <div className="text-2xl font-extrabold tracking-wide">
          Your<span className="text-[#e94560]">Brand</span>
        </div>

        {/* Nav Links */}
        <nav className="hidden md:flex space-x-8 text-lg">
          <a href="/" className="hover:text-[#e94560] transition">Home</a>
          <a href="/services" className="hover:text-[#e94560] transition">Services</a>
          <a href="/about" className="hover:text-[#e94560] transition">About</a>
          <a href="/contact" className="hover:text-[#e94560] transition">Contact</a>
        </nav>
      </div>

      {/* Centered Heading Text (no buttons) */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center h-[calc(100vh-96px)] px-4">
        <h1 className="text-4xl md:text-6xl font-bold leading-tight drop-shadow-xl">
          Grow Your Business <br /> with Confidence
        </h1>
        <p className="mt-4 text-lg md:text-xl text-white/80 max-w-2xl">
          We help you design, build, and scale world-class digital solutions.
        </p>
      </div>
    </header>
  );
}
