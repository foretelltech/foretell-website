import React from 'react'
import styled from 'styled-components'
import logo from '../../assets/logo.svg'

const Container = styled.div`
  position:absolute;
  width: 100%;
  height: 105px;
  display: flex;
  align-items: center;
  text-align: center;
  padding: 0 20px;
`

const Links = styled.div`
  color:white;
`

const NavigationBar = () => {
  return (<div className='position-relative w-100'>
    <Container>
      <div>
        <img src={logo} alt='logo'/>
      </div>
      <Links>
      </Links>
    </Container>
  </div>)
} 

export default NavigationBar