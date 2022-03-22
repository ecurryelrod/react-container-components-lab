import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'tBKig1e3CP90OEwxAWvj8r7GAUABBVIk';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here

export default class SearchableMovieReviewsContainer extends Component {
    state = {
        reviews: [],
        searchTerm: ""
    }

    handleChange = e => {
        this.setState({searchTerm: e.target.value})
    }
    
    handleSubmit = e => {
        e.preventDefault()
        fetch(URL.concat(this.state.searchTerm))
        .then(resp => resp.json())
        .then(movieData => this.setState({reviews: movieData.results}))
    }
    
    render() {
        return (
            <div className='searchable-movie-reviews'>
                <form onSubmit={this.handleSubmit}>
                    <input id="search-review" type="text" value={this.state.searchTerm} onChange={this.handleChange} placeholder="Search Movie Reviews" />
                    <button>Search</button>
                </form>
                <MovieReviews reviews={this.state.reviews}/>
            </div>
        )
    }
}
