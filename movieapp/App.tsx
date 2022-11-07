
import React, { useEffect } from 'react';
import store from './src/stores';
import { Provider } from 'react-redux'
import { SafeAreaView, StatusBar, useColorScheme, View, Text } from 'react-native';

import useActions from './src/hooks/useActions'
import useTypedSelector from './src/hooks/useTypedSelector'
import RootNavigator from './src/routes/RootNavigator';

const App = () => {
  const isDarkMode = useColorScheme() === 'dark';
  const backgroundStyle = {
    backgroundColor: 'rgb(243,243,242)',
    flex: 1
  };
  const actions = useActions()
  const state = useTypedSelector(state => state)
  console.log("🚀 ~ file: App.tsx ~ line 18 ~ App ~ state", state)
  useEffect(() => {
    actions.getMoviesApi({ limit: 10 })
  }, [])

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <RootNavigator />
    </SafeAreaView>
  );
};
const AppWrapper = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  )
}

export default AppWrapper;