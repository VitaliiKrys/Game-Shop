import React from 'react';
import { Link } from 'react-router-dom';

import instagram from '../Pictures/instagram.png';
import telegram from '../Pictures/telegram.png';
import x from '../Pictures/x.png';
import styles from './Footer.css';

const Footer = () => (
    <div id={styles.footer}>
        <div>
            <h1>
                Телефони: <br />
                +38050565221
            </h1>
            <p>
                <Link to="/Info" className={styles.links}>
                    Інформація
                </Link>{' '}
                <br />
                <Link to="/Info" className={styles.links}>
                    Оплата та доставка
                </Link>
                <br />
                <Link to="/Info" className={styles.links}>
                    Обмін та повернення
                </Link>{' '}
                <br />
                <Link to="/Info" className={styles.links}>
                    Бонусні жетони
                </Link>{' '}
                <br />
                <Link to="/Reviews" className={styles.links}>
                    Відгуки
                </Link>
            </p>
        </div>
        <div>
            <h2>
                Популярне: <br />
                <br />
                <Link to="/ProductPs" className={styles.links}>
                    PlayStation
                </Link>{' '}
                <br />
                <Link to="/ProductXb" className={styles.links}>
                    Xbox
                </Link>{' '}
                <br />
                <Link to="/ProductNs" className={styles.links}>
                    Nintendo Switch
                </Link>
            </h2>
        </div>
        <div>
            <h2>
                Контакти та адреса: <br />
                <br />
                <br />
                Ужгород вулиця Загорська , 89
            </h2>
        </div>
        <div>
            <h1>Соц мережі:</h1>
            <Link to="https://www.instagram.com" className={styles.links}>
                <img src={instagram} alt="" className={styles.footerLogo} />
            </Link>
            <Link to="https://web.telegram.org/a/" className={styles.links}>
                <img src={telegram} alt="" className={styles.footerLogo} />{' '}
            </Link>
            <Link to="https://x.com/" className={styles.links}>
                <img src={x} alt="" className={styles.footerLogo} />
            </Link>
        </div>
    </div>
);

export default Footer;
