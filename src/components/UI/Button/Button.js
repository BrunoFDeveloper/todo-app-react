import React from 'react';
import classes from './Button.module.scss';

const Button = props => (
  <button className={ classes[ props.classActive ] } type={ props.type } onClick={ props.onClick }>{ props.label }</button>
);

export default Button;
