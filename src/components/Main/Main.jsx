import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';

import { addItemToCart } from '../../store/cart/cart';
import Game from '../Game/Game';
import asasin from '../Pictures/asasin.jpg';
import bucket from '../Pictures/bucket.png';
import ds from '../Pictures/ds.png';
import ghost from '../Pictures/ghost.png';
import horizon from '../Pictures/horizon.jpg';
import mario from '../Pictures/mario.jpg';
import nintendoSwitch from '../Pictures/nintendoSwitch.png';
import ps4 from '../Pictures/ps4.png';
import rdr from '../Pictures/rdr.png';
import witcher from '../Pictures/witcher.png';
import xbox from '../Pictures/xbox.png';
import styles from './Main.css';

const gamesDay = [
    {
        id: '1400000414',
        name: 'Witcher 3 Wild Hunt',
        price: 1000,
        available: true,
        condition: 'new',
        imageUrl: witcher,
    },
    {
        id: '1400000415',
        name: 'Ghost of Tsushima',
        price: 650,
        available: false,
        condition: 'used',
        imageUrl: ghost,
    },
    {
        id: '1400000420',
        name: 'Ac Mirage',
        price: 1000,
        available: true,
        condition: 'new',
        imageUrl: asasin,
    },
    {
        id: '1400000427',
        name: 'Super Mario Odyssey',
        price: 800,
        available: false,
        condition: 'used',
        imageUrl: mario,
    },
];

const games = [
    {
        id: '1400000417',
        name: 'RDR II',
        price: 200,
        available: true,
        condition: 'new',
        imageUrl: rdr,
    },
    {
        id: '1400000418',
        name: 'Ghost of Tsushima',
        price: 650,
        available: false,
        condition: 'used',
        imageUrl: ghost,
    },
    {
        id: '1400000420',
        name: 'Ac Mirage',
        price: 1000,
        available: true,
        condition: 'new',
        imageUrl: asasin,
    },
    {
        id: '1400000419',
        name: 'Horizon Zero Dawn',
        price: 300,
        available: true,
        condition: 'used',
        imageUrl: horizon,
    },
    {
        id: '1400000421',
        name: 'Dark Souls 3',
        price: 800,
        available: true,
        condition: 'used',
        imageUrl: ds,
    },
    {
        id: '1400000427',
        name: 'Super Mario Odyssey',
        price: 800,
        available: false,
        condition: 'used',
        imageUrl: mario,
    },
];

const productNames = {
    ProductPs: 'PlayStation',
    ProductXb: 'Xbox',
    ProductNs: 'Nintendo Switch',
};

const Main = () => {
    const [gamesDayState] = useState(gamesDay);
    const [gamesState] = useState(games);
    const dispatch = useDispatch();

    return (
        <div id={styles.containerHomePage}>
            <h1>Ігри дня</h1>
            <div id={styles.itemDays}>
                {gamesDayState.length > 0 ? (
                    gamesDayState.map((game) => (
                        <div className={styles.gameDays} key={game.id}>
                            <img src={game.imageUrl} alt={game.name} className={styles.imgGame} />
                            <div className={styles.textContainer}>
                                <h2>{game.name}</h2>
                                <h3>{game.price} грн</h3>
                                <button
                                    className={styles.bucketButton2}
                                    onClick={() =>
                                        dispatch(
                                            addItemToCart({
                                                id: game.id,
                                                name: game.name,
                                                price: game.price,
                                                available: game.available,
                                                condition: game.condition,
                                                imageUrl: game.imageUrl,
                                            }),
                                        )
                                    }
                                >
                                    <img src={bucket} alt="bucket" className={styles.bucketButtonImg1} />
                                </button>
                            </div>
                        </div>
                    ))
                ) : (
                    <p>Ігор дня немає.</p>
                )}
            </div>

            <h1>Ігрові платформи</h1>
            <div id={styles.category}>
                {['ProductPs', 'ProductXb', 'ProductNs'].map((product, index) => (
                    <div key={product}>
                        <Link to={`/${product}`} className={styles.link}>
                            <button className={styles.buttonsCategorry}>
                                <div className={styles.imgBord}>
                                    <img
                                        src={[ps4, xbox, nintendoSwitch][index]}
                                        alt={productNames[product]}
                                        className={styles.imgCatogory}
                                    />
                                </div>
                                <h1>{`Ігри ${productNames[product]}`}</h1>
                            </button>
                        </Link>
                    </div>
                ))}
            </div>

            <h1>Популярні ігри</h1>
            <div id={styles.pg}>
                {gamesState.length > 0 ? (
                    gamesState.map((game) => <Game game={game} key={game.id} />)
                ) : (
                    <p>Популярні ігри відсутні.</p>
                )}
            </div>
        </div>
    );
};

export default Main;
