import Link from 'next/link';
import React from 'react';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2,  NavLink, } from './HeaderStyles';

// Main header (nav section linking to all the different sections of the site)
const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"white" }}>
          <DiCssdeck size="3rem" /> <span>Shabbir Hussain</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Div2>
    </Container>
);

export default Header;
