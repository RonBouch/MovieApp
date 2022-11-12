

export type MovieType = {
    Title?: string,
    Year?: string,
    imdbID?: string,
    Type?: string,
    Poster?: string
}

export interface MovieProps {
    item: MovieType;
    setMovieSelected?: (item: MovieType) => void;
    showDetails?: boolean;
}

export interface MoviesSliceType {
    movies: MovieType[] | null,
    loader: boolean,
}

export type RootStackParam = {
    HomePage: any;
    Favorite: any;
    Login: any;
};

export type UserSliceType = {
    favoriteMovies: MovieType[];
    userName: string;
    isConnected: boolean;

}