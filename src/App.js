import "./App.css";
import About from "./components/About/About";
import Header from "./components/Header/Header";
import Skills from "./components/Skills/Skills";
import Portfolio from "./components/Portfolio/Portfolio";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <About />
      <Skills />
      <Portfolio />
      <Footer></Footer>
    </div>
  );
}

export default App;
