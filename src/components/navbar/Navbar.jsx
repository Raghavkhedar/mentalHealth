import styles from './navbar.module.css'
import logo from '../../assets/logo.png'
const Navbar = () => {
    return (
            <div className={styles.navbar}>

                <div className={styles.container1}>
                    <img src={logo} alt="" className={styles.logo}/>
                </div>

                <div className={styles.container2}>
                    <ul className={styles.marker}>
                        <li className={styles.mid} style={{color: 'deepskyblue'}} >About Us</li>
                        <li className={styles.mid}>Resources</li>
                        <li className={styles.mid}>Wellness Tools</li>
                        <li className={styles.mid}>Blog</li>
                    </ul>
                </div>

                <div className={styles.container3}>
                    <button className={styles.custom}>Log in</button>
                </div>

            </div>
    )
}
export default Navbar
