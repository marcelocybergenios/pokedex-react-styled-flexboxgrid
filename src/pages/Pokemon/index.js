import React from "react";
import styled from "styled-components";

import { Header } from "../../components/Header";
import { Text } from "../../core/components/Text";

import { typesColors } from "../../core/constants/typesColors";

import { Grid, Col, Row } from "react-styled-flexboxgrid";

import "./styles.css";

export function Pokemon() {
  let pokemon = {
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
  };

  return (
    <>
      <Header pokemon={pokemon} />
      <Grid className="content" fluid>
        <Row center="xs" around="xs">
          {/* Card */}
          <Col className="pokemonCard" xs={12} sm={10} md={8} lg={6}>
            <Row>
              {/* Pokemon picture */}
              <Col xs={7} sm={7} md={7} lg={8}>
                <Image
                  className="pokemonPicture"
                  src={pokemon.sprite}
                  alt={pokemon.name}
                />
              </Col>

              {/* Pokemon description */}
              <Col className="pokemonDesc" xs={5} sm={5} md={5} lg={4}>
                {/* Pokemon name */}
                <Col xs={12} md={10}>
                  <Text variant="lgNormal">
                    Name: <Text variant="lgBold">{pokemon.name}</Text>{" "}
                  </Text>
                </Col>

                {/* Pokemon types */}
                <Col xs={12} md={10}>
                  <Text variant="lgNormal">
                    Type(s):{" "}
                    {pokemon.types.length > 1 ? (
                      <Text
                        variant="lgBold"
                        color={typesColors[pokemon.types[0].type]}
                      >
                        {pokemon.types[0].type}

                        <Text variant="lgBold"> & </Text>

                        <Text
                          variant="lgBold"
                          color={typesColors[pokemon.types[1].type]}
                        >
                          {pokemon.types[1].type}
                        </Text>
                      </Text>
                    ) : (
                      <Text
                        variant="lgBold"
                        color={typesColors[pokemon.types[0].type]}
                      >
                        {pokemon.types[0].type}
                      </Text>
                    )}
                  </Text>
                </Col>
              </Col>
            </Row>
          </Col>
        </Row>
      </Grid>
    </>
  );
}

const Image = styled.img`
  width: 50%;
  margin: 0 auto;

  @media (max-width: 768px) {
    height: 100%;
  }
`;
