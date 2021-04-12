import React, { useState, useEffect } from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardHeader,
  Avatar,
} from "@material-ui/core";
import { cardsSections } from "../../data/cards.json";
import { v4 as uuidv4 } from "uuid";

const CardsGroup: React.FC = () => {
  const [cardsInfo, setCardsInfo] = useState<any>();

  useEffect(() => {
    setCardsInfo(cardsSections);
  }, []);

  const renderAvatarElement = (avatarSrc: string) =>
    avatarSrc !== null ? <Avatar src={avatarSrc} /> : <></>;

  const renderJobDescription = (jobDescription: string) => (
    <p className="mb-3" key={uuidv4()}>
      {jobDescription}
    </p>
  );

  const renderLocation = ({ locationDate, locationMonths }: any) => (
    <>
      <span>{locationDate}</span>
      {locationMonths && (
        <>
          <span className="ml-2 mr-2">•</span>
          <span>{locationMonths}</span>
        </>
      )}
    </>
  );

  const renderCardInfo = (
    {
      avatarSrc,
      location,
      locationDate,
      locationMonths,
      jobExperienceName,
      jobExperienceRole,
      jobExperienceDescriptions,
    }: any,
    isCertifications: boolean
  ) => (
    <div key={uuidv4()}>
      <Card>
        <CardActionArea className="hover:bg-gray-200 focus:outline-none">
          <CardHeader
            avatar={renderAvatarElement(avatarSrc)}
            title={location}
            subheader={renderLocation({ locationDate, locationMonths })}
          />
          <CardContent>
            <Typography
              gutterBottom
              variant={isCertifications ? "subtitle1" : "h5"}
            >
              {jobExperienceName}
            </Typography>
            <Typography
              gutterBottom
              variant={isCertifications ? "subtitle2" : "subtitle1"}
            >
              {jobExperienceRole}
            </Typography>
            <Typography variant="body2" color="textSecondary" component="div">
              {jobExperienceDescriptions?.map(renderJobDescription)}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
      <div className="mb-6"></div>
    </div>
  );

  const renderCardsSections = ({ typoName, cards, isCertifications }: any) => {
    return (
      <div key={uuidv4()}>
        <div className="mb-20"></div>
        <Typography
          gutterBottom
          variant="h6"
          component="h2"
          className="bg-gray-200 rounded pl-1"
        >
          {typoName}
        </Typography>
        <div className="mb-5"></div>
        {cards?.map((card: any) => renderCardInfo(card, isCertifications))}
      </div>
    );
  };

  return cardsInfo ? cardsInfo.map(renderCardsSections) : <></>;
};

export default CardsGroup;
