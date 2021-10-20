import { getGifs } from "../helpers/getGifs";
import React, { useState, useEffect } from "react";

export const useFetchGifs = ( category ) => {
    const [state, setstate] = useState(
        {
            images: [],
            loading:true,
        }
    );

    useEffect(() => {
        getGifs(category).then( imgs => {
            
            console.log(imgs);  
            setstate({images: imgs,
                    loading: false,
                }); 
    });
    }, [category])
    return state;
}