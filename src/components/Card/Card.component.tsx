import React from 'react';
import style from './Card.module.css';
import { classNames } from 'utils/classNames';
import { CardProps, CardTitleProps, CardBodyProps, CardFooterProps } from './Card.types';

export const CardTitle = ({ children, className, ...rest }: CardTitleProps) => (
  <div className={classNames(style['card-title'], className)} {...rest}>
    {children}
  </div>
);

export const CardBody = ({ children, className, ...rest }: CardBodyProps) => (
  <div className={classNames(style['card-body'], className)} {...rest}>
    {children}
  </div>
);

export const CardFooter = ({ children, className, ...rest }: CardFooterProps) => (
  <div className={classNames(style['card-footer'], className)} {...rest}>
    {children}
  </div>
);

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
