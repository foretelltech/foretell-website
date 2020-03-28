import React from "react"
import styled from 'styled-components'
import gif from '../../assets/clip.gif'

const Header = styled.div`
  width: 994px;
  height: 110px;
  font-size: 52px;
  font-weight: bold;
  line-height: 1.06;
  text-align: center;
  color: #ffffff;
  margin-top: 100px;
  margin-bottom: 75px;
`

const Description = styled.div`
  width: 770px;
  height: 70px;
  font-size: 18px;
  line-height: 1.67;
  text-align: center;
  color: #ffffff;
  margin-bottom:75px;
`

const GIF = styled.div`
  
`

const HeaderSection = () => {
  return (<div className='w-100 d-flex flex-column align-items-center justify-content-center' style={{ marginTop: '90px' }}>
    <Header>
      We develop the future of technical data sharing and AI.
    </Header>
    <Description>
      Foretell is a technology startup developing the future of technical data sharing and AI-based predictive systems for connected physical products in the industrial space. 
    </Description>
    <GIF>
      <img src={gif} alt='gif'/>
    </GIF>
  </div>)
}

export default HeaderSection