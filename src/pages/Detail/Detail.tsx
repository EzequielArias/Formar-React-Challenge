import { useEffect } from "react"
import Navbar from "../../components/Navbar/Navbar"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { useParams } from "react-router-dom"
import { getClickedPokemon } from "../../redux/actionsThunk/pokemon"
import DetailCard from "../../components/CardDetail/DetailCard"
import { PokeDetail } from "../../interfaces"
const Detail = () => {

    const dispatch = useAppDispatch()
    const { id }  = useParams()

    const { name, images, abilities,weight,type, height } : PokeDetail = useAppSelector((state) => state.pokemons.pokemonDetail)
    
    useEffect(() => {
        dispatch(getClickedPokemon(Number(id)))
    },[])

  return (
    <>
        <Navbar/>
        <DetailCard
        name={name}
        images={images}
        abilities={abilities}
        weight={weight}
        height={height}
        type={type}
        />
    </>
  )
}

export default Detail