import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import { useSelector } from 'react-redux'
import MovieList from '../MovieList/MovieList'
import MovieDetail from '../MovieDetail/MovieDetail';


function App() {

  const movies = useSelector(store => store.movies)

  return (
    <div className="App">
      <h1>The Movies Saga!</h1>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        {/* Details page */}
        {movies.map(movie => {
                    return (
                        <Route key={movie.id} exact path={`/details/${movie.id}`}>
                            <MovieDetail movie={movie} />
                        </Route>
                    )
                })}
        {/* Add Movie page */}
      </Router>
    </div>
  );
}


export default App;