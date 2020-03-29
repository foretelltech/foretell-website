import React from 'react'
import styled from 'styled-components'

const Header = styled.div`
  width: 279px;
  height: 55px;
  font-size: 42px;
  font-weight: bold;
  line-height: 1.31;
  color: #ffffff;
`

const Description = styled.div`
  width: 671px;
  height: 90px;
  font-size: 18px;
  line-height: 1.67;
  color: #ffffff;
  margin-left:120px;
`

const Wrapper = styled.div`
  margin-top: 110px;
`

const Benefits = () => {
  return (<Wrapper className='d-flex align-items-center w-100'>
    <Header> Our Benefits </Header>
    <Description> Lorem Ipsum dolor sit amet is an early-stage, B2B technology startup developing the future of technical data sharing and AI-based advanced predictive systems for connected physical.</Description>
  </Wrapper>)
} 

export default Benefits