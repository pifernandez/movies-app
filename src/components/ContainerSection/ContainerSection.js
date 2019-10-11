import React from 'react'
import './ContainerSection.scss'
import Movie from "../Movie/Movie";

const ContainerSection = (props) => {
    const sliceMovies = () => props.movies.reverse().slice(15).reverse()

    return(
        <div class="container">
            <div class="title-section">
                <h2 class="title-category">{props.title}</h2>
                <a href="#" class="view-all">View All →</a>
            </div>
            <ul class="movies-list">
                {sliceMovies().map((e, i) => <Movie key={i} element={e} toggleModal={props.toggleModal}/>)}
            </ul>
        </div>
    )
}

export default ContainerSection