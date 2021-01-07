import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

const bookOne = {
  title: 'The Four Agreements: A Practical Guide to Personal Freedom',
  author: 'Don Miguel Ruiz',
  img:
    'https://images-na.ssl-images-amazon.com/images/I/51FcSSKpJBL._SX343_BO1,204,203,200_.jpg',
};
const bookTwo = {
  title: 'The Vanishing Half',
  author: 'Brit Bennett',
  img: 'https://m.media-amazon.com/images/I/41ThX3SfAiL.jpg',
};

function BookList() {
  return (
    <section className='booklist'>
      <Book img={bookOne.img} title={bookOne.title} author={bookOne.author}>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia,
          voluptates.
        </p>
      </Book>
      <Book img={bookTwo.img} title={bookTwo.title} author={bookTwo.author} />
    </section>
  );
}

const Book = (props) => {
  const { img, title, author } = props;

  return (
    <article className='book'>
      <img src={img} alt='' />
      <h1>{title}</h1>
      <h4>{author}</h4>
      {props.children}
    </article>
  );
};

ReactDOM.render(<BookList />, document.getElementById('root'));
