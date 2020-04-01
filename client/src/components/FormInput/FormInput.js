import React from 'react';
import PropTypes from 'prop-types';
import styles    from './FormInput.module.sass'
import classNames from 'classnames';

const FormInput = (props) => {
  const {label, input, type, inputStyles, valid,notValid,container,meta: {touched, error}} = props;

  const inputClassName = classNames( inputStyles || styles.input, {
    [notValid || styles.notValid ]: touched && error,
    [valid || styles.valid]: touched && !error,
  });

  return (
      <div className={ container || styles.inputContainer}>
        <input {...input} placeholder={label} type={type} className={inputClassName}/>
        {styles.fieldWarning && (touched &&
         (error && <span className={styles.fieldWarning}>{error}</span>))}
      </div>
  );
};
FormInput.propTypes = {
  notValid: PropTypes.string,
  valid: PropTypes.string,
  label: PropTypes.string,
  input: PropTypes.string,
  type: PropTypes.string,

}
export default FormInput;