import {
  Navigation,
  SearchInput,
  AbilitiesInput,
  DumpPokemons,
  DumpContainer,
  BarsContainter,
  Img,
  Img2,
  SearchResult,
  FilterByAbilities,
} from "./styled-components/Navbar";
import { FaBars } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import { useEffect, useState } from "react";
import {
  filterAbilities,
  removePokemons,
} from "../../redux/reducers/pokemonSlice";
import {
  searchByInput,
  getAllPokemons,
} from "../../redux/actionsThunk/pokemon";
import { Link, useLocation } from "react-router-dom";
import pokeLogo from "../../assets/pokeball2.png";
import PokemonTitleLogo from "../../assets/PokemonLogo.png";
import { isSearchActive, isSearchDown } from "../../redux/reducers/specialRendering";

const Navbar = () => {
  const [options, setOptions] = useState<{ query: string; isActive: boolean }>({
    query: "",
    isActive: false,
  });
  const [search, setSearch] = useState<{ query: string; isActive: boolean }>({
    query: "",
    isActive: false,
  });

  useEffect(() => {

  },[search.isActive])

  const location = useLocation();

  const dispatch = useAppDispatch();

  const HandleSelect = (e: any) => {
    e.preventDefault();
    setOptions((prev) => {
      return {
        ...prev,
        query: e.target.value,
      };
    });
  };

  const filterByInput = (e: any) => {
    if(e.keyCode === 13){
      dispatch(filterAbilities(options.query))
      setOptions((prev) => {
        return {
          ...prev,
          isActive: true,
        };
      });
    }
  };

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
      dispatch(isSearchActive());
      setOptions((prev) => {
        return {
          ...prev,
          isActive : false
        }
      })
    }
  };

  const HandleSearch = () => {
    setSearch(() => {
      return { query: "", isActive: false };
    });
    dispatch(getAllPokemons(0));
    dispatch(isSearchDown())
  };

  const cleanPokemons = () => {
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
      {location.pathname.includes('/home') ?(
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
          <DumpContainer
            style={
              pokemonsToDump.length !== 0 || search.isActive
                ? { display: "" }
                : { display: "none" }
            }
          >
            <SearchResult
              onClick={HandleSearch}
            >
              Pokemons encontrados : {pokemons.length}
            </SearchResult>
            <DumpPokemons
              onClick={cleanPokemons}
              style={
                pokemonsToDump.length > 0
                  ? { display: "" }
                  : { display: "none" }
              }
            >
              Borrar pokemons
            </DumpPokemons>
          </DumpContainer>
          {options.isActive ? (
            <FilterByAbilities style={options.query.length === 0 ? { display : "none"} : {display : "block"}}>
              Buscando por habilidad : {options.query}
            </FilterByAbilities>
          ) : (
            <></>
          )}
        </>
      ) : (
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
          <Img2 src={PokemonTitleLogo} />
        </Navigation>
      )}
    </>
  );
};

export default Navbar;
