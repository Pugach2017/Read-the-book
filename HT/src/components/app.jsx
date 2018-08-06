import React, { Component } from 'react';
import books from './books.json';
import style from '../index.css';
import Styles from './app.css';
import PropTypes from 'prop-types';
import v4 from 'uuid/v4';
import { getVisibleBooks } from '../services/selectors';
import SearchBar from './search/search-bar';
import BookEditor from './editor/book-editor';
import BookList from './list/book-list';


export default class App extends Component {
  state = {
    books,
    filter:'',
  }

  deleteBook = (id) => {
    this.setState(prevState => ({
      books: prevState.books.filter(book => book.id !== id)
    }))
  };

  changeFilter = (evt) => {
    this.setState({
      filter: evt.target.value,
    })
  };

  addBook = (newBook) => {
    const book = {
      id: v4(),
      ...newBook
    };

    this.setState(prevState => ({
      books: [book,
        ...prevState.books
      ]
    }))
  };

  render() {

    const {books, filter} = this.state;
    const visibleBooks = getVisibleBooks (books, filter);
    

    return (
      <div className={ Styles.wrapper }>
        <aside className={ Styles.aside }>
          <SearchBar value={ filter } onChange={ this.changeFilter } />
          <BookEditor onSubmit={ this.addBook } />
        </aside>
        <main className={ Styles.main }>
          <BookList books={ visibleBooks } onDelete={ this.deleteBook } />
        </main>
      </div>
    );
  }
};
