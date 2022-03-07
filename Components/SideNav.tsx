
import React, { FunctionComponent, useContext } from "react"
import styles from './Layout.module.css';
import myStyles from './SideBar.module.css';
import cStyles from '../styles/common.module.css';
import { BsTelephoneFill, BsFillChatSquareTextFill, BsLinkedin, BsGithub } from "react-icons/bs"
import {MdDownloadForOffline} from 'react-icons/md';
import {FaMapMarkerAlt} from 'react-icons/fa';
import {ImFacebook2} from 'react-icons/im';
import {TiThMenu} from 'react-icons/ti';
import { MenuContext } from "../context/MenuContext";

const SideBar:FunctionComponent = () => {

    const context = useContext(MenuContext);

    const openSideBar = (e: React.MouseEvent) => {
        e.stopPropagation();context?.toggleSideBar()
    }

    const navClass =  (context!.isSideBarShown?myStyles.show_nav:myStyles.hide_nav);

    return <div className={styles.side_bar_container + ' '+ cStyles.card}>
        <div className={myStyles.top_nav}  onClick={() => {context?.hideAll()}}>
            <span  className={myStyles.my_logo} onClick={openSideBar}><img src="/img/me.jpg"></img></span>
            <span className={myStyles.title} onClick={openSideBar}><h2 className={myStyles.my_name}>Dalveer Singh</h2><span className={myStyles.sub_title}>Full Stack Web Developer</span></span>
            <span className={myStyles.menu_icon} onClick={e=> {e.stopPropagation();context?.toggleMenu()}}><TiThMenu></TiThMenu> </span>
        </div>
        <div onClick={e=> e.stopPropagation()} className={myStyles.side_bar + ' ' + navClass}>
            <div className={myStyles.detail}>
                <p className={myStyles.image}>
                    <img src="/img/me.jpg"></img>
                </p>
                <p className={myStyles.name}>Dalveer Singh</p>
                <p className={myStyles.major}>Full Stack Web Developer</p>
                <p className={myStyles.major}><a className={cStyles.link} href="#" ><MdDownloadForOffline/><span>Download Resume</span></a></p>
            </div>

            <div className={myStyles.contact_info}>
                <p className={myStyles.info_item}><a className={cStyles.link} href="mailto:dalveersidhu97@gmail.com"><BsFillChatSquareTextFill/>&nbsp;&nbsp;dalveersidhu97@gmail.com</a></p>
                <p className={myStyles.info_item}><a className={cStyles.link} href="tel:+19029880900"><BsTelephoneFill/>&nbsp;&nbsp;+19029880900</a></p>
                <p className={myStyles.info_item}><a className={cStyles.link} href=""><address><FaMapMarkerAlt></FaMapMarkerAlt>&nbsp;&nbsp;13 Mendoza Dr, Brampton, ON</address></a></p>
            </div>

            <div className={myStyles.social}>
                
                <p className={myStyles.info_item}><a className={cStyles.link} href="https://www.linkedin.com/in/dalveer-singh-sidhu/" target={"_blank"} rel="noreferrer"><BsLinkedin/><span>Linkedin</span></a></p>
                <p className={myStyles.info_item}><a className={cStyles.link} href="https://github.com/dalveersidhu97" target={"_blank"} rel="noreferrer"><BsGithub/><span>Github</span></a></p>
                <p className={myStyles.info_item}><a className={cStyles.link} href="https://www.facebook.com/laddisidhu97" target={"_blank"} rel="noreferrer"><ImFacebook2/><span>Facebook</span></a></p>
            </div>
        </div>
    </div>
}

export default SideBar;