import React from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Col,Button } from 'reactstrap';

const Buffet = (props) => {
  return (
    <Col sm="10">
        <Card>
            <CardImg top style={{width:100+'%'}} src="https://firebasestorage.googleapis.com/v0/b/newproject-6d1f4.appspot.com/o/royal%2Fpirinc-haslama.jpeg?alt=media&token=d9d152e5-ec3f-49ba-991f-d639068f1307" alt="Kebap-Karisik" />
            <CardBody>
            <CardTitle>ZALLHUUR SERVICES</CardTitle>
            <CardSubtitle>Zaalhuur Services</CardSubtitle>
            <CardText>Please click to see more details and the menus.</CardText>
            <Button color="primary" onClick={() => props.history.replace('/zaalhuur')}>Zaalhuur Services</Button>
            </CardBody>
        </Card>
    </Col>
  );
};

export default Buffet;