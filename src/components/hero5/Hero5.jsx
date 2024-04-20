import React from 'react'
import styles from './hero5.module.css'
const Hero5 = () => {
    return (
        <div className = {styles.hero}>
            <div className={styles.top}>
                <div>
                    <h1>Drive engagement with our easy-to-use platform</h1>
                </div>
                
                <div className={styles.move}>
                    <div className={styles.width}>
                    <img src="https://assets-global.website-files.com/630d06d6fb092a27172aa8b9/6348b1c258d61bb47b11e42a_icon%20container(Light)%20(4).png"  
                    loading="eager" alt="" class="pricing-image" className={styles.price}></img>
                        <h2 className={styles.h2}>Connect the care team to family caregivers</h2>
                        <p className={styles.para}>Connect professional clinical teams with members, families, and non-sponsored users to reduce communication gaps.</p>
                    </div>
                    
                    <div className={styles.width}>
                    <img src="https://assets-global.website-files.com/630d06d6fb092a27172aa8b9/6348b31a9c1903b163f99025_icon%20container(Light)%20(4).png" 
                    loading="eager" alt="" class="pricing-image" className={styles.price}></img>
                        <h2 className={styles.h2}>Leverage Calm’s best-in-class engagement</h2>
                        <p className={styles.para}>Achieving 30% signup rates and an 80% engagement rate with Calm Business, Calm has proven successful in driving mental health awareness and engagement in a destigmatizing way using high-quality content.</p>
                    </div>
                    
                    <div className={styles.width}>
                    <img src="https://assets-global.website-files.com/630d06d6fb092a27172aa8b9/6348b3367c0e4c26e9a949c4_icon%20container(Light)%20(5).png" 
                    loading="eager" alt="" class="pricing-image" className={styles.price}></img>
                        <h2 className={styles.h2}>Easy and seamless integration</h2>
                        <p className={styles.para}>Our solutions are designed for integration with standard systems (eligibility, SSO) and provider directories and allow for data exchange capabilities.</p>
                    </div>
                    
                    <div className={styles.width}>
                    <img src="https://assets-global.website-files.com/630d06d6fb092a27172aa8b9/6348b35e9de93615ba07fef2_icon%20container(Light)%20(6).png" 
                    loading="eager" alt="" class="pricing-image" className={styles.price}></img>
                        <h2 className={styles.h2}>Private and secure</h2>
                        <p className={styles.para}>Calm Health solutions are built to comply with HITRUST and HIPAA privacy and security standards.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Hero5
