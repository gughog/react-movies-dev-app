interface GlobalStyleProps {
  fontColor: string;
  bodyColor: string;
}

interface NavbarProps {
  title: string;
}

interface MainMovieContainerProps {
  backgroundImage: string;
}

interface MovieCardProps {
  id: number;
  poster_path?: string;
  backdrop_path?: string;
  title: string;
  release_date: string;
  vote_average?: number;
  overview: string;
  isFavorite?: boolean;
  isOnWatchList?: boolean;
  fetchFavorites?: () => void;
  fetchWatchList?: () => void;
}

interface ButtonProps {
  id?: string;
  text?: string;
  bgColor?: string;
  fontColor?: string;
  icon?: string;
  responsive?: boolean;
  onClick?: () => void;
}

interface ButtonStyles {
  bgColor?: string;
  fontColor?: string;
  isResponsive?: boolean;
  onlyIcon?: boolean;
}

interface LinkButtonProps {
  bgColor?: string;
  fontColor?: string;
}

interface CategoryCardprops {
  title: string;
  bgColor: string;
  fontColor: string;
}

interface CategoryCardStyles {
  bgColor: string;
  fontColor: string;
}

interface NoDataProps {
  title: string;
  icon: string;
}

interface SearchInputProps {
  searchHandler: (query: string) => Promise<void> | void;
  placeholder?: string;
}

interface GridFrameProps {
  center?: boolean;
}

interface SweetAlertProps {
  title: string;
  text: string;
  onButtonText?: string;
  onOkAction?: (() => void) | undefined;
}

interface SweetAlertToastProps {
  title: string;
  type?: 'success' | 'error' | 'warning' | 'info' | 'question'
}
