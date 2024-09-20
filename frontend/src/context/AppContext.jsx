import { createContext } from "react";
import { classesArray } from '../assets/assets'

export const AppContext = createContext()

const AppContextProvider = (props) => {
    const value = {
        classesArray
    }
    return(
        <AppContext.Provider value={value}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContextProvider