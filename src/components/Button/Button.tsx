import * as React from 'react';
import { ButtonBody } from './styles';

export const Button: React.FC<ButtonProps> = ({
  text,
  bgColor,
  fontColor,
  icon,
}) => (
  <ButtonBody
    type="button"
    bgColor={bgColor}
    fontColor={fontColor}
  >
    {
      icon && <i className="material-icons">{icon}</i>
    }
    {
      text && <span>{text}</span>
    }
  </ButtonBody>
);
