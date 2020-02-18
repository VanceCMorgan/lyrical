import React, { useReducer } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { BrowserRouter, Link} from 'react-router-dom';
import {useSelector,useDispatch} from 'react-redux';
import {MyPicker} from './blockPicker';
import './styles/NavMenu.css';

export const NavMenu = () => {
  const colour = useSelector(state => state.colour);
  return(
      <header>
        <Navbar className="mynav navbar-expand-sm navbar-toggleable-sm border-bottom box-shadow mb-3" light >
          <Container id="nav-cont">
            <BrowserRouter>
                    <NavbarBrand tag={Link} to="/" style={{color: colour}}>LyricApp</NavbarBrand>
            </BrowserRouter>
            <MyPicker />
          </Container>
        </Navbar>
      </header>
  );
  }

