import React from 'react'
import NavigationBar from './NavigationBar'
import AppContainer from './AppContainer'

const Layout = ({children, hideLinks}) => {
  return (<AppContainer>
    <NavigationBar hideLinks/>
    {children}
  </AppContainer>)
} 

export default Layout