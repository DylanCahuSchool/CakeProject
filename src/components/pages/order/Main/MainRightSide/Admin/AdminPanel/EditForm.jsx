import React, { useState, useEffect, useContext } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import TextInput from "../../../../../../reusable-ui/TextInput"
import OrderContext from "../../../../../../../context/OrderContext"
import Button from "../../../../../../reusable-ui/Button"
import ImagePreview from "./ImagePreview"
import SubmitMessage from "./SubmitMessage"
import { fakeMenu2 } from "../../../../../../../fakeData/fakeMenu"

export default function EditForm() {
    const { register, watch, setValue } = useForm();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const { selectedUpdateProduct } = useContext(OrderContext); // access menu and selectedUpdateProduct from context
    const [menu] = useState(fakeMenu2)

    const handleSubmit = (event) => {
        const productToUpdate = menu.find(product => product.id === selectedUpdateProduct);
        if (productToUpdate) {
            productToUpdate.imageSource = data.imageSource;
            productToUpdate.title = data.title;
            productToUpdate.price = data.price;
            setIsSubmitted(true);
        }
    }

    const handleChange = event => {
        setValue(event.target.name, event.target.value);
    };

    const inputTexts = [
        { id: 'imageSource', label: 'Image Source', value: watch('imageSource') },
        { id: 'title', label: 'Title', value: watch('title') },
        { id: 'price', label: 'Price', value: watch('price') },
    ];

    useEffect(() => {
        const productToUpdate = menu.find(product => product.id === selectedUpdateProduct);
        if (productToUpdate) {
            setValue("id", productToUpdate.id);
            setValue("imageSource", productToUpdate.imageSource);
            setValue("title", productToUpdate.title);
            setValue("price", productToUpdate.price);
        }
    }, [setValue, menu, selectedUpdateProduct]); // add dependencies

    return (
        <EditFormStyled onSubmit={handleSubmit}>
            <ImagePreview imageSource={watch('imageSource')} title={watch('title')} />
            <div className="input-fields">
                {inputTexts.map((input) => (
                    <TextInput
                        key={input.id}
                        name={String(input.name)} // Ensure this is a string
                        onChange={handleChange}
                        version="minimalist"
                        defaultValue={input.value} 
                        ref={register} 
                    />))}
            </div>
            <div className="submit">
                <Button
                    className="submit-button"
                    label={"Mise à jour du produit"}
                    version="success"
                />
                {isSubmitted && <SubmitMessage />}
            </div>
        </EditFormStyled>
    );
}


const EditFormStyled = styled.form`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  height: 100%;
  width: 70%;
  grid-column-gap: 20px;
  grid-row-gap: 8px;

  .input-fields {
    grid-area: 1 / 2 / -2 / 3;

    display: grid;
    grid-row-gap: 8px;
  }

  .submit {
    grid-area: 4 / -2 / -1 / -1;
    display: flex;
    align-items: center;
    position: relative;
    top: 3px;

    .submit-button {
      height: 100%;
    }
  }
`;
