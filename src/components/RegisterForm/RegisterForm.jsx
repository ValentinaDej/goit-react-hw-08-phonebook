import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import LabelInput from 'shared/LabelInput/LabelInput';
import Button from 'shared/Button/Button';
import { initialState } from './initialState';
import { fields } from './fields';

import styles from 'components/RegisterForm/RegisterForm.module.css';

export const RegisterForm = ({ onSubmit }) => {
  const [state, setState] = useState({ ...initialState });

  const handleChange = useCallback(
    ({ target }) => {
      const { name, value } = target;
      setState(prevState => {
        return { ...prevState, [name]: value };
      });
    },
    [setState]
  );

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ ...state });
    setState({ ...initialState });
  };

  const { name, email, password } = state;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <LabelInput
        caption="Name"
        onChange={handleChange}
        value={name}
        {...fields.name}
      />
      <LabelInput
        caption="Email"
        onChange={handleChange}
        value={email}
        {...fields.email}
      />
      <LabelInput
        caption="Password"
        onChange={handleChange}
        value={password}
        {...fields.password}
      />
      <Button title="Register" type="submit" />
    </form>
  );
};

RegisterForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
