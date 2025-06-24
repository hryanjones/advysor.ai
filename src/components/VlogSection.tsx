import React from 'react';
import { Play, Eye, Calendar } from 'lucide-react';

const VlogSection = () => {
  const vlogs = [
    {
      title: '200 Users to 1 Star Drop?!',
      thumbnail: '/Screenshot 2025-06-21 at 10.57.07.jpg',
      views: '15.2K',
      date: '4 days ago',
      description: 'The shocking story of how we went from 200 active users to a devastating 1-star rating drop.',
    },
    {
      title: 'AI Co-Founder Real Startup',
      thumbnail: '/Ai CO- FOUNDER REAL STARTUP-27.jpg',
      views: '23.8K',
      date: '1 week ago',
      description: 'Building a real startup with an AI co-founder - the complete journey and lessons learned.',
    },
    {
      title: 'AI Co-Founder Real Startup - Episode 12',
      thumbnail: '/Ai CO- FOUNDER REAL STARTUP-12.jpg',
      views: '18.5K',
      date: '2 weeks ago',
      description: 'Episode 12 of our AI co-founder series - major breakthroughs and challenges faced.',
    },
    {
      title: 'Starting Over... With AI',
      thumbnail: '/Starting Over... With AI.png',
      views: '31.2K',
      date: '3 weeks ago',
      description: "After the setback, we're starting over with a completely AI-driven approach.",
    },
  ];

  return (
    <section id="vlogs" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-800/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our Startup
            <span className="bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"> Journey</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Follow our real-time startup journey with AI co-founder. Raw, unfiltered, and educational.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {vlogs.map((vlog, index) => (
            <div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm border border-purple-500/20 rounded-xl overflow-hidden hover:border-cyan-400/40 transition-all duration-300 group hover:transform hover:scale-105"
            >
              <div className="relative">
                <img
                  src={vlog.thumbnail}
                  alt={vlog.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm rounded-full p-3 group-hover:bg-cyan-500/80 transition-all duration-300">
                    <Play className="h-6 w-6 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                  {vlog.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{vlog.description}</p>

                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Eye className="h-4 w-4 mr-1" />
                    {vlog.views}
                  </div>
                  <div className="flex items-center">
                    <Calendar className="h-4 w-4 mr-1" />
                    {vlog.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-cyan-500 to-purple-600 text-white px-8 py-3 rounded-lg hover:from-cyan-600 hover:to-purple-700 transition-all transform hover:scale-105">
            Watch All Episodes
          </button>
        </div>
      </div>
    </section>
  );
};

export default VlogSection;
