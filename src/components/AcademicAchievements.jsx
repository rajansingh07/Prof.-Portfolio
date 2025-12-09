import Section from './Section';
import { academicAchievements, awards, education, administrative, examinations, otherInfo } from '../data';
import { FaTrophy, FaGraduationCap, FaUserTie, FaClipboardCheck, FaStar } from 'react-icons/fa';

const AcademicAchievements = () => {
  return (
    <Section id="achievements" className="bg-secondary/30">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Academic <span className="text-accent">Profile</span>
          </h2>
          <p className="text-gray-300 mb-8 text-lg leading-relaxed">
            With over 16 years of research experience spanning institutions in India and abroad, 
            and a decade of teaching excellence, Prof. Mukherjee has made significant contributions 
            to the field of High Energy Physics.
          </p>
          
          <div className="grid grid-cols-2 gap-6 mb-8">
            {academicAchievements.map((item, index) => (
              <div key={index} className="bg-secondary p-6 rounded-xl text-center border border-gray-800 hover:border-accent/50 transition-colors">
                <h3 className="text-4xl font-bold text-accent mb-2">{item.count}</h3>
                <p className="text-gray-400 text-sm uppercase tracking-wide">{item.label}</p>
              </div>
            ))}
          </div>

          <div className="mb-8">
             <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <FaClipboardCheck className="text-accent" /> Examinations Qualified
            </h3>
            <div className="space-y-3">
              {examinations.map((exam, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-300 bg-secondary p-3 rounded-lg border border-gray-800">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  {exam}
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
              <FaGraduationCap className="text-accent" /> Education
            </h3>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div key={index} className="bg-secondary p-4 rounded-lg border-l-4 border-accent hover:bg-secondary/80 transition-colors">
                  <div className="flex justify-between items-start">
                    <div>
                      <h4 className="text-white font-bold">{edu.degree}</h4>
                      <p className="text-accent text-sm">{edu.institution}</p>
                      {edu.details && <p className="text-gray-400 text-xs mt-1">{edu.details}</p>}
                    </div>
                    <span className="text-gray-500 font-mono text-sm">{edu.year}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
             <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2">
              <FaStar className="text-accent" /> Other Information
            </h3>
            <div className="space-y-3">
              {otherInfo.map((info, index) => (
                <div key={index} className="flex items-center gap-3 text-gray-300 bg-secondary p-3 rounded-lg border border-gray-800">
                  <span className="w-1.5 h-1.5 bg-accent rounded-full" />
                  {info}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <FaTrophy className="text-yellow-500" /> Awards & Fellowships
          </h3>
          <div className="space-y-4">
            {awards.map((award, index) => (
              <div key={index} className="flex items-center gap-4 bg-secondary p-4 rounded-lg border border-gray-800 hover:border-accent/30 transition-colors">
                <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                <span className="text-white font-medium">{award}</span>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-2xl font-bold text-white mb-4 flex items-center gap-2">
            <FaUserTie className="text-accent" /> Administrative Roles
          </h3>
          <div className="space-y-4">
            {administrative.map((role, index) => (
              <div key={index} className="flex items-center gap-4 bg-secondary p-4 rounded-lg border border-gray-800 hover:border-accent/30 transition-colors">
                <span className="w-2 h-2 bg-accent rounded-full flex-shrink-0" />
                <span className="text-white font-medium">{role}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};

export default AcademicAchievements;
