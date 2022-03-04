
import React, { FunctionComponent, useContext, useState } from "react";
import MainSection from "./Main";
import SideBar from "./SideNav";
import TopNav from "./TopNav";
import styles from './Layout.module.css';
import cStyle from '../styles/common.module.css';
import { MenuContext } from "../context/MenuContext";

const Layout:FunctionComponent = (props) => {

    const context = useContext(MenuContext);

    return <div className={styles.layout_container}>
        <div className={styles.layout}>
            <SideBar></SideBar>
            <div className={cStyle.card + ' ' + styles.right_container}>
            <TopNav showNav={!!context?.isMenuShown}></TopNav>
            <MainSection>{props.children}</MainSection>
            <div id="modal_overlay" ></div>
            <div id="modal_content" ></div>
            </div>
        </div>
        </div>
}

export default Layout;