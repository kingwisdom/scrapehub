import { useEffect } from "react";
import Router from "./route/Route";
import { useDispatch } from "react-redux";
import { loginUser } from "./store/userSlice";


function App() {
  const dispatch = useDispatch()
  useEffect(() => {
    const user = window.localStorage.getItem('user') !== null ? JSON.parse(window.localStorage.getItem('user')) : null
    dispatch(loginUser(user));
  }, [])

  return (
    <Router />
  );
}

export default App;
