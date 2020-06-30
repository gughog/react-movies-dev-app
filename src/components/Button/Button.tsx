import * as React from 'react';
import { ButtonBody } from './styles';

export const Button: React.FC<ButtonProps> = ({
  text,
  bgColor,
  fontColor,
  icon,
  responsive = false,
  onClick,
}) => (
  <ButtonBody
    type="button"
    bgColor={bgColor}
    fontColor={fontColor}
    isResponsive={responsive}
    onClick={onClick}
    onlyIcon={!text}
  >
    {
      icon && <i className="material-icons">{icon}</i>
    }
    {
      text && <span>{text}</span>
    }
  </ButtonBody>
);
