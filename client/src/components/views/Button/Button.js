import styles from './Button.module.scss';
import clsx from 'clsx';
import PropTypes from 'prop-types';

const Button = (props) => {
    
    return (
    <button type="button" onClick={props.action} name={props.buttonName}
        className={clsx(styles.button, props.className)}>{props.children}
    </button>);
    
};

Button.propTypes = { 
    action: PropTypes.func.isRequired,  
    buttonName: PropTypes.string.isRequired,   
  };

export default Button;
