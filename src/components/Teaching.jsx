import Section from './Section';
import { teaching } from '../data';
import { FaChalkboardTeacher, FaCode } from 'react-icons/fa';

const Teaching = () => {
  return (
    <Section id="teaching" className="bg-secondary/30">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 text-center">
        Teaching <span className="text-accent">Experience</span>
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {teaching.map((level, index) => (
          <div key={index} className="bg-secondary p-8 rounded-xl border border-gray-800">
            <div className="flex items-center gap-4 mb-2">
              <div className="bg-primary p-3 rounded-lg">
                <FaChalkboardTeacher className="text-2xl text-accent" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white">{level.level}</h3>
                <p className="text-accent text-sm">{level.institution}</p>
              </div>
            </div>
            
            <div className="h-px bg-gray-800 w-full my-4" />
            
            <ul className="space-y-3">
              {level.subjects.map((subject, idx) => (
                <li key={idx} className="flex items-center gap-3 text-gray-300">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  {subject === "Python Programming" ? (
                    <span className="flex items-center gap-2 text-white font-medium">
                      <FaCode className="text-accent" /> {subject}
                    </span>
                  ) : (
                    subject
                  )}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
};

export default Teaching;
