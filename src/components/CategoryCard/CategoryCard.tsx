import * as React from 'react';

import { CategoryCardContainer, CategoryCardTitle } from './styles';

export const CategoryCard: React.FC<CategoryCardprops> = ({ title, bgColor, fontColor }) => (
  <CategoryCardContainer
    bgColor={bgColor}
    fontColor={fontColor}
  >
    <CategoryCardTitle>
      {title}
    </CategoryCardTitle>
  </CategoryCardContainer>
);
