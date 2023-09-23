'use client';
import styles from '../styles/imageSwiper.module.css';
import Image from 'next/image';
// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';

interface p {
  img: Array<string>;
}

export default function imageSwiper({ img }: p) {
  return (
    <article className={styles.swiperWrapper}>
      <Swiper
        navigation={true}
        modules={[Navigation]}
        className={styles.swiper}
        loop={true}
      >
        {img &&
          img.map(el => (
            <SwiperSlide>
              <Image
                priority
                key={el}
                src={el}
                width={820}
                height={350}
                alt="Project Graphics"
              />
            </SwiperSlide>
          ))}
      </Swiper>
    </article>
  );
}
