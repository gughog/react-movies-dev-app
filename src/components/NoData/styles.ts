import styled from 'styled-components';

export const NoDataContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 2rem 0;
`;

export const NoDataLogo = styled.img`
  width: 10rem;
  height: 10rem;
  margin: 2rem 0;
`;

export const NoDataText = styled.p`
  font-size: 1.2rem;
  font-weight: bolder;
  color: ${({ theme }) => theme.darkShallow};
`;
