import React from 'react';
import Book from '../Book/Book'

const BookViewer = (props) => {
    return ( 
        <div className="row row-space">
            <div className="col-md-4">
                <button onClick={props.previousBook}>Last Book</button>
            </div>
            <div className="col-md-4">
                <Book book={props.book}/>
            </div>
            <div className="col-md-4">
                <button onClick={props.nextBook}>Next Book</button>
            </div>
        </div>
     );
}
 
export default BookViewer;