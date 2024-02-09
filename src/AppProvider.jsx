import React from 'react'
import { createContext } from 'react'
import { useState } from 'react';

export const AppContext = createContext();

function AppProvider(props) {
    const [open,setopen] = useState(false);
    function HandleOpenMobileNav(){
        setopen(!open);
    }
  return (
    <AppContext.Provider value={{open,HandleOpenMobileNav}}>
        {props.children}
    </AppContext.Provider>
  )
}

export default AppProvider