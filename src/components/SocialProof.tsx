import 'react';
import { Star } from 'lucide-react';

const SocialProof = () => {
  const testimonials = [
    {
      quote:
        'Using ADVYSOR has saved me countless hours in validating new tech ideas and helped me understand how to build a business around them.',
      name: 'Scharief Salem Ahmed',
      role: 'CTO, Xai Foundation',
      avatar: '/Scharief%20Salem%20Ahmed.png',
    },
    {
      quote:
        'ADVYSOR helped me think through the pros and cons of rebranding, structure a tiered model, and map a funnel strategy for client acquisition. In hindsight—obvious and brilliant.',
      name: 'Craig D. Wescoe',
      role: 'Founder',
      avatar: '/Craig%20Wescoe.png',
    },
    {
      quote: 'Amazing product! … just planned out my whole GTM for Dallas.',
      name: 'Sarah B. Nadimpalli RN, PhD',
      role: 'Founder',
      avatar: '/Sarah%20B%20Nadimpalli_cropped.png',
    },
  ];

  return (
    <section id="testimonials" className="section-padding bg-navy/50">
      <div className="container-max">
        <div className="section-header">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 text-shadow-lg">
            <span className="gradient-text">Loved by Founders</span> Like You
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Here's what founders are saying about ADVYSOR:
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="card-glass p-8">
              <blockquote className="text-lg text-white mb-6 leading-relaxed italic">"{testimonial.quote}"</blockquote>

              <div className="flex items-center space-x-4">
                <img
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                  loading="lazy"
                />
                <div className="flex-1">
                  <div className="text-white font-semibold">{testimonial.name}</div>
                  <div className="text-gray-400 text-sm">{testimonial.role}</div>
                </div>
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="flex justify-center mt-12">
          <div className="text-center">
            <div className="flex items-center justify-center mb-2">
              <span className="text-4xl font-bold gradient-text text-shadow-lg mr-3">4.7/5.0</span>
              <div className="flex">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="h-8 w-8 text-yellow-400 fill-current" />
                ))}
                <div className="relative">
                  <Star className="h-8 w-8 text-gray-400" />
                  <div className="absolute inset-0 overflow-hidden" style={{ width: '60%' }}>
                    <Star className="h-8 w-8 text-yellow-400 fill-current" />
                  </div>
                </div>
              </div>
            </div>
            <div className="text-gray-400">GPT Store Rating</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
