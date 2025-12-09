import Section from './Section';
import { researchInterests } from '../data';

const ResearchInterests = () => {
  return (
    <Section id="research" className="bg-primary">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
        Research <span className="text-accent">Interests</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {researchInterests.map((item) => (
          <div 
            key={item.id}
            className="bg-secondary p-8 rounded-xl border border-gray-800 hover:border-accent/50 transition-all hover:-translate-y-2 group"
          >
            <div className="bg-primary w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
              <item.icon className="text-3xl text-accent" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
            <p className="text-gray-400 leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default ResearchInterests;
