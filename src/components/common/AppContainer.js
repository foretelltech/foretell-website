import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  width:100vw;
  font-family: 'Mont', sans-serif;
`

const Container = styled.div`
  width: 100%;
  top:0;
  margin:0;
  padding:0;
  max-width: 1200px;
`

const AppContainer = ({children}) => {
  return (<Wrapper className='d-flex justify-content-center'>
    <Container>
      {children}
    </Container>
  </Wrapper>)
} 

export default AppContainer