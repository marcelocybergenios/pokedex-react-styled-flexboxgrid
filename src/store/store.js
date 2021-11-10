import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
// import axios from "axios";
import "regenerator-runtime/runtime";

const sagaMiddleware = createSagaMiddleware();

let pokemonListHandHeld = [
  {
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    name: "Bulbasaur",
    types: [
      {
        type: "grass",
        slot: 1,
      },
      {
        type: "poison",
        slot: 2,
      },
    ],
  },
  {
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    name: "Ivysaur",
    types: [
      {
        type: "grass",
        slot: 1,
      },
      {
        type: "poison",
        slot: 2,
      },
    ],
  },
  {
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    name: "Venusaur",
    types: [
      {
        type: "grass",
        slot: 1,
      },
      {
        type: "poison",
        slot: 2,
      },
    ],
  },
  {
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    name: "Charmander",
    types: [
      {
        type: "fire",
        slot: 1,
      },
    ],
  },
  {
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    name: "Charmeleon",
    types: [
      {
        type: "fire",
        slot: 1,
      },
    ],
  },
  {
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    name: "Charizard",
    types: [
      {
        type: "fire",
        slot: 1,
      },
      {
        type: "flying",
        slot: 2,
      },
    ],
  },
  {
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    name: "Squirtle",
    types: [
      {
        type: "water",
        slot: 1,
      },
    ],
  },
  {
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    name: "Wartortle",
    types: [
      {
        type: "water",
        slot: 1,
      },
    ],
  },
  {
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    name: "Blastoise",
    types: [
      {
        type: "water",
        slot: 1,
      },
    ],
  },
  {
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    name: "Caterpie",
    types: [
      {
        type: "bug",
        slot: 1,
      },
    ],
  },
  {
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    name: "Metapod",
    types: [
      {
        type: "bug",
        slot: 1,
      },
    ],
  },
  {
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    name: "Butterfree",
    types: [
      {
        type: "bug",
        slot: 1,
      },
      {
        type: "flying",
        slot: 2,
      },
    ],
  },
  {
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
    name: "Weedle",
    types: [
      {
        type: "bug",
        slot: 1,
      },
      {
        type: "poison",
        slot: 2,
      },
    ],
  },
  {
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
    name: "Kakuna",
    types: [
      {
        type: "bug",
        slot: 1,
      },
      {
        type: "poison",
        slot: 2,
      },
    ],
  },
  {
    sprite:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
    name: "Beedrill",
    types: [
      {
        type: "bug",
        slot: 1,
      },
      {
        type: "poison",
        slot: 2,
      },
    ],
  },
];

// let pokemonList = [
//   {
//     sprite:
//       "https://cdn.icon-icons.com/icons2/2518/PNG/512/question_mark_icon_151137.png",
//     name: "Failed to load pokemons...",
//     types: [
//       {
//         type: "unknown",
//         slot: 1,
//       },
//     ],
//   },
// ];

// function getPokemonList() {
//   return axios
//     .get("https://pokeapi.co/api/v2/pokemon/?limit=151")
//     .then((response) => {
//       pokemonList = response.data.results;
//       return pokemonList;
//     })
//     .catch((error) => {
//       console.log(error);
//     });
// }

function reducer(state, action) {
  return {
    pokemonList: pokemonListHandHeld,
  };
}

export const store = createStore(reducer, applyMiddleware(sagaMiddleware));
