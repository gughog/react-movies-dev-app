import * as React from 'react';
import { getWatchList } from 'services/Storage.service';
import cinema from 'assets/cinema.svg';
import { GridFrame } from 'components/global-styles';
import { MovieCard, NoData } from 'components';

import {
  SearchPageTitle as WatchLaterPageTitle,
  SearchPageResultsText as WatchLaterPageResultsText,
} from 'screens/SearchPage/styles';


export const WatchLaterPage: React.FC = () => {
  const [watchListMovies, setWatchListMovies] = React.useState<MovieCardProps[]>();

  React.useEffect(() => {
    const data = getWatchList();
    if (data) {
      setWatchListMovies(data);
    }
  }, []);

  const fetchWatchList = () => {
    const data = getWatchList();
    if (data) {
      setWatchListMovies(data);
    }
  };

  return (
    <>
      <WatchLaterPageTitle>
        My Watch List
      </WatchLaterPageTitle>
      {
        watchListMovies && watchListMovies.length > 0
          ? (
            <>
              <WatchLaterPageResultsText>
                {`Showing results (${watchListMovies.length}):`}
              </WatchLaterPageResultsText>
              <GridFrame center>
                {
                  watchListMovies && watchListMovies.map(({
                    id,
                    backdrop_path,
                    title,
                    release_date,
                    overview,
                    isFavorite,
                    isOnWatchList,
                  }) => (
                    <MovieCard
                      key={id}
                      id={id}
                      backdrop_path={backdrop_path}
                      title={title}
                      release_date={release_date}
                      overview={overview}
                      isFavorite={isFavorite}
                      isOnWatchList={isOnWatchList}
                      fetchWatchList={fetchWatchList}
                    />
                  ))
                }
              </GridFrame>
            </>
          )
          : <NoData title="You movies saved will appear here!" icon={cinema} />
      }
    </>
  );
};
