import { useState } from 'react';   
import './ProductForm.css';

function ProductForm(props){


    const [newTitle,setTitle] = useState('');
    const [newDate,setDate] = useState('');

    function titleChangeHandler(event){
        setTitle(event.target.value);
        // console.log(event.target.value);
    }

    function dateChangeHandler(event){
        setDate(event.target.value);
        // console.log(event.target.value);
    }


    function SubmitHandler(event){
        event.preventDefault(); 
        const productData = {
            title:newTitle,
            dateL:newDate
        };
        // console.log(productData);
        props.onSaveProduct(productData);

        setTitle('');
        setDate('');


    }


    return (
    <form  onSubmit={SubmitHandler}>
        <div className='full-page'>
        <div >
            <label className='new-product_title'>Title</label>
            <input type='text' value={newTitle} onChange={titleChangeHandler}></input>
        </div>
        <div className='new-product_date'>
            <label >Date</label>
            <input type='date' value={newDate} min='2023-0-01' max='2023-12-12' onChange={dateChangeHandler}></input>
        </div>
        <div className='new-product_button'>
            <button type='submit' >Add Product</button>
        </div>
        </div>
    </form>);
}


export default ProductForm;