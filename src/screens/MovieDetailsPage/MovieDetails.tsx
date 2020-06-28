import * as React from 'react';
import Api from 'services/Api.service';
import { useParams } from 'react-router-dom';
import { Button } from 'components';
import { GridWithTitleTitle } from 'components/GridWithTitle/styles';
import { GridFrame, LinkButton } from 'components/global-styles';
import { theme } from 'themes';
import {
  MainMovieContainer,
  MainMoviePoster,
  MainMovieMeta,
  MainMovieTopic,
  MainMovieTitle,
  MainMovieVoteAverage,
  MainMovieReleaseDate,
  MainMovieDescription,
  MainMovieActionsContainer,
} from 'components/MainMovie/styles';
import { MovieVideo } from './styles';

export const MovieDetailsPage: React.FC = () => {
  const { id } = useParams();
  const [loading, setLoading] = React.useState(false);
  const [movieDetails, setMovieDetails] = React.useState<MovieDetails>({
    popularity: 0,
    vote_count: 0,
    video: false,
    poster_path: '',
    id: 0,
    adult: false,
    backdrop_path: '',
    original_language: '',
    original_title: '',
    genre_ids: [],
    title: '',
    vote_average: 0,
    overview: '',
    release_date: '',
    imdb_id: '',
    tagline: '',
    videos: {
      results: [],
    },
    homepage: '',
    genres: [],
  });

  React.useEffect(() => {
    setLoading(true);
    Api.get(`movie/${id}?api_key=${process.env.REACT_APP_API_KEY}&language=en-US&append_to_response=videos`)
      .then((response) => {
        setMovieDetails(response.data);
        setLoading(false);
      })
      .catch((error) => {
        setLoading(false);
      });
  }, [id]);

  return (
    <>
      {
        loading
          ? <p>Loading...</p>
          : (
            <>
              <MainMovieContainer
                key={id}
                backgroundImage={`${process.env.REACT_APP_IMAGE_BASE_URL}original${movieDetails.backdrop_path}`}
              >
                <MainMoviePoster
                  src={`${process.env.REACT_APP_IMAGE_BASE_URL}w300${movieDetails.poster_path}`}
                />
                <MainMovieMeta>
                  <MainMovieTopic>
                    {
                      movieDetails.genres
                        .slice(0, 2)
                        .map((genre) => genre.name)
                        .join(' / ')
                    }
                  </MainMovieTopic>
                  <MainMovieTitle>
                    {movieDetails.title}
                  </MainMovieTitle>
                  <MainMovieVoteAverage>
                    {`${movieDetails.vote_average}/10`}
                  </MainMovieVoteAverage>
                  <MainMovieReleaseDate>
                    {`Release: ${movieDetails.release_date.slice(0, 4)}`}
                  </MainMovieReleaseDate>
                  <MainMovieDescription>
                    {movieDetails.overview}
                  </MainMovieDescription>
                  <MainMovieActionsContainer>
                    <LinkButton
                      target="_blank"
                      rel="noopener noreferrer"
                      href={`https://www.imdb.com/title/${movieDetails.imdb_id}/`}
                      bgColor={theme.emphasys}
                      fontColor="black"
                    >
                      IMDB Page
                    </LinkButton>
                    <Button
                      text="Add to Watch List"
                      bgColor={theme.info}
                      fontColor="white"
                      icon="playlist_add"
                      responsive
                    />
                    <Button
                      text="Add to Favorites"
                      bgColor={theme.danger}
                      fontColor="white"
                      icon="favorite_border"
                      responsive
                    />
                  </MainMovieActionsContainer>
                </MainMovieMeta>
              </MainMovieContainer>
              <GridWithTitleTitle> Trailers and Videos </GridWithTitleTitle>
              <GridFrame center>
                {
                  movieDetails.videos.results.map(({ key, name }) => (
                    <MovieVideo
                      key={key}
                      title={name}
                      src={`https://www.youtube.com/embed/${key}`}
                      allowFullScreen
                    />
                  ))
                }
              </GridFrame>
            </>
          )
    }
    </>
  );
};
