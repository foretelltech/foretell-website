import React from 'react'
import NavigationBar from './NavigationBar'
import AppContainer from './AppContainer'

const Layout = ({children}) => {
  return (<AppContainer>
    <NavigationBar/>
    {children}
  </AppContainer>)
} 

export default Layout