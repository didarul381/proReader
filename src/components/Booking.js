import React from "react";
import styles from "./booking.module.css";
const Booking = () => {
  return (
    <div className={styles.bg}>
      <div className="max-w-screen-xl sm:mx-auto mb-11">
        <div className="grid grid-cols-1 gap-4 row-gap-8 lg:grid-cols-2">
          <form className="bg-slate-50  border border-slate-300 p-3">
          <h5 className="text-center mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
              Booking Now
              </h5>
            <label class="block">
              <span class="block text-sm font-medium text-slate-700">
                Username
              </span>

              <input
                type="text"
                class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
         focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />
            </label>
            <label class="block">
              <span class="block text-sm font-medium text-slate-700">
                Email
              </span>

              <input
                type="email"
                class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
         focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />
            </label>
            <label class="block">
              <span class="block text-sm font-medium text-slate-700">
                Pohone
              </span>

              <input
                type="text"
                class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
         focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />
            </label>
            <label class="block">
              <span class="block text-sm font-medium text-slate-700">
              Book Name
              </span>

              <input
                type="text"
                class="mt-1 block w-full px-3 py-2 bg-white border border-slate-300 rounded-md text-sm shadow-sm placeholder-slate-400
         focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
      disabled:bg-slate-50 disabled:text-slate-500 disabled:border-slate-200 disabled:shadow-none
      invalid:border-pink-500 invalid:text-pink-600
      focus:invalid:border-pink-500 focus:invalid:ring-pink-500"
              />
            </label>
           
            <button className=" my-3 max-w-full bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded">
             Submit
            </button>
            <i aria-hidden="true" className="bookory-icon- bookory-icon-book"></i>
          </form>

          <div className="space-y-6">
            <div  className="text-center mb-2 text-xl font-bold tracking-tight text-white my-10">
            <h4>A room without books is like<br/> a body without a soul.</h4>
           <p >Reading book is a habit with enormous blessings along with knowledge gain. </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Booking;
