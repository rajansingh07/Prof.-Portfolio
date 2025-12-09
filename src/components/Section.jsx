import { motion } from 'framer-motion';

const Section = ({ children, id, className = "" }) => {
  return (
    <section id={id} className={`py-20 px-6 md:px-12 lg:px-24 ${className}`}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto"
      >
        {children}
      </motion.div>
    </section>
  );
};

export default Section;
