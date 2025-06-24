import React from 'react';
import { Brain, Target, BarChart3, Users, Lightbulb, Shield } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: Brain,
      title: 'AI-Powered Strategy',
      description:
        'Get personalized business strategies powered by advanced AI algorithms that analyze market trends and competitor data.',
    },
    {
      icon: Target,
      title: 'Market Analysis',
      description:
        'Deep market insights and opportunity identification to help you find your perfect product-market fit.',
    },
    {
      icon: BarChart3,
      title: 'Growth Analytics',
      description: 'Real-time analytics and performance tracking to optimize your growth trajectory and KPIs.',
    },
    {
      icon: Users,
      title: 'Team Building',
      description: 'Smart recommendations for team composition, hiring strategies, and organizational structure.',
    },
    {
      icon: Lightbulb,
      title: 'Innovation Hub',
      description: 'Continuous idea generation and validation to keep your startup ahead of the competition.',
    },
    {
      icon: Shield,
      title: 'Risk Management',
      description: "Proactive risk assessment and mitigation strategies to protect your startup's future.",
    },
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Powerful Features for
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {' '}
              Startup Success
            </span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Everything you need to build, scale, and succeed with your startup, powered by cutting-edge AI technology.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl p-8 hover:border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className="bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-lg p-3 w-fit mb-6 group-hover:from-cyan-500/30 group-hover:to-purple-600/30 transition-all">
                <feature.icon className="h-8 w-8 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
              </div>

              <h3 className="text-xl font-semibold text-white mb-4 group-hover:text-cyan-400 transition-colors">
                {feature.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
