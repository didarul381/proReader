import { createBrowserRouter } from 'react-router-dom'
import About from './components/About'
import Books from './components/Books'
import ErrorPage from './components/ErrorPage'
import Home from './components/Home'
import Root from './components/Root'
import BookDetails from './components/BookDetails'
import Contact from './components/Contact'
import Booking from './components/Booking'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () =>fetch('https://api.itbook.store/1.0/new'),
      },
      {
        path: 'home',
        element: <Home />,
        // loader: () => fetch('books.json'),
        loader: () =>fetch('https://api.itbook.store/1.0/new'),
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact/>
      },
      {
        path: 'booking',
        element: <Booking></Booking>
      },
      {
        path: 'books',
        element: <Books />,
        loader: () =>fetch('books.json') 
        
      },
      {
        path: 'book/:id',
        element: <BookDetails />,
        loader: ({ params }) =>fetch(`https://api.itbook.store/1.0/books/${params.id}`),
      },
    ],
  },
])

// export default router
