import React, { FunctionComponent, useState } from "react";

export type menuContext = {
    isMenuShown: boolean,
    toggleMenu: () => void;
};


export const MenuContext = React.createContext<menuContext | null>(null);


const MenuProvider: FunctionComponent = ({ children }) => {

    
    const [isMenuShown, setIsMenuShown] = useState<boolean>(false);

    const toggleMenu = () => {
        setIsMenuShown(prevState => !prevState);
    }

    const context = {
        isMenuShown,
        toggleMenu
    };

    return <MenuContext.Provider value={context}>
        { children }
    </MenuContext.Provider>

}

export default MenuProvider;