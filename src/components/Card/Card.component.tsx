import React from 'react';
import style from './Card.module.css';
import { classNames } from 'utils/classNames';
import { CardProps } from './Card.types';

const Card = ({
  children,
  className,
  type = 'elevated',
  ...rest
}: CardProps) => {
  return (
    <div
      className={classNames(
        style['card'],
        style[`card__type--${type}`],
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export default Card;
