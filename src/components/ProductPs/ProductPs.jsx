import React, { useState } from 'react';

import bucket from '../Pictures/bucket.png';
import ghost from '../Pictures/ghost.png';
import gow from '../Pictures/gow.png';
import gta from '../Pictures/gta.png';
import horizon from '../Pictures/horizon.jpg';
import rdr from '../Pictures/rdr.png';
import witcher from '../Pictures/witcher.png';
import styles from './ProductPs.css';

const games = [
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
        name: 'Grand Theft Auto V',
        price: 800,
        available: false,
        condition: 'used',
        imageUrl: gta,
    },
    {
        id: '1400000416',
        name: 'God of War: Ragnarok',
        price: 400,
        available: true,
        condition: 'used',
        imageUrl: gow,
    },
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
        id: '1400000419',
        name: 'Horizon Zero Dawn',
        price: 300,
        available: true,
        condition: 'used',
        imageUrl: horizon,
    },
];

const ProductPs = () => {
    const [selectedAvailability, setSelectedAvailability] = useState('');
    const [minPrice, setMinPrice] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [selectedCondition, setSelectedCondition] = useState('');

    const handleAvailabilityChange = (value) => {
        setSelectedAvailability(value);
    };

    const handlePriceChange = (event) => {
        const { name, value } = event.target;
        if (name === 'minPrice') {
            setMinPrice(value);
        } else {
            setMaxPrice(value);
        }
    };

    const handleConditionChange = (value) => {
        setSelectedCondition(value);
    };

    const resetAvailability = () => {
        setSelectedAvailability('');
    };

    const resetPrice = () => {
        setMinPrice('');
        setMaxPrice('');
    };

    const resetCondition = () => {
        setSelectedCondition('');
    };

    const filteredGames = games.filter((game) => {
        const matchesAvailability =
            selectedAvailability === null ||
            (selectedAvailability === 'available' && game.available) ||
            (selectedAvailability === 'unavailable' && !game.available);

        const matchesPrice = (minPrice === '' || game.price >= minPrice) && (maxPrice === '' || game.price <= maxPrice);

        const matchesCondition = selectedCondition === '' || game.condition === selectedCondition;

        return matchesAvailability && matchesPrice && matchesCondition;
    });

    return (
        <div className={styles.productPs}>
            <div id={styles.filter}>
                <div className={styles.filterSelection}>
                    <h2>Наявність</h2>
                    <label>
                        <input
                            className={styles.enableCheck}
                            type="checkbox"
                            onChange={() => handleAvailabilityChange('available')}
                            checked={selectedAvailability === 'available'}
                        />
                        <span>В наявності</span>
                    </label>
                    <label>
                        <input
                            className={styles.enableCheck}
                            type="checkbox"
                            onChange={() => handleAvailabilityChange('unavailable')}
                            checked={selectedAvailability === 'unavailable'}
                        />
                        <span>Відсутня</span>
                    </label>
                    <div className={styles.resetButtonContainer}>
                        <button onClick={resetAvailability} className={styles.resetButton}>
                            Скинути
                        </button>
                    </div>
                </div>
                <div className={styles.filterSelection1}>
                    <h2>Ціна</h2>
                    <input
                        className={styles.priceCheck}
                        type="number"
                        name="minPrice"
                        value={minPrice}
                        onChange={handlePriceChange}
                        placeholder="Від:"
                    />
                    <input
                        className={styles.priceCheck}
                        type="number"
                        name="maxPrice"
                        value={maxPrice}
                        onChange={handlePriceChange}
                        placeholder="До:"
                    />
                    <div className={styles.resetButtonContainer}>
                        <button onClick={resetPrice} className={styles.resetButton}>
                            Скинути
                        </button>
                    </div>
                </div>
                <div className={styles.filterSelection}>
                    <h2>Стан</h2>
                    <label>
                        <input
                            className={styles.stanCheck}
                            type="radio"
                            name="condition"
                            value="new"
                            onChange={() => handleConditionChange('new')}
                            checked={selectedCondition === 'new'}
                        />
                        <span>Новий</span>
                    </label>
                    <label>
                        <input
                            className={styles.stanCheck}
                            type="radio"
                            name="condition"
                            value="used"
                            onChange={() => handleConditionChange('used')}
                            checked={selectedCondition === 'used'}
                        />
                        <span>Використаний</span>
                    </label>
                    <div className={styles.resetButtonContainer}>
                        <button onClick={resetCondition} className={styles.resetButton}>
                            Скинути
                        </button>
                    </div>
                </div>
            </div>
            <div id={styles.gamesPs}>
                <h1>Ігри PlayStation</h1>
                <div id={styles.gameSelection}>
                    {filteredGames.map((game) => (
                        <div className={styles.game} key={game.id}>
                            <img src={game.imageUrl} alt={game.name} className={styles.qwe} />
                            <h3 className={game.available ? '' : styles.unavailableH3}>
                                {game.available ? 'В НАЯВНОСТІ' : 'ВІДСУТНЯ'}
                            </h3>
                            <p>{game.name}</p>
                            <h4>Код товару: {game.id}</h4>
                            <p id={styles.price}>{game.price} грн</p>
                            <button className={styles.bucketButton1}>
                                <img src={bucket} alt="bucket" className={styles.bucketButtonImg1} />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ProductPs;
