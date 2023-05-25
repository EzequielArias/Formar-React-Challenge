import {
  DetailPoke,
  DetailStats,
  DetailContainer,
  Pokemon_IMG,
  LeftArrow,
  RightArrow,
  PokemonName,
  PokemonStats,
  PokemonType
} from "./styled-components/DetailCard";
import { PokeDetail } from "../../interfaces";
import { useState, useEffect } from "react";
import Loader from "../Loader/Loader";
import { BsArrowLeftSquareFill, BsArrowRightSquareFill } from "react-icons/bs";
import { useParams } from "react-router-dom";

const DetailCard = ({ name, images, weight, abilities, type, height }: PokeDetail) => {
  const { id } = useParams()
  const [currentIMG, setCurrentIMG] = useState<{
    currentImage: number;
    images: String[];
  }>({
    currentImage: 0,
    images: [],
  });

  useEffect(() => {
    if (images) {
      let clean: String[] = images.filter((item: any) => item !== null);
      setCurrentIMG((current) => {
        return {
          ...current,
          images: clean,
        };
      });
    }

    return () => {};
  }, [images]);

  let imageAUX: any = currentIMG.images[currentIMG.currentImage];

  const handlePhotos = (direction: string) => {
    if (direction === "left") {
      setCurrentIMG((current) => {
        if (currentIMG.currentImage - 1 < 0) {
          return {
            ...current,
            currentImage: currentIMG.images.length - 1,
          };
        }
        // ######
        return {
          ...current,
          currentImage: currentIMG.currentImage - 1,
        };
      });
    }

    if (direction === "right") {
      setCurrentIMG((current) => {
        if (currentIMG.currentImage + 1 > currentIMG.images.length - 1) {
          return {
            ...current,
            currentImage: 0,
          };
        }

        return {
          ...current,
          currentImage: currentIMG.currentImage + 1,
        };
      });
    }
  };

  return (
    <>
      {images === undefined ? (
        <Loader />
      ) : (
        <>
          <DetailContainer>
            <DetailPoke>
              <LeftArrow onClick={() => handlePhotos("left")}>
                <BsArrowLeftSquareFill />
              </LeftArrow>
              <Pokemon_IMG src={imageAUX} />
              <RightArrow onClick={() => handlePhotos("right")}>
                <BsArrowRightSquareFill />
              </RightArrow>
            </DetailPoke>

            <DetailStats>
              <PokemonName>{name}</PokemonName>
              <PokemonType>{type} pokemon</PokemonType>

              <PokemonStats>Numero : {id} </PokemonStats>
              <PokemonStats>Altura : {height} M</PokemonStats>
              <PokemonStats>Peso : {weight} Kg</PokemonStats>
              <PokemonStats>Habilidades : {abilities.map((p : any) =>{ return (<span>{p}  </span>)})}</PokemonStats>

            </DetailStats>

          </DetailContainer>
        </>
      )}
    </>
  );
};

export default DetailCard;
