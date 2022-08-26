import {applyMiddleware, combineReducers, compose, createStore} from "redux";
import thunk from "redux-thunk";
import storage from "redux-persist/lib/storage";
import {persistReducer, persistStore} from "redux-persist";
import {QuestionReducer} from "./Question/QuestionReducer";
import {ChatQuestionReducer} from "./ChatQuestion/ChatQuestionReducer";


const persistConfig = {
    key: 'QuestionCheck',
    storage,
};


let rootReducer = combineReducers({
    chatQ: ChatQuestionReducer,
    questions: QuestionReducer,

})

// window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ = undefined;
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk))
);

export const persist = persistStore(store);