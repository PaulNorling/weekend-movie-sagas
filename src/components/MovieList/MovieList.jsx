import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './MovieList.css'
import MovieItem from '../MovieItem/MovieItem';

function MovieList() {
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
                    );
                })}
            </div>
        </main>

    );
}

export default MovieList;