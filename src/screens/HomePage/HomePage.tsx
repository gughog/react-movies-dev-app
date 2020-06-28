import * as React from 'react';
import { MainMovie, CategoriesGrid } from 'components';

export const HomePage = () => {
  const movies = [
    {
      title: 'Upcomings',
      bgColor: 'linear-gradient(to right, #16222a, #3a6073)',
      fontColor: '',
    },
    {
      title: 'Top Rateds',
      bgColor: 'linear-gradient(to right, #3e5151, #decba4)',
      fontColor: '',
    },
    {
      title: 'Popular',
      bgColor: 'linear-gradient(to right, #a8c0ff, #3f2b96)',
      fontColor: '',
    },
    {
      title: 'Now Playing',
      bgColor: 'linear-gradient(to right, #403b4a, #e7e9bb)',
      fontColor: '',
    },
    {
      title: 'Latests',
      bgColor: 'linear-gradient(to right, #000000, #434343)',
      fontColor: '',
    },
  ];

  return (
    <div>
      <MainMovie />
      <CategoriesGrid title="Browser by Categories" data={movies} />
    </div>
  );
};
