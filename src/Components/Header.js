import React, { useState } from 'react';
import { Navbar, Nav, NavItem, NavLink, NavbarToggler, Collapse } from 'reactstrap';
import { FaHome, FaUserAlt, FaSignOutAlt,FaInfoCircle } from "react-icons/fa";
import LOGO from '../Images/logo-t.jpg';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../Features/UserSlice';

function Header() {
    let [varIsOpen, setIsOpen] = useState(false);
    const toggle = () => { setIsOpen(!varIsOpen) };
    const navigate = useNavigate();
    const dispatch = useDispatch();


    const handleLogout = async () => {
        await dispatch(logout()).unwrap();
        navigate("/");

    }
    return (
        <div>
            <Navbar className='navigation' light expand='md'>
                <img src={LOGO} width="100px" height="50px" />
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={varIsOpen} navbar>
                    <Nav className='ms-auto' navbar>
                        <NavItem className='navs'>
                            <Link to="/BookStore">
                                <FaHome />
                            </Link>
                        </NavItem>
                        <NavItem className='navs'>
                            <Link to="/aboutUs">
                                <FaInfoCircle />
                            </Link>
                        </NavItem>

                        <NavItem className='navs'>
                            <Link to="">
                                <FaUserAlt />
                            </Link>
                        </NavItem>
                        <NavItem className='navs'>
                            <Link onClick={handleLogout}>
                                <FaSignOutAlt />
                            </Link>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </div>
    );
}
export default Header;