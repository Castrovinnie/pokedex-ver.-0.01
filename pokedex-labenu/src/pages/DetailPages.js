import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import logo from "../img/Logo.png";
import { ContainerHome } from "./styled";
import Fundo from '../img/Fundo.jpg';


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

const Button = styled.button`
display: flex;
flex-direction: row;
justify-content: center;
align-items: center;
padding: 4px 10px;
&:hover{
    cursor: pointer;
    background-color: lightblue;
    border-radius: 24px;
    color: lightblue;
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



const Detalhes = () => {

    const history = useHistory()
    const params = useParams()
    const [pokemon, setPokemon] = useState()

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
                    <Button onClick={goToHome}>
                        Página Inicial
                    </Button>
                    <img src={logo} alt="Logotipo pokemon" />
                    <Button onClick={goToPokedex}>
                        Pokedex
                    </Button>
                </Header>

                <ContainerHome key={pokemon.id}>
                    <DataContainer>
                        <NamePokemon>
                            <h1>{pokemon.name.toUpperCase()}</h1>
                            <div className='images'>
                                <img src={pokemon.sprites.front_default} alt={`${pokemon.name} de frente`} />
                                <img src={pokemon.sprites.back_default} alt={`${pokemon.name} de costas`} />
                            </div>
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
