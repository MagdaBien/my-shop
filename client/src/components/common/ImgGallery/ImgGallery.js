import Carousel from 'react-bootstrap/Carousel';
import styles from './ImgGallery.module.scss';
import { clsx } from 'clsx';

import { IMGS_URL } from '../../../config';
import { v4 as uuidv4 } from 'uuid';

const ImgGallery = ({ images }) => {
  return (
    <Carousel data-s-theme="dark">
      {images.map((img) => (
        <Carousel.Item key={uuidv4()}>
          <img
            className={clsx('d-block w-100', styles.photo)}
            src={IMGS_URL + img}
            alt=""
          />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ImgGallery;
