import { useEffect, useState } from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import axios from 'axios';

function urlToId(url) {
  const [id] = url.match(/\d+\/$/);

  return parseInt(id, 10);
}

function PokemonNav() {
  const [pokemonList, setPokemonList] = useState({});

  useEffect(() => {
    axios.get('https://pokeapi.co/api/v2/generation/1').then(response => {
      const species = response.data.pokemon_species.reduce((object, speciesData) => {
        object[speciesData.name] = { ...speciesData, id: urlToId(speciesData.url) };

        return object;
      }, {});

      setPokemonList(species);
    });
  }, []);

  return (
    <>
      <nav className="pokemon-nav">
        {Object.keys(pokemonList)
          .sort((a, b) => pokemonList[a].id - pokemonList[b].id)
          .map(name => <NavLink className="pokemon-link" to={`/pokemon/${name}`} key={pokemonList[name].id}>{name}</NavLink>)}
      </nav>
      <Outlet context={pokemonList} />
    </>
  );
}

export default PokemonNav;
