import { PropTypes } from 'prop-types';
import styles  from '../Searchbar/Searchbar.module.css';


export const  Searchbar = ({onSubmit}) =>{
    return (
        <header className={styles.Searchbar}>
            <form className={styles.SearchForm} onSubmit={onSubmit}>
                <button type="submit" className={styles.SearchForm_button}>
                    <span className={styles.SearchForm_button_label}>Search</span>
                </button>

                <input
                    className={styles.SearchForm_input}
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </form>
        </header>  
    );
}
    
Searchbar.propTypes = {    
    onSubmit:PropTypes.func.isRequired,
  }