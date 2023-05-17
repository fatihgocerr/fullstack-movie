import '@/styles/globals.css'
import {ToastContainer} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {Provider} from "react-redux";
import store from "@/store/store";
export default function App({ Component, pageProps }) {
  return (
   <>
   <Provider store={store}>
     <Component {...pageProps} />
     <ToastContainer
      position="top-center"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme={'dark'}
     />
   </Provider>
   </>
   )
}
