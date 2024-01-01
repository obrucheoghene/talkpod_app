import { ReactNode, createContext, useEffect, useState } from "react";
import { theme as themeValue } from "../types/interfaces";
import { darkTheme, lightTheme  } from "../utils/theme";

interface AppContextValue {
    theme: Record<string, any>
    themeName: themeValue,
    setThemeName: React.Dispatch<React.SetStateAction<themeValue>>;
}
export const AppContext = createContext<AppContextValue>({
    theme: {},
    themeName: 'dark',
    setThemeName: () => {}
})

interface AppProviderProps {
    children: ReactNode
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [themeName, setThemeName] = useState<themeValue>('dark');
    const [theme, setTheme] = useState<Record<string, any>>({})

    useEffect(() => {
        themeName === 'dark' ? setTheme(darkTheme) : setTheme(lightTheme); 
    }, [themeName])
    return <AppContext.Provider value={{theme, themeName, setThemeName}}>
        {children}
        </AppContext.Provider>
}
