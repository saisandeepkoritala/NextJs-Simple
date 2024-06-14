import React from 'react';
import { PizzaData } from '@/assests/data';
import styles from './pizza.module.css';

const GetAllPizza = () => {
    const Pizzas = PizzaData.map((pizza) => {
        return (
            <div className={styles.pizzaCard} key={`${pizza.id}${pizza.name}`}>
                <img src={pizza.img} alt={pizza.name} width={200}/>
                <h2>{pizza.name}</h2>
                <h3>Value for Money: {pizza.price}</h3>
                <h4>{pizza.description}</h4>
            </div>
        );
    });

    return (
        <div className={styles.container}>
            {Pizzas}
        </div>
    );
};

export default GetAllPizza;
