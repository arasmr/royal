import React from 'react';
import PropTypes from 'prop-types';
import {Row,Col} from 'reactstrap';

class EditMenuForm extends React.Component {

    static propTypes = {
        menuItem : PropTypes.shape({
            image : PropTypes.string,
            name : PropTypes.string,
            category : PropTypes.string,
            desc : PropTypes.string,
            type : PropTypes.string,
        }),
        index : PropTypes.string,
        deleteMenuItem : PropTypes.func,
        updateMenuItem : PropTypes.func,
    }
    handleChange = (event) => {
        // update that menuItem
        // Take the copy of the current menuItem
        const updatedFish = {
            ...this.props.menuItem,
            [event.currentTarget.name] : event.currentTarget.value
        };
        this.props.updateMenuItem(this.props.index,updatedFish);
    }

    handlePicture = (e) => {
        this.setState({});
    }

    render() {
        return (
            <div className="menu-edit">
                <Row style={{width:"100%",textAlign:'center'}}>
                    <Col style={{border:'1px solid black',textAlign:'center'}}>
                        <img
                            style={{width:'100%', height:'250px', marginLeft:'2%'}}
                            src={this.props.menuItem.image} alt="selected"
                        />
                        <input 
                            style={{width:'100%',border:'none'}}
                            type="file" 
                            onChange={(e) => this.props.handlePicture(e ,this.props.index)} 
                        />
                    </Col>
                    <Col style={{margin:'1%'}}>
                        <input 
                            style={{width:'100%',border:'1px solid black'}}
                            type="text" 
                            name = "name" 
                            onChange = {this.handleChange} 
                            value = {this.props.menuItem.name}
                        />
                        <select
                            style={{width:'100%',border:'1px solid black'}}
                            type="text" 
                            name = "category" 
                            placeholder="category"
                            onChange={this.handleChange} 
                        >
                            <option style={{width:'100%'}} value="Bruiloften">Bruiloften</option>
                            <option style={{width:'100%'}} value="Zaalhuur Services">Zaalhuur Services</option>
                        </select>
                        <select 
                            style={{width:'100%',border:'1px solid black'}}
                            type="text" 
                            name = "type" 
                            onChange = {this.handleChange} 
                            value= {this.props.menuItem.type}
                        >
                            <option style={{width:'100%'}} value="Soup">Soup</option>
                            <option style={{width:'100%'}} value="Koud Voorgerechten">Koud Voorgerechten</option>
                            <option style={{width:'100%'}} value="Warm Voorgerechten">Warm Voorgerechten</option> 
                            <option style={{width:'100%'}} value="Hoofdgerechten">Hoofdgerechten</option>
                            <option style={{width:'100%'}} value="Salades">Salades</option>
                            <option style={{width:'100%'}} value="Nagerechten">Nagerechten</option>
                            <option style={{width:'100%'}} value="Cake">Cake-Bruidstaart</option>
                            <option style={{width:'100%'}} value="Drinks">Drinks-Dranks</option>
                            <option style={{width:'100%'}} value="Koekies">Koekies</option>
                            <option style={{width:'100%'}} value="Services">Services</option>
                            <option style={{width:'100%'}} value="Other">Other</option>
                        </select>
                    </Col>
                </Row>
                <Row style={{margin:'1%',width:'100%'}}>
                    <textarea 
                        style={{width:'100%',border:'1px solid black'}}
                        type="text" 
                        name = "desc" 
                        onChange = {this.handleChange} 
                        value = {this.props.menuItem.desc}
                    />
                </Row>
                <button onClick={() => {this.props.deleteMenuItem(this.props.index)}}>Remove Menu Item</button>
            </div>
        )
    }
}

export default EditMenuForm;