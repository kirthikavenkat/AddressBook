
import ReactDOM from 'react-dom/client';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Login from './Pages/Login/LoginPage';
import ForgotPassword from './Pages/ForgotPassword/ForgotPasswordPage';
import {BrowserRouter,Route, Routes} from "react-router-dom";
import Mainpage from './Pages/MainPage/mainppage';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
); 
root.render(

  <BrowserRouter><Routes>
  <Route path="/" element={<Login/>}></Route>
  <Route path="/home" element={<Mainpage/>}></Route>
  <Route path="/forgot" element={<ForgotPassword/>}></Route>
  </Routes></BrowserRouter>

);
reportWebVitals();
