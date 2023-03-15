import { createContext, useState } from 'react';

const ThemeContext = createContext(null);

function ThemeContextProvider({ children }) {
    const [darkMode, setDarkMode] = useState(false);

    function setTheme() {
        setDarkMode((prevState) => !prevState);
    }

    return (
        <ThemeContext.Provider value={{ darkMode, setTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}

export { ThemeContext, ThemeContextProvider };
