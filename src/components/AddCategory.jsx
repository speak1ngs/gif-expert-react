import { useState } from "react";


// no es una buena practica enviar el hijo del hooks de useState 
// export const AddCategory = ({ setCategories }) => {

export const AddCategory = ( { onNewCategory }) => {

    const [inputValue, setInputValue] = useState('');

    const onInputChange = ({ target }) =>{

        const value = target.value;
        setInputValue(value);
    };
    
    const onSubmit = (event) => {
        event.preventDefault();
        const newInputValue = inputValue.trim();
        // evita que se envie valores vacios por eso corta con el return
        if( newInputValue.length <= 1) return;
        
        onNewCategory(newInputValue);
        // props.onAddCatergory(inputValue);
        // setCategories(categories => [ inputValue,...categories] );
        // limpia el input del formulario cuando se cargo el valor que enviamos
        setInputValue('');
   
    }
    return (
        <form onSubmit={ onSubmit }>
            <input 
                type='text' 
                placeholder='buscar gifs' 
                value={ inputValue } 
                onChange={ onInputChange }
            />
        </form>
    );
}
