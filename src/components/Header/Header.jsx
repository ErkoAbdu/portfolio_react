import './Header.css';
import { Link } from 'react-scroll';

export default function Header() {
  return (
    <header className="headerContent">
      <h3 className="titleHeader">
        <Link to="top" className="link">EA.</Link>
      </h3>
      <nav className="nav">
        <ul className="main_nav">
          <li className="nav__list"><Link to="projects" smooth={true} duration={800}>Projects</Link></li>
          <li className="nav__list"><Link to="skills" smooth={true} duration={800}>Skills</Link></li>
          <li className="nav__list"><Link to="contact" smooth={true} duration={800}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  );
}