import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContexts';
import styles from '../styles/components/Profile.module.css';

export function Profile () {
    const { level } = useContext(ChallengesContext)

    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/Gabriel-Venancio.png" alt="Gabriel Venancio" />
            <div>
                <strong>Gabriel Venancio</strong>
                <p>
                <img src="icons/level.svg" alt="Level"/>
                Level { level }
                </p>
            </div>
        </div>
    )
}