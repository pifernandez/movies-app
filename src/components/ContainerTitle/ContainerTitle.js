import React from 'react'
import './ContainerTitle.scss'

const ContainerTitle = (props) => {
    return(
        <div className={'container-title'}>
            <h3>{props.title}</h3>
            <p>{props.results} resultados</p>
        </div>
    )
}

export default ContainerTitle