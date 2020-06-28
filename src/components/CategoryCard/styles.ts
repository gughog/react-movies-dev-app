import styled from 'styled-components';

export const CategoryCardContainer = styled.div<CategoryCardStyles>`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  height: 10rem;
  border-radius: 0.5rem;
  background: ${({ bgColor }) => bgColor || '#fff'};
  color: ${({ fontColor }) => fontColor || '#000'};

  transition: transform 0.3s;

  &:hover {
    transform: scale(1.05);
  }
`;

export const CategoryCardTitle = styled.h2`
  font-size: 1.5rem;
  font-weight: bolder;
  color: ${({ theme }) => theme.light};
`;
