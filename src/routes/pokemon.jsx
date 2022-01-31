import { useEffect, useRef, useState } from 'react';
import { useOutletContext, useParams } from 'react-router-dom';
import axios from 'axios';
import utils from '../utils';

function Pokemon() {
  const [pokedex, setPokedex] = useState({});
  const [movesets, setMovesets] = useState({});
  const [showMoveset, setShowMoveset] = useState(false);
  const pokemonDataRef = useRef(null);
  const { name } = useParams();
  const pokemonList = useOutletContext();

  useEffect(() => {
    if (!utils.isEmpty(pokemonList) && pokedex[name] === undefined) {
      axios.get(pokemonList[name].url).then(response => {
        setPokedex({ ...pokedex, [name]: response.data });
      });
    }
  }, [pokedex, pokemonList, name]);

  useEffect(() => {
    if (showMoveset && utils.isEmpty(movesets)) {
      axios.get('https://pkmn.github.io/smogon/data/sets/gen1.json').then(response => {
        const sets = Object.entries(response.data).reduce((object, [pkmnName, pkmnMovesets]) => {
          const nameKebab = utils.toKebabCase(pkmnName);

          object[nameKebab] = pkmnMovesets;

          return object;
        }, {});

        setMovesets(sets);
      });
    }
  }, [movesets, showMoveset]);

  useEffect(() => {
    setShowMoveset(false);
  }, [name]);

  if (pokedex[name] === undefined) return null;

  const { color, flavor_text_entries, id, names } = pokedex[name];
  const toggleShowMoveset = function () {
    setShowMoveset(!showMoveset);
    utils.toggleRotate(pokemonDataRef);
  };

  return (
    <div className="pokemon" style={{ backgroundColor: color.name, backgroundImage: `url("${utils.getSvgUrl(id)}")`}}>
      <div ref={pokemonDataRef} className="pokemon-data">
        <h1 className="pokemon-name">{utils.findEnglishName(names)}</h1>
        {showMoveset && !utils.isEmpty(movesets) ? (
          movesets[name] !== undefined ? (
            <ul className="pokemon-moveset">
              {utils.findMoves(movesets[name]).map(move => <li>{move}</li>)}
            </ul>
          ) : <div>No movesets available.</div>
        ) : (
          <div className="pokemon-flavor-text">
            {utils.findEnglishFlavorText(flavor_text_entries)}
          </div>
        )}
        <div onClick={toggleShowMoveset} data-toggle>
          <u>View {showMoveset ? 'Pokédex Entry' : 'Sample Moveset'}</u>
        </div>
      </div>
    </div>
  );
}

export default Pokemon;
