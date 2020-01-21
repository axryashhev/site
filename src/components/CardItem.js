import React from 'react';
import Card from "react-bootstrap/Card";

export default class CardItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Card style={{ width: '103rem' }}>
                <Card.Img src={this.props.source} />
                    <Card.Body>
                        <Card.Title>{this.props.title}</Card.Title>
                    </Card.Body>
            </Card>
        );
    }
}
