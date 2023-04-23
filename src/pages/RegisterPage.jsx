import { RegisterUser } from "../components/RegisterUser";


export const RegisterPage = ({ handleNewUser, users }) => {

  return (
    <section className="secRegister">

      <RegisterUser
        handleNewUser={handleNewUser}
        users={users}
      />

    </section>
  );
};
