import { signInWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { auth } from '../../firebase';
import styles from './Login.css';

const Login = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');
    const navigate = useNavigate();

    function logIn(event) {
        event.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((user) => {
                console.log(user);
                setEmail('');
                setPassword('');
                setError('');
                navigate('/');
            })
            .catch((error) => {
                console.error(error);
                setError('Вибачте, ваш аккаунт не був знайдений');
            });
    }

    return (
        <div className={styles.login}>
            <form onSubmit={logIn}>
                <h1>Login</h1>
                {error && <p className={styles.error}>{error}</p>}
                <label htmlFor="">Email</label>
                <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" required />

                <label htmlFor="">Password</label>
                <input
                    value={password}
                    onChange={(event) => setPassword(event.target.value)} // Fixed typo
                    type="password"
                    required
                />

                <button type="submit">Login</button>
                <h2>
                    <Link to="/Register" className={styles.links}>
                        Не маєте акаунта? Зареєструйтесь
                    </Link>
                </h2>
            </form>
        </div>
    );
};

export default Login;
