import styles from '../styles/Header.module.css'
import Image from 'next/image'
import Link from 'next/link'
import logo from '../public/logos/fabing-logo-only.png'
import NavLinks from './navLinks'
import {GiHamburgerMenu} from 'react-icons/gi'
import { useState } from 'react'


export default function SidebarNav(){

    let [open, setOpen] = useState(false);

    return(
        <>
        <nav className={styles.sidebarNav} onClick={() => setOpen(!open)}>
            <GiHamburgerMenu className={styles.Burger} size = '40px' color = 'black'
                            />
            {open && <NavLinks/>}
        </nav>
        </>
    )

}