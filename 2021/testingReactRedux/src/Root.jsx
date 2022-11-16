import { createStore, applyMiddleware, compose } from 'redux'
import { Provider } from 'react-redux'

import reducers from 'reducers';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(reducers, composeEnhancers(applyMiddleware()));

const Root = (props) => {
 return (
  <Provider store={store} {...props}>
   {props.children}
  </Provider>
 )
}

export default Root
