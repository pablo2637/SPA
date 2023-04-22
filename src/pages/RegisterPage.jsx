import { RegisterUser } from "../components/RegisterUser"


export const RegisterPage = ({ handleNewUser, users }) => {

  return (
    <section>

      <h2>Registro de usuarios</h2>

      <RegisterUser
        handleNewUser={handleNewUser}
        users={users}
      />

    </section>
  )
}
