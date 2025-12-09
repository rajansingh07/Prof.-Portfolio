import Section from './Section';
import { FaEnvelope, FaMapMarkerAlt, FaExternalLinkAlt } from 'react-icons/fa';

const Contact = () => {
  return (
    <Section id="contact" className="bg-primary">
      <div className="max-w-4xl mx-auto bg-secondary rounded-2xl p-8 md:p-12 border border-gray-800">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
          Get in <span className="text-accent">Touch</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-4">Contact Information</h3>
            
            <div className="flex items-start gap-4">
              <FaMapMarkerAlt className="text-accent text-xl mt-1" />
              <div>
                <p className="text-white font-medium">Department of Physics</p>
                <p className="text-gray-400">Adamas University</p>
                <p className="text-gray-400">Barasat - Barrackpore Road</p>
                <p className="text-gray-400">Kolkata - 700126, West Bengal, India</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <FaEnvelope className="text-accent text-xl" />
              <div className="flex flex-col">
                <a href="mailto:tamal.mukherjee@adamasuniversity.ac.in" className="text-gray-300 hover:text-accent transition-colors">
                  tamal.mukherjee@adamasuniversity.ac.in
                </a>
                <a href="mailto:tamal.mukherjee@gmail.com" className="text-gray-300 hover:text-accent transition-colors">
                  tamal.mukherjee@gmail.com
                </a>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white mb-4">Professional Profiles</h3>
            
            <a 
              href="#" 
              className="flex items-center justify-between bg-primary p-4 rounded-lg group hover:bg-accent/10 transition-colors border border-gray-800 hover:border-accent/50"
            >
              <span className="text-gray-300 group-hover:text-white">InspireHEP Profile</span>
              <FaExternalLinkAlt className="text-gray-500 group-hover:text-accent" />
            </a>
            
            <a 
              href="#" 
              className="flex items-center justify-between bg-primary p-4 rounded-lg group hover:bg-accent/10 transition-colors border border-gray-800 hover:border-accent/50"
            >
              <span className="text-gray-300 group-hover:text-white">Google Scholar</span>
              <FaExternalLinkAlt className="text-gray-500 group-hover:text-accent" />
            </a>

            <a 
              href="#" 
              className="flex items-center justify-between bg-primary p-4 rounded-lg group hover:bg-accent/10 transition-colors border border-gray-800 hover:border-accent/50"
            >
              <span className="text-gray-300 group-hover:text-white">ResearchGate</span>
              <FaExternalLinkAlt className="text-gray-500 group-hover:text-accent" />
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
