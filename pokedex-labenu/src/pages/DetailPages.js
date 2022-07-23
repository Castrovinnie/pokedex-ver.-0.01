import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import logo from "../img/Logo.png";
import { ContainerHome } from "./styled";
import Fundo from '../img/Fundo.jpg';
import { useRequestData } from "../hooks/requestData/requestData";
import { renderType } from "../components/renderType/renderType"


const Container = styled.div` 
overflow-x: hidden;
`

const Header = styled.header`
height: 18vh;
width: 100vw;
background-color: aliceblue;
display: flex;
align-items: center;
justify-content: space-evenly;
color: white;
position: relative;
img {
     max-height: 15vh;
     max-width: 40vw;
    }
`

const TodosOsPokemons = styled.div`
position: absolute;
width: 210px;
height: 36px;
left: 100px;
top: 62px;

font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 36px;
/* identical to box height */

text-decoration-line: underline;

color: #1A1A1A;
&:hover{
    cursor: pointer;
}
`
const NamePokemon = styled.div`
display: flex;
height: 20vh;
flex-direction: column;
align-self: center;
align-items: center;
font-family: Verdana, Arial, Helvetica, sans-serif;
color:#0d30a8;
font-size: 10px;
font-weight: bold;
text-shadow: 2px 4px 5px #76bfd1;
text-transform: uppercase;
.images{
    margin: 0;
    padding: 0;
    height: 70%;
    img{
        height: 100%;
    }
}
`

const DataContainer = styled.div` 
border: 1px solid #fff50f; 
background-image: url(${Fundo});
background-repeat: no-repeat;
background-size: cover;
box-shadow: 1px 0px 3px 0px #ffc222;
border-radius: 20px;
margin: 20px;
width: 90vw;
min-height: 60vh;
display: flex;
flex-direction: column;
h2{
    margin: 0 auto;
}
`
const Pokedex = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 10px;

position: absolute;
width: 287px;
height: 74px;
left: 1440px;
top: 41px;

background: #33A4F5;
border-radius: 8px;
&:hover{
    cursor: pointer;
}
`
const PokeP = styled.div`
width: 106px;
height: 36px;

font-family: 'Poppins';
font-style: normal;
font-weight: 700;
font-size: 24px;
line-height: 36px;
color: #FFFFFF;
flex: none;
order: 0;
flex-grow: 0;
`



const Detalhes = () => {


    const history = useHistory()
    const params = useParams()
    const [pokemon, setPokemon] = useState()
    const [pokeDetails] = useRequestData(params.name)

    let totalStats = 0
    const renderStats = pokeDetails && pokeDetails.stats.map((status) => {
        totalStats = totalStats + Number(status.base_stat)
        return <li>{status.stat.name} - {status.base_stat}</li>
    })



    useEffect(() => {
        axios.get(`https://pokeapi.co/api/v2/pokemon/${params.pokemon}`)
            .then((res) => {
                setPokemon(res.data)
            })
            .catch((err) => {
                alert(err)
            })
    }, [])

    const goToHome = () => {
        history.push(`/`)
    }

    const goToPokedex = () => {
        history.push(`/pokedex`)
    }


    if (pokemon) {

        const types = pokemon.types.map((item) => {
            return (<p>
                {item.type.name}
            </p>)
        })

        console.log(pokemon);
        return (
            <Container >
                <Header>
                    <TodosOsPokemons onClick={goToHome}>
                        Página Inicial
                    </TodosOsPokemons>
                    <img src={logo} alt="Logotipo pokemon" />
                    <Pokedex onClick={goToPokedex}><PokeP>
                        Pokedex
                    </PokeP></Pokedex>
                </Header>

                <ContainerHome key={pokemon.id}>
                    <DataContainer>
                        <NamePokemon>
                            <h3># {pokeDetails && pokeDetails.id}</h3>
                            <h1>{pokemon.name.toUpperCase()}</h1>
                            <div>
                                {pokeDetails && renderType(pokeDetails.types[0].type.name)}
                                {pokeDetails && pokeDetails.types[1] && renderType(pokeDetails.types[1].type.name)}
                            </div>
                            
                            <div className='images'>
                                <img src={pokemon.sprites.front_default} alt={`${pokemon.name} de frente`} />
                                <img src={pokemon.sprites.back_default} alt={`${pokemon.name} de costas`} />
                            </div>
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
                        </NamePokemon>

                    </DataContainer>
                </ContainerHome>

            </Container>
        )
    } else {
        return <h1>Loading...</h1>
    }

};

export default Detalhes;
