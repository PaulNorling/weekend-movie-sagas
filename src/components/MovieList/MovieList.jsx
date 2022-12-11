import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import {useHistory} from 'react-router-dom'
import MovieItem from '../MovieItem/MovieItem';

function MovieList() {
    const history = useHistory();
    const dispatch = useDispatch();
    const movies = useSelector(store => store.movies);
    console.log("movielist", movies)
    useEffect(() => {
        dispatch({ type: 'FETCH_MOVIES' });
    }, []);

    return (
        <main >
            <h1>MovieList</h1>
            
            <div className="movies">
                {movies.map(movie => {
                    return (
                        <MovieItem key={movie.id} movie={movie} />
                        // <div key={movie.id} onClick={() => {history.push(`/details/${movie.id}`)}}>
                        //     <h3>{movie.title}</h3>
                        //     <img src={movie.poster} alt={movie.title}/>
                        // </div>
                    );
                })}
            </div>
        </main>

    );
}

export default MovieList;