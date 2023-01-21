import { useSelector } from 'react-redux';
import {
  selectUser,
  selectIsLogIn,
  selectIsRefreshing,
  selectIsLoading,
  selectIsError,
} from 'redux/Auth/authSelectors';

export const useAuth = () => {
  const isLogIn = useSelector(selectIsLogIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const user = useSelector(selectUser);
  const IsLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);

  return {
    isLogIn,
    isRefreshing,
    user,
    IsLoading,
    isError,
  };
};