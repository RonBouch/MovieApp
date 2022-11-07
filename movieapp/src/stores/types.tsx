export type GetMoviesApiPayload = {
    limit: number
}

export type MovieType = {
    userId: number
    id: number
    title: string
    body: string
}

export interface MoviesSliceType {
    movies: MovieType[],
    loader: boolean,
}

export type RootStackParam = {
    HomePage: any;
    Favorite: any;
    Login: any;
};