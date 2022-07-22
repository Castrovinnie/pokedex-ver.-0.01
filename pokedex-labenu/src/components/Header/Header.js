import React from "react";
import styled from "styled-components";
import logo from "../img/Logo.png";

const Header = ({pageName }) => {


  const Header = styled.header`
      height: 18vh;
      background: solid black;
      display: flex;
      align-items: center;
      color: white;
      position: relative;
      h1 {
        margin-left: 38vw;
        
      }
      img {
        height: 15vh;
        width: 20vw;
      }
  `

  const Button = styled.button`
      margin: 0 10px 0 10px;
      background: #33A4F5;
      border-radius: 8px;
      box-shadow: #0d30a8 0 10px 20px -10px;
      box-sizing: border-box;
      color: #FFFFFF;
      font-size: 16px;
      font-weight: 700;
      line-height: 24px;
      opacity: 1;
      outline: 0 solid transparent;
      padding: 8px 30px;
      
  `

  const ButtonText = () => {
    switch (pageName) {
      case "PokeLista":
        return "Pokédex";
      case "Pokédex":
        return "PokeLista";
      default:
        return "Voltar";
    }
  };

  return (
    <Header>
      <h1>{pageName}</h1>
      <img src={logo} alt="" />
    </Header>
  )
}

export default Header