import React from 'react';
import Link from 'next/link';
import styles from './footer.module.scss';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className="container">
                <div className={['row', styles.footerNav].join(' ')}>
                    <p>
                        Forked from{' '}
                        <a target="_blank" href="https://github.com/sramezani/resume-builder">
                            sramezani's
                        </a>
                        {'  '}
                        repo ©2021.
                    </p>
                </div>
            </div>

            <div className={styles.footerCopyright}>A product of www.ann0nip.com</div>
        </footer>
    );
}
