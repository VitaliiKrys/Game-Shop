import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

import { auth } from '../../firebase';
import styles from './Login.css';

const Register = () => {
    const [email, setEmail] = React.useState('');
    const [password, setPassword] = React.useState('');
    const [error, setError] = React.useState('');
    const navigate = useNavigate();

    function register(event) {
        event.preventDefault();
        if (password.length < 6) {
            setError('Password is too short');
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then((user) => {
                console.log(user);
                setEmail('');
                setPassword('');
                setError('');
                navigate('/');
            })
            .catch((error) => {
                console.error(error);
                setError(error.message); // Optionally set the error message for display
            });
    }

    return (
        <div className={styles.login}>
            <form onSubmit={register}>
                <h1>Register</h1>
                {error && <p className={styles.error}>{error}</p>} {/* Display error if it exists */}
                <label htmlFor="">Email</label>
                <input value={email} onChange={(event) => setEmail(event.target.value)} type="email" required />
                <label htmlFor="">Password</label>
                <input
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    type="password"
                    required
                />
                <button type="submit">Register</button> {/* Changed button text to "Register" */}
                <h2>
                    <Link to="/Login" className={styles.links}>
                        Маєте акаунт? Увійдіть
                    </Link>
                </h2>
            </form>
        </div>
    );
};

export default Register;
