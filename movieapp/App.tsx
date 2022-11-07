
import React, { useEffect } from 'react';
import store from './src/stores';
import { Provider } from 'react-redux'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';

import useActions from './src/hooks/useActions'
import useTypedSelector from './src/hooks/useTypedSelector'
import RootNavigator from './src/routes/RootNavigator';
import { COLORS } from './src/utilities/enum';

const App = () => {
  const actions = useActions()
  const state = useTypedSelector(state => state)
  console.log("🚀 ~ file: App.tsx ~ line 18 ~ App ~ state", state)
  useEffect(() => {
    actions.getMoviesApi({ limit: 10 })
  }, [])

  return (<RootNavigator />);
};
const AppWrapper = () => {
  return (
    <React.Fragment>
      <SafeAreaView style={styles.safeTop} />
      <SafeAreaView style={styles.safeBottom}>
        <StatusBar barStyle={'dark-content'} />
        <Provider store={store}>
          <App />
        </Provider>
      </SafeAreaView>
    </React.Fragment>
  )
}

const styles = StyleSheet.create({
  safeTop: { flex: 0, backgroundColor: COLORS.RED },
  safeBottom: { flex: 1, backgroundColor: COLORS.BLACK }
})

export default AppWrapper;