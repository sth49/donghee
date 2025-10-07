import { Github, Linkedin, Mail, FileText, GraduationCap, BookOpen, Sparkles } from 'lucide-react';
import { profileData } from '../data/profileData';

export default function About() {
  return (
    <section className="min-h-screen py-12 lg:py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        {/* Hero Section */}
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-center mb-16">
          {/* Mobile Only Profile Image */}
          <div className="relative group lg:hidden">
            <div className="absolute -inset-1 bg-gradient-to-r from-primary to-secondary rounded-full blur opacity-30 group-hover:opacity-75 transition duration-1000"></div>
            <div className="relative avatar">
              <div className="w-48 rounded-full">
                <img src={profileData.profileImage} alt={profileData.name} />
              </div>
            </div>
          </div>
          
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4">
              <Sparkles className="h-4 w-4" />
              Welcome to my page
            </div>
            
            <h1 className="text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-br from-base-content to-base-content/60 bg-clip-text text-transparent">
              {profileData.name}
            </h1>
            <p className="text-xl lg:text-2xl text-base-content/80 font-medium mb-2">{profileData.title}</p>
            <p className="text-lg text-base-content/60 mb-8">
              {profileData.affiliation} · {profileData.university}
            </p>
            
            {/* Contact Buttons */}
            <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
              <a href={`mailto:${profileData.email}`} className="btn btn-primary gap-2">
                <Mail className="h-4 w-4" />
                Contact Me
              </a>
              <a href={profileData.cv} target="_blank" rel="noopener noreferrer" className="btn btn-outline gap-2">
                <FileText className="h-4 w-4" />
                Download CV
              </a>
              <div className="flex gap-2">
                <a href={profileData.github} target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-ghost">
                  <Github className="h-5 w-5" />
                </a>
                <a href={profileData.linkedin} target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-ghost">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href={profileData.googleScholar} target="_blank" rel="noopener noreferrer" className="btn btn-circle btn-ghost">
                  <BookOpen className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bio Card */}
        <div className="card bg-base-200/50 backdrop-blur-sm border border-base-content/10 mb-12">
          <div className="card-body p-8">
            <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">
              <div className="w-1 h-8 bg-gradient-to-b from-primary to-secondary rounded-full"></div>
              About Me
            </h2>
            <p className="text-lg leading-relaxed text-base-content/80">
              {profileData.bio}
            </p>
          </div>
        </div>

        {/* Research Interests */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Research Interests</h2>
          <div className="flex flex-wrap gap-3">
            {profileData.researchInterests.map((interest, index) => (
              <div
                key={index}
                className="group relative px-6 py-3 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full border border-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20"
              >
                <span className="relative z-10 font-medium">{interest}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Education Timeline */}
        <div>
          <h2 className="text-2xl font-bold mb-6 flex items-center gap-3">
            <GraduationCap className="h-7 w-7 text-primary" />
            Education
          </h2>
          <div className="space-y-4">
            {profileData.education.map((edu, index) => (
              <div
                key={index}
                className="group relative pl-8 before:absolute before:left-0 before:top-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-primary before:to-secondary"
              >
                <div className="absolute left-0 top-2 w-3 h-3 bg-primary rounded-full -translate-x-[5px] ring-4 ring-base-100"></div>
                
                <div className="card bg-base-200/30 hover:bg-base-200/50 transition-all duration-300 hover:shadow-xl border border-base-content/5">
                  <div className="card-body p-6">
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-primary mb-1">{edu.degree}</h3>
                        <p className="text-lg font-medium text-base-content/80">{edu.school}</p>
                        {edu.description && (
                          <p className="text-sm text-base-content/60 mt-2">{edu.description}</p>
                        )}
                      </div>
                      <div className="flex flex-col items-start lg:items-end gap-2">
                        <span className="badge badge-outline">{edu.duration}</span>
                        {edu.gpa && (
                          <span className="badge badge-success">GPA: {edu.gpa}</span>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}