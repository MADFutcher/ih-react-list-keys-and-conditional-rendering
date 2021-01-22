import React from 'react';
import './AddMovie.css'

class AddMovie extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            title: '', 
            year: '',
            rating: '',
        }
    }

    handleInputChange(e){
        const name = e.target.name;
        const value = e.target.value;
        
        this.setState({
            [name]: value 
        });
    }

    // handleTitleChange(e){
    //     this.setState({
    //         title: e.target.value
    //     })
    // }

    // handleYearChange(e){
    //     this.setState({
    //         year: e.target.value
    //     })
    // }

    // handleRatingChange(e){
    //     this.setState({
    //         rating: e.target.value
    //     })
    // }

    handleFormSubmit = (e) => {
        e.preventDefault();
        this.props.submitToAdd({ 
            title: this.state.title, 
            id: 123, 
            year: this.state.year, 
            imgURL: "https://via.placeholder.com/182x268/", 
            rating: this.state.rating
        });

        // After adding the movie, reset state (so that we clean up form fields)
        this.setState({
            title: '', 
            year: '',
            rating: '',
        });
    }

    render(){
        return(
            <div className="AddMovie">
                <form onSubmit={this.handleFormSubmit}>
                    <label>
                        Movie Title:
                        <input type="text" name="title" value={this.state.title} onChange={ (e)=> this.handleInputChange(e) } />
                    </label>

                    <label>
                        Year:
                        <input type="text" name="year" value={this.state.year} onChange={ (e)=> this.handleInputChange(e) } />
                    </label>

                    <label>
                        Rating:
                        <input type="text" name="rating" value={this.state.rating} onChange={ (e)=> this.handleInputChange(e) } />
                    </label>

                    <button type="submit">Add</button>
                </form>
            </div>
        )
    }
}

export default AddMovie;