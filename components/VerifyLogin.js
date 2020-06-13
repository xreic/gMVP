import firebase from 'firebase/app';
import { useContext, useEffect } from 'react';
import { useRouter } from 'next/router';
import { UserContext } from '../utils/UserContext';

const homePaths = ['/', '/login', '/register'];

const VerifyLogin = (props) => {
  const user = useContext(UserContext);
  const router = useRouter();
  const { pathname } = router;

  if (!user) {
    /**
     * When the user is not logged in
     * then check if the current path is one of the home paths
     * if not then redirect
     * if it is then do nothing
     */
    if (homePaths.indexOf(pathname) === -1) {
      useEffect(() => {
        router.push('/');
      }, []);
    }
  } else {
    /**
     * When the user is logged in
     * then check if the current path is one of the home paths
     * if it is then redirect
     * if not then do nothing
     */
    if (homePaths.indexOf(pathname) !== -1) {
      useEffect(() => {
        router.push('/profile');
      }, []);
    }
  }

  return props.children;
};

export default VerifyLogin;
