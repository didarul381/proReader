import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Book from "./Book";

const Books = () => {
  
  const loaderData = useLoaderData();
  const booksData = loaderData.books;

  const [selectedBooks, setSelectedBooks] = useState(booksData);

  let selected = [];
  const BooksNameOptions = [
    {
      value: "Software Design",
      text: "Software Design",
    },
    {
      value: "Machine Learning",
      text: "Machine Learning",
    },
    {
      value: "Learning Microsoft",
      text: "Learning Microsoft",
    },
    {
      value: "Full Stack",
      text: "Full Stack",
    },
    {
      value: "Mathematics",
      text: "Mathematics",
    },
  ];

 
  const handleSelectName = (e) => {
    if (e.target.value === "All Books") {
      setSelectedBooks(booksData);
    } else {
      selected = booksData.filter((book) => book.category === e.target.value);
      setSelectedBooks(selected);
    }
  };

  return (
    <>
     <div className="text-center">
     <label
        for="books"
        class="w-11 mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        {/* Select an option */}
      </label>
      <select
        onChange={handleSelectName}
        id="books"
        className="bg-gray-50 border my-7  lg:ml-10  border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 mx-auto  p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
      >
        <option>All Books</option>
        {BooksNameOptions.map((option) => {
          return (
            <option key={option.value} value={option.value}>
              {option.text}
            </option>
          );
        })}
      </select>
     </div>
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
          {selectedBooks.map((book) => (
            <Book key={book.id} book={book} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Books;
