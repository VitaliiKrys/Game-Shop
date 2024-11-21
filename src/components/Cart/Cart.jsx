import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { activateDiscount } from '../../store/cart/cart.js';
import Game from '../Game/Game.jsx';
import styles from './Cart.css';

export default function Cart() {
    const items = useSelector((state) => state.cartSlice.items);
    const dispatch = useDispatch();
    const [isModalVisible, setIsModalVisible] = useState(false);

    const handleRemove = (gameId) => {
        dispatch({ type: 'cartSlice/removeItem', payload: gameId });
    };

    const handleBuy = (gameId) => {
        dispatch({ type: 'cartSlice/buyItem', payload: gameId });
        dispatch({ type: 'cartSlice/incrementPurchasedGames' });
        dispatch(activateDiscount(0));
        setIsModalVisible(true);
    };

    const closeModal = () => {
        setIsModalVisible(false);
    };

    return (
        <div className={styles.cart}>
            {items.length > 0 &&
                items.map((game) => (
                    <div key={game.id} className={styles.gameItem}>
                        <Game game={game} />
                        <button onClick={() => handleRemove(game.id)} className={styles.removeButton}>
                            Видалити
                        </button>
                        <button onClick={() => handleBuy(game.id)} className={styles.buyButton}>
                            Купити
                        </button>
                    </div>
                ))}

            {isModalVisible && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <p>Гра куплена!</p>
                        <button onClick={closeModal} className={styles.closeModalButton}>
                            Закрити
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
