import axios, { AxiosResponse } from 'axios'
import { put, takeLatest } from 'redux-saga/effects'

import * as actions from './actions'
import * as moviesSlicesActions from './slices/moviesSlice'
import * as userSlicesActions from './slices/userSlice'
import { MovieType } from './types'

function* getMoviesApi(action: ReturnType<typeof actions.getMoviesApi>) {
    yield put(moviesSlicesActions.setIsLoading(true))

    const {
        payload: { limit },
    } = action

    try {
        const { data }: AxiosResponse<Array<MovieType>> = yield axios.get(
            `https://jsonplaceholder.typicode.com/users/1/posts?_limit=${limit}`,
        )

        yield put(moviesSlicesActions.setMovies(data))
    } catch (err) {
        console.error(err)
    }

    yield put(moviesSlicesActions.setIsLoading(false))
}

export function* watchCommonSaga() {
    yield takeLatest(actions.getMoviesApi.type, getMoviesApi)
}