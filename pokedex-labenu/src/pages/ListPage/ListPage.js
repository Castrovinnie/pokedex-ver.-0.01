import Headers from "../../components/headers/Headers"
import PokeCard from "../../components/pokeCards/Card"
import { useNavigate } from 'react-router-dom'
import { goToPokedexPage } from '../../routes/coordinator'
import { useContext } from "react"
import PokemonContext from "../../global/Context"

function ListPage() {
  const navigate = useNavigate()

  const values = useContext(PokemonContext)

  const renderCard = 
  values.states.pokemonList && values.states.pokemonList.results.map((pokemon) => {
    return <PokeCard name={pokemon.name} />
  })

  return (
    <>
      <Headers />

      {renderCard}

      <button onClick={() => goToPokedexPage(navigate)}>Pokedex</button>
    </>
  )
}
  
export default ListPage;
