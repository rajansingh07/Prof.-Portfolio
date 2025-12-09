import { useCallback } from "react";
import Particles from "react-tsparticles";
import { loadSlim } from "tsparticles-slim";
import { motion } from "framer-motion";
import { FaEnvelope, FaUniversity } from "react-icons/fa";

const Hero = () => {
  const particlesInit = useCallback(async (engine) => {
    await loadSlim(engine);
  }, []);

  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden">
      <Particles
        id="tsparticles"
        init={particlesInit}
        options={{
          background: {
            color: {
              value: "transparent",
            },
          },
          fpsLimit: 120,
          interactivity: {
            events: {
              onClick: {
                enable: true,
                mode: "push",
              },
              onHover: {
                enable: true,
                mode: "repulse",
              },
              resize: true,
            },
            modes: {
              push: {
                quantity: 4,
              },
              repulse: {
                distance: 200,
                duration: 0.4,
              },
            },
          },
          particles: {
            color: {
              value: "#00E3E3",
            },
            links: {
              color: "#94A3B8",
              distance: 150,
              enable: true,
              opacity: 0.3,
              width: 1,
            },
            move: {
              direction: "none",
              enable: true,
              outModes: {
                default: "bounce",
              },
              random: false,
              speed: 1,
              straight: false,
            },
            number: {
              density: {
                enable: true,
                area: 800,
              },
              value: 80,
            },
            opacity: {
              value: 0.5,
            },
            shape: {
              type: "circle",
            },
            size: {
              value: { min: 1, max: 3 },
            },
          },
          detectRetina: true,
        }}
        className="absolute inset-0 z-0"
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-accent font-medium tracking-widest mb-4 uppercase">Academic Portfolio</h2>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400">
            Prof. Tamal Kumar Mukherjee
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 font-light">
            Associate Professor, Department of Physics
            <br />
            <span className="text-accent font-normal">Adamas University</span>
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:tamal.mukherjee@adamasuniversity.ac.in"
              className="flex items-center gap-2 bg-accent text-primary px-6 py-3 rounded-full font-semibold hover:bg-white transition-colors shadow-lg shadow-accent/20"
            >
              <FaUniversity /> University Email
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="mailto:tamal.mukherjee@gmail.com"
              className="flex items-center gap-2 border border-accent text-accent px-6 py-3 rounded-full font-semibold hover:bg-accent/10 transition-colors"
            >
              <FaEnvelope /> Personal Email
            </motion.a>
          </div>
        </motion.div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-gray-500 animate-bounce"
      >
        <span className="text-sm uppercase tracking-widest">Scroll Down</span>
      </motion.div>
    </section>
  );
};

export default Hero;
