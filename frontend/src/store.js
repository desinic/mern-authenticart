import { combineReducers, createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension';
import { productsReducer, productDetailsReducer, newProductReducer, productReducer } from './reducers/productReducer';
import {profileReducer, userReducer, forgotPasswordReducer, allUsersReducer, userDetailsReducer} from './reducers/userReducer'

const reducer = combineReducers( {
    products: productsReducer,
    productDetails: productDetailsReducer,
    user: userReducer,
    profile: profileReducer,
    forgotPassword: forgotPasswordReducer,
    newProduct: newProductReducer,
    product: productReducer,
    allUsers: allUsersReducer,
    userDetails: userDetailsReducer,
} )

const middleware = [ thunk ];
const initialState = {};

const store = createStore(
    reducer,
    initialState,
    composeWithDevTools( applyMiddleware( ...middleware ) )
);

export default store;