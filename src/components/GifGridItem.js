import React from 'react'

export const GifGridItem = ( props ) => {
    return (
        <div className="card">
            <img src={ props.img.url } alt={props.img.url}/>
            <p>{ props.img.title }</p>
        </div>
    )
}
