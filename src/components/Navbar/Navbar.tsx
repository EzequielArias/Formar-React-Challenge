import {
  Navigation,
  SearchInput,
  AbilitiesInput,
  DumpPokemons,
  DumpContainer,
  BarsContainter,
  Img,
  SearchResult,
} from "./styled-components/Navbar";
import { FaBars } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useState } from "react";
import {
  filterAbilities,
  removePokemons,
} from "../../redux/reducers/pokemonSlice";
import { searchByInput, getAllPokemons } from "../../redux/actionsThunk/pokemon";
import { Link } from "react-router-dom";
import pokeLogo from "../../assets/pokeball2.png";

const Navbar = () => {
  const [options, setOptions] = useState<String>("");
  const [search, setSearch] = useState<{ query: string; isActive: boolean }>({
    query: "",
    isActive: false,
  });

  const dispatch = useAppDispatch();

  const HandleSelect = (e: any) => {
    e.preventDefault();
    setOptions(e.target.value);
  };

  const filterByInput = (e: any) =>
    e.keyCode === 13 ? dispatch(filterAbilities(options)) : "";

  const pokeInput = (e: any) => {
    e.preventDefault();
    setSearch((current) => {
      return {
        ...current,
        query: e.target.value,
      };
    });
  };

  const searchPoke = (e: any) => {
    if (e.keyCode === 13) {
      dispatch(searchByInput(search.query));
      setSearch((current) => {
        return {
          ...current,
          isActive: true,
        };
      });
    }
  };

  const HandleSearch = () => {
    setSearch(() =>{ return {query : "", isActive : false}})
    dispatch(getAllPokemons())
  }

  const clenPokemons = () => {
    dispatch(removePokemons());
  };

  const { pokemonsToDump, pokemons } = useAppSelector((state) => {
    return {
      pokemonsToDump: state.pokemons.pokemonToDump,
      pokemons: state.pokemons.pokemons,
    };
  });

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
        <SearchResult
        onClick={HandleSearch}
          style={search.isActive ? { display: "" } : { display: "none" }}
        >
          Pokemons encontrados : {pokemons.length}
        </SearchResult>
        <DumpPokemons
          onClick={clenPokemons}
          style={
            pokemonsToDump.length > 0 ? { display: "" } : { display: "none" }
          }
        >
          Borrar pokemons
        </DumpPokemons>
      </DumpContainer>
    </>
  );
};

export default Navbar;
