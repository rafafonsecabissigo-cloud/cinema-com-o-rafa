import { normalizeImagePath } from "../lib/data";

export default function MovieTable({ items }) {
  return (
    <div className="list-table-container">
      <table className="list-table">
        <thead>
          <tr>
            <th className="mini-poster-td">Poster</th>
            <th className="rank">#</th>
            <th>Filme</th>
            <th>Ano</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={`${item.rank}-${item.title}`}>
              <td className="mini-poster-td">
                <img
                  src={normalizeImagePath(item.posterImage)}
                  className="mini-poster"
                  alt={`Poster ${item.title}`}
                  width="60"
                  height="85"
                  loading="lazy"
                />
              </td>
              <td className="rank">{item.rank}</td>
              <td className="title">
                <a href={item.link} target="_blank" rel="noreferrer" className="movie-link">
                  {item.title}
                </a>
                <span className="year-mobile">{item.year}</span>
              </td>
              <td className="year">{item.year}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
