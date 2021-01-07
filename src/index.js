import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const bookOne = {
  title: 'The Four Agreements: A Practical Guide to Personal Freedom',
  author: 'Don Miguel Ruiz',
  img:
    'https://images-na.ssl-images-amazon.com/images/I/91p5b0UgbKL._AC_UL200_SR200,200_.jpg',
};

function BookList() {
  return (
    <section className='booklist'>
      <Book img={bookOne.img} title={bookOne.title} author={bookOne.author} />
    </section>
  );
}

const Book = (props) => {
  return (
    <article className='book'>
      <img src={props.img} alt='' />
      <h1>{props.title}</h1>
      <h4>{props.author}</h4>
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById('root'));
