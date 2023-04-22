import { Route, Routes, Navigate } from 'react-router-dom'
import { HomePage, LoginPage, RegisterPage } from '../pages';
import { useUser } from '../hooks/useUser';

export const AppRoutes = () => {

    const { handleLoginUser, handleNewUser, users } = useUser();

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

    )
}
