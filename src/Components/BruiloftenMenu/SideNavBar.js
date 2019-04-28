import React from 'react';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	UncontrolledDropdown,
	DropdownToggle,
	DropdownMenu,
    DropdownItem } from 'reactstrap';

import { Link, animateScroll as scroll } from "react-scroll";
import { ListGroup, ListGroupItem, ListGroupItemHeading, ListGroupItemText } from 'reactstrap';

export default class SideNavBar extends React.Component {

	state = {
		isOpen: false
    };
    
	toggle = () => {
		this.setState({
			isOpen: !this.state.isOpen
		});
    }
    
	render() {
		return (
			<div className="side_nav_bar" style={{width:"20%", height:"110vh", position:"fixed"}}>
                <Nav vertical>
                    <NavItem>
                        <NavLink href="#">
                            <Link
                                onClick={this.toggle}
                                activeClass="active"
                                to='soup'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                            Soup
                            </Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">
                            <Link
                                onClick={this.toggle}
                                activeClass="active"
                                to='koud_voorgerechten'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                            Koud Voorgerechten
                            </Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">
                            <Link
                                onClick={this.toggle}
                                activeClass="active"
                                to='warm_voorgerechten'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                            Warm Voorgerechten
                            </Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">
                            <Link
                                onClick={this.toggle}
                                activeClass="active"
                                to='hoofdgerechten'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                            Hoofdgerechten
                            </Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">
                            <Link
                                onClick={this.toggle}
                                activeClass="active"
                                to='nagerechten'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                            Nagerechten
                            </Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">
                            <Link
                                onClick={this.toggle}
                                activeClass="active"
                                to='salades'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                            Salades
                            </Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">
                            <Link
                                onClick={this.toggle}
                                activeClass="active"
                                to='cake'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                            Cake-Bruidstaart
                            </Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">
                            <Link
                                onClick={this.toggle}
                                activeClass="active"
                                to='drinks'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                            Drinks
                            </Link>
                        </NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href="#">
                            <Link
                                onClick={this.toggle}
                                activeClass="active"
                                to='koekies'
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                            Koekies
                            </Link>
                        </NavLink>
                    </NavItem>
                </Nav>
			</div>
		);
	}
}