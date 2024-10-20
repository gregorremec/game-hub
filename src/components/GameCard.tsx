import { Card, CardBody, Heading, HStack, Image } from "@chakra-ui/react";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import GameCardContainer from "./GameCardContainer";
import { Link } from "react-router-dom";
import { Game } from "../entities/Game";

interface GameCardProps {
  game: Game;
}

const GameCard = ({ game }: GameCardProps) => {
  return (
    <GameCardContainer>
      <Card>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <Link to={"/games/" + game.slug}>
          <CardBody>
            <HStack justifyContent="space-between" marginBottom={3}>
              <PlatformIconList
                platforms={game.parent_platforms.map((p) => p.platform)}
              ></PlatformIconList>
              <CriticScore score={game.metacritic}></CriticScore>
            </HStack>
            <Heading fontSize="2xl">{game.name}</Heading>
          </CardBody>
        </Link>
      </Card>
    </GameCardContainer>
  );
};

export default GameCard;
