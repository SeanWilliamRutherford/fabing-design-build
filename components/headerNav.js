import styles from '../styles/Header.module.css'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/logos/fabing-logo-only.png'
import NavLinks from './navLinks'


export default function HeaderNav() {
    return(
        <>
        <nav className={styles.headerNav}>
            <NavLinks/>
        </nav>
        </>
    )
}