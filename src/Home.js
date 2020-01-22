import React from 'react';
import styled from 'styled-components';
import CardItemImg from "./components/CardItemImg";
import CardGroup from "react-bootstrap/CardGroup";
import CardDeck from "react-bootstrap/CardDeck";
import CardColumns from "react-bootstrap/CardColumns";

const GridWrapper = styled.div`
  display: grid;
  grid-gap: 10px;
  margin-top: 1em;
  margin-left: 17em;
  margin-right: 6em;
  grid-template-columns: repeat(12, 1fr);
  grid-auto-rows: minmax(25px, auto);
`;
export const Home = (props) => (
  <GridWrapper>
        <CardDeck>
                  <CardItemImg source={"../happy_human_1.png"} title={"Ведущий разработчик"} />
                  <CardItemImg source={"../happy_human_1.png"} title={"Ведущий разработчик"} />
                  <CardItemImg source={"../happy_human_1.png"} title={"Ведущий разработчик"} />
                  <CardItemImg source={"../happy_human_1.png"} title={"Ведущий разработчик"} />
                  <CardItemImg source={"../happy_human_1.png"} title={"Ведущий разработчик"} />
                  <CardItemImg source={"../happy_human_1.png"} title={"Ведущий разработчик"} />
                  <CardItemImg source={"../happy_human_1.png"} title={"Ведущий разработчик"} />
        </CardDeck>
  </GridWrapper>
)
