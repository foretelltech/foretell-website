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

const Locations = styled.div`
  color:white;
  width: 400px;
`

const Location = styled.div`
  font-size: 18px;
  line-height: 1.67;
  text-align: center;
  color: #ffffff;
  font-weight: ${props => {return props.isSelected? 'bold': ''}};
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  :hover {
    cursor: pointer;
    opacity: 0.7;
  }
`

const Clickable = styled.div`
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
  :hover {
    cursor: pointer;
    opacity: 0.7;
  }
`

const NavigationBar = ({ hideLinks}) => {
  return (<div className='position-relative w-100'>
    <Container className='d-flex align-items-center justify-content-between'>
      <Clickable onClick={() => { window.location="/" }}>
        <img draggable={false} src={logo} alt='logo'/>
      </Clickable>
      {!hideLinks &&
        <Locations className='d-flex align-items-center justify-content-between'>
          <Location isSelected={true}>Home</Location>
          <Location>MP-MVP</Location>
          <Location>About Us</Location>
        </Locations>}
    </Container>
  </div>)
} 

export default NavigationBar