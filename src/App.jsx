import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ResearchInterests from './components/ResearchInterests';
import AcademicAchievements from './components/AcademicAchievements';
import Publications from './components/Publications';
import Projects from './components/Projects';
import ExperienceTimeline from './components/ExperienceTimeline';
import Teaching from './components/Teaching';
import References from './components/References';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="bg-primary min-h-screen text-text font-sans selection:bg-accent selection:text-primary">
      <Navbar />
      <main>
        <Hero />
        <ResearchInterests />
        <AcademicAchievements />
        <Publications />
        <Projects />
        <ExperienceTimeline />
        <Teaching />
        <References />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
