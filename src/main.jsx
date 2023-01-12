import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import { getPokemon, getSpecificPokemon } from "./api"
import AllPokemon from './pages/pokemon-all'
import Pokemon from './pages/pokemon-specific'
import ErrorPage from './pages/error.jsx'

//create router object
const router = createBrowserRouter([
  //each route is its own object
  //specify path and element 
  {
    // "/" path is the index, the first page you see when you open the website in the browser
    path: "/",
    //element can be a component or just JSX (html syntax) elements
    element: <AllPokemon />,
    
    //error element, if there is an error, the user will see the error page
    errorElement: <ErrorPage />,

    //loader function runs when you go to the path, runs before page is loaded
    loader:  () => {
      return getPokemon();
    },
  
  },
  {
    //name is a dynamic param
    //name is like a variable 
    path: "/pokemon/:name",
    //for single pokemon page
    element: <Pokemon />,
    errorElement: <ErrorPage />,

    //params object holds name param
    loader: ({params}) => {
      const pokemonName = params.name
      return getSpecificPokemon(pokemonName);
    }
  }
])


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* setup router, pass router array as props*/}
    <RouterProvider router={router} />
  </React.StrictMode>,
)
