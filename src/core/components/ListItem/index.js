import React from "react";
import { ItemContainer, PokemonImage, TypeContainer } from "./styles";
import { Text } from "../Text";

import { typesColors } from "../../constants/typesColors";

export const ListItem = ({ pokemon }) => {
  return (
    <ItemContainer>
      <PokemonImage src={pokemon.sprite} alt={pokemon.id} />
      <Text variant="lgBold">{pokemon.name}</Text>

      <TypeContainer>
        {pokemon.types.map((t) => {
          let color = typesColors[t.type];

          return (
            <Text color={color} variant="mdNormal">
              {t.type}
            </Text>
          );
        })}
      </TypeContainer>
    </ItemContainer>
  );
};
