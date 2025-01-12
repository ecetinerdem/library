import React from "react";

interface Props {
  title: string;
  books: Book[];
  containerClassName?: string;
}

const BookList = ({ title, books, containerClassName }: Props) => {
  return (
    <section className={containerClassname}>
      <h2 className="font-bebas-neue text-4xl text-light-100">Popular Books</h2>
      <ul className="book-list"></ul>
    </section>
  );
};

export default BookList;
