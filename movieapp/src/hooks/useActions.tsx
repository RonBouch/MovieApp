import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import { clearStore, getMoviesApi } from '../stores/actions'
import { removeMovies } from '../stores/slices/moviesSlice'

const useActions = () => {
    const dispatch = useDispatch()

    return bindActionCreators({ getMoviesApi, removeMovies, clearStore }, dispatch)
}

export default useActions