import React, {Component} from 'react';
import './App.css'
import TitleBar from './TitleBar/TitleBar';
import BookViewer from './BookViewer/BookViewer';
import Footer from './Footer/Footer'
import BookCreator from './BookCreator/BookCreator';

class App extends Component {
    constructor(props){
        super(props);
        this.books = [
            {title: "House of Leaves", author:"Mark Danielewski"},
            {title: "Twilight", author:"Stephanie Meyer"},
            {title: "A Handmaid's Tale", author: "Margaret Atwood"}
        ];
        this.state = {
            bookNumber: 0
        };
    }

    goToNextBook = () => {
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber ++;
        if(tempBookNumber === this.books.length){
            tempBookNumber = 0;
        }

        this.setState({
            bookNumber: tempBookNumber
        });
    }

    goToPreviousBook = () => {
        let tempBookNumber = this.state.bookNumber;
        tempBookNumber --;
        if(tempBookNumber < 0 ){
            tempBookNumber = this.books.length - 1;
        }

        this.setState({
            bookNumber: tempBookNumber
        });
    }

    createBook = (newBook) => {
        this.books.push(newBook);
        this.setState({
            bookNumber: this.books.length - 1
        })
    }

    render(){
        return(
            <div className="container-fluid">
                <TitleBar />
                <BookViewer book={this.books[this.state.bookNumber]} nextBook={this.goToNextBook} previousBook={this.goToPreviousBook}/>
                <BookCreator createNewBook={this.createBook}/>
                <Footer />
            </div>
        )
    }
}

export default App;