const COLORS = {
    light: "hsl(77, 11%, 95%)",
    dark: "hsl(169, 10%, 25%)",
    colored: "hsl(205, 99% ,40%)"
}

const LAYOUT = {
    small: {
        margin: "1.5rem",
        spacer: "0.9rem",
        border: "3px",
        opacity: "1"
    },
    large: {
        margin: "3rem",
        spacer: "1rem",
        border: "5px",
        opacity: "0.85",
    },
    shadow: "0px 5px 10px 0px rgba(50, 50, 46, 0.15)",
    transition: "0.4s",
    letterSpacing: "0.12rem"
}

const TYPESCALE = {
    small: {
        fs: "1rem",
        fr: "1.333"
    },
    large: {
        fs: "1.2rem",
        fr: "1.618"
    }
}

const TYPEFACE = {
    body: "Roboto Condensed, sans-serif",
    header: "Cabin, sans-serif",
    normal: "400",
    italic: "italic",
    bold: "700"
}

const SIZE = {
    sm: "640px",
    md: "768px",
    lg: "1024px",
    xl: "1280px",
    xxl: "1536px"
}

const mq = {
    sm: `@media(min-width: ${SIZE.sm})`,
    md: `@media(min-width: ${SIZE.md})`,
    lg: `@media(min-width: ${SIZE.lg})`,
    xl: `@media(min-width: ${SIZE.xl})`,
    xxl: `@media(min-width: ${SIZE.xxl})`  
}

export { COLORS, LAYOUT, SIZE, TYPESCALE, TYPEFACE, mq }