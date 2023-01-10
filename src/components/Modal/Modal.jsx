import { Component } from 'react';
import styles  from '../Modal/Modal.module.css';
import { PropTypes } from 'prop-types';

export class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyClose);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyClose);
  }

  handleKeyClose = event => {   
    if (event.code === 'Escape') {
      this.props.onClose();
    }
  };

  handleClose = event => {
    if (event.target === event.currentTarget) {
      this.props.onClose();
    }
  };

  render() {   
    return ( 
      <>
        <div className={styles.Backdrop}/>     
        <div className={styles.Overlay} onClick={this.handleClose}>
          <div className={styles.Modal}>                  
            <img src={this.props.imageModal} alt="" />
          </div>
        </div>      
      </>                      
    );
  }
}

Modal.propTypes = { 
  imageModal: PropTypes.string.isRequired,
  onClose:PropTypes.func.isRequired,    
}