import './GenreList.css';

export default function GenreList({ genres, activeGen, setActiveGen }) {
  const gens = genres.map(gen =>
    <li key={gen}  className={gen === activeGen ? 'nav-link active' : 'nav-link'} onClick={() => setActiveGen(gen)}>
      {gen}
    </li>
  );
  return (
    <>
    <ul className="nav nav-pills" id="GenreList">
      {gens}
    </ul>
    </>
  );
}