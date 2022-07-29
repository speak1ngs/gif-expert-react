//orden de los imports
//archivos de terceros primeros
// import { useEffect, useState } from "react";
//archivos locales
import { GifGridItem } from "./GifGridItem";
//funciones
import { useFetchGifs } from "../hooks/useFetchGifs";




export const GifGrid = ({ category }) => {
    

    // crear hooks estandar presonalizado se empieza con la frase use
    const { images, isLoading} = useFetchGifs(category);

    return (
    <>
        <h3>{ category }</h3>
            {
                isLoading && ( <h3>Loading...</h3> )
                
            }
        <div className='card-grid'>
        {       
                /*
                    alternativa para enviar los parametros cuando tienes muchas propiedades 
                    o paquetes de 3ros que manejan formularios {...image}
                 */
                images.map(( image) => (
                    <GifGridItem key={ image.id } {...image} />
                )) 
            } 
            
        </div>
    </>
    )
}


