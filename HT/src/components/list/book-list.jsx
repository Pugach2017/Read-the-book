import React from 'react';
import PropTypes from 'prop-types';
import Book from '../book/book';
import Styles from './book-list.css'


const BookList = ({ books, onDelete }) => (  
  <ul className={ Styles.ul }>{books.map(book => 
    <li key={ book.id }>
      <Book {...book} onDelete={ () => onDelete(book.id)} />
    </li>)}
  </ul>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
      img: PropTypes.string.isRequired,
      descr: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default BookList;