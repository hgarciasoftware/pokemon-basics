import silhouette from '../assets/images/silhouette.jpg';

function About() {
  return (
    <div className="about">
      <h1>Pokémon Basics</h1>
      <figure>
        <img src={silhouette} alt="Silhouette of a round Pokémon" />
        <figcaption><i>Who's that Pokemon?</i></figcaption>
      </figure>
      <p>
        Pokémon is a turn-based role-playing game centered around collecting and battling creatures eponymously called
        Pokémon. As of January 2022, over 900 species of Pokémon exist.
      </p>
      <p>
        Pokémon Basics provides beginners with basic descriptions of the first 151 Pokémon as well as competitive
        movesets for battle.
      </p>
    </div>
  );
}

export default About;
