import { HashRouter, Routes, Route } from 'react-router-dom';
import About from './components/About';
import Feedback from './components/Feedback';
import Footer from './components/Footer';
import Header from './components/Header';
import Pokemon from './components/Pokemon';
import PokemonNav from './components/PokemonNav';

function App() {
  return (
    <HashRouter>
      <div className="container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<About />} />
            <Route path="/pokemon" element={<PokemonNav />}>
              <Route index element={<div className="pokemon">Please select a Pokémon from the left-hand column.</div>} />
              <Route path=":name" element={<Pokemon />} />
            </Route>
            <Route path="/feedback" element={<Feedback />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
