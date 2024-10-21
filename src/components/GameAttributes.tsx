import { Game } from "../entities/Game";
import CriticScore from "./CriticScore";
import DefenitionItem from "./DefenitionItem";
import { SimpleGrid, Text } from "@chakra-ui/react";

interface Props {
  game: Game;
}

const GameAttributes = ({ game }: Props) => {
  return (
    <SimpleGrid columns={2} as="dl">
      <DefenitionItem term="Platforms">
        {game.parent_platforms?.map(({ platform }) => (
          <Text key={platform.id}>{platform.name}</Text>
        ))}
      </DefenitionItem>
      <DefenitionItem term="Metascore">
        <CriticScore score={game.metacritic ? game.metacritic : -1} />
      </DefenitionItem>
      <DefenitionItem term="Genres">
        {game.genres.map((g) => (
          <Text key={g.id}>{g.name}</Text>
        ))}
      </DefenitionItem>

      <DefenitionItem term="Publishers">
        {game.publishers?.map((p) => (
          <Text key={p.id}>{p.name}</Text>
        ))}
      </DefenitionItem>
    </SimpleGrid>
  );
};

export default GameAttributes;
