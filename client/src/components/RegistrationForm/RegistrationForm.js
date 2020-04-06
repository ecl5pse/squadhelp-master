import React from 'react';
import styles from './RegistrationForm.module.sass';
import {Field, reduxForm} from 'redux-form';
import FormInput from '../FormInput/FormInput';
import RoleInput from '../RoleInput/RoleInput';
import AgreeTermOfServiceInput from '../AgreeTermOfServiceInput/AgreeTermOfServiceInput';
import CONSTANTS from '../../constants';
import customValidator from '../../validators/validator';
import Schems from '../../validators/validationSchems';

const RegistrationForm  = (props) =>{

  const {handleSubmit, submitting, auth, authClear , error} = props;
  const styleTermsOfService = {
    container: styles.termsOfService,
    warning: styles.fieldWarning,
  }
  return (
      <form onSubmit={handleSubmit}>

          <Field name='firstName'
              container={styles.inputContainer}
              component={FormInput}
              type='text'
              label='First name'
          />
          <Field name='lastName'
              container={styles.inputContainer}
              component={FormInput}
              type='text'
              label='Last name'
          />

          <Field name='displayName'
              container={styles.inputContainer}
              component={FormInput}
              type='text'
              label='Display Name'
          />
          <Field name='email'
              container={styles.inputContainer}
              component={FormInput}
              type='text'
              label='Email Address'
          />
          <Field name='password'
              container={styles.inputContainer}
              component={FormInput}
              type='password'
              label='Password'
          />
          <Field name='confirmPassword'
              container={styles.inputContainer}
              component={FormInput}
              type='password'
              label='Password confirmation'
          />

        <div className={styles.choseRoleContainer}>
          <Field name='role' type='radio' value={CONSTANTS.CUSTOMER}
                 strRole='Join As a Buyer'
                 infoRole='I am looking for a Name, Logo or Tagline for my business, brand or product.'
                 component={RoleInput} id={CONSTANTS.CUSTOMER}/>
          <Field name='role' type='radio' value={CONSTANTS.CREATOR}
                 strRole='Join As a Creative'
                 infoRole='I plan to submit name ideas, Logo designs or sell names in Domain Marketplace.'
                 component={RoleInput} id={CONSTANTS.CREATOR}/>
        </div>
        <div className={styles.termsOfService}>
          <Field
              name='agreeOfTerms'
              classes={styleTermsOfService}
              id='termsOfService'
              component={AgreeTermOfServiceInput}
              type='checkbox'
          />
        </div>
        <button type='submit' disabled={submitting} className={styles.submitContainer}>Create Account</button>
      </form>
  );
}
export default reduxForm({
  form: 'login',
  validate: customValidator(Schems.RegistrationSchem),
})(RegistrationForm);