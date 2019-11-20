import React from 'react'
import { Provider } from 'react-redux'
import { View } from 'react-native'

import store from './src/redux/store'
import Entry from './src/Entry'

const App = () => {
  return (
    <Provider store={store}>
        <Entry />
    </Provider>
  )
}

export default App
