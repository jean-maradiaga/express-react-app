import { noop } from 'lodash';
import PropTypes from 'prop-types';

import './text-field.scss';

const TextField = ({ placeholder = "", fieldName = "", ariaLabel = "",  handleInput = noop }) => {

	return (
        <div className="field__container">
            <input
				className="field__input" 
				type="text" 
				onChange={handleInput} 
				placeholder={placeholder} 
				name={fieldName} 
				aria-label={ariaLabel}/>
        </div>
      );
};

export default TextField;

TextField.propTypes = {
	placeholder: PropTypes.string,
	name: PropTypes.string,
	ariaLabel: PropTypes.string,
	handleInput: PropTypes.func,
};