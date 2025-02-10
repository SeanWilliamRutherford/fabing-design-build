import Head from 'next/head'
import Image from 'next/image';
import styles from '/styles/Projects.module.css';
import bathroom1after from '/public/bathrooms/bathroom1.jpg'
import bathroom1before from '/public/bathrooms/bathroom1before.jpg'
import bathroom2after from '/public/bathrooms/bathroom2.jpg'
import bathroom2before from '/public/bathrooms/bathroom2before.jpg'
import bathroom3after from '/public/bathrooms/bathroom3after.jpg'
import bathroom3before from '/public/bathrooms/bathroom3before.jpg'

import Link from 'next/link';
import ProjectsNav from '/components/projectsNav'
import { useState } from 'react';


const bathroom = [bathroom1after, bathroom1before,
                  bathroom2after, bathroom2before,
                  bathroom3after, bathroom3before];


export default function Baths() {

  const [pic1, setPic1] = useState(bathroom1after);
  const [pic2, setPic2] = useState(bathroom2after);
  const [pic3, setPic3] = useState(bathroom3after);

  function switchImage(num, pic, setPic){
    if (pic == bathroom[1 + num]) {
      setPic(bathroom[0 + num]);
    } else {
      setPic(bathroom[1 + num])
    }
  }


  return (
    <div className={styles.body}>
      <Head>
        <title>
          Baths - Fabing Design Build
        </title>
        <meta
          name="description"
          content="Check out our previous bathroom upgrades"
          key="desc"
        />
      </Head>
        <>
        <ProjectsNav/>
        </>
        <div className={styles.container}>
          <div className={styles.card}>
            <Image src={pic1}
                   alt="Bathroom Image"
                   width={320}
                   height={320}
                   onClick={() =>switchImage(0, pic1, setPic1)}
                   onMouseOut={() => setPic1(bathroom1after)}
            />
            
          </div>
          <div className={styles.card}>
          <Image src={pic2}
                 alt="Bathroom Image"
                 width={240}
                 height={320}
                 onClick={() =>switchImage(2, pic2, setPic2)}
                 onMouseOut={() => setPic2(bathroom2after)}
            />
          </div>
          <div className={styles.card}>
            <div className={styles.nopointer}>
          <Image src={pic3}/******************/
                 alt="Bathroom Image"
                 width={260}
                 height={320}
                 onClick={() =>switchImage(4, pic3, setPic3)}
                 onMouseOut={() => setPic3(bathroom3after)}
            />
             </div>
          </div>
        </div>

    </div>
  )
}