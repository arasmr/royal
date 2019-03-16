import React from 'react';
import { Card, CardImg, CardText, CardBody,CardTitle, CardSubtitle, Col,Button } from 'reactstrap';

const Bruiloften = (props) => {
  return (
    <Col sm="10">
        <Card>
            <CardImg top style={{width:100+'%'}} src="https://firebasestorage.googleapis.com/v0/b/newproject-6d1f4.appspot.com/o/royal%2Fpirinc-haslama.jpeg?alt=media&token=d9d152e5-ec3f-49ba-991f-d639068f1307" alt="Et-Tavuk-Karisik" />
            <CardBody>
            <CardTitle>BRUILOFTEN</CardTitle>
            <CardSubtitle>Bruiloften Menu</CardSubtitle>
            <CardText>Please click to see more details and the menus.</CardText>
            <Button color="primary" onClick={() => props.history.replace('/bruiloften')}>Bruiloften</Button>
            </CardBody>
        </Card>
    </Col>
  );
};

export default Bruiloften;