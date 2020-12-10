import React, { Component } from 'react';
import Book from './representational/Book';
import '../../src/App.css';
import bookList from '../assets/booklist'

const styleHeading={
    border:'1px solid red',
    borderRadius:'5px',
    backgroundColor:'red',
    color:'white',
  }
  
class MainComponent extends Component {
  
    state = {
        books:bookList,
        showValue:true
      }
      
      onChangeEvent=(event,index) => {
         const books={...this.state.books[index]}
         books.BookName=event.target.value
         const bookList=[...this.state.books]
         bookList[index]=books
         this.setState({books:bookList})
      }
      
      deleteItem=(index)=> {
        const bookList=[...this.state.books]
        bookList.splice(index,1)
        this.setState({books:bookList})
      }
    
      handleToggle=()=>{
        this.setState({showValue:!this.state.showValue})
      }

      render(){
         const obj=new Component()
         console.log(obj);
       
          return (
              
           <div className='App'>
             <h1 style={styleHeading}>Book List</h1>
             <button onClick={this.handleToggle}>Toggle Book</button>
             <br/>
             {
               this.state.showValue?(              
              (this.state.books).map((item,index)=> 
               <Book 
                key={item.id}
                BookName={item.BookName} 
                Writer={item.Writer}
                delete={this.deleteItem.bind(this,index)}
                inputEventHandler={(event)=>this.onChangeEvent(event,index)}
               />
             )):('')
             }
           </div>
        );
      }
}

export default MainComponent;