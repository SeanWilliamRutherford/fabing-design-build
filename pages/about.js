import Head from 'next/head'
import kenilworthHouse from '../public/kenilworth_house.jpg'
import Image from 'next/image';
import styles from '../styles/About.module.css';
import fabings from '../public/fabing_family.jpg'

export default function About() {
  return (
    <div className={styles.body}>
      <Head>
        <title>
          About - Fabing Design Build
        </title>
        <meta
          name="description"
          content="Efficient - Reliable - Family Oriented"
          key="desc"
        />
      </Head>
      <div className={styles.container}>
          <div className={styles.top}>
            <div className={styles.abouttext}>
            <h1>What we offer</h1>
            <p>We are passionate about earning your respect and trust 
                as we pay close attention to 
                all the critical & valuable details 
                of your residential or commercial project              
            </p>
            </div>
          </div>
          
        
          
          <div className={styles.bottom}>
           <div className={styles.abouttext}>
            <h2>Our Story</h2>
            <p>Fabing Contracting Inc. started in 1995 delivering cost effective & timely construction management services throughout Alberta and British Columbia, Canada</p>
            <p>We promise strong and responsive communication, adaptability, knowledge and leadership so that your home or office has the form and function it deserves</p>
          </div>
          </div>
      </div>
    </div>  
  )
}