import React from 'react';
import {formatPrice} from '../helpers';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';


class Order extends React.Component{
    static propTypes = {
        menuItems : PropTypes.object,
        order : PropTypes.object,
        deleteOrder : PropTypes.func,
    }

    renderOrder = key => {
        const menuItem = this.props.menuItems[key];
        const count = this.props.order[key];
        if(!menuItem) return null;
        return (
            <CSSTransition classNames="order" key={key} timeout={{enter:500,exit:500}}>
                <li key={key}>
                    <span>
                        <TransitionGroup component="span" className="count">
                            <CSSTransition 
                                classNames="count" 
                                key={count} 
                                timeout={{enter:500,exit:500}}
                                >
                                <span>{count}</span> 
                            </CSSTransition>
                        </TransitionGroup>
                        {menuItem.name}
                        {formatPrice(count * menuItem.price)}
                        <button onClick={() => this.props.deleteOrder(key)}>&times;</button>
                    </span>
                </li>
            </CSSTransition>
        )
    }
    render(){

        const orderIds = Object.keys(this.props.order);
        const total = orderIds.reduce((prevTotal, key) => {
            const menuItem = this.props.menuItems[key];
            const count = this.props.order[key];
            const isAvailable = menuItem;
            if(isAvailable) {
                return prevTotal + (count * menuItem.price);
            }
            return prevTotal;
        }, 0);
        return(
            <div className="order-wrap">
            <h2>Order</h2>
            <TransitionGroup component = "ul" className="order">
                {orderIds.map(this.renderOrder)}
            </TransitionGroup>
            <div className="total">
            <hr/>
            Total:
            <strong>{formatPrice(total)}</strong>
            </div>
            </div>
        )
    }
}

export default Order;