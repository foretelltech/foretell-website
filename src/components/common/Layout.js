import React from 'react'
import NavigationBar from './navigationBar'
import AppContainer from './appContainer'

const Layout = ({children, hideLinks}) => {
  return (<AppContainer>
    <NavigationBar hideLinks={hideLinks}/>
    {children}
  </AppContainer>)
} 

export default Layout