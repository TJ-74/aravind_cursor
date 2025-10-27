export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      title: 'Share Your Vision',
      description: 'Tell us about your project, goals, and creative vision. Upload your raw footage or discuss your ideas with our team.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
    },
    {
      number: '02',
      title: 'We Plan & Strategize',
      description: 'Our team reviews your content, creates a detailed editing plan, and provides you with a timeline and quote.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
        </svg>
      ),
    },
    {
      number: '03',
      title: 'Expert Editing',
      description: 'Our professional editors bring your vision to life with cutting-edge techniques, effects, and attention to detail.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      number: '04',
      title: 'Review & Revise',
      description: 'We share the first draft for your feedback. You get up to 3 rounds of revisions to ensure perfection.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
        </svg>
      ),
    },
    {
      number: '05',
      title: 'Final Delivery',
      description: 'Receive your polished video in any format you need, optimized for your platform of choice.',
      icon: (
        <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="how-it-works" className="theme-section relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-[#151825] pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-64 bg-gradient-to-b from-[#0f1119] to-transparent"></div>
        <div className="absolute bottom-0 left-0 w-full h-64 bg-gradient-to-t from-[#0f1119] to-transparent"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            How It Works
          </h2>
          <p className="text-xl text-gray-400">
            Our simple 5-step process to transform your raw footage into stunning videos
          </p>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connecting Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute left-[52px] top-[120px] w-0.5 h-32 bg-gradient-to-b from-purple-600/50 to-transparent"></div>
              )}

              <div className="flex flex-col md:flex-row gap-6 mb-12 group">
                {/* Icon & Number */}
                <div className="flex-shrink-0">
                  <div className="relative">
                    <div className="w-24 h-24 theme-gradient rounded-2xl flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-900/20">
                      {step.icon}
                    </div>
                    <div className="absolute -top-2 -right-2 w-10 h-10 bg-white text-purple-600 rounded-full flex items-center justify-center font-bold text-sm shadow-lg">
                      {step.number}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 theme-card bg-[#151825]/50 backdrop-blur-sm p-8 group-hover:bg-[#1a1d2d]">
                  <h3 className="text-2xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed text-lg">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="#book-call"
            className="theme-button inline-flex items-center"
          >
            Start Your Project Today
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}

