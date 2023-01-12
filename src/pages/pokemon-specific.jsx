import { useLoaderData } from "react-router-dom"

export default function Pokemon(){
  //get data returned from loader function in main.jsx 
  const pokemonData = useLoaderData();
  //pokemonData will hold the data for the single pokemon
  console.log(pokemonData)
  return(

    <>
    {/* display some data returned from the api call  */}
    <h1>{pokemonData.name}</h1>  
    </>
  )


}