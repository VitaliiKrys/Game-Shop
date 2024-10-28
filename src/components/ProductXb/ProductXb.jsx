import React, { useState } from 'react';

import asasin from '../Pictures/asasin.jpg';
import bioshock from '../Pictures/bioshock.jpg';
import bucket from '../Pictures/bucket.png';
import ds from '../Pictures/ds.png';
import minecraft from '../Pictures/minecraft.png';
import sot from '../Pictures/sot.jpg';
import wd from '../Pictures/wd.png';
import styles from './ProductXb.css';

const games = [
    {
        id: '1400000420',
        name: 'Ac Mirage ',
        price: 1000,
        available: true,
        condition: 'new',
        imageUrl: asasin,
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
        id: '1400000422',
        name: 'Watch Dogs 2',
        price: 400,
        available: true,
        condition: 'used',
        imageUrl: wd,
    },
    {
        id: '1400000423',
        name: 'Bioshock Infinite',
        price: 200,
        available: true,
        condition: 'used',
        imageUrl: bioshock,
    },
    {
        id: '1400000424',
        name: 'Sea of Thieves',
        price: 650,
        available: true,
        condition: 'used',
        imageUrl: sot,
    },
    {
        id: '1400000425',
        name: 'Minecraft Story Mode',
        price: 300,
        available: false,
        condition: 'used',
        imageUrl: minecraft,
    },
];

const ProductXb = () => {
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
            selectedAvailability === '' ||
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
                <h1>Ігри Xbox</h1>
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

export default ProductXb;
