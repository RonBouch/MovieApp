
import React, { useEffect } from 'react';
import store from './src/stores';
import { Provider } from 'react-redux'
import { SafeAreaView, StatusBar, StyleSheet } from 'react-native';
import useActions from './src/hooks/useActions'
import RootNavigator from './src/routes/RootNavigator';
import { COLORS } from './src/utilities/enum';
import { persistStore } from 'redux-persist'
import { PersistGate } from 'redux-persist/integration/react'

let persistor = persistStore(store);
const App = () => {
  return (<RootNavigator />);
};
const AppWrapper = () => {
  return (
    <React.Fragment>
      <SafeAreaView style={styles.safeTop} />
      <SafeAreaView style={styles.safeBottom}>
        <StatusBar barStyle={'dark-content'} />
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <App />
          </PersistGate>
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