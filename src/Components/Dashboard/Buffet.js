import React from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Col,Button } from 'reactstrap';
import kebap from '../../assets/kebap.jpeg';

const Buffet = (props) => {
  return (
    <Col sm="10">
        <Card>
            <CardImg top style={{width:100+'%'}} src={kebap} alt="Kebap-Karisik" />
            <CardBody>
            <CardTitle>BUFFET</CardTitle>
            <CardSubtitle>Buffet Menu</CardSubtitle>
            <CardText>Please click to see more details and the menus.</CardText>
            <Button color="primary" onClick={() => props.history.replace('/buffet')}>Buffet</Button>
            </CardBody>
        </Card>
    </Col>
  );
};

export default Buffet;