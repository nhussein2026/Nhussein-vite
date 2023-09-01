import { useState } from "react";
import Links from "../links/Links";
import style from "./Navbar.module.css";
import { FcMenu } from "react-icons/fc";

function Navbar() {
  // console.log("this is the console of navbar ", links.github)
  const navLinks = ["Home", "About", "Projects"];
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisiblity = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      <nav className={style.nav}>
        {/* for small divces */}
        <div className={style.menue}>
          <FcMenu onClick={toggleVisiblity} />
          <div
            className={`${style.sideMenue} ${isVisible ? style.visible : ""}`}
          >
            {isVisible && (
              <div className={style.popMenue}>
                {navLinks.map((link, i) => {
                  return (
                    <a className={style.navLinks} key={i} href={"#" + link}>
                      {link}
                    </a>
                  );
                })}
              </div>
            )}
            <div className={style.menueSocial}>
              <Links />
            </div>
          </div>
        </div>
        <div className={style.logo}>
          <a href="/">
            <code className={style.Logo}>Nasser Hussein</code>
          </a>
        </div>

        {/* Navbar for large screen */}
        <div className={style.navItems}>
          {navLinks.map((link, i) => {
            return (
              <a key={i} href={"#" + link}>
                {link}
              </a>
            );
          })}
        </div>
        <div className={style.social}>
          <Links />
        </div>
      </nav>
    </>
  );
}

export default Navbar;
