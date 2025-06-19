'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const form = e.target;
    const formData = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
    };

    const res = await fetch('/api/contact', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(formData),
    });

    const data = await res.json();
    setLoading(false);

    if (data.success) {
      alert('Message sent successfully!');
      form.reset();
    } else {
      alert('Failed to send message.');
    }
  };

  return (
    <section className="min-h-screen bg-[#0f0f0f] text-white px-6 py-20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        
        {/* Left - Contact Info */}
        <div>
          <h2 className="text-5xl font-extrabold text-[#e94560] mb-6">Get in Touch</h2>
          <p className="text-gray-300 text-lg mb-6">
            Have a project in mind? Reach out to start a conversation. We’re ready to turn your ideas into reality.
          </p>
          <ul className="space-y-4 text-white font-medium text-lg">
            <li>📧 Email: info@yourcompany.com</li>
            <li>📞 Phone: +92 300 1234567</li>
            <li>📍 Location: Lahore, Pakistan</li>
          </ul>
        </div>

        {/* Right - Contact Form */}
        <form onSubmit={handleSubmit} className="bg-[#1a1a1a] p-8 rounded-xl shadow-lg space-y-6">
          <div>
            <label className="block mb-2 text-sm text-gray-300">Full Name</label>
            <input
              type="text"
              name="name"
              className="w-full p-3 rounded-md bg-[#2a2a2a] border border-gray-600 text-white focus:outline-none focus:border-[#e94560]"
              placeholder="Enter your full name"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-300">Email</label>
            <input
              type="email"
              name="email"
              className="w-full p-3 rounded-md bg-[#2a2a2a] border border-gray-600 text-white focus:outline-none focus:border-[#e94560]"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-300">Message</label>
            <textarea
              rows="5"
              name="message"
              className="w-full p-3 rounded-md bg-[#2a2a2a] border border-gray-600 text-white focus:outline-none focus:border-[#e94560]"
              placeholder="Write your message..."
              required
            ></textarea>
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#e94560] hover:bg-white hover:text-[#e94560] text-white font-semibold py-3 rounded-md transition-all"
          >
            {loading ? 'Sending...' : 'Send Message'}
          </button>
        </form>
      </div>
    </section>
  );
}
