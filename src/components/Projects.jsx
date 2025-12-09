import Section from './Section';
import { projects } from '../data';
import { FaHandHoldingUsd } from 'react-icons/fa';

const Projects = () => {
  return (
    <Section id="projects" className="bg-secondary/30">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
        Funded <span className="text-accent">Projects</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {projects.map((project) => (
          <div 
            key={project.id}
            className="bg-secondary p-8 rounded-xl border-t-4 border-accent relative overflow-hidden group"
          >
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
              <FaHandHoldingUsd className="text-8xl text-accent" />
            </div>
            
            <h3 className="text-xl font-bold text-white mb-4 relative z-10">{project.title}</h3>
            
            <div className="space-y-2 relative z-10">
              <p className="text-accent font-medium">{project.sponsor}</p>
              <p className="text-gray-400 text-sm">{project.role}</p>
              <div className="flex justify-between items-center pt-2">
                <p className="text-gray-500 text-sm font-mono">{project.period}</p>
                <p className="text-white font-bold text-sm bg-primary/50 px-2 py-1 rounded">{project.budget}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Projects;
