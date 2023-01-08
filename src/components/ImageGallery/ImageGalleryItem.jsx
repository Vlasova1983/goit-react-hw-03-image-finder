// import PropTypes from "prop-types";


import styles  from '../ImageGallery/ImageGallery.module.css';

export const ImageGalleryItem = () => {
   return (  
        <li className={styles.ImageGalleryItem}>
            <img src="https://cdn.pixabay.com/photo/2019/05/14/16/43/himilayan-blue-poppy-4202825__340.jpg" alt="" className={styles.ImageGalleryItem_image} />
        </li>      
    );
}
    
  
