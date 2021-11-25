import React, { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const NewsContext:any = createContext(null);

export const NewsContextProvider = (props: {children: any;}) => {
    const [data,setData] = useState();

    const apiKey = "e4036accbe6146dabc4b84ffe0402bb0"
    useEffect( () => {
         axios.get(`https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=${apiKey}`)
        .then(response => setData(response.data))
        .catch((error) => console.log(error));

        
    }, []);

    return <NewsContext.Provider value={{data}}>
        {props.children}
    </NewsContext.Provider>;
}

