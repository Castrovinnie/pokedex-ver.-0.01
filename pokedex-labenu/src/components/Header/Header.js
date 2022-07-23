import React from "react";
import logo from "../img/Logo.png";

const Header = ({pageName }) => {

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
      <img src={logo}/>
    </Header>
  )
}

export default Header