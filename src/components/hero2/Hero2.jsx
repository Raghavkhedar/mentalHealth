import React from 'react'
import styles from './hero2.module.css'
const Hero2 = () => {
    return (
        <div className={styles.hero}>
            <div className={styles.main}>
                <h1>Introducing MindWell</h1>
                <p>Taking good care of your mental health has never been <br/>more important. 
                Here’s a quick video about how Calm Health<br/> can help.</p>
            </div>
            <div className={styles.video}><VideoPlayer /></div>
        </div>
    )
}
function VideoPlayer() {
    return (
      <video width="320" height="240" controls poster="./assests/cover.png">
        <source src="movie.mp4" type="video/mp4" />
        <source src="movie.ogg" type="video/ogg" />
        Your browser does not support the video tag.
      </video>
    );
  }
  

export default Hero2
