import React from 'react'
import './Movies.scss'

const Movie = ({ element }) => {
    console.log(element)
    return(
        <li className={'movie'}>
            <a href='#' className={'link'}>
                <div className={'movie-img'}>
                    <img className={'img'} src={`https://image.tmdb.org/t/p/w370_and_h556_bestv2${element.poster_path}`}/>
                </div>
                <h3 className={'movie-title'}>{element.title}</h3>
            </a>
        </li>
    )
}

const Movies = (props) => {
    return(
        <React.Fragment>
            <ul className={'all-movies-list'}>{props.movies.map((e, i) => <Movie key={i} element={e}/> )}</ul>
        </React.Fragment>
    )
}

export default Movies