import React, { useEffect } from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';


function MovieDetail(){
    const dispatch = useDispatch();
    //get :id from url
    const params = useParams();
    const detail = useSelector(store => store.genres)
    console.log('movieDetail', detail)


    const history = useHistory();

    const handleClick = () => {
        history.push('/')
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_GENRE', payload: params});
    }, []);

    return (
        <div>
          <h3>Details</h3>
          
          <section>
            {detail.map(info => {
                return (
                    <div key={info.name}>
                        <h3>{info.description}</h3>
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