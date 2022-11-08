import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux'

import { getMoviesApi } from '../stores/actions'
import { setIsLoading } from '../stores/slices/moviesSlice'
import { setFavorite, setUserDetails, setIsConnected } from '../stores/slices/userSlice';

const useActions = () => {
    const dispatch = useDispatch()

    return bindActionCreators({ getMoviesApi, setIsLoading, setFavorite, setUserDetails, setIsConnected }, dispatch)
}

export default useActions