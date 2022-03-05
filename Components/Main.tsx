
import React, { FunctionComponent, useContext, useEffect } from "react";
import styles from './Layout.module.css';
import cStyles from '../styles/common.module.css';
import { MenuContext } from "../context/MenuContext";

const MainSection:FunctionComponent = (props) => {

    useEffect(()=> {
        window.document.addEventListener('click', () => {context?.hideAll()})
    });
    

    const context = useContext(MenuContext);
    return <main  onClick={() => {context?.hideAll()}}
    className={styles.main_container+' '+cStyles.scroll}>
            {props.children}
        </main>
    ;
}

export default MainSection;