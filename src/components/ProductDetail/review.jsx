import { FaStar } from "react-icons/fa";
import styles from './ShoppingCard.module.css';
import { useContext } from "react";
import { Shop } from "../../contextpi";

export function Review({review}){
    const {mode}=useContext(Shop);
    return (<div className={styles.reviewCon}>
        <p className={styles.reviewName}>{review.reviewerName}</p>
        <div className={styles.reviewRating}>
        <FaStar style={{fill: review.rating>=1? "yellow":"grey"}}/>
            <FaStar  style={{fill: review.rating>=2? "yellow":"grey"}} />
            <FaStar  style={{fill: review.rating>=3? "yellow":"grey"}} />
            <FaStar  style={{fill: review.rating>=4? "yellow":"grey"}} />
            <FaStar  style={{fill: review.rating>=5? "yellow":"grey"}} />
            <p className={styles.reviewRatingNum} style={{color:mode?"#fff":"black"}}>{review.rating}</p>
        </div>
        <p className={styles.reviewComment}>{review.comment}</p>

        </div>

    )
}