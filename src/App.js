import React from 'react';
import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { NavigationBar } from './components/NavigationBar';
import { Home } from './Home';
import { About } from './About';
import { NoMatch } from './NoMatch';
import ListServices from "./components/ListServices";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import CardItem from "./CardItem";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import CardItemImg from "./components/CardItemImg";
import CardDeck from "react-bootstrap/CardDeck";

const StyledApp = styled.div`   
    padding: 10px;
`;


class App extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
    /* <React.Fragment>
      <Router>
        <NavigationBar />

        <ListServices />

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route component={NoMatch} />
        </Switch>
      </Router>
    </React.Fragment> */
    <StyledApp>
        <Container fluid={true}>
          <Row>
            <Col md={'2'}><CardItem title={'1'} /></Col>
            <Col md={'4'}><CardItem title={'2'} /></Col>
            <Col md={'6'}><CardItem title={'3'} /></Col>
          </Row>
          <br />
          <Row>
            <Col md={4} noGutters={true}>
              <CardItem title={'4'} text={
              'Создание сайтов под ключ\n' +
            '                  Как мы работаем\n' +
            '                  Интеграция с 1C\n' +
            '                  Поддержка сайтов\n' +
            '                  Создание сайтов на Битрикс\n' +
            '                  Модули Битрикс\n' +
            '                  Купить Битрикс\n' +
            '                  Дизайн сайтов\n' +
            '                  Редизайн сайтов\n' +
            '                  Интернет-магазины\n' +
            '                  Поддержка сайтов'} /></Col>
            <Col xs={12} md={8}><CardItem title={'5'} text={'PSD файл с макетом. Макет разбит по слоям и сгруппированн по папкам: \n\n' +
                '- number - нумерация блоков (номера блоков верстать не нужно)\n' +
                '- text - текстовые блоки (шрифт Arial, размер 14 пикселей, межстрочное растояние 22 пикселя)\n' +
                '- head - шапка сайта\n' +
                '- content - контентная область, которая в свою очередь делится на left и center\n\n' +
                'Текстовое описание задания и требования'
            } />
            <br/>
            <CardDeck>
              <CardItemImg source={"../happy_human_1.png"} text={"Ведущий разработчик"} />
              <CardItemImg source={"../happy_human_1.png"} text={"Ведущий разработчик"} />
              <CardItemImg source={"../happy_human_1.png"} text={"Ведущий разработчик"} />
            </CardDeck>
            </Col>
          </Row>
          <Row>

          </Row>
        </Container>
    </StyledApp>
  );
  }
}

export default App;
