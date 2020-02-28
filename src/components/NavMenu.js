import React from 'react';
import {Container, Navbar, NavbarBrand} from 'reactstrap';
import { BrowserRouter, Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import {MyPicker} from './blockPicker';
import './styles/NavMenu.css';

//Top component that displays title link and colour picker component
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

