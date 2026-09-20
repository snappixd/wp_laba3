import Header from './components/Header';
import Summary from './components/Summary';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-300 font-sans p-4 sm:p-8 selection:bg-orange-500 selection:text-zinc-950">
      <div className="max-w-5xl mx-auto">
        <Header />
        <main className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Summary />
          <Experience />
          <Education />
          <Skills />
          <Languages />
        </main>
        <Footer />
      </div>
    </div>
  );
}

export default App;