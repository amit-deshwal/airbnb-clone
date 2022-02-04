import Header from "./components/Header";
import Hero from "./components/Hero";
import Section from "./components/Section";

function App() {
  return (
    <>
      <div className="bg-black px-28 text-white">
        <Header />
        <Hero />
      </div>
      <div className="text-black px-28 bg-white">
        <Section />
      </div>
    </>
  );
}

export default App;
