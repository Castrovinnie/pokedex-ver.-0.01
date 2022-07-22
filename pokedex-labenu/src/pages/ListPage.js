import React, { useContext } from 'react';
import { useHistory, } from 'react-router-dom';
import { useEffect } from 'react';
import PokemonContext from '../global/Context';
import PokemonCard from '../components/Card/Card';
import { ContainerHome, Pagina } from "./styled";
import styled from 'styled-components';
import logo from "../img/Logo.png";

const Container = styled.div` 
overflow-x: hidden;
`

const Header = styled.header`
height: 18vh;
width: 100vw;
background: rgb(2,0,36);
background: linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(19,86,2,1) 0%, rgba(13,124,78,1) 0%, rgba(9,148,127,1) 51%, rgba(0,212,255,1) 100%);
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
const Home = () => {
    const { states, setters, getters } = useContext(PokemonContext)

    const { pokemon, page, offset, pokedex } = states
    const { setPokemon, setPage, setOffset, setPokedex } = setters
    const { getPokemon } = getters

    useEffect(() => {
        getPokemon()
    }, [offset])

    const history = useHistory()

    const goToPokedex = () => {
        history.push(`/pokedex`)
    }

    const removePokedex = () => {
        setPokedex([])
        alert("Pokedex esvaziada com sucesso!")
    }

    const cardsPoke = pokemon.filter((poke) => {
        return (!pokedex.some(e => e.url === poke.url))
    })
        .map((poke) => {
            return (
                <PokemonCard key={poke.name} url={poke.url} name={poke.name} />
            )
        })

    const handleChange = (event, value) => {
        setPage(value)
        setOffset((value - 1) * 20)
    }




    // console.log(pokemon);
    if (pokemon.length !== 0) {
        return <Container>
            <Header>
                <Button onClick={goToPokedex}>
                    Pokedex
                </Button>
                <img src={logo} alt="Logotipo pokemon" />
                <Button onClick={removePokedex}>
                    Esvaziar Pokedex
                </Button>
            </Header>
            <ContainerHome>
                {cardsPoke}
            </ContainerHome>
                    </Container>;
    } else {
        return (
            <Container>
                <h1>Loading...</h1>
            </Container>
        )
    }

};

export default Home;
