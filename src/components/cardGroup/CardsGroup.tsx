import React, { useState, useEffect } from "react";

import {
  Card,
  CardActionArea,
  CardContent,
  Typography,
  CardHeader,
  Avatar,
} from "@material-ui/core";

import styles from "styles/helpers.module.css";

const CardsGroup: React.FC = () => {
  const [cardsInfo, setCardsInfo] = useState<any>();

  useEffect(() => {
    setCardsInfo([
      {
        typoName: "Experience",
        cards: [
          {
            cardHeaderTitle: "Coimbra, Portugal",
            cardHeaderSubHeader: "Sep 2019 – Present",
            avatarSrc:
              "https://media-exp1.licdn.com/dms/image/C560BAQEN1B2ydpi3MA/company-logo_100_100/0?e=1597276800&v=beta&t=s4qDMuJqSD4mpps7og3HKeTZIIxWUrwHNAkLJ78YgxU",
            jobExperienceName: "Talkdesk",
            jobExperienceRole: "Software Engineer",
            jobExperienceDescription:
              "Used languages: Javascript, HTML, CSS and SASS. Frameworks and tools: React and Bootstrap. Used methodologies: Agile Scrum.",
          },
          {
            cardHeaderTitle: "Coimbra, Portugal",
            cardHeaderSubHeader: "Feb 2018 – Sep 2019",
            avatarSrc:
              "https://media-exp1.licdn.com/dms/image/C560BAQFV8vjYyS056Q/company-logo_100_100/0?e=1597276800&v=beta&t=4GDsad_khbHRiytAr8w3Yjmd4pCBtoQcPMKsCA3XEFY",
            jobExperienceName: "Critical Software",
            jobExperienceRole: "Front-End Developer",
            jobExperienceDescription:
              "Used languages: Javascript, Typescript, HTML, CSS and SASS. Frameworks and software: Angular and Bootstrap. Used methodologies: Agile Scrum.",
          },
          {
            cardHeaderTitle: "Coimbra, Portugal",
            cardHeaderSubHeader: "Feb 2017 – Dec 2017",
            avatarSrc:
              "https://lh3.googleusercontent.com/Or6OTm7XxKt_7l5lCbvpQHkYlJakmg4aO3P5yg8Y45lD-olZ4zJDt-b0P8ZQC5ZTKj8k",
            jobExperienceName: "Enso Origins",
            jobExperienceRole: "Software Developer",
            jobExperienceDescription:
              "Used languages: HTML, CSS, PHP, AJAX, Javascript and SQL. Frameworks and tools: JQuery, SVN, JIRA, OwnCloud, pgModeler, Eclipse IDE, pgAdmin and PostgreSQL. Used methodologies: Agile Scrum.",
          },
          {
            cardHeaderTitle: "Coimbra, Portugal",
            cardHeaderSubHeader: "Feb 2017 – Jun 2017",
            avatarSrc:
              "https://lh3.googleusercontent.com/Or6OTm7XxKt_7l5lCbvpQHkYlJakmg4aO3P5yg8Y45lD-olZ4zJDt-b0P8ZQC5ZTKj8k",
            jobExperienceName: "Enso Origins",
            jobExperienceRole: "Intern",
            jobExperienceDescription:
              "Used languages: HTML, CSS, PHP, AJAX, Javascript and SQL. Frameworks and tools: JQuery, SVN, JIRA, OwnCloud, pgModeler, Eclipse IDE, pgAdmin and PostgreSQL. Used methodologies: Agile Scrum.",
          },
        ],
      },
      {
        typoName: "Education",
        cards: [
          {
            cardHeaderTitle: "Coimbra, Portugal",
            cardHeaderSubHeader: "2017 - 2019",
            avatarSrc:
              "https://media-exp1.licdn.com/dms/image/C4D0BAQEFz7OVaS1YTg/company-logo_200_200/0?e=2159024400&v=beta&t=yDsqX3a_MQreDmc_ho96o-o0yJ448Bk6r0TywpHztAo",
            jobExperienceName: "Instituto Superior de Engenharia de Coimbra",
            jobExperienceRole:
              "Master Degree in Informatics and Systems Software development",
            jobExperienceDescription: "(Imcomplete)",
          },
          {
            cardHeaderTitle: "Coimbra, Portugal",
            cardHeaderSubHeader: "2014 - 2017",
            avatarSrc:
              "https://media-exp1.licdn.com/dms/image/C4D0BAQEFz7OVaS1YTg/company-logo_200_200/0?e=2159024400&v=beta&t=yDsqX3a_MQreDmc_ho96o-o0yJ448Bk6r0TywpHztAo",
            jobExperienceName: "Instituto Superior de Engenharia de Coimbra",
            jobExperienceRole:
              "Degree in Computer Engineering Information Systems",
            jobExperienceDescription: "Average: 13",
          },
        ],
      },
      {
        typoName: "Certifications",
        cards: [
          {
            cardHeaderTitle: "Coimbra, Portugal",
            cardHeaderSubHeader: "30h",
            avatarSrc:
              "https://media-exp1.licdn.com/dms/image/C560BAQFV8vjYyS056Q/company-logo_100_100/0?e=1597276800&v=beta&t=4GDsad_khbHRiytAr8w3Yjmd4pCBtoQcPMKsCA3XEFY",

            jobExperienceName: "",
            jobExperienceRole: "Critical Software / International House",
            jobExperienceDescription: "C1 – Advanced – CEFRC1 (English course)",
          },
          {
            cardHeaderTitle: "Coimbra, Portugal",
            cardHeaderSubHeader: "8h",
            avatarSrc:
              "https://pbs.twimg.com/profile_images/959821050086346752/AKXvSFpx.jpg",

            jobExperienceName: "",
            jobExperienceRole: "JNation",
            jobExperienceDescription:
              "JNation is an inclusive developer conference embracing Java and JavaScript, two of the most popular programming languages in the world.",
          },
        ],
      },
    ]);
  }, []);

  return cardsInfo
    ? cardsInfo.map((cardInfo: any) => {
        return (
          <>
            <div className={styles.MarginBottom6P}></div>
            <Typography
              gutterBottom
              variant="h6"
              component="h2"
              className={`${styles.BackgroundColorECECEC} ${styles.BorderRadius4Px} ${styles.PaddingLeft2P}`}
            >
              {cardInfo.typoName}
            </Typography>
            <p></p>
            {cardInfo.cards &&
              cardInfo.cards.map((card: any) => {
                return (
                  <>
                    <Card>
                      <CardActionArea>
                        <CardHeader
                          avatar={<Avatar src={card.avatarSrc}></Avatar>}
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
                    <p></p>
                  </>
                );
              })}
          </>
        );
      })
    : null;
};

export default CardsGroup;
