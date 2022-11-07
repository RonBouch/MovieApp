
import { TypedUseSelectorHook, useSelector } from 'react-redux'

import { RootState } from '../stores'

const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector

export default useTypedSelector