import React from 'react'
import styles from './hero4.module.css'
const Hero4 = () => {
    return (
        <div className = {styles.hero}>
            <div className={styles.container}>
                <h1 className={styles.text}>Want to learn more?</h1>
                <button className={styles.button}>Request Information</button>
            </div>
        </div>
    )
}
export default Hero4
