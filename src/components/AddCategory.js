import React, { useState } from "react";
import propTypes from "prop-types";
//se puede colocar props.setCategories
const AddCategory = ({setCategories}) => {
    const [ inputValue, setInputValue ] = useState('')
    
    const handleInputChange= (e) => {
        setInputValue(e.target.value);
    }
    const handleAdd = () => setCategories(cats=> [inputValue,...cats,])
    const handleSubmit = (e) => {
        e.preventDefault();
        handleAdd();
        console.log('Submit hecho');
    }
    return (
        <form onSubmit = {handleSubmit}>
            <input 
                type="text"
                value = { inputValue }
                onChange = { handleInputChange }
            />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: propTypes.func.isRequired,
}

export default AddCategory;