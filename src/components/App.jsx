import {Component} from "react";
import { Searchbar} from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';


import styles  from './App.module.css';
import axios from 'axios';
import Notiflix from 'notiflix';

export class App  extends Component { 
  state = {
    value:'',
    images: null,    
    isLoading: false, 
    isLoadMore: false,    
  };

    Page=1;

  // componentDidMount(){    
  //   console.log(this.state);    
  // }

  // componentDidUpdate(){
  //   console.log(this.state.page);
  //   this.setState({page:this.state.page+1});
  // } 

  fetchData = async ({value, page}) => {    
    try {
      const response= await axios.get(`https://pixabay.com/api/?key=31294159-be9d27b57dbd5b4db758a00af&q=${value}&image_type=photo&orientation=horizontal&per_page=12&page=${page}`);
      const images = response.data.hits; 
      this.setState({images:images});                  
    }
    catch (error) {
      Notiflix.Notify.failure('Sorry, there are no images matching your search query. Please try again.');
    }
    finally{
      this.setState({isLoading:false});
      
    }       
  }
    

  handleSubmit = async (value)=>{       
    this.setState({isLoading:true, value: value, isLoadMore:true});       
    this.fetchData(value,1);
  };

  onClickLoadMore = () => {
    const {value}=this.state;
    this.fetchData(value, 2);
  }
  
  render(){
    const { images, isLoading, isLoadMore} = this.state;
    return (
      <div className={styles.App}> 
        <Searchbar  onSubmit={this.handleSubmit}/>
        <ImageGallery images={images}/>        
        {isLoading && <Loader/>}
        {isLoadMore && <Button onClick={this.onClickLoadMore} />}            
      </div> 
    );
  }  
};
