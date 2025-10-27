'use client';

import { useState } from 'react';

export default function Testimonials() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'Marketing Director',
      company: 'TechCorp Inc.',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&h=200&fit=crop',
      content: 'The team delivered exceptional results! Our brand video exceeded all expectations and helped us increase engagement by 300%. Their attention to detail and creative vision is unmatched.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'CEO',
      company: 'StartupHub',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&h=200&fit=crop',
      content: 'Working with this team was a game-changer for our company. They transformed our raw footage into a compelling story that resonated with our audience. Highly professional and creative!',
      rating: 5,
    },
    {
      name: 'Emily Rodriguez',
      role: 'Content Creator',
      company: 'Creative Studios',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=200&h=200&fit=crop',
      content: 'I\'ve worked with many video editors, but this team stands out. They understand the nuances of social media content and always deliver on time. My engagement rates have never been better!',
      rating: 5,
    },
    {
      name: 'David Thompson',
      role: 'Brand Manager',
      company: 'Fashion Forward',
      image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&h=200&fit=crop',
      content: 'Absolutely phenomenal work! They took our vision and elevated it beyond what we imagined. The final product was stunning and perfectly captured our brand essence.',
      rating: 5,
    },
  ];

  return (
    <section id="testimonials" className="theme-section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[#0f1119] pointer-events-none">
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-0 left-0 w-96 h-96 bg-purple-600/10 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full filter blur-3xl"></div>
        </div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            What Our Clients Say
          </h2>
          <p className="text-xl text-gray-400">
            Don't just take our word for it - hear from our satisfied clients
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-12">
          <div className="theme-card bg-[#151825]/50 backdrop-blur-sm rounded-3xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Client Image */}
              <div className="flex-shrink-0">
                <div className="relative">
                  <div className="absolute inset-0 theme-gradient rounded-full blur-lg opacity-50"></div>
                  <img
                    src={testimonials[activeTestimonial].image}
                    alt={testimonials[activeTestimonial].name}
                    className="relative w-24 h-24 rounded-full object-cover border-2 border-white/20"
                  />
                </div>
              </div>

              {/* Testimonial Content */}
              <div className="flex-1 text-center md:text-left">
                {/* Stars */}
                <div className="flex justify-center md:justify-start mb-4">
                  {[...Array(testimonials[activeTestimonial].rating)].map((_, i) => (
                    <svg
                      key={i}
                      className="w-6 h-6 text-yellow-500 fill-current"
                      viewBox="0 0 20 20"
                    >
                      <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
                    </svg>
                  ))}
                </div>

                {/* Quote */}
                <p className="text-xl text-gray-300 mb-6 leading-relaxed italic">
                  "{testimonials[activeTestimonial].content}"
                </p>

                {/* Client Info */}
                <div>
                  <h4 className="text-xl font-bold text-white">
                    {testimonials[activeTestimonial].name}
                  </h4>
                  <p className="text-gray-400">
                    {testimonials[activeTestimonial].role} at {testimonials[activeTestimonial].company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Testimonial Navigation */}
        <div className="flex justify-center gap-3">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`transition-all duration-300 cursor-pointer rounded-full ${
                activeTestimonial === index
                  ? 'w-8 h-3 theme-gradient'
                  : 'w-3 h-3 bg-[#151825] hover:bg-[#1a1d2d]'
              }`}
            />
          ))}
        </div>

        {/* All Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              onClick={() => setActiveTestimonial(index)}
              className={`p-6 rounded-2xl cursor-pointer transition-all duration-300 ${
                activeTestimonial === index
                  ? 'theme-gradient'
                  : 'theme-card bg-[#151825]/50 backdrop-blur-sm hover:bg-[#1a1d2d]'
              }`}
            >
              <div className="relative">
                <div className={`absolute inset-0 rounded-full blur-lg opacity-50 ${
                  activeTestimonial === index ? 'bg-white' : 'theme-gradient'
                }`}></div>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="relative w-16 h-16 rounded-full object-cover mb-4 border-2 border-white/20"
                />
              </div>
              <h4 className={`font-bold mb-1 ${
                activeTestimonial === index ? 'text-white' : 'text-gray-300'
              }`}>{testimonial.name}</h4>
              <p className={
                activeTestimonial === index ? 'text-sm text-white/80' : 'text-sm text-gray-500'
              }>{testimonial.company}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

