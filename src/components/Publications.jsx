import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from './Section';
import { publications } from '../data';
import { FaBook, FaQuoteRight } from 'react-icons/fa';

const Publications = () => {
  const [filter, setFilter] = useState('All');
  const filters = ['All', 'Journal', 'Conference', 'Book Chapter'];

  const filteredPublications = filter === 'All' 
    ? publications 
    : publications.filter(pub => pub.type === filter);

  return (
    <Section id="publications" className="bg-primary">
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 text-center">
        Selected <span className="text-accent">Publications</span>
      </h2>

      <div className="flex justify-center gap-4 mb-12 flex-wrap">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
              filter === f 
                ? 'bg-accent text-primary' 
                : 'bg-secondary text-gray-400 hover:text-white'
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        <AnimatePresence>
          {filteredPublications.map((pub) => (
            <motion.div
              key={pub.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              className="bg-secondary p-6 rounded-xl border border-gray-800 hover:border-accent/30 transition-colors"
            >
              <div className="flex flex-col md:flex-row justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-start gap-3 mb-2">
                    <FaBook className="text-accent mt-1 flex-shrink-0" />
                    <h3 className="text-lg font-semibold text-white">{pub.title}</h3>
                  </div>
                  <p className="text-gray-400 ml-7">
                    {pub.journal} <span className="text-gray-600">•</span> {pub.year}
                  </p>
                </div>
                <div className="flex items-center gap-2 text-gray-400 bg-primary/50 px-4 py-2 rounded-lg self-start md:self-center">
                  <FaQuoteRight className="text-accent text-sm" />
                  <span className="font-mono text-sm">{pub.citations} citations</span>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>
    </Section>
  );
};

export default Publications;
