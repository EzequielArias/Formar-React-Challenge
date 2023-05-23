import pokeBall from '../../assets/pokeball2.png'
import { LoaderContainer, Loading, Pokeball, DotLoading,LitleContainer } from "./styled-components/Loader"

const Loader = () => {
  return (
    <LoaderContainer>
        <Pokeball src={pokeBall} alt=''/>
        <LitleContainer>
             <Loading>Cargando
             </Loading>
                <DotLoading>.....</DotLoading>
        </LitleContainer>
    </LoaderContainer>
  )
}

export default Loader