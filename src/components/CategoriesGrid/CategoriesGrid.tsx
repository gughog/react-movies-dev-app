import * as React from 'react';

import { CategoryCard } from 'components';
import { GridFrame } from 'components/global-styles';
import { CategoriesGridTitle } from './styles';

export const CategoriesGrid: React.FC<CategoriesGridProps> = ({ title, data }) => (
  <>
    <CategoriesGridTitle>{title}</CategoriesGridTitle>
    <GridFrame>
      {
        data.map((category: CategoryCardprops) => (
          <CategoryCard
            title={category.title}
            bgColor={category.bgColor}
            fontColor={category.fontColor}
          />
        ))
      }
    </GridFrame>
  </>
);
