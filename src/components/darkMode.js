import { useEffect, useState } from 'react'
import { func, string } from 'prop-types'
import styled from 'styled-components'
import { HiOutlineSun, HiOutlineMoon } from "react-icons/hi"

export const useDarkMode = () => {
  const [theme, setTheme] = useState('LIGHT')
  const [componentMounted, setComponentMounted] = useState(false)
  const setMode = mode => {
    window.localStorage.setItem('theme', mode)
    setTheme(mode)
  }

  const toggleTheme = () => {
    if (theme === 'LIGHT') {
      setMode('DARK')
    } else {
      setMode('LIGHT')
    }
  }

  useEffect(() => {
    const localTheme = window.localStorage.getItem('theme');
    window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches && !localTheme ?
      setMode('dark') :
      localTheme ?
        setTheme(localTheme) :
        setMode('LIGHT')
    setComponentMounted(true)
  }, [])

  return [theme, toggleTheme, componentMounted]
}

const Switch = styled.div `
  cursor: pointer;
  position: absolute;
  top: 0;
  right: 0;
  height: 70px;
  width: 70px;
  display: flex;
  justify-content: flex-end;
  align-items: center;
`

const Toggle = ({ theme, toggleTheme }) => {
  
  //const isLight = theme === 'LIGHT'

  return (
    <Switch onClick={toggleTheme} >
      {theme === "LIGHT" ? < HiOutlineMoon size ="2rem"/> : < HiOutlineSun size ="2rem"/>}
    </Switch>
    
  )
}

Toggle.propTypes = {
  theme: string.isRequired,
  toggleTheme: func.isRequired,
}

export default Toggle