import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

import { auth } from '../../firebase';
import styles from './Information.css';

const Information = () => {
    const [user, setUser] = useState();

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged((currentUser) => {
            setUser(currentUser);
        });

        return () => unsubscribe();
    }, []);

    const handleLogout = () => {
        signOut(auth)
            .then(() => {
                console.log('User signed out');
                setUser(undefined);
            })
            .catch((error) => {
                console.error('Error signing out:', error);
            });
    };

    return (
        <div className={styles.info}>
            <h1>Ваш акаунт:</h1>
            {user ? (
                <div>
                    <p>Email: {user.email}</p>
                    <button onClick={handleLogout} className={styles.buttonExit}>
                        Вийти з акаунта
                    </button>
                </div>
            ) : (
                <p>Будь ласка, увійдіть до свого акаунта.</p>
            )}

            {!user && (
                <button>
                    <Link to="/Login" className={styles.links}>
                        Увійти
                    </Link>
                </button>
            )}
        </div>
    );
};

export default Information;
