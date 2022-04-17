import ReactDom from 'react-dom/client'
import App from './App'
import { Provider } from 'react-redux'
import store from './redux/store.js'

const root = ReactDom.createRoot(document.getElementById('root'))

root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
