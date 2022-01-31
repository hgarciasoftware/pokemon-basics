import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './routes/About';
import Feedback from './routes/Feedback';
import Footer from './components/Footer';
import Header from './components/Header';
import Pokemon from './routes/Pokemon';
import PokemonNav from './routes/PokemonNav';

function App() {
  return (
    <BrowserRouter>
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
    </BrowserRouter>
  );
}

export default App;
