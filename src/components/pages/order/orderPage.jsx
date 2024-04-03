import { useParams } from "react-router-dom";
import styled from 'styled-components';
import NavBar from "../../reusable-ui/NavBar";


const OrderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1em;
  background-color: #ffffff;


::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    background-color: #5acaca;
}
`;

export default function OrderPage(props) {
    const { username } = useParams();

    return (
        <>
            <NavBar username={username} />
            <OrderStyled>
                <h1>Commande de {username}</h1>
            </OrderStyled>
        </>
    );
}
