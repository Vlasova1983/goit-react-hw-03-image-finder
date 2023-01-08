import {Component} from "react";
import { Searchbar} from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
// import { Loader } from './';
// import { Button } from './';
import { Modal } from './Modal/Modal';

import styles  from './App.module.css';


export class App  extends Component { 
  state = {
    images:[],
    isOpen: false,
  };

  handleSubmit(){
    console.log(5);
  }

  toggle = () => {
    this.setState(prevState => ({ isOpen: !prevState.isOpen }));
  };

  render(){
    const { isOpen } = this.state;
    return (
      <div className={styles.App}> 
        <Searchbar onSubmit={this.handleSubmit}/>
        <ImageGallery images={this.state.images}/>
        <button
              onClick={this.toggle}              
              type="button"
            >  Modal
            </button>     
        {/* <Loader/> */}
        {/* <Button onClick={this.toggle}/>  */}
        {isOpen && (
        <Modal onClose={this.toggle}/>  )}     
      </div> 
    );
  }  
};
