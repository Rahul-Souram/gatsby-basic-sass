import React from 'react';
import { Link } from 'gatsby';

const Menu = ({ setIsMenuOpen ,mainNav}) => {

  return (
    <div className="menu-list-wrapper">
      <ul className="menu-list">
        {mainNav.map((nav) => (
          <li className="menu-list-item">
            <Link to={nav.slug} onClick={() => setIsMenuOpen(false)}>
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export { Menu };
