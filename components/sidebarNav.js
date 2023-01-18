import styles from '../styles/Header.module.css'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/logos/Fabing.png'
import NavLinks from './navLinks'
import {GiHamburgerMenu} from 'react-icons/gi'
import { useState } from 'react'


export default function SidebarNav(){

    let [open, setOpen] = useState(false);

    return(
        <>
        <nav className={styles.sidebarNav}>
            <GiHamburgerMenu className={styles.Burger} size = '40px' color = 'black'
                            onClick={() => setOpen(!open)}/>
            {open && <NavLinks/>}
        </nav>
        </>
    )

}