import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset-advanced'
import { COLORS, LAYOUT, TYPESCALE, mq } from "./constants"


const GlobalStyles = createGlobalStyle `
    
    ${reset}
    
    * {
    box-sizing: border-box;
    }
    
    html {
    height: 100%;
    --clr-light: ${COLORS.light};
    --clr-dark: ${COLORS.dark};
    --clr-colored: ${COLORS.colored};
    --margin: ${LAYOUT.small.margin};
    --spacer: ${LAYOUT.small.spacer};
    --border: ${LAYOUT.small.border};
    --opacity: ${LAYOUT.small.border};
    --fs: ${TYPESCALE.small.fs};
    --fr: ${TYPESCALE.small.fr};
    ${mq.xl} {
        --margin: ${LAYOUT.large.margin};
        --spacer: ${LAYOUT.large.spacer};
        --border: ${LAYOUT.large.border};
        --opacity: ${LAYOUT.large.opacity};
        --fs: ${TYPESCALE.large.fs};
        --fr: ${TYPESCALE.large.fr}
        }
    }

    body {
        color: var(--clr-dark);
        background: var(--clr-light);
        -webkit-font-smoothing: antialiased;
        -webkit-text-size-adjust: 100%;
    }

    .App {
        min-height: 100vh;
        min-height: calc(var(--vh, 1vh) * 100);
        display: flex;
        flex-direction: column;
        overflow-x: hidden;
    }
`
export { GlobalStyles }