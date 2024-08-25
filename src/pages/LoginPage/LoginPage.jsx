import LoginForm from '../../components/LoginForm/LoginForm';
import s from '../RegistrationPage/RegistrationPage.module.css';

const LoginPage = () => {
  return (
    <div className={s.wrapper}>
      <h2>LogIn</h2>
      <LoginForm />
    </div>
  );
};

export default LoginPage;
