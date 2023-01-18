import styles from '../styles/Header.module.css'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/logos/Fabing.png'
import HeaderNav from './headerNav'
import SidebarNav from './sidebarNav'


export default function Header() {
    return(
        <>
        <header className={styles.header}>
        <Link href="/" passHref>
            <Image
                src={logo}
                alt="company logo"
                width={50}
                height={50}
            />
            </Link>
        
            <h1>FABING</h1>
            
            <h2>design &#183; build</h2>

            <div className={styles.Nav}>
                <HeaderNav/>
                <SidebarNav/>  
            </div>

        </header>
        </>
    )
}