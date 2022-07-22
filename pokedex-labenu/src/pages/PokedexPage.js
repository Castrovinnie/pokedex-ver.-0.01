import React from 'react';
import { useHistory } from 'react-router-dom';
import { useContext } from 'react';
import PokemonContext from '../global/Context';
import PokemonCardPokedex from '../components//CardPokedex/PokemonCardPokedex';
import logo from "../img/Logo.png";
import { ContainerHome, Pagina } from "./styled";
import styled from 'styled-components';

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

const Pokedex = () => {
    const { states, setters } = useContext(PokemonContext)

    const pokedex = states.pokedex
    const setPokedex = setters.setPokedex

    const count = (pokedex.length / 20)

    const page = states.page
    const setPage = setters.setPage

    const history = useHistory()

    const cardsPoke = pokedex.map((poke) => {
        return (
            <PokemonCardPokedex key={poke.name} url={poke.url} />
        )
    })

    const removePokedex = () => {
        setPokedex([])
        alert("Pokedex esvaziada com sucesso!")
    }

    const goToHome = () => {
        history.push(`/`)
    }

    const handleChange = (event, value) => {
        setPage(value)
    }

    if (pokedex.length !== 0) {

        return <Container>
            <Header>
                <Button onClick={goToHome}>
                    Página Inicial
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
        return <Container>
            <Header>
                <Button onClick={goToHome}>
                    Página Inicial
                </Button>
                <img src={logo} alt="" />

            </Header>
            <ContainerHome>
                <p>Nenhum pokemon adicionado.</p>
            </ContainerHome>
            
        </Container>
    }

};

export default Pokedex;
