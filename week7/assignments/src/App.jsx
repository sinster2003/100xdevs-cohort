import { useRecoilValue } from "recoil"
import Background from "./components/Background"
import Profile from "./components/Profile"
import colorAtom from "./store/colorAtom"
import Para from "./components/Para"
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Login from "./components/Login"
import GoToLogin from "./components/GoToLogin"
import Otp from "./components/Otp"

const App = () => {

    const backgroundColor = useRecoilValue(colorAtom);

    console.log(backgroundColor)

  return (
    // <Profile imgUrl="https://bit.ly/kent-c-dodds" name="Kent Dodds" age={32} place="London"/>
    /*
    <div style={{
        width: "100vw",
        height: "100vh",
        backgroundColor
    }}>
        <Background />  
    </div>
    */
    // <Para />
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "1rem"
    }}>
      <h1>Login Via OTP</h1>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<GoToLogin />}/>
        <Route path="/login" element={<Login />}/>
        <Route path="/otp" element={<Otp />}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App