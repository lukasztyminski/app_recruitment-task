import React from 'react';
import { NavLink } from 'react-router-dom';
import { routes } from '../../routes';

const Header = () => (
  <section class='hero is-medium is-primary is-bold'>
    <div class='hero-body'>
      <div class='container has-text-centered'>
        <h1 class='title'>App recruitment</h1>
        <h2 class='subtitle'>Łukasz Tymiński Frontend-Developer</h2>
      </div>
    </div>
    <div className='hero-foot'>
      <nav className='tabs'>
        <div className='container'>
          <ul>
            <li>
              <NavLink to={routes.components}>Components</NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  </section>
);

export default Header;
