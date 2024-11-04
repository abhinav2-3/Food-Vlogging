import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { ArticleContainer } from "./components/ArticleContainer";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="text-blueish font-open mx-auto overflow-hidden">
      <Hero />
      <div className="mt-40">
        <About />
      </div>
      <ArticleContainer />
      <Footer />
    </div>
  );
}

export default App;
