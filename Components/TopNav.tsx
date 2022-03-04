

import Link from "next/link";
import { useRouter } from "next/router";
import React, { FunctionComponent, useContext } from "react";
import styles from './Layout.module.css';
import myStyles from './TopNav.module.css';
import cStyles from '../styles/common.module.css';
import {MdPermContactCalendar} from 'react-icons/md';
import {AiTwotoneSetting} from 'react-icons/ai';
import {IoIosApps} from 'react-icons/io';
import {FaMale} from 'react-icons/fa';
import { MenuContext } from "../context/MenuContext";

const NavLink: FunctionComponent<{path: string}> = ({path, children}) => {

    const Router = useRouter();
    let activeClass = '';
    if(Router.pathname === path) activeClass = myStyles.active;
    return <li className={activeClass}><Link href={path}><a className={cStyles.link}>{children}</a></Link></li>
    
}

const TopNav:FunctionComponent<{showNav:boolean}> = ({showNav}) => {

    const navClass =  (showNav?myStyles.show_nav:myStyles.hide_nav);
    const context = useContext(MenuContext);
    return <div className={styles.top_nav_container}>
            <ul className={myStyles.top_nav+' '+navClass} onClick={context?.toggleMenu}>
                <NavLink path="/"><MdPermContactCalendar></MdPermContactCalendar><span>About</span></NavLink>
                <NavLink path="/skills"><AiTwotoneSetting></AiTwotoneSetting><span>Skills</span></NavLink>
                <NavLink path="/projects"><IoIosApps></IoIosApps><span>Projects</span></NavLink>
                <NavLink path="/resume"><FaMale></FaMale><span>Resume</span></NavLink>
            </ul>
        </div>
    ;
}

export default TopNav;