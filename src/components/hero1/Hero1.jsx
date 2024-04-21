import styles from './hero1.module.css'

const Hero1 = () => {
const handleClick = () => {
    window.open('https://mediafiles.botpress.cloud/fe3ecdfb-3cc0-451b-888f-be67089ce3e0/webchat/bot.html', 'Request Information');
}
    return (

        <div className={styles.hero}>
            <div className={styles.main}>
                <h1 className={styles.heading1}>
                    Because mind and body are connected
                </h1>

                <h1 className={styles.heading2}>
                    Calm Health offers evidence-based mental health programs and tools focused on anxiety and depression
                    that are designed to support payers, plan sponsors, and providers.
                </h1>

                <button className={styles.button} onClick={handleClick}>Request Information</button>
            </div>
        </div>

    )
}
export default Hero1
