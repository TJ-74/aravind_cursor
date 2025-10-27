'use client';

import { useState } from 'react';

export default function OurClients() {
  const [activeVideo, setActiveVideo] = useState(0);

  const clients = [
    {
      name: 'TechCorp',
      logo: 'TC',
      industry: 'Technology',
      videoTitle: 'Product Launch Campaign',
      videoThumbnail: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&h=450&fit=crop',
      views: '2.5M',
      description: 'A stunning product launch video that helped TechCorp achieve 300% increase in pre-orders.',
    },
    {
      name: 'FashionHub',
      logo: 'FH',
      industry: 'Fashion',
      videoTitle: 'Spring Collection 2024',
      videoThumbnail: 'https://images.unsplash.com/photo-1490481651871-ab68de25d43d?w=800&h=450&fit=crop',
      views: '1.8M',
      description: 'A captivating fashion showcase that went viral on social media platforms.',
    },
    {
      name: 'FitLife',
      logo: 'FL',
      industry: 'Fitness',
      videoTitle: 'Transformation Stories',
      videoThumbnail: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&h=450&fit=crop',
      views: '3.2M',
      description: 'Inspiring transformation stories that motivated thousands to join the fitness journey.',
    },
    {
      name: 'GourmetBites',
      logo: 'GB',
      industry: 'Food & Beverage',
      videoTitle: 'Restaurant Brand Video',
      videoThumbnail: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=800&h=450&fit=crop',
      views: '950K',
      description: 'A mouth-watering brand video that increased restaurant bookings by 150%.',
    },
    {
      name: 'EcoWorld',
      logo: 'EW',
      industry: 'Environmental',
      videoTitle: 'Sustainability Campaign',
      videoThumbnail: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&h=450&fit=crop',
      views: '1.5M',
      description: 'An impactful environmental campaign that raised awareness and drove donations.',
    },
    {
      name: 'MusicWave',
      logo: 'MW',
      industry: 'Entertainment',
      videoTitle: 'Music Festival Recap',
      videoThumbnail: 'https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?w=800&h=450&fit=crop',
      views: '4.1M',
      description: 'An electrifying festival recap that captured the energy and excitement of the event.',
    },
  ];

  return (
    <section id="our-clients" className="theme-section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[#151825] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#0f1119] to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#0f1119] to-transparent"></div>
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Clients & Their Success Stories
          </h2>
          <p className="text-xl text-gray-400">
            Trusted by leading brands across industries to create compelling video content
          </p>
        </div>

        {/* Featured Video */}
        <div className="max-w-6xl mx-auto mb-12">
          <div className="theme-card bg-[#151825]/50 backdrop-blur-sm rounded-3xl overflow-hidden">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Video Thumbnail */}
              <div className="relative aspect-video lg:aspect-auto group cursor-pointer">
                <img
                  src={clients[activeVideo].videoThumbnail}
                  alt={clients[activeVideo].videoTitle}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {/* Play Button Overlay */}
                <div className="absolute inset-0 bg-black/60 group-hover:bg-black/70 transition-all duration-300 flex items-center justify-center">
                  <div className="theme-gradient w-20 h-20 rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </div>
                {/* Views Badge */}
                <div className="absolute top-4 right-4 bg-[#151825]/80 backdrop-blur-sm text-white px-4 py-2 rounded-full flex items-center border border-white/10">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                  {clients[activeVideo].views} views
                </div>
              </div>

              {/* Video Info */}
              <div className="p-8 lg:p-12 flex flex-col justify-center">
                <div className="flex items-center mb-4">
                  <div className="w-16 h-16 theme-gradient rounded-xl flex items-center justify-center text-white font-bold text-xl mr-4">
                    {clients[activeVideo].logo}
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white">
                      {clients[activeVideo].name}
                    </h3>
                    <p className="theme-gradient-text font-medium">
                      {clients[activeVideo].industry}
                    </p>
                  </div>
                </div>
                <h4 className="text-3xl font-bold text-white mb-4">
                  {clients[activeVideo].videoTitle}
                </h4>
                <p className="text-gray-400 text-lg leading-relaxed mb-6">
                  {clients[activeVideo].description}
                </p>
                <div className="flex items-center text-sm text-gray-400">
                  <svg className="w-5 h-5 text-green-400 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  Project Completed Successfully
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Client Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 max-w-6xl mx-auto">
          {clients.map((client, index) => (
            <button
              key={index}
              onClick={() => setActiveVideo(index)}
              className={`p-6 rounded-2xl transition-all duration-300 cursor-pointer ${
                activeVideo === index
                  ? 'theme-gradient shadow-xl scale-105'
                  : 'theme-card bg-[#151825]/50 backdrop-blur-sm hover:bg-[#1a1d2d]'
              }`}
            >
              <div className={`w-12 h-12 mx-auto mb-3 rounded-lg flex items-center justify-center font-bold text-lg ${
                activeVideo === index
                  ? 'bg-white/20 text-white'
                  : 'theme-gradient text-white'
              }`}>
                {client.logo}
              </div>
              <p className={`text-sm font-semibold text-center ${
                activeVideo === index ? 'text-white' : 'text-gray-400'
              }`}>
                {client.name}
              </p>
            </button>
          ))}
        </div>

        {/* Brands Marquee */}
        <div className="mt-20">
          <p className="text-center text-gray-400 mb-8 font-medium">
            TRUSTED BY 200+ BRANDS WORLDWIDE
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50">
            {['Netflix', 'Spotify', 'Amazon', 'Nike', 'Apple', 'Google', 'Microsoft', 'Adobe'].map((brand, index) => (
              <div key={index} className="text-2xl font-bold text-gray-400">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

