import './index.css';

import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';
import { Hero } from './components/sections/Hero';
import { Partners } from './components/sections/Partners';
import { Services } from './components/sections/Services';
import { CTABanner } from './components/sections/CTABanner';
import { CaseStudies } from './components/sections/CaseStudies';
import { WorkingProcess } from './components/sections/WorkingProcess';
import { Team } from './components/sections/Team';
import { Testimonials } from './components/sections/Testimonials';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <div className="min-h-screen font-sans">
      <Header />
      <main>
        <Hero />
        <Partners />
        <Services />
        <CTABanner />
        <CaseStudies />
        <WorkingProcess />
        <Team />
        <Testimonials />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
