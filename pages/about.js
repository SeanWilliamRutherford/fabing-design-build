import Head from 'next/head'
import kenilworthHouse from '../public/kenilworth_house.jpg'
import Image from 'next/image';
import styles from '../styles/About.module.css';
import fabings from '../public/fabing_family.jpg'

export default function About() {
  return (
    <div className={styles.body}>
      <div className={styles.container}>
          <div className={styles.top}>
            <div className={styles.abouttext}>
            <h1>What we offer</h1>
            <p>We develop properties in order to maximize clients return on investment. If you want to
               upgrade your home or rental to incorporate a legal basement suite or increase the value with an
               extension, we can help.
               
            </p>
            </div>
          </div>
          
        
          
          <div className={styles.bottom}>
           <div className={styles.abouttext}>
            <h2>Our Story</h2>
            <p>Fabing Contracting Inc began in Edmonton, 1976 by Winston Fabing, Certified General
                Contractor and evolved to manage commercial contracts in the 1990’s. Winnie’s high standards
                and passion for detail made him a valued and highly regarded Craftsman. Son, Wayne Fabing
                now co-manages operations and ventures as a real estate investor and General Contractor. They
                are privileged to be able to develop great value for homeowners and landlords, making the YEG
                community even more beautiful one property at a time. We are small enough to work closely
                with you or design for you and execute the build.</p>
          </div>
          </div>
      </div>
    </div>  
  )
}