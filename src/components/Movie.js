import React from 'react'

function Movie(props) {
    const movieStyle = {
        border: "1px solid black", 
        margin: "10px", 
        backgroundColor: "#ccddff" 
    }
    return (
        <div style={movieStyle} >
            <h4>{props.title}</h4>
            <p>Rating: {props.rating}</p>
        </div>
    )
}

export default Movie
