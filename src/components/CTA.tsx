import 'react';
import { ArrowRight, Sparkles } from 'lucide-react';

const CTA = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <div className="bg-gradient-to-r from-slate-800/50 to-purple-900/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-12">
          <div className="inline-flex items-center bg-gradient-to-r from-cyan-500/20 to-purple-600/20 rounded-full px-6 py-2 mb-8">
            <Sparkles className="h-5 w-5 text-cyan-400 mr-2" />
            <span className="text-cyan-400 font-semibold">Ready to Transform Your Startup?</span>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Start Your Journey with
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent">
              {' '}
              AI Today
            </span>
          </h2>

          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Join hundreds of successful founders who've accelerated their startup growth with ADVYSOR.AI. Your AI
            co-founder is waiting.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-4 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all transform hover:scale-105 flex items-center justify-center group">
              Get Started Free
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <button className="border border-purple-500/30 text-white px-8 py-4 rounded-lg hover:bg-purple-500/10 transition-all">
              Schedule Demo
            </button>
          </div>

          <p className="text-sm text-gray-400 mt-6">No credit card required • 14-day free trial • Cancel anytime</p>
        </div>
      </div>
    </section>
  );
};

export default CTA;
