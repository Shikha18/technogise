import React, { useState } from 'react';
import style from './Library.module.scss';

const Library = () => {
  const [books, setBooks] = useState([]);
  const [borrowedBooks, setBorrowedBooks] = useState([]);

  const viewLibrary = () => {
    if (books.length === 0) {
      return <p>Empty library</p>;
    } else {
      return (
        <ul>
          {books.map((book, index) => (
            <li key={index}>{book}</li>
          ))}
        </ul>
      );
    }
  };

  const borrowBook = (book) => {
    if (borrowedBooks.length >= 2) {
      alert('You have reached the borrowing limit');
    } else {
      setBorrowedBooks([...borrowedBooks, book]);
      setBooks(books.filter((b) => b !== book));
    }
  };

  const returnBook = (book) => {
    setBorrowedBooks(borrowedBooks.filter((b) => b !== book));
    setBooks([...books, book]);
  };

  return (
    <div className={style.container}>
      <h1> ||   Book Library   ||</h1>
      <h2>View Books!</h2>
      {viewLibrary()}
      <h2>Borrowed Books!</h2>
      <ul>
        {borrowedBooks.map((book, index) => (
          <li key={index}>
            {book}
            <button onClick={() => returnBook(book)}>Return Books</button>
          </li>
        ))}
      </ul>
      <h2>Borrow Actions!</h2>
      <button onClick={() => borrowBook('Book 1')}>Borrow Book 1</button>
      <button onClick={() => borrowBook('Book 2')}>Borrow Book 2</button>
    </div>
  );
};

export default Library;
