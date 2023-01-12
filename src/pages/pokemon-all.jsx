import { useLoaderData, Link } from 'react-router-dom'

export default function AllPokemon(){
  //useLoaderData returns data from loader function defined in router in main.jsx
  const pokeData = useLoaderData();
  console.log(pokeData)
  return (
    <>
      {
        /* check if pokemon data is there */
        pokeData ? (
          //if data is there
          <ul>
            {
              //map through data array
              pokeData.results.map((pokemon) => (
                //display an element for each pokemon object
                <li>
                  {/* use Link component to make each pokemon's name a link to the specific pokemon's details page */}
                  <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
                </li>
              ))
            }
          </ul>
        ) : (
          // else - if the data is not in pokeData yet
          <div>Pokemon data is still loading</div>
        )
      }
    </>
  );
}