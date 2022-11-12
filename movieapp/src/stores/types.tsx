

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
    newMovies: MovieType[] | null,
    loader: boolean,
}

export type RootStackParam = {
    HomePage: any;
    Favorite: any;
    Login: any;
};

export type UserSliceType = {
    favoriteMovies: MovieType[];
    isConnected: boolean | null;
}


export type UserTypes = {
    username: string;
    password: string;
}

