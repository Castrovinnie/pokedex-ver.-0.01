import React from 'react'
import { HeaderContainer, ImgPoke, PokedexButton, Button} from "./styled"
import Pokemon from "../../img/Pokemon.png"
import {useNavigate} from "react-router-dom"


function Headers ()  {
        const navigate = useNavigate()


    const goToPokedexPage = () => {
        navigate("/pokedex")
    }
    
        return (
            <div> 
            <HeaderContainer>
            <ImgPoke>
                <img src={Pokemon} />      
            </ImgPoke> 
                                    
                    
            </HeaderContainer>
            <button onClick={goToPokedexPage}> 
            <PokedexButton>
                <Button>          
                        Pokedex                 
                    </Button>
                    </PokedexButton> </button> 
            </div>
        )
 }

 export default Headers