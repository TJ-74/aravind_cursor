'use client';

import { useState } from 'react';

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('all');

  const categories = ['all', 'commercial', 'corporate', 'social', 'music'];

  const projects = [
    {
      id: 1,
      title: 'Brand Commercial',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop',
      views: '2.5M',
    },
    {
      id: 2,
      title: 'Corporate Presentation',
      category: 'corporate',
      image: 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=800&h=600&fit=crop',
      views: '850K',
    },
    {
      id: 3,
      title: 'Social Media Campaign',
      category: 'social',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=800&h=600&fit=crop',
      views: '3.2M',
    },
    {
      id: 4,
      title: 'Music Video',
      category: 'music',
      image: 'https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?w=800&h=600&fit=crop',
      views: '5.1M',
    },
    {
      id: 5,
      title: 'Product Launch',
      category: 'commercial',
      image: 'https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop',
      views: '1.8M',
    },
    {
      id: 6,
      title: 'Instagram Reels',
      category: 'social',
      image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&h=600&fit=crop',
      views: '4.3M',
    },
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="portfolio" className="theme-section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[#0f1119] pointer-events-none">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 right-0 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Portfolio
          </h2>
          <p className="text-xl text-gray-400">
            Explore our latest video editing projects and creative work
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full font-semibold capitalize transition-all duration-300 cursor-pointer ${
                activeCategory === category
                  ? 'theme-gradient text-white shadow-lg scale-105'
                  : 'bg-[#151825] text-gray-400 hover:text-white border border-purple-900/20'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="group relative overflow-hidden rounded-2xl theme-card bg-[#151825]/50 backdrop-blur-sm hover:bg-[#1a1d2d] cursor-pointer"
            >
              {/* Project Image */}
              <div className="aspect-video overflow-hidden bg-[#0f1119]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90"
                />
              </div>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0f1119]/90 via-[#0f1119]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white text-2xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  {project.title}
                </h3>
                <div className="flex items-center text-white/90 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                  <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 12a2 2 0 100-4 2 2 0 000 4z" />
                    <path fillRule="evenodd" d="M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z" clipRule="evenodd" />
                  </svg>
                  {project.views} views
                </div>
              </div>

              {/* Play Button */}
              <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="theme-gradient w-16 h-16 rounded-full flex items-center justify-center shadow-xl shadow-purple-900/20">
                  <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More Button */}
        <div className="text-center mt-12">
          <button className="theme-button">
            View All Projects
          </button>
        </div>
      </div>
    </section>
  );
}

