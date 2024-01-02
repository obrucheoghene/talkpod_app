export const darkTheme = {
    colors: {
        white: '#ffffff',
        black: '#000000',
        foreground: '#ffffff',
        background: '#181A20',
        primary: '#246BFD',
        secondary: '#FFD300',
        success: '#07BD74',
        warning: '#FACC15',
        info: '#246BFD',
        error: '#F75555',
        disabled: '#D8D8D8',
        disabledButton: '#3062C8',
        dark1: '#181A20',
        dark2: '#1F222A',
        dark3: '#35383F'
    },
    spacing: {
        xs: 4,
        s: 8,
        m: 16,
        l: 24,
        xl: 40,
    },
    
}

export const lightTheme = {
    ...darkTheme,
    colors: {
        ...darkTheme.colors,
        foreground: '#181A20',
        background: '#ffffff',
    }
}
