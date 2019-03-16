import React from 'react';
import { Card, CardBody, CardImg,CardTitle,CardSubtitle,CardText,Button } from 'reactstrap';
import { formatPrice } from '../../helpers';

class BuffetMenuItem extends React.Component{
    render(){
        const { image, name , price, desc} = this.props.details;
        return (
            <Card className="buffet-item">
                <CardImg top  style={{minHeight:"230px",width:"100%"}} src={image} alt={name} />
                <CardBody>
                <CardTitle style={{height:"50px"}} >{name}</CardTitle>
                <CardSubtitle className="price">{formatPrice(price)}</CardSubtitle>
                <CardText className="buffet-menu-item-text">{desc}</CardText>
                <Button style={{float:'right'}}onClick={() => this.props.addToOrder(this.props.index)}>Add To Cart</Button>
                </CardBody>
            </Card>
        );
    }
};

export default BuffetMenuItem;