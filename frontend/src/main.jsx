import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'


import "@fontsource/outfit"
import "@fontsource/roboto"


import { BrowserRouter as Router } from 'react-router-dom';



// import { store, Persistor } from './components/store/store.jsx';
import { PersistGate } from 'redux-persist/integration/react';
import  store, {  Persistor } from './components/store/store.jsx'
import { Provider } from 'react-redux'





ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>


      <Router>

      <Provider store={store}>
        <PersistGate loading={null} persistor={Persistor}>

        <App />

        </PersistGate>

      </Provider>
   
      </Router>


  
  </React.StrictMode>
)
