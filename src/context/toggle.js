import { createContext, useContext } from "react";


export const sideBarContext = createContext()

export const SideBarContextProvider = sideBarContext.Provider

export  function useSideBar(){
    return useContext(sideBarContext)
}