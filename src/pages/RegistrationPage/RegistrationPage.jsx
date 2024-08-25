import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import s from './RegistrationPage.module.css';

const RegistrationPage = () => {
  return (
    <div className={s.wrapper}>
      <h2>Registration</h2>
      <RegistrationForm />
    </div>
  );
};

export default RegistrationPage;
