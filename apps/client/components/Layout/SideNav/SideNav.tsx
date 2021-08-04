import React, { Fragment, ReactElement, useEffect, useState } from 'react';
import classes from './SideNav.module.css';
import DarkModeToggle from 'react-dark-mode-toggle';
import { useTheme } from 'next-themes';
import ToggleButton from 'react-theme-toggle-button';
import 'react-theme-toggle-button/dist/index.css';
import { Link } from 'react-scroll';
import { ScrollBarProps } from 'react-perfect-scrollbar';
import { DarkModeSwitch } from 'react-toggle-dark-mode';

function SideNav(): ReactElement {
  const { theme, setTheme, systemTheme } = useTheme();
  const [isDarkMode, setIsDarkMode] = useState(theme == 'dark');
  const [menuActive, setMenuActive] = useState(false);
  const toggleMenu = () => setMenuActive(!menuActive);
  useEffect(() => {
    if (theme == 'system') {
      if (systemTheme == undefined) {
        setIsDarkMode(true);
      } else {
        setIsDarkMode(systemTheme == 'dark');
      }
    } else {
      setIsDarkMode(theme == 'dark');
    }
  }, [systemTheme]);
  const toggleTheme = () => {
    if (theme == 'light') {
      setTheme('dark');
      setIsDarkMode(true);
    } else {
      setTheme('light');
      setIsDarkMode(false);
    }
  };
  return (
    <Fragment>
      <header className={classes.sidenav}>
        {/* <ToggleButton isDark={isDarkMode} onChange={toggleTheme} /> */}
        <DarkModeSwitch
          checked={!isDarkMode}
          moonColor="#D0CFD8"
          sunColor="#D0CFD8"
          onChange={toggleTheme}
          size={25}
        />
        {/* <DarkModeToggle
          onChange={toggleTheme}
          checked={isDarkMode}
          size={30}
          className={classes.darkBtn}
        /> */}
        <nav>
          <ul>
            <li>
              <Link
                to="home"
                activeClass="activeNav"
                spy={true}
                smooth={true}
                duration={400}
              >
                <i className="icon-home"></i>
              </Link>
            </li>
            <li>
              <Link
                to="about"
                activeClass="activeNav"
                spy={true}
                smooth={true}
                duration={400}
              >
                <i className="icon-user-following"></i>
              </Link>
            </li>
            <li>
              <Link
                to="services"
                activeClass="activeNav"
                spy={true}
                smooth={true}
                duration={400}
              >
                <i className="icon-rocket"></i>
              </Link>
            </li>
            <li>
              <Link
                to="experience"
                activeClass="activeNav"
                spy={true}
                smooth={true}
                duration={400}
              >
                <i className="icon-briefcase"></i>
              </Link>
            </li>
            {/* <li>
              <Link
                to="works"
                activeClass="activeNav"
                spy={true}
                smooth={true}
                duration={300}
              >
                <i className="icon-layers"></i>
              </Link>
            </li> */}
            {/* <li>
              <Link
                to="posts"
                activeClass="activeNav"
                spy={true}
                smooth={true}
                duration={500}
              >
                <i className="icon-note"></i>
              </Link>
            </li>
            <li>
              <Link
                to="conact"
                activeClass="activeNav"
                spy={true}
                smooth={true}
                duration={500}
              >
                <i className="icon-bubbles"></i>
              </Link>
            </li> */}
          </ul>
        </nav>
        <span className={classes.copyWrite}>
          © {new Date().getFullYear()} Arman Zahedi
        </span>
      </header>
      <div className={classes.bottomNav}>
        <DarkModeSwitch
          checked={!isDarkMode}
          style={{ marginLeft: '2rem' }}
          moonColor="#D0CFD8"
          sunColor="#D0CFD8"
          onChange={toggleTheme}
          size={26}
        />
        <a
          onClick={toggleMenu}
          className={`${classes.menuBtn} ${menuActive ? 'activeNav' : ''}`}
        >
          <i className="fas fa-th-large"></i>
        </a>
      </div>
      <div
        className={`${classes.menuItems} ${
          menuActive ? classes.activemenu : ''
        }`}
      >
        <ul>
          <li>
            <Link
              to="home"
              activeClass="activeNav"
              spy={true}
              smooth={true}
              duration={400}
            >
              <i className="icon-home"></i>
            </Link>
          </li>
          <li>
            <Link
              to="about"
              activeClass="activeNav"
              spy={true}
              smooth={true}
              duration={400}
            >
              <i className="icon-user-following"></i>
            </Link>
          </li>
          <li>
            <Link
              to="services"
              activeClass="activeNav"
              spy={true}
              smooth={true}
              duration={400}
            >
              <i className="icon-rocket"></i>
            </Link>
          </li>
          <li>
            <Link
              to="experience"
              activeClass="activeNav"
              spy={true}
              smooth={true}
              duration={400}
            >
              <i className="icon-briefcase"></i>
            </Link>
          </li>
          {/* <li>
            <Link
              to="works"
              activeClass="activeNav"
              spy={true}
              smooth={true}
              duration={500}
            >
              <i className="icon-layers"></i>
            </Link>
          </li>
          <li>
            <Link
              to="posts"
              activeClass="activeNav"
              spy={true}
              smooth={true}
              duration={500}
            >
              <i className="icon-note"></i>
            </Link>
          </li>
          <li>
            <Link
              to="conact"
              activeClass="activeNav"
              spy={true}
              smooth={true}
              duration={500}
            >
              <i className="icon-bubbles"></i>
            </Link>
          </li> */}
        </ul>
      </div>
    </Fragment>
  );
}

export default SideNav;
