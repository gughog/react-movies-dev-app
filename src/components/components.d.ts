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
