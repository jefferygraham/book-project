import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const books = [
  {
    title: 'The Four Agreements: A Practical Guide to Personal Freedom',
    author: 'Don Miguel Ruiz',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/51FcSSKpJBL._SX343_BO1,204,203,200_.jpg',
  },
  {
    title: 'The Vanishing Half',
    author: 'Brit Bennett',
    img: 'https://m.media-amazon.com/images/I/41ThX3SfAiL.jpg',
  },
  {
    title:
      'Lead from the Outside: How to Build Your Future and Make Real Change',
    author: 'Stacey Abrams',
    img:
      'https://images-na.ssl-images-amazon.com/images/I/41L+6OcWobL._SX324_BO1,204,203,200_.jpg',
  },
];

function BookList() {
  return (
    <section className='booklist'>
      {books.map((book) => (
        <Book book={book} />
      ))}
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props.book;

  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById('root'));
