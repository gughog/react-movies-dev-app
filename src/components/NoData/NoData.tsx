import * as React from 'react';
import { NoDataContainer, NoDataLogo, NoDataText } from './styles';

export const NoData: React.FC<NoDataProps> = ({ title, icon }) => (
  <NoDataContainer>
    <NoDataText>
      {title}
    </NoDataText>
    <NoDataLogo src={icon} alt={title} />
  </NoDataContainer>
);
