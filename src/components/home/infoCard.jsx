
import { useContext } from "react";
import styles from "./home.module.css"
import { TbTruckDelivery } from "react-icons/tb";
import { Shop } from "../../contextpi";
 export function InfoCard({singleInfo,Icon}){
    const {title,info}=singleInfo;
    const {mode}=useContext(Shop);

    return (
        <div className={styles.infoCard}  style={{backgroundColor:mode?"#475569":"#f3f4f6"}}>
        <div className={styles.infoCardCon}>
        <div>
        {Icon }
        </div>
        <div>
        <p className={styles.infoTitle} style={{color:mode?"#ffffff":"black"}}>{title}</p>
        <p className={styles.infoPara} style={{color:mode?"#ffffff":"black"}}>{info}</p>
        </div>
        </div>
        </div>



    )
}