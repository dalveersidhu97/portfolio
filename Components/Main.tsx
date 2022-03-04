

import React, { FunctionComponent } from "react";
import styles from './Layout.module.css';
import cStyles from '../styles/common.module.css';

const MainSection:FunctionComponent = (props) => {

    return <main
    className={styles.main_container+' '+cStyles.scroll}>
            {props.children}
        </main>
    ;
}

export default MainSection;