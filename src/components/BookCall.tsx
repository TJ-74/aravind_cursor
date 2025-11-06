'use client';

import { useState } from 'react';
import { useTheme } from './ThemeProvider';

export default function BookCall() {
  const { themeClasses } = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    projectType: '',
    budget: '',
    date: '',
    time: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Call booking submitted:', formData);
    alert('Thank you! We\'ll send you a calendar invite shortly.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      company: '',
      projectType: '',
      budget: '',
      date: '',
      time: '',
      message: '',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section id="book-call" className={`py-20 relative overflow-hidden ${themeClasses.bgPrimary}`}>
      {/* Background Gradient */}
      <div className={`absolute inset-0 ${themeClasses.bgGradient} pointer-events-none`}></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className={`text-4xl md:text-5xl font-bold ${themeClasses.textPrimary} mb-4`}>
            Book a Call With Us Today
          </h2>
          <p className={`text-xl ${themeClasses.textSecondary}`}>
            Let's discuss your project and how we can bring your vision to life. Schedule a free 30-minute consultation.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Benefits */}
          <div className="space-y-8">
            <div className={`${themeClasses.cardBg} ${themeClasses.cardBorder} border backdrop-blur-sm p-8 rounded-xl`}>
              <h3 className={`text-2xl font-bold ${themeClasses.textPrimary} mb-6`}>
                What to Expect on the Call:
              </h3>
              <div className="space-y-6">
                {[
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    text: 'Discuss your project goals and vision',
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    text: 'Get expert recommendations and insights',
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    text: 'Receive a detailed timeline and quote',
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    text: 'See examples of similar projects',
                  },
                  {
                    icon: (
                      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    ),
                    text: 'Ask any questions you have',
                  },
                ].map((item, index) => (
                  <div key={index} className="flex items-start">
                    <div className="flex-shrink-0 theme-gradient-text mr-4">
                      {item.icon}
                    </div>
                    <p className={`${themeClasses.textSecondary} text-lg`}>{item.text}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 gap-4">
              <div className={`${themeClasses.cardBg} ${themeClasses.cardBorder} border backdrop-blur-sm p-6 text-center rounded-xl`}>
                <div className={`text-4xl font-bold ${themeClasses.textPrimary} mb-2`}>30 min</div>
                <div className={`${themeClasses.textSecondary}`}>Free Consultation</div>
              </div>
              <div className={`${themeClasses.cardBg} ${themeClasses.cardBorder} border backdrop-blur-sm p-6 text-center rounded-xl`}>
                <div className={`text-4xl font-bold ${themeClasses.textPrimary} mb-2`}>24h</div>
                <div className={`${themeClasses.textSecondary}`}>Response Time</div>
              </div>
            </div>

            {/* Contact Info */}
            <div className={`${themeClasses.cardBg} ${themeClasses.cardBorder} border backdrop-blur-sm p-6 rounded-xl`}>
              <p className={`${themeClasses.textSecondary} mb-4`}>Prefer to reach out directly?</p>
              <div className="space-y-3">
                <a href="mailto:hello@videoedit.com" className={`flex items-center ${themeClasses.textPrimary} hover:text-purple-400 transition-colors`}>
                  <div className="w-8 h-8 theme-gradient rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  hello@videoedit.com
                </a>
                <a href="tel:+15551234567" className={`flex items-center ${themeClasses.textPrimary} hover:text-purple-400 transition-colors`}>
                  <div className="w-8 h-8 theme-gradient rounded-lg flex items-center justify-center mr-3">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  +1 (555) 123-4567
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Booking Form */}
          <div className={`${themeClasses.cardBg} ${themeClasses.cardBorder} border backdrop-blur-sm p-8 md:p-10 rounded-3xl`}>
            <h3 className={`text-2xl font-bold ${themeClasses.textPrimary} mb-6`}>
              Schedule Your Free Consultation
            </h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="name" className={`block ${themeClasses.textPrimary} font-semibold mb-2`}>
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg ${themeClasses.inputBg} ${themeClasses.inputBorder} border ${themeClasses.inputText} ${themeClasses.inputPlaceholder} focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 outline-none transition-all`}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="email" className={`block ${themeClasses.textPrimary} font-semibold mb-2`}>
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg ${themeClasses.inputBg} ${themeClasses.inputBorder} border ${themeClasses.inputText} ${themeClasses.inputPlaceholder} focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 outline-none transition-all`}
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="phone" className={`block ${themeClasses.textPrimary} font-semibold mb-2`}>
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg ${themeClasses.inputBg} ${themeClasses.inputBorder} border ${themeClasses.inputText} ${themeClasses.inputPlaceholder} focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 outline-none transition-all`}
                    placeholder="+1 (555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="company" className={`block ${themeClasses.textPrimary} font-semibold mb-2`}>
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg ${themeClasses.inputBg} ${themeClasses.inputBorder} border ${themeClasses.inputText} ${themeClasses.inputPlaceholder} focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 outline-none transition-all`}
                    placeholder="Your Company"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="projectType" className={`block ${themeClasses.textPrimary} font-semibold mb-2`}>
                  Project Type *
                </label>
                <select
                  id="projectType"
                  name="projectType"
                  required
                  value={formData.projectType}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg ${themeClasses.inputBg} ${themeClasses.inputBorder} border ${themeClasses.inputText} focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 outline-none transition-all appearance-none cursor-pointer`}
                  style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em', paddingRight: '2.5rem' }}
                >
                  <option value="">Select project type</option>
                  <option value="commercial">Commercial</option>
                  <option value="corporate">Corporate Video</option>
                  <option value="social">Social Media Content</option>
                  <option value="music">Music Video</option>
                  <option value="event">Event Coverage</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="budget" className={`block ${themeClasses.textPrimary} font-semibold mb-2`}>
                  Budget Range
                </label>
                <select
                  id="budget"
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg ${themeClasses.inputBg} ${themeClasses.inputBorder} border ${themeClasses.inputText} focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 outline-none transition-all appearance-none cursor-pointer`}
                  style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em', paddingRight: '2.5rem' }}
                >
                  <option value="">Select budget range</option>
                  <option value="under-1k">Under $1,000</option>
                  <option value="1k-5k">$1,000 - $5,000</option>
                  <option value="5k-10k">$5,000 - $10,000</option>
                  <option value="10k-plus">$10,000+</option>
                </select>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="date" className={`block ${themeClasses.textPrimary} font-semibold mb-2`}>
                    Preferred Date *
                  </label>
                  <input
                    type="date"
                    id="date"
                    name="date"
                    required
                    value={formData.date}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg ${themeClasses.inputBg} ${themeClasses.inputBorder} border ${themeClasses.inputText} focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 outline-none transition-all`}
                  />
                </div>

                <div>
                  <label htmlFor="time" className={`block ${themeClasses.textPrimary} font-semibold mb-2`}>
                    Preferred Time *
                  </label>
                  <select
                    id="time"
                    name="time"
                    required
                    value={formData.time}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-lg ${themeClasses.inputBg} ${themeClasses.inputBorder} border ${themeClasses.inputText} focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 outline-none transition-all appearance-none cursor-pointer`}
                    style={{ backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e")`, backgroundPosition: 'right 0.5rem center', backgroundRepeat: 'no-repeat', backgroundSize: '1.5em 1.5em', paddingRight: '2.5rem' }}
                  >
                    <option value="">Select time</option>
                    <option value="9am">9:00 AM</option>
                    <option value="10am">10:00 AM</option>
                    <option value="11am">11:00 AM</option>
                    <option value="12pm">12:00 PM</option>
                    <option value="1pm">1:00 PM</option>
                    <option value="2pm">2:00 PM</option>
                    <option value="3pm">3:00 PM</option>
                    <option value="4pm">4:00 PM</option>
                    <option value="5pm">5:00 PM</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="message" className={`block ${themeClasses.textPrimary} font-semibold mb-2`}>
                  Tell Us About Your Project
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className={`w-full px-4 py-3 rounded-lg ${themeClasses.inputBg} ${themeClasses.inputBorder} border ${themeClasses.inputText} ${themeClasses.inputPlaceholder} focus:border-purple-600 focus:ring-2 focus:ring-purple-600/20 outline-none transition-all resize-none`}
                  placeholder="Brief description of your project..."
                />
              </div>

              <button
                type="submit"
                className={`${themeClasses.buttonPrimary} w-full py-3 px-6 rounded-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105`}
              >
                Book My Free Call
              </button>

              <p className="text-sm text-gray-400 text-center">
                By submitting, you agree to receive communication from us.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

