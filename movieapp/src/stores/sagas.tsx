import axios, { AxiosResponse } from 'axios'
import { put, takeLatest } from 'redux-saga/effects'
import * as actions from './actions'
import * as moviesSlicesActions from './slices/moviesSlice'
import { MovieType } from './types';
import localData from '../localData.json';

function* getMoviesApi(action: ReturnType<typeof actions.getMoviesApi>) {
    yield put(moviesSlicesActions.setIsLoading(true))
    try {
        const { data }: AxiosResponse<Array<MovieType>> = yield axios.get(`http://localhost:5000/getMovies`)
        yield put(moviesSlicesActions.setMovies(data?.Search || localData.Search))
    } catch (err) {
        yield put(moviesSlicesActions.setMovies([]))
        console.error(err)
    }

    yield put(moviesSlicesActions.setIsLoading(false))
}


export function* watchCommonSaga() {
    yield takeLatest(actions.getMoviesApi.type, getMoviesApi)
}