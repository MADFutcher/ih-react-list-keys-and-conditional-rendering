import React from 'react'
import Movie from './Movie'
import AddMovie from './AddMovie'
import movies from '../data/movies.json'
import './MovieList.css'


class MovieList extends React.Component {

    state = { movies }

    deleteMovieHandler(movieId){
        const newMovies = [...this.state.movies];
        const movieIndex = newMovies.findIndex( item => item.id === movieId);
        newMovies.splice(movieIndex, 1);

        // Remember: DO NOT MODIFY STATE DIRECTLY... use setState()
        this.setState({
            movies: newMovies
        });
    }

    addNewMovie = (newMovie) => {
        const newMovies = [newMovie, ...this.state.movies];

        this.setState({
            movies: newMovies
        });
    }

    render() {
        const movieList = this.state.movies.map( elm => {
            return (
                <Movie key={elm.id} clickToDelete={() => this.deleteMovieHandler(elm.id)} {...elm} />
            )
        });

        return (
            <React.Fragment>
                <AddMovie submitToAdd={ this.addNewMovie } />
                <div className="MovieList">
                    {movieList}
                </div>
            </React.Fragment>
        );
    }
}

export default MovieList
