import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";

const GifExpertApp = () => {

    //const categories = [ 'Marvel', 'DC', 'Disney']
    const [ categories, setCategories ] = useState([ 'Marvel'])
    // const handleAdd = () => 
    //     setCategories([...categories,'Pixar']);
    return <>
            <h2>GifExpertApp</h2>
            <hr />
            <AddCategory setCategories={setCategories}/>
            <ol>
                {categories.map( 
                    (c) => <GifGrid  category={c} key={c} />
                    )
                }
            </ol>
        </>
}

export default GifExpertApp;