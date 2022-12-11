import React, { useEffect } from 'react';
import { useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import './MovieDetail.css'

function MovieDetail({movie}){

    const dispatch = useDispatch();

    const detail = useSelector(store => store.genres)

    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_GENRE', payload: movie.id});
    }, []);

    return (
        <div className='details'>
          <img src={movie.poster} alt={movie.title}/>
          <h3>{movie.description}</h3>
          <section>
            <h2>Genres</h2>
            {/* loop for displaying genres by id */}
            {detail.map(info => {
              return (
                <div key={info.name}>
                  <h3>{info.name}</h3>
                </div>
              )
            })}
          </section>
          <button onClick={() => history.push('/')}>Return</button>
        </div>
    )
}

export default MovieDetail;