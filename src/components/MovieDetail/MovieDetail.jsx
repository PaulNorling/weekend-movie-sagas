import React, { useEffect } from 'react';
import { useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
//import {HashRouter as Router, Route} from 'react-router-dom';

function MovieDetail({movie}){

    const dispatch = useDispatch();

    const detail = useSelector(store => store.genres)
    const movies = useSelector(store => store.movies)
    const history = useHistory();

    const handleClick = () => {
        history.push('/')
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_GENRE', payload: movie.id});
    }, []);

    return (
        <div>
          <h2>Details</h2>
          <h3>{movie.description}</h3>
          <img src={movie.poster} alt={movie.title}/>
          <section>
            <h2>Genres</h2>
            {detail.map(info => {
                return (
                    <div key={info.name}>
                        <h3>{info.name}</h3>
                    </div>
                )
            })}
          </section>
          <button onClick={handleClick}>Back To List</button>
        </div>
    )
}

export default MovieDetail