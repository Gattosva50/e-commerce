import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UserLayout from './components/Layout/UserLayout'
import Home from './pages/Home';
import {Toaster} from 'sonner'
import Login from './pages/Login';
import Register from './pages/Register';
import Profile from './pages/Profile';
import CollectionPage from './pages/CollectionPage';
import ProductDetail from './components/Products/ProductDetail';
import Checkout from './components/Cart/Checkout';
import OrderConfirmationPage from './pages/OrderConfirmationPage';
import OrderDetailsPage from './pages/OrderDetailsPage';
import MyOrdersPage from './pages/MyOrdersPage';

const App = () => {
  return (
    <BrowserRouter basename="/e-commerce">
      <Toaster position="top-right" /> {/* CUADRO DE NOTIFICACIONES */}
      <Routes>
        <Route path="/" element={<UserLayout />}>
          {/* user Layout */}
          <Route index element={<Home/>}/>
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />}/>
          <Route path='profile' element={<Profile />} />
          <Route path='collections/:collection' element={<CollectionPage />} />
          <Route path='product/:id' element={<ProductDetail />} />
          <Route path='checkout' element={<Checkout />} />
          <Route path='order-confirmation' element={<OrderConfirmationPage />} />
          <Route path='order/:id' element={<OrderDetailsPage />}/>
          <Route path='my-orders' element={<MyOrdersPage />} />
        </Route>
        <Route>{/* admin layout*/}</Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
