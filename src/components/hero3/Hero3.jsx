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
                        <h1>Virtual peer group sessions</h1>
                    </div>
                    <div>
                        <img src={row1} alt=""  className={styles.image1}/>
                    </div>
                </div>

                <div className={styles.row2}>
                    <div>
                        <img src={row2} alt="" className={styles.image2}/>
                    </div>
                    <div className={styles.text2}>
                        <h1>One to one counselling sessions with skilled councellors</h1>
                    </div>
                </div>

                <div className={styles.row3}>
                    <div className={styles.text3}>
                        <h1>Mood trackers for self improvement and personalised MindBot</h1>
                    </div>
                    <div>
                        <img src={row3} alt="" className={styles.image3}/>
                    </div>
                </div>

                <div className={styles.row4}>
                    <div>
                        <img src={row4} alt="" className={styles.image4}/>
                    </div>
                    <div className={styles.text4}>
                        <h1>One stop for all mental health related issues</h1>
                    </div>
                </div>

                <div className={styles.row5}>
                    <div className={styles.text5}>
                        <h1>Easily screen your population for
                            anxiety and depression</h1>
                    </div>
                    <div>
                        <img src={row5} alt="" className={styles.image5}/>
                    </div>
                </div>
            </div>


        </div>
    )
}
export default Hero3
