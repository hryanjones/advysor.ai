import 'react';
import { AlertCircle, CheckCircle, Lightbulb, FileText, TrendingUp, DollarSign } from 'lucide-react';

const PainSolution = () => {
  const benefits = [
    {
      icon: Lightbulb,
      title: 'Validate your startup idea early',
      description:
        "Don't sink time into something nobody wants – ADVYSOR helps you test and refine your idea against market insights before you build.",
    },
    {
      icon: FileText,
      title: 'Skip the blank page syndrome',
      description:
        'No more staring at empty docs – get step-by-step prompts and templates for business plans, models, and pitch deck slides, all tailored to your idea.',
    },
    {
      icon: TrendingUp,
      title: 'Expert guidance at every step',
      description:
        'ADVYSOR distills best practices from top accelerators (YC, Techstars) into your workflow, so you follow a winning playbook without needing an MBA.',
    },
    {
      icon: DollarSign,
      title: 'Investor-ready outputs',
      description:
        "Look professional when it counts. From one-click executive summaries to polished decks, you'll impress investors with credible, well-structured materials.",
    },
  ];

  return (
    <section className="section-padding bg-navy/50">
      <div className="container-max">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left Column - Pain Point */}
          <div className="animate-fade-in space-y-12">
            <div>
              <div className="flex items-center mb-8">
                <AlertCircle className="h-20 w-20 text-red-400 mr-4" />
                <h2 className="text-4xl md:text-5xl font-bold text-white text-shadow-lg">
                  Starting a Business Is Hard – 90% of Ideas Never Launch
                </h2>
              </div>

              <div className="problem-card transform rotate-3 bg-red-500/10 border border-red-500/20 rounded-lg p-6 mb-8">
                <p className="text-lg text-gray-300 leading-relaxed">
                  Most ideas die in notebooks. Solo founders face analysis paralysis, build the wrong features, or spend
                  months chasing advice they can't afford.
                </p>
              </div>
            </div>

            <div>
              <div className="flex items-center mb-4">
                <CheckCircle className="h-16 w-16 text-mint mr-4" />
                <h3 className="text-4xl md:text-5xl font-bold gradient-text text-shadow-lg">
                  ADVYSOR Makes Founding a Startup Easier
                </h3>
              </div>
            </div>
          </div>

          {/* Right Column - Solution */}
          <div className="animate-slide-up">
            <p className="text-xl text-gray-300 mb-8 leading-relaxed">
              Meet ADVYSOR – your AI co‑founder that instantly transforms a raw idea into a data‑backed MVP plan,
              go‑to‑market strategy, user personas, and an investor‑ready pitch deck. All in minutes, always on, at a
              price any indie hacker can afford.
            </p>

            <div className="space-y-6">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start group">
                  <div className="bg-gradient-brand/20 rounded-lg px-3 mr-4 group-hover:bg-gradient-brand/30 transition-colors">
                    <benefit.icon className="h-6 w-6 text-mint" />
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-white mb-2">{benefit.title}</h4>
                    <p className="text-gray-400 leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PainSolution;
