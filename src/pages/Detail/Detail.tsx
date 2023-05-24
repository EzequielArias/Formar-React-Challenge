import { useEffect } from "react"
import Navbar from "../../components/Navbar/Navbar"
import { useAppDispatch, useAppSelector } from "../../redux/hooks"
import { useParams } from "react-router-dom"
import { getClickedPokemon } from "../../redux/actionsThunk/pokemon"
import DetailCard from "../../components/CardDetail/DetailCard"

const Detail = () => {

    const dispatch = useAppDispatch()
    const { id }  = useParams()

    useEffect(() => {
        dispatch(getClickedPokemon(Number(id)))
    },[])


  return (
    <>
        <Navbar/>
        <DetailCard/>
    </>
  )
}

export default Detail