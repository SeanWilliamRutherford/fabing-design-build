import Image from 'next/image';
import styles from '../styles/Projects.module.css';
import Link from 'next/link';
import { useRouter } from 'next/router';

/*
Add back for development of Remodels tab

<li className={styles.item}>
    <Link href="/projects/remodels"className={currentRoute.startsWith("/projects/remodels") 
        ? styles.activelink 
        : styles.link}>Remodels</Link>
</li>

*/


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
                    <Link href="/projects/livingspaces"className={currentRoute === "/projects/livingspaces" 
                        ? styles.activelink 
                        : styles.link}>Living Spaces</Link>
                </li>
            </ul>

            <h2>Click each image to see the before view!</h2>
            
        </div>
    </div>
  )
}