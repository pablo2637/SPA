import { useState } from "react"
import { UserContext } from "./UseContext"
import { getLocalUser } from "../helpers/localStorage";

export const UseProvider = ({ children }) => {

    const [user, setUser] = useState(getLocalUser());

    return (
        <UserContext.Provider value={{ user, setUser }}>

            {children}

        </UserContext.Provider>
    )
}
