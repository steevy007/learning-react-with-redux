import Counter from "./components/Counter";
import Header from "./components/Header";
import UserProfil from './components/UserProfile'
import { useSelector } from "react-redux";
import Auth from "./components/Auth";
function App() {
  const auth=useSelector((state)=>state.auth.isAuthentificated)
  return (
    <>
      <Header />
      {!auth && <Auth />}
      {auth && <UserProfil/>}
      <Counter />
    </>
  );
}

export default App;
