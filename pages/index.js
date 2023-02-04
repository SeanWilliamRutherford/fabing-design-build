import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image';
//import Button from 'bootstrap'
import styles from '../styles/Home.module.css';
//import 'bootstrap/dist/css/bootstrap.css'
import image1 from '../public/logos/Fabing.png'
import {IoConstructOutline} from 'react-icons/io5'
import {MdEmojiPeople} from 'react-icons/md'
import {AiOutlineArrowRight} from 'react-icons/ai'
import backgroundCityscape from '/public/edmonton_bridge_skyline.jpeg'

export default function Home() {
  return (
    <div className={styles.container}>
        <Head>
        <title>
          Home - Fabing Design Build
        </title>
        <meta
          name="description"
          content="If you need to upgrade your home with an extension or renovation, we can help"
          key="desc"
        />
      </Head>
        <div className={styles.itema}>
          <h1>Full Scale Design-Build.</h1>
          <Link href="/contact" passHref> 
            <button className={styles.contactbutton} variant="outline" color="primary">
              Contact Us
              <AiOutlineArrowRight className={styles.arrow}/>
              </button>
          </Link>
        

        <div className={styles.linklist}>
          <Link href="/projects/kitchens" passhref>
            <div className={styles.itemb}>
              <IoConstructOutline className={styles.icon} size='60px'/>
              <h1>Our Work</h1>
            </div>
          </Link>
          <Link href="/about" passhref>
            <div className={styles.itemf}>
              <MdEmojiPeople className={styles.icon} size = '60px' />
              <h1>Who we are</h1>
            </div>
          </Link>
        </div>
        </div>

    </div>
  )
}