import Sidebar from "./components/Sidebar";
import About from "./components/About";
import News from "./components/News";
import Publications from "./components/Publications";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-base-100">
      <Sidebar />
      <div className="lg:ml-80">
        <main className="relative">
          <section id="about" className="scroll-mt-8">
            <About />
          </section>
          <div className="divider px-12 my-0"></div>
          <section id="news" className="scroll-mt-8">
            <News />
          </section>
          <div className="divider px-12 my-0"></div>
          <section id="publications" className="scroll-mt-8">
            <Publications />
          </section>
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;
