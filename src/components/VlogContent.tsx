import 'react';
import { Play } from 'lucide-react';
import Button from './ui/Button';

const VlogContent = () => {
  const episodes = [
    {
      title: 'Starting Over... With AI',
      thumbnail: 'Starting Over... With AI.png',
      description:
        "Welcome to Week 1 of building ADVYSOR in public. I'm Alex, co-founder of ADVYSOR — an AI co-founder for solo and early-stage founders. My co-founder Mark has taken 7 products from 0 to 1. He used that experience to customize GPT-4 into virtual versions of himself you can build with.",
      url: 'https://www.youtube.com/watch?v=qLfr3XLQmvw&list=PLPdtPFnMJ1V8WVrIDfp-W9wT5q3H9nBFA&index=4',
    },
  ];

  return (
    <section id="content" className="section-padding bg-gradient-to-b from-navy/30 to-navy/80">
      <div className="container-max">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            <span className="text-shadow-lg">Building in Public:</span>{' '}
            <span className="gradient-text">Learn Along with Us</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            We're not just an AI tool – we're founders on a journey, just like you. Each week, our team drops a short
            vlog sharing the real ups and downs of going from idea to traction. No filters, no BS – just honest lessons
            you can use.
          </p>
        </div>

        <div className="flex justify-center mb-12">
          {episodes.map((episode, index) => (
            <a
              key={index}
              href={episode.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group cursor-pointer w-full max-w-2xl block"
            >
              <div className="card-glass rounded-xl overflow-hidden hover:bg-white/10 transition-all duration-300 transform hover:scale-105">
                <div className="relative">
                  <img
                    src={episode.thumbnail}
                    alt={episode.title}
                    className="w-full h-80 md:h-96 object-contain bg-navy/50 group-hover:scale-105 transition-transform duration-300"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                    <div className="bg-white/20 backdrop-blur-sm rounded-full p-4 group-hover:bg-red-500/80 transition-all duration-300">
                      <Play className="h-8 w-8 text-white" />
                    </div>
                  </div>

                  {/* Episode number badge for series */}
                  {episode.title.includes('Episode') && (
                    <div className="absolute top-3 left-3 bg-gradient-brand rounded-full px-3 py-1 text-xs font-bold text-navy">
                      EP {episode.title.match(/Episode (\d+)/)?.[1]}
                    </div>
                  )}
                </div>

                <div className="p-8">
                  <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-mint transition-colors line-clamp-2">
                    {episode.title}
                  </h3>

                  <p className="text-gray-400 text-base mb-4 line-clamp-3 leading-relaxed">{episode.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>

        <div className="text-center">
          <p className="text-gray-300 mb-6">
            New founder journey videos every week – follow along and build smarter with us.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              as="a"
              href="https://youtube.com/@advysor"
              external
              variant="primary"
            >
              View All Episodes
            </Button>
            <Button
              as="a"
              href="http://www.youtube.com/channel/UCg8l4vlHa7CbzT1AVeFNv8w?sub_confirmation=1"
              external
              variant="secondary"
            >
              Subscribe for Updates
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VlogContent;
