import {useNavigate} from "react-router-dom"
import styles from './Card.module.css'
import { Button }  from 'antd';

export const Card = ({ imageUrl, title, id, className}) => {
    const navigate = useNavigate()

    const routeChange = () => {
        const path = `/nft/${id}`
        navigate(path)
    }

    return <div className={`${styles.cart} ${className}`}>
            <div className={styles.title}>{title}</div>

            <img alt="cant display on main page" src={imageUrl} />

            <Button className={styles.button} type='primary' onClick={() => routeChange()}>Подробнее</Button>
    </div>
}