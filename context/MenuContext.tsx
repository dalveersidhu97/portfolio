import React, { FunctionComponent, useState } from "react";

export type menuContext = {
    isMenuShown: boolean,
    isSideBarShown: boolean,
    toggleMenu: () => void,
    toggleSideBar: () => void,
    hideAll: () => void;
};


export const MenuContext = React.createContext<menuContext | null>(null);


const MenuProvider: FunctionComponent = ({ children }) => {

    
    const [isMenuShown, setIsMenuShown] = useState<boolean>(false);

    const [isSideBarShown, setIsSideBarShown] = useState<boolean>(false);

    const toggleSideBar = () => {
        setIsMenuShown(false);
        setIsSideBarShown(prevState => !prevState);
    }

    const toggleMenu = () => {
        setIsSideBarShown(false);
        setIsMenuShown(prevState => !prevState);
    }

    const hideAll = () => {
        setIsMenuShown(false);
        setIsSideBarShown(false);
    }

    const context = {
        isMenuShown,
        isSideBarShown,
        toggleMenu,
        toggleSideBar,
        hideAll
    };

    return <MenuContext.Provider value={context}>
        { children }
    </MenuContext.Provider>

}

export default MenuProvider;