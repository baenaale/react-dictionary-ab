import "./App.css";
import Dictionary from "./Dictionary";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header">Dictionary</header>
        <main>
          <Dictionary defaultKeyword="Melon" />
        </main>
        <footer className="text-center">Coded by Alejandra Baena</footer>
      </div>
    </div>
  );
}

export default App;
