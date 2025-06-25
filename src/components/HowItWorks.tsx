import 'react';
import { MessageSquare, Brain, FileOutput, Star } from 'lucide-react';
import Button from './ui/Button';
import { useLinks } from '../contexts/LinkContext';

const HowItWorks = () => {
  const links = useLinks();
  const steps = [
    {
      number: '1',
      icon: MessageSquare,
      title: 'Describe your idea',
      description: 'Share your startup vision or challenge in one sentence.',
    },
    {
      number: '2',
      icon: Brain,
      title: 'Collaborate with ADVYSOR',
      description: 'AI guides you through proven startup frameworks.',
    },
    {
      number: '3',
      icon: FileOutput,
      title: 'Get your deliverables',
      description: 'Receive action plans and documents you need.',
    },
  ];

  return (
    <section id="how-it-works" className="section-padding bg-navy/30">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-shadow-lg">
            From Idea to Investor-Ready in <span className="gradient-text">3 Steps</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            You bring the idea, ADVYSOR brings the co-founder expertise. It's as simple as:
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mt-16">
          {/* Left Column - Steps and Quote */}
          <div className="space-y-8 flex flex-col justify-between min-h-[600px] pt-8">
            {steps.map((step, index) => (
              <div key={index} className="flex items-start space-x-6 group">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-brand rounded-full flex items-center justify-center text-navy font-bold text-xl group-hover:scale-110 transition-transform duration-300">
                    {step.number}
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex items-center mb-3">
                    <step.icon className="h-6 w-6 text-mint mr-3" />
                    <h3 className="text-xl font-bold text-white group-hover:text-mint transition-colors">
                      {step.title}
                    </h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}

            {/* Spacer to push testimonial down */}
            <div className="flex-grow min-h-[40px]"></div>

            {/* Maricar Quote styled like Social Proof */}
            <div className="card-glass p-8">
              <blockquote className="text-lg text-white mb-6 leading-relaxed italic">
                "It's like talking to the smartest friend I know — while their assistant simultaneously documents
                everything and builds my pitch deck."
              </blockquote>

              <div className="flex items-center space-x-4">
                <img
                  src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                  alt="Maricar L. Helmer"
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div className="flex-1">
                  <div className="text-white font-semibold">Maricar L. Helmer</div>
                  <div className="text-gray-400 text-sm">First-time founder</div>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Real ADVYSOR Workflow */}
          <div className="hover:scale-105 transition-all duration-300">
            <div className="card-glass p-8 rounded-2xl">
              <div className="bg-navy/70 rounded-lg p-6">
                <div className="flex items-center justify-between mb-6">
                  <h4 className="text-lg font-semibold text-white">ADVYSOR | Startup Co-Founder AI</h4>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  </div>
                </div>

                <div className="space-y-4 mb-6">
                  <div className="bg-white/10 rounded-lg p-4">
                    <div className="text-sm text-gray-400 mb-1">You</div>
                    <div className="text-white">Help me validate my startup idea</div>
                  </div>

                  <div className="bg-gradient-brand/20 rounded-lg p-4">
                    <div className="text-sm text-mint mb-1">ADVYSOR</div>
                    <div className="text-white text-sm mb-3">
                      Absolutely—let's run your idea through a quick, founder-friendly validation framework. We'll do
                      this in short, focused bursts so it doesn't feel overwhelming.
                    </div>

                    <div className="bg-navy/50 rounded p-3 mb-3">
                      <div className="text-xs text-gray-400 mb-2">Step 1 – Describe the Core of Your Idea</div>
                      <div className="text-xs text-gray-300 space-y-1">
                        <div>1. The problem you've noticed</div>
                        <div>2. Who experiences that pain</div>
                        <div>3. Your proposed solution</div>
                        <div>4. Current alternatives</div>
                      </div>
                    </div>

                    <div className="text-sm text-white">
                      Over to you—tell me about the idea and the customer pain you're targeting.
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <input
                    type="text"
                    placeholder="Tell me about your startup idea..."
                    className="flex-1 bg-white/10 border border-white/20 rounded-lg px-4 py-2 text-white placeholder-gray-400 text-sm"
                    disabled
                  />
                  <button className="bg-mint text-navy px-4 py-2 rounded-lg text-sm font-semibold">Send</button>
                </div>
              </div>
            </div>

            <div className="text-center mt-6">
              <p className="text-sm text-gray-400">
                Real ADVYSOR conversation: AI guiding you through startup validation
              </p>
            </div>
          </div>
        </div>

        <div className="flex justify-center mt-12">
          <Button
            as="a"
            href={links.chatGPT.tryAdvysor}
            external
            variant="primary"
            data-poc-cta
            aria-label="Open live AI chat in new tab"
          >
            Try ADVYSOR on ChatGPT
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
