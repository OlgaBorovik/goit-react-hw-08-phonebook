import { useSelector , useDispatch} from 'react-redux';
import { authSelectors, authOperations } from 'redux/auth';

// import { useAuth } from 'hooks';


export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(authSelectors.selectUserName);

  return (
    <div>
      <p>Welcome, {name}</p>
      <button type="button" onClick={() => dispatch(authOperations.logOut())}>
        Logout
      </button>
    </div>
  );
};