import Section from './Section';
import { references } from '../data';
import { FaUserTie, FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';

const References = () => {
  return (
    <Section id="references" className="bg-secondary/30">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
        Academic <span className="text-accent">References</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {references.map((ref, index) => (
          <div key={index} className="bg-secondary p-8 rounded-xl border border-gray-800 hover:border-accent/50 transition-all group">
            <div className="flex items-start gap-4 mb-4">
              <div className="bg-primary p-3 rounded-full">
                <FaUserTie className="text-2xl text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{ref.name}</h3>
                <p className="text-accent font-medium">{ref.title}</p>
                <p className="text-gray-400 text-sm">{ref.institution}</p>
                {ref.details && <p className="text-gray-500 text-xs mt-1 italic">{ref.details}</p>}
              </div>
            </div>
            
            <div className="space-y-3 pt-4 border-t border-gray-800">
              <div className="flex items-start gap-3 text-gray-300 text-sm">
                <FaMapMarkerAlt className="text-accent mt-1 flex-shrink-0" />
                <span>{ref.address}</span>
              </div>
              <div className="flex items-center gap-3 text-gray-300 text-sm">
                <FaEnvelope className="text-accent flex-shrink-0" />
                <a href={`mailto:${ref.email}`} className="hover:text-white transition-colors">{ref.email}</a>
              </div>
              <div className="flex items-center gap-3 text-gray-300 text-sm">
                <FaPhone className="text-accent flex-shrink-0" />
                <span>{ref.phone}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default References;
