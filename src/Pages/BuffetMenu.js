import React from 'react';
import { Container} from 'reactstrap';
import BuffetMenuItem from '../Components/BuffetMenu/BuffetMenuItem';
import base from '../base';
import PropTypes from 'prop-types';
import NavigationBar from '../Components/Dashboard/NavigationBar';

class BuffetMenu extends React.Component{
    state = {
        menuItems:{},
        order:{}
    }

    static propTypes = {
        match : PropTypes.object,
    };

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
                    <NavigationBar/>
                </div>
                <div className="buffet-container">
                    <Container className="buffet-menu">
                        {Object.keys(this.state.menuItems).map((key) => 
                            <BuffetMenuItem
                                key={key} 
                                index = {key}
                                details={this.state.menuItems[key]} 
                                addToOrder={this.addToOrder}
                            />
                        )}    
                    </Container>
                </div>
            </div>
        );
    }
};

export default BuffetMenu;