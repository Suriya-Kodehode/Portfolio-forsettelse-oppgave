

import { Link, useLocation } from 'react-router-dom';

import styles from './header.module.css';
import { useContext } from 'react'
import { SavedTheme } from '../toggleTheme/savedTheme';

export function Header() {
    const location = useLocation();
    const { theme } = useContext(SavedTheme)
    const activeClass = theme === 'light' ? styles.lightPageActive : styles.darkPageActive

    return (
        <div className={styles.container}>
           <nav>
                <ul>
                    <li className={`${location.pathname === '/' ? activeClass : ''}`}>
                        <Link to='/'>Home</Link>
                    </li>
                    <li className={`${location.pathname === '/ferdighet' ? activeClass : ''}`}>
                        <Link to='/ferdighet'>Ferdighet</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}
