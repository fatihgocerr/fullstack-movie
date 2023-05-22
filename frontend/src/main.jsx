import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { store } from './slices/store'
import { Provider } from 'react-redux'
import { BrowserRouter } from 'react-router-dom'
import { Modal } from './components/modalComponents/Modal'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <ToastContainer theme="dark" progressStyle={{ background: '#3DD2CC' }} />
    <BrowserRouter>
      <App />
      <Modal />
    </BrowserRouter>
  </Provider>
)
