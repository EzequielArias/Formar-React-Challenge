import {
  Navigation,
  SearchInput,
  AbilitiesInput,
  DumpPokemons,
  DumpContainer,
  BarsContainter,
  Img
} from "./styled-components/Navbar";
import { FaBars } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useState } from "react";
import {
  filterAbilities,
  removePokemons,
} from "../../redux/reducers/pokemonSlice";
import { searchByInput } from "../../redux/actionsThunk/pokemon";
import { Link } from "react-router-dom";
import pokeLogo from "../../assets/pokeball2.png";

const Navbar = () => {
  const [options, setOptions] = useState<String>("");
  const [search, setSearch] = useState<string>("");

  const dispatch = useAppDispatch();

  const HandleSelect = (e: any) => {
    e.preventDefault();
    setOptions(e.target.value);
  };

  const filterByInput = (e: any) =>
    e.keyCode === 13 ? dispatch(filterAbilities(options)) : "";

  const pokeInput = (e: any) => {
    e.preventDefault();
    setSearch(e.target.value);
  };

  const searchPoke = (e: any) => {
    if (e.keyCode === 13) {
      dispatch(searchByInput(search));
    }
  };

  const clenPokemons = () => {
    dispatch(removePokemons());
  };

  const pokemonsDump = useAppSelector((state) => state.pokemons.pokemonToDump)

  return (
    <>
      <Navigation>
        <Link
          to={"/home"}
          style={{
            width: "50%",
            fontSize: "2.5em",
            textDecoration: "none",
            color: "black",
          }}
        >
          <Img src={pokeLogo} />
        </Link>
        <AbilitiesInput onChange={HandleSelect} onKeyDown={filterByInput} />
        <SearchInput onKeyDown={searchPoke} onChange={pokeInput} />
        <BarsContainter>
          <FaBars />
        </BarsContainter>
      </Navigation>
      <DumpContainer>
        <DumpPokemons 
        onClick={clenPokemons}
        style={pokemonsDump.length > 0 ? {display : ''} : {display : 'none'}} 
        >Borrar pokemons</DumpPokemons>
      </DumpContainer>
    </>
  );
};

export default Navbar;
