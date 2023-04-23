import { Route, Routes, Navigate } from 'react-router-dom';
import { HomePage, LoginPage, RegisterPage } from '../pages';

export const AppRoutes = ({ handleLoginUser, handleNewUser, users }) => {

    return (

        <Routes>

            <Route path='/' element={<HomePage />} />
            <Route
                path='login'
                element={
                    <LoginPage
                        handleLoginUser={handleLoginUser}
                        users={users}
                    />}
            />
            <Route
                path='register'
                element={
                    <RegisterPage
                        handleNewUser={handleNewUser}
                        users={users}
                    />}
            />

            <Route path='/*' element={<Navigate to={'/'} />} />

        </Routes>

    );
};
