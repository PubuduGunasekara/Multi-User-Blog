import Head from 'next/head';
import { useState } from 'react';
import Link from 'next/link';
import { signout, isAuth } from '../../actions/auth.action';
import NProgress from 'nprogress';
import '../../node_modules/nprogress/nprogress.css';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import { APP_NAME } from '../../config';
import Router from 'next/router';
import UserHeader from './UserHeader';
import SideDrawer from './SideDrawer';
import Backdrop from './Backdrop'
import MobileSearch from './MobileSearchBar';
import LargeSearch from './LargeScreenSearchBar';

/*next js produce these functions. it helps to function nprogress bar*/
Router.onRouteChangeStart = (url) => NProgress.start();
Router.onRouteChangeComplete = (url) => NProgress.done();
Router.onRouteChangeError = (url) => NProgress.done();

/**
 * completed!
 */
const HeaderComponent = () => {

    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    const adminPanelHeader = () => {
        return (
            <Navbar color="dark" dark expand="md">
                {isAuth() && isAuth().role === 0 && (
                    <Link href="/admin-panel/moderator">
                        <NavLink style={{ color: 'white' }} className="font-weight-bold">{APP_NAME}</NavLink>
                    </Link>
                )}

                {isAuth() && isAuth().role === 1 && (
                    <Link href="/admin-panel/root-admin">
                        <NavLink style={{ color: 'white' }} className="font-weight-bold">{APP_NAME}</NavLink>
                    </Link>
                )}


                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        {isAuth().role === 1 ?
                            <NavItem>
                                <Link href="/admin-panel/root-admin">
                                    <NavLink style={{ cursor: 'pointer' }}>Home</NavLink>
                                </Link>
                            </NavItem>
                            :
                            <NavItem>
                                <Link href="/admin-panel/moderator">
                                    <NavLink style={{ cursor: 'pointer' }}>Home</NavLink>
                                </Link>
                            </NavItem>
                        }
                        <UncontrolledDropdown nav inNavbar>
                            <DropdownToggle nav caret style={{ cursor: 'pointer' }}>
                                New content
                            </DropdownToggle>
                            <DropdownMenu right>
                                <DropdownItem href="/admin-panel/crud/new-news">
                                    News
                                </DropdownItem>
                                <DropdownItem href="/admin-panel/crud/new-review">
                                    Reveiws
                                </DropdownItem>
                            </DropdownMenu>
                        </UncontrolledDropdown>
                        {isAuth() && isAuth().role === 1 && (
                            <NavItem>
                                <Link href="/admin-panel/root-admin/crud/mobile">
                                    <NavLink style={{ cursor: 'pointer' }}>New mobile phone</NavLink>
                                </Link>
                            </NavItem>
                        )}
                        {isAuth() && isAuth().role === 1 && (
                            <NavItem>
                                <Link href="/admin-panel/user-signup">
                                    <NavLink style={{ cursor: 'pointer' }}>New user</NavLink>
                                </Link>
                            </NavItem>
                        )}
                        {isAuth() && isAuth().role === 0 && (
                            <NavItem>
                                <Link href="/admin-panel/moderator/list-all-post">
                                    <NavLink style={{ cursor: 'pointer' }}>Manage post</NavLink>
                                </Link>
                            </NavItem>
                        )}

                        {isAuth() && isAuth().role === 1 && (
                            <NavItem>
                                <Link href="/admin-panel/root-admin/list-all-post">
                                    <NavLink style={{ cursor: 'pointer' }}>Manage post</NavLink>
                                </Link>
                            </NavItem>
                        )}
                    </Nav>
                    <Nav className="ml-auto" navbar>
                        {isAuth() && isAuth().role === 0 && (
                            <NavItem>
                                <Link href="/admin-panel/moderator">
                                    <NavLink style={{ cursor: 'pointer' }}>{`${isAuth().name}'s dashboard`}</NavLink>
                                </Link>
                            </NavItem>
                        )}

                        {isAuth() && isAuth().role === 1 && (
                            <NavItem>
                                <Link href="/admin-panel/root-admin">
                                    <NavLink style={{ cursor: 'pointer' }}>{`${isAuth().name}'s dashboard`}</NavLink>
                                </Link>
                            </NavItem>
                        )}

                        {isAuth() && (
                            <NavItem>
                                <NavLink style={{ cursor: 'pointer' }} onClick={() => signout(() => Router.replace('/admin-panel/user-signin'))}>Signout</NavLink>
                            </NavItem>
                        )}

                    </Nav>
                </Collapse>
            </Navbar>
        )
    }

    /**mobile search button,side drawer open and large screen search button initiate states */
    const [sideDrawerOpen, setSideDrawerOpen] = useState(false);
    const [mobileSearchBtn, setMobileSearchBtn] = useState(false);
    const [largeScreenSearchBtn, setLargeScreenSearchBtn] = useState(false);

    /**side drawer open close toggler function */
    const drawerToggleClickHandler = () => {
        setSideDrawerOpen((prevState) => {
            return {
                sideDrawerOpen: !prevState.sideDrawerOpen
            };
        })
    }

    /**mobile search bar open toggler function */
    const mobileSearchToggleClickHandler = () => {
        setMobileSearchBtn((prevState) => {
            return {
                mobileSearchBtn: !prevState.mobileSearchBtn
            };
        })
    }

        /**mobile search bar close toggler function */
    const mobileSearchToggleClickClose = () => {
        setMobileSearchBtn(false)
    }


    /**large screen search bar open toggler function */
    const largeScreenSearchToggleClickHandler = () => {
        setLargeScreenSearchBtn((prevState) => {
            return {
                largeScreenSearchBtn: !prevState.largeScreenSearchBtn
            };
        })
    }

        /**mobile search bar close toggler function */
    const largeScreenSearchToggleClickClose = () => {
        setLargeScreenSearchBtn(false)
    }

    /**backdrop close toggler function */
    const backdropClickHandler = () => {
        setSideDrawerOpen(false)
    }

    let backdropTemp;

    /**close the backdrop if side drawer opens */
    if (sideDrawerOpen) {
        backdropTemp = <Backdrop click={backdropClickHandler} />
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
            {
            isAuth() ? adminPanelHeader() : 
            <div>
                <UserHeader largeScreenActiveBtn={largeScreenSearchBtn} largeScreenCloseFunction={largeScreenSearchToggleClickClose} largeScreenSearchHandler={largeScreenSearchToggleClickHandler} closeFunction={mobileSearchToggleClickClose} btnActive={mobileSearchBtn} mobileSearchHanlder={mobileSearchToggleClickHandler} drawerClickHandler={drawerToggleClickHandler} />
                <SideDrawer show={sideDrawerOpen} />
                {backdropTemp}
                <MobileSearch show={mobileSearchBtn} />
                <LargeSearch show={largeScreenSearchBtn} />
            </div>}
        </div>
    );
};

export default HeaderComponent;