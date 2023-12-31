import React from 'react';
import { usePathname } from 'next/navigation';
import navStyles from '../../styles/Nav.module.scss';
import { sideNavSections } from './sideNavSections';
import Progressbar from './progressBar';
import { Link as RSLink } from 'react-scroll';

const SideNav = ({ show }) => {
  const pathname = usePathname();
  const pathnameArr = pathname.split('/');
  const currentPath = pathnameArr[pathnameArr.length - 1] || 'home';
  const sections = sideNavSections[currentPath] || {};
  const sectionTitles = Object.keys(sections) || [];

  return (
    <header style={{ visibility: show ? 'visible' : 'hidden' }}>
      <div className={navStyles.sideNavContainer}>
        <div className={navStyles.sideNav}>
          {sectionTitles.length > 0 ? (
            sectionTitles.map((section) => (
              <div className={navStyles.sideNavElement} key={section}>
                <Progressbar position={'down'} section={sections[section]} />
                <RSLink
                  className={navStyles.rslinkSideNav}
                  activeClass={navStyles.activeSideNavSubsection}
                  to={sections[section]}
                  spy={true}
                  smooth={true}
                  offset={-70}
                  duration={500}
                >
                  {section}
                </RSLink>
              </div>
            ))
          ) : (
            <div>PLEASE ADD SIDENAV ITEMS TO sideNavSections.js</div>
          )}
        </div>
      </div>
    </header>
  );
};

export default SideNav;
