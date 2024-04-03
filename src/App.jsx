import { Route, Routes } from "react-router-dom";
import "./App.css";
import ErrorPage from "./components/pages/error/ErrorPage";
import LoginPage from "./components/pages/login/LoginPage";
import OrderPage from "./components/pages/order/OrderPage";
import styled from 'styled-components';


const AppStyled = styled.div`
  background-color: #5acaca;

`;

function App() {
    return (
        // <AppStyled>
            <Routes>
                <Route path="/" element={<LoginPage />} />
                <Route path="/order/:username" element={<OrderPage />} />
                <Route path="/*" element={<ErrorPage />} />
            </Routes>
        // </AppStyled>
    );
}

export default App;
