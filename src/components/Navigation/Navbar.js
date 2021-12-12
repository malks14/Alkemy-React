import React, { useState, useContext } from "react";
import { RiMenu3Line, RiCloseLine } from "react-icons/ri";
import { NavLink, Link } from "react-router-dom";
import AuthContext from "../../store/auth-context";
import styles from "./Navbar.module.css";

const Menu = () => (
  <>
    <nav className={styles["heroes__nav"]}>
      <ul>
        <li>
          <NavLink activeClassName={styles.active} to="/search">
            Buscar Heroes
          </NavLink>
        </li>
      </ul>
    </nav>
  </>
);
const Navbar = () => {
  const authCtx = useContext(AuthContext);
  const isLoggedIn = authCtx.isLoggedIn;
  const [toggleMenu, setToggleMenu] = useState(false);

  const logoutHandler = () => {
    authCtx.logout();
  };
  return (
    <div className={styles["heroes__navbar"]}>
      <div className={styles["heroes__navbar-links"]}>
        <div className={styles["heroes__navbar-links_logo"]}>
          <Link to="/home">
            <div
              className={`${styles["heroes__navbar-logo"]} ${styles["gradient__text"]}`}
            >
              SuperHeroes
            </div>
          </Link>
        </div>
        <div className={styles["heroes__navbar-links_container"]}>
          <Menu />
        </div>
      </div>

      <div className={styles["heroes__navbar-sign"]}>
        <nav className={styles["heroes__nav"]}>
          <ul>
            {!isLoggedIn && (
              <li>
                <NavLink activeClassName={styles.active} to="/login">
                  Iniciar sesion
                </NavLink>
              </li>
            )}
          </ul>
        </nav>
        {isLoggedIn && (
          <button onClick={logoutHandler} type="button">
            Cerrar sesion
          </button>
        )}
      </div>
      <div className={styles["heroes__navbar-menu"]}>
        {toggleMenu ? (
          <RiCloseLine
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(false)}
          />
        ) : (
          <RiMenu3Line
            color="#fff"
            size={27}
            onClick={() => setToggleMenu(true)}
          />
        )}
        {toggleMenu && (
          <div
            className={`${styles["heroes__navbar-menu_container"]} ${styles["scale-up-center"]}`}
          >
            <div className={styles["heroes__navbar-menu_container-links"]}>
              <Menu />
            </div>
            <div className={styles["heroes__navbar-menu_container-links-sign"]}>
              <nav className={styles["heroes__nav"]}>
                <ul>
                  {!isLoggedIn && (
                    <li>
                      <NavLink to="/login">Sign In</NavLink>
                    </li>
                  )}
                </ul>
              </nav>
              {isLoggedIn && (
                <button onClick={logoutHandler} type="button">
                  Cerrar sesion
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
