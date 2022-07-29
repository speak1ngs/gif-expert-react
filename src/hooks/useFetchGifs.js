import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGif";




export const useFetchGifs = ( category ) => {

    const [ images, setImages ] = useState([]);
    const [ isLoading, setIsloading ] = useState( true );

    const getImages = async () =>  {
        const newImages = await getGifs(category);
        setImages(newImages)
        setIsloading(false);
    }


    useEffect(  () => {

        getImages();
    }, [ ]);



    return {
        // en es6 si una propiedad del objeto tiene el mismo nombre que el objeto que recibe
        // se puede dejar solamente el obj

        images,
        isLoading,
    }
}

