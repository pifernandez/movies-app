import React from 'react'
import './Movies.scss'
import Movie from '../Movie/Movie'

const Movies = (props) => {
    return(
        <React.Fragment>
            <ul className={'all-movies-list'}>{props.movies.map((e, i) => <Movie key={i} element={e}/> )}</ul>
        </React.Fragment>
    )
}

export default Movies