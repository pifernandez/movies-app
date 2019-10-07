import React from 'react'
import './ContainerSection.scss'


const ContainerSection = (props) => {
    return(
        <div class="container">
            <header class="title-section">
                <h2 class="title-category">{props.title}</h2>
                <a href="#" class="view-all">View All →</a>
            </header>
            <ul class="movies-list" id="top_rated">

            </ul>
        </div>
    )
}

export default ContainerSection