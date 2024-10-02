import { createContext, useState } from "react";

export const LightModeContext = createContext()

 export const LightModeProvider = ({children}) => {
    const [isLightMode, setIsLightMode] = useState(false);
    const toggleLightMode = () => setIsLightMode(!isLightMode)
   

    return(
        <LightModeContext.Provider
        value={{isLightMode, setIsLightMode,  toggleLightMode}}>
            {children}
        </LightModeContext.Provider>
    )

}