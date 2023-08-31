import Links from "../links/Links";
import style from "./Navbar.module.css";
import {FcMenu} from 'react-icons/fc'


function Navbar(  ) {
  // console.log("this is the console of navbar ", links.github)
  const navLinks = ["Home", "About", "Projects"];
  return (
    <>
      <nav className={style.nav}>
        <div className={style.logo}>
          <a href="/">
            <code className={style.Logo}>Nasser Hussein</code>
          </a>
        </div>
        <div className={style.navItems}>
          {navLinks.map((link, i) => {
            return (
              // <navLinks to='/' style={{isActive}} => ({
              //   color: isActive ? 'greenyellow' : 'white'
              // })></navLinks>

              <a key={i} href={"#" + link}>
                {link}
              </a>
            );
          })}
        </div>
        <div className={style.social}>
          <Links  />
        </div>

        {/* for small divces */}
        <div className={style.menue}>
          <FcMenu />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
