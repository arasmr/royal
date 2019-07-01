import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
 } from 'reactstrap';
import firebase from 'firebase/app';
import OrderModal from '../Order/OrderModal';
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
            <Navbar expand="md" light style={{backgroundColor:"#F46488",color:"white"}}>
                {/* <NavbarBrand href="/">Royal Catering</NavbarBrand> */}
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.state.isOpen} navbar>
                    <Nav className="mx-auto" navbar>
                        <NavItem className="p-2">
                            <NavLink href="/zaalhuur" >Zaalhuur Services</NavLink>
                        </NavItem>
                        <NavItem className="p-2">
                            <NavLink href="/bruiloften">Bruiloften</NavLink>
                        </NavItem>
                        <NavItem className="p-2">
                            <NavLink href="/components/">Party Rental</NavLink>
                        </NavItem>
                        <NavItem className="p-2">
                            <NavLink href="/contact">Contact</NavLink>
                        </NavItem>
                        <NavItem className="p-2" hidden={!this.state.logged_in}>
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
                        <NavItem  className="p-2" hidden={!this.state.logged_in}>
                            <OrderModal
                                order={this.props.order}
                                deleteOrder={this.props.deleteOrder}
                                menuItems={this.props.menuItems}
                            />
                        </NavItem>
                        <NavItem className="p-2">
                            <NavLink hidden={this.state.logged_in} href="/login">Login</NavLink>
                            <NavLink hidden={!this.state.logged_in} onClick={() => this.handleLogout()} href="#">Logout</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        )
    }
}