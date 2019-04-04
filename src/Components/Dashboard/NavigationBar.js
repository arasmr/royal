import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
 } from 'reactstrap';
import firebase from 'firebase/app';
import SettingsModal from '../Settings/SettingsModal';




export default class NavigationBar extends React.Component{

    state = {
        isOpen: false,
        logged_in:false
    }

    toggle = () => {
      this.setState({
        isOpen: !this.state.isOpen
      });
    }

    componentDidMount(){
        const token = localStorage.getItem('token')
        if(token !== null){
            this.setState({logged_in:true})
        }
    }

    handleLogout = () => {
        firebase.auth().signOut()
        .then(res => 
            {
                localStorage.removeItem('token')
                this.setState({logged_in:false})
            });
    }

    render(){
        return(
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Royal Catering</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="/components/">Party Rental</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/components/">Catering</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/contact">Contact</NavLink>
                        </NavItem>
                        <NavItem hidden={!this.state.logged_in}>
                            <SettingsModal
                                history={this.props.history}
                                addMenuItem={this.props.addMenuItem}
                                deleteMenuItem = {this.props.deleteMenuItem} 
                                updateMenuItem = {this.props.updateMenuItem}
                                loadSampleMenuItem={this.props.loadSampleMenuItem}
                                menuItems ={this.props.menuItems}
                                handlePicture = {this.props.handlePicture}
                            />
                        </NavItem>
                        <NavItem>
                            <NavLink hidden={this.state.logged_in} href="/login">Login</NavLink>
                            <NavLink hidden={!this.state.logged_in} onClick={() => this.handleLogout()} href="#">Logout</NavLink>
                        </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        )
    }
}