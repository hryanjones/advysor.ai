import 'react';
import { Check, Zap, Crown, Rocket } from 'lucide-react';

const Pricing = () => {
  const plans = [
    {
      name: 'Starter',
      icon: Zap,
      price: 'Free',
      period: 'forever',
      description: 'Perfect for early-stage startups',
      features: [
        'Basic AI strategy insights',
        'Market analysis reports',
        'Community access',
        'Email support',
        'Up to 3 projects',
      ],
      cta: 'Get Started',
      popular: false,
    },
    {
      name: 'Growth',
      icon: Rocket,
      price: '$49',
      period: 'per month',
      description: 'For scaling startups',
      features: [
        'Advanced AI recommendations',
        'Real-time analytics',
        'Priority support',
        'Team collaboration',
        'Unlimited projects',
        'Custom integrations',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      icon: Crown,
      price: 'Custom',
      period: 'contact us',
      description: 'For established companies',
      features: [
        'White-label solution',
        'Dedicated AI advisor',
        'Custom model training',
        '24/7 phone support',
        'SLA guarantee',
        'On-premise deployment',
      ],
      cta: 'Contact Sales',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Simple
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"> Pricing</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Choose the perfect plan for your startup journey. Start free and scale as you grow.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-slate-800/50 backdrop-blur-sm border rounded-xl p-8 hover:transform hover:scale-105 transition-all duration-300 ${
                plan.popular
                  ? 'border-cyan-400/60 shadow-lg shadow-cyan-400/20'
                  : 'border-purple-500/20 hover:border-cyan-400/40'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </div>
                </div>
              )}

              <div className="text-center mb-8">
                <div
                  className={`inline-flex p-3 rounded-lg mb-4 ${
                    plan.popular ? 'bg-gradient-to-r from-cyan-500/20 to-purple-600/20' : 'bg-slate-700/50'
                  }`}
                >
                  <plan.icon className={`h-8 w-8 ${plan.popular ? 'text-cyan-400' : 'text-gray-400'}`} />
                </div>

                <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                <p className="text-gray-400 mb-4">{plan.description}</p>

                <div className="mb-6">
                  <span className="text-4xl font-bold text-white">{plan.price}</span>
                  {plan.period && <span className="text-gray-400 ml-2">/{plan.period}</span>}
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-cyan-400 mr-3 flex-shrink-0" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-lg font-semibold transition-all ${
                  plan.popular
                    ? 'bg-gradient-to-r from-cyan-500 to-purple-600 text-white hover:from-cyan-600 hover:to-purple-700'
                    : 'border border-purple-500/30 text-white hover:bg-purple-500/10'
                }`}
              >
                {plan.cta}
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
