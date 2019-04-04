import React from 'react';
import AddFishForm from './AddMenuForm';
import EditMenuForm from './EditMenuForm';


class Settings extends React.Component{

    render(){
        return(
            <div className="inventory">
            <h2>Inventory</h2>
            {Object.keys(this.props.menuItems).map( key => 
            <EditMenuForm 
                key={key} 
                deleteMenuItem={this.props.deleteMenuItem}
                index={key}
                menuItem={this.props.menuItems[key]}
                updateMenuItem = {this.props.updateMenuItem}
                handlePicture = {this.props.handlePicture}
                />)}
            <AddFishForm 
                addMenuItem={this.props.addMenuItem}
                handlePicture = {this.props.handlePicture}               
            />
            <button onClick={this.props.loadSampleMenuItem}>Load Sample Menu Items</button>
            </div>
        )
    }
}
export default Settings;