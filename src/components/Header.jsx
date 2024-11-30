import { Link } from "react-router-dom";

const Header = () => (
  <header>
    <nav>
      <Link to="/">Home</Link>
      <Link to="/portfolio">Portfólio</Link>
      <Link to="/contact">Contato</Link>
    </nav>
  </header>
);

export default Header;
