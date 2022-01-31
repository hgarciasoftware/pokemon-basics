function findEnglishName(names) {
  const nameData = names.find(object => object.language.name === 'en');

  return nameData.name;
}

function findEnglishFlavorText(flavorTextEntries) {
  const entry = flavorTextEntries.find(object => object.language.name === 'en');

  return entry.flavor_text.replace(/\n|\f/g, ' ');
}

function findMoves(sets) {
  const moves = Object.values(Object.values(sets)[0])[0].moves;

  return moves.map(x => Array.isArray(x) ? x.join(' or ') : x);
}

function getSvgUrl(id) {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`;
}

function isEmpty(object) {
  return Object.keys(object).length === 0;
}

function toggleRotate(ref) {
  ref.current.classList.remove('rotate-360');
  ref.current.classList.add('rotate-180');
  setTimeout(() => {
    ref.current.classList.remove('rotate-180');
    ref.current.classList.add('rotate-360');
  }, 175);
}

function toKebabCase(string) {
  return string
    .toLowerCase()
    .replace(' ', '-')
    .replace(/[^a-z0-9-]/g, '');
}

const utils = {
  findEnglishName,
  findEnglishFlavorText,
  findMoves,
  getSvgUrl,
  isEmpty,
  toggleRotate,
  toKebabCase
};

export default utils;
