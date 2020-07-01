import * as React from 'react';
import { ButtonBody } from './styles';

export const Button: React.FC<ButtonProps> = ({
  id,
  text,
  bgColor,
  fontColor,
  icon,
  responsive = false,
  onClick,
}) => (
  <ButtonBody
    data-testid={id}
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
