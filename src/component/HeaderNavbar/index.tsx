import React from 'react';

import { Navbar, Nav } from 'react-bootstrap';
import Link from 'next/link';
import styles from './style.module.scss';

export default function HeaderNavbar() {
    return (
        <Navbar expand="sm" className={styles.nav}>
            <section className="container">
                <Link href="/">
                    {/* <img src="/images/logo1.png" alt="wtfresume logo (resume builder)" className={styles.logo} /> */}
                    <h1>
                        <a className={styles.logo}>Ann0nCv Builder</a>
                    </h1>
                </Link>

                <Navbar.Toggle aria-controls="basic-navbar-nav" className={styles.navbarNav}>
                    <i className="material-icons">menu</i>
                </Navbar.Toggle>

                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="ml-auto">
                        <div className={styles.navItem}>ES</div>

                        <div className={styles.navItem}>
                            <a href="https://github.com/ann0nip/resume-builder" target="_blank" rel="noopener noreferrer">
                                GitHub
                            </a>
                        </div>
                    </Nav>
                </Navbar.Collapse>
            </section>
        </Navbar>
    );
}
