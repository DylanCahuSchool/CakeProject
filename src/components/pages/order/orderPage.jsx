import { useParams } from "react-router-dom";
import styled from 'styled-components';
import NavBar from "../../reusable-ui/NavBar";
import ItemCard from "../../reusable-ui/itemCard";
import { fakeMenu } from "../../../fakeData/fakeMenu";

const OrderStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 60px;
    justify-items: center;
    padding: 50px;
    background-color: #ffffff;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    overflow-y: scroll;
    overflow-x: hidden;
    max-height: 73vh;
    
   /* // scroll bar custom
    &:-webkit-scrollbar {
        width: 5px;
    }

    &:-webkit-scrollbar-track {
        background: transparent;
    }

    &:-webkit-scrollbar-thumb {
        background: var(--accent1);
        border-radius: 10px;
    }

    &:-webkit-scrollbar-thumb:hover {
        background: var(--accent1-gradient);
    } */

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
                {fakeMenu.map((item) => (
                    <ItemCard key={item.id} product={item} />
                ))}
            </OrderStyled>
        </>
    );
}
