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

export default function App() {
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
        <Footer />
      </div>
    </LinkProvider>
  );
}
