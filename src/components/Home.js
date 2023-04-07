import React from "react";
import Lottie from "lottie-react";
import reader from "../assets/reader.json";
import { useLoaderData } from "react-router-dom";
import NewBook from "./NewBook";
import MostBoughtBook from "./MostBoughtBook";
import Home1 from "../assets/Home1_imb.jpg";
import Home2 from "../assets/Home2_imb1.jpg";
import Home3 from "../assets/Home3_imb2.jpg";
import Home4 from "../assets/Home04_imb3.jpg";

const Home = () => {
  const loaderData = useLoaderData();
  const booksData = loaderData.books;
  // console.log(booksData.length);
  return (
    <div className="px-4 sm:mb-20 lg:mb-5 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24">
     <section className="mb-11">

     <div className="flex flex-col items-center justify-between lg:flex-row">
        <div className="mb-10 lg:max-w-lg  lg:pr-5 lg:mb-0">
          <div className="max-w-xl mb-6 lg:mt-8">
            <div>
              <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-yellow-400">
                On Sale!
              </p>
            </div>
            <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
              A reader lives a <br className="hidden md:block" /> thousand lives{" "}
              <span className="inline-block text-blue-400">before he dies</span>
            </h2>
            <p className="text-base text-gray-700 md:text-lg">
              Books are a uniquely portable magic. Books serve to show a man
              that those original thoughts of his aren’t very new after all. The
              man who does not read good books is no better than the man who
              can’t.
            </p>
          </div>
          <div className="flex flex-col items-center md:flex-row">
            <a
              href="/books"
              className="inline-flex items-center justify-center w-full h-12 px-6 mb-3 font-medium tracking-wide text-white transition duration-200 rounded shadow-md md:w-auto md:mr-4 md:mb-0 bg-blue-400 hover:bg-blue-700 focus:shadow-outline focus:outline-none"
            >
              <span className="mr-3">Visit Store</span>
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                className="w-4"
              >
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                  points="4,4 22,4 19,14 4,14 "
                />
                <circle
                  cx="4"
                  cy="22"
                  r="2"
                  strokeLinejoin="miter"
                  strokeLinecap="square"
                  stroke="none"
                  fill="currentColor"
                />
                <circle
                  cx="20"
                  cy="22"
                  r="2"
                  strokeLinejoin="miter"
                  strokeLinecap="square"
                  stroke="none"
                  fill="currentColor"
                />
                <polyline
                  fill="none"
                  stroke="currentColor"
                  strokeMiterlimit="10"
                  points="1,1 4,4 4,14 2,18 23,18 "
                />
              </svg>
            </a>
            <a
              href="/about"
              aria-label=""
              className="inline-flex items-center font-semibold text-gray-800 transition-colors duration-200 hover:text-blue-700"
            >
              Learn More
            </a>
          </div>
        </div>
        <div className="relative lg:w-1/2 ">
          <div className="w-full lg:w-4/5 lg:ml-auto h-56  sm:h-96">
            <Lottie animationData={reader} loop={true} />
          </div>
        </div>
      </div>

     </section>

    <section className="sm:py-6 mt-36 lg:mt-0 md:mt-4 mx-auto text-center">
    <div className="px-4  py-8 mx-auto text-center sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-4">
        <div className="  mx-auto text-center  lg:mt-2  grid gap-6 py-6 row-gap-5 mb-4 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
          <div class= "flex flex-col items-center justify-center  lg:mt-2  max-w-sm bg-white">
         
          <img className="ml-6 rounded-t-lg " src={Home1} alt="" />
          

            <div class="p-5">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Selection
              </h5>

              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                We have more than 13 million titles to choose from, from the
                earliest board books to the all-time classics.
              </p>
            </div>
          </div>
          <div class="flex flex-col items-center justify-center max-w-sm bg-white ">
            <img class="rounded-t-lg ml-2" src={Home2} alt="" />

            <div class="p-5">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Purchasing Power
              </h5>

              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                With Wish Lists you can choose to be notified the instant we
                find a copy, see how often we find rare titles.
              </p>
            </div>
          </div>
          <div class="flex flex-col items-center justify-center max-w-sm bg-white ">
            <img class="rounded-t-lg ml-2" src={Home3} alt="" />

            <div class="p-5">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Used & New books
              </h5>

              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                If there is no demand for a book, we will donate it to charity,
                or we'll recycle it
              </p>
            </div>
          </div>
          <div class="flex flex-col items-center justify-center max-w-sm bg-white ">
            <img class="rounded-t-lg ml-2" src={Home4} alt="" />

            <div class="p-5">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                Shipping & More
              </h5>

              <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
                When you've found the books you want we'll ship qualifying
                orders to your door for FREE.
              </p>
            </div>
          </div>
        </div>
        </div>
     </section>

       <section>
       <h2 className="text-center text-2xl mb-16 py-4 text-cyan-400 ">
          NEW <b className="text-blue-900 mb-8 font-serif">Books</b>
        </h2>
        {/* <hr className="w-10 mx-auto my-2 text-center py-6 "></hr> */}
        <div className="grid gap-6 row-gap-5 mb-4 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
          {booksData.slice(0, 4).map((book) => (
            <NewBook key={book.isbn13} book={book} />
          ))}
        </div>
       </section>

       <section className="my-2">
       <h2 className="text-center my-16 py-2 text-2xl text-cyan-400 ">
          MOST <b className="text-blue-900 font-serif">BOUGHT BOOKS</b>
        </h2>
        {/* <hr className="w-10 mx-auto my-2 text-center py-6 "></hr> */}
        <div className="grid gap-6 row-gap-5 mb-4 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
          {booksData.slice(5, 9).map((book) => (
            <MostBoughtBook key={book.isbn13} book={book} />
          ))}
        </div>
       </section>
        <section>
        <div className="grid gap-6 row-gap-5 pt-16 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
          <div className=" mx-auto text-center p-6 divide-y divide-slate-200">
            <div class="flex  first:pt-0 last:pb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-10 h-10 text-blue-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                />
              </svg>

              <div className=" text-center ml-3 overflow-hidden">
                <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  15,254
                </h3>
                <p class="mb-2 tracking-tight text-gray-900 dark:text-white">
                  TOTAL BOOKS
                </p>
              </div>
            </div>
          </div>

          <div className="  mx-auto p-6 divide-y divide-slate-200 text-center">
            <div class="flex py-4 first:pt-0 last:pb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-10 h-10 text-blue-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
                />
              </svg>

              <div className="  ml-3 text-center overflow-hidden">
                <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  12,254
                </h3>
                <p class="mb-2  tracking-tight text-gray-900 dark:text-white">
                  AUTHORS
                </p>
              </div>
            </div>
          </div>
          <div className=" mx-auto p-6 divide-y divide-slate-200">
            <div class="flex py-4 first:pt-0 last:pb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-10 h-10 text-blue-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>

              <div  className=" text-center ml-3 overflow-hidden">
                <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  15,254
                </h3>
                <p class=" tracking-tight text-gray-900 dark:text-white">
                  Book Sold
                </p>
              </div>
            </div>
          </div>
          <div className=" mx-auto p-6 divide-y divide-slate-200">
            <div class="flex py-4 first:pt-0 last:pb-0">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-10 h-10 text-blue-500"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15.182 15.182a4.5 4.5 0 01-6.364 0M21 12a9 9 0 11-18 0 9 9 0 0118 0zM9.75 9.75c0 .414-.168.75-.375.75S9 10.164 9 9.75 9.168 9 9.375 9s.375.336.375.75zm-.375 0h.008v.015h-.008V9.75zm5.625 0c0 .414-.168.75-.375.75s-.375-.336-.375-.75.168-.75.375-.75.375.336.375.75zm-.375 0h.008v.015h-.008V9.75z"
                />
              </svg>

              <div class="ml-3 overflow-hidden">
                <h3 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                  15,254
                </h3>
                <p class="mb-2 tracking-tight text-gray-900 dark:text-white">
                  Happy Customer
                </p>
              </div>
            </div>
          </div>
        </div>
        </section>
      </div>
    
   
  );
};

export default Home;
