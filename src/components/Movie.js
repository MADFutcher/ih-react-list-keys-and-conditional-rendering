import React from 'react'
import './Movie.css'

function Movie(props) {
    return (
        <div className="Movie">
            <img src={props.imgURL} />

            <h4>{props.title}</h4>
            <p>Year: {props.year}</p>
            <p>Rating: {props.rating}</p>
            
            <p>Watched: { props.watched ? "yes" : "nope" }</p>

            <button onClick={props.clickToDelete}> Hide this one ;) </button>
            
        </div>
    )
}

export default Movie
