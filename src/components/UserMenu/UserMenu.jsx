import { useDispatch, useSelector } from 'react-redux';
import { selectUser } from '../../redux/auth/selectors';
import { logoutThunk } from '../../redux/auth/operations';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { name } = useSelector(selectUser);

  return (
    <div>
      <p>Welcome, {name}</p>
      <button type="button" onClick={() => dispatch(logoutThunk())}>
        Logout
      </button>
    </div>
  );
};
