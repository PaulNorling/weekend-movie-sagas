import {HashRouter as Router, Route} from 'react-router-dom';
import './App.css';
import { useSelector } from 'react-redux'
import MovieList from '../MovieList/MovieList'
import MovieDetail from '../MovieDetail/MovieDetail';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

function App() {

  const movies = useSelector(store => store.movies)

  return (
    <div className="App">
      <Header/>
      <Router>
        {/* Movie gallery */}
        <Route path="/" exact>
          <MovieList />
        </Route>
        {/* Details page */}
        {/*loop for retrieving movie by id props movie*/}
        {movies.map(movie => {
          return (
            <Route key={movie.id} exact path={`/details/${movie.id}`}>
              <MovieDetail movie={movie} />
            </Route>
          )
        })}
      </Router>
      <Footer/>
    </div>
  );
}


export default App;