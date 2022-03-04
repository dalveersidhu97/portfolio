
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

    return <div className={styles.side_bar_container + ' '+ cStyles.card}>
        <div className={myStyles.top_nav}><span onClick={context?.toggleMenu}><TiThMenu></TiThMenu></span></div>
        <div className={myStyles.side_bar}>
            <div className={myStyles.detail}>
                <p className={myStyles.image}>
                    <img src="https://scontent.fyyz1-1.fna.fbcdn.net/v/t31.18172-1/27912788_1787168041588204_4241064322790820528_o.jpg?stp=c0.13.320.320a_dst-jpg_p320x320&_nc_cat=101&ccb=1-5&_nc_sid=7206a8&_nc_ohc=wVbq_gPweTkAX8qDdsl&_nc_ht=scontent.fyyz1-1.fna&oh=00_AT9DNUJvPUNJEuMyR9KiXm2T0xm7LD8SvaYGozmb3o804A&oe=62458463"></img>
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