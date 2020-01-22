import React from 'react';
import Card from "react-bootstrap/Card";

export default class CardItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Card bg={"dark" || this.props.backgroundColor} text="white">
                <Card.Body>
                  <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                      {this.props.text}
                    </Card.Text>
                </Card.Body>
            </Card>
        );
    }
}
