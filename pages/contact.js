import Head from 'next/head'
import styles from '../styles/Contact.module.css';
import Link from 'next/link';
import wall from '../public/sandstone-brick-wall.jpg'
import {FiPhone} from 'react-icons/fi'
import {FiMail} from 'react-icons/fi'
import backgroundFireplace from '/public/background-fireplace.jpeg'
import Image from 'next/image';
 
export default function Contact() {
  return (
    <>
    <div className={styles.fixer}>
    <Head>
        <title>
          Contact - Fabing Design Build
        </title>
        <meta
          name="description"
          content="Contact us to get a quote or learn more"
          key="desc"
        />
      </Head>
    <div className={styles.contact}>
      

      <div className={styles.hero}>
          <h1>Contact us</h1>
          <p>If you want to
            upgrade your home or rental to incorporate a legal basement suite or increase the value with an
            extension, we can help.
          </p>
      </div>

      <div className={styles.container}>

        <Link href={'mailto: fabing@ualberta.ca'} passHref>
        <div className={styles.displaylink}>
          <FiMail className={styles.icon} size='70px'/>
          <h5 className={styles.link} >fabing@ualberta.ca</h5>
        </div>
        </Link>

        <Link href={'tel:(780)288-2797'} passHref>
        <div className={styles.displaylink}>
          <FiPhone className={styles.icon} size='70px'/>
          <h5 className={styles.link}>780 288 2797</h5>
        </div>
        </Link>
        
      </div>

    </div>  
    </div>
    </>
  )
}