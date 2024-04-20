import styles from './navbar.module.css'
import heart from '../../assets/heart-wings-angel-svgrepo-com.png'


const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className={styles.container}>

                <div className={styles.container1}>
                    <img src={heart} alt="" style={{height: '10rem', width: '10rem'}}/>
                </div>

                <div>
                    <ul className={styles.container2}>
                        <li className={styles.navbar1}>About Us</li>
                        <li>Resources</li>
                        <li>Counselling</li>
                        <li>Wellness Tools</li>
                        <li>Blog</li>
                        <li>Events</li>
                    </ul>
                </div>

                <div className={styles.container3}>
                    <button>Log in</button>
                </div>

            </div>
        </div>
    )
}
export default Navbar
