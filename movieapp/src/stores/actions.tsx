import { createAction } from '@reduxjs/toolkit'

import { GetMoviesApiPayload } from './types'

export const getMoviesApi = createAction<GetMoviesApiPayload>('getMoviesApi')

export const clearStore = createAction('clearStore')