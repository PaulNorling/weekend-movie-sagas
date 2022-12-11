import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import { useSelector } from 'react-redux'
import MovieList from '../MovieList/MovieList'
import MovieDetail from '../MovieDetail/MovieDetail';
import Header from '../Header/Header';

function App() {

  const movies = useSelector(store => store.movies)

  return (
    <div className="App">
      <Header/>
      <Router>        
        <Route path="/" exact>
          <MovieList />
        </Route>
        {/* Details page */}
        {/* TODO BREAK INTO COMPOMONENT! */}
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