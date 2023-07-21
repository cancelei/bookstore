// HomePage.js
import Book from "../components/Book";
import BookList from "../components/BookList";
import CreateBook from "../components/CreateBook";

function HomePage() {
  return (
    <>
      <h1>Home Page</h1>
      <p>This is the home page with books!</p>
      <BookList />
      <Book />
      <CreateBook/>
    </>
  );
}

export default HomePage;
