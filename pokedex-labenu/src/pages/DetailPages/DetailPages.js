import Headers from "../../components/headers/Headers"
import { useParams } from 'react-router-dom'
import { useRequestData } from '../../hooks/requestData/requestData'
import { renderType } from '../../components/renderType/renderType'

function DetailPages() {

  const params = useParams()

  const [pokeDetails] = useRequestData(params.name)

  let totalStats = 0
  const renderStats = pokeDetails && pokeDetails.stats.map((status) => {
    totalStats = totalStats + Number(status.base_stat)
    return <li>{status.stat.name} - {status.base_stat}</li>
  })
  
  return (
    <>
      <Headers />
      <main>
        <br />
        <br />
        <br />
        <br />
        <br />
        <h1>Detalhes</h1>

        <h3># {pokeDetails && pokeDetails.id}</h3>
        <h2>{pokeDetails && pokeDetails.name}</h2>

        <div>
          {pokeDetails && renderType(pokeDetails.types[0].type.name)}
          {pokeDetails && pokeDetails.types[1] && renderType(pokeDetails.types[1].type.name)}       
        </div>

        <img
          src={pokeDetails && pokeDetails.sprites.other.dream_world.front_default}
          alt={pokeDetails && pokeDetails.name}
        />
        
        <img src={pokeDetails && pokeDetails.sprites.front_default} alt={`${pokeDetails && pokeDetails.name} sprite frente`} /> 
        <img src={pokeDetails && pokeDetails.sprites.back_default} alt={`${pokeDetails && pokeDetails.name} sprite costas`} />

        <h4>Moves</h4>
        <ul>
          <li>{pokeDetails && pokeDetails.moves[0].move.name}</li>
          <li>{pokeDetails && pokeDetails.moves[1].move.name}</li>
          <li>{pokeDetails && pokeDetails.moves[2].move.name}</li>
          <li>{pokeDetails && pokeDetails.moves[3].move.name}</li>
        </ul>

        <h4>Base Stats</h4>
        <ul>
          {renderStats}
          <li>total - {totalStats}</li>  
        </ul>
      </main>
      
    </>
  );
}

export default DetailPages;
