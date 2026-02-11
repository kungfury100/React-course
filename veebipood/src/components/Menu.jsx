import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import english from "../assets/en.png";
import estonian from "../assets/et.png";


function CollapsibleExample() {
  const { t, i18n } = useTranslation();
  
  const handleLanguageChange = (newLanguage) => {
    i18n.changeLanguage(newLanguage);
    localStorage.setItem("language", newLanguage)
  }
  
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">Webshop</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/ostukorv">{t('menu.cart')}</Nav.Link>
            <Nav.Link as={Link} to="/seaded">{t('menu.settings')}</Nav.Link>
            <Nav.Link as={Link} to="/kalkulaator">{t('menu.calculator')}</Nav.Link>
            <Nav.Link as={Link} to="/meist">{t('menu.about')}</Nav.Link>
            <Nav.Link as={Link} to="/kaardirakendus">{t('menu.map')}</Nav.Link>
            <NavDropdown title="Arrays" id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/autod">Cars</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/esindused">Shops</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/hinnad">Prices</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/kasutajad">Users</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/tootajad">Employees</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/tooted">Products</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/halda">{t('menu.manage')}</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t('menu.manage')} id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/halda-autod">Cars</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/halda-esindused">Shops</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/halda-hinnad">Prices</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/halda-kasutajad">Users</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/halda-tootajad">Employees</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/halda-tooted">Products</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item as={Link} to="/lisa">Add</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t('menu.add')} id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/lisa-auto">Car</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/lisa-esindus">Shop</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/lisa-hind">Price</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/lisa-kasutaja">User</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/lisa-tootaja">Employee</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/lisa-toode">Product</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title={t('menu.api')} id="collapsible-nav-dropdown">
              <NavDropdown.Item as={Link} to="/api">API home</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav>
            <img className="icon" onClick={() => handleLanguageChange("en")} src={english} alt="" />
            <img className="icon" onClick={() => handleLanguageChange("et")} src={estonian} alt="" /> 
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default CollapsibleExample;