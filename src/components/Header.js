import React, { useEffect,useState } from 'react';
import { Link } from 'gatsby';
import { Menu } from '../components/Menu';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuDisplay = isMenuOpen ? 'active' : '';

    const MenuHandler = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  }, [isMenuOpen]);

  const mainNav = [{
    slug: '/',
    title: "Home"
},{
    slug: '/about-me',
    title: "About Me"
},
{
    slug: '/my-work',
    title: "My Work"
},
{
    slug: '/contact',
    title: "Contact Me"
}
]

  return (
    <header>
        <div className="header_container">
          <div className="logo">
            <Link to="/" onClick={() => setIsMenuOpen(false)}>
              Rahul Souram
            </Link>
          </div>
          <ul className="header-menu-list">
        {mainNav.map((nav) => (
          <li className="header-menu-list-item">
            <Link to={nav.slug} onClick={() => setIsMenuOpen(false)}>
              {nav.title}
            </Link>
          </li>
        ))}
      </ul>
          <div className="menu-bar">
            <button type="button" className={`${menuDisplay}`} onClick={MenuHandler}>
              <span></span>
              <span></span>
              <span></span>
            </button>
          </div>
        </div>
        <div
          className={
            isMenuOpen ? 'active menu-wrapper' : 'inactive menu-wrapper'
          }
        >
          <Menu setIsMenuOpen={setIsMenuOpen} mainNav={mainNav} />
        </div>
    </header>
  );
};
export default Header
