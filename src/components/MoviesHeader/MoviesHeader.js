import React from 'react'
import './MoviesHeader.scss'

const MoviesHeader = (props) => {
    return (
        <React.Fragment>
            <div className={'container-btn'}>
                <a href="#" onClick={props.previous} className={'button'}>Previous</a>
                <a href="#" onClick={props.next} className={'button'}>Next</a>
            </div>
            <p className={'p-results'}>Página {props.page} de {props.total}</p>
        </React.Fragment>
    )
}

export default MoviesHeader