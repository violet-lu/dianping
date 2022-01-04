import { createStore, applyMiddleware } from "redux"
import thunk from "redux-thunk"
import api from "./middleware/api";
import rootReducer from "/modules"


//判断redux是否在生产环境下运行以及判断浏览器是否安装了redux调试工具
if (
  process.env.NODE_ENV !== "production" && 
  window._REDUX_DEVTOOLS_EXTENTION_
) {
  const composeEnhancers = 
  window._REDUX_DEVTOOLS_EXTENTION_;
  store = createStore(rootReducer, composeEnhancers(applyMiddleware(thunk, api)));
} else {
  store = createStore(rootReducer, applyMiddleware(thunk, api));
}

let store = createStore(rootReducer, applyMiddleware(thunk) );

export default store