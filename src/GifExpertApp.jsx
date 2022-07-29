import { useState } from "react";
import { AddCategory, GifGrid } from "./components";

export const GifExpertApp = () => {

    const [ categories, setCategories ] = useState([]);


    const onAddCatergory = ( onNewCategory) => {
        
        // controlar que el valor no esta dentro del arreglo que contiene los valores de la lista
        if(categories.includes(onNewCategory) ) return;


        const arr = [onNewCategory,...categories ];
        // setCategories( cat => [...cat, value]) 
        setCategories(arr);
    
    }

    return(
        <>
          
            <h1>GifExpertApp</h1>
            
               {/* cuando se empieza con on... indica que es un evento o utiliza uno es una buena practica
                para que sea legible el codigo por nosotros y otros devs */}
                {/* <AddCategory onAddCatergory= { onAddCatergory }/> */}
                <AddCategory onNewCategory= {  onAddCatergory } />
                {/* metodo alternativo pero no es correcto mandar el hijo del hooks */}
                {/* <AddCategory setCategories= { setCategories }/> */}

                {/* <button onClick={ onAddCatergory }>Agregar</button> */}

                    { 
                        categories.map((category ) => ( <GifGrid category={category} key={ category }/>))
                    }
                    
        </>
    )
};