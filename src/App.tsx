import { useState, useEffect } from 'react';
import { ArrowRight, Code, Brain, Cloud, Palette, CheckCircle, Users, Award, Star } from 'lucide-react';

function App() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white overflow-hidden">
      <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur-lg border-b border-slate-700/50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
              <Code className="w-6 h-6 text-white" />
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              TechFlow
            </span>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            <a href="#services" className="text-slate-300 hover:text-white transition-colors">Services</a>
            <a href="#about" className="text-slate-300 hover:text-white transition-colors">About</a>
            <a href="#process" className="text-slate-300 hover:text-white transition-colors">Process</a>
            <a href="#testimonials" className="text-slate-300 hover:text-white transition-colors">Testimonials</a>
            <button className="px-6 py-2 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-medium hover:shadow-lg hover:shadow-blue-500/50 transition-all">
              Contact Us
            </button>
          </div>
        </div>
      </nav>

      <section className="relative min-h-screen flex items-center justify-center pt-20 px-6 overflow-hidden">
        <div
          className="absolute top-1/4 right-1/4 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl animate-pulse"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        />
        <div
          className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-cyan-500/20 rounded-full blur-3xl animate-pulse delay-1000"
          style={{ transform: `translateY(${scrollY * 0.3}px)` }}
        />

        <div className="relative z-10 max-w-6xl mx-auto text-center">
          <div className="mb-8 animate-fade-in">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight">
              Building the
              <span className="block bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-500 bg-clip-text text-transparent">
                Future of Tech
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 max-w-3xl mx-auto leading-relaxed">
              We create innovative digital solutions that transform businesses and elevate user experiences through cutting-edge technology and design excellence.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
            <button className="group px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105 flex items-center">
              Get Started
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-8 py-4 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg font-semibold text-lg hover:bg-slate-800 hover:border-slate-600 transition-all hover:scale-105">
              Learn More
            </button>
          </div>

          <div className="relative w-full max-w-4xl mx-auto h-64 flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-3xl backdrop-blur-sm transform rotate-3 animate-float" />
            <div className="absolute inset-0 bg-gradient-to-l from-blue-600/20 to-cyan-600/20 rounded-3xl backdrop-blur-sm transform -rotate-3 animate-float-delayed" />
            <div className="relative w-48 h-48 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-3xl shadow-2xl shadow-blue-500/50 animate-spin-slow flex items-center justify-center">
              <div className="w-32 h-32 bg-slate-900 rounded-2xl" />
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="relative py-32 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Our <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Solutions</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Comprehensive technology services designed to accelerate your digital transformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Code,
                title: 'Web Development',
                description: 'Modern, responsive web applications built with the latest technologies and best practices.'
              },
              {
                icon: Brain,
                title: 'AI Solutions',
                description: 'Intelligent automation and machine learning systems that drive business innovation.'
              },
              {
                icon: Cloud,
                title: 'Cloud Integration',
                description: 'Scalable cloud infrastructure and seamless integration across platforms.'
              },
              {
                icon: Palette,
                title: 'Product Design',
                description: 'Beautiful, user-centered designs that create memorable digital experiences.'
              }
            ].map((service, index) => (
              <div
                key={index}
                className="group relative p-8 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:bg-slate-800/60 hover:border-cyan-500/50 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="relative">
                  <div className="w-14 h-14 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <service.icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
                  <p className="text-slate-300 leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-bold mb-6">
                Innovating for a
                <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                  Better Tomorrow
                </span>
              </h2>
              <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                We're a team of passionate technologists, designers, and strategists committed to pushing the boundaries of what's possible. Our mission is to empower businesses with innovative solutions that drive growth and create lasting impact.
              </p>
              <div className="space-y-4">
                {['Innovation-driven approach', 'Client-focused solutions', 'Excellence in execution'].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <CheckCircle className="w-6 h-6 text-cyan-400" />
                    <span className="text-lg text-slate-200">{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative h-96">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/30 to-cyan-500/30 rounded-3xl backdrop-blur-sm transform rotate-6" />
              <div className="absolute inset-0 bg-gradient-to-tl from-blue-600/30 to-cyan-600/30 rounded-3xl backdrop-blur-sm transform -rotate-6" />
              <div className="absolute inset-0 bg-slate-800/50 backdrop-blur-lg rounded-3xl border border-slate-700/50 flex items-center justify-center">
                <div className="w-32 h-32 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full animate-pulse" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="process" className="relative py-32 px-6 bg-slate-900/50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              How We <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Work</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Our streamlined process ensures exceptional results every time
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              { step: '01', title: 'Discovery', description: 'Understanding your vision and business goals' },
              { step: '02', title: 'Strategy', description: 'Crafting the perfect roadmap for success' },
              { step: '03', title: 'Development', description: 'Building with cutting-edge technology' },
              { step: '04', title: 'Launch', description: 'Delivering excellence and ongoing support' }
            ].map((phase, index) => (
              <div key={index} className="relative">
                <div className="text-center">
                  <div className="text-6xl font-bold bg-gradient-to-br from-blue-500 to-cyan-400 bg-clip-text text-transparent mb-4">
                    {phase.step}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{phase.title}</h3>
                  <p className="text-slate-300">{phase.description}</p>
                </div>
                {index < 3 && (
                  <div className="hidden md:block absolute top-12 left-full w-full h-0.5 bg-gradient-to-r from-blue-500/50 to-transparent" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="relative py-32 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-5xl md:text-6xl font-bold mb-6">
              Client <span className="bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">Success</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto">
              Trusted by innovative companies worldwide
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: 'Sarah Johnson',
                role: 'CEO, TechStart Inc',
                content: 'Working with TechFlow transformed our digital presence. Their expertise and dedication exceeded all expectations.'
              },
              {
                name: 'Michael Chen',
                role: 'CTO, InnovateCo',
                content: 'The team delivered a solution that perfectly aligned with our vision. Outstanding technical skills and communication.'
              },
              {
                name: 'Emily Rodriguez',
                role: 'Founder, DesignHub',
                content: 'Exceptional quality and attention to detail. They truly understand modern technology and user experience.'
              }
            ].map((testimonial, index) => (
              <div
                key={index}
                className="p-8 bg-slate-800/40 backdrop-blur-sm border border-slate-700/50 rounded-2xl hover:border-cyan-500/50 transition-all hover:scale-105"
              >
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-cyan-400 fill-cyan-400" />
                  ))}
                </div>
                <p className="text-slate-300 mb-6 leading-relaxed">{testimonial.content}</p>
                <div className="flex items-center space-x-3">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
                    <span className="text-lg font-bold">{testimonial.name[0]}</span>
                  </div>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-sm text-slate-400">{testimonial.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center opacity-60">
            {[Users, Award, Brain, Cloud].map((Icon, index) => (
              <div key={index} className="p-6 bg-slate-800/30 rounded-xl">
                <Icon className="w-16 h-16 text-slate-400" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative py-32 px-6 bg-slate-900/50">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-cyan-500/10" />
        <div className="relative max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">
            Ready to Build
            <span className="block bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
              Something Amazing?
            </span>
          </h2>
          <p className="text-xl text-slate-300 mb-10 max-w-2xl mx-auto">
            Let's collaborate to bring your vision to life with cutting-edge technology and exceptional design.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="group px-10 py-5 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-lg font-semibold text-lg hover:shadow-2xl hover:shadow-blue-500/50 transition-all hover:scale-105 flex items-center">
              Start Your Project
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="px-10 py-5 bg-slate-800/50 backdrop-blur-sm border border-slate-700 rounded-lg font-semibold text-lg hover:bg-slate-800 hover:border-slate-600 transition-all hover:scale-105">
              Schedule a Call
            </button>
          </div>
        </div>
      </section>

      <footer className="relative py-12 px-6 border-t border-slate-800">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-lg flex items-center justify-center">
                <Code className="w-6 h-6 text-white" />
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-300 bg-clip-text text-transparent">
                TechFlow
              </span>
            </div>
            <div className="text-slate-400 text-center md:text-right">
              <p>&copy; 2024 TechFlow. All rights reserved.</p>
              <p className="text-sm mt-1">Building the future, one innovation at a time.</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
