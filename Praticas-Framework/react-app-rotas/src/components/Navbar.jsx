import { NavLink } from 'react-router-dom';
import style from "./navbar.module.css"

export default function Navbar() {
  return (
    <nav>
      <ul className="menu" >
        <li>
          <NavLink to='/' className={style.linkNav} style={({ isActive }) => {
            return {
              color: isActive ? "var(--color)" : "#2c0108"
            }
          }}>Home</NavLink>
        </li>
        <li>
          <NavLink to='/Sobre' className={style.linkNav} style={({ isActive }) => {
            return {
              color: isActive ? "var(--color)" : "#2c0108"
            }
          }}>Sobre</NavLink>
        </li>
        <li>
          <NavLink to='/Contato' className={style.linkNav} style={({ isActive }) => {
            return {
              color: isActive ? "var(--color)" : "#2c0108"
            }
          }}>Contato</NavLink>
        </li>
      </ul>
    </nav>
  );
}
