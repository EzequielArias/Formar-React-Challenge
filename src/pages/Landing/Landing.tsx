import { LandingContainer, PokeImg, LandingSection, PokemonSlogan, ContinueBtn } from './styled-components/Landing'
import Pikachu from '../../assets/Pikachu.png'

const Landing = () => {
  return (
    <LandingContainer>
        <LandingSection>
            <PokemonSlogan>Estas buscando un pokemon ?. Estas en el lugar indicado !</PokemonSlogan>
            <ContinueBtn to={'/home'}>Continuar</ContinueBtn>
        </LandingSection>
        <PokeImg src={Pikachu}/>
    </LandingContainer>
    )
}

export default Landing