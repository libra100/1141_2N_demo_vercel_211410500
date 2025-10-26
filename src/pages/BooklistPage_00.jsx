import Wrapper from '../assets/wrappers/Booklist_00';
import books_data from '../assets/data/blogData.json';

console.log('books_data', books_data);
const BooklistPage_00 = () => {
  return (
    <Wrapper>
      <section className='booklist'>
        {books_data.map((book) => (
          <article className='book' key={book.id}>
            <img src={book.img} alt={book.title} />
            <div className='book-info'>
              <h1>{book.title}</h1>
              <h4>{book.author}</h4>
            </div>
          </article>
        ))}
      </section>
    </Wrapper>
  );
};

export default BooklistPage_00;
