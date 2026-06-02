import Sidebar from "./components/Sidebar";
import About from "./components/About";
import Education from "./components/Education";
import Research from "./components/Research";
import Publications from "./components/Publications";
import Teaching from "./components/Teaching";
import Awards from "./components/Awards";
import WorldMap from "./components/WorldMap";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";

function App() {
  const [currentTheme, setCurrentTheme] = useState("");

  useEffect(() => {
    console.log("currentTheme:", currentTheme);
    const checkTheme = () => {
      setCurrentTheme(
        document.documentElement.getAttribute("data-theme") || "none"
      );
    };
    checkTheme();
    const interval = setInterval(checkTheme, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-base-100">
      {/* Debug Info */}
      {/* <div className="fixed bottom-4 right-4 z-50 bg-black/80 text-white p-3 text-xs rounded-lg">
        <div>Current theme: <strong>{currentTheme}</strong></div>
        <div className="flex gap-2 mt-2">
          <div className="w-12 h-6 bg-primary rounded" title="primary"></div>
          <div className="w-12 h-6 bg-secondary rounded" title="secondary"></div>
          <div className="w-12 h-6 bg-base-200 rounded border border-white" title="base-200"></div>
        </div>
      </div> */}

      <Sidebar />
      <div className="lg:ml-80">
        <main className="relative">
          <section id="about" className="scroll-mt-8">
            <About />
          </section>
          <div className="divider px-12 my-0"></div>
          <section id="education" className="scroll-mt-8">
            <Education />
          </section>
          <div className="divider px-12 my-0"></div>
          <section id="research" className="scroll-mt-8">
            <Research />
          </section>
          <div className="divider px-12 my-0"></div>
          <section id="publications" className="scroll-mt-8">
            <Publications />
          </section>
          <div className="divider px-12 my-0"></div>
          <section id="teaching" className="scroll-mt-8">
            <Teaching />
          </section>
          <div className="divider px-12 my-0"></div>
          <section id="awards" className="scroll-mt-8">
            <Awards />
          </section>
          <div className="divider px-12 my-0"></div>
          <section id="map" className="scroll-mt-8">
            <WorldMap />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
