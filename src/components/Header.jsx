import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to="/">Home</Link>
      <Link to="/pokemon">Pokémon</Link>
      <Link to="/feedback">Feedback</Link>
      <a href="https://github.com/hgarciasoftware/pokemon-basics" target="_blank" rel="noreferrer">See Code</a>
    </header>
  );
}

export default Header;
