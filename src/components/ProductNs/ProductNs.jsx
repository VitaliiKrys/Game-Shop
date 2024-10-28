import React, { useState } from 'react';

import bucket from '../Pictures/bucket.png';
import fata from '../Pictures/fata.jpg';
import mario from '../Pictures/mario.jpg';
import p5 from '../Pictures/p5.png';
import portal from '../Pictures/portal.png';
import undertale from '../Pictures/undertale.jpg';
import zelda from '../Pictures/zelda.jpg';
import styles from './ProductNs.css';

const games = [
    {
        id: '1400000426',
        name: 'Zelda: BotW',
        price: 1000,
        available: true,
        condition: 'new',
        imageUrl: zelda,
    },
    {
        id: '1400000427',
        name: 'Super Mario Odyssey',
        price: 800,
        available: false,
        condition: 'used',
        imageUrl: mario,
    },
    {
        id: '1400000428',
        name: 'Fata Morgana',
        price: 400,
        available: true,
        condition: 'new',
        imageUrl: fata,
    },
    {
        id: '1400000429',
        name: 'Portal: CС',
        price: 200,
        available: true,
        condition: 'new',
        imageUrl: portal,
    },
    {
        id: '1400000430',
        name: 'Undertale',
        price: 650,
        available: false,
        condition: 'used',
        imageUrl: undertale,
    },
    {
        id: '1400000431',
        name: 'Persona 5 Royal',
        price: 300,
        available: true,
        condition: 'used',
        imageUrl: p5,
    },
];

const ProductNintendo = () => {
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
                <h1>Ігри Nintendo Switch</h1>
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

export default ProductNintendo;
