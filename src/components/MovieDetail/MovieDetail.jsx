import React, { useEffect } from 'react';
import { useHistory} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import './MovieDetail.css'

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
        <div className='details'>
          <img src={movie.poster} alt={movie.title}/>
          <h3>{movie.description}</h3>
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

{/* <Card
  title='HELLO WORLD'
  image={require('../images/pic2.jpg')}>
  <Text style={{marginBottom: 10}}>
    The idea with React Native Elements is more about component structure than actual design.
  </Text>
  <Button
    icon={<Icon name='code' color='#ffffff' />}
    buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0}}
    title='VIEW NOW' />
</Card> */}