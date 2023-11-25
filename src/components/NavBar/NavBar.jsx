import { NavLink, Link } from "react-router-dom"
import CartWidget from "../CartWidget/CartWidget"
import "./NavBar.module.css"
import Logo from "./assets/sony-logo-white-1.webp"

const NavBar = () => {
  return (
    <nav className="NavBar">
      <Link to='/'>
          <img src={Logo} alt="" />
      </Link>
      <div className="NavBar-container">
        <NavLink to={`/category/Camaras`} className = {({ isActive})=> isActive ? 'ActiveOption' : 'Option'} />
        <NavLink to={`/category/Lentes`} className = {({ isActive})=> isActive ? 'ActiveOption' : 'Option'} />
        <NavLink to={`/category/Accesorios`} className = {({ isActive})=> isActive ? 'ActiveOption' : 'Option'} />
      </div>
      <CartWidget />
    </nav>
  )
}

export default NavBar;
