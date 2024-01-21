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
        dark3: '#35383F',
        grey600: '#757575',
        grey300: '#E0E0E0',
    },
    spacing: {
        xs: 4,
        s: 8,
        b: 16,
        m: 18,
        l: 24,
        xl: 48,
    },
    sizes: {
        xs: 4,
        s: 8,
        b: 16,
        m: 18,
        l: 24,
        xl: 48,

        s4: 4,
        s8: 8,
        s16: 16,
        s18: 18,
        s24: 24,
        s48: 48,
        s50: 50,
        s60: 60
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



