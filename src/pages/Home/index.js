import React from "react";
import { Link } from "react-router-dom";
import { List } from "../../core/components/List";
import { ListItem } from "../../core/components/ListItem";

import { useSelector } from "react-redux";
import { Header } from "../../components/Header";

import { Grid, Row, Col } from "react-styled-flexboxgrid";

import "./styles.css";

export function Home() {
  const pokemonList = useSelector((state) => state.pokemonList);

  return (
    <>
      <Header />
      <Grid fluid>
        <Row center="xs">
          <Col xs={12} sm={10} md={8} lg={6}>
            <List>
              {pokemonList.map((pokemon) => (
                <Link
                  to={{
                    pathname: `/pokemon/${pokemon.name}`,
                    state: {
                      pokemonName: pokemon.name,
                    },
                  }}
                  key={pokemon.id}
                >
                  <ListItem pokemon={pokemon} />
                </Link>
              ))}
            </List>
          </Col>
        </Row>
      </Grid>
    </>
  );
}
