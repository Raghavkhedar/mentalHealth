import styles from './footer.module.css'

const Footer = () => {
    return (
        <div className={styles.footer}>
            {/* Links*/}
            <div className={styles.links}>
                <div>
                    <h3>Company</h3>
                    <p>Overview</p>
                    <p>Employee & Payers</p>
                    <p>Providers</p>
                    <p>Press</p>
                </div>
                <div>
                    <h3>Solutions</h3>
                    {/*different products you are trying to sell*/}
                    <p>Mental Health product 1</p>
                    <p>Mental Health product 2</p>
                    <p>Mental Health product 3</p>
                </div>
                <div>
                    <h3>More Information</h3>
                    <p>FAQ</p>
                    <p>Request Information</p>
                    <p>Careers</p>
                    <p>Resources</p>
                </div>
            </div>
            <div className={styles.line}></div>

            {/*TODO : CopyRight*/}
            <div className={styles.footer_lower}>
                <div>
                    <p>Copyright@2024 SerenitySpace.com, Inc. All Rights Reserved.</p>
                    <div className={styles.footer_lower_lower}>
                        <p>Terms of Service</p>
                        <p>Privacy</p>
                        <p>Your Privacy Choices</p>
                        <p>Cookies</p>
                    </div>
                </div>
                <div>
                    <img
                        src="https://assets-global.website-files.com/630d06d6fb092a27172aa8b9/64ace387f8eba1208e16cf4d_LinkedIn.svg"
                        alt="linkden logo"/>
                </div>
            </div>
        </div>
    )
}
export default Footer
