import { DetailPoke, DetailStats, DetailContainer, Pokemon_IMG } from "./styled-components/DetailCard"

const DetailCard = () => {
  return (
   <>
    <DetailContainer>
        <DetailPoke>
          <Pokemon_IMG />
        </DetailPoke>
        <DetailStats>
        DETAIL STATS
        </DetailStats>
    </DetailContainer>
   </>
  )
}

export default DetailCard