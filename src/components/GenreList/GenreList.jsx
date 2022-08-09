import './GenreList.css';

export default function GenreList({ genres, activeGen, setActiveGen }) {
  const gens = genres.map(gen =>
    <li
      key={gen}
      className={gen === activeGen ? 'active' : ''}
      // FYI, the below will also work, but will give a warning
      // className={gen === activeGen && 'active'}
      onClick={() => setActiveGen(gen)}
    >
      {gen}
    </li>
  );
  return (
    <ul className="GenreList">
      {gens}
    </ul>
  );
}