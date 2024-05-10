import { useState } from "react"
import styled from "styled-components"
import { theme } from "../../../theme"
import Main from "./Main/Main"
import Navbar from "./Navbar/Navbar"
import OrderContext from "../../../context/OrderContext"
import { fakeMenu2 } from "../../../fakeData/fakeMenu"
import { EMPTY_PRODUCT } from "./Main/MainRightSide/Admin/AdminPanel/AddForm"

export default function OrderPage() {
  const [isModeAdmin, setIsModeAdmin] = useState(false)
  const [isCollapsed, setIsCollapsed] = useState(false)
  const [currentTabSelected, setCurrentTabSelected] = useState("add")
  const [menu, setMenu] = useState(fakeMenu2)
  const [newProduct, setNewProduct] = useState(EMPTY_PRODUCT)
  const [selectedUpdateProduct, setSelectedUpdateProduct] = useState(null);


  const handleAdd = (newProduct) => {
    const menuCopy = [...menu]

    const menuUpdated = [newProduct, ...menuCopy]

    setMenu(menuUpdated)
  }

  const handleDelete = (idOfProductToDelete) => {
    const menuCopy = [...menu]

    const menuUpdated = menuCopy.filter((product) => product.id !== idOfProductToDelete)

    setMenu(menuUpdated)
  }

  const resetMenu = () => {
    setMenu(fakeMenu2)
  }

  const handleUpdate = (idOfProductToUpdate, updatedProduct) => {
    const menuCopy = [...menu]

    const menuUpdated = menuCopy.map((product) =>
      product.id === idOfProductToUpdate ? updatedProduct : product
    )

    setMenu(menuUpdated)
  }

  const handleCardClick = (idOfProductToUpdate) => {  if (isModeAdmin) {
    console.log("Update : " +  idOfProductToUpdate);
    setSelectedUpdateProduct(idOfProductToUpdate);
    setCurrentTabSelected("edit");
  } else {
    console.log(idOfProductToUpdate);
    // Perform other actions here
  }  }

  const orderContextValue = {
    isModeAdmin,
    setIsModeAdmin,
    isCollapsed,
    setIsCollapsed,
    currentTabSelected,
    setCurrentTabSelected,
    menu,
    handleAdd,
    handleDelete,
    resetMenu,
    newProduct,
    setNewProduct,
    handleUpdate,    
    selectedUpdateProduct,
    handleCardClick,
  }

  return (
    <OrderContext.Provider value={orderContextValue}>
      <OrderPageStyled>
        <div className="container">
          <Navbar />
          <Main />
        </div>
      </OrderPageStyled>
    </OrderContext.Provider>
  )
}

const OrderPageStyled = styled.div`
  background: ${theme.colors.primary};
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    height: 95vh;
    width: 1400px;
    display: flex;
    flex-direction: column;
    border-radius: ${theme.borderRadius.extraRound};
  }
`
