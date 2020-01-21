import React from 'react';
import ListGroup from "react-bootstrap/ListGroup";
import styled from "styled-components";

const StyledListServices = styled.div`   
    position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */
    height: 100%;
    width: 250px;     /* Set the width of the sidebar */
    z-index: 1;      /* Stay on top of everything */
    top: 3.8em;      /* 3.7 в случае с другим цветом */
    background-color: #FFF; /* Black */
    overflow-x: hidden;     /* Disable horizontal scroll */
    padding-top: 10px;
`;

export default class ListServices extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <StyledListServices>
                <ListGroup>
                  <ListGroup.Item>Создание сайтов "под ключ"</ListGroup.Item>
                  <ListGroup.Item>Как мы работаем</ListGroup.Item>
                  <ListGroup.Item>Интеграция с 1C</ListGroup.Item>
                  <ListGroup.Item>Поддержка сайтов</ListGroup.Item>
                  <ListGroup.Item>Создание сайтов на Битрикс</ListGroup.Item>
                  <ListGroup.Item>Модули Битрикс</ListGroup.Item>
                  <ListGroup.Item>Купить Битрикс</ListGroup.Item>
                  <ListGroup.Item>Дизайн сайтов</ListGroup.Item>
                  <ListGroup.Item>Редизайн сайтов</ListGroup.Item>
                  <ListGroup.Item>Интернет-магазины</ListGroup.Item>
                  <ListGroup.Item>Поддержка сайтов</ListGroup.Item>
                </ListGroup>
            </StyledListServices>
        );
    }
}
