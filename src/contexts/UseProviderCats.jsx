import { useState } from "react";
import { UseContextCats } from "./UseContextCats";

export const UseProviderCats = ({ children }) => {

    const [cats, setCats] = useState([]);

    return (
        <UseContextCats.Provider value={{ cats, setCats }}>

            {children}

        </UseContextCats.Provider>
    );
};
