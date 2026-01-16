import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import LoginPage from '../pages/LoginPage'
import ProductDetail from '../pages/ProductDetail'
import { ROUTES } from './routePaths'

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      {/* Public Routes */}
      <Route path={ROUTES.HOME} element={<Home />} />
      
      {/* Auth Routes */}
      <Route path={ROUTES.LOGIN} element={<LoginPage />} />
      {/* <Route path={ROUTES.REGISTER} element={<RegisterPage />} /> */}
      
      {/* Product Routes */}
      <Route path={ROUTES.PRODUCT_DETAIL} element={<ProductDetail />} />
      {/* <Route path={ROUTES.PRODUCTS} element={<ProductListPage />} /> */}
      {/* <Route path={ROUTES.CATEGORY} element={<ProductListPage />} /> */}
      
      {/* Cart & Checkout */}
      {/* <Route path={ROUTES.CART} element={<CartPage />} /> */}
      {/* <Route path={ROUTES.CHECKOUT} element={<CheckoutPage />} /> */}
      
      {/* User Routes */}
      {/* <Route path={ROUTES.PROFILE} element={<ProfilePage />} /> */}
      {/* <Route path={ROUTES.ORDERS} element={<OrdersPage />} /> */}
      
      {/* 404 - Keep at the end */}
      {/* <Route path={ROUTES.NOT_FOUND} element={<NotFoundPage />} /> */}
    </Routes>
  )
}

export default AppRoutes
