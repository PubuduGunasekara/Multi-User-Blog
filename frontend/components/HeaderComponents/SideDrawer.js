import Head from 'next/head';
import Link from 'next/link';
import { DOMAIN } from '../../config';
import { FaFacebookF } from 'react-icons/fa';
import { FaPinterestP } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
import { FaYoutube } from 'react-icons/fa';


/**
 * completed!
 */
const sideDrawer = (props) => {
    let drawerClasses = 'side-drawer';

    if (props.show) {
        drawerClasses = 'side-drawer open';
    }
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
            <div className={drawerClasses}>
                <div style={{ padding: 0, margin: 0,textAlign:'left' }}>
                    <Link href="/"><img alt="techbot.com" style={{ padding: 0, margin: 0, cursor: 'pointer',textAlign:'center' }} className="img img-fluid" src={`${DOMAIN}/static/images/logo.png`} /></Link>
                </div>
                <div className="container">
                    <hr style={{ backgroundColor: 'white' }} />
                </div>
                <nav className="container">
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
                        <li>
                            <Link href="/about"><a>About Us</a></Link>
                        </li>
                        <li>
                            <Link href="/contact"><a>Contact Us</a></Link>
                        </li>
                    </ul>
                </nav>
                <div className="container">
                    <hr style={{ backgroundColor: 'white' }} />
                </div>
                <div className="side-drawer__footer">
                    <div>
                        <ul style={{ paddingLeft: 0, paddingRight: 0, marginBottom: 0, paddingBottom: 0, listStyle: 'none', textAlign: 'center', justifyContent: 'center' }}>
                            <li><a href="#"><FaFacebookF size='2rem' color='#666' /></a></li>
                            <li><a href="#"><FaInstagram size='2rem' color='#666' /></a></li>
                            <li><a href="#"><FaPinterestP size='2rem' color='#666' /></a></li>
                            <li><a href="#"><FaYoutube size='2rem' color='#666' /></a></li>
                        </ul>
                    </div>
                    <nav>
                        <ul>
                            <li><a href="#">Privacy Policy</a></li>
                            <li><a href="#">Terms of Use</a></li>
                        </ul>
                    </nav>
                    <p>Copyrigh @2020&nbsp;<a href="/">Techbot.com</a></p>
                </div>
            </div>
        </div>
    )
}

export default sideDrawer;