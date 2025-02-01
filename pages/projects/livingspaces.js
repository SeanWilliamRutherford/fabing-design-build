import Head from 'next/head'
import Image from 'next/image';
import styles from '/styles/Projects.module.css';

import livingAfterA from '/public/living/living-after-1.png'
import livingBeforeA from '/public/living/living-before-1.jpg'
import livingAfterB from '/public/living/living-after-2.png'
import livingBeforeB from '/public/living/living-before-2.jpg'

import Link from 'next/link';
import ProjectsNav from '/components/projectsNav'
import { useState } from 'react';


const kitchen = [   livingAfterA, livingBeforeA,
                    livingAfterB, livingBeforeB ];


export default function Kitchens() {

  const [pic1, setPic1] = useState(livingAfterA);
  const [pic2, setPic2] = useState(livingAfterB);
  //const [pic3, setPic3] = useState(kitchenUnkAfter)

  function switchImage(num, pic, setPic){
    if (pic == kitchen[1 + num]) {
      setPic(kitchen[0 + num]);
    } else {
      setPic(kitchen[1 + num])
    }
  }


  return (
    <div className={styles.body}>
      <Head>
        <title>
          Living Spaces - Fabing Design Build
        </title>
        <meta
          name="description"
          content="Check out our previous living space upgrades"
          key="desc"
        />
      </Head>
        <>
        <ProjectsNav/>
        </>
        <div className={styles.container}>
          <div className={styles.card}>
            <Image src={pic1}
                   alt="living Image"
                   width={320}
                   height={320}
                   onClick={() =>switchImage(0, pic1, setPic1)}
                   onMouseOut={() => setPic1(livingAfterA)}
            />
            
          </div>
          <div className={styles.card}>
          <Image src={pic2}
                 alt="living Image"
                 width={320}
                 height={320}
                 onClick={() =>switchImage(2, pic2, setPic2)}
                 onMouseOut={() => setPic2(livingAfterB)}
            />
          </div>
        </div>

    </div>
  )
}