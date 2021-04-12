import  { useEffect } from "react"
import Nav from "./components/Nav/Nav"
import { GlobalStyles } from "./styles/globals"
import { Container, MainContent, Divider, Footer } from "./styles/layout"
import { Text } from "./styles/typo"
import Typo from "./components/Typo"
import Clamp from "./components/Clamp"
import Buttons from "./components/Buttons"

function App() {

  useEffect(() => {
    let vh = window.innerHeight * 0.01
    document.documentElement.style.setProperty("--vh", `${vh}px`)
  }, [])

  return (
    <div className="App">
      
      <GlobalStyles />
      <MainContent>
        <Nav />
        <Typo />
        <Divider large />
        <Clamp />
        <Divider large />
        <Buttons />
      </MainContent>
      
      <Footer>
        <Container centerFull height="10rem">
          <Text light uppercase wide>Sticky Footer</Text>
        </Container>
      </Footer>
          
    </div>
  )
}

export default App;
