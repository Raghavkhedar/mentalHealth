import React from 'react'
import styles from './hero3.module.css'

import row1 from '../../assets/row1.png'
import row2 from '../../assets/row2.png'
import row3 from '../../assets/row3.png'
import row4 from '../../assets/row4.png'
import row5 from '../../assets/row5.png'
const Hero3 = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.container}>
                <div className={styles.row1}>
                    <div className={styles.text1}>
                        <h1>Easily screen your population for
                            anxiety and depression</h1>
                    </div>
                    <div>
                        <img src={row1} alt=""  className={styles.image1}/>
                    </div>
                </div>

                <div className={styles.row2}>

                </div>

                <div className={styles.row3}>

                </div>

                <div className={styles.row4}>

                </div>

                <div className={styles.row5}>

                </div>
            </div>


        </div>
    )
}
export default Hero3
