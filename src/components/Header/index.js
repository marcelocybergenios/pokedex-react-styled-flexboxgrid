import React from "react";
import { Link } from "react-router-dom";
import { Grid, Row, Col } from "react-styled-flexboxgrid";

import "./styles.css";

export function Header({ pokemon }) {
  return pokemon ? (
    <Row className="header" around="xs">
      <Col className="headerLink" md={5}>
        <Link to="/">Pokédex</Link>
      </Col>

      <Col className="headerLink" md={5}>
        <Link to={`/pokemon/${pokemon.name}`}>{pokemon.name}</Link>
      </Col>
    </Row>
  ) : (
    <Row className="header" around="xs">
      <Col className="headerLink" value={10}>
        <Link to="/">Pokédex</Link>
      </Col>
    </Row>
  );
}
