import React from 'react';
import Card from "react-bootstrap/Card";

export default class CardItemImg extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Card style={{ width: '12rem' }}>
                <Card.Img src={this.props.source} />
                    <Card.Body>
                        <Card.Text>
                      {this.props.text}
                    </Card.Text>
                    </Card.Body>
            </Card>
        );
    }
}
