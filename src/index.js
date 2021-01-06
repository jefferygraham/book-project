import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

function BookList() {
  return (
    <section className='booklist'>
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article className='book'>
      <Image />
      <Title />
      <Author />
    </article>
  );
};

const Image = () => (
  <img
    src='https://images-na.ssl-images-amazon.com/images/I/91p5b0UgbKL._AC_UL200_SR200,200_.jpg'
    alt=''
  />
);

const Title = () => (
  <h1>The Four Agreements: A Practical Guide to Personal Freedom</h1>
);

const Author = () => (
  <h4 style={{ color: '#617d98', fontSize: '0.75rem', marginTop: '0.25rem' }}>
    Don Miguel Ruiz
  </h4>
);

ReactDOM.render(<BookList />, document.getElementById('root'));
