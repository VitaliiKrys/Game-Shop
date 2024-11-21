import PropTypes from 'prop-types';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { addItemToCart } from '../../store/cart/cart';
import bucket from '../Pictures/bucket.png';
import styles from './Game.css';

export default function Game({ game }) {
    const { imageUrl, name, id, available, price } = game;
    const dispatch = useDispatch();
    const dicount = useSelector((state) => state.cartSlice.dicount);

    return (
        <div className={styles.game}>
            <img src={imageUrl} alt={name} className={styles.qwe} />
            <h3 className={available ? '' : styles.unavailableH3}>{available ? 'В НАЯВНОСТІ' : 'ВІДСУТНЯ'}</h3>
            <p className={styles.title}>{name}</p>
            <h4>Код товару: {id}</h4>
            <p id={styles.price} className={dicount > 0 ? styles.discounted : ''}>
                {' '}
                {price} грн{' '}
            </p>
            {dicount > 0 && (
                <div className={styles.discountedPrice}>{(game.price * (1 - dicount / 100)).toFixed(2)} грн</div>
            )}
            <button
                className={styles.bucketButton1}
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
    );
}
Game.propTypes = {
    game: PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        available: PropTypes.bool.isRequired,
        price: PropTypes.number.isRequired,
        condition: PropTypes.string,
    }).isRequired,
};
