import 'react';
import { Lightbulb, Rocket, TrendingUp, Presentation as PresentationChart } from 'lucide-react';

const JourneyStages = () => {
  const stages = [
    {
      icon: Lightbulb,
      title: 'Ideation',
      subtitle: 'Validate your idea',
      description:
        'Get rapid market research and feedback prompts to test if your concept has legs before you build (so you can pivot or proceed wisely).',
      color: 'from-yellow-400 to-orange-500',
    },
    {
      icon: Rocket,
      title: 'MVP',
      subtitle: 'Build what matters',
      description:
        "Generate a lean Product Requirements Doc (PRD) and a feature roadmap focused on your idea's core value – develop your MVP without the fluff.",
      color: 'from-mint to-cyan',
    },
    {
      icon: TrendingUp,
      title: 'Growth',
      subtitle: 'Hack your growth',
      description:
        'Receive a go-to-market game plan: marketing channels, early growth hacking tactics, and monetization strategies to acquire your first users and revenue.',
      color: 'from-indigo to-purple-500',
    },
    {
      icon: PresentationChart,
      title: 'Fundraising',
      subtitle: 'Nail your pitch',
      description:
        'Craft an investor narrative and slide deck automatically – from key metrics to storytelling – so you can approach seed funding discussions with a polished pitch.',
      color: 'from-magenta to-pink-500',
    },
  ];

  return (
    <section className="section-padding bg-gradient-to-b from-navy to-navy/80">
      <div className="container-max">
        <div className="section-header">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-shadow-lg">
            From Idea to Seed Funding – <span className="gradient-text">Guidance at Every Stage</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            Whether you're validating a concept or closing a seed round, ADVYSOR adapts to your journey. One platform to
            guide you through all the pivotal startup stages:
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 relative">
          {stages.map((stage, index) => (
            <div key={index} className="flex md:flex-col text-center group">
              {/* Icon */}
              <div className="relative mr-4 md:mb-8 md:m4-0 group-hover:scale-105">
                <div
                  className={`w-20 h-20 mx-auto rounded-full bg-gradient-to-r ${stage.color} p-1 group-hover:scale-110 transition-transform duration-300`}
                >
                  <div className="w-full h-full bg-navy rounded-full flex items-center justify-center">
                    <stage.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="card-glass p-6 group-hover:bg-white/10 transition-all duration-300 group-hover:scale-105">
                <h3 className="text-xl font-bold text-white mb-2">{stage.title}</h3>
                <h4 className="text-mint font-semibold mb-4">{stage.subtitle}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{stage.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JourneyStages;
