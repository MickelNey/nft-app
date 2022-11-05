import styles from "./Trait.module.css";
import React from "react";

export const Trait = ({title, value, className}) => {
    return (
        <div className={`${styles.trait} ${className}`}>
            <div className={styles.trait_title}>{title}</div>
            <div className={styles.trait_value}><span>{value}</span></div>
        </div>
    )
}
