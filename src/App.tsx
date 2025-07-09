import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import PainSolution from './components/PainSolution';
import JourneyStages from './components/JourneyStages';
import HowItWorks from './components/HowItWorks';
import LeadMagnet from './components/LeadMagnet';
import SocialProof from './components/SocialProof';
import VlogContent from './components/VlogContent';
import PricingCTA from './components/PricingCTA';
import Footer from './components/Footer';
import { LinkProvider } from './contexts/LinkContext';
import MeetTheFounders from './components/MeetTheFounders';

export default function App() {
  // Handle anchor navigation on page load
  useEffect(() => {
    // Get the hash fragment from the URL
    const hash = window.location.hash;

    if (hash) {
      // Small timeout to ensure DOM is loaded
      setTimeout(() => {
        const element = document.querySelector(hash);
        if (element) {
          // Scroll to the element
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 300);
    }
  }, []);

  return (
    <LinkProvider>
      <div className="min-h-screen bg-navy">
        <Header />
        <Hero />
        <PainSolution />
        <JourneyStages />
        <SocialProof />
        <HowItWorks />
        <LeadMagnet />
        <VlogContent />
        <PricingCTA />
        <MeetTheFounders />
        <Footer />
      </div>
    </LinkProvider>
  );
}
