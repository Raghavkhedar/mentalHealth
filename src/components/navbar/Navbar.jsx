import styles from './navbar.module.css'
import heart from '../../assets/heart-wings-angel-svgrepo-com.png'

const Navbar = () => {
    return (
        <div className={styles.navbar}>
            <div className = {styles.container}>

                <div className ={styles.logo}>

                    <img  src={heart} alt="" style={{height:'10rem', width: '10rem'}}/>

                </div>

                <div >
                    <ul className={styles.options}>
                        <li>About Us</li>
                        <li>Resources</li>
                        <li>Support</li>
                        <li>Counselling</li>
                        <li>Wellness Tools</li>
                        <li>Blog</li>
                        <li>Events</li>
                        <li>Contacts Us</li>
                    </ul>
                </div>

            </div>
        </div>
    )
}
export default Navbar
