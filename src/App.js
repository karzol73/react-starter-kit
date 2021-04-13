import  { useEffect } from "react"
import { ThemeProvider } from 'styled-components'
import { LIGHT, DARK } from "./styles/theme"
import { GlobalStyles } from "./styles/globals"
import { Container, MainContent, Divider, Footer } from "./styles/layout"
import { Text } from "./styles/typo"
import { useDarkMode } from "./components/darkMode"
import Nav from "./components/Nav/Nav"
import Typo from "./components/Typo"
import Clamp from "./components/Clamp"
import Buttons from "./components/Buttons"

function App() {

  // switch between light and dark mode
  const [theme, toggleTheme] = useDarkMode()
  
  // calculate exact vh
  useEffect(() => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty("--vh", `${vh}px`)
  }, [])

  return (
    <div className="App">
      <ThemeProvider theme={theme === "LIGHT" ? LIGHT : DARK}>
        <>  
          <GlobalStyles />
          <MainContent>
            <Nav theme={theme} toggleTheme={toggleTheme} />
            <Typo />
            <Divider large />
            <Clamp />
            <Divider large />
            <Buttons />
          </MainContent>
          
          <Footer>
            <Container centerFull height="20rem">
              <Text light uppercase wide>Sticky Footer</Text>
            </Container>
          </Footer>
        </>
      </ThemeProvider>
    </div>
  )
}

export default App;
