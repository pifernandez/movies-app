import React from 'react'
import './Movie.scss'

const Movie = ({ element }) => {
    return(
        <li className={'movie'}>
            <a className={'link'}>
                <div className={'movie-img'}>
                    <img className={'img'} src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${element.poster_path}`}/>
                </div>
                <h3 className={'movie-title'}>{element.title}</h3>
            </a>
        </li>
    )
}

export default Movie
