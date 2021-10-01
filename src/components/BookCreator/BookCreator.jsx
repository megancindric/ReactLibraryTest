import React, {Component} from 'react';

class BookCreator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            author: '',
        };
    }

    handleSubmit = (event) => {
        event.preventDefault(); //GOES IN EVERY HANDLESUBMIT WE DONT WANT REFRESHING
        this.props.createNewBook(this.state);
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        })

    }

    render() {
        return(
            <form onSubmit={this.handleSubmit}>
                <label>Title:</label>
                    <input name="title" onChange={this.handleChange} value={this.state.title}/>
                <label>Author:</label>
                    <input name="author" onChange={this.handleChange} value={this.state.author}/>
                <button type="submit">Create Book</button>
            </form>
        );
    }
}

export default BookCreator;