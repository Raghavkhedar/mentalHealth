import styles from './hero1.module.css'

const Hero1 = () => {
    return (
       
        <div className={styles.hero}>
            {/* <div className={styles.opa}> */}
            <div className={styles.main}><h1 className={styles.h1}>Because mind and body are <br/>connected</h1></div>
            <div className={styles.over}><p className={styles.p}>Calm Health offers evidence-based mental health programs
             and tools<br/> focused on anxiety and depression that are designed to support <br/>payers,
              plan sponsors, and providers.</p></div>
            <div><button className={styles.button} href="#">Request Information</button></div>
            {/* </div> */}
        </div>
       
    )
}
export default Hero1
