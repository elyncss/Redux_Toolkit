import Counter from './components/Counter';
import Header from './components/Header';
import Auth from './components/Auth';
import UserProfile from './components/UserProfile';
import { useSelector, useDispatch } from 'react-redux';


function App() {

  const loginShow = useSelector(state=>state.auth.isAuthenticate)
  return (
    <>
    <Header />
    {!loginShow && <Auth />}
    {loginShow && <UserProfile/>}
    <Counter />
    </>
  );
}

export default App;
