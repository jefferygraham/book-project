import React from 'react';
import ReactDOM from 'react-dom';

function BookList() {
  return (
    <section>
      <Book />
    </section>
  );
}

const Book = () => {
  return (
    <article>
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

const Author = () => <h4>Don Miguel Ruiz</h4>;

ReactDOM.render(<BookList />, document.getElementById('root'));
