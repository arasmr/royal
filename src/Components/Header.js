import React from 'react';
import {Nav,Navbar, DropdownToggle, DropdownMenu, DropdownItem,UncontrolledDropdown } from 'reactstrap';
import {Icon} from 'react-icons-kit';
import {user} from 'react-icons-kit/icomoon/user';
import {signOut} from 'react-icons-kit/fa/signOut';
import firebase from 'firebase/app';
import InventoryModal from './InventoryModal';

class Header extends React.Component {

    state = {
        dropdownOpen: false,
    };

    handleLogout = () => {
        firebase.auth().signOut()
        .then(res=>this.props.history.replace('/login'));
    }
       
    render() {
        return(
            <Navbar color="light" light expand="md">
                    <Nav className="ml-auto" navbar>
                        <InventoryModal
                        addMenuItem={this.props.addMenuItem}
                        deleteMenuItem = {this.props.deleteMenuItem} 
                        updateMenuItem = {this.props.updateMenuItem}
                        loadSampleMenuItem={this.props.loadSampleMenuItem}
                        menuItems ={this.props.menuItems}
                        history={this.props.history}
                        />
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret>
                                <Icon size={25} icon={user}/>
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem onClick={this.handleLogout}>
                                    <Icon size={18} icon={signOut}/>
                                    <span style={{'marginLeft': 3 + '%'}}>Log out!</span>
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                    </Nav>
            </Navbar>
        )
    }
}

export default Header;