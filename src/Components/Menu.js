import React, { Component } from 'react';
import { Collapse, Button} from 'reactstrap';
import MenuItem from './MenuItem';

class Menu extends Component {

    state = { 
        voorgerechten : false,
        nagerechten : false,
        hoofdgerechten : false,
        voorgerechtenMenu : '',
        nagerechtenMenu : '',
        hoofdgerechtenMenu : ''
    };

    toggleVoorgerechten = () => {
        this.setState({ voorgerechten: !this.state.voorgerechten });
    }

    toggleNagerechten = () => {
        this.setState({ nagerechten: !this.state.nagerechten });
    }

    toggleHoofdgerechten = () => {
        this.setState({ hoofdgerechten: !this.state.hoofdgerechten });
    }

    render() {
        return (
            <div>
                <Button color="primary" onClick={this.toggleVoorgerechten} style={{ marginBottom: '1rem',width:100 + '%' }}>Voorgerechten</Button>
                <Collapse isOpen={this.state.voorgerechten}>
                    {Object.keys(this.props.menuItems).map((key) => 
                        <MenuItem
                            key={key} 
                            index = {key}
                            details={this.props.menuItems[key]} 
                            addToOrder={this.props.addToOrder}
                        />
                    )}
                </Collapse>
                <Button color="primary" onClick={this.toggleHoofdgerechten} style={{ marginBottom: '1rem',width:100 + '%' }}>Hoofdgerechten</Button>
                <Collapse isOpen={this.state.hoofdgerechten}>
                    {Object.keys(this.props.menuItems).map((key) => 
                        <MenuItem
                            key={key} 
                            index = {key}
                            details={this.props.menuItems[key]} 
                            addToOrder={this.props.addToOrder}
                        />
                    )}
                </Collapse>
                <Button color="primary" onClick={this.toggleNagerechten} style={{ marginBottom: '1rem',width:100 + '%' }}>Nagerechten</Button>
                <Collapse isOpen={this.state.nagerechten}>
                    {Object.keys(this.props.menuItems).map((key) => 
                        <MenuItem
                            key={key} 
                            index = {key}
                            details={this.props.menuItems[key]} 
                            addToOrder={this.props.addToOrder}
                        />
                    )}
                </Collapse>
            </div>
            );
        }
}

export default Menu;