import * as React from 'react';
import cinema from 'assets/cinema.svg';
import { SearchPageTitle as NotFoundPageTitle } from 'screens/SearchPage/styles';

import { NoData } from 'components';

export const NotFound = () => (
  <>
    <NotFoundPageTitle>
      This is not what you looking for!
    </NotFoundPageTitle>
    <NoData title="Go back to home and try again!" icon={cinema} />
  </>
);
