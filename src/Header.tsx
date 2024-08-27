import React from 'react';
import styles from './Header.module.scss';
import { NavigateFunction } from 'react-router-dom';

type Props = {
    navigate: NavigateFunction;
};

const Header: React.FC<Props> = ({ navigate }) => {
    return (
        <header className={styles.header}>
            <div className={styles.logo}>
                <button onClick={() => navigate('/')}>MyApp</button>
            </div>
            <nav className={styles.nav}>
                <button onClick={() => navigate('/profile')}>Profile</button>
                <button onClick={() => navigate('/settings')}>Settings</button>
            </nav>
        </header>
    );
};

export default Header;
