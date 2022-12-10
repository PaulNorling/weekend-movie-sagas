import React, { useEffect } from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';


function MovieDetail(){
    const dispatch = useDispatch();
    //get :id from url
    const params = useParams();
    const details = useSelector(store => store.genres)
        console.log('movieDetail', params, details)

    const history = useHistory();

    const handleClick = () => {
        history.push('/')
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_DETAIL', payload: params});
    }, []);

    return (
        <div>
          <h3>Details</h3>
          <section>
            {details.map(detail => {
                return (
                    <div key={detail.id}>
                        <h3>{detail.name}</h3>
                    </div>
                )
            })}
          </section>
          <button onClick={handleClick}>Back To List</button>
        </div>
    )
}

export default MovieDetail