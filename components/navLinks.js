import styles from '../styles/Header.module.css'
import Link from 'next/link'
import { useRouter } from 'next/router';


export default function NavLinks(){

    const router = useRouter();
    const currentRoute = router.pathname;


    return(
        <>
        
            <ul>
                <li>
                    <Link href="/"
                        className={currentRoute === "/" 
                        ? styles.activelink 
                        : styles.link}>HOME</Link>
                </li>
                <li>
                    <Link href="/projects/kitchens"
                        className={currentRoute.startsWith("/projects") 
                        ? styles.activelink 
                        : styles.link}>PROJECTS</Link>
                </li>
                <li>
                    <Link href="/about"
                        className={currentRoute === "/about" 
                        ? styles.activelink 
                        : styles.link}>ABOUT</Link>
                </li>
                <li>
                    <Link href="/contact"
                        className={currentRoute === "/contact" 
                        ? styles.activelink 
                        : styles.link}>CONTACT</Link>
                </li>
            </ul>    
        
        </>
    )

}