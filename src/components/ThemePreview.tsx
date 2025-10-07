import { Palette } from 'lucide-react';

const themes = [
  'light', 'dark', 'cupcake', 'bumblebee', 'emerald', 'corporate',
  'synthwave', 'retro', 'cyberpunk', 'valentine', 'halloween', 'garden',
  'forest', 'aqua', 'lofi', 'pastel', 'fantasy', 'wireframe',
  'black', 'luxury', 'dracula', 'cmyk', 'autumn', 'business',
  'acid', 'lemonade', 'night', 'coffee', 'winter', 'dim', 'nord', 'sunset'
];

export default function ThemePreview() {
  const changeTheme = (theme: string) => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  };

  return (
    <section className="min-h-screen py-12 lg:py-20">
      <div className="max-w-6xl mx-auto px-6 lg:px-12">
        <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
          <Palette className="h-8 w-8" />
          Theme Preview
        </h2>
        
        {/* Current Theme Colors */}
        <div className="card bg-base-200 mb-8">
          <div className="card-body">
            <h3 className="card-title mb-4">Current Theme Colors</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-full h-20 bg-primary rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Primary</p>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-secondary rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Secondary</p>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-accent rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Accent</p>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-neutral rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Neutral</p>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-base-100 border rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Base 100</p>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-info rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Info</p>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-success rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Success</p>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-warning rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Warning</p>
              </div>
              <div className="text-center">
                <div className="w-full h-20 bg-error rounded-lg mb-2"></div>
                <p className="text-sm font-medium">Error</p>
              </div>
            </div>
          </div>
        </div>

        {/* Button Samples */}
        <div className="card bg-base-200 mb-8">
          <div className="card-body">
            <h3 className="card-title mb-4">Button Samples</h3>
            <div className="flex flex-wrap gap-2">
              <button className="btn">Default</button>
              <button className="btn btn-primary">Primary</button>
              <button className="btn btn-secondary">Secondary</button>
              <button className="btn btn-accent">Accent</button>
              <button className="btn btn-info">Info</button>
              <button className="btn btn-success">Success</button>
              <button className="btn btn-warning">Warning</button>
              <button className="btn btn-error">Error</button>
              <button className="btn btn-ghost">Ghost</button>
              <button className="btn btn-outline">Outline</button>
              <button className="btn btn-outline btn-primary">Primary Outline</button>
              <button className="btn btn-outline btn-secondary">Secondary Outline</button>
            </div>
          </div>
        </div>

        {/* Badge Samples */}
        <div className="card bg-base-200 mb-8">
          <div className="card-body">
            <h3 className="card-title mb-4">Badge Samples</h3>
            <div className="flex flex-wrap gap-2">
              <span className="badge">Default</span>
              <span className="badge badge-primary">Primary</span>
              <span className="badge badge-secondary">Secondary</span>
              <span className="badge badge-accent">Accent</span>
              <span className="badge badge-info">Info</span>
              <span className="badge badge-success">Success</span>
              <span className="badge badge-warning">Warning</span>
              <span className="badge badge-error">Error</span>
              <span className="badge badge-ghost">Ghost</span>
              <span className="badge badge-outline">Outline</span>
            </div>
          </div>
        </div>

        {/* Theme Selector Grid */}
        <div className="card bg-base-200">
          <div className="card-body">
            <h3 className="card-title mb-4">Select Theme</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {themes.map((theme) => (
                <button
                  key={theme}
                  onClick={() => changeTheme(theme)}
                  className="btn btn-outline h-auto py-4 flex flex-col gap-2"
                >
                  <span className="font-bold capitalize">{theme}</span>
                  <div className="flex gap-1">
                    <div 
                      className="w-4 h-4 rounded" 
                      data-theme={theme}
                      style={{ backgroundColor: 'hsl(var(--p))' }}
                    ></div>
                    <div 
                      className="w-4 h-4 rounded" 
                      data-theme={theme}
                      style={{ backgroundColor: 'hsl(var(--s))' }}
                    ></div>
                    <div 
                      className="w-4 h-4 rounded" 
                      data-theme={theme}
                      style={{ backgroundColor: 'hsl(var(--a))' }}
                    ></div>
                  </div>
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}