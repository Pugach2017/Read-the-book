import React, {Component  } from "react";
import Styles from './book-editor.css';
import Button from '../button/button';

export default class BookEditor extends Component {
    state = {
        title: '',
        img: '',
        author: '',
        descr: '',
    };

    handleSubmit = (evt) => {
        evt.preventDefault();
    
        const newBook = this.state;
        const isEmptyValue = Object.values(newBook).some(value => value.trim() === '');
        
        if (isEmptyValue) {
          return;
        }
        
        this.props.onSubmit(newBook);
    
        this.setState({
          title: '',
          img: '',
          author: '',
          descr: '',
        });
      }    


    handleChange = (evt) => {
      const name = evt.target.name;
      this.setState({      
        [name]: evt.target.value,
      });
    };
    
    render() {
      const { title, img, author, descr } = this.state;
  
      return (
        <form onSubmit={ this.handleSubmit } className={ Styles.form } >
          <label className={ Styles.label }>
            Title
            <input 
              type="text"
              value={ title }
              name="title"
              onChange={ this.handleChange }
              className={ Styles.input } />
          </label>
          <label className={ Styles.label }>
            Image link
            <input type="text"
              value={ img }
              name="img"
              onChange={ this.handleChange }            
              className={ Styles.input }
              list="https://fakeimg.pl/313x475/?text=Book&font=lobster" />
          </label>
          <label className={ Styles.label }>
            Author
            <input type="text"
              value={ author }
              name="author"
              onChange={ this.handleChange }
              className={ Styles.input } />
          </label>
          <label className={ Styles.label }>
            Description
            <textarea 
              value={ descr }
              name="descr"
              onChange={ this.handleChange }
              className={ Styles.textarea } />
          </label>
          <Button className={ Styles.button } label="Add book" />
        </form>
      )
    }
  };