
import {Component} from "react";


import { ImageGalleryItem } from './ImageGalleryItem'
import styles  from '../ImageGallery/ImageGallery.module.css';


export class ImageGallery extends Component {


    // shouldComponentUpdate(nextProps){
    //   const listId  = this.props.images?.map((image)=>(image.id));        
    //     const listIdNow = nextProps.images?.map((image)=>(image.id));
        
    //         console.log(listId);
    //         console.log(listIdNow);
    //         return true;
        
        
    // }

    render(){
        return (  
            <ul className={styles.ImageGallery}>              
                {this.props.images?.map((image)=>( 
                    <ImageGalleryItem key={image.id} image={image}/> 
                ))}   
            </ul>         
        );
    }  
   
}
    
  
