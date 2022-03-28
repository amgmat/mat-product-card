import React,{ useCallback, useContext } from "react";
import styles from '../styles/styles.module.css';

import { ProductContext } from "./ProductCard";

export interface Props{
    className?: string;
    style?:React.CSSProperties;
}

export const ProductButtons = ({className,style}:Props)=>{
    // todo maxCount
    const {increaseBy,counter, maxCount} = useContext(ProductContext);
    // todo: isMaxReached = useCallback,dependencias [counter, maxCount]

    const isMaxReached = useCallback(
      () => !!maxCount && counter === maxCount,
      [counter,maxCount],
    )
    
    // TRUE si el counter == maxCount
    // False si no lo es

    // console.log({maxCount})

    return(
        <div className={`${styles.buttonsContainer} ${className}`}
        style={style}>
        <button 
            className={styles.buttonMinus}
            onClick={()=>increaseBy(-1)}>-</button>
        <div className={styles.countLabel}>{counter}</div>
        <button 
            className={`${styles.buttonMinus} ${isMaxReached() && styles.disabled}`}
            onClick={()=>increaseBy(+1)}>+</button>
    </div>
    )
}