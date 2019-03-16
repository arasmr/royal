import React from 'react';
import PropTypes from 'prop-types';

class EditMenuForm extends React.Component {

    static propTypes = {
        menuItem : PropTypes.shape({
            image : PropTypes.string,
            name : PropTypes.string,
            price : PropTypes.number,
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
            <input 
                style={{'float' :'left', 'width':'33%'}}
                type="text" 
                name = "name" 
                onChange = {this.handleChange} 
                value = {this.props.menuItem.name}
            />
            <input 
                style={{'float' :'left', 'width':'33%'}}
                type="text" 
                name = "price" 
                onChange = {this.handleChange} 
                value = {this.props.menuItem.price}
            />
            <select 
                style={{'float' :'left', 'width':'33%'}}
                type="text" 
                name = "type" 
                onChange = {this.handleChange} 
                value= {this.props.menuItem.type}
            >
                <option value="Voorgerechten">Voorgerechten</option>
                <option value="Hoofdgerechten">Hoofdgerechten</option>
                <option value="Nagerechten">Nagerechten</option>
            </select>
            <textarea 
                type="text" 
                name = "desc" 
                onChange = {this.handleChange} 
                value = {this.props.menuItem.desc}
            />
                <input 
                    style={{'float' :'left', 'width':'70%'}}
                    type="text" 
                    name = "image"
                    onChange = {(e) => this.handlePicture(e)}
                    value= {this.props.menuItem.image}
                />
                <input 
                    style={{'float' :'rigth', 'width':'30%'}}
                    type="file" 
                    onChange={(e) => this.props.handlePicture(e ,this.props.index)} 
                />
            <button onClick={() => {this.props.deleteMenuItem(this.props.index)}}>Remove Menu Item</button>
            </div>
        )
    }
}

export default EditMenuForm;