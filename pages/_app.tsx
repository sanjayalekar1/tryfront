import '../styles/globals.css'
import type { AppProps } from 'next/app'
import RootLayout from '../components/Layout';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {store, persistor} from '../redux/store';

function MyApp({ Component, pageProps }: AppProps) {
  return (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
    <RootLayout>
        <Component {...pageProps} />
    </RootLayout>
    </PersistGate>
  </Provider>
  
)}

export default MyApp
