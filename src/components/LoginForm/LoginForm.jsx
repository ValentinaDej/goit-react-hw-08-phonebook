import { useState, useCallback } from 'react';
import PropTypes from 'prop-types';

import { initialState } from './initialState';
import { fields } from './fields';
import LabelInput from 'shared/LabelInput/LabelInput';
import Button from 'shared/Button/Button';
import styles from 'components/RegisterForm/RegisterForm.module.css';

export const LoginForm = ({ onSubmit }) => {
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

  const { email, password } = state;

  return (
    <form onSubmit={handleSubmit} className={styles.form}>
      <h2 className={styles.title}>Please, input your login data</h2>
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
      <Button title="Log in" type="submit" />
    </form>
  );
};

LoginForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};
