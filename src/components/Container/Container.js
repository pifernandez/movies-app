import React from 'react'
import './Container.scss'

const Container = (props) => {
        return(
            <div className={'container-list'}>
                {props.children}
            </div>
        )
}

export default Container