import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">dictionary</header>
        <main>
          <Dictionary defaultKeyword="Melon" />
        </main>
        <footer className="text-center">
          <a
            href="https://github.com/baenaale/react-dictionary-ab"
            target="_blank"
            rel="noreferrer"
          >
            Open-source code
          </a>{" "}
          by{" "}
          <a
            href="https://brave-bohr-a02fb1.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Alejandra Baena
          </a>
          , hosted on Netlify.
        </footer>
      </div>
    </div>
  );
}

export default App;
