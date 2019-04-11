import React from 'react';
import PropTypes from 'prop-types';
import {Table} from 'reactstrap';
import ReactToExcel from 'react-html-table-to-excel';


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
            <tr key={key}>
                <td>{count}</td>
                <td>{menuItem.name}</td>
                <td><button className="btn-sm float-right" onClick={() => this.props.deleteOrder(key)}>&times;</button></td>
            </tr>
        )
    }
    render(){
        const orderIds = Object.keys(this.props.order);
        return(
            <div className="order-wrap">
                <h2>Arrangement</h2>
                <Table id="order_table">
                    <thead>
                        <tr>
                            <th>Amount</th>
                            <th>Product</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {orderIds.map(this.renderOrder)}
                    </tbody>
                </Table>
                <ReactToExcel
                className="btn btn-sm btn-outline-primary float-right"
                table="order_table"
                filename="arrangement"
                sheet="sheet 1"
                buttonText="Download"

                />
            </div>
        )
    }
}

export default Order;