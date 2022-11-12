import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getMoviesApi, login, signup } from '../stores/actions'
import { setIsLoading } from '../stores/slices/moviesSlice'
import { setFavorite, setIsConnected } from '../stores/slices/userSlice';

const useActions = () => {
    const dispatch = useDispatch()

    return bindActionCreators({ getMoviesApi, login, signup, setIsLoading, setFavorite, setIsConnected }, dispatch)
}

export default useActions