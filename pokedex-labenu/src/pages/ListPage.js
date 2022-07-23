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

    if (pokemon.length !== 0) {
        return <Container>
            <Header>
                <img src={logo} alt="Logotipo pokemon" />
                <Pokedex onClick={goToPokedex}><PokeP>
                     Pokedex
                    </PokeP>
                </Pokedex>
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
