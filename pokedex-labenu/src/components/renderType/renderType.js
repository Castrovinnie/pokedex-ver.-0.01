import grass from '../../img/type_grass.png'
import poison from '../../img/type_poison.png'
import fire from '../../img/type_fire.png'
import flying from '../../img/type_flying.png'
import water from '../../img/type_water.png'
import bug from '../../img/type_bug.png'
import normal from '../../img/type_normal.png'
import dark from '../../img/type_dark.png'
import dragon from '../../img/type_dragon.png'
import electric from '../../img/type_electric.png'
import fairy from '../../img/type_fairy.png'
import fighting from '../../img/type_fighting.png'
import ghost from '../../img/type_ghost.png'
import ground from '../../img/type_ground.png'
import ice from '../../img/type_ice.png'
import psychic from '../../img/type_psychic.png'
import rock from '../../img/type_rock.png'
import steel from '../../img/type_steel.png'

export const renderType = (pokeType) => {
  switch(pokeType) {
    case "grass":
      return <img src={grass} alt="grass" />
      break
    case "poison":
      return <img src={poison} alt="poison" />
      break
    case "fire":
      return <img src={fire} alt="fire" />
      break
    case "flying":
      return <img src={flying} alt="flying" />
      break
    case "water":
      return <img src={water} alt="water" />
      break
    case "bug":
      return <img src={bug} alt="bug" />
      break
    case "normal":
      return <img src={normal} alt="normal" />
      break
    case "dark":
      return <img src={dark} alt="dark" />
      break
    case "dragon":
      return <img src={dragon} alt="dragon" />
      break
    case "electric":
      return <img src={electric} alt="electric" />
      break
    case "fairy":
      return <img src={fairy} alt="fairy" />
      break
    case "fighting":
      return <img src={fighting} alt="fighting" />
      break
    case "ghost":
      return <img src={ghost} alt="ghost" />
      break
    case "ground":
      return <img src={ground} alt="ground" />
      break
    case "ice":
      return <img src={ice} alt="ice" />
      break
    case "psychic":
      return <img src={psychic} alt="psychic" />
      break
    case "rock":
      return <img src={rock} alt="rock" />
      break
    case "steel":
      return <img src={steel} alt="steel" />
      break
  }
}