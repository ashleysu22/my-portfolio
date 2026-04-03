import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';

const Portfolio = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Projects', target: 'projects' },
    { name: 'About', target: 'about' },
    { name: 'Contact', target: 'contact' },
  ];

  const projects = [
    { title: "App", desc: "Full-stack E-commerce", back: "Details: Stripe, Redux, JWT" },
    { title: "Laravel POS", desc: "Real-time analytics", back: "Details: Socket.io, Redis" },
    { title: "Mobile App", desc: "掷筊 & 经期追踪 Web App", back: "Details: Vue 3, Vite, Tailwind CSS", link: "https://ashleysu22.github.io/my-app"},
    { title: "App", desc: "Full-stack E-commerce", back: "Details: Stripe, Redux, JWT" },
    { title: "Laravel POS", desc: "Real-time analytics", back: "Details: Socket.io, Redis" },
    { title: "Mobile App", desc: "掷筊 & 经期追踪 Web App", back: "Details: Vue 3, Vite, Tailwind CSS", link: "https://ashleysu22.github.io/my-app"},
  ];

  return (
    // Updated font to Roboto
    <div id="home" className="bg-[#0f172a] text-white font-['Roboto'] overflow-hidden no-scrollbar">
      
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-[#0f172a]/80 backdrop-blur-md z-50 px-6 py-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link
            to="home"
            smooth={true}
            className="text-xl font-bold cursor-pointer hover:text-400 hover:text-[#dbe2ef] transition-colors z-50"
          >
            MyPortfolio
          </Link>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.target}
                to={link.target}
                smooth={true}
                duration={800}
                offset={-70}
                className="text-sm text-gray-400 hover:text-white transition-colors cursor-pointer"
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden z-50" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Updated Mobile Slide-out Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ x: '100%' }} // Start off-screen to the right
              animate={{ x: 0 }}      // Slide in
              exit={{ x: '100%' }}    // Slide out
              transition={{ type: 'tween', duration: 0.4 }}
              className="fixed top-0 right-0 h-screen w-full sm:w-80 bg-[#1e293b] flex flex-col items-center justify-center space-y-8 shadow-2xl md:hidden"
            >
              {navLinks.map((link) => (
                <Link
                  key={link.target}
                  to={link.target}
                  smooth={true}
                  duration={800}
                  offset={-70}
                  onClick={() => setIsOpen(false)}
                  className="text-2xl text-gray-400 hover:text-white cursor-pointer"
                >
                  {link.name}
                </Link>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
            {/* Hero Section with Background Image */}
      <main 
        className="relative flex flex-col items-center justify-center min-h-screen px-6 text-center bg-cover bg-center bg-no-repeat"
        style={{ 
          // Replace with your actual image URL or local path
          backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVfByaaz9qaF1-LowslG9a3owWNK1eAf26sg&s')` 
        }}
      >
        {/* Dark Overlay to make text pop */}
        <div className="absolute inset-0 bg-[#0f172a]/70 backdrop-blur-[2px]"></div>

        {/* Content - added relative z-10 so it sits above the overlay */}
        <div className="relative z-10">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-5xl md:text-7xl font-black mb-6 leading-tight"
          >
            Hi, I'm Ashley
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-300 text-lg md:text-xl mb-10 max-w-lg mx-auto"
          >
            Frontend / Web / Mobile Developer
          </motion.p>
          
          <Link to="projects" smooth={true} duration={800} offset={-70}>
            <button className="bg-white text-black px-8 py-3 rounded-full font-bold hover:scale-105 transition-transform shadow-xl">
              View Projects
            </button>
          </Link>
        </div>
      </main>


      {/* Projects Section */}
      <section id="projects" className="py-40">
        <h3 className="text-3xl font-bold text-center mb-16">Projects</h3>
        <div className="flex w-fit animate-infinite-scroll hover:[animation-play-state:paused]">
          {projects.map((project, index) => (
            <div key={index} className="flex-shrink-0 px-4 group [perspective:1000px]">
              {/* Wrap the entire flippable card in an anchor tag */}
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="block cursor-pointer"
              >
                <div className="relative w-72 h-44 sm:w-80 sm:h-48 transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  {/* Front Side */}
                  <div className="absolute inset-0 bg-[#1e293b] p-8 rounded-2xl border border-gray-800 flex flex-col justify-center [backface-visibility:hidden]">
                    <h4 className="text-xl font-bold mb-2">{project.title}</h4>
                    <p className="text-gray-400 text-sm">{project.desc}</p>
                  </div>
                  {/* Back Side */}
                  <div className="absolute inset-0 bg-[#dbe2ef] p-8 rounded-2xl flex flex-col justify-center items-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <p className="text-[#454B61] text-sm font-medium mb-2">{project.back}</p>
                    <span className="text-[#d63384] text-xs font-bold underline">Click to Launch App</span>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </section>


      {/* About Section with Fixed Background Image */}
      <section 
        id="about" 
        className="relative py-60 px-6 text-center overflow-hidden bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ 
          backgroundImage: `url('https://th.bing.com/th/id/R.7a253f65df8944187b8718c6b512376f?rik=WAEp3Y8XbMDPRg&riu=http%3a%2f%2fi0.hdslb.com%2fbfs%2farchive%2fd7fa11c38a4a03d008cef9d0f26cd83d966e9f0c.jpg&ehk=DHjy0cREaf0ck4vR9dlOYoyyeqUe1DK6JMIz6JnNnns%3d&risl=&pid=ImgRaw&r=0')` 
        }}
      >
        {/* Dark Overlay for Text Contrast */}
        <div className="absolute inset-0 bg-[#0f172a]/75 backdrop-blur-[2px]"></div>

        {/* Content Container */}
        <motion.div 
          className="relative z-10 max-w-3xl mx-auto"
          initial={{ opacity: 0, y: 80 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 1.5, ease: "easeOut" }}
        >
          <h3 className="text-4xl md:text-6xl font-black mb-8 text-white tracking-tight">
            About Me
          </h3>
          
          <div className="space-y-6">
            <p className="text-gray-200 text-lg md:text-2xl leading-relaxed font-light">
              I build clean and modern web & mobile applications using React and modern technologies.
            </p>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed font-light italic">
              "Focusing on the intersection of design and high-performance code."
            </p>
          </div>

          <div className="w-24 h-1.5 bg-blue-500 mx-auto mt-12 rounded-full shadow-lg shadow-blue-500/50"></div>
        </motion.div>
      </section>




      {/* Contact Section with Linear Slide-up */}
      <motion.section 
        id="contact" 
        className="py-40 px-6 text-center bg-[#dbe2ef]" 
        initial={{ opacity: 0, y: 150 }} // Slightly deeper start for a longer slide
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: false, amount: 0.1 }}
        transition={{ 
          duration: 1.5,      // Slightly longer for "extra smooth" feel
          ease: "linear"      // Constant speed, no "ease out" snapping
        }}
      >
        <div className="max-w-4xl mx-auto">
          <h3 className="text-[#0B0E1A] text-4xl font-bold mb-6">Contact</h3>
          
          {/* Fixed: Removed the "-200" and ensured color hex is correct */}
          <p className="text-[#454B61] mb-10 text-lg">
            Let's build something amazing together.
          </p>
          
          <a href="mailto:ashleysu1115@gmail.com">
            <button className="bg-[#0B0E1A] text-[#dbe2ef] px-12 py-4 rounded-full font-bold shadow-2xl hover:scale-105 transition-transform">
              ashleysu1115@gmail.com
            </button>
          </a>
        </div>
      </motion.section>




            <footer className="py-3 bg-[#0B0E1A] text-center text-[#dbe2ef] text-sm uppercase tracking-widest">
        <div className="max-w-4xl mx-auto border-t border-[#0B0E1A]/10 pt-1">
          © 2026 Ashley Su
        </div>
      </footer>

    </div>
  );
};

export default Portfolio;
