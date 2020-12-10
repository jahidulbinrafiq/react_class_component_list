import React from 'react';
import '../../stylesheets/Book.css'

const Book = (props) => {
   
    const{BookName,Writer} = props
    return (
        <div className='book'>
            <h3 onClick={props.delete}>Book Name:{BookName}</h3>
            <h3>Writer:{Writer}</h3>
            <input 
              type='text' 
              defaultValue={BookName} 
              onChange={props.inputEventHandler} 
            />    
        </div>
    );
};

export default Book;