import React, { useEffect } from 'react';
import {useParams, useHistory} from 'react-router-dom';
import {useDispatch} from 'react-redux';


function MovieDetail(){
    const dispatch = useDispatch();
    //get :id from url
    const params = useParams();
        console.log('movieDetail',params)

    const history = useHistory();

    const handleClick = () => {
        history.push('/')
        console.log('useEffect')
    }

    useEffect(() => {
        dispatch({ type: 'FETCH_DETAIL', payload: params});
    }, []);

    return (
        <div>
          <div>Details</div>
          <button onClick={handleClick}>Back To List</button>
        </div>
    )
}

export default MovieDetail