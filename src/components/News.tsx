import { Award, Megaphone, FileText, Briefcase, Circle, TrendingUp, Clock } from 'lucide-react';
import { newsData } from '../data/newsData';

type NewsItemType = 'publication' | 'award' | 'talk' | 'general' | 'position';

export default function News() {
  const getIcon = (type: NewsItemType) => {
    switch (type) {
      case 'publication':
        return <FileText className="h-5 w-5" />;
      case 'award':
        return <Award className="h-5 w-5" />;
      case 'talk':
        return <Megaphone className="h-5 w-5" />;
      case 'position':
        return <Briefcase className="h-5 w-5" />;
      default:
        return <Circle className="h-5 w-5" />;
    }
  };

  const getTypeStyles = (type: NewsItemType) => {
    switch (type) {
      case 'publication':
        return 'bg-primary/10 text-primary border-primary/20';
      case 'award':
        return 'bg-accent/10 text-accent border-accent/20';
      case 'talk':
        return 'bg-secondary/10 text-secondary border-secondary/20';
      case 'position':
        return 'bg-info/10 text-info border-info/20';
      default:
        return 'bg-base-200 text-base-content border-base-content/20';
    }
  };

  const getTypeBadge = (type: NewsItemType) => {
    switch (type) {
      case 'publication':
        return 'badge-primary';
      case 'award':
        return 'badge-accent';
      case 'talk':
        return 'badge-secondary';
      case 'position':
        return 'badge-info';
      default:
        return '';
    }
  };

  return (
    <section className="min-h-screen py-12 lg:py-20 bg-gradient-to-br from-base-100 via-base-200/30 to-base-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <TrendingUp className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold">Recent News</h2>
          </div>
          <p className="text-base-content/60 text-lg">Latest updates and achievements</p>
        </div>
        
        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-6 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-accent opacity-20"></div>
          
          {/* News Items */}
          <div className="space-y-8">
            {newsData.map((item, index) => (
              <div
                key={index}
                className="group relative flex gap-6 transition-all duration-300 hover:translate-x-2"
              >
                {/* Timeline Dot */}
                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-full border-2 flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${getTypeStyles(item.type)}`}>
                    {getIcon(item.type)}
                  </div>
                  {index === 0 && (
                    <div className="absolute -inset-1 bg-primary/20 rounded-full animate-ping"></div>
                  )}
                </div>
                
                {/* Content Card */}
                <div className="flex-1 group">
                  <div className="card bg-base-100 shadow-lg hover:shadow-2xl transition-all duration-300 border border-base-content/5 overflow-hidden">
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary via-secondary to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    <div className="card-body p-6">
                      {/* Date and Type */}
                      <div className="flex flex-wrap items-center gap-3 mb-3">
                        <div className="flex items-center gap-2 text-sm font-medium text-base-content/60">
                          <Clock className="h-4 w-4" />
                          <time>{item.date}</time>
                        </div>
                        <span className={`badge ${getTypeBadge(item.type)} badge-sm`}>
                          {item.type}
                        </span>
                        {index === 0 && (
                          <span className="badge badge-warning badge-sm animate-pulse">NEW</span>
                        )}
                      </div>
                      
                      {/* Title */}
                      <h3 className="text-xl font-bold mb-2 transition-colors duration-300 group-hover:text-primary">
                        {item.link ? (
                          <a 
                            href={item.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            className="link link-hover flex items-center gap-2"
                          >
                            {item.title}
                            <svg className="h-4 w-4 opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                            </svg>
                          </a>
                        ) : (
                          item.title
                        )}
                      </h3>
                      
                      {/* Description */}
                      {item.description && (
                        <p className="text-base-content/70 leading-relaxed">
                          {item.description}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        
        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="btn btn-outline btn-primary gap-2 group">
            View All News
            <svg className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}