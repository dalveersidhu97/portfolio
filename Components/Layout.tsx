
import React, { FunctionComponent} from "react";
import MainSection from "./Main";
import SideBar from "./SideNav";
import TopNav from "./TopNav";
import styles from './Layout.module.css';
import cStyle from '../styles/common.module.css';

const Layout:FunctionComponent = (props) => {
    return <div className={styles.layout_container}>
        <div className={styles.layout} >
            <SideBar></SideBar>
            <div className={cStyle.card + ' ' + styles.right_container}>
            <TopNav></TopNav>
            <MainSection>{props.children}</MainSection>
            <div id="modal_overlay" ></div>
            <div id="modal_content" ></div>
            </div>
        </div>
        </div>
}

export default Layout;