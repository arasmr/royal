import React from 'react';
import { formatPrice } from '../helpers';

class MenuItem extends React.Component {
    render () {
        const { image, name , price, desc} = this.props.details;
        return (
            <li className="menu-content">
                <img src={image} alt={name}/>
                <h3 className='menu-name'>
                {name}
                <span className='price'>{formatPrice(price)}</span>
                </h3>
                <p className="description">{desc}</p>
                <button style={{float:'right'}}onClick={() => this.props.addToOrder(this.props.index)}>Add To Cart</button>
            </li>
        )
    }
}

export default MenuItem;