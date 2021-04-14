import React from 'react';
import Link from 'next/link';

import { HeaderNavbar, Footer } from '@component';

import styles from './style.module.scss';

export default function Home() {
    return (
        <div className={styles.homePage}>
            <HeaderNavbar />

            <div className="container">
                <section className={['row', styles.first].join(' ')}>
                    <div className={['col-md-6', styles.firstLeft].join(' ')}>
                        <p>
                            Con <strong>Ann0nCv Builder</strong>, diseñar tu CV es muy fácil, así vas a poder enfocarte en presentar tus
                            habilidades de manera simple y clara para conseguir el trabajo de tus sueños.
                        </p>

                        <div className={styles.crBtn}>
                            <Link href="/resume-builder">
                                <a>Crea tu Currículum Gratis!</a>
                            </Link>
                        </div>
                    </div>
                    <div className={['col-md-6', styles.firstRight].join(' ')}>
                        <img src="/images/bg_home.jpg" alt="first slide image home page" className="imgResponsive" />
                    </div>
                </section>

                <section className={[styles.second].join(' ')}>
                    <div className={styles.secondTitle}>
                        <h2>Por qué usar Ann0nCV?</h2>
                    </div>

                    <div className={['row justify-content-md-center', styles.itemsRow].join(' ')}>
                        <div className="col-md-10 row justify-content-md-center">
                            <div className={['col-md-7', styles.secondItem].join(' ')}>
                                <article className={['row', styles.item].join(' ')}>
                                    <div className={[styles.itemImg, styles.itemImgBg1].join(' ')}>
                                        <img src="images/icons/signs.png" alt="100% free" className="imgResponsive verticalCenter" />
                                    </div>
                                    <p>100% Gratis</p>
                                </article>
                            </div>
                            <div className={['col-md-5', styles.secondItem].join(' ')}>
                                <article className={['row', styles.item].join(' ')}>
                                    <div className={[styles.itemImg, styles.itemImgBg4].join(' ')}>
                                        <img src="images/icons/body.png" alt="easy to use" className="imgResponsive verticalCenter" />
                                    </div>
                                    <p>Fácil de usar</p>
                                </article>
                            </div>
                        </div>
                    </div>

                    <div className={['row justify-content-md-center', styles.itemsRow].join(' ')}>
                        <div className="col-md-10 row justify-content-md-center">
                            <div className={['col-md-7', styles.secondItem].join(' ')}>
                                <article className={['row', styles.item].join(' ')}>
                                    <div className={[styles.itemImg, styles.itemImgBg2].join(' ')}>
                                        <img src="images/icons/time.png" alt="makes a minute" className="imgResponsive verticalCenter" />
                                    </div>
                                    <p>Tu CV en minutos</p>
                                </article>
                            </div>
                            <div className={['col-md-5', styles.secondItem].join(' ')}>
                                <article className={['row', styles.item].join(' ')}>
                                    <div className={[styles.itemImg, styles.itemImgBg3].join(' ')}>
                                        <img
                                            src="images/icons/register.png"
                                            alt="No need register"
                                            className="imgResponsive verticalCenter"
                                        />
                                    </div>
                                    <p>No necesitas registrarte</p>
                                </article>
                            </div>
                        </div>
                    </div>

                    <div className={['row justify-content-md-center', styles.itemsRow].join(' ')}>
                        <div className="col-md-10 row justify-content-md-center">
                            <div className={['col-md-7', styles.secondItem].join(' ')}>
                                <article className={['row', styles.item].join(' ')}>
                                    <div className={[styles.itemImg, styles.itemImgBg5].join(' ')}>
                                        <img
                                            src="images/icons/real-time.png"
                                            alt="real time design"
                                            className="imgResponsive verticalCenter"
                                        />
                                    </div>
                                    <p>Diseño en tiempo real</p>
                                </article>
                            </div>
                            <div className={['col-md-5', styles.secondItem].join(' ')}>
                                <article className={['row', styles.item].join(' ')}>
                                    <div className={[styles.itemImg, styles.itemImgBg6].join(' ')}>
                                        <img src="images/icons/github.png" alt="open source" className="imgResponsive verticalCenter" />
                                    </div>
                                    <p>Open-source</p>
                                </article>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={[styles.third].join(' ')}>
                    <h2>Cómo funciona?</h2>
                    <div className="row justify-content-md-center">
                        <article className={['col-md-6 row justify-content-md-center', styles.thirdVideo].join(' ')}>
                            {/* <iframe
                                width="100%"
                                height="600"
                                src="https://www.youtube.com/embed/u5eIsENOLUc?rel=0&showinfo=1"
                                frameBorder="0"
                                allowFullScreen
                            ></iframe> */}

                            {/* TODO: Video Tutorial */}
                        </article>
                    </div>
                </section>

                <section className={[styles.forth].join(' ')}>
                    <p>Guardá tu progreso y continuá en el futuro.</p>
                    <p className={styles.bold}>Re copado no? 😀</p>
                    <div className={styles.crBtn}>
                        <Link href="/resume-builder">
                            <a>Crea tu Currículum Gratis!</a>
                        </Link>
                    </div>
                </section>
            </div>
            {/* <a href="https://www.freepik.com/vectors/computer">Computer vector created by pch.vector - www.freepik.com</a> */}
            <Footer />
        </div>
    );
}
