import Link from "next/link";
import React from "react";
import BookCover from "./BookCover";

const BookCard = ({
  id,
  title,
  genre,
  coverColor,
  coverImage,
  isLoanedBook = false,
}: Book) => {
  return (
    <li>
      <Link href={`/books/${id}`}>
        <BookCover coverColor={coverColor} coverImage={coverImage} />
      </Link>
    </li>
  );
};

export default BookCard;
