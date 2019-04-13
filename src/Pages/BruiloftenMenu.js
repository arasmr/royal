import React from 'react';
import { Container } from 'reactstrap';
import BruiloftenMenuItem from '../Components/BruiloftenMenu/BruiloftenMenuItem';
import base from '../base';
import PropTypes from 'prop-types';
import NavigationBar from '../Components/Dashboard/NavigationBar';

class BruiloftenMenu extends React.Component{

    state = {
        menuItems:{},
        order:{},
        activeTab:'1'
    }

    static propTypes = {
        match : PropTypes.object,
    };

    toggle = (tab) => {
		if (this.state.activeTab !== tab) {
		  this.setState({
			activeTab: tab
		  });
		}
	}

    componentDidMount() {
        const {params} = this.props.match;
        const localStorageRef = localStorage.getItem(params);
        if(localStorageRef){
            this.setState({order:JSON.parse(localStorageRef)})
        }
        this.ref = base.syncState(`${params.storeId}/menuItems`,{
            context:this,
            state:'menuItems'
        });
    }

    componentDidUpdate() {
        localStorage.setItem(this.props.match.params, JSON.stringify(this.state.order));
    }

    componentWillUnmount() {
        base.removeBinding(this.ref);
    }

    updateMenuItem = (key, updatedMenuItem) => {
        // take the copy of the current state
        const menuItems = {...this.state.menuItems};
        // update that state
        menuItems[key] = updatedMenuItem;
        // set the new menuItems object to the state
        this.setState({menuItems});

    }

    deleteMenuItem = (key) => {
        // take the copy of state
        const menuItems = {...this.state.menuItems};
        // update the state
        menuItems[key] = null;
        // set the state
        this.setState({menuItems});
    }

    deleteOrder = (key) => {
        // take the copy of state
        const order = {...this.state.order};
        // update the state
        delete order[key];
        // set the state
        this.setState({order});
    }

    addMenuItem = menuItem => {
        // take the copy of current state
        const menuItems = {...this.state.menuItems};
        // get the new state
        menuItems[`menuItem${Date.now()}`] = menuItem;
        // set the new state
        this.setState({
            menuItems:menuItems,
        })
    }

    addToOrder = key => {
        // take the copy of state
        const order = {...this.state.order};
        // change or update the state
        order[key] = order[key] + 1 || 1;
        // set the state
        this.setState({order:order});
    }

    render(){
        return (
            <div className="dashboard">
                <div className="navigation-bar">
                    <NavigationBar
                        history={this.props.history}
                        addMenuItem={this.addMenuItem}
                        deleteMenuItem = {this.deleteMenuItem} 
                        updateMenuItem = {this.updateMenuItem}
                        loadSampleMenuItem={this.loadSampleMenuItem}
                        menuItems ={this.state.menuItems}
                        handlePicture = {this.handlePicture}
                        order={this.state.order}
                        deleteOrder={this.deleteOrder}
                    />
                </div>
                <h2>Soup</h2>
                <hr/>
                <div className="buffet-container">
                    <Container className="buffet-menu">
                        {Object.keys(this.state.menuItems).map((key) => 
                            this.state.menuItems[key].type === 'Soup' ? 
                            <BruiloftenMenuItem
                                key={key} 
                                index = {key}
                                details={this.state.menuItems[key]} 
                                addToOrder={this.addToOrder}
                            /> : null
                        )}    
                    </Container>
                </div>
                <h2>Koud Voorgerechten</h2>
                <hr/>
                <div className="buffet-container">
                    <Container className="buffet-menu">
                        {Object.keys(this.state.menuItems).map((key) => 
                            this.state.menuItems[key].type === 'Koud Voorgerechten' ? 
                            <BruiloftenMenuItem
                                key={key} 
                                index = {key}
                                details={this.state.menuItems[key]} 
                                addToOrder={this.addToOrder}
                            /> : null
                        )}    
                    </Container>
                </div>
                <h2>Warm Voorgerechten</h2> 
                <hr/>
                <div className="buffet-container">
                    <Container className="buffet-menu">
                        {Object.keys(this.state.menuItems).map((key) => 
                            this.state.menuItems[key].type === 'Warm Voorgerechten' ? 
                            <BruiloftenMenuItem
                                key={key} 
                                index = {key}
                                details={this.state.menuItems[key]} 
                                addToOrder={this.addToOrder}
                            /> : null
                        )}    
                    </Container>
                </div>
                <h2>Hoofdgerechten</h2>
                <hr/>
                <div className="buffet-container">
                    <Container className="buffet-menu">
                        {Object.keys(this.state.menuItems).map((key) => 
                            this.state.menuItems[key].type === 'Hoofdgerechten' ? 
                            <BruiloftenMenuItem
                                key={key} 
                                index = {key}
                                details={this.state.menuItems[key]} 
                                addToOrder={this.addToOrder}
                            /> : null
                        )}    
                    </Container>
                </div>
                <h2>Salades</h2>
                <hr/>
                <div className="buffet-container">
                    <Container className="buffet-menu">
                        {Object.keys(this.state.menuItems).map((key) => 
                            this.state.menuItems[key].type === 'Salades' ? 
                            <BruiloftenMenuItem
                                key={key} 
                                index = {key}
                                details={this.state.menuItems[key]} 
                                addToOrder={this.addToOrder}
                            /> : null
                        )}    
                    </Container>
                </div>
                <h2>Nagerechten</h2>
                <hr/>
                <div className="buffet-container">
                    <Container className="buffet-menu">
                        {Object.keys(this.state.menuItems).map((key) => 
                            this.state.menuItems[key].type === 'Nagerechten' ? 
                            <BruiloftenMenuItem
                                key={key} 
                                index = {key}
                                details={this.state.menuItems[key]} 
                                addToOrder={this.addToOrder}
                            /> : null
                        )}    
                    </Container>
                </div>
                <h2>Cake-Bruidstaart</h2>
                <hr/>
                <div className="buffet-container">
                    <Container className="buffet-menu">
                        {Object.keys(this.state.menuItems).map((key) => 
                            this.state.menuItems[key].type === 'Cake' ? 
                            <BruiloftenMenuItem
                                key={key} 
                                index = {key}
                                details={this.state.menuItems[key]} 
                                addToOrder={this.addToOrder}
                            /> : null
                        )}    
                    </Container>
                </div>
                <h2>Drinks-Dranks</h2>
                <hr/>
                <div className="buffet-container">
                    <Container className="buffet-menu">
                        {Object.keys(this.state.menuItems).map((key) => 
                            this.state.menuItems[key].type === 'Drinks' ? 
                            <BruiloftenMenuItem
                                key={key} 
                                index = {key}
                                details={this.state.menuItems[key]} 
                                addToOrder={this.addToOrder}
                            /> : null
                        )}    
                    </Container>
                </div>
                <h2>Koekies</h2>
                <hr/>
                <div className="buffet-container">
                    <Container className="buffet-menu">
                        {Object.keys(this.state.menuItems).map((key) => 
                            this.state.menuItems[key].type === 'Koekies' ? 
                            <BruiloftenMenuItem
                                key={key} 
                                index = {key}
                                details={this.state.menuItems[key]} 
                                addToOrder={this.addToOrder}
                            /> : null
                        )}    
                    </Container>
                </div>
            </div>
        );
    }
};

export default BruiloftenMenu;