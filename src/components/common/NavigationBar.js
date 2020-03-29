import React from 'react'
import { Link } from 'gatsby'
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

const getPage = () => {
  if (typeof window !== 'undefined') {
    let url = window.location.href
    if(url[url.length-1] === '/')
      url = url.substring(0, url.length-1)
    const arr = url.split('/')
    if(arr.length > 3)
      return arr[arr.length - 1]
    else
      return 'home'
  }
  else {
    return 'home'
  }
}

const NavigationBar = ({ hideLinks}) => {
  return (<div className='position-relative w-100'>
    <Container className='d-flex 
    ign-items-center justify-content-between'>
      <Clickable onClick={() => { window.location='/' }}>
        <img draggable={false} src={logo} alt='logo'/>
      </Clickable>
      {!hideLinks &&
        <Locations className='d-flex align-items-center justify-content-between'>
          <Location isSelected={getPage() === 'home'}>
            <Link
              to='/'
              style={{
                color: `white`,
                textDecoration: `none`,
              }}>
            Home
            </Link>
          </Location>
          <Location isSelected={getPage() === 'mvp'}>
            <Link
              to='/mvp'
              style={{
                color: `white`,
                textDecoration: `none`,
              }}>
             MP-MVP
            </Link>
          </Location>
          <Location isSelected={getPage() === 'aboutUs'}>
            <Link
              to='/aboutUs'
              style={{
                color: `white`,
                textDecoration: `none`,
              }}>
            About Us
            </Link>
          </Location>
        </Locations>}
    </Container>
  </div>)
} 

export default NavigationBar