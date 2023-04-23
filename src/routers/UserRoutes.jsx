import { Route, Routes, Navigate } from 'react-router-dom'
import { DetailPage, LogoutPage, SearchPage, ProductPages } from '../pages/products'
import { useContext } from 'react';
import { UseContextCats } from '../contexts/UseContextCats';

export const UserRoutes = () => {

    const { cats } = useContext(UseContextCats);

    return (

        <Routes>

            {/* <Route path='/home' element={<HomeProductPage />} /> */}
            <Route path='products/:category' element={<ProductPages />} />
            <Route path='detail/:id' element={<DetailPage />} />
            <Route path='search' element={<SearchPage />} />
            <Route path='logout' element={<LogoutPage />} />

            <Route path='/*' element={<Navigate to={`/products/${cats[0]}`} />} />

        </Routes>

    );
};
