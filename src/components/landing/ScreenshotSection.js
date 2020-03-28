import React from 'react'
import styled from 'styled-components'
import screenshotImg from '../../assets/screenshot.png'

const Wrapper = styled.div`
  margin-top: 50px;
`

const Header = styled.div`
  width: 503px;
  font-size: 38px;
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.29;
  letter-spacing: normal;
  color: #ffffff;
  margin-bottom: 28px;
  margin-top:30px;
`

const Description = styled.div`
  font-size: 16px;
  line-height: 1.88;
  color: #ffffff;
`

const CTA = styled.div`
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

const Content = styled.div`
  margin-left: 100px;
  margin-bottom: 200px;
`

const Screenshot = styled.div`
  width: 550px;
`

const ScrenshotSection = () => {
  return (<Wrapper className='d-flex'>
    <Screenshot>
      <img src={screenshotImg} alt='img'/> 
    </Screenshot>
    <Content>
      <Header>
        Maintance Providers The future is here…
      </Header>
      <Description>
        Between 67% and 90% of a product’s post-warranty servicing, maintenance and parts replacement is performed outside its OEM’s distribution network. This entails that the vast majority of a $2 Trillion market space is unstructured and reactive in nature, with inefficiencies throughout the parts distribution channels, and service quality. Our aim is to structure this market through digital transformation and innovative business models at its core.
      </Description>
    </Content>
  </Wrapper>)
} 

export default ScrenshotSection
