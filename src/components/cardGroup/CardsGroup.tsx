import React, { useState, useEffect } from "react";

import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardHeader,
  Avatar,
} from "@material-ui/core";

import { cardsList } from "../../data/cardsList";

const CardsGroup: React.FC = () => {
  const [cardsInfo, setCardsInfo] = useState<any>();

  useEffect(() => {
    setCardsInfo(cardsList);
  }, []);

  const renderAvatarElement = (avatarSrc: string) => {
    if (avatarSrc !== null) {
      const src =  import(avatarSrc);

      return <Avatar src={src} />;
    }

    return <></>;
  };

  return cardsInfo
    ? cardsInfo.map((cardInfo: any, cardInfoIndex: number) => {
        return (
          <>
            <div className="mb-20"></div>
            <Typography
              gutterBottom
              variant="h6"
              component="h2"
              className="bg-gray-200 rounded pl-1"
              id={`${cardInfo.typoName}-${cardInfoIndex}`}
            >
              {cardInfo.typoName}
            </Typography>
            <div className="mb-5"></div>
            {cardInfo.cards &&
              cardInfo.cards.map((card: any, cardIndex: number) => {
                return (
                  <>
                    <Card id={`${cardInfo.typoName}-card-${cardIndex}`}>
                      <CardActionArea className="hover:bg-gray-200 focus:outline-none">
                        <CardHeader
                          avatar={renderAvatarElement(card.avatarSrc)}
                          title={card.cardHeaderTitle}
                          subheader={card.cardHeaderSubHeader}
                        />
                        <CardContent>
                          <Typography gutterBottom variant="h5" component="h2">
                            {card.jobExperienceName}
                          </Typography>
                          <Typography
                            gutterBottom
                            variant="subtitle1"
                            component="h2"
                          >
                            {card.jobExperienceRole}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="textSecondary"
                            component="p"
                          >
                            {card.jobExperienceDescription}
                          </Typography>
                        </CardContent>
                      </CardActionArea>
                    </Card>
                    <div className="mb-6"></div>
                  </>
                );
              })}
          </>
        );
      })
    : null;
};

export default CardsGroup;
