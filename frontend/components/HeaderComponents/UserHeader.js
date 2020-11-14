import Head from 'next/head';
import Link from 'next/link';
import DrawerToggleButton from './SideDrawerButton';
import { DOMAIN } from '../../config';
import {FiSearch} from 'react-icons/fi';
import {MdClose} from 'react-icons/md';

/**
 * completed! 
 * */
const userNavbar = (props) => {
    return (
        <div>
            <div>
                <Head>
                    <link
                        rel="stylesheet"
                        href="/static/css/Header.css"
                    />
                </Head>
            </div>
            <header className="toolbar">
                <nav className="toolbar__navigation">

                    <div className="toolbar__logo">
                        <Link href="/"><img alt="techbot.com" style={{ cursor: 'pointer' }} className="img img-fluid" src={`${DOMAIN}/static/images/logo6-edited.png`} /></Link>
                    </div>
                    <div className="spacer" />
                    <div className="toolbar_navigation-items">
                        <ul>
                            <li>
                                <Link href="/"><a>Home</a></Link>
                            </li>
                            <li>
                                <Link href="/news"><a>News</a></Link>
                            </li>
                            <li>
                                <Link href="/reviews"><a>Reviews</a></Link>
                            </li>
                            <li>
                                <Link href="/phones"><a>Mobile Phones</a></Link>
                            </li>
                            <div className="toolbar__navigation-search-image">
                                {props.largeScreenActiveBtn ?
                                <div className="toggle-button__with-search_icons" onClick={props.largeScreenCloseFunction} title="cancel"><MdClose size='1.5rem' color='#858585' /></div>
                                :<div className="toggle-button__with-search_icons" onClick={props.largeScreenSearchHandler} title="search techbot.com"><FiSearch size='1.5rem' color='#858585' /></div>
                                }
                            </div>

                        </ul>

                    </div>
                    <div className="toolbar__toggle-button">
                        <DrawerToggleButton closeFunction={props.closeFunction} close={props.btnActive} mobile={props.mobileSearchHanlder} click={props.drawerClickHandler} />
                    </div>
                </nav>
            </header >
        </div>
    )
}

export default userNavbar;