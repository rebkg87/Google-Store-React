import './button.scss'
import PropTypes from 'prop-types';

function Button({title}) {
    return(
        <>
        <button>{title}</button>
        </>
    )
}

Button.propTypes = {
    title: PropTypes.string,
}

export default Button;

