import React from 'react';

const Book = ({img, author, descr, title, onDelete }) => (
  <div> 
   <img src={ img } alt="Here you can add your advertasing)" /> 
    <button onClick={ onDelete }>Delete book</button>
      <h2>{ title }</h2>
      <h4>{ author }</h4>
       <p>{ descr }</p>   
    </div>
);

export default Book;