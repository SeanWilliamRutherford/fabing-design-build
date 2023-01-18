import Head from 'next/head'
import Image from 'next/image';
import styles from '/styles/Projects.module.css';

import backFireplaceAfter from '/public/kirkness/back-fireplace-after.jpg'
import backFireplaceBefore from '/public/kirkness/back-fireplace-before.jpg'
import frontFireplaceAfter from '/public/kirkness/front-fireplace-after.jpg'
import frontFireplaceBefore from '/public/kirkness/front-fireplace-before.jpg'
import staircaseAfter from '/public/kirkness/staircase-after.jpg'
import staircaseBefore from '/public/kirkness/staircase-before.jpg'


import Link from 'next/link';
import ProjectsNav from '/components/projectsNav'
import { useState } from 'react';


const kitchen = [   backFireplaceAfter, backFireplaceBefore,
                    frontFireplaceAfter, frontFireplaceBefore,
                    staircaseAfter, staircaseBefore             ];


export default function Kenilworth() {

  const [pic1, setPic1] = useState(backFireplaceAfter);
  const [pic2, setPic2] = useState(frontFireplaceAfter);
  const [pic3, setPic3] = useState(staircaseAfter)

  function switchImage(num, pic, setPic){
    if (pic == kitchen[1 + num]) {
      setPic(kitchen[0 + num]);
    } else {
      setPic(kitchen[1 + num])
    }
  }


  return (
    <div className={styles.body}>
        <>
        <ProjectsNav/>
        </>
        <div className={styles.title}>Kenilworth Remodel</div>
        <div className={styles.container}>
          <div className={styles.card}>
            <Image src={pic1}
                   alt="kitchen Image"
                   width={200}
                   height={240}
                   onClick={() =>switchImage(0, pic1, setPic1)}
                   onMouseOut={() => setPic1(backFireplaceAfter)}
            />
            
          </div>
          <div className={styles.card}>
          <Image src={pic2}
                 alt="kitchen Image"
                 width={240}
                 height={320}
                 onClick={() =>switchImage(2, pic2, setPic2)}
                 onMouseOut={() => setPic2(frontFireplaceAfter)}
            />
          </div>
          <div className={styles.card}>
          <Image src={pic3}
                 alt="kitchen Image"
                 width={240}
                 height={320}
                 onClick={() =>switchImage(4, pic3, setPic3)}
                 onMouseOut={() => setPic3(staircaseAfter)}
            />
             
          </div>
        </div>

    </div>
  )
}