import { FileText, Github, Link2, ChevronDown, ChevronUp, BookOpen, Star, Filter, Search } from 'lucide-react';
import { useState } from 'react';
import { publicationsData } from '../data/publicationsData';

type PublicationType = 'conference' | 'journal' | 'workshop' | 'preprint';

export default function Publications() {
  const [expandedPapers, setExpandedPapers] = useState<Set<number>>(new Set());
  const [filterType, setFilterType] = useState<'all' | PublicationType>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const toggleExpanded = (index: number) => {
    const newExpanded = new Set(expandedPapers);
    if (newExpanded.has(index)) {
      newExpanded.delete(index);
    } else {
      newExpanded.add(index);
    }
    setExpandedPapers(newExpanded);
  };

  const filteredPublications = publicationsData.filter(pub => {
    const matchesType = filterType === 'all' || pub.type === filterType;
    const matchesSearch = searchQuery === '' || 
      pub.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pub.authors.some(author => author.toLowerCase().includes(searchQuery.toLowerCase())) ||
      pub.venue.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesType && matchesSearch;
  });

  const publicationTypes = ['all', 'conference', 'journal', 'workshop', 'preprint'] as const;

  const getTypeBadgeColor = (type: PublicationType) => {
    switch (type) {
      case 'conference':
        return 'badge-primary';
      case 'journal':
        return 'badge-success';
      case 'workshop':
        return 'badge-warning';
      case 'preprint':
        return 'badge-secondary';
      default:
        return 'badge-ghost';
    }
  };

  return (
    <section className="min-h-screen py-12 lg:py-20 bg-base-100">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <BookOpen className="h-8 w-8 text-primary" />
            <h2 className="text-4xl font-bold">Publications</h2>
          </div>
          <p className="text-base-content/60 text-lg">My research contributions and academic papers</p>
        </div>
        
        {/* Search and Filter */}
        <div className="mb-8 space-y-4">
          {/* Search Bar */}
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-base-content/40" />
            <input
              type="text"
              placeholder="Search publications..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="input input-bordered w-full pl-12 pr-4 h-12"
            />
          </div>

          {/* Filter Tabs */}
          <div className="flex items-center gap-3 overflow-x-auto pb-2">
            <Filter className="h-5 w-5 text-base-content/60 flex-shrink-0" />
            <div className="flex gap-2">
              {publicationTypes.map((type) => (
                <button
                  key={type}
                  onClick={() => setFilterType(type)}
                  className={`btn btn-sm ${
                    filterType === type 
                      ? 'btn-primary' 
                      : 'btn-ghost'
                  }`}
                >
                  {type === 'all' ? 'All' : type.charAt(0).toUpperCase() + type.slice(1)}
                  <span className="ml-1 text-xs opacity-70">
                    ({type === 'all' 
                      ? publicationsData.length 
                      : publicationsData.filter(p => p.type === type).length})
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Publications List */}
        <div className="space-y-4">
          {filteredPublications.length > 0 ? (
            filteredPublications.map((pub, index) => (
              <div
                key={index}
                className="card bg-base-200/30 border border-base-content/10 hover:shadow-lg transition-all duration-200"
              >
                <div className="card-body p-5">
                  {/* Title and Badges */}
                  <div className="flex flex-wrap items-start gap-2 mb-2">
                    <span className={`badge badge-sm ${getTypeBadgeColor(pub.type as PublicationType)}`}>
                      {pub.type}
                    </span>
                    {pub.isFirstAuthor && (
                      <span className="badge badge-sm badge-outline">
                        <Star className="h-3 w-3 mr-1" />
                        First Author
                      </span>
                    )}
                    <span className="badge badge-sm badge-ghost">{pub.year}</span>
                  </div>
                  
                  <h3 className="text-lg font-semibold mb-2 text-base-content">
                    {pub.title}
                  </h3>

                  {/* Authors */}
                  <div className="text-sm text-base-content/70 mb-2">
                    {pub.authors.map((author, i) => (
                      <span key={i}>
                        {author === "Donghee Hong" ? (
                          <span className="font-semibold text-base-content/90">{author}</span>
                        ) : (
                          <span>{author}</span>
                        )}
                        {i < pub.authors.length - 1 && ", "}
                      </span>
                    ))}
                  </div>

                  {/* Venue */}
                  <p className="text-sm text-base-content/60 mb-3">
                    <span className="font-medium">{pub.venue}</span> • {pub.year}
                  </p>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-2">
                    {pub.links?.pdf && (
                      <a 
                        href={pub.links.pdf} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-xs btn-primary gap-1"
                      >
                        <FileText className="h-3 w-3" />
                        PDF
                      </a>
                    )}
                    {pub.links?.arxiv && (
                      <a 
                        href={pub.links.arxiv} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-xs btn-ghost"
                      >
                        arXiv
                      </a>
                    )}
                    {pub.links?.github && (
                      <a 
                        href={pub.links.github} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-xs btn-ghost gap-1"
                      >
                        <Github className="h-3 w-3" />
                        Code
                      </a>
                    )}
                    {pub.links?.project && (
                      <a 
                        href={pub.links.project} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="btn btn-xs btn-ghost gap-1"
                      >
                        <Link2 className="h-3 w-3" />
                        Project
                      </a>
                    )}
                    
                    {/* Abstract Toggle */}
                    {pub.abstract && (
                      <button
                        onClick={() => toggleExpanded(index)}
                        className="btn btn-xs btn-ghost ml-auto gap-1"
                      >
                        {expandedPapers.has(index) ? (
                          <>
                            <ChevronUp className="h-3 w-3" />
                            Hide
                          </>
                        ) : (
                          <>
                            <ChevronDown className="h-3 w-3" />
                            Abstract
                          </>
                        )}
                      </button>
                    )}
                  </div>

                  {/* Abstract */}
                  {pub.abstract && expandedPapers.has(index) && (
                    <div className="mt-4 p-3 bg-base-100/50 rounded-lg">
                      <p className="text-sm text-base-content/70 leading-relaxed">
                        {pub.abstract}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <p className="text-lg text-base-content/60">No publications found matching your criteria.</p>
            </div>
          )}
        </div>

        {/* Stats Cards - Simplified */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-12">
          <div className="stat bg-base-200/50 rounded-lg">
            <div className="stat-title text-xs">Total Publications</div>
            <div className="stat-value text-2xl">{publicationsData.length}</div>
          </div>
          
          <div className="stat bg-base-200/50 rounded-lg">
            <div className="stat-title text-xs">First Author</div>
            <div className="stat-value text-2xl">
              {publicationsData.filter(p => p.isFirstAuthor).length}
            </div>
          </div>
          
          <div className="stat bg-base-200/50 rounded-lg">
            <div className="stat-title text-xs">Conference Papers</div>
            <div className="stat-value text-2xl">
              {publicationsData.filter(p => p.type === 'conference').length}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}