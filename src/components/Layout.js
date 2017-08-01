import React from 'react';
import { Link } from 'react-router-dom';

export const Layout = props => (
  <div className="app-container">
    <header>
      <Link to="/">
        <img className="logo" src="/img/logo-judo-heroes.png" alt="Judo Heroes logo" />
      </Link>
    </header>
    <div className="app-content">{props.children}</div>
    <footer>
      <p>
        This is a <strong>Judo Hero</strong> app built</strong>
        with <strong>React</strong> and <strong>Express</strong>!
      </p>
    </footer>
  </div>
);

export default Layout;
