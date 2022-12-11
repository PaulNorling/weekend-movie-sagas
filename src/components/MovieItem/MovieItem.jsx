import {useHistory} from 'react-router-dom';
import './MovieItem.css'

function MovieItem({movie}) {
    const history = useHistory();

    return (
        <div className='item' onClick={() => {history.push(`/details/${movie.id}`)}}>
          <h3>{movie.title}</h3>
          <img src={movie.poster} alt={movie.title}/>
        </div>
    )
}

export default MovieItem;