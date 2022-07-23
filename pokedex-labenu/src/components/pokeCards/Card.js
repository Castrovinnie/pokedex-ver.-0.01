import { useNavigate } from "react-router-dom";
import { useRequestData } from '../../hooks/requestData/requestData'
import { goToDetailPage } from '../../routes/coordinator'
import { renderType } from '../renderType/renderType'
import { Pokemon, ContainerPlanta, CardContainer} from './styled'


function PokeCard(props) {
    const navigate = useNavigate();

    const [pokeDetails] = useRequestData(props.name)

    return (
        <CardContainer>
        <section>
           <ContainerPlanta> <span>Nº:{pokeDetails && pokeDetails.id}</span>
            <span>{pokeDetails && pokeDetails.name.toUpperCase()} - </span> 
            
            <Pokemon><img src={pokeDetails && pokeDetails.sprites.other.dream_world.front_default}/>  </Pokemon>
             
            <span>
                {pokeDetails && renderType(pokeDetails.types[0].type.name)}
                {pokeDetails && pokeDetails.types[1] && renderType(pokeDetails.types[1].type.name)}
            </span>   
            
            
            <button>Capturar!</button>
            <button onClick={() => goToDetailPage(navigate, props.name)}>Detalhes</button>
            </ContainerPlanta> 
           
        </section>
        </CardContainer>
    )
}

export default PokeCard;
