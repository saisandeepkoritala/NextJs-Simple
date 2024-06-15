import React from 'react';
import { DessertData } from '@/assests/data';
import styles from './dessert.module.css';
const GetAllDessert = async() => {
    
    const Desserts = DessertData.map((Dessert) => {
        return <div key={Dessert.id} className={styles.dessertCard}>
            <img src={Dessert.img} alt={Dessert.name} width={200}/>
            <h2>Name :{Dessert.name}</h2>
            <h4>{Dessert.description}</h4>
        </div>
    })
    return (
        <div className={styles.container}>{Desserts}</div>
    )
}

export default GetAllDessert