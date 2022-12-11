import {useHistory} from 'react-router-dom';
import './MovieItem.css'

function MovieItem({movie}) {
  
    const history = useHistory();

    return (
        <div className='item' onClick={() => {history.push(`/details/${movie.id}`)}}>
          <h2>{movie.title}</h2>
          <img src={movie.poster} alt={movie.title}/>
        </div>
    )
}

export default MovieItem;