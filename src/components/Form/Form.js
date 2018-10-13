import React from 'react';

import Input from '../UI/Input/Input';
import Button from '../UI/Button/Button';
import classes from './Form.module.scss';

const Form = props => (
  <>
    <form className={ classes.Form } onSubmit={ props.onSubmit }>
      <Input type='text' name='todoText' value={ props.todoText } onChange={ (e) => props.fillField(e) } />
      <Button type='submit' label='Salvar' classActive='ButtonForm' />
    </form>
  </>
);

export default Form;
