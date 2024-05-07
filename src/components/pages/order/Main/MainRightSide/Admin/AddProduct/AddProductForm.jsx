import React from 'react';
import { useForm } from 'react-hook-form';

export default function AddProductForm() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => {
    console.log(data);
    // Convert the image file to Blob before submitting
    data.image = new Blob([data.image[0]], { type: data.image[0].type });
    console.log(data);
  };

  const image = watch('image', '');

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <input name="name" placeholder="Nom du produit" ref={register} />
      
      <input name="price" placeholder="Prix du produit" ref={register} />
      
      <input name="image" type="file" ref={register} />
      
      {image[0] && <img src={URL.createObjectURL(image[0])} alt="Product preview" />}
      
      <input type="submit" />
    </form>
  );
}