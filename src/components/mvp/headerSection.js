import React from 'react'
import styled from 'styled-components'
import screenShotImg from '../../assets/screenshot.png'

const Wrapper = styled.div`
  margin-top: 195px;
`

const Header = styled.div`
  width: 550px;
  font-size: 52px;
  font-weight: bold;
  line-height: 1.06;
  color: #ffffff;
  margin-bottom: 53px;
`

const Description = styled.div`
  width: 521px;
  height: 210px;
  font-size: 18px;
  line-height: 1.67;
  color: #ffffff;
`

const HeaderSection = () => {
  return (<Wrapper className='d-flex'>
    <div>
      <Header> Welcome to  the era of decentralized data </Header>
      <Description>
        Foretell is an early-stage, B2B technology startup developing the future of technical data sharing and 
        AI-based advanced predictive systems for connected physical products in the industrial space. Our goal is simple: to revolutionize the aftermarket of industrial products by enabling data-driven business models through digital transformation. 
      </Description>
    </div>
    <div className='ml-1'>
      <img draggable={false} src={screenShotImg} alt=''/>
    </div>
  </Wrapper>)
} 

export default HeaderSection