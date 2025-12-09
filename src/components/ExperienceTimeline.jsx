import Section from './Section';
import { experience } from '../data';
import { motion } from 'framer-motion';

const ExperienceTimeline = () => {
  return (
    <Section id="experience" className="bg-primary">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-16 text-center">
        Professional <span className="text-accent">Experience</span>
      </h2>

      <div className="relative max-w-4xl mx-auto">
        {/* Vertical Line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gray-800" />

        <div className="space-y-12">
          {experience.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row ${
                index % 2 === 0 ? 'md:flex-row-reverse' : ''
              } items-center w-full`}
            >
              {/* Content */}
              <div className="w-full md:w-1/2 pl-8 md:pl-0 md:px-8">
                <div className={`bg-secondary p-6 rounded-xl border border-gray-800 hover:border-accent/50 transition-colors ${
                  index % 2 === 0 ? 'md:text-right' : 'md:text-left'
                }`}>
                  <h3 className="text-xl font-bold text-white mb-1">{item.role}</h3>
                  <p className="text-accent font-medium mb-2">{item.institution}</p>
                  <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                    <span className="text-gray-400 text-sm font-mono bg-primary/50 px-2 py-1 rounded inline-block mb-2">
                      {item.period}
                    </span>
                    <span className="text-gray-500 text-xs uppercase tracking-wider">
                      {item.type}
                    </span>
                  </div>
                </div>
              </div>

              {/* Dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-accent rounded-full border-4 border-primary z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default ExperienceTimeline;
