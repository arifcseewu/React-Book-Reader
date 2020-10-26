import React from "react";
import Book from "./Book";

const Books = () => {
  const books = [
    {
      id: 1,
      title: "Harry Potter Philosopher's Stone",
      author: "J.K Rouling",
      email: "rouling@gmail.com",
      phone: "835783641",
      description: "it's a short description of the book named harry potter",
    },
    {
      id: 2,
      title: "Harry Potter and the Chamber of Secrets",
      author: "J.K Rouling",
      email: "rouling@gmail.com",
      phone: "835783642",
      description: "it's a short description of the book named harry potter",
    },
    {
      id: 3,
      title: "Harry Potter and the Goblet of Fire",
      author: "J.K Rouling",
      email: "rouling@gmail.com",
      phone: "835783643",
      description: "it's a short description of the book named harry potter",
    },
    {
      id: 4,
      title: "Harry Potter and the Order of the Phoenix",
      author: "J.K Rouling",
      email: "rouling@gmail.com",
      phone: "835783644",
      description: "it's a short description of the book named harry potter",
    },
    {
      id: 5,
      title: "Harry Potter and the Half-Blood Prince",
      author: "J.K Rouling",
      email: "rouling@gmail.com",
      phone: "835783645",
      description: "it's a short description of the book named harry potter",
    },
    {
      id: 6,
      title: "Harry Potter and the Deathly Hallows",
      author: "J.K Rouling",
      email: "rouling@gmail.com",
      phone: "835783646",
      description: "it's a short description of the book named harry potter",
    },
  ];
  return (
    <div className="row roe-col-md-2 row-cols-lg-3 g-4 mt-3">
      {books.length ? (
        books.map((book) => <Book book={book} key={book.id} />)
      ) : (
        <p className="lead">
          No Book to read. Hello free Time
          <i className="text-warning far fa-smile pl-1"></i>
        </p>
      )}
    </div>
  );
};

export default Books;
