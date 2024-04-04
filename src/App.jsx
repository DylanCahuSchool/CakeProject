import { Route, Routes } from "react-router-dom";
import "./App.css";
import ErrorPage from "./components/pages/error/errorPage";
import LoginPage from "./components/pages/login/loginPage";
import OrderPage from "./components/pages/order/orderPage";
import styled from 'styled-components';


const AppStyled = styled.div`
    margin: 2em 2em 0 2em;
    max-height: 80vh;

`;

function App() {
    return (
         <AppStyled>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/order/:username" element={<OrderPage />} />
                <Route path="/*" element={<ErrorPage />} />
            </Routes>
         </AppStyled>
    );
}

export default App;
