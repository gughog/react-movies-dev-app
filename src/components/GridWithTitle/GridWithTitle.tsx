import * as React from 'react';

import { CategoryCard } from 'components';
import { GridFrame } from 'components/global-styles';
import { GridWithTitleTitle } from './styles';

export const GridWithTitle: React.FC<GridWithTitleProps> = ({ title, data }) => (
  <>
    <GridWithTitleTitle>{title}</GridWithTitleTitle>
    <GridFrame>
      {
        data.map((category: CategoryCardprops) => (
          <CategoryCard
            key={category.title}
            title={category.title}
            bgColor={category.bgColor}
            fontColor={category.fontColor}
          />
        ))
      }
    </GridFrame>
  </>
);
