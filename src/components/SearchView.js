import Hero from "./Hero";
import { Link } from "react-router-dom";

const MovieCard = ({ movie }) => {
  let posterUrl;
  if (movie.poster_path == null) {
    posterUrl = '/image-not-available.png'
  } else {
    posterUrl = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
  }
  const detailUrl = `/movies/${movie.id}`
  return (
    <div className="col-lg-3 col-md-3 col-2 my-4">
      <div className="card">
        <img src={posterUrl} className="card-img-top img-ratio" alt={movie.original_title} />
        <div className="card-body">
          <h5 className="card-title" title={movie.original_title} style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
            {movie.original_title}
          </h5>
          <Link to={detailUrl} className="btn btn-primary">Show details</Link>
        </div>
      </div>
    </div>
  )
}

const SearchView = ({ keyword, searchResults }) => {

  const title = `You are searching for: ${keyword}`

  const resultHtml = searchResults.map((obj, i) => {
    return <MovieCard movie={obj} key={i} />
  })

  if (searchResults.length === 0) {
    return (
      <div>
        <Hero text={title} />
        {resultHtml &&
          <div className="container">
            <div className="row text-center">
              <p className="display-6 mt-5">
                Oops, it seems we couldn't find any matches.
              </p>
            </div>
          </div>
        }
      </div>
    );
  } else {
    return (
      <div>
        <Hero text={title} />
        {resultHtml &&
          <div className="container">
            <div className="row">
              {resultHtml}
            </div>
          </div>
        }
      </div>
    );
  }
};

export default SearchView;
