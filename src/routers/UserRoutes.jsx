import { Route, Routes, Navigate } from 'react-router-dom'
import { HomeProductPage, DetailPage, LogoutPage, SearchPage, ProductPages } from '../pages/products'

export const UserRoutes = () => {
    
    return (

        <Routes>

            <Route path='/home' element={<HomeProductPage />} />
            <Route path='products/:category' element={<ProductPages />} />
            <Route path='detail/:id' element={<DetailPage />} />
            <Route path='search' element={<SearchPage />} />
            <Route path='logout' element={<LogoutPage />} />

            <Route path='/*' element={<Navigate to={'/home'} />} />

        </Routes>

    );
};
