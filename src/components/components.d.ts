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
  image: string;
  backdropImage?: string;
  title: string;
  releaseDate: string;
  votes?: number;
  description: string;
}

interface ButtonProps {
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
}

interface CategoriesGridProps {
  title: string;
  data: CategoryCardprops[];
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
  searchHandler: (query: string) => Promise<void>;
  placeholder?: string;
}

interface GridFrameProps {
  center?: boolean;
}

interface SweetAlertProps {
  title: string;
  text: string;
}
