import s from './HomePage.module.css';
const HomePage = () => {
  return (
    <div className={s.wrapper}>
      <div className={s.titleBox}>
        <h2 className={s.title}>All contacts</h2>
        <h2 className={s.title}>-</h2>
        <h2 className={s.title}>One app</h2>
      </div>
    </div>
  );
};

export default HomePage;
