import Head from 'next/head'
import Image from 'next/image';
import styles from '/styles/Projects.module.css';

import kitchenBasementAfter from '/public/kitchens/kitchen-basement-after.jpg'
import kitchenBasementBefore from '/public/kitchens/kitchen-basement-before.jpg'
import kitchenKirknessAfter from '/public/kitchens/kitchen-kirkness-after.jpg'
import kitchenKirknessBefore from '/public/kitchens/kitchen-kirkness-before.jpg'
import kitchenUnkAfter from '/public/kitchens/kitchen-unk-after.jpg'
import kitchenUnkBefore from '/public/kitchens/kitchen-unk-before.jpg'

import Link from 'next/link';
import ProjectsNav from '/components/projectsNav'
import { useState } from 'react';


const kitchen = [   kitchenBasementAfter, kitchenBasementBefore,
                    kitchenKirknessAfter, kitchenKirknessBefore,
                    kitchenUnkAfter, kitchenUnkBefore             ];


export default function Kitchens() {

  const [pic1, setPic1] = useState(kitchenBasementAfter);
  const [pic2, setPic2] = useState(kitchenKirknessAfter);
  const [pic3, setPic3] = useState(kitchenUnkAfter)

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
        <div className={styles.container}>
          <div className={styles.card}>
            <Image src={pic1}
                   alt="kitchen Image"
                   width={320}
                   height={320}
                   onClick={() =>switchImage(0, pic1, setPic1)}
                   onMouseOut={() => setPic1(kitchenBasementAfter)}
            />
            
          </div>
          <div className={styles.card}>
          <Image src={pic2}
                 alt="kitchen Image"
                 width={320}
                 height={320}
                 onClick={() =>switchImage(2, pic2, setPic2)}
                 onMouseOut={() => setPic2(kitchenKirknessAfter)}
            />
          </div>
          <div className={styles.card}>
          <Image src={pic3}
                 alt="kitchen Image"
                 width={320}
                 height={320}
                 onClick={() =>switchImage(4, pic3, setPic3)}
                 onMouseOut={() => setPic3(kitchenUnkAfter)}
            />
             
          </div>
        </div>

    </div>
  )
}