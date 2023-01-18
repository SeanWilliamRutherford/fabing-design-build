import Image from 'next/image';
import styles from '../styles/Projects.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';


export default function ProjectsNav() {

    const router = useRouter();
    const currentRoute = router.pathname;

  return (
    <div className={styles.body}>
        <div className={styles.top}>
          <h1>Efficient and Exceptional</h1>
          
          <ul>
                <li className={styles.item}>
                    <Link href="/projects/baths" 
                          className={currentRoute === "/projects/baths" 
                        ? styles.activelink 
                        : styles.link}>Bathrooms</Link>
                </li>
                <li className={styles.item}>
                    <Link href="/projects/kitchens"className={currentRoute === "/projects/kitchens" 
                        ? styles.activelink 
                        : styles.link}>Kitchens</Link>
                </li>
                <li className={styles.item}>
                    <Link href="/projects/garages"className={currentRoute === "/projects/garages" 
                        ? styles.activelink 
                        : styles.link}>Garages</Link>
                </li>
                <li className={styles.item}>
                    <Link href="/projects/remodels"className={currentRoute.startsWith("/projects/remodels") 
                        ? styles.activelink 
                        : styles.link}>Remodels</Link>
                </li>
            </ul>
            
        </div>
    </div>
  )
}