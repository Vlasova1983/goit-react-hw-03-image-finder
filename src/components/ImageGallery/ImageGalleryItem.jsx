import {Component} from "react";
import { Modal } from '../Modal/Modal';
import { PropTypes } from 'prop-types';

import styles  from '../ImageGallery/ImageGallery.module.css';

export class ImageGalleryItem extends Component  {

    state = {        
        isOpen: false,        
    };

    toggle = () => {
        this.setState(prevState => ({ isOpen: !prevState.isOpen }));
    };

    render(){
        const { isOpen } = this.state;
        return ( 
            <>
                <li className={styles.ImageGalleryItem} onClick={this.toggle}  >
                    <img src={this.props.image.webformatURL} alt="" className={styles.ImageGalleryItem_image} />
                </li> 
                {isOpen && (<Modal onClose={this.toggle} imageModal={this.props.image.largeImageURL}/>)}
            </> 
        )     
    }
   
}

ImageGalleryItem.propTypes = { 
    images: PropTypes.shape(), 
}
