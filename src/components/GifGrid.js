import React, { useState, useEffect } from "react";
import { getGifs } from "../helpers/getGifs";
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifGridItem } from "./GifGridItem";

const GifGrid = ({category})=>{

    
    const  {images, loading}  = useFetchGifs(category);



    return (
        <>
            <h3> { category } </h3>
            {loading && <p> Loading</p>}
            <div className="card-grid">
                    {
                        images.map( img => (
                            <GifGridItem key = { img.id } img = { img } />
                        ))
                    }

            </div>
        </>
    );
}
export default GifGrid;