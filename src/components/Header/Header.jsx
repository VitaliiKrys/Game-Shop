import React from 'react';
import { Link } from 'react-router-dom';

import bucket from '../Pictures/bucket.png';
import ico from '../Pictures/ico.png';
import nintendo from '../Pictures/nintendo.png';
import pfofileWhite from '../Pictures/pfofileWhite.png';
import styles from './Header.css';

const Header = () => (
    <header className={styles.container}>
        <div className={styles.headerContent}>
            <Link to="/" className={styles.link}>
                <img src={ico} alt="Logo" className={styles.logo} />
            </Link>
            <Link to="/" className={styles.link}>
                <h1>Game Shop</h1>
            </Link>
        </div>
        <ul>
            <li>
                <img src={nintendo} alt="Nintendo" className={styles.logo} />
            </li>
            <li>
                <Link to="/Cart" className={styles.link}>
                    <img src={bucket} alt="Bucket" className={styles.logo} />
                </Link>
            </li>
            <li>
                <Link to="/Information" className={styles.link}>
                    <img src={pfofileWhite} alt="Profile" className={styles.logo} />
                </Link>
            </li>
        </ul>
    </header>
);

export default Header;
