import React from 'react';
import styles from './Loader.module.css'

export const Loader = ({ size = '5em' }) => {
    return (
        <div className={styles.spinner}>
            <div className={styles.loader} style={{ height: size, width: size }} />
        </div>
    )
}