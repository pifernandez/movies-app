import React from 'react'
import './ContainerSection.scss'


const ContainerSection = (props) => {
    return(
        <div class="container">
            <div class="title-section">
                <h2 class="title-category">{props.title.label}</h2>
                <a href="#" class="view-all">View All →</a>
            </div>
            <ul class="movies-list" id="top_rated">

            </ul>
        </div>
    )
}

export default ContainerSection