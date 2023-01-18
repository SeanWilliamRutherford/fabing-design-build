import Head from 'next/head'
import Image from 'next/image';
import styles from '/styles/Projects.module.css';
import bathroom1 from '/public/bathrooms/bathroom1.jpg'
import bathroom2 from '/public/bathrooms/bathroom2.jpg'
import bathroom3 from '/public/bathrooms/bathroom3.PNG'
import Link from 'next/link';
import ProjectsNav from '/components/projectsNav'


export default function Garages() {
  return (
    <div className={styles.body}>
        <>
        <ProjectsNav/>
        </>
        <div className={styles.container}>
          <div className={styles.card}>
            <Image src={bathroom1}
                   alt="Bathroom Image"
            />
            
          </div>
          <div className={styles.card}>
          <Image src={bathroom2}
                 alt="Bathroom Image"
            />
          </div>
          <div className={styles.card}>
          <Image src={bathroom3}
                 alt="Bathroom Image"
            />
             
          </div>
        </div>

    </div>
  )
}