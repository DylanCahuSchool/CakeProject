import { useParams } from "react-router-dom";
import styled from 'styled-components';
import NavBar from "../../reusable-ui/NavBar";
import ItemCard from "../../reusable-ui/itemCard";
import { fakeMenu } from "../../../fakeData/fakeMenu";


const OrderStyled = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-gap: 60px;
    justify-items: center;
    padding: 50px;
    background-color: #ffffff;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    border-bottom-left-radius: 15px;
    border-bottom-right-radius: 15px;
    overflow: scroll;
    overflow-x: hidden;
    max-height: 73vh;
    
    ::-webkit-scrollbar {
        width: 10px;
    }

    ::-webkit-scrollbar-track {
        background: transparent; 
    }

    ::-webkit-scrollbar-thumb {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb:hover {
        background: #555; 
    }

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
