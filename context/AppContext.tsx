import { ReactNode, createContext, useEffect, useState } from "react";
import { theme as themeValue } from "../types/interfaces";
import { darkTheme, lightTheme } from "../utils/theme";

interface AppContextValue {
    theme: typeof darkTheme
    themeName: themeValue,
    setThemeName: React.Dispatch<React.SetStateAction<themeValue>>;
}
export const AppContext = createContext<AppContextValue>({
    theme: darkTheme,
    themeName: 'dark',
    setThemeName: () => { }
})

interface AppProviderProps {
    children: ReactNode
}

const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const [themeName, setThemeName] = useState<themeValue>('dark');
    const [theme, setTheme] = useState<typeof darkTheme>(darkTheme)

    useEffect(() => {
        themeName === 'dark' ? setTheme(darkTheme) : setTheme(lightTheme);
    }, [themeName])
    return <AppContext.Provider value={{ theme, themeName, setThemeName }}>
        {children}
    </AppContext.Provider>
}

export default AppProvider
