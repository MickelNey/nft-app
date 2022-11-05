import React from 'react'
import { useSelector } from "react-redux";

import styles from './CartsPage.module.css'
import { Card } from "../../components"

export const CartsPage = () => {
    const nftImages = useSelector(state => state.images.nftImages)

    return (
        <div className={styles.page}>
            <div className={styles.container}>
                {nftImages.map(
                    image => <Card
                        key={image.id}
                        className={styles.card_container}
                        imageUrl={image.imageUrl}
                        title={image.name}
                        id={image.id}
                    />
                )}
            </div>
        </div>
    )
}