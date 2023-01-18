import Head from 'next/head'
import Image from 'next/image';
import styles from '/styles/Projects.module.css';
import remodelBasement from '/public/remodels/remodel-basement.JPG'

import remodelKirkness from '/public/remodels/remodel-kirkness.jpg'
import remodelUnk from '/public/remodels/remodel-unk.JPG'
import Link from 'next/link';
import ProjectsNav from '/components/projectsNav'


export default function Remodels() {
  return (
    <div className={styles.body}>
        <>
        <ProjectsNav/>
        </>
        <div className={styles.container}>
        <Link href="/projects/remodels/basement" passhref>
          <div className={styles.card}>
            <div className={styles.cover}>
            <Image src={remodelBasement}
                    width={420}
                    height={320}
                   alt="Basement suite"
            />
            <p>Basement Remodel</p>
            </div>
          </div>
          </Link>
          <Link href="/projects/remodels/kirkness" passhref>
          <div className={styles.card}>
          <div className={styles.cover}>
          <Image src={remodelKirkness}
                  width={270}
                  height={240}
                 alt="Kirkness House"
            />
            <p>Kirkness Remodel</p>
          </div>  
          </div>
          </Link>
          <Link href="/projects/remodels/kenilworth" passhref>
          <div className={styles.card}>
          <div className={styles.cover}>
          <Image src={remodelUnk}
                  width={340}
                  height={200}
                 alt="Unk House"
            />
            <p>Kenilworth Remodel</p>

          </div>
          </div>
          </Link>
        </div>

    </div>
  )
}