import styles from './hero1.module.css'

const Hero1 = () => {
const handleClick = () => {
    window.open('https://mediafiles.botpress.cloud/fe3ecdfb-3cc0-451b-888f-be67089ce3e0/webchat/bot.html', 'Request Information');
}
    return (

        <div className={styles.hero}>
            <div className={styles.main}>
                <h1 className={styles.heading1}>
                    We care about you
                </h1>

                <h1 className={styles.heading2}>
                    MindBot, specially designed for you to interact and share your thoughts
                </h1>

                <button className={styles.button} onClick={handleClick}>MindBot</button>
            </div>
        </div>

    )
}
export default Hero1
