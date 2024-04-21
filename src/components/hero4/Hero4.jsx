import React from 'react'
import styles from './hero4.module.css'
const Hero4 = () => {
    const handleClick = () => {
        window.open('https://forms.gle/5q1EiJUNZzWZFFfw5', 'Request Information');
    }
    return (
        <div className = {styles.hero}>
            <div className={styles.container}>
                <h1 className={styles.text}>Want to learn more?</h1>
                <button className={styles.button} onClick={handleClick}>Request Information</button>
            </div>
        </div>
    )
}
export default Hero4
