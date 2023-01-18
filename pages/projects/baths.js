import Head from 'next/head'
import Image from 'next/image';
import styles from '/styles/Projects.module.css';
import bathroom1after from '/public/bathrooms/bathroom1.jpg'
import bathroom1before from '/public/bathrooms/bathroom1before.JPG'
import bathroom2after from '/public/bathrooms/bathroom2.jpg'
import bathroom2before from '/public/bathrooms/bathroom2before.JPG'
import bathroom3 from '/public/bathrooms/bathroom3.png'
import Link from 'next/link';
import ProjectsNav from '/components/projectsNav'
import { useState } from 'react';


const bathroom = [bathroom1after, bathroom1before,
                   bathroom2after, bathroom2before];


export default function Baths() {

  const [pic1, setPic1] = useState(bathroom1after);
  const [pic2, setPic2] = useState(bathroom2after);

  function switchImage(num, pic, setPic){
    if (pic == bathroom[1 + num]) {
      setPic(bathroom[0 + num]);
    } else {
      setPic(bathroom[1 + num])
    }
  }


  return (
    <div className={styles.body}>
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
          <div className={styles.beforeview}>  
            <button onClick={() =>switchImage(2, pic2, setPic2)}>Before view</button>  
          </div>
          </div>
          <div className={styles.card}>
          <Image src={bathroom3}
                 alt="Bathroom Image"
                 width={240}
                 height={320}
            />
             
          </div>
        </div>

    </div>
  )
}