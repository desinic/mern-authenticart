import React, {useEffect} from 'react'
import Home from './components/Home/Home'
import Header from './components/layout/Header/Header'

import {
  BrowserRouter as Router, Route, Routes
} from 'react-router-dom';
import './App.css'
import ProductDetails from './components/Product/ProductDetails';
import Products from './components/Product/Products';
import Search from './components/Product/Search';
import LoginSignUp from './components/User/LoginSignUp'
import UserOptions from './components/layout/Header/UserOptions'
import Profile from './components/User/Profile'
import UpdateProfile from './components/User/UpdateProfile'
import UpdatePassword from './components/User/UpdatePassword'
import ForgotPassword from './components/User/ForgotPassword'
import ResetPassword from './components/User/ResetPassword'
import Dashboard from './components/admin/Dashboard'
import ProductList from './components/admin/ProductList'
import NewProduct from './components/admin/NewProduct'
import UpdateProduct from './components/admin/UpdateProduct'
import UsersList from './components/admin/UsersList'
import UpdateUser from './components/admin/UpdateUser'
import UpdateAbout from './components/admin/AboutDesc'
import UpdateLetsTalk from './components/admin/LetsTalk'
import Services from './components/admin/Services'
import Services2 from './components/admin/Services2'
import Services3 from './components/admin/Services3'
import NotFound from './components/layout/NotFound/NotFound'
import About from './components/layout/About/About'
import Contact from './components/layout/Contact/Contact'
import { loadUser } from './actions/userAction';
import { useSelector } from 'react-redux';
import store from './store'

function App() {

  const { isAuthenticated, user } = useSelector( state => state.user );

  useEffect(() => {
    store.dispatch( loadUser() )
  }, []);
  
  return (
      <Router>
        <Header/>
        {isAuthenticated && <UserOptions user={user} />}
        <Routes>
          <Route extact path='/' element={<Home />}/>
          <Route extact path='/product/:id' element={<ProductDetails />}/>
          <Route extact path='/products' element={<Products />}/>
          <Route path='/products/:keyword' element={<Products />}/>
          <Route extact path='/search' element={<Search />}/>
          <Route extact path='/account' element={isAuthenticated && <Profile />}/>
          <Route extact path='/me/update' element={isAuthenticated && <UpdateProfile />}/>
          <Route extact path='/password/update' element={isAuthenticated && <UpdatePassword />}/>
          <Route extact path='/password/forgot' element={<ForgotPassword />}/>
          <Route extact path='/password/reset/:token' element={<ResetPassword />}/>
          <Route extact path='/login' element={<LoginSignUp />}/>
          <Route extact path='/admin/dashboard' element={ isAuthenticated && user.role === 'admin' ? <Dashboard /> : <LoginSignUp /> } />
          <Route extact path='/admin/products' element={ isAuthenticated && user.role === 'admin' ? <ProductList /> : <LoginSignUp /> } />
          <Route extact path='/admin/product' element={ isAuthenticated && user.role === 'admin' ? <NewProduct /> : <LoginSignUp /> } />
          <Route extact path='/admin/product/:id' element={ isAuthenticated && user.role === 'admin' ? <UpdateProduct /> : <LoginSignUp /> } />
          <Route extact path='/admin/users' element={ isAuthenticated && user.role === 'admin' ? <UsersList /> : <LoginSignUp /> } />
          <Route extact path='/admin/user/:id' element={ isAuthenticated && user.role === 'admin' ? <UpdateUser /> : <LoginSignUp /> } />
          <Route extact path='/admin/aboutdesc' element={ isAuthenticated && user.role === 'admin' ? <UpdateAbout /> : <LoginSignUp /> } />
          <Route extact path='/admin/letstalk' element={ isAuthenticated && user.role === 'admin' ? <UpdateLetsTalk /> : <LoginSignUp /> } />
          <Route extact path='/admin/services' element={ isAuthenticated && user.role === 'admin' ? <Services /> : <LoginSignUp /> } />
          <Route extact path='/admin/services2' element={ isAuthenticated && user.role === 'admin' ? <Services2 /> : <LoginSignUp /> } />
          <Route extact path='/admin/services3' element={ isAuthenticated && user.role === 'admin' ? <Services3 /> : <LoginSignUp /> } />
        <Route extact path='/about' element={<About/>} />
        <Route extact path='/contact' element={<Contact/>} />
          <Route path='*' element={ <NotFound />}/>
      </Routes>
      
      </Router>
  );
}

export default App;
